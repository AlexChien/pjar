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
	alert ("���ڱ�վΪ��ʾ���򣬱����ᱻ���á�");
}

function goLink (sectionID, jURL, normalNav) {
	if (sectionID == null) {
		alert ("�Բ��𣬴������д����������Ա��ϵ��");
	} else {
		//alert (normalNav);
		top.window.document.nav.SetVariable("/Detector:id",sectionID);
		top.window.document.nav.SetVariable("/:normalNav",normalNav);
		if (jURL != null) {
			window.location = jURL;
		}
	}
	
}