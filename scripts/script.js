/*
	Student: name: Michael Tinnin
	File Name: script.js
	Date: 11/28/2021
*/
// Hamburger menu function 
function hamburger() {
		var menu = document.getElementById("menu-links");
		
		if (menu.style.display === "block") {
				menu.style.display = "none";
		} else {
				menu.style.display = "block";
		}
		
};