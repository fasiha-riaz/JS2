//CHAPTER 21-25 
//1-
var fname = prompt("Enter your first name");
var lname = prompt("Enter your last name");
var flname = fname + " " + lname;
alert("Welcome!" + " " + flname)



//2-
var favphone = prompt("Write your favourite phone");
document.write("<br/> My Favourite Phone is:" + " " + favphone);
document.write("<br/> Lenght of string: " + " " + favphone.length)
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//3-
var country = "Pakistani";
document.write("<br/> String:" + " " + country);
document.write("<br/> Index of 'n':" + " " + country.indexOf('n'))
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//4-
var message = "Hello World";
document.write("<br/> String:" + " " + message);
document.write("<br/> Last ndex of 'L':" + " " + message.lastIndexOf('l'))
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//5-
var pak= "Pakistani";
document.write(" <br/> String:" + " " + pak);
document.write("<br/> String at index 3:" + " " + pak.charAt(3))
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//6-
var fnames = prompt("Enter your first name");
var lnames = prompt("Enter your last name");
var fullnames = fnames.concat(lnames);
alert("Welcome!" + " " + fullnames)



//7-
var city = "Hyderabad";
var rep = city.replace("Hyder", "Islam");
document.write("<br/> City:" + " " + city);
document.write("<br/> After replacement:" + " " + rep)
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//8-
var msg = "Ali and Sami are best friends. They play cricket and football together"
var rmessage = msg.replace(/and/g, "&");
document.write("<br/>" + rmessage);
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//9-
var numt= 472;
var numt2= numt.toString();
var string1 = typeof numt2;
document.write("<br/> Value:" + " " + numt)
document.write("<br/> Type:" + " " + string1)
var numt2 = Number("472");
var num = typeof numt2;
document.write("<br/> Value:" + " " + numt)
document.write("<br/> type:" + " " + num)
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//10-  
var peanut = "peanut";
var peanutu = peanut.toUpperCase();
document.write("<br/> User Input:" + " " + peanut)
document.write("<br/> Upper Case: " + " " + peanutu)
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//11-
var js = "javascript";
var js1 = js.slice(0, 1);
var js2 = js.slice(1);
jss1 = js1.toUpperCase();
jss2 = js2.toLowerCase();
var slice  = js1 + js2;
document.write("<br/> User Input:" + " " + js)
document.write("<br/> Title Case: " + " " + slice)
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//12-
var dec= 35.36;
var newnum= parseInt(decimal.toString().replace(".", ""));
document.write("<br/> Value: " + " " + dec)
document.write("<br/> Result:" + " " + newnum)
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");




// 13- 
var username = prompt("enter name");
var lengthofthename = username.length;
for (var i = 1; i < username.length; i++) {
    if (username.slice(i, i + 1) == '!' || username.slice(i, i + 1) == '.' || username.slice(i, i + 1) == "," || username.slice(i, i + 1) == "@") {
        alert("Enter a valid user name");
    }
}




//14-
var user = prompt('Welcome to ABC bakery, what do you want to order sir/ maam');
var user = user.toLowerCase();
var Arr = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var bakery;
for (bakery = 0; bakery < Arr.length; bakery++) {
    if (Arr[bakery] === user) {
        alert(user + "  " + 'available at index' + "  " + bakery + 'in our bakery');
        break;
    }
    if (bakery == Arr.length - 1) {
        alert('we are sorry!' + "  " + user + "  " + 'is not available in our bakery');
        break;
    }
}



// TASK 15
// var password = prompt("Enter Password")
// var passw=  /^[A-Za-z]\w{6,14}$/;
// document.write("<br/> Entered Password:" + " " + password);
// if(password == passw) 
// { 
// document.write('<br/> You have entered the right password')
// }
// else if (password != passw)
// { 
// document.write(" <br/> Password can not begin with a number please enter a valid password")
// }
// document.write("<br/>");




// TASK 16
// var uok = 'University Of Karachi';
// var ar = uok.split(""); 
// document.write( ar );
// document.write("<br/>"); 
// document.write("<br/>");
// document.write("<br/>");




//17- 
var input = " Pakistan";
document.write("<br/>User input:" + " " + Userinput);
var totallenghtofword = "";
totallenghtofword = input.length - 1;
var letteratlast = "";
letteratlast = input.charAt(totallenghtofword);
document.write("<br/>Last Character of input:" + " " + letteratlast);
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//18-
var temp = "the quick brown fox jumps over the lazy dog";
var count = (temp.match(/the/g) || []).length;
document.write("<br/> Text:" + " " + temp)
document.write("<br/> there are" + " " + count + " " + "occurence(S) of word 'the'");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//CHAPTER 26-30 


//1-
var convertnumber = 3.45214;
var roundoff = Math.round(convertnumber)
document.write("<br/> Number:" + " " + convertnumber);
document.write("<br/> Number:" + " " + roundoff);
var floor = Math.floor(convertnumber)
var ceil = Math.ceil(convertnumber)
document.write("<br/> Floor Value:" + " " + floor);
document.write("<br/> Ceil Value:" + " " + ceil);
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//2-
var negnumbers = +prompt("Enter Number in Positive Float, It will be converted by the method in negative")
var negnumber = -Math.abs(negnumbers);
var roundoff = Math.round(negnumber)
document.write("<br/> Number:" + " " + negnumber);
document.write("<br/> Number:" + " " + roundoff);
var floor = Math.floor(negnumber)
var ceil = Math.ceil(negnumber)
document.write("<br/> Floor Value:" + " " + floor);
document.write("<br/> Ceil Value:" + " " + ceil);
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//3-
var absnumber = +prompt("Enter Negative Number")
var abs = Math.abs(absnumber);
document.write("<br/> the Absolute value of" + " " + absnumber + " " + "is" + " " + abs);
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//4-
var dice = Math.random() * 6;
var dice2 = Math.floor(dice);

var dice1 = Math.random() * 6;
var dice3 = Math.floor(dice);

document.write("<br/> Random dice value:" + " " + dice2)
document.write("<br/> Random dice value:" + " " + dice3)
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//5-
var floor = Math.floor(Math.random() * 2);
if (floor === 1) {
    document.write("<br/>" + floor)
    document.write("<br/> Random coin value: Head")
}
else if (floor === 2) {
    document.write("<br/>" + floor)
    document.write("<br/> Random coin value: Tail")
}
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//6-
var floorvaluetill100 = Math.floor(Math.random() * 100);
document.write("<br/> Random Number Between 1 and 100:" + " " + floorvaluetill100)
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//7-
var weight = prompt(" Enter your Weight in kilograms ")
var converted = parseInt(weight);
document.write("The weight of user is:" + " " + converted + " " + "Kilograms")
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//8-
var secret = 6
var ask_user = +prompt("Enter you Number between 1 to 10");
if (secret === ask_user) {
    alert("Congratulation!!!");
}
else {
    alert("Try Again!!!")
}


//CHAPTER 31-34 



//1-
var currentdate = new Date();
document.write("<br/>" + " " + currentdate);
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//2-
var currentm = new Date();
var currentmonth = currentmonth.getMonth();
document.write("<br/>Current Month" + " " + currentmonth);
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//3-
var day = ["Sun", "Mon", "Tue", "Wed", "thu", "Fri", "Sat"]
var currentday = new Date();
var currentdays = currentday.getDay();
alert("Today is " + "" + day[currentdays]);



//4-
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "thursday", "Friday", "Saturday"]
var currentdays = new Date();
var currentdayss = currentdays.getDay();
if (days[currentdayss] == "Sunday" || days[currentdayss] == "Saturday") {
    document.write("<br/> It's a Fun Day")
    document.write("<br/>");
    document.write("<br/>");
    document.write("<br/>");
}



//5-
var currentmonthdate = new Date();
if (currentmonthdate <= 15) {
    document.write("<br/> First fifteen Days of the Month");
    document.write("<br/>");
    document.write("<br/>");
    document.write("<br/>");
}
else if (currentmonthdate > 15) {
    document.write("<br/> Last fifteen Days of the Month");
    document.write("<br/>");
    document.write("<br/>");
    document.write("<br/>");
}



//6-
var d = new Date();
document.write("<br/> Current Date:" + " " + d);
var millisecond = d.getTime();
var milli = millisecond / 1000;
document.write("<br/> Elapsed Milliseconds since january 1, 1970: " + " " + milli)
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");

var minutes = d.getTime();
var minute = minutes / (1000 * 60);
document.write("<br/> Elapsed Milliseconds since january 1, 1970: " + " " + minute)
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//7-
var time = new Date();
var times = time.getHours();
alert(times)
if (time > 12) {
    alert("It's PM")
}
else if (time <= 12) {
    alert("It's AM")
}



//8-
var my_date=new Date("December 31, 2020")
document.write("Later Date" + " " + my_date)


//9-
var daytoday = new Date ()
var dayfrom1970toyet = daytoday.getTime();
dayfrom1970toyet = dayfrom1970toyet/(1000*60*60*24)
var floattime1 = Math.floor(dayfrom1970toyet)
document.write("<br/>" + floattime1)

var dayramzan = new Date ("June 18, 2015");
var dayfrom1970tillramazan = dayramzan.getTime();
dayfrom1970tillramazan = dayfrom1970tillramazan/(1000*60*60*24)
var floattime2 = Math.floor(dayfrom1970tillramazan)
document.write("<br/>" + floattime2)

var total = floattime1 - floattime2;
document.write("<br/>" + " " + total + " " + "days have passed since 1st ramzan 2015")


//10-
var daydecember = new Date ("December 1, 2015")
var dayfrom1970tobeg = daydecember.getTime();
dayfrom1970tobeg = dayfrom1970tobeg/(1000)
var floattimebeg = Math.floor(dayfrom1970tobeg)


var dayend = new Date ("December 5, 2015");
var dayfrom1970tillend= dayend.getTime();
dayfrom1970tillend = dayfrom1970tillend/(1000)
var floattimeend = Math.floor(dayfrom1970tillend)
document.write("<br/> On REFERENCE: " + dayend)

var totaldecemeber = floattimeend - floattimebeg;
document.write("<br/>" + " " + totaldecemeber + " " + "SECONDS have passed since the beginig of 2015")




//CHAPTER 35-38 


//1-
function dataandtime() {
    var timeanddate1 = new Date();
    document.write("<br/>" + " " + timeanddate1)

} dataandtime();



//2-
function greet() {
    var firstname = prompt("Enter first Name")
    var lastname = prompt("Enter Last Name")
    alert("Hello" + " " + firstname + " " + lastname)

} greet();




//3-
function add(add1, add2, add3) {
    add1 = +prompt("Enter Number one");
    add2 = +prompt("Enter Number two");
    add3 = add1 + add2;
    return add3;
} alert(add());





//4-
function operator(num1, num2, oper) {
    num1 = +prompt("Enter Number one");
    num2 = +prompt("Enter Number two");
    oper = prompt("Enter any operator")
    if (oper === '+') {
        return num1 + num2;
    }
    else if (oper === '-') {
        return num1 - num2;
    }
    else if (oper === '*') {
        return num1 * num2;
    }
    else if (oper === '/') {
        return num1 / num2;
    }
} alert(operator());




//5-
function square(number1 = 2, number2 = 4) {
    number1 = number1 * number1;
    number2 = number2 * number2;
    alert(number1)
    alert(number2)
}
square();



//6-
function factorial() {
    var b = 1;
    var n = prompt("Enter a number");
    for (var i = n; i >= 1; i--) {
        b = b * i;
    }
    return b;
    alert(n);
}
factorial();



//7- 
function counting(lastnumber, firstnumber) {
    firstnumber = +prompt("Enter First Number")
    lastnumber = +prompt("Enter Last Number")
    for (var i = firstnumber; i <= lastnumber; i++) {
        document.write(i);
    }
}
counting();




//8-
function hypotaneous(base, Perpendicular, hypotaneous) {
    base = + prompt("Enter Base value");
    Perpendicular = + prompt("Enter Perpendicular value");
    base1 = base * base;
    Perpendicular1 = Perpendicular * Perpendicular;
    var hypotaneous = base1 + Perpendicular1;
    alert(hypotaneous);
}
hypotaneous();



//9-
function area(width = 10, height = 2) {
    var area = width * height;
    alert("The Area is" + area);
}
area();



//10-
function palindrom() {
    var name = prompt("Enter any Word for checking Palindrom");
    var check = "";
    for (var i = name.length - 1; i >= 0; i--) {
        check += name[i];
    }
    if (check === name) {
        alert("This is the Palindrom")
    }
    else if (check != name) {
        alert("This is not the Palindrom")
    }
}
palindrom();



//11-
function titleCaseinstring(stringline) {
    stringline = prompt("Enter line for title case")
    var splitString = stringline.toLowerCase().split(' ');
    for (var i = 0; i < splitString.length; i++) {
        splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1);
    }
    return splitString.join(' ');
}
document.write(titleCase(stringline));



//12-
function longword(string) {
    string = prompt("Enter string")
    var array = string.match(/\w[a-z]{0,}/gi);
    var res = array[0];

    for (var x = 1; x < array.length; x++) {
        if (res.length < array[x].length) {
            res = array[x];
        }
    }
    alert(res);
}
longword();


//13-
function char_count(str, letter) {
    var letter_Count = 0;
    for (var position = 0; position < str.length; position++) {
        if (str.charAt(position) == letter) {
            letter_Count += 1;
        }
    }
    return letter_Count;
}

alert(char_count('w3resource.com', 'o'));


//14-
function calcCircumferenc(radius) 
{
    var pi;
    var circumference = 2 * pi * radius;
    alert("The Circumference is" + " " + circumference);
}
function calcArea(radius)
{
    var pi;
    radius = radius *2;
    var area = pi * radius;
    alert("The Area is " + " " + area);
}
calcCircumferenc();
calcArea();