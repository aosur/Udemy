function getObject(id) {
   return document.getElementById(id);
}
// Mobile Menu

const hamburger = document.querySelector("img[src='img/menu/hamburguer.svg']");
const closeIcon = document.querySelector("img[src='img/menu/close.svg']");
const slider = getObject('sliding-header-menu-outer');
//var slideVisible = false;

hamburger.onclick = function () {
   slider.style.right = '0';
}

closeIcon.onclick = function () {
   slider.style.right = '-320px';
   slider.style.transition = '0.5s';
}

// About us Tab

var aboutUs = {
   "Mission": "Duis ac leo nisi. Mauris nec ex id lorem commodo rutrum rutrum a est. Cras facilisis sit amet lectus non posuere. Nullam non magna non enim blandit elementum.",
   "Vision": "Praesent ut lacinia neque, faucibus suscipit quam. Duis sed nunc rutrum, tempor mi at, euismod nibh.",
   "Values": "<ul><li>Nunc iaculis</li><li>Donec dictum fringilla</li><li>Duis convallis tortor ultrices</li><li>Curabitur in est lectus</li><li>Maecenas condimentum elit</li></ul>"
};

var unseletectedColor = "#646872";
var seletectedColor = "#2A2D34";

var boxText = getObject('box-text');
var boxTabs = document.getElementsByClassName('single-tab');

for (element of boxTabs) {

   element.addEventListener('click', function () {
      for (s of boxTabs) {
         if (s == this) {
            let aboutUsChoose = aboutUs[s.innerHTML];
            boxText.innerHTML = aboutUsChoose;
            s.style.backgroundColor = seletectedColor;
            s.style.fontWeight = 'bold';
         }
         else {
            s.style.backgroundColor = unseletectedColor;
            s.style.fontWeight = 'normal';
         }
      }
   });
}

// Service slider

var ourServices = [
   {
      'title': 'Web design',
      'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
   },

   {
      'title': 'Branding',
      'text': 'Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
   },

   {
      'title': 'Digital Marketing',
      'text': 'Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
   }

];

const serviceTitle = getObject('service-title');
const serviceText = getObject('service-text');
const previous = getObject('service-previous');
const next = getObject('service-next');
let actual = 0;
const arrowsArray = [previous, next];

for (row of arrowsArray) {

   row.addEventListener('click', function () {

      let service;
      let remainder;

      if (this == previous)
         --actual;
      else
         ++actual;

      remainder = actual % ourServices.length;
      if (remainder < 0) remainder += ourServices.length;

      service = ourServices[remainder];
      serviceTitle.innerHTML = service.title;
      serviceText.innerHTML = service.text;
   });
}

// Footer

getObject('current_year').innerHTML = new Date().getFullYear();





