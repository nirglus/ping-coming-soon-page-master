function validate(){
    let userMail = document.getElementById("userMail");
    let endsWithCom = userMail.value.lastIndexOf(".com") == userMail.value.length - 4;
    let hasDot = userMail.value.indexOf(".") != -1;
    let hasMail = userMail.value.indexOf("@") != -1;
    if(endsWithCom && hasDot && hasMail){
        document.querySelector(".error").classList.add("hidden");
        userMail.classList.remove("errorShake");
        return true;
    }else{
        userMail.style.border ="1px solid hsl(354, 100%, 66%)";
        document.querySelector(".error").classList.remove("hidden");
        userMail.classList.add("errorShake");
        setTimeout(() => {
            userMail.classList.remove("errorShake");
        }, 300)
        return false;
    }
}
