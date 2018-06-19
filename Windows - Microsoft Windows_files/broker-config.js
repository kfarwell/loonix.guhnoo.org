var _Freq=false;
var _InvC="";
var _halt=false; 
var _NavHalt = false;
var _hweight=false;
var MSNavChannel=false;
var _newProjWeight = 100, _oldProjWeight = 0; //Default weights
var _surl = document.location.toString();
var A=document.getElementsByName("MS.Nav.Channel");

if(typeof(A[0])!="undefined"&&A[0]!=null){
 MSNavChannel="MS.Nav.Channel="+A[0].getAttribute("content");
   //var _t =  var _t = COMSCORE.SiteRecruit.Broker.findPageMapping(); 
   //if(typeof(_t)!="undefined" && _t !=null && typeof(_t.prereqs)!="undefined" && _t.prereqs!=null){	
	if(/windows\.microsoft\.com\/en-us/i.test(_surl)){
		if(/home/i.test(MSNavChannel)){
			_Freq=0.3787; _hweight=1; _InvC="inv_c_nav_p234872763.js";
		}else if(/Meet/i.test(MSNavChannel)){
			_Freq=0.2730; _hweight=2; _InvC="inv_c_nav_p234872763.js";
		}else if(/app/i.test(MSNavChannel)){
			_Freq=0.4426; _hweight=3; _InvC="inv_c_nav_p234872763.js";
		}else if(/Shop/i.test(MSNavChannel)){
			_Freq=0.6000; _hweight=4; _InvC="inv_c_nav_p234872763.js";
		}else if(/downloads/i.test(MSNavChannel)){
			_Freq=0.0134; _hweight=5; _InvC="inv_c_nav_p234872763.js";
		}else if(/support/i.test(MSNavChannel)){
			_Freq=0.0185; _hweight=6; _InvC="inv_c_nav_p234872763.js";
		}else {
			_Freq=0.0061; _InvC="inv_c_nav_p246609455.js";
		}
	}else if(/windows\.microsoft\.com\/en-ca/i.test(_surl)){
		if(/(home|Meet|Meet-Windows|Download-Shop|How-To|Support|Downloads|Shop)/i.test(MSNavChannel)){
			_Freq=0; 
		}
	}else if(/windows\.microsoft\.com\/en-gb/i.test(_surl)){
		if(/(home|Meet|Meet-Windows|Download-Shop|How-To|Support|Downloads|Shop)/i.test(MSNavChannel)){
			_Freq=0.0132;
		}
	}else if(/windows\.microsoft\.com\/en-au/i.test(_surl)){
		if(/(home|Meet|Meet-Windows|Download-Shop|How-To|Support|Downloads|Shop)/i.test(MSNavChannel)){
			_Freq=0;
		}
	}else if(/windows\.microsoft\.com\/ja-jp/i.test(_surl)){
		if(/(home|Meet|Meet-Windows|Download-Shop|How-To|Support|Downloads|Shop)/i.test(MSNavChannel)){
			_Freq=0.0398; 
		}
	}else if(/windows\.microsoft\.com\/de-de/i.test(_surl)){
		if(/(home|Meet|Meet-Windows|Download-Shop|How-To|Support|Downloads|Shop)/i.test(MSNavChannel)){
			_Freq=0.0089; 
		}
	}else if(/windows\.microsoft\.com\/fr-fr/i.test(_surl)){
		if(/(home|Meet|Meet-Windows|Download-Shop|How-To|Support|Downloads|Shop)/i.test(MSNavChannel)){
			_Freq=0.0086; 
		}
	}else if(/windows\.microsoft\.com\/zh-cn/i.test(_surl)){
		if(/(home|Meet|Meet-Windows|Download-Shop|How-To|Support|Downloads|Shop)/i.test(MSNavChannel)){
			_Freq=0.0339;  
		}
	}else if(/windows\.microsoft\.com\/ko-kr/i.test(_surl)){
		if(/(home|Meet|Meet-Windows|Download-Shop|How-To|Support|Downloads|Shop)/i.test(MSNavChannel)){
			_Freq=0; 
		}
	}else if(/windows\.microsoft\.com\/ru-ru/i.test(_surl)){
		if(/(home|Meet|Meet-Windows|Download-Shop|How-To|Support|Downloads|Shop)/i.test(MSNavChannel)){
			_Freq=0.0076; 
		}
	}else if(/windows\.microsoft\.com\/pt-br/i.test(_surl)){
		if(/(home|Meet|Meet-Windows|Download-Shop|How-To|Support|Downloads|Shop)/i.test(MSNavChannel)){
			_Freq=0.0778; 
		}
	}else if(/windows\.microsoft\.com\/es-mx/i.test(_surl)){
		if(/(home|Meet|Meet-Windows|Download-Shop|How-To|Support|Downloads|Shop)/i.test(MSNavChannel)){
			_Freq=0; 
		}
	}else if(/windows\.microsoft\.com\/es-es/i.test(_surl)){
		if(/(home|Meet|Meet-Windows|Download-Shop|How-To|Support|Downloads|Shop)/i.test(MSNavChannel)){
			_Freq=0.0120; 
		}
	}else if(/windows\.microsoft\.com\/it-it/i.test(_surl)){
		if(/(home|Meet|Meet-Windows|Download-Shop|How-To|Support|Downloads|Shop)/i.test(MSNavChannel)){
			_Freq=0.0168;
		}
	}else if(/windows\.microsoft\.com\/tr-tr/i.test(_surl)){
		if(/(home|Meet|Meet-Windows|Download-Shop|How-To|Support|Downloads|Shop)/i.test(MSNavChannel)){
			_Freq=0;
		}
	}else if(/windows\.microsoft\.com\/nl-nl/i.test(_surl)){
		if(/(home|Meet|Meet-Windows|Download-Shop|How-To|Support|Downloads|Shop)/i.test(MSNavChannel)){
			_Freq=0;
		}
	}
 }else{MSNavChannel=false;}
//("frequency="+_Freq);
if(_hweight){ MSNavChannel += "&hweight="+_hweight; }
if(/(zh-cn|pt-br|es-mx|ja-jp)\/windows\-8\/(features|honestly)/i.test(_surl)){_NavHalt=false;}else if(!_Freq){ _NavHalt=true; }
COMSCORE.SiteRecruit.Broker.config={version:"5.0.3",testMode:false,cddsDomains:'microsoftstore.com|go.microsoft.com',cddsInProgress:'cddsinprogress',domainSwitch:'tracking3p',domainMatch:'^(https?:\/\/)?([\\da-z\.-]+)\.([a-z\.]{2,6})',delay:0,cookie:{name:"msresearch",path:"/",domain:".microsoft.com",duration:90,rapidDuration:0,expireDate:""},thirdPartyOptOutCookieEnabled:false,prefixUrl:"",Events:{beforeRecruit:function(){}},mapping:[{m:"//[\\w\\.-]+/de-de",c:"inv_c_p176052898-DE-DE.js",f:_Freq,p:4,halt:_NavHalt},{m:"//[\\w\\.-]+/en-gb",c:"inv_c_p176052898-EN-GB.js",f:_Freq,p:4,halt:_NavHalt},{m:"//[\\w\\.-]+/en-us/",c:_InvC,f:_Freq,p:1,halt:_NavHalt},{m:"//[\\w\\.-]+/en-us/internet-explorer/products/ie-9/welcome$|welcome\\-upgrade|welcome\\-upgrade2",c:"inv_c_blank.js",f:0,p:0,halt:true},{m:"//[\\w\\.-]+/en-us/windows7/(products/anytime-upgrade-(reg|none|change-settings|n)|sync-providers|search)",c:"inv_c_blank.js",f:0,p:0,halt:true},{m:"//[\\w\\.-]+/es-es",c:"inv_c_p234872763-ES-ES.js",f:_Freq,p:1,halt:_NavHalt},{m:"//[\\w\\.-]+/fr-fr",c:"inv_c_p176052898-FR-FR.js",f:_Freq,p:4,halt:_NavHalt},{m:"//[\\w\\.-]+/it-it",c:"inv_c_p176052898-IT-IT.js",f:_Freq,p:4,halt:_NavHalt},{m:"//[\\w\\.-]+/ja-jp",c:"inv_c_p176052898-JA-JP.js",f:_Freq,p:1,halt:_NavHalt},{m:"//[\\w\\.-]+/pt-br",c:"inv_c_p176052898-PT-BR.js",f:_Freq,p:1,halt:_NavHalt},{m:"//[\\w\\.-]+/ru-ru",c:"inv_c_p176052898-RU-RU.js",f:_Freq,p:4,halt:_NavHalt},
		{m:"//[\\w\\.-]+/zh-cn",c:"inv_c_p176052898-ZH-CN.js",f:_Freq,p:1,halt:_NavHalt},{m:"//[\\w\\.-]+/((internet-explorer/products/ie-9/  (welcome|welcome-upgrade|welcome-upgrade2))|(windows7/(products/anytime-upgrade-(reg|none|change-settings|n)|sync-providers|search))|(.*/windows/preview))",c:"inv_c_blank.js",f:0,p:5,halt:true},{m:"/((es-es)|(it-it)|(tr-tr)|(nl-nl))/((internet-explorer/products/ie-9/(welcome|welcome-upgrade|welcome-grade2))|(windows7/(products/anytime-upgrade-(reg|none|change-settings|n)|sync-providers|search)))",c:"inv_c_blank.js",f:0,p:5,halt:true}]};
function readCookie(name){  var ca = document.cookie.split(';');  var nameEQ = name + "=";  for(var i=0; i < ca.length; i++) {    var c = ca[i];    while (c.charAt(0)==' ') c = c.substring(1, c.length);    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);    }  return false;}
function _set_SessionCookie(_name, _val) {	  
	if (_name == COMSCORE.SiteRecruit.Broker.config.domainSwitch) {
		var r = new RegExp(COMSCORE.SiteRecruit.Broker.config.domainMatch,'i');
		if (r.test(_val)) {
			_val = RegExp.$1 + RegExp.$2;
			var c = _name + '=' + _val + '; path=/' + '; domain=' + COMSCORE.SiteRecruit.Broker.config.cookie.domain;
			document.cookie = c; 
		}
	}else if(COMSCORE.isDDInProgress()){	
 		if(_name == "captlinks"){
 			if(/^http(s)?\:/i.test(_val)){
				var _reg = new RegExp("http(s)?://"+document.domain+"/", "i");
 				var _val = _val.replace(_reg, '');
 			}
 			if(_val && _val.length > 2){
				c_vals = readCookie("captlinks");
				if(c_vals){
   				if(c_vals.indexOf(_val) == -1){
   					var str = c_vals +"," + _val;
   					if(str.length <= 1240){
   						_val = str;
   					}else{ _val=false; }
   				}else{ _val = false; }
  			}
 			}
 		}
  	if(_val){
  		var c = _name+'=' + _val + '; path=/' + '; domain=' + COMSCORE.SiteRecruit.Broker.config.cookie.domain;
    	document.cookie = c;
    }
	}
}
setTimeout('_set_SessionCookie("graceIncr","0")', 3000);
//START 5.1.3 CDDS-captLink-graceIncr handlers
function SRappendEventListener(srElement, _name, _val){
	if(srElement.addEventListener){
			srElement.addEventListener('click',function(event){	_set_SessionCookie(_name, _val); },false);
	}else{
			srElement.attachEvent('onclick',function(){	_set_SessionCookie(_name, _val); });
	}
}
var allLinks = document.getElementsByTagName("a");
for (var i = 0, n = allLinks.length; i < n; i++){
	var r = new RegExp(COMSCORE.SiteRecruit.Broker.config.cddsDomains,'i');
	var _clickURL = allLinks[i].href;
	
	if (r.test(_clickURL) || /LinkId\=258855/i.test(_clickURL)) {
		if (/LinkId\=258855/i.test(_clickURL)) {
			//msftstore click
			_clickURL = "http://www.microsoftstore.com/store";
		}
		
		SRappendEventListener(allLinks[i], COMSCORE.SiteRecruit.Broker.config.domainSwitch, _clickURL);
	}
	if(_clickURL && _clickURL != '' && !(/javascript\:void(0)/i.test(_clickURL)) ){	
		if(/[\w\.]+\/(en-(us|001))/i.test(document.location.toString())){
			if(/CheckOfferEligibility|login\.live|msacademicverify|(o15\.officeredir|office)\.microsoft\.com|login|LiveLogin/i.test(_clickURL)){
				SRappendEventListener(allLinks[i], "graceIncr", _clickURL);
				SRappendEventListener(allLinks[i], "captlinks",_clickURL);
			}
		}
	}
}
//END 5.1.3 CDDS-captLink-graceIncr handlers
function crossDomainCheck() {if (intervalMax > 0) {intervalMax --;var cookieName = COMSCORE.SiteRecruit.Broker.config.cddsInProgress;if (COMSCORE.SiteRecruit.Utils.UserPersistence.getCookieValue(cookieName) != false ) {COMSCORE.SiteRecruit.DDKeepAlive.setDDTrackerCookie();COMSCORE.SiteRecruit._halt = true;clearCrossDomainCheck();}}else {clearCrossDomainCheck();}}function clearCrossDomainCheck() {window.clearInterval(crossDomainInterval);}var intervalMax = 10;var crossDomainInterval = window.setInterval('crossDomainCheck()', '1000');if(COMSCORE.SiteRecruit.Broker.delayConfig == true)  {COMSCORE.SiteRecruit.Broker.config.delay = 5000;}window.setTimeout('COMSCORE.SiteRecruit.Broker.run()', COMSCORE.SiteRecruit.Broker.config.delay);