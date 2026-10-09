# Git & GitHub Roadmap

## Prerequisites

- You can open and use a terminal (cd, ls, making foldders).
- You have Git installed, check with `git --version`. If you don't have it yet, search "install git" for your OS and grab it.
- A free [GitHub account](https://github.com/signup).

You don't need to know any programming to start. A folder with a couple of JS or text files is enough to practice everything here.

## Learning Path

### 1. What Git Actually Is

Git was made by Linus Torvalds, the same guy who made the Linux kernel. He needed a way to collaborate with people on that project, so he built git as basically a side project. He's a legend in the field.

Git is a **distributed version control system**. Let's break that down word by word.

**Version control**: a version is a snapshot of your code at a particular point in time. Git is like a time machine, it helps you manage all the different versions of your code. In one version a file might exist, in the next version it might be gone, git tracks all of that.

**Distributed**: every developer has their own full copy of the codebase on their own machine. If you and a friend are working on a project, you both have your own copy locally, and git is what lets you sync those copies up later.

So in short, git:

- Tracks every change to every file over time
- Lets multiple people work on the same project at once
- Keeps a full history of every change, so if you break something you can always go back to the last version that worked

#### You should learn

- Git vs GitHub (local tool vs hosting website)
- Why "distributed" matters for collaboration

---

### 2. First Time Setup

These next three commands you only run once per machine, when you're setting git up for the first time.

```bash
git config --global user.name "yourname"
git config --global user.email "you@example.com"
git config --global init.defaultBranch main
```

The name and email get attached to every commit you make, so when you work with other people they can see who made which change. By default git names its starting branch `master`, but GitHub and most of the industry use `main` now, so this last command just switches the default.

#### Build

Run `git --version` to confirm git is installed, then run the three config commands above with your own name and email.

#### You should learn

- `git config --global user.name` / `user.email`
- Why this is one time setup, not per project

---

### 3. Tracking Files Locally

Start by turning a folder into a repo:

```bash
git init
```

This creates a hidden `.git` folder. You won't normally touch it directly, but it's where all the version history and timeline info actually lives. If you ever want to see exactly what's inside and how it works under the hood, I wrote a blog post on it: [Git under the hood](https://www.pranjalk.tech/blogs/git-under-the-hood).

Now make a file, say `hello.js`. If you check `git status`, it'll show up as **untracked**. That means git has no idea this file exists, if you edit it, git won't notice at all. To start tracking it:

```bash
git add hello.js      # stage one file
git add .              # stage everything that's untracked or changed at once
git commit -m "add hello.js"
```

The commit message exists so other people (and future you) know why a change was made. "added a chatbot to the signup page" is useful, "stuff" is not.

Once you've made a few commits, these become useful:

```bash
git status             # shows what's staged, unstaged, untracked
git log                # full commit history: commit id, author, date, message
git log --oneline      # same thing, compact
```

#### Build

Create a project folder, run `git init`, add a `hello.js` file and commit it. Then add two more files at once with `git add .` and commit again. Keep running `git status` between steps so you can see files move from untracked to staged to committed.

#### You should learn

- Untracked vs staged vs committed
- `git add` and `git commit -m`
- `git status` and `git log`

---

### 4. Time Travel: HEAD and Checkout

`HEAD` is just git's way of saying "where you currently are." Normally it points at your latest commit on your current branch.

Every commit in `git log` has a commit id. You can jump to any old commit with:

```bash
git checkout <commit-id>
```

This moves `HEAD` to point at that commit, and your files will match exactly what they looked like at that point in time. Run `git checkout main` (or whatever your branch is called) to come back to the latest version.

One thing to notice: if you had an untracked file sitting around, checking out an old commit won't touch it, because git was never tracking it in the first place. Only tracked files change when you move between commits.

You won't use raw `git checkout <commit-id>` very often day to day, but understanding it makes the whole "versions" idea click.

#### Build

Make 3 commits in a row, each adding a new file. Copy the commit id of the first commit from `git log`, check it out, and confirm only that first file exists. Then checkout back to `main` and confirm everything is back.

#### You should learn

- What `HEAD` means
- `git checkout <commit-id>` to jump to an old snapshot

---

### 5. Keeping Secrets Out: .gitignore

Say you have a file like `.env` that stores API keys or passwords. You don't want that pushed to GitHub, especially if your repo is public, because then anyone can see it.

The problem: `git add .` adds everything that's untracked, including `.env`. The fix is a `.gitignore` file. Any file or path listed inside it will never be picked up by git, no matter how many times you run `git add .`.

```text
.env
node_modules/
```

`node_modules` is another common one, not for secrets but because it can be hundreds of MBs of dependencies that don't need to live in your repo history.

#### Build

Create a `.env` file with a fake secret inside, add a `.gitignore` with `.env` listed in it, then run `git add .` and confirm with `git status` that `.env` never gets staged.

#### You should learn

- Why secrets shouldn't be committed
- `.gitignore` basics

---

### 6. GitHub: Your Repo in the Cloud

Git itself doesn't need the internet, branching and committing all happens locally. GitHub is where the internet part comes in. Think of it like your Google Drive, but for code, and it's what makes collaborating with other people possible.

To make a repo on GitHub: click New, give it a unique name, a short description, choose public or private (public means anyone on the internet can see your code, even find it through Google, private means only you and people you invite can see it), and for now skip the template, `.gitignore` and license options.

Once it's created, copy the repo URL and bring it down to your machine:

```bash
git clone <repo-url>
cd <repo-folder>
```

Note, you don't need to run `git init` after cloning, git already set that up for you.

Now work as usual, add a file, `git add .`, `git commit -m "..."`, and then send it up to GitHub:

```bash
git push
```

Refresh the GitHub page and your file, along with your commit message, shows up there. GitHub is really just a web interface over the same git history, `git log` locally and the commits list on GitHub are showing you the same thing.

#### Build

Create a new repo on GitHub, clone it locally, add a file, commit it, and `git push`. Confirm it shows up on the GitHub page.

#### You should learn

- Public vs private repos
- `git clone` and `git push`

---

### 7. Collaborating With Other People

To let someone else work on your repo, go to Settings → Collaborators, add their GitHub username, and invite them. They'll get an email, once they accept, they can clone your repo and push to it.

```bash
git clone <repo-url>      # they get your code
# ...make changes, add a new file...
git add .
git commit -m "added by friend"
git push                  # their changes go up
```

Now on your side, to get their changes down:

```bash
git pull
```

`git pull` is basically the opposite of `git push`, instead of sending your commits up, it brings down commits that other people pushed.

#### Build

Add a classmate as a collaborator on a test repo, have them clone it and push a file, then `git pull` on your side and confirm you see their file.

#### You should learn

- Adding collaborators on GitHub
- `git pull` as the reverse of `git push`

---

### 8. Branches

Think of your project as a tree. A branch is a parallel version of your codebase, it goes off and does its own thing regardless of what other branches are doing. This is how two people avoid stepping on each other, you work on your branch, your friend works on theirs, and nothing shows up on the other person's branch until you merge.

```bash
git branch                   # list branches
git checkout -b myfeature    # create a new branch and switch to it
git push                     # push your current branch up (first time you may need git push -u origin myfeature)
```

Whatever branch you create, it starts out as an exact copy of whatever branch you branched off from. If you add a file on your branch and push it, it will only show up on that branch on GitHub, not on `main`, until it's merged.

To bring `main`'s latest changes into your branch while you're still working:

```bash
git checkout myfeature
git merge main
git push
```

This keeps your branch up to date without throwing away your own work.

#### Build

Create two branches, add a different file on each, push both. Confirm on GitHub that each branch only shows its own file, and `main` has neither yet.

#### You should learn

- `git branch` and `git checkout -b`
- `git merge main` to update your branch with the latest from main

---

### 9. Pull Requests

A pull request (PR) is how you ask for your branch to be merged into another branch, usually `main`. It's done on GitHub, not the terminal.

On the repo page, GitHub will usually show a prompt to open a PR for a branch you just pushed, or you can go to the Pull Requests tab and create one yourself, comparing your branch to `main`. GitHub checks whether the merge can happen automatically. If there's no conflict, you just click merge and your branch's changes land on `main`.

#### Build

Push a branch with a new file, open a pull request comparing it to `main`, and merge it. Then checkout `main` locally and `git pull` to confirm the new file shows up there too.

#### You should learn

- Opening and merging a PR on GitHub
- Merging on GitHub still needs a local `git pull` to see it

---

### 10. Merge Conflicts

A conflict happens when two people change the same lines in the same file on different branches. Git can't guess which version you actually want, so it stops and asks you to decide.

You'll usually see this while resolving a PR with conflicts on GitHub, or locally when you merge. The conflict shows up marked like this in the file:

```text
<<<<<<< HEAD
your version of the line
=======
their version of the line
>>>>>>> other-branch
```

You edit the file by hand, keep whatever combination of lines actually makes sense, delete the `<<<<<<<`, `=======`, `>>>>>>>` markers, then stage and commit (or mark as resolved on GitHub, then commit the merge).

The best way to avoid this entirely is simple, try not to have two people editing the same file in the same place at the same time. Conflicts get painful fast on a big codebase.

#### Build

With a friend, both edit the same line of the same file on two different branches, push both, then open a PR and resolve the conflict by hand.

#### You should learn

- Reading the `<<<<<<<` / `=======` / `>>>>>>>` markers
- Resolving a conflict and committing the result

---

### 11. Undoing Mistakes: git revert

If you've pushed something that shouldn't have gone out, `git revert` makes a new commit that undoes an old one, without erasing the history. It's the safe way to undo something that's already shared with other people.

```bash
git revert <commit-id>
```

#### Build

Make a commit that breaks something on purpose, push it, then `git revert` it and push again. Confirm the file is back to how it was before, and that both commits still show up in `git log`.

#### You should learn

- `git revert` adds a new commit instead of deleting history

---

## Projects

### Beginner

- Make a repo, add a `.gitignore`, commit a few files, and push to GitHub.
- Build a profile README (the special `username/username` repo).

### Intermediate

- Pick someone from your club, add them as a collaborator, and work together on one repo using separate branches and PRs.
- On purpose, create a merge conflict with a partner and resolve it.

### Advanced

- Contribute to an open source repo, look for a `good first issue` label, fork it, branch, and open a real PR.
- Set up a repo with branch protection so PRs are required before merging to `main`.

## Additional Resources

- [Learn Git Branching, interactive](https://learngitbranching.js.org/)
- [Git under the hood, my blog on how the .git folder actually works](https://www.pranjalk.tech/blogs/git-under-the-hood)

## Completion Checklist

- [ ] Can explain what distributed version control means
- [ ] Comfortable with the daily loop: `status → add → commit → push`
- [ ] Created a repo on GitHub, cloned it, pushed and pulled
- [ ] Added a collaborator and pulled their changes
- [ ] Created a branch, pushed it, and merged it through a PR
- [ ] Resolved a merge conflict by hand
- [ ] Used `git revert` to undo a bad commit
