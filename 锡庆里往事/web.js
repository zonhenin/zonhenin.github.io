$(function() {
	$.blockUI({ message: $('#message-on-load'), css: { left: '25%', width: '50%' } });
	$('#message-on-load-ok').click(function() { 
		$.unblockUI();
		$('audio')[0].play();
	});
});