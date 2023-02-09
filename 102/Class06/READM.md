In computing, just-in-time (JIT) compilation (also dynamic translation or run-time compilations)[1] is a way of executing computer code that involves compilation during execution of a program (at run time) rather than before execution.

 JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.

 JavaScript's dynamic capabilities include runtime object construction, variable parameter lists, function variables, dynamic script creation (via eval), object introspection (via for...in and Object utilities), and source-code recovery (JavaScript functions store their source text and can be retrieved through toString()).

This section is dedicated to the JavaScript language itself, and not the parts that are specific to Web pages or other host environments. For information about APIs that are specific to Web pages, please see Web APIs and DOM.

The standards for JavaScript are the ECMAScript Language Specification (ECMA-262) and the ECMAScript Internationalization API specification (ECMA-402). As soon as one browser implements a feature, we try to document it. This means that cases where some proposals for new ECMAScript features have already been implemented in browsers, documentation and examples in MDN articles may use some of those new features. Most of the time, this happens between the stages 3 and 4, and is usually before the spec is officially published.

Do not confuse JavaScript with the Java programming language — JavaScript is not "Interpreted Java". Both "Java" and "JavaScript" are trademarks or registered trademarks of Oracle in the U.S. and other countries. However, the two programming languages have very different syntax, semantics, and use.

JavaScript documentation of core language features (pure ECMAScript, for the most part) includes the following:

The JavaScript guide
The JavaScript reference
For more information about JavaScript specifications and related technologies, see JavaScript technologies overview.

Looking to become a front-end web developer?

We have put together a course that includes all the essential information you need to work towards your goal.


For complete beginners
Head over to our Learning Area JavaScript topic if you want to learn JavaScript but have no previous experience with JavaScript or programming. The complete modules available there are as follows:

JavaScript first steps
Answers some fundamental questions such as "what is JavaScript?", "what does it look like?", and "what can it do?", along with discussing key JavaScript features such as variables, strings, numbers, and arrays.

JavaScript building blocks
Continues our coverage of JavaScript's key fundamental features, turning our attention to commonly-encountered types of code blocks such as conditional statements, loops, functions, and events.

Introducing JavaScript objects
The object-oriented nature of JavaScript is important to understand if you want to go further with your knowledge of the language and write more efficient code, therefore we've provided this module to help you.

Asynchronous JavaScript
Discusses asynchronous JavaScript, why it is important, and how it can be used to effectively handle potential blocking operations such as fetching resources from a server.

JavaScript guide
JavaScript Guide
A much more detailed guide to the JavaScript language, aimed at those with previous programming experience either in JavaScript or another language.

Intermediate
Understanding client-side JavaScript frameworks
JavaScript frameworks are an essential part of modern front-end web development, providing developers with proven tools for building scalable, interactive web applications. This module gives you some fundamental background knowledge about how client-side frameworks work and how they fit into your toolset, before moving on to a series of tutorials covering some of today's most popular ones.

JavaScript language overview
An overview of the basic syntax and semantics of JavaScript for those coming from other programming languages to get up to speed.

JavaScript data structures
Overview of available data structures in JavaScript.

Equality comparisons and sameness
JavaScript provides three different value comparison operations: strict equality using ===, loose equality using ==, and the Object.is() method.

Enumerability and ownership of properties
How different methods that visit a group of object properties one-by-one handle the enumerability and ownership of properties.

Closures
A closure is the combination of a function and the lexical environment within which that function was declared.

Advanced
Inheritance and the prototype chain
Explanation of the widely misunderstood and underestimated prototype-based inheritance.

JavaScript typed arrays provide a mechanism for accessing raw binary data.

The alert() function is actually rarely used, but it is an easy way to show the use of JavaScript.

examples/js/alert.html

document.write
examples/js/document_write.html

First line
<script>

document.write("<h1>Hello World</h1>");

</script>
Last line

console.log
Finally let's see how developers usually print out debugging information.

examples/js/console.html

<script>

console.log("Hello World");

</script>

The fist one is called prompt. It will show a pop-up window with the text provided as the first parameter and with a textbox the user can fill in. When the user presses OK, the value in the text box will be returned by the prompt() function.
xamples/js/edit.html

<script>

var name = prompt("Please correct your e-mail address:", "foo@bar.co");
document.write("Your e-mail address is ", name);

The other pop-up is not really an input method. It allows the developer to ask a Yes/No question. Calling the confirm() function will show a pop-up window with the provided texts and with two buttons.
</script>

examples/js/confirm.html

<script>


    4 Ways to Declare a JavaScript Variable:
Using var
Using let
Using const
Using nothing

Variables are containers for storing data (storing data values).

In this example, x, y, and z, are variables, declared with the var keyword:




if (confirm("Shall I print Hello World?")) {
    document.write("Hello World");
} else {
    document.write("OK, I won't print it.");
}

</script>