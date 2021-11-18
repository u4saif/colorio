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

function convertHexToRGB(value) {
  let element = document.getElementById(value);
  if (element.value.length == 6) {
    let hexToRgbValue = this.convertHexToRGBA(element.value);
    document.getElementById('copyClipIcon').style.display='inline';
    document.getElementById('hexinputSpan').innerHTML = hexToRgbValue;
    document.getElementById('hexinputDiv').style.backgroundColor = hexToRgbValue;
     
  }
}

function copyWithJs(id){
  const cb = navigator.clipboard;
  const value = document.getElementById(id);
  cb.writeText(value.innerText).then(() => copy());

}

function rgbColor() {
  let R= (0<=parseInt(document.getElementById('Rinput').value)<256) ? parseInt(document.getElementById('Rinput').value) : 0;
  let G=(0<=parseInt(document.getElementById('Ginput').value)<=255) ? parseInt(document.getElementById('Ginput').value) : 0;
  let B=(0<=parseInt(document.getElementById('Binput').value)<=255) ? parseInt(document.getElementById('Binput').value) : 0;
  R=(0<=R && R<256) ? R : 0;
  G=(0<=G && G<256) ? G : 0;
  B=(0<=B && B<256) ? B : 0;
  let convertedvalue=rgbTohex(R,G,B);
  document.getElementById('rgbInputSpan').innerHTML = convertedvalue;
  document.getElementById('rgbInputDivChild').style.backgroundColor = convertedvalue;
  document.getElementById('copyClipIcon2').style.display='inline';
  
}