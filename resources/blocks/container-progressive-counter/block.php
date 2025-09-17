<?php
// Server-side rendering for Container Progressive Counter block

$block_data = [
    'mainTitle' => $attributes['mainTitle'] ?? 'Measured Impact and Outcomes',
    'counter1Number' => $attributes['counter1Number'] ?? 100,
    'counter1Title' => $attributes['counter1Title'] ?? '',
    'counter2Number' => $attributes['counter2Number'] ?? 50,
    'counter2Title' => $attributes['counter2Title'] ?? '',
    'counter3Number' => $attributes['counter3Number'] ?? 5,
    'counter3Title' => $attributes['counter3Title'] ?? '',
    'counter4Number' => $attributes['counter4Number'] ?? 1000,
    'counter4Title' => $attributes['counter4Title'] ?? '',
    'counter5Number' => $attributes['counter5Number'] ?? 25,
    'counter5Title' => $attributes['counter5Title'] ?? '',
];

echo view('blocks.container-progressive-counter', $block_data)->render();