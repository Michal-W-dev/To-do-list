$('ul').on('click', 'span.text', function() {
	$(this).toggleClass('completed');
});
$('ul').on('click', 'span.bin', function(event) {
	$(this).parent().fadeOut(500, function() {
		//this-span.parent-li   (this) - only 1 span/li clicked  //(span/li).remove - would remove all spans/li
		$(this).remove(); // this-li
	});
	event.stopPropagation(); // not allow to bubble (click span -> li -> div -> etc.)
	// (this) - only 1 span, (parent), remove li
});
$("input[type = 'text']").keypress(function(event) {
	// console.log('you hit ENTER');
	if (event.which === 13) {
		var text = $(this).val();
		$('ul').append(
			'<li><span class="bin"><i class="trash alternate outline icon"></i></span>' +
				'<span class="text">' +
				text +
				'</span></li>'
		);
		$(this).val('');
	}
});
$('i.plus').click(function() {
	$("input[type = 'text']").fadeToggle();
});
// == The previous version ==
// $('li').click(function() {
// 	// console.log($(this).css('color')); //('color', 'grey') grey shows as rgb (look at space between numbers) 		//to compare use rgb as color //if (grey) => turn (black)
// 	if ($(this).css('color') == 'rgb(128, 128, 128)') {
// 		$(this).css({
// 			color: 'black', //this - only individual link selected
// 			textDecoration: 'none'
// 		});
// 	} else {
// 		$(this).css({
// 			color: 'grey', //this - only individual link selected
// 			textDecoration: 'line-through'
// 		});
// 	}
// });

// $('li').click(function() {
// 	$(this).toggleClass('completed');
// });
