var b = document.getElementsByClassName("grid-item"); //The number of boxes in the grid
console.log(b.length, "Grid items"); //Prints the number of elements with "grid-item" class to the browser console
document.getElementById("button").addEventListener("click", boy);
var i = 0
var i2 = 0
var buttenable = false
var raudio
var rfunc
var rimage 
var alreadyreset = false
console.log("buttenable", buttenable)
	
function boy(){
	if (buttenable == false){
		buttenable = true;
		console.log("buttenable", buttenable)
	}
	
	else if (buttenable == true){
		buttenable = false;
		console.log("buttenable", buttenable)
	}
	
	if (buttenable == true){
	rfunc = Math.floor(Math.random() * 2)
	rimage = Math.floor(Math.random() * 5)
		if(rfunc == 0){
			reset()
			color()
		}
		if(rfunc == 1){
			reset()
			reveal()
		}
	}
}

while (buttenable == false && alreadyreset == false){
	reset()
	alreadyreset = true
}


function color(){
	var beep = new Audio('beep.mp3');
	var biip = new Audio('biip.mp3');
	var boop = new Audio('boop.mp3');
	if (i2 !== 1){
		raudio = Math.floor(Math.random() * 26)
		if (raudio == 0){
			b[i].style.backgroundColor = "#FF0000"; 
			beep.play();
		}
		else if (raudio == 1){
			b[i].style.backgroundColor = "#FF2200"; 
			biip.play();
		}
		else if (raudio == 2){
			b[i].style.backgroundColor = "#FF4400"; 
			boop.play();
		}
		else if (raudio == 3){
			b[i].style.backgroundColor = "#FF6600"; 
			beep.play();
		}
		else if (raudio == 4){
			b[i].style.backgroundColor = "#FF8800"; 
			biip.play();
		}
		else if (raudio == 5){
			b[i].style.backgroundColor = "#FFA300"; 
			boop.play();
		}
		else if (raudio == 6){
			b[i].style.backgroundColor = "#FFBB00"; 
			beep.play();
		}
		else if (raudio == 7){
			b[i].style.backgroundColor = "#FFD300"; 
			biip.play();
		}
		else if (raudio == 8){
			b[i].style.backgroundColor = "#FFEA00"; 
			boop.play();
		}
		else if (raudio == 9){
			b[i].style.backgroundColor = "#F7FF00";
			beep.play();
		}
		else if (raudio == 10){
			b[i].style.backgroundColor = "#A6FF00";
			biip.play();
		}
		else if (raudio == 11){
			b[i].style.backgroundColor = "#54FF00"; 
			boop.play();
		}
		else if (raudio == 12){
			b[i].style.backgroundColor = "#03FF00";
			beep.play();
		}
		else if (raudio == 13){
			b[i].style.backgroundColor = "#00FF3F";
			biip.play();
		}
		else if (raudio == 14){
			b[i].style.backgroundColor = "#00FF81";
			boop.play();
		}
		else if (raudio == 15){
			b[i].style.backgroundColor = "#00FFC1";
			beep.play();
		}
		else if (raudio == 16){
			b[i].style.backgroundColor = "#00FBFF"; 
			biip.play();
		}
		else if (raudio == 17){
			b[i].style.backgroundColor = "#00BDFF";
			boop.play();
		}
		else if (raudio == 18){
			b[i].style.backgroundColor = "#0080FF";
			beep.play();
		}
		else if (raudio == 19){
			b[i].style.backgroundColor = "#0042FF";
			biip.play();
		}
		else if (raudio == 20){
			b[i].style.backgroundColor = "#0005FF";
			boop.play();
		}
		else if (raudio == 21){
			b[i].style.backgroundColor = "#3B00FF"; 
			beep.play();
		}
		else if (raudio == 22){
			b[i].style.backgroundColor = "#7B00FF";
			biip.play();
		}
		else if (raudio == 23){
			b[i].style.backgroundColor = "#BB00FF";
			boop.play();
		}
		else if (raudio == 24){
			b[i].style.backgroundColor = "#FA00FF";
			beep.play();
		}
		else if (raudio == 25){
			b[i].style.backgroundColor = "#FF0092";
			biip.play();
		}
		
		
		if (i < b.length){
			i++
		}
		
		if(i == b.length){
			i2 = 1
			console.log("i2", i2)
		}
		
		if (i < b.length){ 							//Delays itself after each instance before looping again
			setTimeout(color, 2);
		}
	}
}

function reveal(){
	var beep = new Audio('beep.mp3');
	var biip = new Audio('biip.mp3');
	var boop = new Audio('boop.mp3');
	if (rimage == 0){
		document.body.style.backgroundImage = 'url("ario.jpg")'
	}
	if (rimage == 1){
		document.body.style.backgroundImage = 'url("nothank.png")'
	}
	if (rimage == 2){
		document.body.style.backgroundImage = 'url("deletethis.png")'
	}
	if (rimage == 3){
		document.body.style.backgroundImage = 'url("idc.jpg")'
	}
	if (rimage == 4){
		document.body.style.backgroundImage = 'url("non.jpg")'
	}
	if (rimage == 5){
		document.body.style.backgroundImage = 'url("")'
	}
	if (rimage == 6){
		document.body.style.backgroundImage = 'url(")'
	}
	if (rimage == 7){
		document.body.style.backgroundImage = 'url("")'
	}
	
	
	
	
	if (i2 !== 1){
		b[i].style.backgroundColor = "rgba(255,255,255,0)";
		raudio = Math.floor(Math.random() * 4)
		if (raudio == 0){
			beep.play();
		}
		else if (raudio == 1){
			biip.play();
		}
		else if (raudio == 2){
			boop.play();
		}
		
		if (i < b.length){
			i++
		}
		
		if(i == b.length){
			i2 = 1
			console.log("i2", i2)
		}
		
		if (i < b.length){ 							//Delays itself after each instance before looping again
			setTimeout(reveal, 2);
		}
	}
}

function reset(){
	if (i2 == 1){
		for(i = 0; i < b.length; i++){
			b[i].style.backgroundColor = "rgba(255,255,255,1)";
		}
		
		if(i === b.length){
			i2 = 0
			console.log("i2", i2)
			i = 0
		}
	}
}
