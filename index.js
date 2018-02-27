var dispblock = document.getElementById("main")
var xy = 0;

document.getElementById("bg1").addEventListener("click", function() {
    dispblock.style.display = "block";
    xy = 1;
    if(xy == 1) {
        document.getElementById("t1").innerHTML = "Head Gear";
        document.getElementById("b1").style.backgroundImage = "url(imgs/gears/h1.png)";
        document.getElementById("b2").style.backgroundImage = "url(imgs/gears/h2.png)";
        document.getElementById("b3").style.backgroundImage = "url(imgs/gears/h3.png)";
    }
    
});

document.getElementById("bg2").addEventListener("click", function() {
    dispblock.style.display = "block";
    xy = 2
    if (xy == 2){
    document.getElementById("t1").innerHTML = "Body Gear";
        document.getElementById("b1").style.backgroundImage = "url(imgs/gears/b1.png)";
        document.getElementById("b2").style.backgroundImage = "url(imgs/gears/b2.png)";
        document.getElementById("b3").style.backgroundImage = "url(imgs/gears/b3.png)";
}
});

document.getElementById("bg3").addEventListener("click", function() {
    dispblock.style.display = "block";
    xy = 3
    if(xy == 3) {
        document.getElementById("t1").innerHTML = "Leg Gear";
        document.getElementById("b1").style.backgroundImage = "url(imgs/gears/l1.png)";
        document.getElementById("b2").style.backgroundImage = "url(imgs/gears/l2.png)";
        document.getElementById("b3").style.backgroundImage = "url(imgs/gears/l3.png)";
    }
});

document.getElementById("bg4").addEventListener("click", function() {
    dispblock.style.display = "block";
    xy = 4
    if(xy == 4) {
        document.getElementById("t1").innerHTML = "Foot Gear";
        document.getElementById("b1").style.backgroundImage = "url(imgs/gears/f1.png)";
        document.getElementById("b2").style.backgroundImage = "url(imgs/gears/f2.png)";
        document.getElementById("b3").style.backgroundImage = "url(imgs/gears/f3.png)";
    }
});


