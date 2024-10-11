let dificult = document.querySelectorAll(".dificult");
dificult.forEach((element) => {
    if (element.textContent === "LOW")
        element.classList.add("bg-green-500");
    else if (element.textContent === "MEDIUM")
        element.classList.add("bg-blue-500");
    else
        element.classList.add("bg-red-500");
    });