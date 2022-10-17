---
title: Basic commands
parent: /courses/git
date: 2022-10-10
modified: 2022-10-17
---

## Commit

Remember when I said that Git will **track** your files? When you **commit** a change then you are telling
Git to remember what happened at that point in time. You are **officially** adding it to the Git repository, or
if you want to think of it differently, saving the change to Git.

You can consider commits to be checkpoints or snapshots of the current state of affairs. There is no limit to the number
of commits you can make but there are a few [guidelines][etiquette-1]
and [other guidelines][etiquette-2] and etiquette that we will get into later.

In order to see what is going on in your working directory:

```bash
❯ git status

On branch main
Your branch is ahead of 'origin/main' by 8 commits.
  (use "git push" to publish your local commits)

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   courses/git/01-vcs.md
        modified:   courses/git/02-about-git.md
        modified:   courses/git/03-terminology.md
        modified:   courses/git/04-installation.md
        modified:   courses/git/index.md

no changes added to commit (use "git add" and/or "git commit -a")
```

Interesting! Note the following information I can see from this output:

- I am working on branch **main**.
- My local branch has 8 commits more than the remote repository **origin/main**.
- I have changes that have not been committed to Git (5 files)

### Diff

A diff is a visual set of changes that have been made to a file.
It will show you what has been deleted and added.
It lets you easily compare changes between different versions of files or actual commits.

```diff:title=untitled.html
   <div
-    className="bg-color-1 text-color-1-script m-0 px-0 py-1"
+    className="relative bg-color-1 text-color-1-script m-0 px-0 py-1"
   >
```

```
git diff <thing>
# use the filename of the file that you are working on
# use the commit SHA of a commit in the history
# use the term HEAD to view changes since the last commit
# use the branch name that you are interested in (more on branches later)
# use <commit1> <commit2> if you want a diff different commits
# use the above command in conjunction with a filename to see how that file has evolved over the two commits eg. <commit1> <commit2> untitled.html
# use <commit1>..<commit2> if you want to diff two commits relative to a common ancestor
# use origin/<branch>..<branch> if you want to see the differences in your local repository relative to origin (the remote repository)
```

### Staging

Before you can commit a change you will need to **stage** your changes first. This is like a fancy quality assurance intermediary
step where you get to see exactly what changes you want to commit before saving it to Git. Interrogate your diffs to make sure you are
not committing hocus-pocus or sensitive information that could get you or your company into trouble.

> **Once it goes into the Git history, it is there forever!**

```bash
git add <filename1> <filename2> <filename3>
```

```bash
❯ git add courses/git/01-vcs.md
❯ git status
On branch main
Your branch is ahead of 'origin/main' by 8 commits.
  (use "git push" to publish your local commits)

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   courses/git/01-vcs.md

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   courses/git/02-about-git.md
        modified:   courses/git/03-terminology.md
        modified:   courses/git/04-installation.md
        modified:   courses/git/index.md
```

In this output I can see that `courses/git/01-vcs.md` has been **staged** (changes to be committed).

Git offers additional commands that we can run to our benefit when we want to **undo** things.
We will get into the `git push` command later.

```bash
# Unstages one or more staged files
git restore --staged <file>...

# Stages one or more files from the dirty working directory
git add <file>...

# Discards (undoes) changes to one or more files from the dirty working directory
git restore <file>...
```

### Commit message

You bundle a Git commit with a message that is visible in the log. This let's you - and others - know what changed.

> This is where some more [etiquette][etiquette-3] comes in to play.

Some guidelines include:

1. Separate subject from body with a blank line if you want to add more information in the body
1. Limit the subject line to 50 characters
1. Capitalize the subject line
1. Do not end the subject line with a period
1. Keep the subject line in the present-tense to save on characters
1. Choose descriptive words
1. Elaborate your commit in the body and add reference links where applicable
1. Wrap the body at 72 characters
1. Use the body to explain what and why vs. *how

```bash
git commit -m "A simple commit message"
```

> #### Good messages are important! :eyes:
> When you follow bad Git habits of creating silly, non-descriptive or invalid messages, you run the risk
> of confusing the hell out of other people and making it difficult to identify when a change was
> brought into the system and could be the potential root cause of it breaking which wastes valuable time
> as the developers need to dig into each commit to try figure out what happened.

> #### Vim :scream:
> If you commit without the `-m` switch, your default text editor will pop up and you will be able to enter your
> message in there. Just a heads up, if VIM opens and you are unfamiliar with VIM. Here is a [quick guide][vim] to
> get you started. To save, press `:` to go into the command mode, press `w` to write and then press `q` to quit.
> If you don't want to save then it is `:q!` - note the exclamation mark.

## History

The history of all your commits is known as the **log** and we can go back and forth between commits to see the different revisions.

```bash
git log
```

```bash
git log origin..HEAD
```

## Branch

You can think of Git like a tree.

Imagine your timeline of changes as you commit to your repository. This all happens on a **branch**.
The main line of development is typically referred to as **trunk** (of the tree) or by its name of **master** or more recently **main** depending.

You can **deviate** from the main line by creating your own **branch** where you can release a new feature, experiment, do work-in-progress or basically whatever you want, still push it to your remote repository without impacting others.

```bash
git checkout -b <branch>
git branch
```

You will need to be able to switch between branches. To do so, assuming your working directory is clean enough for it to switch:

```bash
git switch <branch>
```

## Git syncing

### Remote repositories

You would have had to set up a **remote** repository to connect to. This is a repository - often in the Cloud - hosted
on GitLab, GitHub, BitBucket or some other cool or custom place repositories can be hosted.

> Some services offer public or private hosting of repositories. A public repository is available to anyone and is
> often considered Open Source whereas private repositories often have sensitive domain logic that developers
> or companies don't want to make public.

Remote repositories are useful because they foster collaboration and provide aid during disaster recovery (imagine your machine goes kaboom).

```bash
git remote show origin
```

```bash
git remote add <name> <url>
# name = default is usually origin
# made a spelling mistake?
git remote rename <old-name> <new-name>
```

### Clone

As Git is distributed, and as with [Dolly][dolly-the-sheep] the sheep, you will need to make a clone of the repository on your local machine
so that you can work on it.

```bash
git clone <url>
```

> There are two ways to clone: using SSH and using HTTPS.
> It is highly advised that you use SSH which you will learn in the **Installation** chapter of this course.

## Push

Once you have triple-quadruple checked your commit(s) to make sure you have a log of quality commits then you
are ready to go public with them. To do so, you will need to take your changes and give them to the remote repository
in the gentle form of a push.

```bash
git push <remote> <branch>
# git push origin master
```

### Pull

While people make changes to the remote repository, your local branch stays the same UNTIL you **pull** the new changes.
When you pull, you will download the remote content for the active local branch and immediately execute a fancy term called `git merge` (`git rebase` or do a fast forward).

> If you choose to merge, a merge commit is created for the the new remote content but don't worry too much about merging, rebasing and such for now.
> We will get into that later.

```bash
git pull <remote> <branch>
# git pull origin master
```

### Fetch

A **fetch** will get stuff from the remote repository so that you can see what
other people have done. It is important to note that the files in your local repository are not affected.
You need to explicitly checkout that work. That means that fetching is a safe way to review commits before integrating them with
your local repository.

```bash
git fetch
```

## Recap

In this video, you'll go over all the important stuff you need to know to get started using Git.
Take a look at git add, git commit, git branch, git checkout, and git merge! [Here][notion-notes] are the video notes.

`youtube:https://www.youtube.com/embed/USjZcfj8yxE`

In this video, you'll go over some vocabulary used in Git.

`youtube:https://www.youtube.com/embed/n-p1RUmdl9M`

---

## References

- [What is Gitignore and How to Add it to Your Repo][gitignore] - freecodecamp.com
- [Gitignore templates][gitignore-templates] - GitHub
- [Git Diff][git-diff] - Initial Commit
- [Vim - Quick Guide][vim] - Tutorials Point
- [Git Cloning][git-clone] - Atlassian
- [Git Syncing][git-syncing] - Atlassian
- [Ubuntu on WSL][wsl]

[gitignore]: https://www.freecodecamp.org/news/gitignore-what-is-it-and-how-to-add-to-repo
[gitignore-templates]: https://github.com/github/gitignore
[git-diff]: https://initialcommit.com/blog/git-diff
[etiquette-1]: /blog/why-i-create-atomic-commits-in-git/
[etiquette-2]: /blog/how-to-craft-your-changes-into-small-atomic-commits-using-git/
[etiquette-3]: https://curiousprogrammer.dev/blog/the-importance-of-git-history/
[vim]: https://www.tutorialspoint.com/vim/vim_quick_guide.htm
[dolly-the-sheep]: https://dolly.roslin.ed.ac.uk/facts/the-life-of-dolly/index.html
[git-clone]: https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-clone
[git-syncing]: https://www.atlassian.com/git/tutorials/syncing
[wsl]: https://ubuntu.com/wsl
[iterm]: https://iterm2.com/
[notion-notes]: https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbkNOSXJUNGNzZW80NlFzeEtNanR2VGFVeEMtZ3xBQ3Jtc0ttMS1FMzBXVzJtWi1GZlJIWm1COFBEOTlRcEMyRFplU0UyZEtRZjZndlloeVdmaHBzaXc3OEVkNVJuVDdsTTJ6OUQ0dXZiLUFrbnRUZ0lpTG95bUl4bUxydlZwNXpTcm1qdzdIbEhaNFpqbFBMakplVQ&q=https%3A%2F%2Fwww.notion.so%2FIntroduction-to-Git-ac396a0697704709a12b6a0e545db049&v=USjZcfj8yxE
