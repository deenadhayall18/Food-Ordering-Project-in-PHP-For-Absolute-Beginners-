

// REQUIRED IF ANOTHER FIELD HAS VALUE
jQuery.validator.addMethod('requiredIf', function (value, element, param) {
	var i=0;
	for(i=0;i<param.values.length;i++){
		if($(param.element).val()==param.values[i] && (value=="" || value==undefined)){
			return false;
		}
	}
	return true;
}, 'This field is required');
// REQUIRED IF ANOTHER FIELD HAS VALUE
jQuery.validator.addMethod('requiredIfChk', function (value, element, param) {
	if($('input[name="'+param[0]+'"]:checked').val()==param[1] && (value=="" || value==undefined)){
		return false;
	}
	else
		return true;
}, 'This field is required');
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
jQuery.validator.addMethod('maxfilesize', function (value, element, param) {
	return this.optional(element) || (element.files[0].size <= param*1024)
}, 'File size must be less than {0} KB');
// MIN FILE SIZE
jQuery.validator.addMethod('minfilesize', function (value, element, param) {
	return this.optional(element) || (element.files[0].size >= param*1024)
}, 'File size must be greater than {0} KB');

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
}, "Enter Alphabets only (Without Blank Spaces)");
// ALPHA-CHARACTERS,SPACES IN-BETWEEN ONLY METHOD
jQuery.validator.addMethod("letterspaceonly", function(value, element) 
{
	return this.optional(element) || /^[a-zA-Z]+([ a-zA-Z]+)*$/i.test(value);
}, "Enter only letters & space");
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

// ALPHA-CHARACTERS,SPACES IN-BETWEEN ONLY METHOD
jQuery.validator.addMethod("letterspacenumberonly", function(value, element) 
{
	return this.optional(element) || /^[a-zA-Z0-9]+([ a-zA-Z0-9]+)*$/i.test(value);
}, "Numbers and Alphabets with single spaces in-between only");

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
	if(jQuery.inArray(parseInt(value[0]),param)>=0){
		return(true);
	}else{
		return(false);
	}
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

// MINIMUM STATIC DATE
$.validator.addMethod("minDate", function(value, element, param) {
	var parval = param.split('-')
	var curDate = new Date(parval[1]+'/'+parval[0]+'/'+parval[2]);
	var val = value.split('-')
	var inputDate = new Date(val[1]+'/'+val[0]+'/'+val[2]);
	if (inputDate >= curDate)
		return true;
	return false;
}, "Entered date is lesser than Minimum Date");

// MAXIMUM STATIC DATE
$.validator.addMethod("maxDate", function(value, element, param) {
	var curDate = new Date();
	var val = value.split('-')
	var inputDate = new Date(val[1]+'/'+val[0]+'/'+val[2]);
	if (inputDate <= curDate)
		return true;
	return false;
}, "Entered date is greater than Maximum Date");

// MINIMUM DYNAMIC DATE METHOD
// minDynDate : [dd,mm,yyyy] Ex: [0,0,2] for + 2years, [0,0,-18] for -18 years
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
	if(value!=''){
		return /^[A-Z]{5}\d{4}[A-Z]{1}$/.test(value);
	}else{
		return(true);
	}
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

$(document).on('keypress','.keyAlphabetsNumberSpaceOnly',function(e) {
	var inputValue = e.which;
	if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && !(inputValue >= 48 && inputValue <= 57) && (inputValue != 32 && inputValue != 0 && inputValue != 9 && inputValue != 8)) { 
		e.preventDefault(); 
	}
});

/* ENABLE NUMBERS KEY PRESS ONLY */
$(document).on('keypress','.keyNumbersOnly',function(e) {
	var inputValue = e.which;
	if(!(inputValue >= 48 && inputValue <= 57) && (inputValue != 0 && inputValue != 9 && inputValue != 8) && !((inputValue == 118 || inputValue == 120 || inputValue == 99) && (e.ctrlKey === true || e.metaKey === true))) { 
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