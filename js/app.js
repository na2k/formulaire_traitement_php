var modulePriceChange = (function() {
   "use strict";

   window.addEventListener("DOMContentLoaded", function listen() {
       const input = document.getElementById("price_max");
       const price = document.getElementById("current_price_max");
       input.oninput = function changePrice(evt) {
           price.textContent = input.value;
       };
   });

}());

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

var moduleShapeShifter = (function() {
   "use strict";

   window.addEventListener("DOMContentLoaded", function listen() {
       const circle = document.querySelector(".circle");
       const input = document.getElementById("shape_shifter");
       const size = circle.querySelector(".size");
       input.oninput = function shift(evt){
        size.textContent = input.value;
        circle.style.width = input.value +"px";
        circle.style.height = input.value +"px";
        circle.style.lineHeight = input.value +"px";
        circle.style.backgroundColor = getRandomColor();
        circle.style.border = "20px solid "+getRandomColor();
      };
   });

}());
