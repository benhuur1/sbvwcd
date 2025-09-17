/**
 * Auto Blocks - Main registration file
 * 
 * Block imports are automatically added when you create new blocks using:
 * php artisan make:block my-block-name
 */

// Import global block styles
import '../css/blocks.css';

// AUTO-IMPORTS: Created blocks are automatically imported below this line
import '../blocks/two-columns-content/block.jsx';
import '../blocks/container-progressive-counter/block.jsx';
import '../blocks/hero-v1/block.jsx';
import '../blocks/primary-button/block.jsx';
import '../blocks/block-name/block.jsx';

console.log('🎨 Auto Blocks - System loaded!');