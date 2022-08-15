var btntranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var output = document.querySelector("#output");
var clear = document.querySelector("#btn-clear");

var url = "https://api.funtranslations.com/translate/minion.json";

function constructUrl(text) {
  return url + "?" + "text=" + text;
}

btntranslate.addEventListener("click", clickEventHandler);
clear.addEventListener("click", clearEventHandler);

function errorHandler(error) {
  output.innerText = "Error Occured " + error;
  console.log("Error occured: " + error);
}

function showOutput(text) {
  output.innerText = text;
}

function clearEventHandler() {
  txtInput.value = "";
  showOutput("");
}
function clickEventHandler() {
  var value = txtInput.value;
  fetch(constructUrl(value))
    .then((response) => response.json())
    .then((json) => showOutput(json.contents.translated))
    .catch(errorHandler);
}
