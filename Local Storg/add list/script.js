let a = [];
function alldata() {
  let data_value = document.getElementById("text").value;
  a.push(data_value);
  window.localStorage.setItem("Array", a);
  let dis = window.localStorage.getItem("Array");
  document.getElementById("display").innerHTML = dis + "<br>";
}