function change_img(id1, id2, id3, src){
    let i1 = document.getElementById(id1);
    let i2 = document.getElementById(id2);
    let i3 = document.getElementById(id3);
    i1.style.border = "2px solid #44AADD";
    i1.style.opacity = "1";
    i2.style.border = "none";
    i2.style.opacity = "0.5";
    i3.style.border = "none";
    i3.style.opacity = "0.5";
    document.getElementById("big_img").src = src;
}