$(document).ready(function() {
	if($('#_name').val() && $('#_name').val() == window.rcmail.env.lock_rule_name){
		$("#footer").html('<b>' + window.rcmail.env.lock_rule_info + '</b>');
	}
});
