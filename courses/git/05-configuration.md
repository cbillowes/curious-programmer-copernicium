---
title: Configuration
parent: /courses/git
---

## Global configuration

There are a few things we need to configure before we continue. Some things will be configured for Git
and used **everywhere**. This is the global configuration. Other settings will be applied per project,
or locally to that project.

### Author

This will tell Git who you are. It is useful to know who made what change and when.
People working on or browsing through the repository can easily identify the author of the change.

Replace the values inside the quotes with your information and run them in your terminal.

```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

## Initialize a repository

Git isn't implicit so you need to set that up for your project. If you decide to create a repository, all you need to do
is **initialize** Git with the following command:

```bash
git init
```

This will create a repository and start tracking files. It does this by generating a hidden `.git` directory
which stores all the tracking data innards in there.

