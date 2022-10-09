---
title: How to sort stories alphabetically in Storybook (6.2)
devTo: https://dev.to/cbillowes/how-to-sort-stories-alphabetically-in-storybook-62-3e61
tags:
  - Technical
  - Tip
  - Storybook
  - JavaScript
---

```javascript:title=.storybook/preview.js
export const parameters = {
  options: {
    storySort: (a, b) => {
      const aId = getStoryId(a[1]);
      const bId = getStoryId(b[1]);
      return aId === bId
        ? 0
        : aId.localeCompare(bId, undefined, { numeric: true });
    }
  },
};
```
