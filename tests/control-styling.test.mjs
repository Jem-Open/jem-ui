import assert from "node:assert/strict"
import { createRequire } from "node:module"
import test from "node:test"

// Pins the control styling jem-hub used to carry as a pnpm patch on 0.9.0, now upstream. Hub drops
// the patch when it bumps; this is what stops a later restyle from quietly undoing what the patch
// was for. Class names, not computed colours: a re-valued token keeps its class, and the token
// values themselves are held by text-token-contrast.test.mjs.

const require = createRequire(import.meta.url)
const React = require("react")
const { renderToStaticMarkup } = require("react-dom/server")
const ui = require("../dist/index.js")
const h = React.createElement
const html = (element) => renderToStaticMarkup(element)

test("empty controls draw their outline from --control-border-default, not the decorative divider", () => {
  for (const [name, markup] of [
    ["Input", html(h(ui.Input))],
    ["Checkbox", html(h(ui.Checkbox))],
    ["RadioGroupItem", html(h(ui.RadioGroup, null, h(ui.RadioGroupItem, { value: "a" })))],
  ]) {
    assert.match(markup, /border-\[--control-border-default\]/, `${name} outline`)
    assert.doesNotMatch(markup, /border-\[--greyscale-border-default\]/, `${name} divider token`)
  }
})

test("Input's placeholder uses the caption token, which passes AA, not the disabled one", () => {
  const markup = html(h(ui.Input))
  assert.match(markup, /placeholder:text-\[--greyscale-text-caption\]/)
  assert.doesNotMatch(markup, /placeholder:text-\[--greyscale-text-disabled\]/)
  assert.match(markup, /focus:border-\[--navy-700\]/)
})

test("checked checkbox and radio are navy-outlined, with a navy tick", () => {
  const checkbox = html(h(ui.Checkbox))
  assert.match(checkbox, /data-\[state=checked\]:border-\[--navy-900\]/)
  assert.match(checkbox, /data-\[state=checked\]:text-\[--navy-900\]/)

  const radio = html(h(ui.RadioGroup, null, h(ui.RadioGroupItem, { value: "a" })))
  assert.match(radio, /data-\[state=checked\]:border-\[--navy-900\]/)
  assert.match(radio, /data-\[state=checked\]:bg-\[--pink-50\]/)
})

test("accordion triggers use the darker pink for hover and open", () => {
  const markup = html(
    h(
      ui.Accordion,
      { type: "single", collapsible: true },
      h(ui.AccordionItem, { value: "a" }, h(ui.AccordionTrigger, null, "Question")),
    ),
  )
  assert.match(markup, /hover:text-\[--pink-1100\]/)
  assert.match(markup, /\[&amp;\[data-state=open\]\]:text-\[--pink-1100\]/)
  assert.doesNotMatch(markup, /--pink-500/)
})
