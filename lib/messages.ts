import * as React from "react"

/**
 * Overridable copy for a component's built-in text and accessible names.
 *
 * Library-neutral on purpose. jem-ui takes no dependency on an i18n library: a consumer resolves
 * its own strings (next-intl, a plain object, anything) and hands over the result, so the library
 * works the same whichever one an app picks.
 *
 * A message is either
 *   - a **string**, with `{name}` placeholders where a value belongs. Strings are the form to use
 *     from a Server Component, because a string survives the server-to-client boundary and a
 *     function does not; or
 *   - a **function** from those values to text, for a client component that wants its own
 *     formatter (an ICU plural, a number format) to decide the wording.
 *
 * Nothing here knows about languages. Every component carries its English text as the default, so
 * passing no messages renders what it always has.
 */
export type Message<Values extends object = Record<never, never>, Result = string> =
  | string
  | ((values: Values) => Result)

const PLACEHOLDER = /\{(\w+)\}/g

function interpolate(template: string, values: Record<string, unknown>): string {
  return template.replace(PLACEHOLDER, (placeholder, name: string) =>
    name in values ? String(values[name]) : placeholder,
  )
}

/**
 * The text a message resolves to. `message` is what the consumer passed, `fallback` the English
 * default. An omitted or `undefined` message falls back per key, so a partial `messages` object
 * overrides only what it names.
 */
export function resolveMessage<Values extends object>(
  message: Message<Values> | undefined,
  fallback: Message<Values>,
  values?: Values,
): string {
  const chosen = message ?? fallback
  return typeof chosen === "function"
    ? chosen(values as Values)
    : interpolate(chosen, (values ?? {}) as Record<string, unknown>)
}

/**
 * As `resolveMessage`, for text with an element inside it — the bold number in "Page 3 of 6". A
 * string template is split at its placeholders and the element dropped in where the name falls, so
 * a language that puts the number somewhere else keeps its emphasis.
 */
export function resolveRichMessage<Values extends Record<string, React.ReactNode>>(
  message: Message<Values, React.ReactNode> | undefined,
  fallback: Message<Values, React.ReactNode>,
  values: Values,
): React.ReactNode {
  const chosen = message ?? fallback
  if (typeof chosen === "function") return chosen(values)

  const parts: React.ReactNode[] = []
  let cursor = 0
  for (const match of chosen.matchAll(PLACEHOLDER)) {
    const [placeholder, name] = match
    const index = match.index ?? 0
    if (index > cursor) parts.push(chosen.slice(cursor, index))
    parts.push(name in values ? values[name] : placeholder)
    cursor = index + placeholder.length
  }
  if (cursor < chosen.length) parts.push(chosen.slice(cursor))

  return React.createElement(
    React.Fragment,
    null,
    ...parts.map((part, i) => React.createElement(React.Fragment, { key: i }, part)),
  )
}
