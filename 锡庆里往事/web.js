let defaultFonts='Helvetica, Tahoma, Arial, STXihei, "华文细黑", "Microsoft YaHei", "微软雅黑", sans-serif';
let idealFont;
var mobile

function setMobile(e) {
	if (mobile) {
		e.text(e.data('mobile'));
	}
}

function setPreferableFont() {
	if (idealFont) {
		return;
	}
	
	$('.zhrr-st').each(function() {
		$(this).text($(this).data('text'));
		setMobile($(this));
	});
	
	let oh=$('.zhrr-text').height();
	$('body').css('font-family', '"BabelStone Han", '+defaultFonts);
	idealFont=true;
	setTimeout(function() {
		let nh=$('.zhrr-text').height();
		if (oh==nh) {
			setCompatibleFont();
			toastr["error"]('载入专用字体失败。\n为正确显示所有专用吴语汉字，请使用电脑上的火狐浏览器，或<button type="button" id="download-font-button">下载安装专用字体</button>，並刷新页面。');
			$('#download-font-button').click(function() {
				window.location.href = 'BabelStoneHan.ttf';
			});
		}
	}, 5000);
}

function setCompatibleFont() {
	$('.zhrr-st').each(function() {
		$(this).text($(this).data('alt'));
		setMobile($(this));
	});	
	$('body').css('font-family', defaultFonts);
	idealFont=false;
}

function wechat() {
	let el = document.getElementById('wx_share');
    el.target = '_new';
    el.click();
}

$(function() {
	$('#babel-stone').click(setPreferableFont);	
	$('#safe-font').click(setCompatibleFont);	
	
	{
		let wg=$('#test-good').width();
		let wh=$('#test-hard').width();
		let wm=$('#test-mobile').width();
		$('#test').remove();

		mobile=wg==0 || wm/wg<0.7;
		setCompatibleFont();	
		if (wg!=0 && wh/wg>0.7) {
			setPreferableFont();
		}
	}

	$.blockUI({ message: $('#message-on-load'), css: { left: '25%', width: '50%' } });
	$('#message-on-load-ok').click(function() { 
		$.unblockUI();
		if (!mobile) {
			setTimeout(wechat, 1000*60*5);
		}
		$('audio')[0].play();
	});
});