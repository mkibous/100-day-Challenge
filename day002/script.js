
let images = document.querySelectorAll(".im");
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function () {
        for (let j = 0; j < images.length; j++) {
            if (images[j] === images[i]) {
                images[j].classList.add("selected");
                document.getElementById("big_img").src = images[j].src;
            }
            else {
                images[j].classList.remove("selected");
        }}
    });
}

