var sh = false;
var tg = false
function show() {
    if(sh == false) {
    document.querySelector(".text").style.visibility = "visible";
    document.querySelector(".card").style.height = "340px";
    document.querySelector(".card").style.transition = "0.6s";
    document.querySelector(".cbutton").style.borderRadius = "50px";
    document.querySelector(".cbutton").style.transition = "0.5s";
    sh = true;
    } else {
        document.querySelector(".text").style.visibility = "hidden";
        document.querySelector(".card").style.height = "300px";
        document.querySelector(".cbutton").style.borderRadius = "0";
        sh = false;
    }
}
function toggle() {
    if(tg == false) {
        document.documentElement.style.setProperty("--bg", "black");
        document.documentElement.style.setProperty("--text", "white");
        document.documentElement.style.setProperty("--cbg", "dodgerblue");
        document.documentElement.style.setProperty("--sbg", "#636363");
        tg = true;
    } else {
        document.documentElement.style.setProperty("--bg", "grey");
        document.documentElement.style.setProperty("--text", "black");
        document.documentElement.style.setProperty("--cbg", "orange");
        document.documentElement.style.setProperty("--sbg", "white");
        tg = false;
    }
}