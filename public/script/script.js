function onPageLoad() {
  this.colorGenerator();
  this.rangeValue('blue');
}
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function convertHexToRGBA(colorHex) {
  let hex = colorHex.replace("#", "");
  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgb(${r},${g},${b})`;
}
function colorGenerator() {
  for (var i = 0; i < 20; i++) {
    var card = document.getElementsByClassName("colorPaletContainer")[0];
    let generatedColor = getRandomColor();
    let generatedColorHex = convertHexToRGBA(generatedColor);
    card.getElementsByClassName("colorSlice")[i].style.backgroundColor =
      generatedColor;
    card.getElementsByClassName("colorSlice")[i].innerHTML =
      generatedColorHex + "<br/>" + generatedColor;
  }
}

function copy() {
  document.execCommand("Copy");
  Toastify({
    text: "Color is copied!",
    duration: 500,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #0f0303ec, #1d1d1db7)",
    }
  }).showToast();

}
function componentToHex(c) {
  var hex = c.toString(32);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex2(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
function rgbTohex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
function rangeValue(value) {
  document.getElementById(value)
  let rgb = document.getElementById('red').value + ',' + document.getElementById('green').value + ',' + document.getElementById('blue').value;
  let bg = 'rgb(' + rgb + ')';
  var displayPanel = document.getElementsByClassName('displayPanel');
  var colorSelector = document.getElementById('colorSelector');

  colorSelector.value = rgbTohex(parseInt(document.getElementById('red').value), parseInt(document.getElementById('green').value), parseInt(document.getElementById('blue').value));
  displayPanel[0].style.backgroundColor = bg;
  displayPanel[0].innerHTML = bg;
}

let convertHex = (colorHex) => {
  let hex = colorHex.replace("#", "");
  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return [r, g, b];
}

function colorPicked() {
  const colorSelector = document.getElementById('colorSelector');
  console.log(convertHex(colorSelector.value));
  document.getElementById('red').value = convertHex(colorSelector.value)[0];
  document.getElementById('green').value = convertHex(colorSelector.value)[1];
  document.getElementById('blue').value = convertHex(colorSelector.value)[2];
  var displayPanel1 = document.getElementsByClassName('displayPanel');
  displayPanel1[0].style.backgroundColor = colorSelector.value;
  displayPanel1[0].innerHTML = colorSelector.value;
}
