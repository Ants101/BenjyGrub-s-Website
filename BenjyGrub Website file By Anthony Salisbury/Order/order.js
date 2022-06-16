const foodPriceArr = [0, 2.50, 2.00, 2.00, 1.75, 2.00, 0.50, 2.00];
const drinkPriceArr = [0, 1.00, 1.50, 1.25, 1.75, 1.50, 2.00];

function getPrice() {
  var getFoodPrice = document.getElementById("SelectOne");
  var getDrinkPrice = document.getElementById("SelectTwo");
  var getFoodPriceQty = document.getElementById("SelectQtyOne");
  var getDrinkPriceQty = document.getElementById("SelectQtyTwo");
  var i = getFoodPrice.selectedIndex;
  var j = getDrinkPrice.selectedIndex;
  var x = getFoodPriceQty.selectedIndex;
  var y = getDrinkPriceQty.selectedIndex;
  subtotal = foodPriceArr[i] * x + drinkPriceArr[j] * y
  document.getElementById("sub-total").innerHTML = "£" + subtotal;
  total = subtotal + 0.5;
  document.getElementById("total").innerHTML = "£" + total;
}

function conOrder() {
  var txt;
  if (confirm("Are you happy with your order?")) {
    alert("Thank you for ordering from BenjyGrub!");
    window.location.href = "payment.html";
  } else {
    alert("Try again!");
  }   
}