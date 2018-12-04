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
const {
    RichText,
} = wp.editor;
const { Spinner } = wp.components;
const { withSelect } = wp.data;


/**
 * Register static block example block
 */
export default registerBlockType(
    'jsforwpblocks/partners',
    {
        title: __('wpbeirut - Staff Gallery', 'jsforwpblocks'),
        description: __('An example of how to use WP Beirut Staff Gallery.', 'jsforwpblocks'),
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
        getEditWrapperProps(attributes) {
            
        },
        edit: props => {
            const { setAttributes } = props;

            return [
                <Inspector {...{ setAttributes, ...props }} />,
                <Edit {...{ setAttributes, ...props }} />
            ];
        },
        save: props => {
            const { attributes } = props;


            return (
                <section id="team-section" class="team-section ow-section">
		<div class="container">
			<div class="col-md-3 col-sm-4">
				<div class="section-header">
					<h3><img src="https://gbvsbakery-profreelancer.c9users.io/wp-content/themes/wpbeirutgutenberg/images/icon/sep-icon.png" alt="sep-icon" />{attributes.title}</h3>
				</div>
				<p>{attributes.heading}</p>
			</div>
			<div class="col-md-9 col-sm-8">
			<h1>This is half static half dynamic will render on front end</h1>
			</div>
		</div>
	</section>
            );
        },
    },
);
