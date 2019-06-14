window.onload = ()=>
{
let backpagetopbuttom = document.querySelector( ".backpagetopbuttom-img" )
let taskbarmenubuttom = document.querySelector(".taskbar_menubuttom-img")
let taskbarmenubar = document.querySelector(".taskbar_menubar")
let movement = document.querySelector(".move")

var istaskbaropened = false;
var opacity = 1;
if(window.pageYOffset == 0)
{
    var opacity = 0;
}
backpagetopbuttom.style.opacity = opacity;
window.addEventListener( "scroll", function () 
{
    opacity += 0.1;
    if(window.pageYOffset == 0)
    {
        opacity = 0;
    }
    backpagetopbuttom.style.opacity = opacity;
});

taskbarmenubuttom.addEventListener("click",()=> 
{    
    if(!istaskbaropened)
    {
    taskbarmenubar.classList.add('openmenuactive');
    taskbarmenubuttom.classList.add('openmenubuttomactive');
    taskbarmenubar.classList.remove('closemenuactive');
    taskbarmenubuttom.classList.remove('closemenubuttomactive');
    istaskbaropened = true;
    }
    else
    {
    taskbarmenubar.classList.add('closemenuactive');
    taskbarmenubuttom.classList.add('closemenubuttomactive');
    taskbarmenubar.classList.remove('openmenuactive');
    taskbarmenubuttom.classList.remove('openmenubuttomactive');
    istaskbaropened = false;
    }
});

backpagetopbuttom.addEventListener("click",()=> 
{    
    window.scroll({	top: 0, behavior: "smooth" })
});

}
