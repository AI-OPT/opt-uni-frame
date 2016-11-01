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