import { registerBlockType } from '@wordpress/blocks';
import {
  useBlockProps,
  RichText,
  MediaUpload,
  MediaUploadCheck,
  InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody, TextControl, Button } from '@wordpress/components';
import { Fragment } from '@wordpress/element';

registerBlockType('sage/two-columns-content', {
  attributes: {
    title: { type: 'string', default: '' },
    description: { type: 'string', default: '' },
    imageUrl: { type: 'string', default: '' },
    imageAlt: { type: 'string', default: '' },
    badgeUrl: { type: 'string', default: '' },
    badgeAlt: { type: 'string', default: '' },
  },

  edit: ({ attributes, setAttributes }) => {
    const { title, description, imageUrl, imageAlt, badgeUrl, badgeAlt } =
      attributes;
    const blockProps = useBlockProps();

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody title="Text Settings" initialOpen={true}>
            <TextControl
              label="Section Title"
              value={title}
              onChange={(val) => setAttributes({ title: val })}
              help="Main heading for this section"
            />
          </PanelBody>

          <PanelBody title="Main Image Settings" initialOpen={false}>
            <MediaUploadCheck>
              <MediaUpload
                onSelect={(media) =>
                  setAttributes({
                    imageUrl: media.url,
                    imageAlt: media.alt || media.title || '',
                  })
                }
                allowedTypes={['image']}
                value={imageUrl}
                render={({ open }) => (
                  <Button
                    onClick={open}
                    variant="secondary"
                    className="w-full mb-3"
                  >
                    {imageUrl
                      ? '🔄 Replace Main Image'
                      : '📷 Select Main Image'}
                  </Button>
                )}
              />
            </MediaUploadCheck>
            {imageUrl && (
              <TextControl
                label="Alt Text"
                value={imageAlt}
                onChange={(val) => setAttributes({ imageAlt: val })}
              />
            )}
          </PanelBody>

          <PanelBody title="Badge Image Settings" initialOpen={false}>
            <MediaUploadCheck>
              <MediaUpload
                onSelect={(media) =>
                  setAttributes({
                    badgeUrl: media.url,
                    badgeAlt: media.alt || media.title || '',
                  })
                }
                allowedTypes={['image']}
                value={badgeUrl}
                render={({ open }) => (
                  <Button
                    onClick={open}
                    variant="secondary"
                    className="w-full mb-3"
                  >
                    {badgeUrl ? '🔄 Replace Badge' : '📛 Select Badge Image'}
                  </Button>
                )}
              />
            </MediaUploadCheck>
            {badgeUrl && (
              <TextControl
                label="Alt Text"
                value={badgeAlt}
                onChange={(val) => setAttributes({ badgeAlt: val })}
              />
            )}
          </PanelBody>
        </InspectorControls>

        <div
          {...blockProps}
          className="py-12 bg-white from-blue-50 to-purple-50 border-2 border-dashed border-purple-200 rounded-xl"
        >
          <div className="max-w-[1120px] mx-auto px-4 grid md:grid-cols-2 gap-21 items-center">
            {/* Text Column */}
            <div>
              <div className="pb-10">
                <RichText
                  tagName="h2"
                  value={title}
                  onChange={(val) => setAttributes({ title: val })}
                  placeholder="Enter a section title"
                  className="font-heading font-light text-7xl md:text-7xl text-green-600 leading-tight"
                />
              </div>

              {/* adicionar funcionalidade do usuario conseguir adicionar blocos */}

              <RichText
                tagName="div"
                multiline="p"
                value={description}
                onChange={(val) => setAttributes({ description: val })}
                placeholder="Type text and press Enter for a new paragraph..."
                className="font-body text-gray-700 text-lg leading-relaxed space-y-5 max-w-prose"
              />
              {/* the content  */}
            </div>

            {/* Image Column */}
            <div className="relative space-y-4">
              {imageUrl ? (
                <div className="relative flex justify-center md:justify-end">
                  <img
                    src={imageUrl}
                    alt={imageAlt}
                    className="w-full max-w-lg rounded shadow-md"
                  />

                  {badgeUrl && (
                    <img
                      src={badgeUrl}
                      alt={badgeAlt}
                      className="absolute left-[54px] bottom-[-50px] w-28 md:w-36"
                    />
                  )}
                </div>
              ) : (
                <div className="w-full h-64 bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center rounded">
                  <p className="text-gray-500 text-center">
                    Select main image in sidebar
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Fragment>
    );
  },

  save: () => null, // SSR
});
