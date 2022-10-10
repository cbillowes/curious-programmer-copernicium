---
title: Configuration
parent: /courses/git
---

## Global configuration

### Author information

Replace the values inside the quotes with your information and run them in your terminal.
This will tell Git who you are which is useful to know who made what change and when.
People working on the repository can easily identify and contact you should they need to.

```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

## Repository configuration

Git isn't implicit so you need to set that up. If you decide to create a repository, all you need to do
is **initialize** Git with the following command:

```bash
git init
```

This will create a repository and start tracking files. It does this by generating a hidden `.git` directory
which stores all the tracking data innards in there.

