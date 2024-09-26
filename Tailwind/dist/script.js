let btn = document.getElementById('abc');
function myFunction()
{
  if(btn.style.display === "flex") {
    btn.style.display = "none";
  } else {
    btn.style.display = "flex";
  }
}