The control flow is the order in which the computer executes statements in a script.

For example, imagine a script used to validate user data from a webpage form. The script submits validated data, but if the user, say, leaves a required field empty, the script prompts them to fill it in. To do this, the script uses a conditional structure or if...else, so that different code executes depending on whether the form is complete or not:

Control flow means that when you read a script, you must not only read from start to finish but also look at program structure and how it affects order of execution.

A JavaScript function is a block of code designed to perform a particular task.

A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

The parentheses may include parameter names separated by commas:
(parameter1, parameter2, ...)

The code to be executed, by the function, is placed inside curly brackets: {}

Function parameters are listed inside the parentheses () in the function definition.

Function arguments are the values received by the function when it is invoked.

Inside the function, the arguments (the parameters) behave as local variables.

The code inside the function will execute when "something" invokes (calls) the function:

When an event occurs (when a user clicks a button)
When it is invoked (called) from JavaScript code
Automatically (self invoked)

When JavaScript reaches a return statement, the function will stop executing.

If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

Functions often compute a return value. The return value is "returned" back to the "caller":

You can reuse code: Define the code once, and use it many times.

You can use the same code many times with different arguments, to produce different results.

The Assignment Operator (=) assigns a value to a variable.

The Addition Operator (+) adds numbers:

The Multiplication Operator (*) multiplies numbers.

Arithmetic Operators are used to perform arithmetic on numbers
Operator	Description
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Division Remainder)
++	Increment
--	Decrement

The Addition Assignment Operator (+=) adds a value to a variable.
Operator  Example    	Same As
=	x      = y	x            = y
+=	x +    = y	x            = x + y
-=	x -    = y	x            = x - y
*=	x *    = y	x            = x * y
/=	x /    = y	x            = x / y
%=	x %    = y	x            = x % y
**=	x **   = y	x            = x ** y

Operator	Description
==	         equal to
===	         equal value and equal type
!=	         not equal
!==	         not equal value or not equal type
>	         greater than
<	         less than
>=	         greater than or equal to
<=	         less than or equal to
?	         ternary operator

operator	Description
&&	        logical and
||	        logical or
!	        logical not

Operator	Description
typeof	     Returns the type of a variable
instanceof	 Returns true if an object is an instance of an object type

Operator	Description	Example	Same as	Result	Decimal
&	AND	5 & 1	0101 & 0001	0001	 1
|	OR	5 | 1	0101 | 0001	0101	 5
~	NOT	~ 5	 ~0101	1010	 10
^	XOR	5 ^ 1	0101 ^ 0001	0100	 4
<<	left shift	5 << 1	0101 << 1	1010	 10
>>	right shift	5 >> 1	0101 >> 1	0010	  2
>>>	unsigned right shift	5 >>> 1	0101 >>> 1	0010	  2

            Things I want to know more about
        How to use variables proper.
        How to use JavaScript to program.
        Use functions and operations.