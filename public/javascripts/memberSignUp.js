function checkfrm(formToValidate){
	alert (formToValidate);
	var frm = formToValidate;
	
	getHouseType(frm);
	
	if (!checkUsername(frm.Username)){
		
	}
	else if (!checkPassword(frm.Password,frm.Password2)){
	}
	else if (!checkString(frm.Fullname,'请输入您的姓名!!')){

	}
	else if (frm.EMAIL.value !=''  && !checkEmail(frm.EMAIL,'请检查您的电子邮件!!')){
	
	}
	else if (frm.Telephone.value != '' && !checkNumber(frm.Telephone,'请检查您的电话!!')){
	
	}
	else if (frm.Mobile.value != '' && !checkNumber(frm.Mobile,'请检查您的手机!!')){
	
	}
	else if (!checkString(frm.CardTypeID,'请选择证件类型!!')){

	}
	else if (!checkNumber(frm.IDNO,'请检查证件号码!!')){

	}
	else if (!checkString(frm.ResidentProvinceID,'请选择省份!!')){

	}
	else if (!checkString(frm.ResidentCityID,'请选择城市!!')){

	}
	else if (!checkString(frm.ResidentDistrictID,'请选择城市区域!!')){

	}
	else if (frm.Zip.value != '' && !checkNumber(frm.Zip,'请检查您的邮政编码!!')){
	
	}
	else if (!checkString(frm.WorkProvinceID,'请选择省份!!')){

	}
	else if (!checkString(frm.WorkCityID,'请选择城市!!')){

	}
	else if (!checkString(frm.WorkDistrictID,'请选择城市区域!!')){

	}
	else if (frm.HouseType_f.value != '' && !checkNumber(frm.HouseType_f,'请检查房型喜好!!')){
	
	}
	else if (frm.HouseType_t.value != '' && !checkNumber(frm.HouseType_t,'请检查房型喜好!!')){
	
	}
	else if (frm.HouseType_w.value != '' && !checkNumber(frm.HouseType_w,'请检查房型喜好!!')){
	
	}
	else {return true; }
	//alert ("validate error.");
	return false;
}