/////////////////////
/// Ex 1 
/////////////////////


/* js Vainilla */

// solution 1//
/* const xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.send();

function getData(callback) {
    xhr.onload = function() {
        if(xhr.readyState == 4 && xhr.status == 200) {
            let courses = JSON.parse(xhr.response);
            console.log(courses)
            callback(courses);
        }
    }
}

getData(loadData); */

const select = document.getElementById("countries");

function loadData(data) {
    let countries = data;
    for (country of countries) {
        let option = document.createElement("option");
        option.value = country.alpha3Code;
        option.textContent = country.name;
        select.appendChild(option);
    }
}

// solution 2//
/* fetch("https://restcountries.eu/rest/v2/all")
.then((data) => data.json())
.then((json) => loadData(json))
.catch((error) => console.log(error)); */

// solution 3//
async function getData() {
    let orc = await fetch("https://restcountries.eu/rest/v2/all");
    let data = await orc.json();
    return data;
}

getData()
    .then((data) => {
        loadData(data);
        fixedOption();
        if (localStorage.val)
            // Active holidays
            getHolidays(localStorage.val).then((holidays) => printHolidays(holidays, document.querySelector("option[selected='selected']").textContent))
    });

select.onchange = function () {
    let index = select.selectedIndex;
    let option = select.options[index];
    localStorage.val = option.value;
    // Active holidays
    getHolidays(option.value).then((holidays) => printHolidays(holidays, option.textContent))
}

function fixedOption() {
    if (localStorage.val) {
        document.querySelector("option[value='select']").removeAttribute('selected');
        let option = document.querySelector("option[value='" + localStorage.val + "']")
        option.setAttribute('selected', "selected");
    }
}
/* With jQuery */
/* function loadData(countries) {
    $.each(countries, function (index, country) {
        let option = $("<option></option>").text(country.name);
        $("#countries").append(option);
    });
}

print = (data) => console.log(data);

$.ajax({
    url: "https://restcountries.eu/rest/v2/all",
    type: "GET",
    dataType: "json",
    success: function(countries) {
        loadData(countries);
    },
    error: function(err) {
        print(err);
    }
});



$("#countries").change(function() {
    let optionSelected = $("#countries option:selected").val()
    localStorage.setItem("optionSelected", optionSelected); 
});

$(document).ready(function() {
    if(localStorage.optionSelected)
        $("#countries option[value='select']").text(localStorage.optionSelected)
}); */

/////////////////////
/// Ex 2
/////////////////////

let json = '[{"title": "PHP","reviews": []},{"title": "Javascript","reviews": [5,5,4.5,4,5,5,5,4.5]},{"title": "Python","reviews": [5,5,4,4,5,3,5,4,4,5]},{"title": "Machine Learning","reviews": [5,5,4.5]}]'
let courses = JSON.parse(json);

/* function reviews() {
    courses.forEach(course => {
        if (course.reviews.length == 0) {
            course.average = "No reviews";
        } else if (course.reviews.length < 5) {
            course.average = "Not enough reviews yet";
        } else {
            course.average = (course.reviews.reduce((x, y) => x + y) / course.reviews.length).toFixed(1);
        }
    });
    return courses;
} */

function reviews() {
    courses.forEach((course) => {
        let reviews = course.reviews;
        try {
            if (reviews.length >= 5)
                course.average = (reviews.reduce((x, y) => x + y) / reviews.length).toFixed(1);
            else
                throw ['No reviews', 'Not enough reviews yet']
        } catch (error) {
            if (reviews.length == 0) {
                course.average = error[0];
            } else if (reviews.length < 5) {
                course.average = error[1];
            }
        }
    });
    return JSON.stringify(courses);
}

/////////////////////
/// Ex 3
/////////////////////
const countryEl = document.getElementById("selectedCountry");
const year = document.getElementById("previousYear");
const ul = document.getElementById("holidayList");
let previousYear = new Date().getFullYear() - 1;
// 61ee4c54-76a1-4b63-8c12-43f54a9f469c
// https://holidayapi.com/v1/holidays?pretty&key=61ee4c54-76a1-4b63-8c12-43f54a9f469c&country=PE&year=2020
async function getHolidays(alphaCode) {
    let url = "https://holidayapi.com/v1/holidays?pretty&key=61ee4c54-76a1-4b63-8c12-43f54a9f469c&country="
        + alphaCode + "&year=" + previousYear;
    let data = await fetch(url);
    let orc = await data.json();
    return orc.holidays;
}

function printHolidays(holidays, name) {
    // clean ul
    ul.innerHTML = "";
    // print country name
    countryEl.textContent = name;
    // print year
    year.textContent = previousYear;
    for (holiday of holidays) {
        console.log(holiday)
        if (holiday.public) {
            let li = document.createElement('li');
            li.textContent = holiday.date + "-" + holiday.name;
            ul.appendChild(li);
            
        }
    }
}





