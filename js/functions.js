
function layerSetup(id,visibility) {
	if(document.getElementById) {
		this.obj = document.getElementById(id).style;
		this.obj.visibility = visibility;
		return this.obj;
	}
	else if(document.all) {
		this.obj = document.all[id].style;
		this.obj.visibility = visibility;
		return this.obj;
	}
	else if(document.layers) {
		this.obj = document.layers[id];
		this.obj.visibility = visibility;
		return this.obj;
	}
}

function visVisible(param) {
	new layerSetup(param,'visible');
}

function visHidden(param){
	new layerSetup(param,'hidden');
}

function MM_swapImgRestore() { //v3.0
	var i,x,a=document.MM_sr; 
	for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
	var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
		var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
		if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
	}

function MM_findObj(n, d) { //v4.01
	var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
		d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
		if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
		for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
			if(!x && d.getElementById) x=d.getElementById(n); return x;
	}

function MM_swapImage() { //v3.0
	var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
	if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function IsvalidEmail(mailid) {		
	var strValue=mailid;
	var objRegExp  = /(^[a-z]([a-z_\.]*)@([a-z_\.]*)([.][a-z]{3})$)|(^[a-z]([a-z_\.]*)@([a-z_\.]*)(\.[a-z]{3})(\.[a-z]{2})*$)/i;
	return objRegExp.test(strValue);

}

function Trim(s) {
	while ((s.substring(0,1) == ' ') || (s.substring(0,1) == '\n') || (s.substring(0,1) == '\r')) {
		s = s.substring(1,s.length);
	}
	
	while ((s.substring(s.length-1,s.length) == ' ') || (s.substring(s.length-1,s.length) == '\n') || (s.substring(s.length-1,s.length) == '\r')) {
		s = s.substring(0,s.length-1);
	}
	return s;
}

//function IsNumeric(strString) {
	//var objRegExp  =  /(^-?\d\d*\.\d*$)|(^-?\d\d*$)|(^-?\.\d\d*$)/;
	//return objRegExp.test(strValue);
//}
function IsNumeric(strString) {
	var strValidChars = "0123456789.-";
	var strChar;
	var blnResult = true;

	if (strString.length == 0) return false;

   //  test strString consists of valid characters listed above
   for (i = 0; i < strString.length && blnResult == true; i++) {
   	strChar = strString.charAt(i);
   	if (strValidChars.indexOf(strChar) == -1) {
   		blnResult = false;
   	}
   }
   return blnResult;
 }



 function validateform(evt) {
 	if (evt.keyCode == 13) {
 		submitform();
 	}
 }

 function formvalidate(array_fields,array_message) {
 	var alertfields="";
 	var setfocus="";
 	var i;
 	for(i = 0; i < array_fields.length; i++) {
 		if(Trim(document.getElementById(array_fields[i]).value) == "") {
 			alertfields+="- " + array_message[i] + "\n";
 			if (setfocus=="") {
 				setfocus=array_fields[i];
 			}
 		} else if(Trim(document.getElementById(array_fields[i]).value) != "" && 
 			document.getElementById(array_fields[i]).getAttribute('fieldtype')=="sel_box" && 
 			!IsvalidEmail(Trim(document.getElementById(array_fields[i]).value))) {
 			alertfields+="- Valid " + array_message[i] + "\n";
 			if (setfocus=="") {
 				setfocus=array_fields[i];
 			}
 		}
 	}
 	
 	if (alertfields!="") {
 		alert("The following field(s) cannot be left blank:\n\n"+alertfields+"\nPlease fill these fields.");
 		document.getElementById(setfocus).focus();
 		return false;		
 	}
 	return true;
 }
 $(window).load(function(){
 	$("#vertical-menu h3").click(function () {
 		$("#vertical-menu h3 .icon").removeClass("icon-minus");
 		$("#vertical-menu h3 .icon").addClass("icon-plus");
 		$("#vertical-menu ul").slideUp();
 		$("#vertical-menu h3").removeClass("active");
 		$("#vertical-menu ul").removeClass("active");
 		if (!$(this).next().is(":visible")) {
 			$(".icon" , this).removeClass("icon-plus").addClass("icon-minus");
 			$(this).addClass("active");
 			$(this).next().slideDown();
 			$(this).next().addClass("active");
 		}
 	});
 });