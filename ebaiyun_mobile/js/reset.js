//window.onload = function(){
//	//px转换rem
//	(function (doc, win) {
//	  var docEl = doc.documentElement,
//	    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//	    recalc = function () {
//	      var clientWidth = docEl.clientWidth;  //设计图的最大宽度
//	      if (!clientWidth) return;
//	      docEl.style.fontSize = 10 * (clientWidth / 250) + 'px';  //1rem = 30px
//	    };
//	
//	  if (!doc.addEventListener) return;
//	  win.addEventListener(resizeEvt, recalc, false);
//	  doc.addEventListener('DOMContentLoaded', recalc, false);
//	})(document, window);
//}
window.onload = function(){
				document.documentElement.style.fontSize = innerWidth/25 + "px";
				onresize = function(){
					document.documentElement.style.fontSize = innerWidth/25 + "px";
				}
	}


