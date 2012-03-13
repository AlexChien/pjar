	<!--//
	function checkUsername(ob) {
		var r1 = new RegExp('[^A-Za-z0-9_]','');
		if ( ob.value == '' ) {
			window.alert('请输入用户名!!');
			ob.focus();
		}
		else if ( !isNaN(ob.value.substr(0, 1)))
		{
			window.alert('用户名不能以数字开头!!');
			ob.focus();
		}
		else if ( ob.value.substr(0, 1) == '_' )
		{
			window.alert('用户名不能以下划线开头!!');
			ob.focus();
		}
		else if ( ob.value.search(r1) >= 0 ) {
			window.alert('用户名中含有非法字符!!');
			ob.focus();
		} else { return true;}
		return false;
	}

	function checkPassword(pwd1,pwd2) {
		var r2 = new RegExp('[^A-Za-z0-9]','');
		if ( pwd1.value.length < 6 ) {
			window.alert('口令不得少于4个字符!!');
			pwd1.select();
			pwd1.focus();
		}
		else if ( pwd1.value.search(r2) >= 0 ) {
			window.alert('口令中有非法字符!!');
			pwd1.select();
			pwd1.focus();
		}
		else if ( pwd2.value != pwd1.value) {
			window.alert('验证口令错误!!');
			pwd2.select();
			pwd2.focus();
		} else { return true;}
		return false;
	}

	function checkEmail(ob){
		if ( ob.value.indexOf('@',0) == -1 ||
			ob.value == '' ||
			ob.value.indexOf('.',0) == -1 ) {
			window.alert('请重新输入正确的电子邮件地址!!');
			ob.select();
			ob.focus();
		} else { return true;}
		return false;
	}
	
	function checkMaxLength(obj, maxLen, msg){
		if (obj.value == '' || obj.value.length > maxLen) {
				window.alert(msg);
				obj.focus();
		} else { return true; }
		return false;
	}

        function checkNumber(ob,msg){
        	if ( ob.value == '' ) {
			window.alert(msg);
			ob.focus();

		} else if ( isNaN(ob.value)) {
                        window.alert(msg);
                        ob.focus();
                } else{return true;}
		return false;

        }

        function checkString(ob,msg){
		if ( ob.value == '' ) {
			window.alert(msg);
			ob.focus();

		} else {return true;}
		return false;
	}
	
	function checkDate(obj,msg){
		if (obj.value == '' || !isDate(obj.value)){
			window.alert(msg);
			obj.focus();	
		} else { return true; }
		
		return false;
	}

        
function isDate(sDate) {
	var iYear, iMonth, iDay, iIndex

	var	reg
	reg = new RegExp('[^0-9-]','')
	if (sDate.search(reg) >= 0)
		return false;

	iIndex = sDate.indexOf('-');
	if ( iIndex == -1 )
		return false;
	else {
		iYear = parseFloat(sDate.substr(0, iIndex));
		if ( isNaN(iYear) || iYear < 1900 || iYear > 2099 )
			return false;
		else
			sDate = sDate.substring(iIndex + 1, sDate.length);
	}

	iIndex = sDate.indexOf('-');
	if ( iIndex == -1 )
		return false;
	else {
		iMonth = parseFloat(sDate.substr(0, iIndex));
		if ( isNaN(iMonth) || iMonth < 1 || iMonth > 12 )
			return false;
		else
			sDate = sDate.substring(iIndex + 1, sDate.length);
	}

	iIndex = sDate.indexOf('-');
	if ( iIndex >= 0 )
		return false;
	else {
		iDay = parseFloat(sDate);
		if ( isNaN(iDay) || iDay < 1 || iDay > 31 )
			return false;
	}


	switch(iMonth) {
		case 4:
		case 6:
		case 9:
		case 11:
			if ( iDay > 30 )
				return false;
			else
				break;
		case 2:
			if ( ( ( iYear % 4 == 0 && iYear % 100 != 0 ) || iYear % 400 == 0 ) && iDay > 29 )
				return false;
			else if ( (iYear % 4 != 0 || (iYear % 100 == 0 && iYear % 400 != 0)) && iDay > 28 )
				return false;
			else
				break;
		default:
	}
	return true;
}



function parseDate(sDate) {
	var iIndex, iYear, iMonth, iDay

	iIndex = sDate.indexOf('-');
	iYear = parseFloat(sDate.substr(0, iIndex));
	sDate = sDate.substring(iIndex + 1, sDate.length);

	iIndex = sDate.indexOf('-');
	iMonth = parseFloat(sDate.substr(0, iIndex));
	iDay = parseFloat(sDate.substring(iIndex + 1, sDate.length));

	return new Date(iYear, iMonth - 1, iDay);
}

function checkContent(content, msg)
{
	if (content.value == '')
	{
		window.alert(msg);
		return false;
	}
	else 
	{
		return true;
	}
}
	//-->

