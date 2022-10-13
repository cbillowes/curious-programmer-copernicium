---
title: Version Control Systems
parent: /courses/git
date: 2022-10-10
modified: 2022-10-14
abstract:
  Our objective is to learn what Version Control Systems (VCS) are, why they are useful and used in our field of work.
---

## How things used to work

A little blast to the past:
Once upon a time we used to make backups of our code.
Then we made backups of those backups.
And then those backups had backups.
It got hairy!

Deployments and website publishing was even more of a nightmare.
We would do an old-school [FTP](https://www.techtarget.com/searchnetworking/definition/File-Transfer-Protocol-FTP) of our files to a server somewhere
and hope nothing went wrong.

Some problems would surface:

- We didn't know what the most recent **working version** of a particular file in the sea of backups was.
- We didn't know what changed in the file before it stopped working.
- We didn't know which file to target when a breaking change was introduced.
- We didn't know what version of the website was live.
- We couldn't easily recover from lost or damaged files.
- Teams couldn't effectively and safely collaborate.

## A different approach

### Version Control System

Enter the Version Control System - or VCS. It is a system - in the form of software - that will track and manage
files in your file system over time. You can see how tracked files evolve as you gain access to different
versions of it. This empowers you as an individual and teams to collaborate effectively and safely together.
You can develop and release work in an automated and efficient way.

`youtube:https://www.youtube.com/embed/zbKdDsNNOhg`

### Why is it useful?

- It **enforces discipline** to ensure that team members are developing and collaborating in a particular way.
- It **archives versions** instead of just making backups and backups and backups of the same files.
- It maintains **historical** information by tracking different versions of the files.
- It enables **collaboration** because files are stored on a server and can be checked out for editing.
- You can **recover** from accidental deletions or edits because of the versions that were archived.
- It will **conserve disk space** because the same files are not being backed up each time.

### Different systems

Some popular systems include:

- Git
- CVS
- SVN
- Mecurial
- Bazaar
- Monotone

`youtube:https://www.youtube.com/embed/2ReR1YJrNOM`

## References

- [What is Version Control](https://www.atlassian.com/git/tutorials/what-is-version-control) - Atlassian
- [6 Version Control Systems Reviewed](https://www.smashingmagazine.com/2008/09/the-top-7-open-source-version-control-systems/) - Smashing Magazine - Glen Stansberry
