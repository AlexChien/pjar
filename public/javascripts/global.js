function showGalleryFullImage(picURL, picW, picH){
	var picHAdjusted = Number(picH)+20;
	//alert ("picURL="+picURL+"==picW="+picW+"==picH="+picH);
	var theURL = "v2/gallery/showGalleryImage.asp?picURL="+picURL+"&picW="+picW+"&picH="+picHAdjusted+"";
	var theFeatures = "toolbar=no,location=no,status=no,scrollbars=no,resizable=no,width="+picW+",height="+picHAdjusted+""
	//alert (theURL);
	//alert (theFeatures);
	MM_openBrWindow(theURL, "galleryImage", theFeatures);
}

function showHouseFullImage(picURL, picW, picH){
	var picHAdjusted = Number(picH)+20;
	var theURL = "v2/house/showHouseImage.asp?picURL="+picURL+"&picW="+picW+"&picH="+picHAdjusted+"";
	var theFeatures = "toolbar=no,location=no,status=no,scrollbars=no,resizable=no,width="+picW+",height="+picHAdjusted+""
	//alert (theURL);
	//alert (theFeatures);
	MM_openBrWindow(theURL, "galleryImage", theFeatures);
}

function showFullClip(clipURL){
	//alert ("showFullClip");
	var picWAdjusted = 560;
	var picHAdjusted = 430;
	var theURL = "v2/newscenter/showFullClip.asp?mediaTarget="+clipURL+"";
	var theFeatures = "toolbar=no,location=no,status=no,scrollbars=no,resizable=no,width="+picWAdjusted+",height="+picHAdjusted+"";
	//alert (theURL);
	//alert (theFeatures);
	MM_openBrWindow(theURL, "galleryImage", theFeatures);
}

function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}

function maximizeWindow() {

	//alert("Go full Screen");
	window.moveTo(0,0);
	window.resizeTo(screen.availWidth, screen.availHeight);
}

function showPopUp_Visit(){
	MM_openBrWindow('member/login.asp','PopUp','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=no,width=300,height=150')
}

function showPopUp_Member(){
	MM_openBrWindow('member/login.asp','PopUp','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=no,width=300,height=150')
}