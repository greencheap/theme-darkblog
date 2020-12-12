<?php 
return [
    "name" => "darkblog",

    'menus' => [
        'main' => 'Main'
    ],

    "config" => [
        "avatar_img" => "",
        "name" => null,
        "description" => null,
        "socials" => [
            [
                "title" => "Facebook",
                "uri" => ""
            ]
        ],
        'disqus_code' => ''
    ],

    "events" => [
        "view.system/site/admin/settings" => function ($event, $view) use ($app) {
            $view->script("site-theme", "theme:app/bundle/site-theme.js", "site-settings");
            $view->data('$theme', $this);
        },
    ]
];
?>