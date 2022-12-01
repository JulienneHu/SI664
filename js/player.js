var py1 = document.getElementById("play1");
var py2 = document.getElementById("play2");
var py3 = document.getElementById("play3");
var music_arr = [py1, py2, py3];
var index = 0;

function st() {     //start
    document.getElementById("start").style.display = "none";
    document.getElementById("stop").style.display = "block"
    music_arr[index].play();
    rotate();
}

function pau() {     //pause
    document.getElementById("stop").style.display = "none";
    document.getElementById("start").style.display = "block";
    music_arr[index].pause();
    imagePause();
}

function myVolume() {   //modify volume
    music_arr[index].volume = document.getElementById("voice").value;
}

function reduce() { //previous song
    pau();
    index--;
    if (index == -1) {
        index = music_arr.length - 1;
    }
    st();
}

function add() {    //next song
    pau();
    index++;
    if (index > music_arr.length - 1) {
        index = 0;
    }
    st();
}

function rotate() {      //picture rotate
    var deg = 0;
    timer = setInterval(function () {
        document.getElementById("Mpicture").style.transform = "rotate(" + deg + "deg)";
        deg += 5;
        if (deg > 360) {
            deg = 0;
        }
    }, 30);
}

function imagePause() {
    clearInterval(timer);
}
