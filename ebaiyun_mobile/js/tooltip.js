$(function(){
	var onAlert = {
		thisShow:function(){
			_vgSap = $('.vg-sap'),			
			_vgBgz = $('.vg-bg-z');
			_vgSap.on('click',function(){
				_vgBgz.fadeIn();
			})
		},
		thisHide:function(obj){
			_vgbClose = $('.vgb-close'),
			_vgaClose = $('.vga-close'),
			_vgBgz = $('.vg-bg-z');
			_vgaClose.on('click',function(){
				_vgBgz.fadeOut();
			});
			_vgbClose.on('click',function(){
				_vgBgz.fadeOut();
			})
		},
		thisAnimate:function(){
			_vgLink = $('.vg-link');
			_vgLink.on('click',function(){
				$('.vg-obgbox').animate({right:0},500)
			})
			_thisWidth = $(document).innerWidth();
			$('.set-up-button').on('click',function(){
				$('.vg-obgbox').animate({right:-_thisWidth},500)
			});
//			$('#vg-obgbox').on('touchmove',function(){
//				$('.vg-obgbox').animate({right:-_thisWidth},500);
//			})
		}
	}
	onAlert.thisShow();
	onAlert.thisHide();
	onAlert.thisAnimate();
})

