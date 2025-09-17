<?php
// Server-side rendering for Hero V1 block

$content = $attributes['content'] ?? '';
$block_data = [
    'title' => 'Hero V1',
    'content' => $content,
    'slug' => 'hero-v1'
];

echo view('blocks.hero-v1', $block_data)->render();