import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InspectorControls, RichText } from '@wordpress/block-editor';
import { PanelBody, TextControl, SelectControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

registerBlockType('sage/primary-button', {
    edit: ({ attributes, setAttributes }) => {
        const { label, link, target, version } = attributes;
        const blockProps = useBlockProps();
        
        const buttonStyles = {
            'primary-button': 'p-6 text-white text-xl bg-green-600 hover:bg-green-900 hover:text-white transition-all duration-300 ease-in-out group flex gap-4 items-center rounded-[90px] w-fit',
            'secondary-large': 'p-6 text-green-600 border border-green-600 text-xl bg-white hover:text-green-900 hover:border-green-900 transition-all duration-300 ease-in-out group flex gap-4 items-center rounded-[90px] w-fit',
        };
        
        return (
            <>
                <InspectorControls>
                    <PanelBody title={__('Button Settings', 'sage')} initialOpen={true}>
                        <TextControl
                            label={__('Button Text', 'sage')}
                            value={label}
                            onChange={(value) => setAttributes({ label: value })}
                            help={__('Enter the text that will appear on the button', 'sage')}
                        />
                        
                        <TextControl
                            label={__('Button Link', 'sage')}
                            value={link}
                            onChange={(value) => setAttributes({ link: value })}
                            help={__('Enter the URL where the button should link to', 'sage')}
                            placeholder="https://example.com"
                        />
                        
                        <SelectControl
                            label={__('Button Style', 'sage')}
                            value={version}
                            options={[
                                { label: __('Primary Button (Green)', 'sage'), value: 'primary-button' },
                                { label: __('Secondary Large (White with Green Border)', 'sage'), value: 'secondary-large' },
                            ]}
                            onChange={(value) => setAttributes({ version: value })}
                            help={__('Choose the visual style for your button', 'sage')}
                        />
                        
                        <ToggleControl
                            label={__('Open in New Tab', 'sage')}
                            checked={target === '_blank'}
                            onChange={(checked) => setAttributes({ target: checked ? '_blank' : '_self' })}
                            help={__('Enable this to open the link in a new browser tab', 'sage')}
                        />
                    </PanelBody>
                </InspectorControls>

                <div {...blockProps} >
 
                    
                    <div className="button-preview mb-4">
                        <a 
                            href="#" 
                            className={`${buttonStyles[version]} cursor-default`}
                            onClick={(e) => e.preventDefault()}
                        >
                            {label || __('Button Text', 'sage')}
                            <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-all duration-300 ease-in-out group-hover:translate-x-2">
                                <path d="M24.7071 8.7071C25.0976 8.31658 25.0976 7.68342 24.7071 7.29289L18.3431 0.928931C17.9526 0.538406 17.3195 0.538406 16.9289 0.928931C16.5384 1.31946 16.5384 1.95262 16.9289 2.34314L22.5858 8L16.9289 13.6569C16.5384 14.0474 16.5384 14.6805 16.9289 15.0711C17.3195 15.4616 17.9526 15.4616 18.3431 15.0711L24.7071 8.7071ZM0 8L8.74228e-08 9L24 9L24 8L24 7L-8.74228e-08 7L0 8Z" 
                                      fill="currentColor" 
                                      className="transition-colors duration-300 ease-in-out"/>
                            </svg>
                        </a>
                    </div>
                    
                    
                        <p><strong>{__('Link:', 'sage')}</strong> {link || __('No link set', 'sage')}</p>
 
              
                </div>
            </>
        );
    },
    
    save: () => null // Server-side rendering
});