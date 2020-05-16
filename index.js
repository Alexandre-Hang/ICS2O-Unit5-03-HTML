// JavaScript File
var age;
function movieWatch() {
  age = document.getElementById("age").value;
  if (age >= 17)
  {
    alert ("You may watch any R or less rated movie alone");
  }
  else if (age >= 13)
  {
    alert("You may watch any PG-13 or less rated movie alone");
  }
  else
  {
    alert("You may watch any G or PG rated movie alone");
  }
}