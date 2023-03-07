404 There's Nothing to See Here
# HTML Links, JS Functions, and Intro to CSS Layouts

This topic is important to me because we're getting more into functionality of JS which will help me dynamically work on my site.

## References

<https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks>.
<https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow>.
<https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning>.
<https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions>.
<https://www.codefellows.org/blog/6-reasons-for-pair-programming/>.

## CSS Hyperlinks

A basic link is created with wrapping text or content in an (a) tag!

Using the href attribute to put the webpage.

Putting p tags under the anchor tags (a) makes a nice block level.

Images links are done with the anchor tag, you wrap an img element with the anchor.

            <a href="https://developer.mozilla.org/en-US/">
            <img src="mdn_logo.svg" alt="MDN Web Docs homepage" />
            </a>

title is an attribute you can add which will help identify what the web page is for.

Document Fragging lets you go to where you specified with your ID, and putting it at the end of your href.

Download attribute links to the download

Email linking is done with mailto: url scheme.

### HTML Questions

1. An anchor tag.
2. Links, emails
3. By putting titles and making sure its directly to where it needs to go.

## CSS Layout, Flow and Positioning

Normal flow - the way that webpage elements lay themselves out if you haven't changed their layout.

(Elements default to normal flow)

**Box Model** - boxes of individual elements are laid out in such a way that any padding, border, or margin they happen to have is added to their content.

### Positioning

Positioning allows you to take elements out of normal document flow and make them behave differently.

**Static Positioning** is the default that every element gets.
(static)

**Relative Positioning** is similar to stateic except that once the positioned element has taken its place, you can modify its final position.

You can move elements by styling them with top, bottom, left, and right!

**Absolute Positioning** is off the page, in its own plane. It can then be positioned and put anywhere on the page.

If position isn't defined by parent container, all ancestor elements will be static by default.

**Z-index** is what determines which elements appear over others.

**Fixed Positioning** same way as absolute positionings, except whereas absolute positioning fixes an element in place relaitve to its nearest positioned ancestor, **Fixed** fixes an element in place relative to the visible portion of the viewport.

**Sticky Positioning** hybrid of relative an fixed, it allows a positioned element to at like its relatively positioned until its scroll to a certain point. (nav bar sticking).

### Questions for CSS

1. the default element positioning layout of elements
2. block level elements cover space from left to right. Inline elements only cover the space bounded by the tags in the HTML element.
3. static
4. You can use it for pop ups or for things you don't want seen yet.
5. Fixed fixes an element in place to the visible portion of the viewport.

## JavaScript Functions

Some functions need parameters to be specificed when invoking.

Sometimes the parameters are optional.

Functions are pretty straightforward, and they're one of the essential features of coding. Make sure to use them!

### JavaScript Questions

1. function declaring is naming it (or not) and making the functiom, invocation is calling it like Function().
2. Parameters are the settings for the function, argument is what you want it to do.

### Pair Programming

1. It helps build your knowledge by hearing terms and building your knowledge.
2. it helps with seeing how to solve your code, and to build  things based on how others do it

## Things I want to know more about

I want to know more about the vast amount of functions in JS.
I want to know more about javascript functions that affect HTML.