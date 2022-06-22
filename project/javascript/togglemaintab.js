function openMain(evt, mainName) 
{
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("main-tabs-content");
    for (i = 0; i < tabcontent.length; i++) 
    {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("main-list-item");
    for (i = 0; i < tablinks.length; i++) 
    {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    document.getElementById(mainName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();