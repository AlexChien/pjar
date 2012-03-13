var lastMouseX;
var lastMouseY;
var curPopupWindow = null;
var helpWindow = null;

function setLastMousePosition(e) {
	if (navigator.appName.indexOf("Microsoft") != -1) e = window.event;
	lastMouseX = e.screenX;
	lastMouseY = e.screenY;
}

function openClickout(url) {
		// Taken out due to inconsistent escape results between java and javascript
        //window.open('/sales/linkout.jsp?url='+escape(url), "_blank", 'width=640,height=480,dependent=no,resizable=yes,toolbar=yes,status=yes,directories=yes,menubar=yes,scrollbars=1', false);
	window.open(url, "_blank", 'width=640,height=480,dependent=no,resizable=yes,toolbar=yes,status=yes,directories=yes,menubar=yes,scrollbars=1', false);
}

function openPopup(url, name, pWidth, pHeight, features, snapToLastMousePosition) {
   closePopup();
	if (snapToLastMousePosition) {
		if (lastMouseX - pWidth < 0) {
			lastMouseX = pWidth;
		}
		if (lastMouseY + pHeight > screen.height) {
			lastMouseY -= (lastMouseY + pHeight + 50) - screen.height;
		}
                lastMouseX -= pWidth;
                lastMouseY += 10;
		features +=	"screenX=" + lastMouseX + ",left=" + lastMouseX + "screenY=" + lastMouseY + ",top=" + lastMouseY;
	}
	curPopupWindow = window.open(url, name, features, true);

}

function closePopup() {
	if (curPopupWindow != null) {

		if (!curPopupWindow.closed) {
			curPopupWindow.close();
		}
		curPopupWindow = null;
	}
}


function openLookup(baseURL,modified,searchParam) {
	if (modified == '1') baseURL = baseURL + searchParam;
	openPopup(baseURL, "lookup", 350, 300, "width=430,height=300,toolbar=no,status=no,directories=no,menubar=no,resizable=yes,scrollable=no", true);
}


function lookupPick(formName, parentIdElementName, parentEditElementName, relatedFieldName, id, display, relatedFieldValue) {

	var parentIdElement = "document." + formName + "[\"" + parentIdElementName + "\"]";
	var parentEditElement = "document." + formName + "[\"" + parentEditElementName + "\"]";
	//var parentEditOldValueElement = "document." + formName + "[\"" + parentEditElementName + "_lkold" + "\"]";
	var relatedFieldElement = "document." + formName + "[\"" + relatedFieldName + "\"]";

	if (eval(parentIdElement + ".type") == "select-one") {
		var found = false;
		for (i = 0; i < eval(parentIdElement + ".options.length"); i++) {
			if (eval(parentIdElement + ".options[" + i + "].value") == id ) {
				eval(parentIdElement + ".selectedIndex=" + i);
				found = true;
				break;
			}
		}
		if (!found) {
			eval(parentIdElement + ".options[" + parentIdElement + ".options.length] = new Option('" + display + "','" + id + "')");
			eval(parentIdElement + ".selectedIndex=" + parentIdElement + ".options.length - 1");
		}
		eval(parentEditElement + ".value = " + "\"" + display +"\"");
		//eval(parentEditOldValueElement + ".value = " + "\"" + display +"\"");
	} else {
		eval(parentIdElement + ".value = " + "\"" + id +"\"");
		eval(parentEditElement + ".value = " + "\"" + display +"\"");
		//eval(parentEditOldValueElement + ".value = " + "\"" + display +"\"");
	}

	if (relatedFieldName.length > 0) {
		eval(relatedFieldElement + ".value = " + "\"" + relatedFieldValue +"\"");
	}

	/*var parentSubmitParam = parentEditElementName+"_lspf";
    var doPost = eval("document."+formName+"[\""+ parentSubmitParam + "\"].value");
   	if (doPost == '1') {
   		eval("document."+formName+".submit()");
	}*/
	closePopup();

	return false;
}

function pick(form,field,val) {
	eval("document."+form+"[\""+field+"\"].value=" + "\""+val+"\"");
   closePopup();
	return false;
}

function openCalendar(url) {
	openPopup(url, "Calendar", 189, 193, "width=189,height=193,dependent=no,resizable=no,toolbar=no,status=no,directories=no,menubar=no", true);
}

function openComboBox(url) {
	openPopup(replaceChar(url, ' ', '%'), "Select", 220, 270, "width=270,height=200,dependent=yes,resizable=yes,toolbar=no,status=no,directories=no,menubar=no,scrollbars=1", true);
}

ie = document.all?1:0
ns4 = document.layers?1:0

function CA(frmName){
	var frm = eval(frmName);
	for (var i=0;i<frm.elements.length;i++)
		{
		var e = frm.elements[i];
		if ((e.name != 'allbox') && (e.type=='checkbox'))
		{
			e.checked = frm.allbox.checked;
			if (frm.allbox.checked)
			hL(e);
			else
			dL(e);
		}
	}
}

function CCA(frmName,CB){
	var frm = eval(frmName);
	if (CB.checked)
		hL(CB);
	else
		dL(CB);
		var TB=TO=0;
		for (var i=0;i<frm.elements.length;i++)
		{
			var e = frm.elements[i];
			if ((e.name != 'allbox') && (e.type=='checkbox'))
			{
			TB++;
			if (e.checked)
			TO++;
		}
	}
	if (TO==TB)
	frm.allbox.checked=true;
	else
	frm.allbox.checked=false;
}

function hL(E){
	if (ie)
	{
		while (E.tagName!="TR")
		{E=E.parentElement;}
	}
	else
	{
		while (E.tagName!="TR")
		{E=E.parentNode;}
	}
	E.className = "H";
}

function dL(E){
	if (ie)
	{
		while (E.tagName!="TR")
		{E=E.parentElement;}
	}
	else
	{
		while (E.tagName!="TR")
		{E=E.parentNode;}
	}
	E.className = "";
}

function buttonOut(param)
	{
	param.borderColor="#C5C8D1";
	}

function buttonOver(param)
	{
	with (param)
		{
		borderLeftColor="#CCCCCC";
		borderTopColor="#CCCCCC";
		borderRightColor="#000000";
		borderBottomColor="#000000";
		}
	}

function buttonDown(param)
	{	
	with (param)
		{
		borderLeftColor="#000000";
		borderTopColor="#000000";
		borderRightColor="#CCCCCC";
		borderBottomColor="#CCCCCC";
		}
	}
	
function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}