// .markdownlint-cli2.mjs

export default {
  globs: ["**/*.md"],
  ignores: ["node_modules/**", ".git/**"],

  config: {
    default: true,

    // MD013/line-length: Disabled
    // Rationale: Long URLs, resource tables, and descriptions shouldn't trigger lint failures.
    "line-length": false,

    // MD033/no-inline-html: Disabled
    // Rationale: HTML elements like badges, <details>, and align attributes are sometimes used for design.
    "no-inline-html": false,

    // MD024/no-duplicate-heading: Disabled
    // Rationale: We intentionally reuse headings like "Learn" and "Build" for each topic in the roadmap. These are not true duplicates but rather repeated structural elements across different sections.
    "no-duplicate-heading": false,

    // MD009/no-trailing-spaces: Enabled
    // Rationale: Catches unnecessary trailing whitespace at line ends.
    "no-trailing-spaces": true,

    // MD001/heading-increment: Enabled
    // Rationale: Enforces logical heading progression (h1 -> h2 -> h3).
    "heading-increment": true,

    // MD007/ul-indent: Configured to 2 spaces
    // Rationale: Enforces consistent, readable bullet list indentation.
    "ul-indent": {
      indent: 2
    },

    // MD034/no-bare-urls: Enabled
    // Rationale: Encourages descriptive markdown links over raw URL strings.
    "no-bare-urls": true
  }
};
