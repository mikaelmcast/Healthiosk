function displayUsername() {
    var userName=document.getElementById("txt").value;
    localStorage.setItem("textvalue", userName);
    return false;
}

function mouseOver() {
  document.getElementById("hoverJS").style.color = "red";
}

function mouseOut() {
  document.getElementById("hoverJS").style.color = "#022B3A";
}