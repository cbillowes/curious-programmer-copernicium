---
title: How to recover a file from another branch in Git
devTo: https://dev.to/cbillowes/how-to-recover-a-file-from-another-branch-in-git-30p
tags:
  - Technical
  - Tip
  - Git
  - Terminal
---

```
git show branch:filename.ext > path/to/file.ext
```

Where branch can be any ref including a branch name, tag, HEAD.

Thanks to this [Stack Overflow](https://stackoverflow.com/questions/7856416/view-a-file-in-a-different-git-branch-without-changing-branches) reference.
