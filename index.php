<?php

return [

	'name' => 'roboto/companyinfo',

	'type' => 'extension',

	'settings' => '@site/settings#company-info',


	'events' => [
		'view.system/site/admin/settings' => function ($event, $view) use ($app) {
			$view->script('company-info', 'roboto/companyinfo:app/bundle/company-info.js', 'site-settings');
		}

	]

];