function validate(){
    let endsWithCom = userMail.value.lastIndexOf(".com") == userMail.value.length - 4;
    let hasDot = userMail.indexOf(".") != -1;
    let hasMail = userMail.indexOf("@") != -1;
    if(endsWithCom && hasDot && hasMail){
        return true;
    }else{
        
    }
}
