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
    'jsforwpblocks/quotes',
    {
        title: __('wpbeirut - Quotes', 'jsforwpblocks'),
        description: __('An example of how to use StepConference Quotes.', 'jsforwpblocks'),
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

          <h1>Wordpress Beirut Quotes Will Render on the front End </h1>
);
        },
    },
);
