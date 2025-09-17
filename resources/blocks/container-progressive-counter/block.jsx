import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, __experimentalNumberControl as NumberControl } from '@wordpress/components';

registerBlockType('sage/container-progressive-counter', {
    edit: ({ attributes, setAttributes }) => {
        const { 
            mainTitle,
            counter1Number,
            counter1Title,
            counter2Number,
            counter2Title,
            counter3Number,
            counter3Title,
            counter4Number,
            counter4Title,
            counter5Number,
            counter5Title
        } = attributes;
        
        const blockProps = useBlockProps();
        
        return (
            <>
                <InspectorControls>
                    <PanelBody title="Counter Settings" initialOpen={true}>
                        <NumberControl
                            label="Counter 1 - Number"
                            value={counter1Number || 0}
                            onChange={(value) => setAttributes({ counter1Number: parseInt(value) || 0 })}
                            min={0}
                        />
                        
                        <NumberControl
                            label="Counter 2 - Number"
                            value={counter2Number || 0}
                            onChange={(value) => setAttributes({ counter2Number: parseInt(value) || 0 })}
                            min={0}
                        />
                        
                        <NumberControl
                            label="Counter 3 - Number"
                            value={counter3Number || 0}
                            onChange={(value) => setAttributes({ counter3Number: parseInt(value) || 0 })}
                            min={0}
                        />
                        
                        <NumberControl
                            label="Counter 4 - Number"
                            value={counter4Number || 0}
                            onChange={(value) => setAttributes({ counter4Number: parseInt(value) || 0 })}
                            min={0}
                        />
                        
                        <NumberControl
                            label="Counter 5 - Number"
                            value={counter5Number || 0}
                            onChange={(value) => setAttributes({ counter5Number: parseInt(value) || 0 })}
                            min={0}
                        />
                    </PanelBody>
                </InspectorControls>
                
                <div {...blockProps} className="px-8 pt-0 pb-8 mb-10 border-2 border-blue-200 border-dashed social-media-list-block-editor bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                    <div className="container mx-auto">
                        <RichText
                            tagName="h2"
                            className="text-3xl font-bold text-[#4C463F] pb-10 mb-20 text-center"
                            value={mainTitle}
                            onChange={(value) => setAttributes({ mainTitle: value })}
                            placeholder="Enter main title..."
                        />
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-[#4C463F] mb-4">
                                    {counter1Number || '0'}
                                </div>
                                <RichText
                                    tagName="h3"
                                    className="text-lg font-semibold text-[#4C463F]"
                                    value={counter1Title}
                                    onChange={(value) => setAttributes({ counter1Title: value })}
                                    placeholder="Counter 1 title..."
                                />
                            </div>
                            
                            <div className="text-center">
                                <div className="text-4xl font-bold text-[#4C463F] mb-4">
                                    {counter2Number || '0'}
                                </div>
                                <RichText
                                    tagName="h3"
                                    className="text-lg font-semibold text-[#4C463F]"
                                    value={counter2Title}
                                    onChange={(value) => setAttributes({ counter2Title: value })}
                                    placeholder="Counter 2 title..."
                                />
                            </div>
                            
                            <div className="text-center">
                                <div className="text-4xl font-bold text-[#4C463F] mb-4">
                                    {counter3Number || '0'}
                                </div>
                                <RichText
                                    tagName="h3"
                                    className="text-lg font-semibold text-[#4C463F]"
                                    value={counter3Title}
                                    onChange={(value) => setAttributes({ counter3Title: value })}
                                    placeholder="Counter 3 title..."
                                />
                            </div>
                            
                            <div className="text-center">
                                <div className="text-4xl font-bold text-[#4C463F] mb-4">
                                    {counter4Number || '0'}
                                </div>
                                <RichText
                                    tagName="h3"
                                    className="text-lg font-semibold text-[#4C463F]"
                                    value={counter4Title}
                                    onChange={(value) => setAttributes({ counter4Title: value })}
                                    placeholder="Counter 4 title..."
                                />
                            </div>
                            
                            <div className="text-center">
                                <div className="text-4xl font-bold text-[#4C463F] mb-4">
                                    {counter5Number || '0'}
                                </div>
                                <RichText
                                    tagName="h3"
                                    className="text-lg font-semibold text-[#4C463F]"
                                    value={counter5Title}
                                    onChange={(value) => setAttributes({ counter5Title: value })}
                                    placeholder="Counter 5 title..."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    },
    
    save: () => null // Server-side rendering
});