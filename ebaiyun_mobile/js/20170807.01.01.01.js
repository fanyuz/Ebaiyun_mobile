$(function(){
	$('.but-zbox').on('click',function(){
		$('#a0').fadeOut();
		$('#a2').fadeIn(function(){
			$('.inputUserName').on('click',function(){		
				_this = $('.set-input').val();
				$('.user-sidename').html(_this);
				$('#a2').fadeOut();
				$('#a0').fadeIn();
			});
		});
	});
	//获取性别
	$('.but-zboxz').on('click',function(){
		$('#a0').fadeOut();
		$('#a1').fadeIn(function(){
			var $itme = $('.set-up-itme'),
			_itmeL = $itme.find('label');
			_itmeL.on('click',function(){
				_itmeL.removeClass('active');
				$(this).addClass('active');
				$thishtml = $(this).find('input').val();
				$('.user-xb').html($thishtml);
				$('#a1').fadeOut();
				$('#a0').fadeIn();
			})
		})
	})
		//地址管理
		var _per = $('.address-list'),
			_perF = _per.find('.add-box');
			$(document).on('click','.add-box',function(){
				_this = $(this);
				_perF.removeClass('addbox-true');
				_this.removeClass('addbox-false').addClass('addbox-true');
			})
	
})
