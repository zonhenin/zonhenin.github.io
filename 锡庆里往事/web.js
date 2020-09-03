let defaultFonts='Helvetica, Tahoma, Arial, STXihei, "华文细黑", "Microsoft YaHei", "微软雅黑", sans-serif';

function setPreferableFont() {
	$('.zhrr-st').each(function() {
		$(this).text($(this).data('text'));
	});
	
	let oh=$('.zhrr-text').height()
	$('body').css('font-family', '"BabelStone Han", '+defaultFonts);
	let nh=$('.zhrr-text').height()
	if (oh==nh) {
		setCompatibleFont();
		toastr["error"]('载入专用字体失败。\n为正确显示所有专用吴语汉字，请<button type="button" id="download-font-button">下载专用字体</button>，並刷新页面。');
		$('#download-font-button').click(function() {
			window.location.href = 'BabelStoneHan.ttf';
		});
	}
}

function setCompatibleFont() {	
	$('.zhrr-st').each(function() {
		$(this).text($(this).data('alt'));
	});	
	$('body').css('font-family', defaultFonts);
}

$(function() {
	$('#babel-stone').click(setPreferableFont);	
	$('#safe-font').click(setCompatibleFont);
	
	setCompatibleFont();
	$('body').css('font-family', '');
	setPreferableFont();
});