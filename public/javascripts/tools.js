// Server Name and Port and Path
//var serverPathName = "../upload/";


function convertTitle(entry) {
	if (entry.indexOf("~") != -1) {
	while (entry.indexOf("~") != -1) {
	var tempTitle = ((entry.substring(0, entry.indexOf("~")))+"'"+(entry.substring(entry.indexOf("~") + 1, entry.length)));
	entry = tempTitle;
	}
	}
	else var tempTitle = entry;
	return tempTitle;
}


/**
 * Set Selected Name to Hidden Text
 */
function doSelected (oSelect,oHidden){
    var index = oSelect.selectedIndex;
     if (oSelect.options(index).value != "")
        oHidden.value = oSelect.options(index).text;
     else oHidden.value = "";
      //alert(oHidden.value);

}

function gotoNextPage(form, url){
  form.NextPage.value=url;
//  alert(form.NextPage.value);
}

function building() {
	alert ("由于本站为演示程序，本联结被禁用。");
}

function goLink (sectionID, jURL, normalNav) {
	if (sectionID == null) {
		alert ("对不起，此联接有错误，清与管理员联系！");
	} else {
		//alert (normalNav);
		top.window.document.nav.SetVariable("/Detector:id",sectionID);
		top.window.document.nav.SetVariable("/:normalNav",normalNav);
		if (jURL != null) {
			window.location = jURL;
		}
	}
	
}