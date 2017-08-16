$(function(){
		//地址管理
	(function address(){
		var _per = $('.address-list'),
			_perF = _per.find('.add-box');
			$(document).on('click','.add-box',function(){
				_this = $(this);
				_perF.removeClass('add-boxbg').addClass('addbox-false');
				_this.removeClass('addbox-false').addClass('add-boxbg');
				
			})
			$(document).on('click','.ogo-colse',function(){
				_this = $(this),
				_this = _this.parents('.address-box');
				$('.ogo-bg-colse').fadeIn(function(){					
					$('.close-bt').on('click',function(){
						$('.ogo-bg-colse').fadeOut(function(){
							_this.remove();
						})
					})
					$('.quxiao').on('click',function(){
						$('.ogo-bg-colse').fadeOut();
					})
				})
				
			})
	})();
	//
	(function(){
		$(document).on('click','.zbox-close',function(event){
			_thisP = $(this).parents('.itme-box');
			$('.ogo-bg-colse').fadeIn(function(){					
				$('.close-bt').on('click',function(){
					$('.ogo-bg-colse').fadeOut(function(){
						_thisP.remove();
					})
				})
				$('.quxiao').on('click',function(){
					$('.ogo-bg-colse').fadeOut();
				})
			})
		})
	})(false);
	//取消订单
	(function(){
		$(document).on('click','.bgbox-close',function(event){
			_this = $(this);
			$('.order-close').fadeIn(function(){
				var _itmezox = $('.ogo-itmeBox').find('label');
				_itmezox.on('click',function(){
					_itmezox.removeClass('bg-link');
					$('.ogo-itmeBox').find('input[type="checkbox"]').removeAttr('checked');
					$(this).addClass('bg-link');
					if($(this).hasClass('bg-link')){
						$(this).find('input[type="checkbox"]').attr('checked',true);
					}
				});
			})
			$('.box-quxiao').on('click',function(){
				$('.order-close').fadeOut();
				$('.ogo-itmeBox').find('label').removeClass('bg-link');
				$('.ogo-itmeBox').find('input[type="checkbox"]').removeAttr('checked');
			});
			$('.box-close').on('click',function(){
				var _itmeBox = $('.ogo-itmeBox'),
					_itmeBoxN = _itmeBox.find(':checked').length;
					if(_itmeBoxN){						
						$('.order-close').fadeOut();
						location.reload() ;
						//提交后刷新订单页 改变订单状态；
					}else{
						alert('请选择取消订单的原因');
						//alert 弹窗提示有问题，待处理！
					}
			});
			event.stopPropagation();
		})
	})(false);
})
