var frm = document.form1;
var RTEbgcolor = "";

function onSubmitFunc() {

//	if (c==1||c==2) {
//	if (window.richedit.getBGColor() != "")
//		RTEbgcolor.value = window.richedit.getBGColor();
//	else if (RTEbgcolor.value != "")
//		window.richedit.setBGColor(RTEbgcolor.value)
//	if (c==1){
//		frm.body.value = "<html>"
//		+ "<div style='background-color:" + window.richedit.getBGColor() + "'>"
//		+ window.richedit.getHTML()
//		+ "</div></html>"
//	}
//	else
//		frm.body.value = "<html>" + window.richedit.getHTML() + "</html>"
//	}
//	else

//	frm.body.value = window.richedit.getText();
	frm.body.value = window.richedit.getHTML();
	frm.plaintext.value = window.richedit.getText();
	//alert ("body.value = " + frm.body.value);
	//return false;
}

function replaceAll(allstr, oldstr, newstr)
{
  while (allstr.indexOf(oldstr) != -1 ){
  	allstr = allstr.replace(oldstr, newstr);
	}
	//alert(allstr);
	return allstr;
}

function RTELoaded(w) {
w.setToolbar("tbmode",true)
w.setToolbar("tbimage",true)
w.setToolbar("tbtable",true)
w.setSkin("#idToolbar {border: 1px black solid; background:#EEEEEE}")
if (RTEbgcolor.value != "")
{
w.setBGColor(RTEbgcolor.value);
}
Ued();

if (frm && RTEbgcolor.value != "")
window.richedit.setBGColor(RTEbgcolor.value);
window.richedit.setFocus();
}

function Ued() {
plaintext =   frm.body.value;
if (plaintext.search(/<html>/) == 0)
//window.richedit.setHTML("<DIV>" + plaintext + "</DIV>");
window.richedit.setHTML(plaintext);
else
//window.richedit.setHTML("<DIV>" + plaintext.replace(/\n/g, "</DIV>"));
window.richedit.setHTML(plaintext);
frm.body.style.visibility='hidden';
document.all.richedit.style.visibility = 'visible';
//window.richedit.setFocus()
}