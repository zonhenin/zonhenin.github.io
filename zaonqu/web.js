var index;

function nav() {
	let list=[{
		'title': '上课铃+打雷',
		'file': '上课A.flac',
	}, {
		'title': '高口',
		'file': '高口.flac',
	}, {
		'title': '高考英语口试',
		'file': '高考.flac',
	}, {
		'title': '天鹅',
		'file': '天鹅.flac',
	}, {
		'title': '曾柔',
		'file': '曾柔.flac',
		'html': '<p>儿时《鹿鼎记》片段，我改编并电子琴演奏。</p><p>另有视频在此：<a target=”_blank” href="https://www.bilibili.com/video/BV1qz4y1f7r9/">https://www.bilibili.com/video/BV1qz4y1f7r9/</a></p>',
	}, {
		'title': '无伴奏三声部合唱',
		'file': '合唱.flac',
		'html': '最好用外置立体声扬声器',
	}, {
		'title': '流行歌曲',
		'file': '唱歌.flac',
		'html': '注：伴奏不是我演奏的',
	}, {
		'title': '上课铃',
		'file': '上课B.flac',
	}];
	let selected=list[index];
	
	$('.zhrr-title').text(selected.title);
	document.title=selected.title;
	$('audio').attr('src', selected.file);
	$('#download').attr('href', selected.file);
	$('.zhrr-details').html(selected.html || '&nbsp;');
	
	if (index==0) {
		$('#prev').hide();
	} else {
		$('#prev').show();
	}
	
	if (index==list.length-1) {
		$('#next').hide();
	} else {
		$('#next').show();
	}
	
	$('audio')[0].play();
}

$(function() {
	index=window.location.hash.substring(1) || 0;
	nav();
	
	$('#prev').click(function() {
		--index;
		window.location.hash='#'+index;
		nav();
		return false;
	});
	
	$('#next').click(function() {
		++index;
		window.location.hash='#'+index;
		nav();
		return false;
	});
});