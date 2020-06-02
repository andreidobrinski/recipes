# Adding a recipe to the list

## Create the files

1. Create a folder in `/content/blog` with your recipe's name
2. Add an `index.mdx` to the folder
3. Add an image to the folder

## Add Frontmatter

At the top of your `index.mdx`, add the following:

```
---
title: Name of your recipe
date: '2015-05-01' // year-month-day
image: './your-image-name.jpg'
authorName: 'Your Name'
authorLink: 'https://yourlink.com'
---
```

## Add the Steps

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
