let dificult = document.querySelectorAll(".dificult");
let todoelement = document.querySelectorAll(".todo");
dificult.forEach((element) => {
    if (element.textContent === "LOW")
        element.classList.add("bg-green-500");
    else if (element.textContent === "MEDIUM")
        element.classList.add("bg-blue-500");
    else
        element.classList.add("bg-red-500");
    });
let form = document.getElementById("form");
function displayForm() {
    form.classList.toggle("hidden");
    if (!form.classList.contains("hidden")) {
        todoelement.forEach((element) => {
            sildeIn(element);
        });
    }
    else {
        todoelement.forEach((element) => {
            slidetop(element);
        });
    }
}
function sildeIn(classname)
{
classname.animate([
	{
		offset: 0,
		transform: "translateY(-400px)"
	},
	{
		offset: 1,
		transform: "translateY(0px)"
	}
],{				 
	duration: 400,
	easing: 'linear',
	delay: 0,
	iterations: 1,
	direction: 'normal',
	fill: 'none'
});
}
function slidetop(classname)
{

classname.animate(
  [
    {
      offset: 0,
      transform: "translateY(400px)",
    },
    {
      offset: 1,
      transform: "translateY(0px)",
    },
  ],
  {
    duration: 400,
    easing: "linear",
    delay: 0,
    iterations: 1,
    direction: "normal",
    fill: "none",
  }
);
}