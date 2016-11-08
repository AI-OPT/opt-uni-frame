//导航下拉
$(function () {
    $(".cloud-breadcrumb ul .user .yonh").click(function () {
		$(this).children('i').toggleClass(" icon-caret-down   icon-caret-up");
		$(this).parent().children('.show').slideToggle(100);
    });
});	

//左侧菜单关闭
$(function(){
$(".left-tplist i").click(function () {
	$(this).parent('.left-tplist').hide();
	});
	}); 
	
//我的订单 点击展开
$(function () {
    $(".query-order ul .right p .is").click(function () {
		$(this).children('i').toggleClass("icon-angle-down  icon-angle-up");
		$(this).parent().parent().parent().parent().parent().children('.order-hiddn').slideToggle(100);
    });
});	

//我的订单 table
$(function(){
$(".oder-table ul li a").click(function () {
                $(".oder-table ul li a").each(function () {
                    $(this).removeClass("current");
                });
                $(this).addClass("current");
            });
$('.oder-table ul li a').click(function(){
  var index=$('.oder-table ul li a').index(this);
     if(index==0){
     $('#table-da1').show();
  	 $('#table-da2').hide();
  	 $('#table-da3').hide();
  	 $('#table-da4').hide();
  	 $('#table-da5').hide();
   }
   if(index==1){
   $('#table-da2').show();
   $('#table-da1').hide();
   $('#table-da3').hide();
   $('#table-da4').hide();
   $('#table-da5').hide();
   }
   if(index==2){
   $('#table-da3').show();
   $('#table-da2').hide();
   $('#table-da1').hide();
   $('#table-da4').hide();
   $('#table-da5').hide();
   }
   if(index==3){
   $('#table-da4').show();
   $('#table-da3').hide();
   $('#table-da2').hide();
   $('#table-da1').hide();
   $('#table-da5').hide();
   }
   if(index==4){
   $('#table-da5').show();
   $('#table-da3').hide();
   $('#table-da2').hide();
   $('#table-da1').hide();
   $('#table-da4').hide();
   }
  }); 
});

//我的订单 table
$(function(){
$(".oder-table ul li a").click(function () {
                $(".oder-table ul li a").each(function () {
                    $(this).removeClass("current");
                });
                $(this).addClass("current");
            });
$('.oder-table ul li a').click(function(){
  var index=$('.oder-table ul li a').index(this);
     if(index==0){
     $('#translate1').show();
  	 $('#translate2').hide();
   }
   if(index==1){
   $('#translate2').show();
   $('#translate1').hide();
   }
  }); 
});

//
$(function () {
    var st = 100;
    $('.right-list-table .dinda').mouseenter(function () {
		$('.table-show').show(1);
    })
		$(".table-show").click(function () {
                $(this).hide(1);
            });
			
		$('.right-list-table').mouseleave(function () {
        $('.table-show').hide(1);
    });	
  });
 
//设置密码
$(function(){
  $("#next-bt1").click(function(){
  $("#next1").hide();
  $("#next2").show();
  });
  $("#next-bt2").click(function(){
  $("#next2").hide();
  $("#next3").show();
  });
  $("#next-bt4").click(function(){
  $("#next4").hide();
  $("#next5").show();
  });
  $("#next-bt5").click(function(){
  $("#next5").hide();
  $("#next6").show();
  });
  $("#fy-btn").click(function(){
  $("#fy1").hide();
  $("#fy2").show();
  });
  $("#fy-btn1").click(function(){
  $("#fy2").hide();
  $("#fy1").show();
  });
  $("#back-btn").click(function(){
  $("#back-pass").hide();
  $("#back-pass1").show();
  });
});

//设置密码 table
$(function(){
$(".set-up a").click(function () {
                $(".set-up a").each(function () {
                    $(this).removeClass("current");
                });
                $(this).addClass("current");
            });
$('.set-up a').click(function(){
  var index=$('.set-up a').index(this);
     if(index==0){
     $('#set-table1').show();
  	 $('#set-table2').hide();
   }
   if(index==1){
   $('#set-table2').show();
   $('#set-table1').hide();
   }
  }); 
});

/**翻译下单去掉最后的线条**/
$(function () {
$(".attachment  ul:last").css("border-bottom","none");
});
//翻译下单关闭附件
$(function(){
$(".attachment ul li i").click(function () {
	$(this).parent().parent('ul').hide();
	});
	}); 