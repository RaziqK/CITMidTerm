var hatnum = 1,
shirtnum = 1,
jeannum = 1,
footnum = 1;

var hatt = document.getElementById("im1");
var shirtt = document.getElementById("im2");
var legg = document.getElementById("im3");
var shoee = document.getElementById("im4");

document.getElementById("prev").addEventListener("click", function(){
	console.log(hatt.checked, shirtt.checked, legg.checked, shoee.checked);
    if(hatt.checked){
        hatnum = hatnum - 1;
        if(hatnum <= 0){
            hatnum = 3;
        } document.getElementById("hat").src ="imgs/gears/h"+hatnum+ ".png";
    } else if(shirtt.checked){
        shirtnum = shirtnum - 1;
        if(shirtnum <= 0){
            shirtnum = 3;
        } document.getElementById("shirt").src="imgs/gears/b"+shirtnum+ ".png";
    } else if(legg.checked){
        jeannum = jeannum - 1;
        if (jeannum <= 0){
            jeannum = 3;
        }document.getElementById("leg").src ="imgs/gears/l"+jeannum+ ".png";
    } else if(shoee.checked){
        footnum = footnum - 1;
        if(footnum <= 0){
            footnum = 3;
        }document.getElementById("shoe").src ="imgs/gears/f"+footnum+ ".png";
    } else{
        alert("Press a button")
    }
});
document.getElementById("next").addEventListener("click", function(){
	console.log(hatt.checked, shirtt.checked, legg.checked, shoee.checked);
    if(hatt.checked){
        hatnum = hatnum + 1;
        if(hatnum >= 4){
            hatnum = 1;
        } document.getElementById("hat").src ="imgs/gears/h"+hatnum+ ".png";
    } else if(shirtt.checked){
        shirtnum = shirtnum + 1;
        if(shirtnum >= 4){
            shirtnum = 1;
        } document.getElementById("shirt").src="imgs/gears/b"+shirtnum+ ".png";
    } else if(legg.checked){
        jeannum = jeannum + 1;
        if (jeannum >= 4){
            jeannum = 1;
        }document.getElementById("leg").src ="imgs/gears/l"+jeannum+ ".png";
    } else if(shoee.checked){
        footnum = footnum + 1;
        if(footnum >= 4){
            footnum = 1;
        }document.getElementById("shoe").src ="imgs/gears/f"+footnum+ ".png";
    } else{
        alert("Press a button")
    }
});
document.getElementById("text1").addEventListener("keyup", function(ev){
    if(ev.keyCode == 13){
        if (text1.value == "combo1"){
        document.getElementById("hat").src = "imgs/gears/h1.png";
        document.getElementById("shirt").src = "imgs/gears/b1.png";
        document.getElementById("leg").src = "imgs/gears/l1.png";
        document.getElementById("shoe").src = "imgs/gears/f1.png";
        } else if (text1.value == "combo2"){
        document.getElementById("hat").src = "imgs/gears/h2.png";
        document.getElementById("shirt").src = "imgs/gears/b2.png";
        document.getElementById("leg").src = "imgs/gears/l2.png";
        document.getElementById("shoe").src = "imgs/gears/f2.png";
        } else if (text1.value == "combo3"){
        document.getElementById("hat").src = "imgs/gears/h3.png";
        document.getElementById("shirt").src = "imgs/gears/b3.png";
        document.getElementById("leg").src = "imgs/gears/l3.png";
        document.getElementById("shoe").src = "imgs/gears/f3.png";
        } 
    }
    });