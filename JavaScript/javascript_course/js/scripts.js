// 
/* const div = document.getElementById("blue_box");
const text = div.innerHTML;
console.log(text);
div.innerHTML = "Lo he cambiado"; */
/* var user_name = 'Alan';
document.getElementById("user_greeting_message").innerHTML = "Hello " + user_name + "!"; */

/* function sumNumbers(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

var div = document.querySelector("#sum_result");
div.innerHTML = sumNumbers(-27, 55); */
/* 
var students = [ "John" , "Mary", "Paul" ];


var courses = [ "HTML", "Python", "PHP" ];
courses.push("JavaScript"); */

/* var employee = {
    'name': 'James Taylor',
    'yearOfBirth': 1948,
    'ID': 'SBJ0001',
    'role': 'IT Analyst'
};

employee.role = 'IT manager';
employee.passport = '152462';

var courses = [
    {
        'title': 'Learn code in Python 3',
        'reviews': 6802,
        'students': 130129,
        'categories': ['programming', 'technology']
    },

    {
        'title': 'Learn PHP -  Beginner to Advanced',
        'reviews': 1204,
        'students': 30521,
        'categories': ['web development', 'programming']
    },

    {
        'title': 'Learn Microsoft Excel 2020',
        'reviews': 4209,
        'students': 18560,
        'categories': ['productivity', 'business']
    }
    
];

var miObjeto = {
    "primerNumero": 25,
    "segundoNumero": 35,
    "funcion": function() {
        return this.primerNumero + this.segundoNumero;
    }
};
 */

/* 16. EVENTS */
/*var btnClick = document.querySelector('#click-me');
var btnHover = document.querySelector('#hover-me');
var btnOut = document.querySelector('#leave-me');*/

/* btnClick.addEventListener('click', () => {
    alert('You clicked the button baby');   
});

btnHover.addEventListener('mouseover', () => {
    alert('You moved the cursor over the button');   
});

btnOut.addEventListener('mouseout', () => {
    alert('You moved the cursor out of the button');   
}); */

/* btnClick.onclick = function() {
    alert('You clicked the button baby');   
};

btnHover.onmouseover = function() {
    alert('You moved the cursor over the button');   
};

btnOut.onmouseout = function() {
    alert('You moved the cursor out of the button');   
};

document.onkeydown = function() {
    alert('You pressed a key');
};

document.onkeydown = function(event) {
    if(event.keyCode == 65)
        alert("You've just pressed the 'a' key.");
}; */

///////////////////
/** Lesson 17 */
//////////////////
/* var btn = document.getElementById('color_button');
btn.onclick = function() {
    this.style.backgroundColor = 'purple';
    this.style.transition = '2s all 0.5s';
    this.style.transform = 'translateX(550px)';
} */

///////////////////
/** Lesson 18 */
//////////////////
/* var elements = document.getElementsByClassName('example');
console.log(elements)

var paragraphs = document.getElementsByTagName('p')
console.log(paragraphs)
 */

///////////////////
/** Lesson 19 */
//////////////////
/* var students = ['Peter', 'Mary', 'Joseph', 'John', 'Charles'];
for(let a = 0; a < students.length; a++) {
    console.log(students[a]);
} */

/* var car = {
    'Year': 2018,
    'Model': 'Evoke',
    'Manufacturer': 'Land Rover',
    'FuelType': 'Diesel'

}

for(let x in car) {
    console.log(typeof x + ": " + typeof car[x]);
} */

/* var elements = document.getElementsByClassName('example');
console.log(elements)

for(let a = 0; a < elements.length; a ++) {
    elements[a].style.backgroundColor = 'orange';
    elements[a].style.fontWeight = 'bolder';
} */

///////////////////
/** Lesson 20 */
//////////////////
/* let a = 0;
while(a < 5) {
    console.log(a);
    a ++;
} */
/* let a = 10
do {
    console.log(a);
    a ++;
} while (a < 5); */


///////////////////
/** Lesson 21 Conditionals */
//////////////////

/* var age = 70;

    if (age < 18) {

        console.log('Underage');

    } else if(age >= 65){

        console.log('Senior');

    } else {
        console.log('Adult');
    }

 */

/*  var grade = 6;
 var absences = 5; */

// Solving the problem with && (and): 

/* if (grade >= 7 && absences <= 5) {
    console.log( 'The student has been approved' );
} else {
    console.log( 'The student has failed' );
} */

// Solving the problem with || (or):

/*  if (grade < 7 || absences > 5) {
     console.log( 'The student has failed' );
 } else {
     console.log( 'The student has been approved' );
 } */

// Both ways are correct
// change the values of the variables to test 

/* var vname = "a";

if(vname) {
    console.log('the name is: ' + vname);
}else {
    console.log("The name has not been informed");
} */

/*  var vname;
 console.log(vname)
 var msg = vname ? 'The name is '+ vname : "The name has not been informed";
 console.log(msg); */

/* var age = 17; */

/*   if (age < 18) {

      console.log('Underage');

  } else if(age >= 65){

      console.log('Senior');

  } else {
      console.log('Adult');
  } */

/* console.log(age < 18 ? 'Underage' : age >= 65 ? 'Senior' : 'Adult'); */

//////////////////////////////
/** Lesson 22 Nesting Conditionals */
/////////////////////////////

/* var isMember = false;
var age = 17;

if(isMember == true || age >= 65) {
    console.log('free');
}else if(age < 18) {
    console.log(6);
}else {
    console.log(12);
} */

/* var employees = [
        
    {
        'name': 'Charles Silva',
        'age': 45,
        'children': ['Andrew Silva', 'Maria Silva']
        
    },

    {
        'name': 'Elizabeth Green',
        'age': 32,
        'children': ['Peter Green']
        
    },

    {
        'name': 'George Banks',
        'age': 39,
        'children': ['Philipp Banks', 'Rose Banks', 'Tara Banks']
        
    }

];

var ulElement = document.querySelector('#children');
ulElement.innerHTML = '';

for(let i = 0; i < employees.length; i ++) {

    let children = employees[i].children;

    for(let j = 0; j < children.length; j++){

        let child = children[j];
        ulElement.innerHTML += '<li>'+ child + '</li>';

    }
} */

//////////////////////////////
/** Lesson 23 Variable Scope */
/////////////////////////////

/* for(let a = 0; a < 3; a ++) {
   console.log('parent loop: ', a);
   for(let a = 0; a < 3; a ++) {
       console.log('child loop: ', a)
   }
}  */

/* function showName() {
    myName = 'Alan';
    console.log(myName);
}

showName();
console.log(myName); */

//////////////////////////////////////
/** Lesson 25 Browser Object Model */
/////////////////////////////////////

// var myName = 'Alan';

/* window.onmousemove = function(event) {
    if(event.pageY < 5) {
        alert("Don't miss our flash sale");
    }
}
 */
//////////////////////////////////////
/** Lesson 26 Date & Time */
/////////////////////////////////////

// Creating a Date data
/*var dateObj = new Date("1993-03-14");*/
/*  var dateObj = new Date("1993/ 03/ 14");
var dateObj = new Date("14 mar 1993");  */
//var dateObj = new Date(1993, 02, 14);

/*Challenge: Calculating date intervals
If a product is ordered on March 26, 2020 and delivered on April, 02, 2020, 
how many days does it take to be delivered?

Delivery time: Show the number of days here */

/* var date1 = new Date("26 mar 2020");
var date2 = new Date("02 apr 2020");

var timeInterval = Math.floor((date2- date1)/ 86400000);

document.querySelector('#delivery_time').innerHTML = timeInterval;

var daysToReceive = 7;

var deleveryDayInMiliSeconds = date1.getTime() + 7 * 86400000;

var deleveryDay = new Date(deleveryDayInMiliSeconds);
console.log(deleveryDay); */

//////////////////////////////////////
/** Lesson 27 Time Methods */
/////////////////////////////////////

// window.setTimeOut(callback, timeInMiliSeconds);

/*console.log('Message 1');
function sendMessage() {
    console.log('Message 2');
}

window.setTimeout(sendMessage, 3000);*/
/* var btn = document.getElementById('show-loader');
var spinner = document.getElementById('spinner-loader');

btn.onclick = function () {
    spinner.style.display = 'block';
    window.setTimeout(function () {
        spinner.style.display = 'none';
    }, 5000);
} */

/*let count = 0;
var interval = window.setInterval(function() {   
    console.log(count ++);
    if(count > 5)
        window.clearInterval(interval);
}, 1000);*/

//////////////////////////////////////
/** Challenge Lesson 27 - Create a Clock */
/////////////////////////////////////

/* var seconds = 0;
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

window.setInterval(function () {

    seconds ++;
    var currentlyDate = new Date(new Date("1 jan 1970").getTime() + 1000 * seconds);
 
    hoursElement.innerHTML = String(currentlyDate.getHours()).padStart(2, '0');
    minutesElement.innerHTML = String(currentlyDate.getMinutes()).padStart(2, '0');
    secondsElement.innerHTML = String(currentlyDate.getSeconds()).padStart(2, '0');

}, 1000); */

/* function addLeadingZero(number) {
    if(number < 10) {
        return '0' + number.toString();
    }else {
        return number.toString();
    }
}

window.setInterval(function () {

    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    document.getElementById('hours').innerHTML = addLeadingZero(hours);
    document.getElementById('minutes').innerHTML = addLeadingZero(minutes);
    document.getElementById('seconds').innerHTML = addLeadingZero(seconds);

}, 1000); */

//////////////////////////////////////
/** Lesson 28 - Break and Continue */
/////////////////////////////////////

/* var array = [3, 5, 14, 7, 11, 17];

let index = 0;

while(index < array.length) {
    if(array[index] % 2 == 0) {
        console.log('index:' + index + ' entry: ' + array[index] + ' even number found!');
        return;
    }
    console.log(array[index] + ' is an odd number'); 
    index ++;   
} */

/* var num = 0;

while(num < 20) {

    num ++;
  
     if(num % 2 != 0)
        continue; 

    console.log(num);

} */

//////////////////////////////////////
/** Lesson 29 - Forms*/
/////////////////////////////////////

/* var btn = document.getElementById('show_option');

btn.onclick = function() {
    var select = document.getElementById('options');
    var index = select.selectedIndex;
    var option = select.options[index];
    
    document.getElementById('selected_option').innerHTML = option.text;
}

var btnRadio = document.getElementById('show_radio');

btnRadio.onclick = function() {

    //var radio = document.querySelectorAll('input[name="gender"]');
    var radio = document.getElementsByName('gender');
    var selectedRadio;

    for(rb of radio) {
        if(rb.checked){
            selectedRadio = rb;
            break;
        }
    }

    document.getElementById('selected_radio').innerHTML = selectedRadio.value;
}

var btnCheck = document.getElementById('show_check');

btnCheck.onclick = function() {

    var check = document.getElementsByName('interest');
    document.getElementById('selected_check').innerHTML = "<ul id='unorder'></ul>";

    for(chk of check) {
        if(chk.checked) {
            document.querySelector('#unorder').innerHTML += '<li>' + chk.value +'</li>';
        }
    }

} */

//////////////////////////////////////
/** Lesson 30 - onchange event*/
/////////////////////////////////////

/* var select = document.getElementById('education_level');

select.onchange = function() {
    let index = select.selectedIndex;
    let option = select.options[index];

    document.getElementById('selected_level').innerHTML = option.innerHTML;
}


var box = document.getElementsByName('meal');

for(chk of box) {
    chk.onchange = function() {
        let strong = document.getElementById('selected_check');
        strong.innerHTML = "<ul id='unorder'></ul>";
        for(chk of box) {
           if(chk.checked)
                document.getElementById('unorder').innerHTML += '<li>' + chk.value + '</li>';
        }  
    } 
} */

//////////////////////////////////////
/** Lesson 33 - Jquery Syntax*/
/////////////////////////////////////

//Basic Syntax: $("selector").action();

/* var visible = false;

$('#hide').click(function() {
    if(!visible) {
        visible = true;
        //$('.example').css('display','none');
        $('.example').hide();
    } else {
        visible = false;
        $('.example').css('display','inline-block');
    }
});
 */

//////////////////////////////////////
/** Lesson 34 - DOM Manipulation*/
/////////////////////////////////////

/* var content = $('#sample_text').html();
console.log(content); */

/* $('#sample_text').html("Something new to write");
var content = $('#sample_text').html();
console.log(content); */

/* var textContent = $('#sample-text-only').text();
console.log(textContent) */

/* $('#change_image').click(function() {
    $('#imagem_js').attr('src','https://cdn.tutsplus.com/net/uploads/2013/12/managing-async-nodejs-retina-preview.png');
    $('#change_image').hide();
}); */

//$('#empty_paragraph').empty();
//$('#empty_paragraph').remove();

//////////////////////////////////////
/** Lesson 35 - Jquery Forms*/
/////////////////////////////////////

/* var name_ = $('#name_field').val();
console.log(name_)

$('#name_field').val('Alan Urrunaga'); */

//////
/* $('#options').change(function () {
    console.log(this.selectedIndex)
}); */

//var option = $('#options option:selected')

/* $('#options').change(function () {
    var selectedText = $("#options option:selected").text();
    console.log(selectedText)
}); */

/////
/* var radio = $('input[name="gender"]')
var radioSelected = $('input[name="gender"]:checked').val(); */
//console.log(radioSelected)

/* $('input[name="gender"]').change(function () {
    var radioSelected = $('input[name="gender"]:checked').val();
    console.log(radioSelected) 
}); */

/* $('input[name="gender"]').change(function () {
    var radioSelected = $('input[name="gender"]:checked').parent().text();
    console.log(radioSelected) 
}); */

///////
/* $('input[name="interest"]').change(function () {

    var selectedCheckBoxes = $('input[name="interest"]:checked');
    var texts = [];
    
    $.each(selectedCheckBoxes, function(index, value) {
        texts.push($(value).parent().text());
    });

    console.log(texts)
}); */

//////////////////////////////////////
/** Lesson 36 - Jquery CSS Classes Manipulation*/
/////////////////////////////////////

/* $('#add_class').click(function() {
    $('#example-paragraph').addClass('styling');
});

$('#remove_class').click(function() {
    $('#example-paragraph').removeClass('styling');
});

$('#toggle_class').click(function() {
    $('#example-paragraph').toggleClass('styling');
}); */

//////////////////////////////////////
/** Lesson 37 - Jquery Events*/
/////////////////////////////////////
//$(document).ready(function() {});
/* $(function() {


}); */

/* $("element").on({

    click: function() {},
    change: function() {}
}); */

// Event Challenge
/* var firstTime = 0;
 $('#fullName').keyup(function() {       
    $('#fullName').val() ? $('#submit').show() : $('#submit').hide();
});  */

//////////////////////////////////////
/** Lesson 38 - Jquery Efects*/
/////////////////////////////////////

/* $('#hide-button').click(function() {
    $(this).hide(4000, function() {
        $('#hidden-text').show("slow");
    });
});

$('#toggle-tab').click(function() {
    //$('#tab-content').fadeToggle();
    $('#tab-content').fadeIn();
    $('#toggle-tab').toggleClass('flip');
}); */

//////////////////////////////////////
/** Lesson 39 - Jquery Animate*/
/////////////////////////////////////

// $("element").animate({property: value}, speed, callback function);
/* $('#animate').click(function() {
    $('#square').animate({
        width:"+=100px",
        height:"+=20px"
    }, 3000);
}); */

//////////////////////////////////////
/** Lesson 40 - Callback Functions*/
/////////////////////////////////////

/* function getUser(callbackFunction) {
    setTimeout(function() {
        var user = {
            'name': 'John'
        }
        callbackFunction(user);
    }, 2000);
}

function greetUser(user) {
    console.log('Hi ' + user.name + ', how are you?'); 
}

function goodbyeUser(user) {
    console.log('Bye bye ' + user.name + '.');
}

//greetUser(getUser);
getUser(greetUser)
getUser(goodbyeUser)
getUser(function(usera) {
    console.log('Hey ' + usera.name);
}); */

//////////////////////////////////////
/** Lesson 41 - Callback Functions*/
/////////////////////////////////////

/* function getUser() {
 //   setTimeout(function () {
        var user = {
            'name': ''
        }
        return user;
   // }, 2000);
}

function greetUser(user) {
    console.log('Hi ' + user.name + ', how are you?');
}

try {
    var user = getUser();
    if(!user.name)
        throw 'user has no name';
    greetUser(user);
} catch (err) {
    console.log(err);
    console.log('Hi, how are you?');
}  finally {
    console.log('New line of code');
} */

//////////////////////////////////////
/** Lesson 42 - Namespaces*/
/////////////////////////////////////

/* var bestSellersSlider = {

    'products': ['product 1', 'product 2', 'product 3'],

    'interval': 3000,

    'infinite': true,

    'get_products': function () {
        console.log(this.products);
    },

    'animals': [
        {
            'especie': 'perro',
            'nombre': 'Jacinto',
            'edad': 14
        },

        {
            'especie': 'perro',
            'nombre': 'Bardock',
            'edad': 10
        },

        {
            'especie': 'gato',
            'nombre': 'Newton',
            'edad': 5
        },

        {
            'especie': 'gato',
            'nombre': 'Tom',
            'edad': 6
        }
    ]

};

bestSellersSlider.get_products();
console.log(bestSellersSlider.animals); 
console.log(bestSellersSlider.animals.filter((animal) => animal.edad % 2 == 0)); 

var Module = (function () {

    var privateMethod = function () {
        bestSellersSlider.get_products();
    }

    return {
        publicMethodOne: function () {
            console.log(bestSellersSlider.animals)
        },
        publicMethodTwo: function () {
            console.log(bestSellersSlider.animals.filter((animal) => animal.edad % 2 == 0));
        },
        publicMethodThree: function () {
            console.log(bestSellersSlider.animals.filter((animal) => animal.especie == 'gato'));
        },

        publicMethodFour: function () {
            privateMethod();
        }
    };

})() */

//Module.publicMethodFour();

//////////////////////////////////////
/** Lesson 43 - Json*/
/////////////////////////////////////

/* var employee = {
    'name': "Maria Silva",
    'birth_date': '1988-10-01',
    'edad': 33
};

var myJson = JSON.stringify(employee);
console.log(myJson)
console.log(" type: " + typeof myJson)

var myObject = JSON.parse(myJson)
console.log(myObject)
console.log(" type: " + typeof myObject) */

/* var group_A = ['Real Madrid', 'Porto', 'Liverpool', 'Manchester United'];

var group_A_Json = JSON.stringify(group_A);
console.log(group_A_Json)

var group_A_Object = JSON.parse(group_A_Json);
console.log(group_A_Object) */

//////////////////////////////////////
/** Lesson 44 - LocalStorage*/
/////////////////////////////////////

/* var Module = (function () {
    return {
        btnSubmit: document.getElementById('submit-name'),
        input: document.getElementById('name-user'),
        field: document.getElementById("name-field"),
        welcome: document.getElementById("welcome-area"),
        welcomeText: document.getElementById("welcome-text"),
        notMe: document.getElementById("not-me")
    }
})();


Module.btnSubmit.onclick = function () {
    let nameInput = Module.input.value;
    if (!nameInput)
        alert('Please type your name');
    else {
        localStorage.setItem("name", nameInput);
        greetUser();
        Module.input.value = "";
    }
}

function greetUser() {
    Module.field.style.display = "none";
    Module.welcome.style.display = "block";
    Module.welcomeText.innerHTML = "Hi " + localStorage.name + " how are you?";
    Module.notMe.innerHTML = "Not " + localStorage.name + "?";
}

if (localStorage.name) {
    greetUser();
}


Module.notMe.onclick = function () {
    localStorage.removeItem("name");
    Module.field.style.display = "block";
    Module.welcome.style.display = "none";
}
 */

//////////////////////////////////////
/** Lesson 46 - Ajax Request*/
/////////////////////////////////////


/* var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if(xhttp.readyState ==4 && xhttp.status == 200) {
        let data = JSON.parse(this.responseText);
        let question = data.results[0].question;
        let answers = data.results[0].incorrect_answers
        answers.push(data.results[0].correct_answer)
        console.log("Question: " + question);
        for(ans of answers)
            console.log(ans);
    }
}

xhttp.open("GET", "https://opentdb.com/api.php?amount=1&category=19&difficulty=hard&type=multiple");
xhttp.send(); */

/* function loadDoc() {
    const xhttp = new XMLHttpRequest();
    let obj = {status:"", state:""}
    xhttp.onload = function () {
        try {
            if (xhttp.readyState == 4 && xhttp.status == 200)
                document.getElementById("demo").innerHTML = this.responseText;
            else {
                throw obj;
            }
        } catch (error) {
            alert(error.state + " " + error.status)
        } finally {
            obj.status = this.status;
            obj.state = this.readyState;
        }
        return obj;
    }
    xhttp.open("GET", "ajax_info.txt");
    xhttp.send();
} */

//////////////////////////////////////
/** Lesson 48 - Ajax JQuery*/
/////////////////////////////////////

/* $.ajax({
    url: "https://opentdb.com/api.php?amount=1&category=19&difficulty=hard&type=multiple",
    type: "GET",
    dataType: "json",
    success: function (data) {
        getData(data);
    },
    error: function (data) {
        printData(data);
    }
});

function getData(data) {
        let question = data.results[0].question;
        let answers = data.results[0].incorrect_answers
        answers.push(data.results[0].correct_answer)
        console.log("Question: " + question);
        for(ans of answers)
            console.log(ans);
}

function printData(data) {
    console.log(data)
}

getData = (data) => {
    let question = data.results[0].question;
    let answers = data.results[0].incorrect_answers
    answers.push(data.results[0].correct_answer)
    console.log("Question: " + question);
    for (ans of answers)
        console.log(ans);
}

printData = (data) => {
    console.log(data);
}
 */
