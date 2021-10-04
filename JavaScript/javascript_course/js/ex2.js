function printInBox(elementId, valor) {
    return document.getElementById(elementId).innerHTML = valor;
}

function getContent(elementId) {
    return document.getElementById(elementId).innerHTML
}

/* 1 */
function celsiusToFahrenheit(celsius) {
    return 9/5*celsius + 32;
}

printInBox('fahr_1', celsiusToFahrenheit(parseFloat(getContent('celsius_1'))));
printInBox('fahr_2', celsiusToFahrenheit(parseFloat(getContent('celsius_2'))));
printInBox('fahr_3', celsiusToFahrenheit(parseFloat(getContent('celsius_3'))));


/* 2 */
var classification = [ "John Hill" , "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green" ]; 
printInBox('best_students', classification.slice(-3));

/* 3 */
var course = {
    'title': "Learn to Code in Python 3",
    'categories': ['programming', 'technology', 'python'],
    '5_stars_reviews': 420,
    '4_stars_reviews': 80,
    '3_stars_reviews': 33,
    '2_stars_reviews': 20,
    '1_stars_reviews': 4
}
       
/*a*/ printInBox('course_title', course.title);

/*b*/ printInBox('main_category', course.categories[0]);

/*c */
function reviewsPercentage() {

    let total = course["5_stars_reviews"] + course["4_stars_reviews"] + course["3_stars_reviews"] + 
        course["2_stars_reviews"] + course["1_stars_reviews"];
        
    let percent = Math.round(course['5_stars_reviews']/total * 100);

    return percent + "%";
}

printInBox('reviews_5_stars', reviewsPercentage());

/* 3 */
var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"]
shoppingList.unshift('chocolate');
shoppingList.pop();
shoppingList.push('Cheese');
shoppingList.push('Eggs');

console.log(shoppingList);




