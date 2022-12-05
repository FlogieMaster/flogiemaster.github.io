let color_main = 'rgb(255, 255, 255)'
let color_background = 'rgb(0, 0, 0)'
var isclock = false

function google() {
    if (searchinput.value == 'settings') {
        body.innerHTML = '<div class="settings"><span class="setting-title">Settings</span><form onsubmit="settings_maincolor();  return false;" id="settings"><input class="maincolor" type="text" id="maincolorinput"autocomplete="off" placeholder="Main-Color white"></form><form onsubmit="settings_backgroundcolor(); return false;" id="settings"><input class="bkcolor" type="text" id="backgroundcolorinput" autocomplete="off"placeholder="Background-Color black"></form></div>'
        document.querySelector('body').style.color = color_main;
        document.querySelector('input').style.color = color_main;
        document.querySelector('span').style.color = color_main;
    } if(searchinput.value == 'clock on'){
        body.innerHTML = '<div class="clock" id="clock"><span id="hrs">00</span><span> : </span><span id="min">00</span><span> : </span><span id="sec">00</span></div><form onsubmit="google();" id="maincontent"><h1><input class="search" type="text" id="searchinput" autocomplete="off"></h1></form>'
        isclock = true;
    } else {
        console.log(searchinput.value);
        open("https://google.com/search?q=" + searchinput.value)
        searchinput.value = '';
        searchinput.select();
    }
}

function onstart() {
    if(isclock == true){
        body.innerHTML = '<div class="clock" id="clock"><span id="hrs">00</span><span> : </span><span id="min">00</span><span> : </span><span id="sec">00</span></div><form onsubmit="google();" id="maincontent"><h1><input class="search" type="text" id="searchinput" autocomplete="off"></h1></form>'
    } else{
        body.innerHTML = '<form onsubmit="google();" id="maincontent"></form>'
    }
    maincontent.innerHTML = '<h1><input class="search" type="text" id="searchinput" autocomplete="off"></h1>';
    searchinput.select();
    document.querySelector('body').style.color = color_main;
    document.querySelector('input').style.color = color_main;
    document.querySelector('span').style.color = color_main;
    document.getElementById('searchinput').style.backgroundColor = color_background;
    document.getElementsById('clocktime').style.color = color_background;
}

function settings_maincolor() {
    if (maincolorinput.value == 'esc') {
        onstart();
    }
    color_main = maincolorinput.value;
    document.querySelector('body').style.color = color_main;
    document.querySelector('input').style.color = color_main;
    document.querySelector('span').style.color = color_main;
    maincolorinput.value = '';
}

function settings_backgroundcolor() {
    if (backgroundcolorinput.value == 'esc') {
        onstart();
    }
    color_background = backgroundcolorinput.value;
    document.querySelector('body').style.backgroundColor = color_background;
    document.querySelector('input').style.backgroundColor = color_background;
    document.querySelector('span').style.backgroundColor = color_background;
    backgroundcolorinput.value = '';
}

function clock(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    if(min < 10){
        min = "0" + min;
    }
    if(sec < 10){
        sec = "0" + sec;
    }
    document.getElementById('hrs').innerHTML = hrs;
    document.getElementById('min').innerHTML = min;
    document.getElementById('sec').innerHTML = sec;
}

setInterval(clock, 1000)
