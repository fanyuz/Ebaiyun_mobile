$(function(){
	//新建
	var shop = {
		shopCollect:function(){
			_this = $('.shop-sc');
			_this.on('click',function(){
				//$(this).find('input').attr('checked','checked');
				_thisInput = $(this).find('input');
				if(!_thisInput.is(':checked')){
					_thisInput.attr('checked','checked');
					$(this).removeClass('shop-wsc').addClass('shop-ysc');
				}else{
					_thisInput.removeAttr('checked');
					$(this).removeClass('shop-ysc').addClass('shop-wsc');
				}
				
			})
		},
		shopScroll:function(){
			$(document).on('scroll',function(){
				_thisH = $('.shop-top').innerHeight();
				_thisT = document.body.scrollTop;
				_thisTop = $(window).height();
				//console.log(_thisTop)
				if(_thisT >= _thisH){
					$('.shop-snav').show();
				}else{
					$('.shop-snav').hide();
				}
				if(_thisT > _thisTop){
					$('.up-load').show();
				}else{
					$('.up-load').hide();
				}
			})
			$('.up-load').on('click',function(){
				document.body.scrollTop = 0;
				$('.up-load').hide();
			})
		},
		shopOnclick:function(){
			_thisLi = $('.product-nav').find('li');
			_thisLi.on('click',function(){
				_this = $(this);
				_thisF = _this.find('i');
				_this.addClass('link');
				_this.siblings('li').removeClass('link');
				if(_thisF.hasClass('icon-tshib')){
					_thisF.removeClass('icon-tshib').addClass('icon-tshit');
				}else{
					_thisF.removeClass('icon-tshit').addClass('icon-tshib');
				}
			})
		}
	};
	shop.shopCollect();
	shop.shopScroll();
	shop.shopOnclick();
	var onEventGetBy= {
		LinkHref:function(){
			$(document).on('click','.cat-itme',function(){
				_this = $(this);
				_thisId = $(this).find('input').attr('id');
				_this.addClass('checked');
			})
		}
	}
	onEventGetBy.LinkHref();
})
