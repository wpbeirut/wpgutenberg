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
    'jsforwpblocks/scores',
    {
        title: __('wpbeirut - Scores', 'jsforwpblocks'),
        description: __('wpbeirut Scores.', 'jsforwpblocks'),
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

            return (
 <div id="statistics-section" class="statistics-section ow-background">
		<div class="container">
			<div class="col-md-3 col-sm-3 col-xs-6">
				<div class="statistics-box">
					<h3>
						<img src="https://gbvsbakery-profreelancer.c9users.io/wp-content/themes/wpbeirutgutenberg/images/statistics/satisfied-customer.png" alt="satisfied-customer" />
						<span class="count" id="statistics_1_count-1" data-statistics_percent={ attributes.col1Title } ></span>
					</h3>
					<img src="https://gbvsbakery-profreelancer.c9users.io/wp-content/themes/wpbeirutgutenberg/images/icon/brush.png" alt="brush" />
					<h4>{ attributes.col1Text }</h4>
				</div>
			</div>
			<div class="col-md-3 col-sm-3 col-xs-6">
				<div class="statistics-box">
					<h3>
						<img src="https://gbvsbakery-profreelancer.c9users.io/wp-content/themes/wpbeirutgutenberg/images/statistics/building.png" alt="building" />
						<span class="count" id="statistics_1_count-2" data-statistics_percent={ attributes.col2Title } ></span>
					</h3>
					<img src="https://gbvsbakery-profreelancer.c9users.io/wp-content/themes/wpbeirutgutenberg/images/icon/brush.png" alt="brush" />
					<h4>{ attributes.col2Text }</h4>
				</div>
			</div>

			<div class="col-md-3 col-sm-3 col-xs-6">
				<div class="statistics-box">
					<h3>
						<img src="https://gbvsbakery-profreelancer.c9users.io/wp-content/themes/wpbeirutgutenberg/images/statistics/clever-employee.png" alt="clever-employee" />
						<span class="count" id="statistics_1_count-3" data-statistics_percent={ attributes.col3Title } ></span>
					</h3>
					<img src="https://gbvsbakery-profreelancer.c9users.io/wp-content/themes/wpbeirutgutenberg/images/icon/brush.png" alt="brush" />
					<h4>{ attributes.col3Text }</h4>
				</div>
			</div>
			<div class="col-md-3 col-sm-3 col-xs-6">
				<div class="statistics-box">
					<h3>
						<img src="https://gbvsbakery-profreelancer.c9users.io/wp-content/themes/wpbeirutgutenberg/images/statistics/office.png" alt="office" />
						<span id="statistics_1_count-4" data-statistics_percent={ attributes.col4Title } ></span>
					</h3>
					<img src="https://gbvsbakery-profreelancer.c9users.io/wp-content/themes/wpbeirutgutenberg/images/icon/brush.png" alt="brush" />
					<h4>{ attributes.col4Text }</h4>
				</div>
			</div>
		</div>
	</div>
            );
        },
    },
);
