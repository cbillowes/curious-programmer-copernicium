---
title: Branching and Merging
parent: /courses/git
---

We briefly touched on branches in the terminology section of this course.
I mentioned that you can think of Git like a tree. It can become a rather complicated
tree if you don't watch out.

The trunk of your tree is the main timeline of changes that is often referred to the "source of truth"
or "stable" branch. It is the branch - usually `main` or `master` - that is deployed to production.

You can branch off of trunk to make your own branch (common when using [Git Workflow][workflow])
that you can later either discard or **merge** back into trunk so that your changes are accessible
in the latest version of the source of truth.

![Git log with Graph](https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3600&q=80 "Git log with Graph")

> In the image above, the blue line is trunk while the pink and green lines are separate branches
> that have been branched off of trunk at a specific point in time.

## Create a new branch

1. You are going to want to checkout a branch at a given point of time in your timeline.
1. Look at the timeline using `git log`.
1. You can then `git checkout -b <branch-name>` if you want to checkout from where you are (latest changes) or
   you can `git checkout -b <branch-name> <SHA>` where SHA is the long commit number you see in your log.

## Switching branches

1. Checkout your branch again using `git checkout <branch-name>`.
1. Switch to another branch using `git switch <branch-name>`.

## Merging

The moment your branch needs to go back into the tree, you will need to merge it in.

> There is also rebase which I will not be covering here because it is a little more advanced.
> It rewrites your history which is destructive and can cause problems if you are not too sure about
> what you are doing. I will create a separate course for this.

Make sure you are on the branch where you want to merge your changes into. Eg. switch to the **main** branch
to merge your **awesome-stuff** branch into **main**.

```bash
git merge <branch-name>
```

Super simple, until all goes wrong with a merge conflict. More about that below.

## Delete old branches

It is important to cleanup old branches.

```bash
git branch -D <branch-name>
```

## Merge conflicts

> You can either use your terminal or a really good merge tool. I use the integrated merge tool inside VS Code.

:thinking: If you change a line, and I change the same line differently, which line should Git use?
In the snippet below, we have example output of what the conflict information will look like on a particular file.

```bash
❯ git merge awesome-stuff
Auto-merging index.html
CONFLICT (content): Merge conflict in index.html
Automatic merge failed; fix conflicts and then commit the result.
```

The merge process is paused as it requires manual intervention to resolve the conflict.

You will notice foreign text in files with conflicts. These are **conflict-resolution markers**
and look something like this:

```diff
<<<<<<< HEAD:index.html
<div id="footer">contact : email.you@email.dev</div>
=======
<div id="footer">
 please contact us at you@email.dev
</div>
>>>>>>> awesome-stuff:index.html
```

This complicated mambo-jumbo is actually packed with useful information. Let's dissect it:

1. `<<<<<<< HEAD` indicates that the version in HEAD is everything that is above the =======.
   That means that it is the current change of content that is on the branch that you are on.
1. `>>>>>>> awesome-stuff` and everything below ======= is the content from the `awesome-stuff` branch.
   That means that it is the change of content on the incoming branch. (Branch being merged in)
1. `index.html` indicates the name of the file where the conflict is happening.
1. You are expected to remove the chevrons, equal signs and adjust the content to be correct.
   VS Code tries to help you out so that you don't have to manually change the file.
   You can either Accept Current Change, Accept Incoming change or Accept Both Changes.

Once you have resolved a merge conflict, you will need to

1. save the change
1. stage the file
1. commit the merge
1. push your change

## References

- [Git Branching - Basic Branching and Merging][branching]
- [Git Tools - Advanced Merging][advanced-merging]

[workflow]: https://www.atlassian.com/git/tutorials/comparing-workflows
[branching]: https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging
[advanced-merging]: https://git-scm.com/book/en/v2/Git-Tools-Advanced-Merging
