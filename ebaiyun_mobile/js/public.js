$(function(){
	console.log("%c 亿佰云商城欢迎您！","font-size:24px;color:red;")
	//返回上个页面
	$("#return_btn").click(function(){
		window.history.back()
	})
	
	//详情页购买条件弹窗
	$("#choice").click(function(){
		$(".shopping_choice").addClass("choice_show");
	})
	$(".close").click(function(){
		$(".shopping_choice").removeClass("choice_show");
	})
	$(".verify").click(function(){
		$(".shopping_choice").removeClass("choice_show");
	})
	
	//颜色分类选择样式
	$(".class_select li").click(function(){
		$(this).find("input").attr("checked",true);
		$(this).siblings().find("input").removeAttr("checked");
		$(this).addClass("active").siblings("li").removeClass("active")
	})
	
	//详情页右上角弹窗效果
	$("#gengduo").click(function(){
		$(".gd_tanc").stop().slideToggle()
		//$(".gd_tanc i").toggle()
	})
	
	
	//详情页头部导航栏效果
	$(".comm_nav a").click(function(){
		$(this).addClass("active").siblings().removeClass("active")
	})
	
	
    
    
    //商品详情导航效果
    $(".details_nav a").click(function(){
		$(".details_nav a").eq($(this).index()).addClass("active").siblings().removeClass("active")
		$(".details_nav_hide a").eq($(this).index()).addClass("active").siblings().removeClass("active")
    })
    $(".details_nav_hide a").click(function(){
		$(".details_nav_hide a").eq($(this).index()).addClass("active").siblings().removeClass("active")
		$(".details_nav a").eq($(this).index()).addClass("active").siblings().removeClass("active")
	})
    
    //*****确认订单*****
    //订单页按钮效果
    
    $(".delivery_btn").click(function(){
    	if (!$(this).hasClass("delivery_btn_show")) {
    		$(this).addClass("delivery_btn_show");
    		$(this).find("input").attr("checked",true)
    	} else{
    		$(this).removeClass("delivery_btn_show");
    		$(this).find("input").attr("checked",false)
    	}
    })
    //弹出地址列表
    $("#add_entrance").click(function(){
    	$(".add_list").addClass("add_list_show");
    })
    
    $(".new-add").click(function(){
    	$(".add_address").addClass("add_list_show");
    	
    })
    $("#baocun").click(function(){
    	$(".add_address").removeClass("add_list_show")
    })
    //弹出添加地址页
    $(".address_add").click(function(){
    	$(".add_address").addClass("add_list_show")
    })
    
    //关闭弹窗
    $(".shut_down_add").click(function(){
    	$(".add_address").removeClass("add_list_show")
    })
    $(".shut_down_list").click(function(){
    	$(".add_list").removeClass("add_list_show")
    })
    
    //点击地址跳转
    $(".address-list > div").click(function(){
    	$(".add_list").removeClass("add_list_show")
    })
    
    
    // 商品数量加减
	$(".num_add").click(function(){
		var _num = parseInt($(this).siblings(".num").val());
		
		_num ++;
		$(this).prev().val(_num)
	})
	$(".minus").click(function(){
		var _num = parseInt($(this).siblings(".num").val());
		if(_num > 1){
			_num --;
		}else{
			_num = 1;
		}
		$(this).next().val(_num)
	});
	
	
	//查看全部抽奖  
	$(".look_all_entrance").click(function(){
		$("#look_all").addClass("shade_show")
	});
	//关闭弹窗
	$(".shade_close").click(function(){
		$("#look_all").removeClass("shade_show")
		$(".number_background").removeClass("shade_show");
		$(".refund_background").removeClass("shade_show");
	})
	//查看全部号码
	$(".more_number").click(function(){
		$(".number_background").addClass("shade_show");
	})
	//退款弹窗
	$(".lucky_footer").click(function(){
		$(".refund_background").addClass("shade_show");
	})
	$(".way_list>a").click(function(){
		$(".refund_way").hide();
		$(".refund_succeed").show()
	})


	//********购物车******
	//店铺商品联动
	$(".shopp_name>input").click(function(){
		if($(this).attr("checked")){
			$(this).parent(".shopp_name").siblings("ol").find(":checkbox").attr("checked",true);
		}else{
			$(this).parent(".shopp_name").siblings("ol").find(":checkbox").removeAttr("checked");
		}
	})
	
	//全选按钮
	$(".check_all").click(function(){
		if($(this).attr("checked")){
			$("*").find(":checkbox").attr("checked",true);
		}else{
			$(":checkbox").removeAttr("checked");
		}
	})
	
	//编辑删除
	$(".remove_all").click(function(){
		if($(".car_shopping").find(":checkbox").attr("checked",true)){
			$(".car_shopping").html("")
		}
		
	})
	
	
	//编辑全部
	var _redact = true;
	$("#redact_all").click(function(){
		if(_redact){
			$(this).find("i").text("完成");
			$("*").find(":checkbox").attr("checked",true);
			$(".settlement").hide();
			$(".compile").show();
		}else{
			$(this).find("i").text("编辑");
			$(":checkbox").removeAttr("checked");
			$(".settlement").show();
			$(".compile").hide();
		}
		_redact = !_redact
	})
	
	//商品列表页筛选效果
	var _filtrate = true;
	$("#filtrate").click(function(){
		$(".shoppinglist_filtrate").addClass("filtrate_hide");
		
	})
	$(".filtrate_btn button").click(function(){
		$(".shoppinglist_filtrate").removeClass("filtrate_hide");
	})
	
	$(".filtrateclass span").click(function(){
		$(this).parents(".filtrateclass").find("span").removeClass("active");
		$(this).addClass("active");
		$(this).find("input").attr("checked",true)
	})
	$(".all_list").click(function(){
		if(!$(this).is(".rotate")){
			$(this).addClass("rotate");
			$(this).find("b").text("收起");
			$(this).parents(".filtrateclass").find("p").hide();
			$(this).parents(".filtrateclass").find("div").show();
		}else{
			$(this).removeClass("rotate");
			$(this).find("b").text("全部");
			$(this).parents(".filtrateclass").find("p").show();
			$(this).parents(".filtrateclass").find("div").hide();
		}
		
	})
	
	//商品分类列表
	$("#classify_left > li").click(function(){
		$("#classify_left > li").eq($(this).index()).addClass("active").siblings().removeClass("active");
		$("#classify_right >li").eq($(this).index()).addClass("show").siblings().removeClass("show");
	})
	
	
	
	//回到顶部
	var time;
	$(window).scroll(function(){
		clearTimeout(time);
		if($(window).scrollTop() > 100){
			time = setTimeout(function(){
				$(".back_to_top").show();
			})
		}
		else{
			time = setTimeout(function(){
				$(".back_to_top").hide();
			})
		}
	})
	$(".back_to_top").click(function(){
		$('body,html').animate({scrollTop:0},300)
	})
	

	
})
