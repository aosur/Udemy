
var products = {
    'white': {

        'plain': {
            'unit_price': 5.12,
            'photo': 'v-white.jpg'
        },
        'printed': {
            'unit_price': 8.95,
            'photo': 'v-white-personalized.jpg'
        }
    },

    'colored': {
        'plain': {
            'unit_price': 6.04,
            'photo': 'v-color.jpg'
        },
        'printed': {
            'unit_price': 9.47,
            'photo': 'v-color-personalized.png'
        }
    }
}


// Search params

var search_params = {
    "quantity": "",
    "color": "",
    "quality": "",
    "style": "",
}


// Additional pricing rules:

// 1. The prices above are for Basic quality (q150). 
// The high quality shirt (190g/m2) has a 12% increase in the unit price.

// 2. Apply the following discounts for higher quantities: 
// 1: above 1.000 units - 20% discount
// 2: above 500 units - 12% discount
// 3: above 100 units - 5% discount


// Solution:
var highIncr = 0.12;

var aboveThousandDscto = 0.20;
var aboveFiveHundredDscto = 0.12;
var aboveHundredDscto = 0.05;



/* $(function () {

    // print results
    function printResults() {
        // img
        $('#photo-product').attr('src', 'img/' + products[search_params.color][search_params.style].photo);

        // style
        $('#result-style').html(search_params.style);

        // Quality
        $('#result-quality').html(search_params.quality);

        // Color
        $('#result-color').html(search_params.color);

        // Quantity
        $('#result-quantity').html(search_params.quantity);

        // Price
        $('#total-price').html(" " + priceCalculator(
            search_params.quantity,
            search_params.color,
            search_params.quality,
            search_params.style
        ).toFixed(2).toLocaleString("en-US"));

    }

    printResults();

    // priceCalculator function
    function priceCalculator(quantity, color, quality, style) {

        let price = quantity * products[color][style].unit_price;
        
        if (quality == 'high')
            price += highIncr * price;

        if (quantity > 1000)
            price -= aboveThousandDscto * price;
        else if (quantity > 500)
            price -= aboveFiveHundredDscto * price;
        else if (quantity > 100)
            price -= aboveHundredDscto * price;


        return price;
    }

    $('#quantity').on({
        change: function() {
            let val = $('#quantity').val();
            search_params.quantity = val;
            printResults();
        },

        keyup: function() {
                let val = $('#quantity').val();
                search_params.quantity = val;
                printResults();          
        }
    });

    $('#white').click(function () {
        $('#white').toggleClass('selected');
        $('#colored').removeClass('selected');
        search_params.color = $(this).attr('id');
        printResults();
    });

    $('#colored').click(function () {
        $('#colored').toggleClass('selected');
        $('#white').removeClass('selected');
        search_params.color = $(this).attr('id');
        printResults();
    });

    $('#q190').click(function () {
        $('#q190').toggleClass('selected');
        $('#q150').removeClass('selected');
        search_params.quality = $(this).html().slice(0, 4).toLowerCase();
        printResults();
    });

    $('#q150').click(function () {
        $('#q150').toggleClass('selected');
        $('#q190').removeClass('selected');
        search_params.quality = $(this).html().slice(0, 5).toLowerCase();
        printResults();
    });

    $('#style').change(function () {
        search_params.style = $('#style option:selected').val();
        printResults();
    });


});

 */

////////////////////////////
//// Instructor solution
///////////////////////////

$(function () {

    function updateParams() {
        search_params.quantity = parseInt($('#quantity').val());
        search_params.color = $('#color .option-button.selected').attr('id');
        search_params.quality = $('#quality .option-button.selected').attr('id');
        search_params.style = $('#style').val();
        console.log(search_params);
        updateOrderDetails();
    }

    function updateOrderDetails() {

        $('.refresh-loader').show();     
        
        var qualityId = '#' + search_params.quality;
        $('#result-quality').html($(qualityId).text());

        var colorId = '#' + search_params.color
        $('#result-color').html($(colorId).text());

        $('#result-quantity').html(search_params.quantity);

        var styleSelector = $('#style option[value=' + search_params.style + ']');
        $('#result-style').html(styleSelector.text());

        var orderTotal = calculateTotal();
        $('#total-price').text(orderTotal);

        var photoUrl = 'img/' + products[search_params.color][search_params.style].photo;
        $('#photo-product').attr('src', photoUrl);

        //In real life never do this
        setTimeout(function() {
            $('.refresh-loader').hide();
        }, 500);
       

    }

    function calculateTotal() {

        var unitPrice = products[search_params.color][search_params.style].unit_price;

        if (search_params.quality == "q190")
            unitPrice += highIncr * unitPrice;

        var total = unitPrice * search_params.quantity;

        // 2. Apply the following discounts for higher quantities: 
        // 1: above 1.000 units - 20% discount
        // 2: above 500 units - 12% discount
        // 3: above 100 units - 5% discount
        var quantity = search_params.quantity;

        if(quantity >= 1000)
            total -= aboveThousandDscto * total;
        else if(quantity >= 500)
            total -= aboveFiveHundredDscto * total;
        else if(quantity >= 100)
            total -= aboveHundredDscto * total;

        return total.toLocaleString("en-US", {style: "currency", currency: "USD"});
    }

    updateParams();

    $('#quantity').change(function() {
        search_params.quantity = parseInt($('#quantity').val());
        updateOrderDetails();
    });

    $('#style').change(function() {
        search_params.style = $('#style').val();
        updateOrderDetails();
    });

    $('.option-button').click(function() {

        var clickedParam = $(this).parent().attr('id');
        var childSelector = '#' + clickedParam + ' .option-button';

        $(childSelector).removeClass('selected');
        $(this).addClass('selected');

        search_params[clickedParam] = $(this).attr('id');

        updateOrderDetails();
    });

})







