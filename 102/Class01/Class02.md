# Class 01

## We learned about Headings from [Markdown Guide](https://ww.markdownguide.org/basic-syntax/)

Paragraphs are created like this
line breaks are done.

Semantics
In programming, Semantics refers to the meaning of a piece of code — for example "what effect does running that line of JavaScript have?", or "what purpose or role does that HTML element have" (rather than "what does it look like?".)

Semantics in JavaScript
In JavaScript, consider a function that takes a string parameter, and returns an <li> element with that string as its textContent. Would you need to look at the code to understand what the function did if it was called build('Peach'), or createLiWithContent('Peach')?

Semantics in CSS
In CSS, consider styling a list with li elements representing different types of fruits. Would you know what part of the DOM is being selected with div > ul > li, or .fruits__item?

Semantics in HTML
In HTML, for example, the <h1> element is a semantic element, which gives the text it wraps around the role (or meaning) of "a top level heading on your page."

<h1>This is a top level heading</h1>
Copy to Clipboard
By default, most browser's user agent stylesheet will style an <h1> with a large font size to make it look like a heading (although you could style it to look like anything you wanted).

On the other hand, you could make any element look like a top level heading. Consider the following:

<span style="font-size: 32px; margin: 21px 0;">Not a top-level heading!</span>
Copy to Clipboard
This will render it to look like a top level heading, but it has no semantic value, so it will not get any extra benefits as described above. It is therefore a good idea to use the right HTML element for the right job.

HTML should be coded to represent the data that will be populated and not based on its default presentation styling. Presentation (how it should look), is the sole responsibility of CSS.

Some of the benefits from writing semantic markup are as follows:

Search engines will consider its contents as important keywords to influence the page's search rankings (see SEO)
Screen readers can use it as a signpost to help visually impaired users navigate a page
Finding blocks of meaningful code is significantly easier than searching through endless divs with or without semantic or namespaced classes
Suggests to the developer the type of data that will be populated
Semantic naming mirrors proper custom element/component naming
When approaching which markup to use, ask yourself, "What element(s) best describe/represent the data that I'm going to populate?" For example, is it a list of data?; ordered, unordered?; is it an article with sections and an aside of related information?; does it list out definitions?; is it a figure or image that needs a caption?; should it have a header and a footer in addition to the global site-wide header and footer?; etc.

Semantic elements
These are some of the roughly 100 semantic elements available:

<article>
<aside>
<details>
<figcaption>
<figure>
<footer>
<header>
<main>
<mark>
<nav>
<section>
<summary>
<time>
See also
HTML element reference on MDN
Using HTML sections and outlines on MDN
The meaning of semantics in computer science on Wikipedia
Glossary
SEO
Semantic elements in HTML:
<article>
<aside>
<details>
<figcaption>
<figure>
<footer>
<header>
<main>
<mark>
<nav>
<section>
<summary>
<time>
Found a content problem with this page?
Edit the page on GitHub.
Report the content issue.
View the source on GitHub.
Want to get more involved? Learn how to contribute.
This pag