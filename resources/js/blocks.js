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

console.log('🎨 Auto Blocks - System loaded!');