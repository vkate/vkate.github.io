(function($) {
	var p = new spredfast.Poller();
	var colors = ['green','yellow','red','orange','pink'];
	
	p.poll({frequency:3},function(data,limit){
		var items = $("#items");
		items.html("");
		var ul = $("<ul>");
		var i = 0;
		$.each(data,function(key,val){
			if(i < 5){
			var li = $("<li>");
			li.append($("<div class='left'>").html(val.name));
			li.append($("<div class='right'>").html(val.count + ' Mentions'));
			ul.append(li);
			
			}
			i = i+1;
		});
		items.append(ul);
		$(".right").css('color',colors[p._getRandomNumber(0,4)]);
	});
}(jQuery));