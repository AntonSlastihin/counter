$('.counter-block > .count').each(function(){
	$(this).prop("counter", 0).animate({
		counter: $(this).data('value')
	}, {
		duration: 1000,
		easing: 'swing',
		step: function(now){
			$(this).text(Math.ceil(now));
		}
	})
})