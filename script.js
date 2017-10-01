


function onclickway1_Stealth() {
	document.getElementById('MainScreen').style.visibility = "hidden";
	document.getElementById('Level1_stealth').style.visibility = "visible";
	document.getElementById('MainScreen').style.position = "absolute";
}

document.getElementById("way1").addEventListener("click", onclickway1_Stealth);

function onclickway2_Stealth() {
	document.getElementById('Level1_stealth').style.visibility = "hidden";
	document.getElementById('Level2_stealth').style.visibility = "visible";
	document.getElementById('Level1_stealth').style.position = "absolute";
}

document.getElementById("Stealthway1_lvl1").addEventListener("click", onclickway2_Stealth);

function Dead() {
	document.getElementById("MainTheme").pause();
	document.getElementById("YouSuck").play();
	document.getElementById("GameOver").style.visibility = "visible";
	document.getElementById("Level1_stealth").style.visibility = "hidden";
	}

document.getElementById("Stealthway2_lvl1").addEventListener("click", Dead);

function Combat() {
	var	battleStealth = Math.floor(Math.random() * 2);
	console.log(battleStealth);
	if (battleStealth == 1) {
			document.getElementById("GameOver2").style.visibility = "visible";
			document.getElementById("YouSuck").play();
			document.getElementById("MainTheme").pause();
			document.getElementById("Level2_stealth").style.visibility = "hidden";

	}

	if (battleStealth == 0) {
		document.getElementById("Level3_stealth").style.visibility = "visible";
		document.getElementById("Level2_stealth").style.visibility= "hidden";
	}
}
document.getElementById("Stealthway1_lvl2").addEventListener("click", Combat);