function getObject(id) {
    return document.getElementById(id);
}
/*////// 1 /////*/
function celsiusToFahrenheit(celsius) {
    return 9 / 5 * celsius + 32;
}

const btnConvert = getObject('convert');

btnConvert.onclick = function () {

    const input = getObject('temp_celsius');
    var valIn = parseFloat(input.value);

    if(input.value != '') {
        getObject('temp_fahr').innerHTML = celsiusToFahrenheit(valIn);
    }

}

/*////// 2 /////*/
var ulElement = getObject('anos_copa');
ulElement.innerHTML = '';

for (let a = 2022; a <= 2050; a++) {
    if (a % 4 == 2) {
        ulElement.innerHTML += '<li>' + a + '</li>';
    }
}

/*////// 3 /////*/
const btnCalculate = getObject('calculate');

btnCalculate.onclick = function () {

    let grade1 = getObject('grade1').value;
    let grade2 = getObject('grade2').value;
    let absences = getObject('absences').value;
    let totalClasses = 20;

    if(grade1 == "" || grade2 == "" || absences == "") {
        alert('All fields must be filled');
        return;
    }

    grade1 = parseFloat(grade1);
    grade2 = parseFloat(grade2);
    absences = parseFloat(absences);

    let average = ((grade1 + grade2) / 2).toFixed(2);
    let maximunAbsences = totalClasses * 0.3;
    let msg = '';

    if (average >= 6.5 && absences <= maximunAbsences) {
        msg = 'Approved';
    } else if (absences <= maximunAbsences) {
        msg = 'Fail, insufficient grade';
    } else if (average >= 6.5) {
        msg = 'Fail, absences'
    } else {
        msg = 'Fail, insufficient grade and absences';
    }
    
    const divResult = getObject('result');
    divResult.innerHTML = msg;

}

/*////// 4 /////*/
var sales = [

    {
        'student': 'Jason Gomes',
        'date': '10/06/2018',
        'amount': 34.99,
        'refundRequested': null
        
    },

    {
        'student': 'Carlos Blue',
        'date': '10/06/2018',
        'amount': 29.99,
        'refundRequested': null
        
    },

    {
        'student': 'Martin Heyes',
        'date': '11/06/2018',
        'amount': 39.99,
        'refundRequested': '13/06/2018'
        
    },

    {
        'student': 'Isabella Hopkins',
        'date': '11/06/2018',
        'amount': 29.99,
        'refundRequested': null
        
    },

    {
        'student': 'Andrew Walt',
        'date': '12/06/2018',
        'amount': 34.99,
        'refundRequested': null
        
    }

];

const table = getObject('course_sales');
table.innerHTML = '';
let total = 0; 

for(let a = 0 ; a < sales.length; a ++) {

    let customer = sales[a];

    /* IF REFOUND DOESNT EXISTS*/
    if(!customer.refundRequested){
        table.innerHTML += '<tr> <td>' + customer.student + '</td>'
            + '<td>' + customer.date + '</td>' + 
                '<td>' + customer.amount + '</td> </tr>';
        
        total += customer.amount;
    }
}

getObject('total_sold').innerHTML = total;
