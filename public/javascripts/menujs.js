//<script>

var menuArray = new Array();
var N4, N5, IE4, IE5;

function highlightCurNav(){
	loc = document.location.href;
	if (loc.substr(loc.length-1,1) == "/") {
	  loc = loc + "index.htm";
	}
	
	var navArray = new Array();
	navArray.push("index");
	navArray.push("news");
	navArray.push("club");
	navArray.push("star");
	navArray.push("league");
	navArray.push("about");
	navArray.push("bbs");	
	
	for (var i=0; i<navArray.length; i++){
		if (loc.indexOf(navArray[i]) > -1) {
			
			document.getElementById(navArray[i]).bgColor = "#ff6600";
			
		}
	}
}



function setGlobals(){
	N4 = document.layers?true:false;
	N5 = (!document.all && document.getElementById)?true:false;
	IE4 = (document.all && !document.getElementById)?true:false;
	IE5 = (document.all && document.getElementById)?true:false;
	if (N4) {var origWidth = window.innerWidth;var origHeight = window.innerHeight;window.onresize = reDo;}
}
function reDo() {if (window.innerWidth != origWidth || window.innerHeight != origHeight) location.reload();}

function menuObj(lay,nr){
	if(N4){
		this.lay = document.layers[lay];
		this.lay.parentNr = nr;
		this.lay.write = writeLay;
		this.lay.hide = hideLay;
		this.lay.show = showLay;
	}else{
		if(IE4)
			this.lay = document.all[lay];
		else
			this.lay = document.getElementById(lay);
		this.lay.parentNr = nr;
		this.lay.write = writeLayIE;
		this.lay.hide = hideLayIE;
		this.lay.show = showLayIE;
	}
	this.lay.onmouseover = menuLayOver;
	this.lay.onmouseout = menuLayOut;
}
function menuLayOver(){if(!N4) selVis("hidden");clipMenu(this.parentNr);hideAll();this.show();}
function menuLayOut(){this.hide();hideMarker();if(!N4) selVis("visible");}

function writeLay(txt){this.document.write(txt);this.document.close();}
function writeLayIE(txt){this.innerHTML = txt + '<div></div>';}
function hideLay(){this.visibility = "hide";}
function showLay(){this.visibility = "show";}
function hideLayIE(){this.style.visibility = "hidden";}
function showLayIE(){this.style.visibility = "visible";}

function selVis(vis){
	/***** no forms under the dropdowns right now...
	for(var i=0;i<document.forms.length;i++)
		for(var n=0;n<document.forms[i].elements.length;n++)
			if(document.forms[i].elements[n].type.substring(0,6) == "select")
				document.forms[i].elements[n].style.visibility=vis;
	*/
}
function hideAll() {
	for(var i=0;i < menuArray.length;i++)
		menuArray[i].lay.hide();
}
function hideMenus(){hideAll();hideMarker();if(!N4) selVis("visible");}

function showMenu(nr){
	if(menuArray.length>0){ // menus created
		if(!N4) selVis("hidden");
		clipMenu(nr);
		hideAll();
		menuArray[nr].lay.show();
	}
}

function drawMenu(){
	setGlobals();
	var menuTxt = [	
					[],
					[["企业动态","newsList.asp?CatID=1"],["团委动态","newsList.asp?CatID=2"],["特色交流","newsList.asp?CatID=3"]],
					[["太阳风","clubArticleList.asp"]],
					[["当月明星","starFeatured.asp"],["明星档案","starList.asp"],["团队精英","starTeamList.asp"],["荣誉室","starHonorRoom.asp"]],
					[["党务知识","leagueKBList.asp?CatID=1"],["团务知识","leagueKBList.asp?CatID=2"],["百联团务档案","leagueKBList.asp?CatID=3"]],
					[["关于我们","aboutUs.asp"]],
					[]
				];
	for(var i=0;i<menuTxt.length;i++){
		menuArray[i] = new menuObj('topMenu'+i,i);
		var mTxt = "";
		for(var n=0;n<menuTxt[i].length;n++){
			if(document.getElementById)
				mTxt += '<tr><td height="15" bgcolor="#8F0015" onmouseover="lOver(this)" onmouseout="lOut(this)" ';
			else
				mTxt += '<tr><td height="15" bgcolor="#8F0015" ';
			if(!N4) 
				mTxt += 'style="cursor:hand"';
			mTxt += 'onclick="goLink(\''+ menuTxt[i][n][1] +'\');return false"><span class="navtext"><A href="'+menuTxt[i][n][1]+'">&nbsp;&nbsp;'+menuTxt[i][n][0]+'</A>&nbsp;&nbsp;</span></td></tr>';
		}
		menuArray[i].lay.write('<table bgcolor="8F0015" cellspacing=0 border=0>'+mTxt+'</table>');
	}
}
function lOver(obj){
	if(!N4){ 
		obj.style.backgroundColor = "55000C";
		if(obj.children)
			obj.children[0].children[0].style.color = "FFFFFF";
	}
}
function lOut(obj){
	if(!N4){
		obj.style.backgroundColor = "8F0015";
		if(obj.children)
			obj.children[0].children[0].style.color = "DEB3B9";
	}
}

var menuclipArea = [[0,38],[39,101],[102,178],[179,241],[242,318],[319,383],[384,418]];

function clipMenu(indx){
	if(indx < menuclipArea.length){
		if(N4)
			var mLay = document.layers['markLay'];
		else if(IE4)
			var mLay = document.all['markLay'];
		else
			var mLay = document.getElementById('markLay');
		mLay.setClip = N4?setClip:setClipIE;
		mLay.show = N4?showLay:showLayIE;
		mLay.setClip(menuclipArea[indx][0], 0, menuclipArea[indx][1], 20);
		mLay.show();
	}
}
function hideMarker(){
	if(N4)
		var mLay = document.layers['markLay'];
	else if(IE4)
		var mLay = document.all['markLay'];
	else
		var mLay = document.getElementById('markLay');
	mLay.hide = N4?hideLay:hideLayIE;
	mLay.hide();
}
function setClip(x, y, x2, y2){
	this.clip.left = x;
	this.clip.top = y;
	this.clip.right = x2;
	this.clip.bottom = y2;
}
function setClipIE(x, y, x2, y2){
	this.style.clip = "rect("+y+" "+x2+" "+y2+" "+x+")";
}
function openStoryWin(){
	window.open("#","storywin","width=400,height=149,top=230,left=162");
}
function goLink(linkStr){
	window.location = linkStr;
}
function resetForm(lay, formName){
	if(document.layers)
		document.layers[lay].document.forms[formName].reset();
	else if(document.getElementById)
		document.getElementById(formName).reset();
	else
		document.forms[formName].reset();
}
//********** debug *************
/*
function showMouseLocation(){
	var x = event.clientX;
	var y = event.clientY;
	window.status = "DEBUG   x:"+x+"    y:"+y;
}
if(!N4){ 
	document.onmousemove = showMouseLocation; 
}
*/



