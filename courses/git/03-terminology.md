---
title: Terminology
parent: /courses/git
---

## Terminal

A command line interface tool that let's you _talk_ to your computer by interacting with various commands and utilities.

## Repository

> From Wikipedia: A data structure that stores metadata for a set of files or directory structure.

You are essentially **tracking** a **working directory** of files in a **local repository** and it is stored on your machine only.
You can safely make changes to your code without impacting other developers.
Your changes will eventually go to the server which is known as the **remote repository**.

Git isn't implicitly configured on projects so you will need to set that up. If you decide to create a repository, all you need to do
is **initialize** Git with the following command:

```bash
git init
```

This will create a repository and start tracking files. It does this by generating a hidden `.git` directory
which stores all the tracking data innards in there.

## Pull, fetch and push

## Commit

Remember when I said that Git will **track** your files? When you **commit** a **change** then you are telling
Git to remember what happened at that point in time. Essentially, you are **officially** adding it to the Git repository.

You can consider commits to be checkpoints or snapshots of the current state of affairs. There is no limit to the number
of commits you can make but there are a few [guidelines](/blog/why-i-create-atomic-commits-in-git/) and [other guidelines](/blog/how-to-craft-your-changes-into-small-atomic-commits-using-git/) and etiquette that we will get into later.

## Branch

You can think of Git like a tree.

Imagine your timeline of changes as you commit to your repository. This all happens on a **branch**.
The main line of development is typically referred to as **trunk** (of the tree) or by its name of **master** or more recently **main** depending.

You can **deviate** from the main line by creating your own **branch** where you can release a new feature, experiment, do work-in-progress or basically whatever you want, still push it to your remote repository without impacting others.

```bash
git checkout -b <branch>
```

You will need to be able to switch between branches. To do so, assuming your working directory is clean enough for it to switch:

```bash
git switch <branch>
```

## HEAD vs ref

## Git log vs reflog

The history of all your commits is known as the log and we can go back and forth between commits to see the different revisions.

```bash
git log
```

```bash
git log origin..HEAD
```

Reference logs, or "reflogs", record when the tips of branches and other references were updated in the local repository.
Reflogs are useful in various Git commands, to specify the old value of a reference.
For example, HEAD@{2} means "where HEAD used to be two moves ago", master@{one.week.ago} means
"where master used to point to one week ago in this local repository", and so on.

```bash
git reflog
```
