<?php

class lock_sieve_rule extends rcube_plugin
{
	function init()
	{
		$rcmail = rcube::get_instance();
		$this->load_config('config.inc.php.dist');
		$this->load_config('config.inc.php');
		$rcmail->output->set_env('lock_rule_name', $rcmail->config->get('lock_rule_name'));
		$rcmail->output->set_env('lock_rule_info', $rcmail->config->get('lock_rule_info'));
		if ($rcmail->output->type == 'html') {
			$this->include_script('lock_sieve_rule.js');
		}
	}
}
