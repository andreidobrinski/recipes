# Adding a recipe to the list

## Adding a New Recipe

1. Create a folder in `/content/blog` with your recipe's name
2. Add an `index.mdx`

## Adding Frontmatter

At the top of your `index.mdx`, add the following:

```
---
title: Name of your recipe
date: '2015-05-01' // year-month-day
authorName: 'Your Name'
authorLink: 'https://yourlink.com'
---
```

## Adding the Steps

Make sure to include headings for `## Main Ingredients` and `## Steps`

Here is an example of how to use the checklist component with MDX

```js
<List>
  {[
    'Item one',
    'Item two',
    'Item three'
  ]}
</List>
```
