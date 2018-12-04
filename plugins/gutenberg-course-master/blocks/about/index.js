/**
 * Block dependencies
 */
import classnames from 'classnames';
import Inspector from './inspector';
import Edit from './edit';
import icon from './icon';
import attributes from './attributes';
import './style.scss';

const { __ } = wp.i18n;
const {
    registerBlockType,
} = wp.blocks;


/**
 * Register static block example block
 */
export default registerBlockType(
    'jsforwpblocks/about',
    {
        title: __('wpbeirut - About', 'jsforwpblocks'),
        description: __('wpbeirut About.', 'jsforwpblocks'),
        category: 'widgets',
        icon: {
            background: 'rgba(254, 243, 224, 0.52)',
            src: icon,
        },
        keywords: [
            __('Palette', 'jsforwpblocks'),
            __('Settings', 'jsforwpblocks'),
            __('Scheme', 'jsforwpblocks'),
        ],
        attributes,
        edit: props => {
            const { setAttributes } = props;

            return [
                <Inspector {...{ setAttributes, ...props }} />,
                <Edit {...{ setAttributes, ...props }} />
            ];
        },
        save: props => {
            const { attributes } = props;
const onSelectImage = img => {
                setAttributes( {
                    imgID: img.id,
                    imgURL: img.url,
                    imgAlt: img.alt,
                } );
            };
            const onRemoveImage = () => {
                setAttributes({
                    imgID: null,
                    imgURL: null,
                    imgAlt: null,
                });
            }
            
            const onSelectImage2 = img => {
                setAttributes( {
                    imgID2: img.id,
                    imgURL2: img.url,
                    imgAlt2: img.alt,
                } );
            };
            const onRemoveImage2 = () => {
                setAttributes({
                    imgID2: null,
                    imgURL2: null,
                    imgAlt2: null,
                });
            }
            
            var bgImg = {
  backgroundImage: 'url(' + attributes.imgURL + ')',
};

var eventlogo = {
    backgroundImage: 'url(' + attributes.imgURL2 + ')',
}

var renderbtn = '';
if (attributes.btnLink) {
    var renderbtn = <div class="action-buttons">
              <a href={ attributes.btnLink }><button type="button" class="btn" >{attributes.btnTitle}</button></a>
      </div>
}


if(attributes.toggleControl) {
         return (
    <section id="welcome-section" class="welcome-section ow-section">
		<div class="container">
			<div class="col-md-8 col-sm-7 welcome-content">
				<div class="section-header">
					<h3>{ attributes.heading }</h3>
				</div>
				<p>{ attributes.content }</p>
				<a href={ attributes.btnLink }>{ attributes.btnTitle }</a>
			</div>
			<div class="col-md-4 col-sm-5">
 <img
                                src={ attributes.imgURL }
                                alt={ attributes.imgAlt }
                            />
			</div>
		</div>
	</section>
            );
}

            return (
    <section id="welcome-section" class="welcome-section ow-section">
		<div class="container">
			<div class="col-md-4 col-sm-5">
 <img
                                src={ attributes.imgURL }
                                alt={ attributes.imgAlt }
                            />
			</div>
			<div class="col-md-8 col-sm-7 welcome-content">
				<div class="section-header">
					<h3>{ attributes.heading }</h3>
				</div>
				<p>{ attributes.content }</p>
				<a href={ attributes.btnLink }>{ attributes.btnTitle }</a>
			</div>
		</div>
	</section>
            );
        },
    },
);
