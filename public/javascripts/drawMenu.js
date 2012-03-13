function init(){
	
	drawMenu();
	// pass over the init to another, if existing
	if(typeof(secondInit) != "undefined") {secondInit();}
	highlightCurNav()
}