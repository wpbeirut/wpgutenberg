/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const {
    Editable,
    MediaUpload,
} = wp.editor;
const {
    Button,
    SelectControl,
    toggleControl,
    imgID, imgURL, imgAlt , imgID2, imgURL2, imgAlt2 , bgimg, logoimg, heading, content, where, when, btnTitle, btnLink
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Edit extends Component {

    constructor() {
        super( ...arguments );
    }

    render() {
      const { attributes: { toggleControl, imgID, imgURL, imgAlt , imgID2, imgURL2, imgAlt2 , bgimg, logoimg, heading, content, where, when, btnTitle, btnLink},
                className, setAttributes, isSelected } = this.props;
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
            
            const onSelectImage2 = img2 => {
                setAttributes( {
                    imgID2: img2.id,
                    imgURL2: img2.url,
                    imgAlt2: img2.alt,
                } );
            };
            const onRemoveImage2 = () => {
                setAttributes({
                    imgID2: null,
                    imgURL2: null,
                    imgAlt2: null,
                });
            }

if(toggleControl) {
    return (
    <section id="welcome-section" class="welcome-section ow-section">
		<div class="container">
			<div class="col-md-8 col-sm-7 welcome-content">
				<div class="section-header">
					<h3>{ heading }</h3>
				</div>
				<p>{ content }</p>
				<a href={ btnLink }>{ btnTitle }</a>
			</div>
						<div class="col-md-4 col-sm-5">
				{ ! imgID ? (

                        <MediaUpload
                            onSelect={ onSelectImage }
                            type="image"
                            value={ imgID }
                            render={ ( { open } ) => (
                                <Button
                                    className={ "button button-large" }
                                    onClick={ open }
                                >
                                    
                                    { __( ' Upload Background Image', 'jsforwpblocks' ) }
                                </Button>
                            ) }
                        >
                        </MediaUpload>

                    ) : (

                        <p class="image-wrapper">
                            <img
                                src={ imgURL }
                                alt={ imgAlt }
                            />

                            { isSelected ? (

                                <Button
                                    className="remove-image"
                                    onClick={ onRemoveImage }
                                >
                                   { __( ' Remove Image', 'jsforwpblocks' ) }
                                </Button>

                            ) : null }

                        </p>
                    )}
			</div>
		</div>
	</section>
        );
}

        return (
    <section id="welcome-section" class="welcome-section ow-section">
		<div class="container">
			<div class="col-md-4 col-sm-5">
				{ ! imgID ? (

                        <MediaUpload
                            onSelect={ onSelectImage }
                            type="image"
                            value={ imgID }
                            render={ ( { open } ) => (
                                <Button
                                    className={ "button button-large" }
                                    onClick={ open }
                                >
                                    
                                    { __( ' Upload Background Image', 'jsforwpblocks' ) }
                                </Button>
                            ) }
                        >
                        </MediaUpload>

                    ) : (

                        <p class="image-wrapper">
                            <img
                                src={ imgURL }
                                alt={ imgAlt }
                            />

                            { isSelected ? (

                                <Button
                                    className="remove-image"
                                    onClick={ onRemoveImage }
                                >
                                   { __( ' Remove Image', 'jsforwpblocks' ) }
                                </Button>

                            ) : null }

                        </p>
                    )}
			</div>
			<div class="col-md-8 col-sm-7 welcome-content">
				<div class="section-header">
					<h3>{ heading }</h3>
				</div>
				<p>{ content }</p>
				<a href={ btnLink }>{ btnTitle }</a>
			</div>
		</div>
	</section>
        );
    }
}
