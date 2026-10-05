# Contributing to Women in Open Source — Roadmaps & Resources

Thank you for your interest in contributing to the **Women in Open Source Club**! 💜

This repository is a community-maintained collection of structured learning roadmaps. We welcome contributions from everyone, especially first-time open-source contributors!

---

## 🌟 What can I contribute?

* 🗺️ **A new roadmap** for a topic or skill track
* 📚 **A resource** (tutorial, documentation, book, video)
* 💡 **A project idea** for hands-on learning
* 📈 **An improvement** to an existing roadmap
* 🔗 **A broken-link fix**
* ✏️ **A correction or clarification** in documentation

---

## 📂 Adding a Roadmap

New roadmaps should be created inside the `roadmaps/` folder with a dedicated subfolder and a `README.md` file:

```text
roadmaps/
└── topic-name/
    └── README.md
```

For example, to create a Web Development roadmap:

```text
roadmaps/
└── web-development/
    └── README.md
```

---

## 📐 Roadmap Format

Every roadmap should follow this standard structure:

```markdown
# [Topic] Roadmap

> Short description of the roadmap.

## 🎯 Prerequisites

What should someone know before starting?

## 🗺️ Learning Path

### 1. [Topic]

#### Learn

- [Resource](URL)

#### Build

Description of the project the learner should build.

#### You should learn

- Concept
- Concept
- Concept

---

### 2. [Topic]

#### Learn

- [Resource](URL)

#### Build

Description of the project.

#### You should learn

- Concept
- Concept

---

## 🚀 Projects

### Beginner

- Project

### Intermediate

- Project

### Advanced

- Project

## 📚 Additional Resources

- [Resource](URL)

## ✅ Completion Checklist

- [ ] Completed the learning path
- [ ] Built the projects
- [ ] Built a personal project

## 🤝 Contributing

Found something that could be improved?

See the repository's [CONTRIBUTING.md](../../CONTRIBUTING.md).
```

---

## 📋 Resource Guidelines

### Prefer 🟢

* Official documentation
* High-quality tutorials
* Practical / project-based resources
* Free resources where possible
* Beginner-friendly resources when appropriate
* Stable and maintained resources

### Avoid 🔴

* Spam or promotional links
* Affiliate links
* Duplicate resources
* Low-quality content
* Unmaintained resources when better alternatives exist

---

## 🔄 Pull Request Workflow

```text
Fork
 ↓
Create a branch
 ↓
Make your changes
 ↓
Commit
 ↓
Push
 ↓
Open a Pull Request
 ↓
Review
 ↓
Merge
```

### Git Commands for Beginners

1. **Fork and clone the repository**:

```bash
git clone https://github.com/YOUR-USERNAME/roadmaps-and-resources.git
cd roadmaps-and-resources
```

1. **Create a new branch**:

```bash
git checkout -b add-my-roadmap
```

1. **Make your changes, then stage and commit them**:

```bash
git add .
git commit -m "Add web development roadmap"
```

1. **Push to your fork**:

```bash
git push origin add-my-roadmap
```

1. **Open a Pull Request** on GitHub.

---

## ✅ Automated Checks

When you open a Pull Request, GitHub automatically checks your contribution.

The repository checks:

* Markdown formatting
* Links
* Pull Request requirements

You don't need to manually run these checks to contribute, but fixing reported issues before requesting review will make the process smoother. You will see the status of these checks at the bottom of your Pull Request page.\n
