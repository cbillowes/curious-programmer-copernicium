---
title: CI/CD
parent: /courses/git
---

1. Stands for Continuous Integration and Continuous Delivery.
1. Falls under what we call **DevOps** which is a fancy term for combining development with the operations side of things.
1. It's about automation where you will automate the build, testing and deployment of your application - including infrastructure provisioning.
1. The **pipeline** of things lets developers make changes to code and get it out without manually intervening.
1. If done right, downtime is minimized and code releases are faster.

## Continuous integration

Imagine we've all made changes to the code and we have now successfully merged the code into the main branch of our tree of change.
How do we know that your feature doesn't break my feature?

Continuous Integration is the practice - or art - of **integrating** all your code in the repository and creating a deployable **build**.
Automated linting and code analysis can ensure a higher code quality and suggest code smell fixes and such.
Automated tests will run to test that features haven't regressed.
By firing these things frequently, you can safely build confidence when introducing change.

By integrating with the main branch - by merging your code - frequently you minimize the chances of getting merge conflicts
and you are getting the benefits of analyzing and testing your code with all changes instead of just yours. You
also get your features into the main build which can then be released.

## Continuous delivery

Now that you have a deployable build, it is ready to be deployed to production. Some companies have different environments
to check the feature before deploying to production.

> ### Deployment
> But wait? Let's first cover the term **deploy**. Let's think of a website. When you run the website you are developing, you will spin up a web server
> on localhost which serves your pages and are then accessible on your browser on `localhost`.
> The files that are served are often copied or generated in or to a specific directory in your project. That directory is your build and it is the
> thing that the web server will understand. When you want to deploy code, it means that you want to build your project into something more concrete and
> copy those files across to the hosted server (not localhost).

There are often feature environments, staging or pre-production environments and then production environments. You build will be copied from one place to the other.
There are can be complicated scenarios where you will need to deploy to multiple servers that get served through one place known as a load balancer.
You may need to automatically provision resources and services on the cloud or within a data center.
Contingencies are put in place so that you can easily **rollback** to a previous build.

Whatever you need to do, this step will involve scripts and automated steps to achieve these tasks.

## Pipelines

A pipeline - at a minimum - should probably:

1. Test the quality of the software and offer useful feedback for improvement (lint and analyze the integrated code)
1. Boost confidence when introducing change (run a suite of automated tests)
1. Allow for faster to market releases (seamless, one-click deployment steps)

`youtube:https://www.youtube.com/embed/Jav4vbUrqII`

---

This course will give you an overview of what we just learned and dive into
using Git with GitLab repositories. Watch the video in YouTube to
jump between different lessons in the description.

`youtube:https://www.youtube.com/embed/4lxvVj7wlZw`

## References

- [What is CI/CD?][ci-cd] - GitLab
- [CI/CD Pipelines Explained][pipelines] - TechTarget

[ci-cd]: https://about.gitlab.com/topics/ci-cd/
[pipelines]: https://www.techtarget.com/searchsoftwarequality/CI-CD-pipelines-explained-Everything-you-need-to-know
