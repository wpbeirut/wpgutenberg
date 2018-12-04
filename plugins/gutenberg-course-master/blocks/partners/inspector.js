/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const {
    InspectorControls,
} = wp.editor;
const {
    PanelBody,
    SelectControl,
    TextControl,
    TextareaControl,
    heading,
    title,
    categories
} = wp.components;

import apiFetch from '@wordpress/api-fetch';
/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {

    constructor() {
        super( ...arguments );
        this.state = { options: [
                        { value: '...', label: 'Loading ...' },
                    ] }
        this.getCategories = this.getCategories.bind(this);
        
        this.getCategories();
    }

    
    // method to get the categories 
    getCategories() {
    apiFetch( { path: '/wp-json/wp/v2/categories/?parent=5' } ).then( posts => {
    
    var options = [];
    var option = { value:24, label: "All Partners" };
    options.push(option);
    for(var i = 0; i<posts.length;i++) {
        option = { value: posts[i].id.toString() , label: posts[i].name.toString() };
        options.push(option);
    }
    this.setState({
            options: options
        });

   
    } );
    }

    render() {
        const { attributes: { selectControl, title, heading }, setAttributes } = this.props;

        return (
            <InspectorControls>
                <PanelBody>
                    <SelectControl
                        label={ __( 'Select Partners Category', 'jsforwpblocks' ) }
                        value={ selectControl }
                        options={ this.state.options }
                        onChange={ selectControl => setAttributes( { selectControl } ) }
                    />
                </PanelBody>
                
                
                
                <PanelBody>
                    <TextControl
                        label={ __( 'Title', 'jsforwpblocks' ) }
                        help={ __( 'Title', 'jsforwpblocks' ) }
                        value={ title }
                        onChange={ title => setAttributes( { title } ) }
                    />
                </PanelBody>
                
                <TextareaControl
            label={__("Text Description", "jsforwpblocks")}
            help={__("Text Description", "jsforwpblocks")}
            value={heading}
            onChange={heading => setAttributes({ heading })}
          />

            </InspectorControls>
        );
    }
}
