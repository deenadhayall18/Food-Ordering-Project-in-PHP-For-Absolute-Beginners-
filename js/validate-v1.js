
$(function(){
	$('#frmFirmReg').validate({
		rules:{
			txtNameFirm:{required:true,maxlength:64},
			txtContactName:{required:true,maxlength:64},
			txtContactMobile:{required:true,number:true,maxlength:10,minValue:5999999999},
			txtEmailFirm:{required:true,email1:true,maxlength:64},
			sctRegCategory:{required:true},
			sctNumMember:{required:true},
			txtAAddress:{required:true},
			sctAddressDistrict:{required:true},
			txtAddressPincode:{required:true,number:true,maxlength:6,minlength:6,minValue:99999},
			txtMem1Name:{required:true,maxlength:64},
			txtMem1SecName:{required:true,maxlength:64},
			radMem1Gender:{required:true},
			txtMem1Dob:{required:true,dateFormat1:true,minDynDate:[-1,0,-80],maxDynDate:[0,0,-18]},
			radMem1Edu:{required:true},
			txtMem1EmpCardNo:{required:true},
			sctMem1EmpCardExchng:{required:true},
			txtMem1EmpCardValid:{required:true,dateFormat1:true,minDynDate:[-1,0,0]},
			radMem1WorkPsu:{required:true},
			radMem1DependOil:{required:true},
			radMem1regContract:{required:true},
			txtMem1Mobile:{required:true,number:true,maxlength:10,minValue:5999999999},
			txtMem1EmpCardPdf:{required:true,extension:"pdf", filesize:[200,2000]},
			txtMem2Name:{required:true,maxlength:64},
			txtMem2SecName:{required:true,maxlength:64},
			radMem2Gender:{required:true},
			txtMem2Dob:{required:true,dateFormat1:true,minDynDate:[-1,0,-80],maxDynDate:[0,0,-18]},
			radMem2Edu:{required:true},
			txtMem2EmpCardNo:{required:true},
			sctMem2EmpCardExchng:{required:true},
			txtMem2EmpCardValid:{required:true,dateFormat1:true,minDynDate:[-1,0,0]},
			radMem2WorkPsu:{required:true},
			radMem2DependOil:{required:true},
			radMem2regContract:{required:true},
			txtMem2Mobile:{required:true,number:true,maxlength:10,minValue:5999999999},
			txtMem2EmpCardPdf:{required:true,extension:"pdf", filesize:[200,2000]},
			txtMem3Name:{required:true,maxlength:64},
			txtMem3SecName:{required:true,maxlength:64},
			radMem3Gender:{required:true},
			txtMem3Dob:{required:true,dateFormat1:true,minDynDate:[-1,0,-80],maxDynDate:[0,0,-18]},
			radMem3Edu:{required:true},
			txtMem3EmpCardNo:{required:true},
			sctMem3EmpCardExchng:{required:true},
			txtMem3EmpCardValid:{required:true,dateFormat1:true,minDynDate:[-1,0,0]},
			radMem3WorkPsu:{required:true},
			radMem3DependOil:{required:true},
			radMem3regContract:{required:true},
			txtMem3Mobile:{required:true,number:true,maxlength:10,minValue:5999999999},
			txtMem3EmpCardPdf:{required:true,extension:"pdf", filesize:[200,2000]},
			txtMem4Name:{required:true,maxlength:64},
			txtMem4SecName:{required:true,maxlength:64},
			radMem4Gender:{required:true},
			txtMem4Dob:{required:true,dateFormat1:true,minDynDate:[-1,0,-80],maxDynDate:[0,0,-18]},
			radMem4Edu:{required:true},
			txtMem4EmpCardNo:{required:true},
			sctMem4EmpCardExchng:{required:true},
			txtMem4EmpCardValid:{required:true,dateFormat1:true,minDynDate:[-1,0,0]},
			radMem4WorkPsu:{required:true},
			radMem4DependOil:{required:true},
			radMem4regContract:{required:true},
			txtMem4Mobile:{required:true,number:true,maxlength:10,minValue:5999999999},
			txtMem4EmpCardPdf:{required:true,extension:"pdf", filesize:[200,2000]},
			txtMem5Name:{required:true,maxlength:64},
			txtMem5SecName:{required:true,maxlength:64},
			radMem5Gender:{required:true},
			txtMem5Dob:{required:true,dateFormat1:true,minDynDate:[-1,0,-80],maxDynDate:[0,0,-18]},
			radMem5Edu:{required:true},
			txtMem5EmpCardNo:{required:true},
			sctMem5EmpCardExchng:{required:true},
			txtMem5EmpCardValid:{required:true,dateFormat1:true,minDynDate:[-1,0,0]},
			radMem5WorkPsu:{required:true},
			radMem5DependOil:{required:true},
			radMem5regContract:{required:true},
			txtMem5Mobile:{required:true,number:true,maxlength:10,minValue:5999999999},
			txtMem5EmpCardPdf:{required:true,extension:"pdf", filesize:[200,2000]},
			txtMem6Name:{required:true,maxlength:64},
			txtMem6SecName:{required:true,maxlength:64},
			radMem6Gender:{required:true},
			txtMem6Dob:{required:true,dateFormat1:true,minDynDate:[-1,0,-80],maxDynDate:[0,0,-18]},
			radMem6Edu:{required:true},
			txtMem6EmpCardNo:{required:true},
			sctMem6EmpCardExchng:{required:true},
			txtMem6EmpCardValid:{required:true,dateFormat1:true,minDynDate:[-1,0,0]},
			radMem6WorkPsu:{required:true},
			radMem6DependOil:{required:true},
			radMem6regContract:{required:true},
			txtMem6Mobile:{required:true,number:true,maxlength:10,minValue:5999999999},
			txtMem6EmpCardPdf:{required:true,extension:"pdf", filesize:[200,2000]},
			txtMem7Name:{required:true,maxlength:64},
			txtMem7SecName:{required:true,maxlength:64},
			radMem7Gender:{required:true},
			txtMem7Dob:{required:true,dateFormat1:true,minDynDate:[-1,0,-80],maxDynDate:[0,0,-18]},
			radMem7Edu:{required:true},
			txtMem7EmpCardNo:{required:true},
			sctMem7EmpCardExchng:{required:true},
			txtMem7EmpCardValid:{required:true,dateFormat1:true,minDynDate:[-1,0,0]},
			radMem7WorkPsu:{required:true},
			radMem7DependOil:{required:true},
			radMem7regContract:{required:true},
			txtMem7Mobile:{required:true,number:true,maxlength:10,minValue:5999999999},
			txtMem7EmpCardPdf:{required:true,extension:"pdf", filesize:[200,2000]},
			txtMem8Name:{required:true,maxlength:64},
			txtMem8SecName:{required:true,maxlength:64},
			radMem8Gender:{required:true},
			txtMem8Dob:{required:true,dateFormat1:true,minDynDate:[-1,0,-80],maxDynDate:[0,0,-18]},
			radMem8Edu:{required:true},
			txtMem8EmpCardNo:{required:true},
			sctMem8EmpCardExchng:{required:true},
			txtMem8EmpCardValid:{required:true,dateFormat1:true,minDynDate:[-1,0,0]},
			radMem8WorkPsu:{required:true},
			radMem8DependOil:{required:true},
			radMem8regContract:{required:true},
			txtMem8Mobile:{required:true,number:true,maxlength:10,minValue:5999999999},
			txtMem8EmpCardPdf:{required:true,extension:"pdf", filesize:[200,2000]},
			txtMem9Name:{required:true,maxlength:64},
			txtMem9SecName:{required:true,maxlength:64},
			radMem9Gender:{required:true},
			txtMem9Dob:{required:true,dateFormat1:true,minDynDate:[-1,0,-80],maxDynDate:[0,0,-18]},
			radMem9Edu:{required:true},
			txtMem9EmpCardNo:{required:true},
			sctMem9EmpCardExchng:{required:true},
			txtMem9EmpCardValid:{required:true,dateFormat1:true,minDynDate:[-1,0,0]},
			radMem9WorkPsu:{required:true},
			radMem9DependOil:{required:true},
			radMem9regContract:{required:true},
			txtMem9Mobile:{required:true,number:true,maxlength:10,minValue:5999999999},
			txtMem9EmpCardPdf:{required:true,extension:"pdf", filesize:[200,2000]},
			txtMem10Name:{required:true,maxlength:64},
			txtMem10SecName:{required:true,maxlength:64},
			radMem10Gender:{required:true},
			txtMem10Dob:{required:true,dateFormat1:true,minDynDate:[-1,0,-80],maxDynDate:[0,0,-18]},
			radMem10Edu:{required:true},
			txtMem10EmpCardNo:{required:true},
			sctMem10EmpCardExchng:{required:true},
			txtMem10EmpCardValid:{required:true,dateFormat1:true,minDynDate:[-1,0,0]},
			radMem10WorkPsu:{required:true},
			radMem10DependOil:{required:true},
			radMem10regContract:{required:true},
			txtMem10Mobile:{required:true,number:true,maxlength:10,minValue:5999999999},
			txtMem10EmpCardPdf:{required:true,extension:"pdf", filesize:[200,2000]},
			txtMem11Name:{required:true,maxlength:64},
			txtMem11SecName:{required:true,maxlength:64},
			radMem11Gender:{required:true},
			txtMem11Dob:{required:true,dateFormat1:true,minDynDate:[-1,0,-80],maxDynDate:[0,0,-18]},
			radMem11Edu:{required:true},
			txtMem11EmpCardNo:{required:true},
			sctMem11EmpCardExchng:{required:true},
			txtMem11EmpCardValid:{required:true,dateFormat1:true,minDynDate:[-1,0,0]},
			radMem11WorkPsu:{required:true},
			radMem11DependOil:{required:true},
			radMem11regContract:{required:true},
			txtMem11Mobile:{required:true,number:true,maxlength:10,minValue:5999999999},
			txtMem11EmpCardPdf:{required:true,extension:"pdf", filesize:[200,2000]},
			txtMem12Name:{required:true,maxlength:64},
			txtMem12SecName:{required:true,maxlength:64},
			radMem12Gender:{required:true},
			txtMem12Dob:{required:true,dateFormat1:true,minDynDate:[-1,0,-80],maxDynDate:[0,0,-18]},
			radMem12Edu:{required:true},
			txtMem12EmpCardNo:{required:true},
			sctMem12EmpCardExchng:{required:true},
			txtMem12EmpCardValid:{required:true,dateFormat1:true,minDynDate:[-1,0,0]},
			radMem12WorkPsu:{required:true},
			radMem12DependOil:{required:true},
			radMem12regContract:{required:true},
			txtMem12Mobile:{required:true,number:true,maxlength:10,minValue:5999999999},
			txtMem12EmpCardPdf:{required:true,extension:"pdf", filesize:[200,2000]},
			txtMem13Name:{required:true,maxlength:64},
			txtMem13SecName:{required:true,maxlength:64},
			radMem13Gender:{required:true},
			txtMem13Dob:{required:true,dateFormat1:true,minDynDate:[-1,0,-80],maxDynDate:[0,0,-18]},
			radMem13Edu:{required:true},
			txtMem13EmpCardNo:{required:true},
			sctMem13EmpCardExchng:{required:true},
			txtMem13EmpCardValid:{required:true,dateFormat1:true,minDynDate:[-1,0,0]},
			radMem13WorkPsu:{required:true},
			radMem13DependOil:{required:true},
			radMem13regContract:{required:true},
			txtMem13Mobile:{required:true,number:true,maxlength:10,minValue:5999999999},
			txtMem13EmpCardPdf:{required:true,extension:"pdf", filesize:[200,2000]},
			txtMem14Name:{required:true,maxlength:64},
			txtMem14SecName:{required:true,maxlength:64},
			radMem14Gender:{required:true},
			txtMem14Dob:{required:true,dateFormat1:true,minDynDate:[-1,0,-80],maxDynDate:[0,0,-18]},
			radMem14Edu:{required:true},
			txtMem14EmpCardNo:{required:true},
			sctMem14EmpCardExchng:{required:true},
			txtMem14EmpCardValid:{required:true,dateFormat1:true,minDynDate:[-1,0,0]},
			radMem14WorkPsu:{required:true},
			radMem14DependOil:{required:true},
			radMem14regContract:{required:true},
			txtMem14Mobile:{required:true,number:true,maxlength:10,minValue:5999999999},
			txtMem14EmpCardPdf:{required:true,extension:"pdf", filesize:[200,2000]},
			txtMem15Name:{required:true,maxlength:64},
			txtMem15SecName:{required:true,maxlength:64},
			radMem15Gender:{required:true},
			txtMem15Dob:{required:true,dateFormat1:true,minDynDate:[-1,0,-80],maxDynDate:[0,0,-18]},
			radMem15Edu:{required:true},
			txtMem15EmpCardNo:{required:true},
			sctMem15EmpCardExchng:{required:true},
			txtMem15EmpCardValid:{required:true,dateFormat1:true,minDynDate:[-1,0,0]},
			radMem15WorkPsu:{required:true},
			radMem15DependOil:{required:true},
			radMem15regContract:{required:true},
			txtMem15Mobile:{required:true,number:true,maxlength:10,minValue:5999999999},
			txtMem15EmpCardPdf:{required:true,extension:"pdf", filesize:[200,2000]},
			chkFormDeclaration:{required:true},
			chkUnemployedDeclaration:{required:true},
			chkDependentDeclaration:{required:true},
			chkContractorDeclaration:{required:true},
			chkInfoDeclaration:{required:true}
		},
		messages:{
			txtNameFirm:{required:'Firm name required'},
			sctRegCategory:{required:'Registration category required'},
			txtContactName:{required:'Contact name required'},
			txtContactMobile:{required:'Contact mobile no. required',minValue:'Enter valid Mobile no.'},
			txtEmailFirm:{required:'Firm E-mail ID required'},
			sctNumMember:{required:'No. of members/partners required'},
			txtAAddress:{required:'Address required'},
			sctAddressDistrict:{required:'District required'},
			txtAddressPincode:{required:'Pincode required'},
			txtMem1Name:{required:'Member-1 name required'},
			txtMem1SecName:{required:'Member-1 father/husband name required'},
			radMem1Gender:{required:'Member-1 gender required'},
			txtMem1Dob:{required:'Member-1 DOB required'},
			radMem1Edu:{required:'Member-1 education qualification required'},
			txtMem1EmpCardNo:{required:'Member-1 Emp. card no. required'},
			sctMem1EmpCardExchng:{required:'Member-1 Emp. exchange required'},
			txtMem1EmpCardValid:{required:'Member-1 Emp. card validity required'},
			radMem1WorkPsu:{required:'Member-1 PSU status required'},
			radMem1DependOil:{required:'Member-1 Dependant status required'},
			radMem1regContract:{required:'Member-1 contract status required'},
			txtMem1Mobile:{required:'Member-1 mobile no. required',minValue:'Enter valid Mobile no.'},
			txtMem1EmpCardPdf:{required:'Member-1 Emp. exchange card file required'},
			txtMem2Name:{required:'Member-2 name required'},
			txtMem2SecName:{required:'Member-2 father/husband name required'},
			radMem2Gender:{required:'Member-2 gender required'},
			txtMem2Dob:{required:'Member-2 DOB required'},
			radMem2Edu:{required:'Member-2 education qualification required'},
			txtMem2EmpCardNo:{required:'Member-2 Emp. card no. required'},
			sctMem2EmpCardExchng:{required:'Member-2 Emp. exchange required'},
			txtMem2EmpCardValid:{required:'Member-2 Emp. card validity required'},
			radMem2WorkPsu:{required:'Member-2 PSU status required'},
			radMem2DependOil:{required:'Member-2 Dependant status required'},
			radMem2regContract:{required:'Member-2 contract status required'},
			txtMem2Mobile:{required:'Member-2 mobile no. required',minValue:'Enter valid Mobile no.'},
			txtMem2EmpCardPdf:{required:'Member-2 Emp. exchange card file required'},
			txtMem3Name:{required:'Member-3 name required'},
			txtMem3SecName:{required:'Member-3 father/husband name required'},
			radMem3Gender:{required:'Member-3 gender required'},
			txtMem3Dob:{required:'Member-3 DOB required'},
			radMem3Edu:{required:'Member-3 education qualification required'},
			txtMem3EmpCardNo:{required:'Member-3 Emp. card no. required'},
			sctMem3EmpCardExchng:{required:'Member-3 Emp. exchange required'},
			txtMem3EmpCardValid:{required:'Member-3 Emp. card validity required'},
			radMem3WorkPsu:{required:'Member-3 PSU status required'},
			radMem3DependOil:{required:'Member-3 Dependant status required'},
			radMem3regContract:{required:'Member-3 contract status required'},
			txtMem3Mobile:{required:'Member-3 mobile no. required',minValue:'Enter valid Mobile no.'},
			txtMem3EmpCardPdf:{required:'Member-3 Emp. exchange card file required'},
			txtMem4Name:{required:'Member-4 name required'},
			txtMem4SecName:{required:'Member-4 father/husband name required'},
			radMem4Gender:{required:'Member-4 gender required'},
			txtMem4Dob:{required:'Member-4 DOB required'},
			radMem4Edu:{required:'Member-4 education qualification required'},
			txtMem4EmpCardNo:{required:'Member-4 Emp. card no. required'},
			sctMem4EmpCardExchng:{required:'Member-4 Emp. exchange required'},
			txtMem4EmpCardValid:{required:'Member-4 Emp. card validity required'},
			radMem4WorkPsu:{required:'Member-4 PSU status required'},
			radMem4DependOil:{required:'Member-4 Dependant status required'},
			radMem4regContract:{required:'Member-4 contract status required'},
			txtMem4Mobile:{required:'Member-4 mobile no. required',minValue:'Enter valid Mobile no.'},
			txtMem4EmpCardPdf:{required:'Member-4 Emp. exchange card file required'},
			txtMem5Name:{required:'Member-5 name required'},
			txtMem5SecName:{required:'Member-5 father/husband name required'},
			radMem5Gender:{required:'Member-5 gender required'},
			txtMem5Dob:{required:'Member-5 DOB required'},
			radMem5Edu:{required:'Member-5 education qualification required'},
			txtMem5EmpCardNo:{required:'Member-5 Emp. card no. required'},
			sctMem5EmpCardExchng:{required:'Member-5 Emp. exchange required'},
			txtMem5EmpCardValid:{required:'Member-5 Emp. card validity required'},
			radMem5WorkPsu:{required:'Member-5 PSU status required'},
			radMem5DependOil:{required:'Member-5 Dependant status required'},
			radMem5regContract:{required:'Member-5 contract status required'},
			txtMem5Mobile:{required:'Member-5 mobile no. required',minValue:'Enter valid Mobile no.'},
			txtMem5EmpCardPdf:{required:'Member-5 Emp. exchange card file required'},
			txtMem6Name:{required:'Member-6 name required'},
			txtMem6SecName:{required:'Member-6 father/husband name required'},
			radMem6Gender:{required:'Member-6 gender required'},
			txtMem6Dob:{required:'Member-6 DOB required'},
			radMem6Edu:{required:'Member-6 education qualification required'},
			txtMem6EmpCardNo:{required:'Member-6 Emp. card no. required'},
			sctMem6EmpCardExchng:{required:'Member-6 Emp. exchange required'},
			txtMem6EmpCardValid:{required:'Member-6 Emp. card validity required'},
			radMem6WorkPsu:{required:'Member-6 PSU status required'},
			radMem6DependOil:{required:'Member-6 Dependant status required'},
			radMem6regContract:{required:'Member-6 contract status required'},
			txtMem6Mobile:{required:'Member-6 mobile no. required',minValue:'Enter valid Mobile no.'},
			txtMem6EmpCardPdf:{required:'Member-6 Emp. exchange card file required'},
			txtMem7Name:{required:'Member-7 name required'},
			txtMem7SecName:{required:'Member-7 father/husband name required'},
			radMem7Gender:{required:'Member-7 gender required'},
			txtMem7Dob:{required:'Member-7 DOB required'},
			radMem7Edu:{required:'Member-7 education qualification required'},
			txtMem7EmpCardNo:{required:'Member-7 Emp. card no. required'},
			sctMem7EmpCardExchng:{required:'Member-7 Emp. exchange required'},
			txtMem7EmpCardValid:{required:'Member-7 Emp. card validity required'},
			radMem7WorkPsu:{required:'Member-7 PSU status required'},
			radMem7DependOil:{required:'Member-7 Dependant status required'},
			radMem7regContract:{required:'Member-7 contract status required'},
			txtMem7Mobile:{required:'Member-7 mobile no. required',minValue:'Enter valid Mobile no.'},
			txtMem7EmpCardPdf:{required:'Member-7 Emp. exchange card file required'},
			txtMem8Name:{required:'Member-8 name required'},
			txtMem8SecName:{required:'Member-8 father/husband name required'},
			radMem8Gender:{required:'Member-8 gender required'},
			txtMem8Dob:{required:'Member-8 DOB required'},
			radMem8Edu:{required:'Member-8 education qualification required'},
			txtMem8EmpCardNo:{required:'Member-8 Emp. card no. required'},
			sctMem8EmpCardExchng:{required:'Member-8 Emp. exchange required'},
			txtMem8EmpCardValid:{required:'Member-8 Emp. card validity required'},
			radMem8WorkPsu:{required:'Member-8 PSU status required'},
			radMem8DependOil:{required:'Member-8 Dependant status required'},
			radMem8regContract:{required:'Member-8 contract status required'},
			txtMem8Mobile:{required:'Member-8 mobile no. required',minValue:'Enter valid Mobile no.'},
			txtMem8EmpCardPdf:{required:'Member-8 Emp. exchange card file required'},
			txtMem9Name:{required:'Member-9 name required'},
			txtMem9SecName:{required:'Member-9 father/husband name required'},
			radMem9Gender:{required:'Member-9 gender required'},
			txtMem9Dob:{required:'Member-9 DOB required'},
			radMem9Edu:{required:'Member-9 education qualification required'},
			txtMem9EmpCardNo:{required:'Member-9 Emp. card no. required'},
			sctMem9EmpCardExchng:{required:'Member-9 Emp. exchange required'},
			txtMem9EmpCardValid:{required:'Member-9 Emp. card validity required'},
			radMem9WorkPsu:{required:'Member-9 PSU status required'},
			radMem9DependOil:{required:'Member-9 Dependant status required'},
			radMem9regContract:{required:'Member-9 contract status required'},
			txtMem9Mobile:{required:'Member-9 mobile no. required',minValue:'Enter valid Mobile no.'},
			txtMem9EmpCardPdf:{required:'Member-9 Emp. exchange card file required'},
			txtMem10Name:{required:'Member-10 name required'},
			txtMem10SecName:{required:'Member-10 father/husband name required'},
			radMem10Gender:{required:'Member-10 gender required'},
			txtMem10Dob:{required:'Member-10 DOB required'},
			radMem10Edu:{required:'Member-10 education qualification required'},
			txtMem10EmpCardNo:{required:'Member-10 Emp. card no. required'},
			sctMem10EmpCardExchng:{required:'Member-10 Emp. exchange required'},
			txtMem10EmpCardValid:{required:'Member-10 Emp. card validity required'},
			radMem10WorkPsu:{required:'Member-10 PSU status required'},
			radMem10DependOil:{required:'Member-10 Dependant status required'},
			radMem10regContract:{required:'Member-10 contract status required'},
			txtMem10Mobile:{required:'Member-10 mobile no. required',minValue:'Enter valid Mobile no.'},
			txtMem10EmpCardPdf:{required:'Member-10 Emp. exchange card file required'},
			txtMem11Name:{required:'Member-11 name required'},
			txtMem11SecName:{required:'Member-11 father/husband name required'},
			radMem11Gender:{required:'Member-11 gender required'},
			txtMem11Dob:{required:'Member-11 DOB required'},
			radMem11Edu:{required:'Member-11 education qualification required'},
			txtMem11EmpCardNo:{required:'Member-11 Emp. card no. required'},
			sctMem11EmpCardExchng:{required:'Member-11 Emp. exchange required'},
			txtMem11EmpCardValid:{required:'Member-11 Emp. card validity required'},
			radMem11WorkPsu:{required:'Member-11 PSU status required'},
			radMem11DependOil:{required:'Member-11 Dependant status required'},
			radMem11regContract:{required:'Member-11 contract status required'},
			txtMem11Mobile:{required:'Member-11 mobile no. required',minValue:'Enter valid Mobile no.'},
			txtMem11EmpCardPdf:{required:'Member-11 Emp. exchange card file required'},
			txtMem12Name:{required:'Member-12 name required'},
			txtMem12SecName:{required:'Member-12 father/husband name required'},
			radMem12Gender:{required:'Member-12 gender required'},
			txtMem12Dob:{required:'Member-12 DOB required'},
			radMem12Edu:{required:'Member-12 education qualification required'},
			txtMem12EmpCardNo:{required:'Member-12 Emp. card no. required'},
			sctMem12EmpCardExchng:{required:'Member-12 Emp. exchange required'},
			txtMem12EmpCardValid:{required:'Member-12 Emp. card validity required'},
			radMem12WorkPsu:{required:'Member-12 PSU status required'},
			radMem12DependOil:{required:'Member-12 Dependant status required'},
			radMem12regContract:{required:'Member-12 contract status required'},
			txtMem12Mobile:{required:'Member-12 mobile no. required',minValue:'Enter valid Mobile no.'},
			txtMem12EmpCardPdf:{required:'Member-12 Emp. exchange card file required'},
			txtMem13Name:{required:'Member-13 name required'},
			txtMem13SecName:{required:'Member-13 father/husband name required'},
			radMem13Gender:{required:'Member-13 gender required'},
			txtMem13Dob:{required:'Member-13 DOB required'},
			radMem13Edu:{required:'Member-13 education qualification required'},
			txtMem13EmpCardNo:{required:'Member-13 Emp. card no. required'},
			sctMem13EmpCardExchng:{required:'Member-13 Emp. exchange required'},
			txtMem13EmpCardValid:{required:'Member-13 Emp. card validity required'},
			radMem13WorkPsu:{required:'Member-13 PSU status required'},
			radMem13DependOil:{required:'Member-13 Dependant status required'},
			radMem13regContract:{required:'Member-13 contract status required'},
			txtMem13Mobile:{required:'Member-13 mobile no. required',minValue:'Enter valid Mobile no.'},
			txtMem13EmpCardPdf:{required:'Member-13 Emp. exchange card file required'},
			txtMem14Name:{required:'Member-14 name required'},
			txtMem14SecName:{required:'Member-14 father/husband name required'},
			radMem14Gender:{required:'Member-14 gender required'},
			txtMem14Dob:{required:'Member-14 DOB required'},
			radMem14Edu:{required:'Member-14 education qualification required'},
			txtMem14EmpCardNo:{required:'Member-14 Emp. card no. required'},
			sctMem14EmpCardExchng:{required:'Member-14 Emp. exchange required'},
			txtMem14EmpCardValid:{required:'Member-14 Emp. card validity required'},
			radMem14WorkPsu:{required:'Member-14 PSU status required'},
			radMem14DependOil:{required:'Member-14 Dependant status required'},
			radMem14regContract:{required:'Member-14 contract status required'},
			txtMem14Mobile:{required:'Member-14 mobile no. required',minValue:'Enter valid Mobile no.'},
			txtMem14EmpCardPdf:{required:'Member-14 Emp. exchange card file required'},
			txtMem15Name:{required:'Member-15 name required'},
			txtMem15SecName:{required:'Member-15 father/husband name required'},
			radMem15Gender:{required:'Member-15 gender required'},
			txtMem15Dob:{required:'Member-15 DOB required'},
			radMem15Edu:{required:'Member-15 education qualification required'},
			txtMem15EmpCardNo:{required:'Member-15 Emp. card no. required'},
			sctMem15EmpCardExchng:{required:'Member-15 Emp. exchange required'},
			txtMem15EmpCardValid:{required:'Member-15 Emp. card validity required'},
			radMem15WorkPsu:{required:'Member-15 PSU status required'},
			radMem15DependOil:{required:'Member-15 Dependant status required'},
			radMem15regContract:{required:'Member-15 contract status required'},
			txtMem15Mobile:{required:'Member-15 mobile no. required',minValue:'Enter valid Mobile no.'},
			txtMem15EmpCardPdf:{required:'Member-15 Emp. exchange card file required'},
			chkFormDeclaration:{required:'Form Declaration required'},
			chkUnemployedDeclaration:{required:'Unemployment Declaration required'},
			chkDependentDeclaration:{required:'Dependent Declaration required'},
			chkContractorDeclaration:{required:'Contractor Declaration required'},
			chkInfoDeclaration:{required:'Information Declaration required'}
		}
	});
});

// REQUIRED IF ANOTHER FIELD HAS VALUE
jQuery.validator.addMethod('requiredIf', function (value, element, param) {
	if($('input[name="'+param[0]+'"]:checked').val()==param[1] && (value=="" || value==undefined)){
		return false;
	}
	else
		return true;
}, 'This field required');

// REQUIRED IF ANOTHER FIELD HAS VALUE
jQuery.validator.addMethod('requiredIfTextNotEmpty', function (value, element, param) {
	if($('input[name="'+param[0]+'"]').val()!="" && (value=="" || value==undefined)){
		return false;
	}
	else
		return true;
}, 'This field required');

// MULTI SELECT REQUIRED
$.validator.addMethod("requiredMultiSelect", function(value, element) {
	return value.length > 0;
}, 'This field required');

// EMAIL WITH .DOMAIN
jQuery.validator.addMethod("email1", function(value, element) {
	return this.optional( element ) || ( /^[a-z0-9]+([-._][a-z0-9]+)*@([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,4}$/.test( value ) && /^(?=.{1,64}@.{4,64}$)(?=.{6,100}$).*/.test( value ) );
}, 'Please enter valid email address.');

// Required 5 field form group
jQuery.validator.addMethod('required5', function(value, element, param) {
	if ($.trim($(param[0]).val())!="" || $.trim($(param[1]).val())!="" || $.trim($(param[2]).val())!="" || $.trim($(param[3]).val())!="" || $.trim($(param[4]).val())!="" || $.trim(value)!="") {
		if($.trim(value)!="")
			return true;
		else
			return false;
	}
	else
		return true;
}, 'This Field required');

// Required 4 field form group
jQuery.validator.addMethod('required4', function(value, element, param) {
	if ($.trim($(param[0]).val())!="" || $.trim($(param[1]).val())!="" || $.trim($(param[2]).val())!="" || $.trim($(param[3]).val())!="" || $.trim(value)!="") {
		if($.trim(value)!="")
			return true;
		else
			return false;
	}
	else
		return true;
}, 'This Field required');

// Required 3 field form group
jQuery.validator.addMethod('required3', function(value, element, param) {
	if ($.trim($(param[0]).val())!="" || $.trim($(param[1]).val())!="" || $.trim($(param[2]).val())!="" || $.trim(value)!="") {
		if($.trim(value)!="")
			return true;
		else
			return false;
	}
	else
		return true;
}, 'This Field required');

// MAX FILE SIZE
jQuery.validator.addMethod('filesize', function (value, element, param) {
	return this.optional(element) || (element.files[0].size <= param[0]*param[1])
}, 'File size must be less than {0} KB');

// DIFFER FROM
jQuery.validator.addMethod('differFrom', function (value, element, param) {
	return (value != $(param).val() || value=="");
}, 'Should not be same as {0}');

// SAME AS
jQuery.validator.addMethod('sameAs', function (value, element, param) {
	return (value == $(param).val() || value=="");
}, 'Should be same as {0}');

// ALPHA-CHARACTERS ONLY METHOD
jQuery.validator.addMethod("letteronly", function(value, element) 
{
	return this.optional(element) || /^[a-zA-Z]*$/i.test(value);
}, "Enter Alphabets only");

// ALPHA-CHARACTERS,SPACES IN-BETWEEN ONLY METHOD
jQuery.validator.addMethod("letterspaceonly", function(value, element) 
{
	return this.optional(element) || /^[a-zA-Z]+( [a-zA-Z]+)*$/i.test(value);
}, "Alphabets with single spaces in-between only");

// NUMBERS ONLY METHOD
jQuery.validator.addMethod("numbersOnly", function(value, element) 
{
	return this.optional(element) || /^[0-9]*$/i.test(value);
}, "Numbers only");

// PERCENTAGE METHOD
jQuery.validator.addMethod("percentage", function(value, element) 
{
	if((value<=100 && /^(100|[1-9]?\d(\.\d{1,2})?)$/i.test(value)) || value=="") return(true);
	else return(false);
}, "Enter a valid Percentage");

// MINIMUM VALUE
jQuery.validator.addMethod("minValue", function(value, element, minval){
	if((value>=minval) || value=="") return(true);
	else return(false);
}, "Entered value is less than Minimum value");

// MAXIMUM VALUE
jQuery.validator.addMethod("maxValue", function(value, element, maxval){
	if((value<=maxval) || value=="") return(true);
	else return(false);
}, "Entered value is greater than Maximum value");

// STARTS WITH
jQuery.validator.addMethod("startsWith", function(value, element, param){
	if(jQuery.inArray(value[0],param)>=0) return(true);
	else return(false);
}, "Should start with a different value");

// GREATER THAN [ID,+value] NOT REQUIRED FIELD
jQuery.validator.addMethod("greaterThan", function(value, element, params){
	if(value>=(parseInt($(params[0]).val())+params[1]) || value=="") return(true);
	else return(false);
}, "Entered value is less than Minimum value");

// DATE FORMAT(DD-MM-YYYY) METHOD
$.validator.addMethod("dateFormat1", function(value, element)
{
	var dateArray=value.split('-');
	if(value=="")
		return true;
	else{
		if(value.match(/^\d\d\-\d\d\-\d\d\d\d$/)){
			if(dateArray[1]>=1 && dateArray[1]<=12 && dateArray[0]>=1 && dateArray[0]<=31)
			{
				if(dateArray[1]==2 && (dateArray[2]%4==0) && dateArray[0]<=29)
					return(true);
				else if(dateArray[1]==2 && (dateArray[2]%4>=0) && dateArray[0]<=28)
					return(true);
				else if((dateArray[1]==4 && dateArray[0]<=30) || (dateArray[1]==6 && dateArray[0]<=30) || (dateArray[1]==9 && dateArray[0]<=30) || (dateArray[1]==11 && dateArray[0]<=30))
					return(true);
				else if((dateArray[1]==1 && dateArray[0]<=31) || (dateArray[1]==3 && dateArray[0]<=31) || (dateArray[1]==5 && dateArray[0]<=31) || (dateArray[1]==7 && dateArray[0]<=31) || (dateArray[1]==8 && dateArray[0]<=31) || (dateArray[1]==10 && dateArray[0]<=31) || (dateArray[1]==12 && dateArray[0]<=31))
					return(true);
				else return(false);
			}
			else return(false);
		}
		else return (false);
	}
}, "Please enter a date in the format dd-mm-yyyy.");

// DATE RANGE METHOD
jQuery.validator.addMethod("dateRange", function(value, element, dates){
	if(value=="")
		return true;
	else
	{
		var enterDate = value.split('-');
		var validDateMin = dates[0].split('-'); 
		var validDateMax = dates[1].split('-');
		if (enterDate[2]>validDateMin[2] && enterDate[2]<validDateMax[2])
			return(true);
		else if (enterDate[2]==validDateMin[2])
		{
			if (enterDate[1]>validDateMin[1])
				return(true);
			else if (enterDate[1]==validDateMin[1])
			{
				if (enterDate[0]>=validDateMin[0])
					return(true);
				else return(false);
			}
			else return(false);
		}
		else if (enterDate[2]==validDateMax[2])
		{
			if (enterDate[1]<validDateMax[1])
				return(true);
			else if (enterDate[1]==validDateMax[1])
			{
				if (enterDate[0]<=validDateMax[0])
					return(true);
				else return(false);
			}
			else return(false);
		}
		else return(false);
	}
}, "Date range is wrong");

// MINIMUM DYNAMIC DATE METHOD
jQuery.validator.addMethod("minDynDate", function(value, element, params){
	var date = params[0], month = params[1], year = params[2], valDate = value.split('-'), minDynDate = new Date(), valueDate = new Date(), valueDate = valDate[1]+"/"+valDate[0]+"/"+valDate[2];
	valueDate = new Date(valueDate);
	minDynDate.setDate(minDynDate.getDate() + date);
	minDynDate.setMonth(minDynDate.getMonth() + month);
	minDynDate.setYear(minDynDate.getFullYear() + year);
	return ((minDynDate.getTime()<=valueDate.getTime()) || value=="");
}, "Entered date is lesser than Minimum Date");

// MAXIMUM DYNAMIC DATE METHOD
jQuery.validator.addMethod("maxDynDate", function(value, element, params){
	var date = params[0], month = params[1], year = params[2], valDate = value.split('-'), maxDynDate = new Date(), valueDate = new Date(), valueDate = valDate[1]+"/"+valDate[0]+"/"+valDate[2];
	valueDate = new Date(valueDate);
	maxDynDate.setDate(maxDynDate.getDate() + date);
	maxDynDate.setMonth(maxDynDate.getMonth() + month);
	maxDynDate.setYear(maxDynDate.getFullYear() + year);
	return ((maxDynDate.getTime()>=valueDate.getTime()) || value=="");
}, "Entered date is greater than Maximum Date");

// CUSTOM 1 METHOD
jQuery.validator.addMethod("custom1", function(value, element, param){
	if(value=="")
		return true
	else
		{val = value.split('-'); return (val[2]>=$(param).val());}	
}, "Given Date is lesser than minimum date");

// PAN CARD NUMBER METHOD
jQuery.validator.addMethod("pan", function(value){
	return /^[A-Z]{5}\d{4}[A-Z]{1}$/.test(value);
}, "Enter valid PAN number");

// URL METHOD
jQuery.validator.addMethod("url", function(value){
	return /^(http(s)?:\/\/)?(www\.)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(value);
}, "Enter valid URL");


/* BLOCK UNWANTED KEY PRESS */

/* ENABLE ALPHA,SPACE KEY PRESS ONLY */
$(document).on('keypress','.keyAlphabetsOnly',function(e) {
	var inputValue = e.which;
	if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && (inputValue != 0 && inputValue != 9 && inputValue != 8)) { 
		e.preventDefault(); 
	}
});

/* ENABLE ALPHA,SPACE KEY PRESS ONLY */
$(document).on('keypress','.keyAlphabetsSpacesOnly',function(e) {
	var inputValue = e.which;

	if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && (inputValue != 32 && inputValue != 0 && inputValue != 9 && inputValue != 8)) { 
		e.preventDefault(); 
	}
});

/* ENABLE ALPHA,NUMBER KEY PRESS ONLY */
$(document).on('keypress','.keyAlphabetsNumbersOnly',function(e) {
	var inputValue = e.which;
	if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue >= 48 && inputValue <= 57) && (inputValue != 0 && inputValue != 9 && inputValue != 8)) { 
		e.preventDefault(); 
	}
});

/* ENABLE NUMBERS KEY PRESS ONLY */
$(document).on('keypress','.keyNumbersOnly',function(e) {
	var inputValue = e.which;
	if(!(inputValue >= 48 && inputValue <= 57) && (inputValue != 0 && inputValue != 9 && inputValue != 8)) { 
		e.preventDefault(); 
	}
});

/* ENABLE NUMBERS KEY PRESS ONLY */
$(document).on('keypress','.keyNumbersPlusOnly',function(e) {
	var inputValue = e.which;
	if(!(inputValue >= 48 && inputValue <= 57) && (inputValue != 0 && inputValue != 9 && inputValue != 8 && inputValue != 43)) { 
		e.preventDefault(); 
	}
});

/* ENABLE NUMBERS,DOT KEY PRESS ONLY */
$(document).on('keypress','.keyNumbersDotOnly',function(e) {
	var inputValue = e.which;
	if(!(inputValue >= 48 && inputValue <= 57) && (inputValue != 46 && inputValue != 0 && inputValue != 9 && inputValue != 8)) { 
		e.preventDefault(); 
	}
});

/* ENABLE ALPHA,NUMERIC,@,_,-,. KEY PRESS ONLY */
$(document).on('keypress','.keyEmail',function(e) {
	var inputValue = e.which;
	if(!(inputValue >= 97 && inputValue <= 122) && !(inputValue >= 48 && inputValue <= 57) && inputValue != 9 && inputValue != 16 && inputValue != 8 && inputValue != 0 && inputValue != 64 && inputValue != 95 && inputValue != 46) { 
		e.preventDefault(); 
	}
});

/* TRIM SPACES ON CHANGE */
$('input[type="text"]').change(function() {
	$(this).val($(this).val().replace(/[\s]+/g, " ").trim());
});

/* TRIM SPACES ON CHANGE */
$('textarea').change(function() {
	$(this).val($(this).val().trim());
});

/* SHOW DIV WHEN VALUE CHANGED TO GIVEN */
function changeShow(id,value,caller){
	if(caller.value==value){
		$(id).css('display','block');
	}
	else{
		$(id).find('select').val('');
		$(id).find('textarea').val('');
		$(id).find('input[type="text"]').val('');
		$(id).find('input[type=radio]').prop('checked',false);
		$(id).css('display','none');
	}
};