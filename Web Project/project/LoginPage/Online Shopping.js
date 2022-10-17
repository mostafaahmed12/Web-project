function Login() {
    var UName = document.getElementById("UN").value;
    var Cpass = document.getElementById("PW").value;
    if (UName == "mostafaeln" && Cpass == "Mostafa" ) {
        alert("Login Succesful");
        window.location.href = "D:/mostafa/pdfs/college/Web/Shopping Website/project/Home1.html";
       
    }
    else if (UName == "Admin" && Cpass=="123456") {
        alert("Welcome Admin. You Will Now Be Redirected to The Admin's Page")
        window.location.href = "D:/mostafa/pdfs/college/Web/Shopping Website/project/admin_page/indx.html";
    }
    else {
        alert ("Wrong Username or Password , Try Again")
    }

}

function Logout() {
    window.location.href = "D:/mostafa/pdfs/college/Web/Shopping Website/project/Home.html";
}