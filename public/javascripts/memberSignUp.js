function checkfrm(formToValidate){
	alert (formToValidate);
	var frm = formToValidate;
	
	getHouseType(frm);
	
	if (!checkUsername(frm.Username)){
		
	}
	else if (!checkPassword(frm.Password,frm.Password2)){
	}
	else if (!checkString(frm.Fullname,'��������������!!')){

	}
	else if (frm.EMAIL.value !=''  && !checkEmail(frm.EMAIL,'�������ĵ����ʼ�!!')){
	
	}
	else if (frm.Telephone.value != '' && !checkNumber(frm.Telephone,'�������ĵ绰!!')){
	
	}
	else if (frm.Mobile.value != '' && !checkNumber(frm.Mobile,'���������ֻ�!!')){
	
	}
	else if (!checkString(frm.CardTypeID,'��ѡ��֤������!!')){

	}
	else if (!checkNumber(frm.IDNO,'����֤������!!')){

	}
	else if (!checkString(frm.ResidentProvinceID,'��ѡ��ʡ��!!')){

	}
	else if (!checkString(frm.ResidentCityID,'��ѡ�����!!')){

	}
	else if (!checkString(frm.ResidentDistrictID,'��ѡ���������!!')){

	}
	else if (frm.Zip.value != '' && !checkNumber(frm.Zip,'����������������!!')){
	
	}
	else if (!checkString(frm.WorkProvinceID,'��ѡ��ʡ��!!')){

	}
	else if (!checkString(frm.WorkCityID,'��ѡ�����!!')){

	}
	else if (!checkString(frm.WorkDistrictID,'��ѡ���������!!')){

	}
	else if (frm.HouseType_f.value != '' && !checkNumber(frm.HouseType_f,'���鷿��ϲ��!!')){
	
	}
	else if (frm.HouseType_t.value != '' && !checkNumber(frm.HouseType_t,'���鷿��ϲ��!!')){
	
	}
	else if (frm.HouseType_w.value != '' && !checkNumber(frm.HouseType_w,'���鷿��ϲ��!!')){
	
	}
	else {return true; }
	//alert ("validate error.");
	return false;
}