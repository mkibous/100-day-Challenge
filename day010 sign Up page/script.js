function changetype(){
    var x = document.getElementById("password");
    var eye = document.querySelector(".eye");
    if(x.type === "password"){
        x.type = "text";
        eye.classList.remove("ph-eye-slash");
        eye.classList.add("ph-eye");
    }else{
        x.type = "password";
        eye.classList.remove("ph-eye");
        eye.classList.add("ph-eye-slash");
    }
}