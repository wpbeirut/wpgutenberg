/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;

const {
    col1Title, col1Text, col2Title, col2Text, col3Title, col3Text, col4Title, col4Text
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Edit extends Component {

    constructor() {
        super( ...arguments );
    }

    render() {
        const {
            attributes: { col1Title, col1Text, col2Title, col2Text, col3Title, col3Text, col4Title, col4Text },
            className, setAttributes  } = this.props;

        return (
            <div id="statistics-section" class="statistics-section ow-background">
		<div class="container">
			<div class="col-md-3 col-sm-3 col-xs-6">
				<div class="statistics-box">
					<h3>
						<img src="https://gbvsbakery-profreelancer.c9users.io/wp-content/themes/wpbeirutgutenberg/images/statistics/satisfied-customer.png" alt="satisfied-customer" />
						<span class="count" id="statistics_1_count-1" data-statistics_percent={col1Title}></span>
					</h3>
					<img src="https://gbvsbakery-profreelancer.c9users.io/wp-content/themes/wpbeirutgutenberg/images/icon/brush.png" alt="brush" />
					<h4>{col1Text}</h4>
				</div>
			</div>
			<div class="col-md-3 col-sm-3 col-xs-6">
				<div class="statistics-box">
					<h3>
						<img src="https://gbvsbakery-profreelancer.c9users.io/wp-content/themes/wpbeirutgutenberg/images/statistics/building.png" alt="building" />
						<span class="count" id="statistics_1_count-2" data-statistics_percent={col2Title}></span>
					</h3>
					<img src="https://gbvsbakery-profreelancer.c9users.io/wp-content/themes/wpbeirutgutenberg/images/icon/brush.png" alt="brush" />
					<h4>{col2Text}</h4>
				</div>
			</div>

			<div class="col-md-3 col-sm-3 col-xs-6">
				<div class="statistics-box">
					<h3>
						<img src="https://gbvsbakery-profreelancer.c9users.io/wp-content/themes/wpbeirutgutenberg/images/statistics/clever-employee.png" alt="clever-employee" />
						<span class="count" id="statistics_1_count-3" data-statistics_percent={col3Title}></span>
					</h3>
					<img src="https://gbvsbakery-profreelancer.c9users.io/wp-content/themes/wpbeirutgutenberg/images/icon/brush.png" alt="brush" />
					<h4>{col3Text}</h4>
				</div>
			</div>
			<div class="col-md-3 col-sm-3 col-xs-6">
				<div class="statistics-box">
					<h3>
						<img src="https://gbvsbakery-profreelancer.c9users.io/wp-content/themes/wpbeirutgutenberg/images/statistics/office.png" alt="office" />
						<span id="statistics_1_count-4" data-statistics_percent={col4Title}></span>
					</h3>
					<img src="https://gbvsbakery-profreelancer.c9users.io/wp-content/themes/wpbeirutgutenberg/images/icon/brush.png" alt="brush" />
					<h4>{col4Text}</h4>
				</div>
			</div>
		</div>
	</div>
        );
    }
}
