<?php
// Server-side rendering for Primary Button block

$label = $attributes['label'] ?? 'Click here';
$link = $attributes['link'] ?? '#';
$target = $attributes['target'] ?? '_self';
$version = $attributes['version'] ?? 'primary-button';

// Render the button using the existing button component
echo view('components.button', [
    'label' => $label,
    'link' => $link,
    'target' => $target,
    'version' => $version
])->render();