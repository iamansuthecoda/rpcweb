var um;
function colorr(){
	document.getElementById("usp").style.color = "black";
	document.getElementById("uss").style.color = "black";
	document.getElementById("usr").style.color = "red";
	um = 1;
}
function colorg(){
	document.getElementById("usr").style.color = "black";
	document.getElementById("uss").style.color = "black";
	document.getElementById("usp").style.color = "green";
	um = 2;
}
function colorb(){
	document.getElementById("usr").style.color = "black";
	document.getElementById("usp").style.color = "black";
	document.getElementById("uss").style.color = "blue";
	um = 3;
}

var ran = Math.floor(Math.random() * 3);
var cm;

function compmove(){
	document.getElementById("cor").style.color = "black";
	document.getElementById("cop").style.color = "black";
	document.getElementById("cos").style.color = "black";
	
	if (ran==""){
		ran = Math.floor(Math.random() * 3);
	}
	
	if (ran==0){
		document.getElementById("cor").style.color = "red";
		cm = 1;
	}
	else if(ran==1){
		document.getElementById("cop").style.color = "green";
		cm = 2;
	}
	else if(ran==2){
		document.getElementById("cos").style.color = "blue";
		cm = 3;
	}
}

function usermove(){
	compmove();
	if ((um==1 && cm==3)||(um==2 && cm==1)||(um==3 && cm==2)){
		document.getElementById("wl").innerHTML = "You Win 😄";
	} else if(um==cm) {
		document.getElementById("wl").innerHTML = "Its a Draw 😐";
	} else {
		document.getElementById("wl").innerHTML = "You Lose 😞";
	}
}

function reset(){
	document.getElementById("wl").innerHTML="Choose One 👉";
	document.getElementById("cor").style.color = "black";
	document.getElementById("cop").style.color = "black";
	document.getElementById("cos").style.color = "black";
	document.getElementById("usr").style.color = "black";
	document.getElementById("usp").style.color = "black";
	document.getElementById("uss").style.color = "black";
	ran="";
	document.getElementById("usrr").checked = false;
	document.getElementById("uspr").checked = false;
	document.getElementById("ussr").checked = false;
}