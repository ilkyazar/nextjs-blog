---
title: 'Trunk-based Development'
date: '2023-06-29'
image: 'trunk-based-development.png'
excerpt: 'In the earlier days of software development, tracking and managing changes to the code was not this efficient. Developers had two versions of the software, which they can track changes or reverse them.
As development environments matured, we now have two main development models to help development teams work more efficiently: Gitflow and trunk-based development.'
isFeatured: true
---

# Trunk-based Development

In the earlier days of software development, tracking and managing changes to the code was not this efficient. Developers had two versions of the software, which they can track changes or reverse them.

As development environments matured, we now have two main development models to help development teams work more efficiently: Gitflow and trunk-based development.

![Trunk-based Development](trunk-based-development.png)

## What is trunk-based development?

Assuming you are familiar with the Git community, “trunk” actually corresponds to the “main” development branch, in the source control branching model.

In trunk based development, the trunk is assumed to be always ready to deploy and without issues. Developers make smaller and faster updates to the trunk. It has short-lived branches with smaller commits.

## Benefits of trunk-based development

In this version control management practice, developers merge smaller updates to the trunk. As a result, you can guess that this practice accelerates the continuous integration process. Because the branches with smaller commits will be integrated into the shared branch frequently. This makes it easy to deploy and fix the code quickly.

Code reviews will be easier, because the small changes will be easier to inspect. Complex merges and conflicts will be avoided as well.

Also, the codebase will always be releasable which results in continuous delivery. Since automated tests run after each time new code is merged into the trunk, the project will be ensured to work at all times without issues. So, the team has the ability to frequently deploy to production.

## Disadvantages of trunk-based development

You might already think that this approach could have some drawbacks, due to manual effort to maintain the trunk will be increased.

Yes, developers need to wait for the automated builds and tests before merging these small chunks.

And regression tests don’t happen on every merge.

## Introducing feature flags

Feature flags, also known as feature toggles, help us to enable turn features on or off. This is one of the parts that should be taken care of, that if some code is committed to the trunk which has not completely finished developing, the end user should not see this change on live. So, toggling this feature is crucial at this point, to hide the unfinished code in the deployment without users seeing it.

## Gitflow vs trunk-based development

In Gitflow, there are long-lived feature branches. Merging into the main branch is delayed. And there are more branches to manage, which increases the complexity.

It is suitable for teams who favor parallel development of the long-lived feature branches. If longer periods between the releases is tolerated, Gitlow could be adapted.

When you have a new application and you are trying to rapid the development, trunk-based development will be a better choice though. In order to make the application running with minimal changes and functionality, it makes more sense to allow the developers to integrate this functionality faster.

Another criteria to consider when choosing between version control management, is the experience of the development team. If you have a lot of junior developers in the team, consider the mentoring and reviewing process. But as much as the experience level is high, trunk-based development can be chosen.

## Conclusion

All in all, trunk-based development comes with a lot of advantages. It helps the development teams to iterate rapidly and improves collaboration in the team, because it speeds up the reviews and promotes faster integration. Thus, developers have more control in every step of the code change and how the software is delivered at the end.

---

## _Read This Article On Medium_

_[Trunk-based Development - Medium post by me](https://medium.com/@ilkyaz.arabaci/trunk-based-development-a8ec6b3abed0)_

_Cheers,_

_ilkyaz_
