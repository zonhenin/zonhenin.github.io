function wechat() {
	let el = document.getElementById('wx_share');
    el.target = '_new';
    el.click();
}

$(function() {
	$.blockUI({ message: $('#message-on-load'), css: { left: '25%', width: '50%' } });
	$('#message-on-load-ok').click(function() { 
		$.unblockUI();
		if (!mobile) {
			setTimeout(wechat, 1000*60*5);
		}
		$('audio')[0].play();
	});
});