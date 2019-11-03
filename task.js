
function convert(){
  var val = document.getElementById("eu").value;
  var selected_value = document.getElementById("input").value;
  var ans;
  if (selected_value == "usd") ans = (val * 1.11).toFixed(2);
  if (selected_value == "cad") ans = (val * 1.45).toFixed(2);
  if (selected_value == "inr") ans = val * 78.53.toFixed(2);
  document.getElementById("converted").value = ans

}

function reset(){
  document.getElementByID('clear').reset();
}
