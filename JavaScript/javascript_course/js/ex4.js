function getObject(id) {
    return document.getElementById(id);
}

////////////////
/*EX 1 */
///////////////

var select = getObject('shipments');

var shipments =
    {
        'standard': {
            'leadTime': 7,
            'fee': 2
        },
        'express': {
            'leadTime': 3,
            'fee': 4.5
        }
    };

select.onchange = function () {


    let selectedOption = getObject('shipments').value;
    let purchase = shipments[selectedOption];

    let orderDate = new Date();
    let deliveryDay = new Date(orderDate.getTime() + purchase.leadTime * 86400000);
    let deliveryFee = purchase.fee;

    getObject('order_date').innerHTML = localDateIso(orderDate);
    getObject('delivery_date').innerHTML = localDateIso(deliveryDay);
    getObject('delivery_fee').innerHTML = deliveryFee.toFixed(2);
  
}

function localDateIso(someDate) {

    //convert the local time zone offset from minutes to milliseconds
    z = someDate.getTimezoneOffset() * 60 * 1000

    //subtract the offset from t
    tLocal = someDate - z

    //create shifted Date object
    tLocal = new Date(tLocal)

    //convert to ISO format string
    iso = tLocal.toISOString()

    //drop the milliseconds and zone
    iso = iso.slice(0, 10)//move the last digit to show or not the time

    //replace the ugly 'T' with a space
   // iso = iso.replace('T', ' ')
    return iso;
}

////////////////
/*EX 2 */
///////////////

var phones =
{
    'iphone_se_red': {
        'name': 'iPhone SE 64GB Red',
        'price': '450',
        'currency': 'US$',
        'imageUrl': "https://www.bigw.com.au/medias/sys_master/images/images/h7b/h48/15832798298142.jpg"
    },
    'iphone_11_black': {
        'name': 'iPhone 11 128GB Black',
        'price': '869',
        'currency': 'EUR',
        'imageUrl': "https://assets.swappie.com/iphon11musta1-300x300.jpg"
    },
    'iphone_8_plus_silver': {
        'name': 'iPhone 8 Plus 64GB Silver',
        'price': '519',
        'currency': 'US$',
        'imageUrl': "https://celsat.es/wp-content/uploads/2019/01/APPLE-iPHONE-8-PLUS-64-GB-SILVER.jpg"
    }
};

var radios = document.getElementsByName('product');
for (radio of radios) {
    radio.onclick = function () {

        var iphone;
        for (radio of radios) {
            if (radio.checked) {
                iphone = phones[radio.value];
                break;
            }
        }
        getObject('phone_image').src = iphone.imageUrl;
        getObject('phone_name').innerHTML = iphone.name;
        getObject('phone_price').innerHTML = iphone.currency + " " + parseFloat(iphone.price).toFixed(2);
    }
}

////////////////
/*EX 3 */
///////////////

/* var btnStart = getObject('start_stop');
var btnReset = getObject('reset');

var milisecondsAcumalate = 0;
var interval;

var isRunning = false;


function changeStatus() {
    if (isRunning) isRunning = false;
    else isRunning = true;
}

btnStart.onclick = function () {

    changeStatus();

    if (isRunning) {
        interval = window.setInterval(function () {

            let currentDay = new Date(new Date("1 jan 1970").getTime() + milisecondsAcumalate);
            let hours = String(currentDay.getHours()).padStart(2, '0');
            let minutes = String(currentDay.getMinutes()).padStart(2, '0');
            let seconds = String(currentDay.getSeconds()).padStart(2, '0');
            let mil = String(currentDay.getMilliseconds()).padStart(3, '0');

            getObject('stopwatch').innerHTML = hours + ":" + minutes + ":" + seconds + ":" + mil;

            ++milisecondsAcumalate;

        }, 1);
    } else {
        window.clearInterval(interval);
    }
}

btnReset.onclick = function () {
    milisecondsAcumalate = 0;
    getObject('stopwatch').innerHTML = '00:00:00 000';
} */

/* var isRunning = false,
startTime,
currentTime,
elapsedTime = 0,
clockInterval,
hours,
minutes,
seconds,
miliseconds,
remainder;

getObject('start_stop').onclick = function() {

    if(!isRunning) {
        //start the clock
        isRunning = true
        if(elapsedTime == 0){
            startTime = new Date().getTime();
        } else {
            startTime = new Date().getTime() - elapsedTime;
        }
        //update time
        clockInterval = window.setInterval(function() {

            currentTime = new Date().getTime();
            elapsedTime = currentTime - startTime;

            //miliseconds per hour 3600000
            // miliseconds per minute 60000
            // miliseconds per second 1000

            hours = Math.floor(elapsedTime / 3600000);
            remainder = elapsedTime % 3600000;
            minutes = Math.floor(remainder / 60000);
            remainder = remainder % 60000;
            seconds = Math.floor(remainder / 1000);
            remainder = remainder % 1000;
            miliseconds = remainder;

            //getObject('stopwatch').innerHTML = formatTime(hours) + ":" + formatTime(minutes)
               // + ":" + formatTime(seconds) +  " " + completeZeros(miliseconds, 3);*/

            /*getObject('stopwatch').innerHTML = hours + ":" + minutes + ":" + seconds

        }, 10);
    } else {
        //stop the clock
        window.clearInterval(clockInterval);
        isRunning = false;
    }
}

getObject('reset').onclick = function() {  
    startTime = new Date().getTime();  
    if(!isRunning) {
        elapsedTime = 0;
        getObject('stopwatch').innerHTML = '00:00:00 000';
    }
}

function formatTime(value) {
    return completeZeros(value % 60, 2);
}

function completeZeros(number,length) {
    return String(number).padStart(length, '0');
}



 */


// Rehaciendo reloj
var btnStart = getObject('start_stop');
var btnReset = getObject('reset');
var clickTime;
var currentTime;
var elapsedTime = 0;
var interval;
var hours, minutes, seconds, remainder;
var isRunning = false;

btnStart.onclick = function() {

    if(elapsedTime == 0)
        clickTime = new Date();
    else
        clickTime = new Date().getTime() - elapsedTime;

    if(!isRunning) {
        isRunning = true;
        interval = window.setInterval(function() {

            currentTime = new Date();
            elapsedTime = currentTime- clickTime;

             //miliseconds per hour 3600000
            // miliseconds per minute 60000
            // miliseconds per second 1000

            hours = Math.floor(elapsedTime / 3600000);
            remainder = elapsedTime % 3600000; // 0 <= remainder < 3600000 = 1 hour
            minutes = Math.floor(remainder / 60000);
            remainder = remainder % 60000 // 0 <= remainder < 60000 = 1 minute
            seconds = Math.floor(remainder / 1000);
            remainder = remainder % 1000; // 0 <= remainder < 1000 = 1 second

            let timeFormat = String(hours).padStart(2, '0') + ":" + String(minutes).padStart(2, '0') +
                ":" + String(seconds).padStart(2, '0') + " " + String(remainder).padStart(3, '0');

            getObject('stopwatch').innerHTML = timeFormat;

        }, 10);
    }else {
        isRunning = false;
        window.clearInterval(interval);
    }
}

btnReset.onclick = function() {
    clickTime = new Date();
    if(!isRunning) {
        elapsedTime = 0;
        getObject('stopwatch').innerHTML = '00:00:00 000';
    } 
}
