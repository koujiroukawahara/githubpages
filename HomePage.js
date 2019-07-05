window.onload = ()=>
{
let homebuttom = document.querySelector( ".homebuttom-img" )
let taskbarmenubuttom = document.querySelector(".taskbar_menubuttom-img")
let taskbarmenubar = document.querySelector(".taskbar_menubar")
let movement = document.querySelector(".move")

let taskbarprofilelist = document.querySelector(".taskbar_profile-img")
let taskbarproductionlist = document.querySelector(".taskbar_production-img")
let taskbarhighlight = document.querySelector(".taskbar_highlight-img")

let production_tetris_next = document.querySelector(".production_Tetris_etc-font")
let production_battlerun_next = document.querySelector(".production_BattleRun_etc-font")
let production_ninja_nextOpen = document.querySelector(".production_Ninja_etc-font")
let production_deepsee_next = document.querySelector(".production_DeepSee_etc-font")

let pageclosebuttom = document.querySelector(".page_Close_Buttom-img")
let production_nextopen = document.querySelector(".production_NextOpen-img")

let production_tetris_etccontent = document.querySelector(".production_Tetris_etcContent-font")
let production_battleRun_etccontent = document.querySelector(".production_BattleRun_etcContent-font")
let production_ninja_etccontent = document.querySelector(".production_Ninja_etcContent-font")
let production_deepsee_etccontent = document.querySelector(".production_DeepSee_etcContent-font")


let production_tetris_Openetc1 = document.querySelector(".production_Tetris_Openetc1-img")
let production_tetris_Openetc2 = document.querySelector(".production_Tetris_Openetc2-img")
let production_battlerun_Openetc1 = document.querySelector(".production_BattleRun_Openetc1-img")
let production_battlerun_Openetc2 = document.querySelector(".production_BattleRun_Openetc2-img")
let production_ninja_Openetc1 = document.querySelector(".production_Ninja_Openetc1-img")
let production_ninja_Openetc2 = document.querySelector(".production_Ninja_Openetc2-img")
let production_deepsee_Openetc1 = document.querySelector(".production_DeepSee_Openetc1-img")
let production_deepsee_Openetc2 = document.querySelector(".production_DeepSee_Openetc2-img")

var istaskbaropened = false;
taskbarmenubuttom.addEventListener("click",()=> 
{    
    if(!istaskbaropened)
    {
    taskbarmenubar.classList.add('openmenuactive');
    taskbarmenubuttom.classList.add('openmenubuttomactive');
    taskbarmenubar.classList.remove('closemenuactive');
    taskbarmenubuttom.classList.remove('closemenubuttomactive');
    
    taskbarprofilelist.classList.add('openmenuactive');
    taskbarproductionlist.classList.add('openmenuactive');
    taskbarhighlight.classList.add('openmenuactive');
    taskbarprofilelist.classList.remove('closemenuactive');
    taskbarproductionlist.classList.remove('closemenuactive');
    taskbarhighlight.classList.remove('closemenuactive');

    istaskbaropened = true;
    }
    else
    {
    taskbarmenubar.classList.add('closemenuactive');
    taskbarmenubuttom.classList.add('closemenubuttomactive');
    taskbarmenubar.classList.remove('openmenuactive');
    taskbarmenubuttom.classList.remove('openmenubuttomactive');

    taskbarprofilelist.classList.add('closemenuactive');
    taskbarproductionlist.classList.add('closemenuactive');
    taskbarhighlight.classList.add('closemenuactive');
    taskbarprofilelist.classList.remove('openmenuactive');
    taskbarproductionlist.classList.remove('openmenuactive');
    taskbarhighlight.classList.remove('openmenuactive');

    istaskbaropened = false;
    }
});

homebuttom.addEventListener("click",()=> 
{    
    window.scroll({	top: 0, behavior: "smooth" })
});

taskbarproductionlist.addEventListener("click",()=> 
{    
    window.scroll({	top: 1078})
});
taskbarhighlight.addEventListener("click",()=> 
{    
    window.scroll({	top: 1300})
});

var productiontype = {
    None : 0,
    Tetris : 1,
    BattleRan : 2,
    Ninja : 3,
    DeepSee : 4
};
var openetctype = productiontype.None;

production_tetris_next.addEventListener("click",()=> 
{    
    if(openetctype == productiontype.None)
    {
    production_nextopen.classList.add('nextopenactive');
    pageclosebuttom.classList.add('openclosebuttom');
    production_nextopen.classList.remove('nextcloseactive');
    pageclosebuttom.classList.remove('closeclosebuttom');

    production_tetris_etccontent.classList.add('openetcfont');
    production_tetris_etccontent.classList.remove('closeetcfont');

    production_tetris_Openetc1.classList.add('openetcContent');
    production_tetris_Openetc1.classList.remove('closeetcContent');
    production_tetris_Openetc2.classList.add('openetcContent');
    production_tetris_Openetc2.classList.remove('closeetcContent');
    openetctype = productiontype.Tetris;
    }
});
production_battlerun_next.addEventListener("click",()=> 
{    
    if(openetctype == productiontype.None)
    {
    production_nextopen.classList.add('nextopenactive');
    pageclosebuttom.classList.add('openclosebuttom');
    production_nextopen.classList.remove('nextcloseactive');
    pageclosebuttom.classList.remove('closeclosebuttom');

    production_battleRun_etccontent.classList.add('openetcfont');
    production_battleRun_etccontent.classList.remove('closeetcfont');

    production_battlerun_Openetc1.classList.add('openetcContent');
    production_battlerun_Openetc1.classList.remove('closeetcContent');
    production_battlerun_Openetc2.classList.add('openetcContent');
    production_battlerun_Openetc2.classList.remove('closeetcContent');
    openetctype = productiontype.BattleRan;
    }
});
production_ninja_nextOpen.addEventListener("click",()=> 
{    
    if(openetctype == productiontype.None)
    {
    production_nextopen.classList.add('nextopenactive');
    pageclosebuttom.classList.add('openclosebuttom');
    production_nextopen.classList.remove('nextcloseactive');
    pageclosebuttom.classList.remove('closeclosebuttom');

    production_ninja_etccontent.classList.add('openetcfont');
    production_ninja_etccontent.classList.remove('closeetcfont');

    production_ninja_Openetc1.classList.add('openetcContent');
    production_ninja_Openetc1.classList.remove('closeetcContent');
    production_ninja_Openetc2.classList.add('openetcContent');
    production_ninja_Openetc2.classList.remove('closeetcContent');
    openetctype = productiontype.Ninja;
    }
});
production_deepsee_next.addEventListener("click",()=> 
{    
    if(openetctype == productiontype.None)
    {
    production_nextopen.classList.add('nextopenactive');
    pageclosebuttom.classList.add('openclosebuttom');
    production_nextopen.classList.remove('nextcloseactive');
    pageclosebuttom.classList.remove('closeclosebuttom');

    production_deepsee_etccontent.classList.add('openetcfont');
    production_deepsee_etccontent.classList.remove('closeetcfont');

    production_deepsee_Openetc1.classList.add('openetcContent');
    production_deepsee_Openetc1.classList.remove('closeetcContent');
    production_deepsee_Openetc2.classList.add('openetcContent');
    production_deepsee_Openetc2.classList.remove('closeetcContent');
    openetctype = productiontype.DeepSee;
    }
});

pageclosebuttom.addEventListener("click",()=> 
{ 
    production_nextopen.classList.add('nextcloseactive');
    pageclosebuttom.classList.add('closeclosebuttom');
    production_nextopen.classList.remove('nextopenactive');
    pageclosebuttom.classList.remove('openclosebuttom');
    
    if(openetctype == productiontype.Tetris)
    {
    production_tetris_etccontent.classList.add('closeetcfont');
    production_tetris_etccontent.classList.remove('openetcfont');
    production_tetris_Openetc1.classList.add('closeetcContent');
    production_tetris_Openetc1.classList.remove('openeetcContent');
    production_tetris_Openetc2.classList.add('closeetcContent');
    production_tetris_Openetc2.classList.remove('openeetcContent');
    }
    if(openetctype == productiontype.BattleRan)
    {
    production_battleRun_etccontent.classList.add('closeetcfont');
    production_battleRun_etccontent.classList.remove('openetcfont');
    production_battlerun_Openetc1.classList.add('closeetcContent');
    production_battlerun_Openetc1.classList.remove('openeetcContent');
    production_battlerun_Openetc2.classList.add('closeetcContent');
    production_battlerun_Openetc2.classList.remove('openeetcContent');
    }
    if(openetctype == productiontype.Ninja)
    {
    production_ninja_etccontent.classList.add('closeetcfont');
    production_ninja_etccontent.classList.remove('openetcfont');
    production_ninja_Openetc1.classList.add('closeetcContent');
    production_ninja_Openetc1.classList.remove('openeetcContent');
    production_ninja_Openetc2.classList.add('closeetcContent');
    production_ninja_Openetc2.classList.remove('openeetcContent');
    }
    if(openetctype == productiontype.DeepSee)
    {
    production_deepsee_etccontent.classList.add('closeetcfont');
    production_deepsee_etccontent.classList.remove('openetcfont');
    production_deepsee_Openetc1.classList.add('closeetcContent');
    production_deepsee_Openetc1.classList.remove('openeetcContent');
    production_deepsee_Openetc2.classList.add('closeetcContent');
    production_deepsee_Openetc2.classList.remove('openeetcContent');
    }
    openetctype = productiontype.None;
});

}
