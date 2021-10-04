///////////
// EX 1 //
//////////
const selectEl = document.getElementById("countries");

// pide data de los paises
async function getCountries() {
    let data = await fetch('https://restcountries.eu/rest/v2/all');
    let countries = await data.json()
    return countries;
}

// carga datos en el select
function loadCountries(countries) {
    for (country of countries) {
        let option = document.createElement('option')
        option.value = country.alpha2Code;
        option.textContent = country.name
        selectEl.appendChild(option);
    }
}

// luego de obtener la data muestra los paises, la opcion elegida anteriormente si la hubiera
getCountries()
    .then(countries => {
        loadCountries(countries);
        showOption();
        if (localStorage.val)
            getHolidays(key, localStorage.val, lastYear).then(
                (holidays) => loadHolidays(clickedOption().textContent, lastYear, holidays)
            )
    });

// Guarda en localStorage la opcion elegida
function saveOption() {
    let option = clickedOption();
    localStorage.val = option.value;
}

// retorna la option elgida en el select
function clickedOption() {
    let index = selectEl.selectedIndex;
    let option = selectEl.options[index];
    return option;
}

selectEl.addEventListener('change', function () {
    saveOption();
    getHolidays(key, clickedOption().value, lastYear).then(
        (holidays) => loadHolidays(clickedOption().textContent, lastYear, holidays)
    )
});

// carga en el select la opcion elegida anteriormente
function showOption() {
    if (localStorage.val) {
        // remueve el atr selected del anterior
        document.querySelector("option[value='select']").removeAttribute('selected');
        let option = document.querySelector("option[value='" + localStorage.val + "']");
        option.setAttribute("selected", "selected");
    }
}

///////////
// EX 3 //
//////////
//https://holidayapi.com/v1/holidays?pretty&key=61ee4c54-76a1-4b63-8c12-43f54a9f469c&country=PE&year=2020
//61ee4c54-76a1-4b63-8c12-43f54a9f469c
async function getHolidays(key, alphaCode, year) {
    let url = "https://holidayapi.com/v1/holidays?pretty&key=" + key + "&country=" + alphaCode + "&year=" + year;
    let data = await fetch(url);
    let response = await data.json();
    return response.holidays;
}

const countryEl = document.getElementById("selectedCountry");
const yearEl = document.getElementById("previousYear");
const ulEl = document.getElementById("holidayList");

const key = "61ee4c54-76a1-4b63-8c12-43f54a9f469c";
let lastYear = new Date().getFullYear() - 1;


function loadHolidays(countryName, year, holidays) {
    ulEl.innerHTML = "";
    countryEl.textContent = countryName;
    yearEl.textContent = year;
    for (holiday of holidays) {
        if (holiday.public) {
            let li = document.createElement('li');
            li.textContent = holiday.name
            ulEl.appendChild(li);
        }
    }
}

///////////
// EX 2 //
//////////
var courses = '[{"title": "PHP","reviews": []},{"title": "Javascript","reviews": [5,5,4.5,4,5,5,5,4.5]},{"title": "Python","reviews": [5,5,4,4,5,3,5,4,4,5]},{"title": "Machine Learning","reviews": [5,5,4.5]}]';

function reviews() {
    courses = JSON.parse(courses);
    for (course of courses) {
        let reviews = course.reviews;
        try {
            if (reviews.length >= 5)
                course.averageRating = reviews.reduce((x, y) => x + y) / reviews.length;
            else
                throw ['No reviews', 'Not enough reviews yet'];
        } catch (error) {
            if (reviews.length == 0)
                course.averageRating = error[0];
            else if (reviews.length < 5)
                course.averageRating = error[1]
        }
    }
    return JSON.stringify(courses);
}