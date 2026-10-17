# Python Automation Roadmap

> Learn Python by making your computer do the repetitive work: sort
> files, clean spreadsheets, collect information, prepare reports, and
> handle routine browser or desktop tasks. Start small, build things you
> would actually use, and add complexity only when you need it.

![Distracted Boyfriend meme: doing the same task manually instead of
automating it](https://i.imgflip.com/1bij.jpg)

## Prerequisites

You don't need to know Python already. You do need a computer, a little
patience, and a repetitive task you'd like to stop doing by hand.

-   Install [Python](https://www.python.org/downloads/) and an editor
    such as [VS Code](https://code.visualstudio.com/).
-   Learn to run a script from the terminal. Keep projects in separate
    folders and use a virtual environment (`python -m venv .venv`).
-   Use dummy files and test accounts while learning. Start with a **dry
    run** that previews changes before moving files, sending emails, or
    clicking buttons.

**How to follow this:** work through the first two sections, then choose
the task that sounds useful to you. You don't need to master every
library. The goal is to recognise a repetitive workflow, break it into
steps, and make it reliable.

## Learning Path

### 1. Python basics: teach your script to think

#### Learn

-   [Automate the Boring Stuff with Python --- free online
    book](https://automatetheboringstuff.com/3e/) --- start with
    Chapters 1--8 for variables, conditions, loops, functions, lists,
    dictionaries, and strings.
-   [Python tutorial](https://docs.python.org/3/tutorial/) --- use this
    when you want a second explanation or a reference.

Automation is mostly ordinary programming applied to useful chores. A
loop handles a batch of files; a condition decides what to do with each
one; a function keeps a step reusable. You don't need fancy algorithms
to save hours of repetitive work.

#### Build

**Downloads folder organiser:** sort files into `Images`, `Documents`,
`Archives`, and `Other`. First print the proposed moves, then add a
confirmation step before actually moving anything.

#### You should learn

-   `if`, `for`, functions, lists, dictionaries, imports, and
    exceptions.
-   `pathlib` for paths and `shutil` for copying or moving files.
-   How to read an error message and test a script on a temporary
    folder.

------------------------------------------------------------------------

### 2. Files, folders, and text patterns

This is one of the quickest ways to get a useful automation working.
Real folders tend to be messy; filenames and documents rarely follow one
perfect format.

#### Learn

-   [Automate the Boring Stuff --- Chapter 9: Regular
    Expressions](https://automatetheboringstuff.com/3e/chapter9.html)
-   [Automate the Boring Stuff --- Chapters 10--11: Files and
    folders](https://automatetheboringstuff.com/3e/)
-   [Python `pathlib`](https://docs.python.org/3/library/pathlib.html)
    and [Python `re` (regex)](https://docs.python.org/3/library/re.html)
-   [regex101](https://regex101.com/) --- try patterns and inspect what
    they match.

Regex is a way to find text by pattern. For example, `r"\bINV-\d+\b"`
can find invoice IDs like `INV-1042`. It is useful for filenames,
reference numbers, dates, and logs; it is not magic validation for every
possible email address or date.

#### Build

**Receipt and file detective:** scan a folder of sample receipts and
text files, extract invoice IDs and dates with regex, rename files
consistently, and create a CSV index. Put files that don't match the
expected pattern into a `NeedsReview` folder instead of guessing.

#### You should learn

-   `re.search`, `re.findall`, `re.sub`, capture groups, and raw strings
    like `r"\d+"`.
-   File extensions, safe renaming, duplicate detection, and
    `try/except`.
-   The golden rule: preview changes, keep a log, and don't delete
    originals until you trust the result.

![Drake meme: manually opening 200 files vs searching them with a
script](https://i.imgflip.com/1g8my4.jpg)

------------------------------------------------------------------------

### 3. CSV, Excel, Google Sheets, and data cleanup

Spreadsheets are everywhere: attendance, expenses, inventory, survey
responses, schedules, and reports. Python is especially useful when you
keep receiving the same spreadsheet in slightly different shapes.

#### Learn

-   [Automate the Boring Stuff --- Excel, Google Sheets, and SQLite
    chapters](https://automatetheboringstuff.com/3e/)
-   [pandas getting
    started](https://pandas.pydata.org/docs/getting_started/index.html)
    --- clean, filter, combine, and summarise tables.
-   [openpyxl documentation](https://openpyxl.readthedocs.io/en/stable/)
    --- edit Excel workbooks and formatting.
-   [Google Sheets API
    quickstart](https://developers.google.com/sheets/api/quickstart/python)

A handy rule: use **pandas** when the task is mainly data cleaning or
analysis; use **openpyxl** when you need to preserve or control workbook
sheets, cells, styles, and formulas. Use the Google Sheets API when the
spreadsheet lives online and needs to be updated programmatically.

#### Build

**Spreadsheet rescue tool:** combine monthly CSV or Excel files,
standardise column names and dates, flag duplicate rows and missing
values, and export a cleaned workbook with a summary sheet. Never
overwrite the original input files.

#### You should learn

-   Filtering, grouping, joins, missing values, and date parsing.
-   When to use CSV, Excel, Google Sheets, or SQLite.
-   How to check row counts and totals before and after a
    transformation.

**Project inspiration:** [pandas
examples](https://github.com/pydata/pandas/tree/main/doc) and the
[openpyxl documentation
examples](https://openpyxl.readthedocs.io/en/stable/tutorial.html) are
good places to borrow small patterns and adapt them.

------------------------------------------------------------------------

### 4. Web scraping and browser automation

Sometimes the information you need is on a web page. Sometimes you need
to operate a website. Those are related, but different jobs.

#### Learn

-   [Automate the Boring Stuff --- Chapter 13: Web
    Scraping](https://automatetheboringstuff.com/3e/)
-   [Requests](https://requests.readthedocs.io/en/latest/) --- fetch
    pages and APIs.
-   [Beautiful
    Soup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/) ---
    parse HTML.
-   [Playwright for Python](https://playwright.dev/python/) --- automate
    a browser using page elements and locators.
-   [Scrapy
    tutorial](https://docs.scrapy.org/en/latest/intro/tutorial.html) ---
    a more structured scraping framework.

Use an API if one is available. Use Requests and Beautiful Soup for
straightforward pages; use Playwright when you need a real browser or
the page depends on JavaScript. Check the site's terms, avoid
overloading it, and don't bypass logins, CAPTCHAs, paywalls, or other
access controls.

#### Build

**Price or event change watcher:** check a permitted public page or
practice site on a schedule, extract a title and price/date, store
snapshots in CSV or SQLite, and notify yourself when the value changes.
Include a timeout and a useful message when the site layout changes.

#### You should learn

-   HTML, CSS selectors, HTTP status codes, timeouts, and retries.
-   Static HTML vs content rendered by JavaScript.
-   Why stable Playwright locators are usually better than clicking
    fixed screen coordinates.

**Real project to inspect:** [Scrapy's examples and
tutorial](https://github.com/scrapy/scrapy) show how a crawler is
structured. Start with the tutorial rather than copying a large crawler
wholesale.

![Confused math meme: wondering why a scraper broke after a website
changed](https://i.imgflip.com/1h7in3.jpg)

------------------------------------------------------------------------

### 5. PDFs, Word documents, images, and OCR

A common office task is turning a pile of documents into structured
information. The catch is that a PDF may contain selectable text,
scanned images, tables, or a mixture.

#### Learn

-   [Automate the Boring Stuff --- PDF and Word
    documents](https://automatetheboringstuff.com/3e/)
-   [pypdf](https://pypdf.readthedocs.io/en/stable/) --- extract text,
    split, and merge PDFs.
-   [python-docx](https://python-docx.readthedocs.io/en/latest/) ---
    create and edit Word files.
-   [Pillow](https://pillow.readthedocs.io/en/stable/) --- crop, resize,
    and process images.
-   [pytesseract](https://github.com/madmaze/pytesseract) and [Tesseract
    OCR](https://github.com/tesseract-ocr/tesseract) --- recognise text
    in scanned images.

OCR turns pixels into likely text; it can misread characters, especially
in blurry scans. Treat extracted values as suggestions, check confidence
where available, and send uncertain documents for review.

#### Build

**Document intake assistant:** watch an input folder for new PDFs,
extract text, use regex to find a reference number and date, rename the
file, and add a row to a tracking spreadsheet. If no reference number is
found, flag the document instead of inventing one.

#### You should learn

-   Text extraction vs OCR, and why scanned PDFs need different
    handling.
-   How to validate extracted fields against expected formats.
-   How to keep the original document and a record of what your script
    changed.

**Project inspiration:**
[OCRmyPDF](https://github.com/ocrmypdf/OCRmyPDF) is a real tool that
adds searchable text layers to scanned PDFs. It's a bigger project, but
its purpose is a useful example of combining document processing and
OCR.

------------------------------------------------------------------------

### 6. Email and Gmail automation

Email automation can save time on inbox triage, recurring reports, and
notifications. Start by reading and sorting messages; sending
automatically should come later.

#### Learn

-   [Automate the Boring Stuff --- Chapter 20: Email and
    notifications](https://automatetheboringstuff.com/3e/)
-   [Gmail API Python
    quickstart](https://developers.google.com/workspace/gmail/api/quickstart/python)
-   [Gmail API search
    guide](https://developers.google.com/workspace/gmail/api/guides/filtering)
-   [Python `email`
    package](https://docs.python.org/3/library/email.html) --- work with
    message content.

For Gmail, use Google's API and OAuth rather than storing your account
password in a script. Begin with read-only access, keep credentials out
of Git, and request only the permissions you need.

#### Build

**Inbox briefing bot:** search messages matching a Gmail label or query,
collect sender, subject, date, and selected snippets, then produce a
daily local digest. The next step could create reply drafts, but leave
sending behind a manual confirmation.

#### You should learn

-   Gmail search queries, labels, message metadata, and OAuth.
-   The difference between reading a message, creating a draft, and
    sending it.
-   How to handle API errors and protect tokens and personal data.

------------------------------------------------------------------------

### 7. Desktop automation: keyboard, mouse, and apps

Desktop automation is useful when an application has no API and no
practical way to automate it directly. It is also more fragile than
working with files or APIs: windows move, dialogs appear, and a click
can land in the wrong place.

#### Learn

-   [Automate the Boring Stuff --- Chapter 23: Controlling the Keyboard
    and Mouse](https://automatetheboringstuff.com/3e/)
-   [PyAutoGUI
    documentation](https://pyautogui.readthedocs.io/en/latest/) ---
    screenshots, clicks, keyboard input, and image matching.
-   [PyAutoGUI
    quickstart](https://pyautogui.readthedocs.io/en/latest/quickstart.html)
-   [Playwright](https://playwright.dev/python/) --- for browser
    workflows, prefer page locators when possible.

Choose the least fragile method available: an API first, browser/DOM
automation for websites, and screen-based mouse/keyboard control when
you really need it. Use PyAutoGUI's fail-safe, add pauses and checks,
and keep a way to stop the script immediately.

#### Build

**Desktop paperwork assistant:** combine the document intake project
with a small review workflow. After extracting a reference number and
updating the tracker, open the relevant folder or test application for a
human to review. Use GUI clicks only for a clearly defined final step;
never let a beginner script submit payments or delete important files
unattended.

#### You should learn

-   `pyautogui.click`, `write`, `hotkey`, screenshots, and fail-safe
    behaviour.
-   Why focus, screen scaling, timing, and unexpected dialogs can break
    a macro.
-   How to log each action and ask for confirmation before consequential
    actions.

**Project inspiration:** [PyAutoGUI's examples and
documentation](https://github.com/asweigart/pyautogui) are a good
starting point for small macros. Build one that opens a text editor and
enters a test note before trying it on a real workflow.

![This is fine meme: the macro clicked the wrong thing because the
window moved](https://i.imgflip.com/wxica.jpg)

------------------------------------------------------------------------

### 8. Scheduling, notifications, and making scripts reliable

A script that works once is a useful experiment. A script that can run
again tomorrow, recover from an error, and explain what happened is an
automation tool.

#### Learn

-   [Automate the Boring Stuff --- scheduling and launching
    programs](https://automatetheboringstuff.com/3e/)
-   [Python `logging`](https://docs.python.org/3/library/logging.html)
-   [Python `argparse`](https://docs.python.org/3/library/argparse.html)
    --- give your script command-line options.
-   [Watchdog](https://python-watchdog.readthedocs.io/en/stable/) ---
    react to filesystem changes.
-   [Schedule](https://schedule.readthedocs.io/en/stable/) --- simple
    in-process scheduling.

For a script that must run while you're away, use your operating
system's task scheduler. A Python scheduling loop only runs while the
process is alive.

#### Build

**Personal automation toolbox:** turn your best scripts into one
command-line tool with subcommands such as `organize`, `report`, and
`inbox`. Add logs, a dry-run option, clear errors, and a short summary
of what changed. Schedule one safe job only after it works reliably by
hand.

#### You should learn

-   Logging, command-line arguments, configuration, retries, and
    timeouts.
-   Idempotency: running the same job twice should not create duplicate
    work.
-   How to handle partial failures and avoid silently skipping files.

------------------------------------------------------------------------

## Projects

Pick one that solves an actual annoyance. It's better to finish a small,
reliable tool than start five ambitious ones.

### Beginner

-   **Downloads janitor:** `pathlib` + `shutil` + `logging`; sort files
    with preview and an undo log.
-   **Receipt detective:** `re` + `csv`; extract dates and invoice IDs
    from sample text files.
-   **Screenshot librarian:** `Pillow` + hashes; make thumbnails and
    identify duplicate screenshots.

### Intermediate

-   **Spreadsheet rescue tool:** `pandas` + `openpyxl`; merge monthly
    files, flag missing values, and create a clean report.
-   **Inbox briefing bot:** Gmail API + regex + SQLite; collect matching
    emails into a digest without sending anything.
-   **Document intake assistant:** `watchdog` + `pypdf` + regex +
    `openpyxl`; process PDFs, update a tracker, and flag uncertain
    matches.

### Advanced

-   **Personal admin command centre:** `argparse` + `logging` + SQLite;
    run selected jobs, track results, and show a daily summary.
-   **Public-page change monitor:** Requests/Beautiful Soup or
    Playwright + SQLite + email notification; track changes without
    hammering the site.
-   **Human-approved desktop workflow:** PDF extraction + OCR +
    spreadsheet updates + PyAutoGUI; automate the boring steps but pause
    for approval before important actions.

## Tricks That Make Automation Better

-   **Automate the stable part first.** If the task changes every time,
    write down the steps before coding.
-   **Preview before changing things.** Add `--dry-run` to file-moving,
    renaming, and batch-editing scripts.
-   **Prefer APIs over clicks.** APIs are usually more reliable and
    easier to test than screen coordinates.
-   **Make failures visible.** Log the filename or record that failed,
    not just "something went wrong."
-   **Keep raw inputs.** Write results to a new folder or file until you
    trust the output.
-   **Test awkward cases.** Empty files, duplicate names, missing
    columns, slow pages, and unexpected pop-ups are where automation
    breaks.
-   **Don't overengineer.** A 30-line script that reliably saves you 20
    minutes every week is a win.

## Additional Resources

-   [Automate the Boring Stuff with Python --- free online
    book](https://automatetheboringstuff.com/3e/)
-   [Invent with Python](https://inventwithpython.com/) --- more free
    books and project ideas from Al Sweigart.
-   [Python standard library](https://docs.python.org/3/library/)
-   [Real Python tutorials](https://realpython.com/) --- deeper
    explanations when you need them.
-   [Awesome Python](https://github.com/vinta/awesome-python) --- a
    broad library catalogue; choose tools for a task rather than
    installing everything.
-   [Automate the Boring Stuff
    workbook](https://inventwithpython.com/automate3workbook/) --- extra
    exercises if you want more practice.

## Completion Checklist

-   [ ] Wrote and ran small Python scripts from the terminal.
-   [ ] Built a file organiser with a dry-run mode.
-   [ ] Used regex to extract a pattern from messy text.
-   [ ] Cleaned a spreadsheet without overwriting the source.
-   [ ] Built either a web watcher or a document-processing script.
-   [ ] Tried a Gmail API workflow with safe permissions.
-   [ ] Built one desktop macro and tested its fail-safe.
-   [ ] Added logs, useful errors, and a way to preview changes.
-   [ ] Built one personal automation that solves a real problem.

## Contributing

Found something that could be improved?

-   Add resources that are practical, accessible, and relevant to the
    section.
-   Prefer real project links that readers can inspect and learn from.
-   Keep the roadmap focused: one good resource and one build per stage
    is better than a wall of links.

See the repository's [CONTRIBUTING.md](../../CONTRIBUTING.md).
