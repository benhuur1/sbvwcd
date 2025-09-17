import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText } from '@wordpress/block-editor';

registerBlockType('sage/hero-v1', {
    edit: ({ attributes, setAttributes }) => {
        const { content } = attributes;
        const blockProps = useBlockProps();
        
        return (
            <div {...blockProps} className="hero-v1-block-editor mb-10 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-dashed border-blue-200 rounded-xl pt-0 pb-8 px-8 ">
                <h3 className="text-base color-[#575757] !font-sans font-bold mb-2">Hero V1</h3>
                <RichText
                    tagName="div"
                    value={content}
                    onChange={(newContent) => setAttributes({ content: newContent })}
                    placeholder="Enter your content..."
                />
            </div>
        );
    },
    
    save: () => null // Server-side rendering
});