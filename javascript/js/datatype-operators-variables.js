var a = 1;
var b = a++;
var c = ++a;
a; 3
b; 1
c; 3

var d = "hello";
var e = false;
d++; NaN
e++; 0
e; 1

var perplexed;
perplexed + 2; NaN

var price = 2.7;
price.toFixed(2); "2.70"

var price = "2.7";
price.toFixed(2); Uncaught TypeError: price.toFixed is not a function

isNaN(0)
false
isNaN(1)
false
isNaN("")
false
isNaN("string")
true
isNaN("0")
false
isNaN("1")
false
isNaN("3.145")
false
isNaN(Number.MAX_VALUE)
false
isNaN(Infinity)
false
isNaN("true")
true
isNaN(true)
false
isNaN("false")
true
isNaN(false)
false
// to illustrate why the isNaN() function is needed:
NaN == NaN
false

!true
false
!false
true
!!true
true
!!false
false
!!0
false
!!-0
false
!!1
true
!!-1
true
!!0.1
true
!!"hello"
true
!!""
false
!!''
false
!!"false"
true
!!"0"
true


var sample = "Hello Codeup"
sample.length
12
sample.toLowerCase();
"hello codeup"
sample.toUpperCase();
"HELLO CODEUP"
sample = sample + " Students"
sample
"Hello Codeup Students"
sample.replace(Students, Class);
Uncaught ReferenceError: Students is not defined
sample.replace("Students", "Class");
"Hello Codeup Class"
sample
"Hello Codeup Students"
sample.indexOf(c);
-1
sample.indexOf("c");
-1
sample.indexOf(C);
Uncaught ReferenceError: C is not defined
sample.indexOf("C");
6
sample.substring(sample.indexOf("C"), sample.indexOf("p"));
"Codeu"
sample.substring(sample.indexOf("C"), sample.indexOf("p") + 1);
"Codeup"

var Mermaid = 3;
undefined
var Bear = 5;
undefined
var Hercules = 1;
undefined
var pricePerDay = 3;
undefined
var price = (Mermaid + Bear + Hercules) * pricePerDay;
undefined
price
27

var ratePerHourGoogle = 400;
undefined
var ratePerHourAmazon = 380;
undefined
var ratePerHourFacebook = 350;
undefined
var payment = ratePerHourGoogle*6 + ratePerHourAmazon*4 + ratePerHourFacebook*10;
undefined
payment
7420
payment = "$" + payment;
"$7420"

var classFullness = true;
undefined
var scheduleConflict = true;
undefined
var enrollment = !classFullness && !scheduleConflict;
undefined
enrollment
false

var offer = (items > 2 && dateNotExpired) || (premiumMember && dateNotExpired)

var username = 'codeup';
var password = 'notastrongpassword';
undefined
var atLeast5Characters = password.length >= 5;
undefined
atLeast5Characters
true
var noMoreThan20Charaters = username.length <=20;
undefined
noMoreThan20Charaters
true
// the password must not include the username
var notIncludeUsername = password.substring(password.indexOf("c"), password.indexOf("p")+ 1) !== username;
undefined
notIncludeUsername
true

password.indexOf("username")
var included = password.indexOf(username) !== -1;

// neither the username or password can start or end with whitespace
var whitespaceYes = username.trim() !== username || password.trim() !== password;
undefined
whitespaceYes
false
var whitespaceYes = (username.trim() !== username) || (password.trim() !== password);
undefined
whitespaceYes
false
var whitespaceNo = username.trim() == username && password.trim() == password;
undefined
whitespaceNo
true
var whitespaceNo = (username.trim() == username) && (password.trim() == password);
undefined
whitespaceNo
true