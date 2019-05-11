/*    
 *    Filename: ft.js
 */

// global variables
var toppingsCost = 0;
var totalCost = 0;
var coffeeOption = false;
var donutHoles = false;

// calculates all costs based on staff and adds to total cost
function calcStaff() {
   var num = document.getElementById("donutnum");
console.log("num: " + num);
   var toppings = document.getElementById("donuttoppings");
console.log("toppings: " + toppings);
   var distance = document.getElementById("distance");
console.log("distance: " + distance);
   totalCost -= toppingsCost;
console.log("totalCost: " + totalCost);
   toppingsCost = num.value * 5 * toppings.value + distance.value * num.value;
console.log("toppingsCost: " + toppingsCost);
   totalCost += toppingsCost;
console.log("totalCost: " + totalCost);
   document.getElementById("estimate").innerHTML = "$" + totalCost;
}

// adds/subtracts cost of memory book from total cost
function toggleCoffee() {
   (document.getElementById("coffee").checked === false) ? totalCost -= 4 : totalCost += 4;
   document.getElementById("estimate").innerHTML = "$" + totalCost;
}

// adds/subtracts cost of reproduction rights from total cost
function toggleDonutHoles() {
   (document.getElementById("donuthole").checked === false) ? totalCost -= 7 : totalCost += 7;
   document.getElementById("estimate").innerHTML = "$" + totalCost;
}

// sets all form field values to defaults
function resetForm() {
   document.getElementById("donutnum").value = 1;
   document.getElementById("donuttoppings").value = 1;
   document.getElementById("coffee").checked = coffeeOption;
   document.getElementById("donuthole").checked = donutHoles;
   document.getElementById("distance").value = 0;
   calcStaff();
   createEventListeners();
}

// creates event listeners
function createEventListeners() {
   document.getElementById("donutnum").addEventListener("change", calcStaff, false);
   document.getElementById("donuttoppings").addEventListener("change", calcStaff, false);
   document.getElementById("coffee").addEventListener("change", toggleCoffee, false);
   document.getElementById("donuthole").addEventListener("change", toggleDonutHoles, false);
   document.getElementById("distance").addEventListener("change", calcStaff, false);
}

// resets form when page is reloaded
// INSTRUCTOR NOTE: Code in Step 2 on p. 82 is incorrect; should be as follows:
window.addEventListener("load", resetForm, false);
