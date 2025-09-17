<?php

// Server-side rendering: passa os atributos para o Blade

$block_data = [
    'title'       => $attributes['title'] ?? '',
    'description' => $attributes['description'] ?? '',
    'imageUrl'    => $attributes['imageUrl'] ?? '',
    'imageAlt'    => $attributes['imageAlt'] ?? '',
    'badgeUrl'    => $attributes['badgeUrl'] ?? '',
    'badgeAlt'    => $attributes['badgeAlt'] ?? '',
];


echo view('blocks.two-columns-content', $block_data)->render();
