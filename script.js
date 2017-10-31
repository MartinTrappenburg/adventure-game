function onclickway0_stealth() {
	document.getElementById("MainScreen").style.visibility = "hidden";
	document.getElementById("Level0_stealth").style.visibility = "visible";
	document.getElementById("Level0_stealth").style.position = "absolute";
}

function DeadHome() {
	document.getElementById("MainTheme").pause();
	document.getElementById("YouSuck").play();
	document.getElementById("GameOverHome").style.visibility = "visible";
	document.getElementById("Level0_stealth").style.visibility = "hidden";
	}
document.getElementById("Stealthway2_lvl0").addEventListener("click", DeadHome);


document.getElementById("way1").addEventListener("click", onclickway0_stealth);

function onclickway1_Stealth() {
	document.getElementById('Level0_stealth').style.visibility = "hidden";
	document.getElementById('Level1_stealth').style.visibility = "visible";
	}

document.getElementById("Stealthway1_lvl0").addEventListener("click", onclickway1_Stealth);

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
document.getElementById("Stealthway2_lvl2").addEventListener("click", Combat);

function Explore() {
	document.getElementById("Level4_Stealth_Explore").style.visibility = "visible";
	document.getElementById("Level3_stealth").style.visibility = "hidden";
	document.getElementById("Level4_Stealth_Explore").style.position = "absolute";
}
document.getElementById("Stealthway1_lvl3").addEventListener("click", Explore);

function Take_Skull_Function() {
	document.getElementById("Level5_Stealth_Explore").style.visibility = "visible";
	document.getElementById("Level4_Stealth_Explore").style.visibility = "hidden";
	document.getElementById("Level5_Stealth_Explore").style.position = "absolute";
}
document.getElementById("Take_Skull").addEventListener("click", Take_Skull_Function)

function Assassination() {
	document.getElementById("Level3_stealth").style.visibility = "hidden";
	document.getElementById("Level4_Stealth_QuickKill").style.visibility = "visible";
	document.getElementById("Open").style.visibility = "hidden";
}
document.getElementById("Stealthway2_lvl3").addEventListener("click", Assassination);

function SearchKey() {
	document.getElementById("Level4_Stealth_QuickKill_Search").style.visibility = "visible";
	document.getElementById("Level4_Stealth_QuickKill").style.visibility = "hidden";	
	document.getElementById("Open").style.visibility = "hidden";
}

document.getElementById("SearchForKey").addEventListener("click", SearchKey);

function GoBack()	{
	document.getElementById("Level4_Stealth_QuickKill_Search").style.visibility = "hidden";
	document.getElementById("Level4_Stealth_QuickKill").style.visibility = "visible";
	document.getElementById("Open").style.visibility = "visible";
}
document.getElementById("KeyFound").addEventListener("click", GoBack);

function FinaleMain() {
	document.getElementById("Best_End").style.visibility = "visible";
	document.getElementById("Level4_Stealth_QuickKill").style.visibility = "hidden";
	document.getElementById("Open").style.visibility = "hidden";
}
document.getElementById("Open").addEventListener("click", FinaleMain);

function GameOverFinal() {
	document.getElementById("GameOver3").style.visibility = "visible";
	document.getElementById("Level4_Stealth_QuickKill").style.visibility = "hidden";
	document.getElementById("MainTheme").pause();
	document.getElementById("YouSuck").play();
}
document.getElementById("Bust").addEventListener("click", GameOverFinal);

function ExploreDeath() {
	document.getElementById("Level5_Stealth_Explore_Dead").style.visibility = "visible";
	document.getElementById("Level4_Stealth_Explore").style.visibility = "hidden";
	document.getElementById("MainTheme").pause();
	document.getElementById("YouSuck").play();
}
document.getElementById("Leave_Skull").addEventListener("click", ExploreDeath);