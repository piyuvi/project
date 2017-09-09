


function loadUser() {
	$.getJSON('/data.json', function(data) {
			    var template = $('#template').html();
			    var info = Mustache.to_html(template, data);
			    $('#target').html(info);
			});
}