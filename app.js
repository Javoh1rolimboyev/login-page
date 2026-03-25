function login(){
    let l = "Javohir"
    let p = "Javohir1234"
    let login = document.getElementById("login").value;
    let parol = document.getElementById("password").value;
    if(login == l && parol == p){
        document.getElementById("message").innerHTML = "Saytga kirishingiz mumkin";
        document.getElementById("message").style.color = "green"
        
    }else{
        document.getElementById("message").innerHTML = "Login yoki parol xato";
        document.getElementById("message").style.color = "red"
    }
}