import assert from "node:assert/strict"
import { readFile, writeFile } from "node:fs/promises"
import { createRequire } from "node:module"
import test from "node:test"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

// The `locale` and `messages` props exist so a consumer can translate. They must never change what
// a consumer who passes neither sees: the markup below is the English output of 0.10.0, captured
// before the props were added, and the built package has to keep producing it byte for byte.
//
// Static markup (not a browser) is deliberate. It is the contract a server render hands to a
// client, it needs no Playwright, and it covers every attribute — including the ARIA names, which
// are the part of this change most easily broken without anything failing to compile.
//
// Regenerate with `UPDATE_I18N_GOLDENS=1 npm run test:boundaries` ONLY for an intentional change to
// the English output, and show the diff in the PR. A refactor that fails this is a bug in the
// refactor, not in the golden.

const require = createRequire(import.meta.url)
const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const goldenPath = resolve(repoRoot, "tests/fixtures/i18n-defaults.json")

const React = require("react")
const { renderToStaticMarkup } = require("react-dom/server")
const ui = require("../dist/index.js")

const h = React.createElement

// A fixed month and "today" keep the calendar from reading the clock.
const today = new Date(2026, 10, 11)
const calendarBase = {
  defaultMonth: today,
  today,
  startMonth: new Date(2026, 0, 1),
  endMonth: new Date(2026, 11, 31),
}

const columns = [
  {
    accessorKey: "name",
    header: ({ column }) => h(ui.DataTableColumnHeader, { column, title: "Name" }),
  },
  { accessorKey: "team", header: "Team", enableSorting: false },
]
const rows = Array.from({ length: 12 }, (_, i) => ({ name: `Person ${i + 1}`, team: "Ops" }))

const cases = {
  "date-picker: empty": () => h(ui.DatePicker, { id: "dp" }),
  "date-picker: labelled and disabled": () =>
    h(ui.DatePicker, { id: "dp", label: "Start date", disabled: true }),
  "date-picker: with a date": () =>
    h(ui.DatePicker, { id: "dp", date: new Date(2026, 10, 11) }),
  "date-range-picker: empty": () => h(ui.DateRangePicker, { id: "drp" }),
  "date-range-picker: one end": () =>
    h(ui.DateRangePicker, { id: "drp", dateRange: { from: new Date(2026, 0, 5) } }),
  "date-range-picker: full range": () =>
    h(ui.DateRangePicker, {
      id: "drp",
      dateRange: { from: new Date(2026, 0, 5), to: new Date(2026, 1, 9) },
    }),
  "calendar: dropdown caption": () =>
    h(ui.Calendar, { ...calendarBase, mode: "single", selected: today }),
  "calendar: label caption with week numbers": () =>
    h(ui.Calendar, { ...calendarBase, mode: "range", captionLayout: "label", showWeekNumber: true }),
  "upload: default": () => h(ui.Upload, {}),
  "upload: custom max size": () => h(ui.Upload, { maxSize: "5mb", accept: ".csv" }),
  "upload: uploading with a name": () =>
    h(ui.Upload, { state: "uploading", progress: 40, fileName: "staff.csv" }),
  "upload: uploading without a name": () => h(ui.Upload, { state: "uploading", progress: 0 }),
  "upload: uploaded with a name": () => h(ui.Upload, { state: "uploaded", fileName: "staff.csv" }),
  "upload: uploaded without a name": () => h(ui.Upload, { state: "uploaded" }),
  "upload: error": () => h(ui.Upload, { error: "That file is too large." }),
  "upload: caller title and description": () =>
    h(ui.Upload, { title: "Drop it", description: "Anything goes" }),
  "table-pager: default": () =>
    h(ui.TablePager, { page: 2, count: 53, pageSize: 10, onPageChange() {} }),
  "table-pager: every control": () =>
    h(ui.TablePager, {
      page: 3,
      count: 53,
      pageSize: 10,
      onPageChange() {},
      onPageSizeChange() {},
      showFirstLast: true,
      showPageReadout: true,
    }),
  "table-pager: custom rows label": () =>
    h(ui.TablePager, {
      page: 1,
      count: 8,
      pageSize: 5,
      onPageChange() {},
      onPageSizeChange() {},
      rowsPerPageLabel: "Items per page",
    }),
  "table-pager: empty": () =>
    h(ui.TablePager, { page: 1, count: 0, pageSize: 10, onPageChange() {} }),
  "pagination: numbered": () =>
    h(
      ui.Pagination,
      null,
      h(
        ui.PaginationContent,
        null,
        h(ui.PaginationItem, null, h(ui.PaginationPrevious, { href: "#1" })),
        h(ui.PaginationItem, null, h(ui.PaginationLink, { href: "#1" }, "1")),
        h(ui.PaginationItem, null, h(ui.PaginationLink, { href: "#2", isActive: true }, "2")),
        h(ui.PaginationItem, null, h(ui.PaginationEllipsis)),
        h(ui.PaginationItem, null, h(ui.PaginationNext, { href: "#3" })),
      ),
    ),
  "pagination: caller aria-labels": () =>
    h(
      ui.Pagination,
      { "aria-label": "Results" },
      h(
        ui.PaginationContent,
        null,
        h(ui.PaginationItem, null, h(ui.PaginationPrevious, { href: "#1", "aria-label": "Back" })),
        h(ui.PaginationItem, null, h(ui.PaginationNext, { href: "#3", "aria-label": "Forward" })),
      ),
    ),
  "data-table: default": () => h(ui.DataTable, { columns, data: rows, filterColumn: "name" }),
  "data-table: filter placeholder, no extras": () =>
    h(ui.DataTable, {
      columns,
      data: rows,
      filterColumn: "name",
      filterPlaceholder: "Find a person",
      showRowsSelected: false,
    }),
  "data-table: empty": () => h(ui.DataTable, { columns, data: [] }),
  "data-table: no pagination or toolbar": () =>
    h(ui.DataTable, { columns, data: rows, showPagination: false, showToolbar: false }),
}

const render = (name) => renderToStaticMarkup(cases[name]())

test("default English output is unchanged by the locale and messages props", async () => {
  if (process.env.UPDATE_I18N_GOLDENS) {
    const next = Object.fromEntries(Object.keys(cases).map((name) => [name, render(name)]))
    await writeFile(goldenPath, `${JSON.stringify(next, null, 2)}\n`)
    return
  }

  const golden = JSON.parse(await readFile(goldenPath, "utf8"))
  assert.deepEqual(
    Object.keys(golden).sort(),
    Object.keys(cases).sort(),
    "every case needs a golden, and every golden a case",
  )
  for (const name of Object.keys(cases)) {
    assert.equal(render(name), golden[name], `${name}: markup changed`)
  }
})

// The date pickers, calendar and pager are where a translation could leak into a *value*. A locale
// changes how a date is written, never which day it is.
test("a locale changes how a date reads, never which day it is", async () => {
  const { fr } = require("date-fns/locale")
  const date = new Date(2026, 10, 11)

  assert.match(renderToStaticMarkup(h(ui.DatePicker, { id: "dp", date })), /11 November 2026/)
  assert.match(
    renderToStaticMarkup(h(ui.DatePicker, { id: "dp", date, locale: fr })),
    /11 novembre 2026/,
  )

  const range = { from: new Date(2026, 0, 5), to: new Date(2026, 1, 9) }
  assert.match(
    renderToStaticMarkup(h(ui.DateRangePicker, { id: "drp", dateRange: range })),
    /05 Jan 2026 - 09 Feb 2026/,
  )
  assert.match(
    renderToStaticMarkup(h(ui.DateRangePicker, { id: "drp", dateRange: range, locale: fr })),
    /05 janv\. 2026 - 09 févr\. 2026/,
  )
})

// ---------------------------------------------------------------------------------------------
// Opting in. The strings below are bracketed placeholders rather than any language: the point is
// that every translatable string is reachable, and that a partial `messages` touches only the keys
// it names.
// ---------------------------------------------------------------------------------------------

const html = (element) => renderToStaticMarkup(element)
const ariaLabels = (markup) => [...markup.matchAll(/aria-label="([^"]*)"/g)].map((m) => m[1])

test("calendar messages rename the accessible names, and only the ones given", () => {
  const messages = {
    navigation: "[nav]",
    previousMonth: "[prev]",
    nextMonth: "[next]",
    monthDropdown: "[month]",
    yearDropdown: "[year]",
    weekNumber: "[week {weekNumber}]",
    weekNumberHeader: "[week header]",
    today: "[today {date}]",
    selected: "[{date} selected]",
  }
  const labels = ariaLabels(
    html(
      h(ui.Calendar, { ...calendarBase, mode: "single", selected: today, showWeekNumber: true, messages }),
    ),
  )

  for (const expected of [
    "[nav]",
    "[prev]",
    "[next]",
    "[month]",
    "[year]",
    "[week 45]",
    "[week header]",
  ]) {
    assert.ok(labels.includes(expected), `missing ${expected} in ${JSON.stringify(labels)}`)
  }
  assert.ok(
    labels.some((label) => /^\[\[today Wednesday, November 11th, 2026\] selected\]$/.test(label)),
    `today's cell should compose both qualifiers: ${JSON.stringify(labels)}`,
  )

  // A partial object leaves everything else as the English it was.
  const partial = ariaLabels(
    html(h(ui.Calendar, { ...calendarBase, mode: "single", messages: { nextMonth: "[next]" } })),
  )
  assert.ok(partial.includes("[next]"))
  assert.ok(partial.includes("Go to the Previous Month"))
  assert.ok(partial.includes("Choose the Month"))
})

test("a calendar's own `labels` prop still wins over `messages`", () => {
  const labels = ariaLabels(
    html(
      h(ui.Calendar, {
        ...calendarBase,
        mode: "single",
        labels: { labelNext: () => "from labels" },
        messages: { nextMonth: "from messages", previousMonth: "[prev]" },
      }),
    ),
  )
  assert.ok(labels.includes("from labels"))
  assert.ok(!labels.includes("from messages"))
  assert.ok(labels.includes("[prev]"))
})

test("upload messages reach every string it writes", () => {
  const messages = {
    uploadTitle: "[upload title]",
    uploadedTitle: "[uploaded title]",
    dropHint: "[hint {maxSize}]",
    uploadingDescription: "[uploading]",
    uploadedDescription: "[attached {fileName}]",
    fileFallback: "[a file]",
    uploadingStatus: "[{fileName} at {progress}]",
    selectFile: "[select]",
    removeFile: "[remove]",
    submit: "[submit]",
  }

  const idle = html(h(ui.Upload, { messages, maxSize: "5mb" }))
  assert.match(idle, /\[upload title\]/)
  assert.match(idle, /\[hint 5mb\]/)
  assert.match(idle, /\[select\]/)

  const uploading = html(h(ui.Upload, { messages, state: "uploading", progress: 40 }))
  assert.match(uploading, /\[uploading\]/)
  assert.match(uploading, /\[\[a file\] at 40\]/)

  const done = html(h(ui.Upload, { messages, state: "uploaded", fileName: "staff.csv" }))
  assert.match(done, /\[uploaded title\]/)
  assert.match(done, /\[attached staff\.csv\]/)
  assert.match(done, /\[remove\]/)
  assert.match(done, /\[submit\]/)

  const noName = html(h(ui.Upload, { messages, state: "uploaded" }))
  assert.match(noName, /\[attached \[a file\]\]/)
})

test("upload's title and description props still win over messages", () => {
  const markup = html(
    h(ui.Upload, {
      title: "Caller title",
      description: "Caller description",
      messages: { uploadTitle: "[title]", dropHint: "[hint]" },
    }),
  )
  assert.match(markup, /Caller title/)
  assert.match(markup, /Caller description/)
  assert.doesNotMatch(markup, /\[title\]|\[hint\]/)
})

test("table pager messages cover the range, readout and every button name", () => {
  const messages = {
    rowsPerPage: "[rows]",
    ofCount: "[of {count}]",
    pageReadout: "[page {page} of {pageCount}]",
    firstPage: "[first]",
    previousPage: "[prev]",
    nextPage: "[next]",
    lastPage: "[last]",
  }
  const markup = html(
    h(ui.TablePager, {
      page: 3,
      count: 53,
      pageSize: 10,
      onPageChange() {},
      onPageSizeChange() {},
      showFirstLast: true,
      showPageReadout: true,
      messages,
    }),
  )

  assert.match(markup, /21–30<\/span> \[of 53\]/)
  // The bold number keeps its emphasis wherever the template puts it.
  assert.match(
    markup,
    /\[page <span class="font-medium text-greyscale-text-title">3<\/span> of 6\]/,
  )
  assert.deepEqual(
    ariaLabels(markup).filter((label) => label.startsWith("[")),
    ["[rows]", "[first]", "[prev]", "[next]", "[last]"],
  )
  assert.match(markup, />\[rows\]<\/span>/)
})

test("table pager accepts function messages, and rowsPerPageLabel still wins", () => {
  const markup = html(
    h(ui.TablePager, {
      page: 1,
      count: 53,
      pageSize: 10,
      onPageChange() {},
      onPageSizeChange() {},
      rowsPerPageLabel: "Items",
      messages: {
        rowsPerPage: "[rows]",
        ofCount: ({ count }) => `[total ${count}]`,
      },
    }),
  )
  assert.match(markup, /\[total 53\]/)
  assert.match(markup, />Items<\/span>/)
  assert.doesNotMatch(markup, /\[rows\]/)
})

test("pagination messages rename the landmark, links and ellipsis; aria-label props still win", () => {
  const messages = {
    navigation: "[nav]",
    previous: "[Prev]",
    previousAriaLabel: "[prev label]",
    next: "[Next]",
    nextAriaLabel: "[next label]",
    morePages: "[more]",
  }
  const tree = (props) =>
    h(
      ui.Pagination,
      { messages, ...props.root },
      h(
        ui.PaginationContent,
        null,
        h(ui.PaginationItem, null, h(ui.PaginationPrevious, { href: "#", ...props.previous })),
        h(ui.PaginationItem, null, h(ui.PaginationEllipsis)),
        h(ui.PaginationItem, null, h(ui.PaginationNext, { href: "#" })),
      ),
    )

  const markup = html(tree({}))
  assert.deepEqual(ariaLabels(markup), ["[nav]", "[prev label]", "[next label]"])
  assert.match(markup, /\[Prev\]/)
  assert.match(markup, /\[Next\]/)
  assert.match(markup, /\[more\]/)

  const overridden = ariaLabels(
    html(tree({ root: { "aria-label": "Results" }, previous: { "aria-label": "Back" } })),
  )
  assert.deepEqual(overridden, ["Results", "Back", "[next label]"])
})

test("data table messages reach its empty state, count, filter, toolbar and pager", () => {
  const messages = {
    noResults: "[nothing]",
    rowsSelected: "[{selected} / {total} chosen]",
    filterPlaceholder: "[filter]",
    view: "[view]",
    pagination: { ofCount: "[of {count}]", nextPage: "[next]" },
  }

  const full = html(h(ui.DataTable, { columns, data: rows, filterColumn: "name", messages }))
  assert.match(full, /\[0 \/ 12 chosen\]/)
  assert.match(full, /placeholder="\[filter\]"/)
  assert.match(full, /\[view\]/)
  assert.match(full, /\[of 12\]/)
  assert.ok(ariaLabels(full).includes("[next]"))
  // The pager keys that were not named keep their English.
  assert.ok(ariaLabels(full).includes("Previous page"))

  assert.match(html(h(ui.DataTable, { columns, data: [], messages })), /\[nothing\]/)

  // The older prop wins over the message.
  const prop = html(
    h(ui.DataTable, { columns, data: rows, filterColumn: "name", filterPlaceholder: "Find", messages }),
  )
  assert.match(prop, /placeholder="Find"/)
})
