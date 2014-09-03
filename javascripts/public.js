//reset
$(function(){
	date();
	setInterval(date,1000);
});


//左侧导航
$(function(){
	$('.nav li:last-child').css('border-bottom',0);
	$('.nav h2 span').click(function(){	//菜单显示隐藏
		var subMenu = $(this).next();
		var time = 240;
		if(subMenu.length){
			subMenu.stop(false,false).slideToggle(time);
			$('.nav ul').not(subMenu).slideUp(time);	
		}
	});
	$('.kjjjjjjjjjjjv  c').click(function(){	//导航显示隐藏
		var t = $(this);
		if(t.hasClass('leftShow')){
			$('#nav').animate({left:0},function(){t.removeClass('leftShow')});
			$('#content').animate({marginLeft:157});
		}else{
			$('#nav').animate({left:-146},function(){t.addClass('leftShow')});
			$('#content').animate({marginLeft:11});
		};
	});
});

	
$(function(){
	//展开
	$('.a_zk').click(function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active').html('\u5c55\u5f00');
			$(this).parents('tr').prevAll('.none').hide();
		}else{
			$(this).addClass('active').html('\u6536\u8d77');
			$(this).parents('tr').prevAll('.none').show();
		};
	});
	
	//商机管理关闭里面展开的内容
	$('.btnCancel').click(function(){
		$(this).parents('table').parent('#Addlxr').slideUp();
		$(this).parents('table').parent('#Rev').slideUp();
		$(this).parents('table').parent('#shangji').slideUp();
	});

	$('.btnAddBluck').click(function(){
		$(this).next('.padding20').slideDown();
		$(this).next('table').find('.deltable').slideDown();
	});
	
	$('.modInfo .a_slide,.modInfo h4 span').click(function(){
		var next = $(this).parent().next('div');	
		if(next.is(":animated")){
			return false;
		}else{
			$(this).toggleClass('active');
			next.slideToggle();
		}
	});
	$('.modInfo h3').click(function(){
		var next = $(this).next('div');
		var aSlide = $(this).children(".a_slide");
		if(next.is(":animated")){
			return false;
		}else{
			next.slideToggle();
			aSlide.toggleClass('active');
		}
	});
	
	//添加客户
	$('.btnAdd').click(function(){
		if($('.dialogAdd').size() > 0 && $('.dialogAdd').is(':hidden')){
			$('body').css('overflow','hidden');
			$('.dialogAdd').show().animate({left:0},function(){
				$('.dialogAdd .leftIco').css('position','fixed').show();
			});
		};
	});
	
	//关闭弹层
	$('.leftIco,.btnClose').click(function(){
		$('.dialogAdd .leftIco').removeAttr('style','position');
		$('.dialogAdd').animate({left:'100%'},function(){
			$('.dialogAdd').hide();
			$('body').removeAttr('style','overflow');
		});
	});
});




//新增客户信息
$('.seaInfo').click(function(){
	$(this).find('p').fadeIn().delay(3000).fadeOut();	//发觉了新客户隐藏
});



//列表展开、修改、关闭
function slide(aThis,oTxt){
	var _this = $(aThis);
	var obj = _this.parents('tr').next().find('.modInfo');
	if(obj.is(":animated")){return false};	//防止连续多次点击
	
	if(_this.hasClass('active')){
		_this.html(oTxt).removeClass('active');
		obj.slideUp();
	}else{
		_this.html('收起').addClass('active');
		obj.slideDown();
	};
	
	//修改
	$('.btnMod',obj).click(function(){
		$(this).parent().find('.btnSave,.btnCan').show().end().find('.btnMod,.btnClo').hide();
		obj.find('p').show().end().find('span').hide();
	});
	//关闭
	$('.btnClo',obj).click(function(){
		_this.html(oTxt).removeClass('active');
		obj.slideUp();
	});		
	//取消
	$('.btnCan,.btnSave',obj).click(function(){
		$(this).parent().find('.btnSave,.btnCan').hide().end().find('.btnMod,.btnClo').show();
		obj.find('p').hide().end().find('span').show();
	 });
};


//顶部时间
function date(){
	var weekArr = ['日','一','二','三','四','五','六'];
	var oDate = new Date();
	var iYear = oDate.getFullYear();
	var iMonth = two(oDate.getMonth()+1);
	var iDay = two(oDate.getDate());
	var iWeek = weekArr[oDate.getDay()];
	var iHour = two(oDate.getHours());
	var iMin = two(oDate.getMinutes());
	$('.time').html('<b>'+ iHour +':'+ iMin +'</b><span>'+ iYear +'-'+ iMonth +'-'+ iDay +'<br/>星期'+ iWeek +'</span>');
	// document.title = two(oDate.getSeconds()); //秒
	function two(num){	//补0
		if(num < 10){return '0' + num};
		return num;
	};
};


//tab切换(注意结构)
function tabClass(obj,dom){
	$(obj).find('li').click(function(){
		if($(dom).children().is(":animated")) return false;
		$(this).addClass('active').siblings().removeClass('active');
		$(dom).children().eq($(this).index()).slideDown().siblings().slideUp();	
	});
};

//导入事件
function ImpFile(){
	$("#ImpFile").trigger("click");
}
//上传事件
function upFile(target, show){
	var target = $("#" + target);
	var show = $("#" + show);
	target.bind('change',{t:target,s:show},fileChange);
	target.trigger('click');
	
}
function fileChange(e){
	var s = e.data.s;
	var t = e.data.t.val();
	s.val(t);
	t.unbind('change');
}