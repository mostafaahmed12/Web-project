function validate_form(){
    var valid = true;
    if(document.register.fs.value =="")
    {
        alert("Please enter your first name");
        document.getElementById("fs").style.border="3px solid red";
        document.register.fs.focus();
        valid = false;
    }

    else if(document.register.ls.value =="")
    {
        alert("Please enter your last name")
        document.getElementById("ls").style.border="3px solid red";
        document.register.ls.focus();
        valid = false;
    }

    else if(document.register.em.value =="")
    {
        alert("Please enter your Email")
        document.getElementById("em").style.border="3px solid red";
        document.register.em.focus();
        valid = false;
    }

    else if(document.register.pass.value =="")
    {
        alert("Please enter your Password")
        document.getElementById("pass").style.border="3px solid red";
        document.register.pass.focus();
        valid = false;
    }

    else if(document.register.ph.value =="")
    {
        alert("Please enter your Phone")
        document.getElementById("ph").style.border="3px solid red";
        document.register.ph.focus();
        valid = false;
    }

    else if(document.register.br.value =="")
    {
        alert("Please enter your Birth day")
        document.getElementById("br").style.border="3px solid red";
        document.register.br.focus();
        valid = false;
    }

    else if(document.register.gn.value =="")
    {
        alert("Please enter your Gender")
        document.getElementById("gn").style.border="3px solid red";
        document.register.gn.focus();
        valid = false;
    }

    else if(document.register.fs.value.length>=20)
    {
        alert("please enter name less than 20 character")
        document.getElementById("fs").style.border="3px solid red";
        document.register.fs.focus();
        valid = false;
    }

    else if(document.register.ls.value.length>=20)
    {
        alert("please enter name less than 20 character")
        document.getElementById("ls").style.border="3px solid red";
        document.register.ls.focus();
        valid = false;
    }

    else if(document.register.em.value.indexof("@") == -1 || document.register.em.value.indexof(".") == -1)
    {
        alert("please enter valid email ex: info@gmail.com")
        document.getElementById("em").style.border="3px solid red";
        document.register.em.focus();
        valid = false;
    }

    else if(document.register.pass.value.length<4)
    {
        alert("please enter password more than 4 character")
        document.getElementById("pass").style.border="3px solid red";
        document.register.pass.focus();
        valid = false;
    }

    else if(document.register.pass.value.length>10)
    {
        alert("please enter name less than or equal 10 character")
        document.getElementById("pass").style.border="3px solid red";
        document.register.pass.focus();
        valid = false;
    }

    return valid;
}
function OnClick() {
    if ( valid== true) {
        alert("You Have Successfully Registered");
        window.location.href ="D:/mostafa/pdfs/college/Web/Shopping Website/project/Home.html"
    }
}