$(document).ready(function() {
	if($('#_name').val() && $('#_name').val() == window.rcmail.env.lock_rule_name){
		$("#footer").html('<b>' + window.rcmail.env.lock_rule_info + '</b>');
	}

	$(document).on("click", "#filtermenulink", function() {
		$('.name').each(function() {
			    if($(this).text() == window.rcmail.env.lock_rule_name){
						if($(this).parent().attr('class') == 'selected focused'){
							window.location.reload();
						}
					}
		});

	});

});
