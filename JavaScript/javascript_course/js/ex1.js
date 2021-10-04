/*2*/
var firstName = 'Alan';
var lastName = 'Osorio';
var dob = 1987;
var age = 2021 - dob;

document.getElementById('student_message').innerHTML =
    "Hi, my name is " + firstName + " " + lastName +  
        ", I'm " + age + " years old and I'm learning Javascript";

/*3*/

divAverage = document.getElementById('result');
var number1 = parseInt(document.getElementById('num_1').innerHTML);
var number2 = parseInt(document.getElementById('num_2').innerHTML);
var ave = (number1 + number2) / 2;

divAverage.innerHTML = ave.toFixed(2);

/*4*/
function myFunction() {

    let phone1 = "988866552";
    let phone2 = "99087612366";
    let phone3N = 876543123;
    let phone3 = phone3N.toString();

    let phones = [phone1, phone2, phone3];

    for(let i = 0; i < phones.length; i ++) {
        if(phones[i].length == 9) console.log(phones[i] + " is valid number");
        else console.log(phones[i] + " is invalid number");
    }
}

myFunction();

/*5*/ 
console.log(Math.pow(32, 6))

/*6 */
/*
valid
valid
invalid reserved word
invalid just underscore
valid
invalid digit can be in first place
invalid two separate words 
*/

/* 7*/
/*
1. 2525
2. 4
3. undefined
4. null
5. undefined
6. object
*/

var url1 = document.getElementById('url_1');
var url2 = document.getElementById('url_2');
var url3 = document.getElementById('url_3');
var url4 = document.getElementById('url_4');

url2.innerHTML = "https://" + url1.innerHTML;

 url4.innerHTML = url3.innerHTML.replace("https://",""); 
