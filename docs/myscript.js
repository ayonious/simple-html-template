let toggle = 1;
const clickedFunction = () => {
  toggle = 1 - toggle;
  if(toggle) {
    document.getElementById("GreenTextId").innerHTML = "You just Clicked On This Button";
  } else {
    document.getElementById("GreenTextId").innerHTML = "Click Here";
  }
}
