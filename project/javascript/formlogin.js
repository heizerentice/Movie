function validate()
{
    var username = document.getElementById("username-login").value;
    var password = document.getElementById("password-login").value;
    if(username == "heizerentice" && password == "buithuha")
    {
        window.location = "success.html";
        return false;
    }
    else
    {
        text= 'Invalid login or password';
    }
    document.getElementById('wrong').innerHTML=text;
}

