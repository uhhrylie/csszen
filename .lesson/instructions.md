# Overview

The goal for this project is to create a style.css file that contains a unique design of your choosing.

*Honors students will create three different designs*.

**All of your work will take place in the style.css file (and style2.css and style3.css)**

## 1. Brainstorm a Concept

A good first step is to come up with a concept for your design. Take a look at some of the original examples from the original [css zen garden](http://csszengarden.com/) and from the [IACS zen garden](https://iacs-zen-garden.netlify.app/) for some ideas of what's possible. In terms of design inspiration, I recommend looking at some photographs for inspiration, or picking a color scheme. [https://coolors.co/](https://coolors.co/) or any other color-scheme generator can be a useful brainstorming tool. 

## 2. Start Implementing your Ideas

The next step is to start implementing your ideas. I'd begin with something simple, like importing some custom fonts or creating colors for backgrounds and foregrounds.

## Reaching Into HTML with CSS

The first step to any modification will be finding the element you want to modify in HTML and then "reaching in" using CSS. 

Let's start at the beginning: the document contains a header in the HTML that looks like this:

```html
<header role="banner">
  <h1><span class="iacs">IACS</span> CSS Zen Garden</h1>
  <h2>The Beauty of <abbr title="Cascading Style Sheets">CSS</abbr> Design</h2>
</header>
```

If we want to add a background color to the entire header, all we need to do is select the `<header>` tag, which we can do with the word `header` in css. Every time you select an element in CSS, I recommend starting with a simple rule that will make it easy to see your selection works, such as changing the item to be red and throwing a border around it, like this:

```css
header {
  color: red;
  border: 1px solid;
}
```

If you want to reach into a more specific item, you can use the *class* selector, which involves putting a period (.) before the class name. So, for example, to select the word IACS above, which is wrapped in a `<span class="iacs">` tag, we could do the following:

```css
.iacs {
  background-color: blue;
  border: 1px solid;
}
```

We can also use the inheritence selector in CSS to select items that are *inside* of other items by simply separating selectors with a space. So if we want to select any abbreviation inside the header, for example, we can do so like this:

```css
header abbr {
  background-color: green;
  border: 1px solid;
}
```

At this point, I actually recommend focusing on styling your header, which can do a lot to give a page personality. For example, you could make a header a fixed bar with a background image, like this:

```css
header {
  height: 132px;
  padding: 24px;
  background : url('your-cool-image.png');
}
```

Or you could go for a *full* "splash" screen effect, like this:
```css
header {
  height: 100vh;
  width: 100vw;
  background: url('your-splash-image.png');
  background-position: center;
}
```

## Using Grid for Layout

Here's the CSS example from class for
a possible grid layout:

```css
.page-wrapper {
  display: grid;
  border : 1px solid blue;
  /* These template areas lay out
  the structure of the grid */
  grid-template-areas : 
    "head head ."
    ". menu menu"
    "c1 c1 ."
    ". c2 c2";
  /* This lays out the "sizes" of your
  columns - remove if you don't want
  it presized */
  grid-template-columns: 
    100px 300px 100px;
  width: 500px;  
  margin : auto;
}

header {
  color : red;
  border: 10px solid;
  grid-area: head;
}

.main {
  color: green;
  border: 10px solid;
  grid-area : c2;
}

.sidebar {
  color: purple;
  border: 10px solid;
  grid-area : menu;
}

.intro {
  color: teal;
  border: 10px solid;
  grid-area: c1;
}

```

## Adding content with pseudo-elements

To add an image or other content into the page, you can use a pseudo-element, which lets you add a new element into HTML before or after existing elements using CSS.

First, we select the element or elements we want to use to insert items into our HTML. I always recommend just turning things red first to make sure you have your selectors right. 

For example:

```css

header {
  color: red
}
```

Or

```css
h3 {
  color : red
}
```

Next up, you'll add content *before* or *after* the element. Here I recommend just inserting some text first so you can see this working, like this:

```css
header::after {
  content: 'hello?';
}
```
Or
```css
h3::before {
  content: 'Wow! ::==>';
}
```

Once you've successfully selected the item, you can turn it into an image by turning it into a block (or inline-block) element, giving it a width and a height, and setting the image properties correctly, like so:

```css

header::before {
  content: ' ';
  display: inline-block;
  width: 150px;
  height: 150px;
  background-size: cover;  
}
```

At this point, you will have your item displaying. You can now position it anyway you like.

## Using CSS Variables

CSS Variables can provide a nice way to reference values throughout your code. You *define* a CSS variable using `--variable-name` (it must be prefixed with two hyphens). You then can *use* a variable using the `var` function, like this `var(--variable-name)`.

Some common ways to use CSS variables would be to define color schemes and to create scalable sizing themes.

You can also use `calc()` to do basic math using variables.

Here's an example of a color scheme:

```css
:root {
  --dark : #123212;
  --light : #fcf89a;
  --grey : #7a7a7a;
  --darkgrey : #232323;
}
```

You would then see that color scheme used like this:

```css
h3 {
  background-color: var(--darkgrey);
  color: var(--light);
}
```

Here's an example of a sizing scheme created with variables:

```css

:root {
  --text : 16px;
  --big : 36px;
  --pad : calc(var(--text)/2);
  --border : calc(var(--text)/8);
  --margin : var(--pad);
}
```

You would then see that scheme used like this:

```css
header {
  font-size: var(--big);
  padding: var(--pad);
  border-bottom: var(--border) solid var(--dark);
  margin-bottom: var(--margin);
}

p {
  margin-top: 0;
  margin-bottom: var(--margin);
  font-size: var(--text);
}

ul {
  padding-left : var(--pad);
}
```

CSS variables can feel like extra typing, so may or may not be worth it depending. What's nice about them is they enable you to create a number of settings at the top of the file which you can then easily tweak.

You can also potentially adjust those settings with media queries to adjust settings for different screen sizes.

## Media Queries / Responsive Design

You can use media queries to change settings for different screen sizes. There are nice examples [on w3schools here](https://www.w3schools.com/css/css_rwd_mediaqueries.asp).

### Using Grid Layouts

Let's imagine you've used a grid layout on the .page-wrapper

Perhaps your default layout looks like this:
```css
.page-wrapper {
  grid-template-areas : 
      "head head ."
      ". menu menu"
      "c1 c1 ."
      ". c2 c2";
}    
```

You can easily change that grid using media queries as follows:

```css
@media only screen and (max-width: 800px) {
  .page-wrapper {
    /* One column on a phone */
    grid-template-areas : 
      "head"
      "menu"
      "c1"
      "c2"
  }
}
@media only screen and (min-width: 801px and max-width: 1200px) {
  grid-template-areas : 
    "head head"
    "c1   menu"
    "c2   menu";
}
```


## How to Videos

[Using grid for layout](https://youtu.be/rnnYzxsSdPk)

[Making a full screen header](https://www.youtube.com/watch?v=65ByxOHla1c)

[Using pseudo-elements to insert new content with CSS](https://youtu.be/Jb9Cf6G9IWI)
