function change_len(){
    let len = document.getElementById("length").value;
    document.querySelectorAll('.length-display').forEach(function (element) {
        element.innerHTML = len;
    });
}
function generate(){
    let password_container = document.querySelector('.password');
    let len = document.getElementById("length").value;
    let upercase = document.getElementById("uppercase").checked;
    let lowercase = document.getElementById("lowercase").checked;
    let numbers = document.getElementById("numbers").checked;
    let symbols = document.getElementById("symbols").checked;
    let checked = upercase + lowercase + numbers + symbols;
    if (checked === 0){
        password_container.innerHTML = "Please select at least one option";
        return;
    }
    let password = "";
    let type;
    while (password.length < len){
        type = Math.floor(Math.random() * 4) + 1;
        if (type === 1 && upercase){
            password += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
        }
        else if (type === 2 && lowercase){
            password += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
        }
        else if (type === 3 && numbers){
            password += Math.floor(Math.random() * 10);
        } 
        else if (type === 4 && symbols){
            let random = Math.floor(Math.random() * 32);
            if (random < 15)
                password += String.fromCharCode(random + 33);
            else if(random < 22 && random > 14)
                password += String.fromCharCode((random  - 15)+ 58);
            else if(random < 28 && random > 21)
                password += String.fromCharCode((random  - 22)+ 91);
            else if(random < 32 && random > 27)
                password += String.fromCharCode((random  - 28)+ 123);
        }
    }
    password_container.innerHTML = password;
}
function copy(){
    let password = document.querySelector('.password').innerHTML;
    if (password === "Please select at least one option" || password === ""){
    return;
    }
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        copyText.select();
        copyText.setSelectionRange(0, 99999);
    }
    navigator.clipboard.writeText(password);
    document.getElementById("copy").style.opacity = "1";
    setTimeout(function(){
        document.getElementById("copy").style.opacity = "0";
    }, 1000);
    // alert("Password copied to clipboard");
}