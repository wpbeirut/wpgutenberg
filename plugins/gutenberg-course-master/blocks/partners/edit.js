/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;

const {
    TextControl,
    SelectControl,
    heading,
    title
} = wp.components;
import apiFetch from '@wordpress/api-fetch';

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Edit extends Component {

    constructor() {
        super( ...arguments );
        this.getContentData = this.getContentData.bind(this);
        this.getCategoryTitle = this.getCategoryTitle.bind(this);
        this.renderContent = this.renderContent.bind(this);
        this.state = { items: [], catName:'' }
        
        
    }
    
    componentWillMount() {
        const {
            attributes: { selectControl, options },
            className, setAttributes  } = this.props;
            //this.getContentData({selectControl});
            this.getCategoryTitle({selectControl});
    }
    componentWillReceiveProps(nextProps) {
        const {
            attributes: { selectControl, options },
            className, setAttributes  } = nextProps;
            //this.getContentData({selectControl});
            this.getCategoryTitle({selectControl});
    }
    
    getCategoryTitle(catid) {

         apiFetch( { path: '/wp-json/wp/v2/categories/'+catid.selectControl } ).then( posts => {
    
    this.setState({
            catName: posts.name.toString()
        });
        
   
    } );
    }
    getContentData(catid){

    apiFetch( { path: '/wp-json/wp/v2/partners/?categories='+catid.selectControl+'&_embed' } ).then( posts => {
    
    var items = [];
    var item;
    
    for(var i = 0; i<posts.length;i++) {
        item = { id: posts[i].id.toString() , title: posts[i].title.rendered.toString(), content: posts[i].content.rendered.toString(), image: posts[i]._embedded['wp:featuredmedia']['0'].source_url };
        items.push(item);
    }
    this.setState({
            items: items
        });
   
    } );
}

renderContent() {
    if(this.state.items.length>0) {
        var items = [];
        for(var i=0;i<this.state.items.length;i++) {
            items.push(
                <div class="col-xs-6 partner-box-wrapper item-width">
                <div class="box">
                <a title="Vision ventures" href="http://visionvc.co" target="_blank" class="lazy-fade partner" data-original="https://conference.stepcdn.com/logos/MO57iSG/rEgA3JuTKCizlVupKV7I_vv-300.png"></a></div>
                </div>
            );
        }
        return items;
    }
}

    render() {
        const {
            attributes: { selectControl, title, heading },
            className, setAttributes  } = this.props;
            
 
            
        return (
           	<section id="team-section" class="team-section ow-section">
		<div class="container">
			<div class="col-md-3 col-sm-4">
				<div class="section-header">
					<h3><img src="https://gbvsbakery-profreelancer.c9users.io/wp-content/themes/wpbeirutgutenberg/images/icon/sep-icon.png" alt="sep-icon" />{title}</h3>
				</div>
				<p>{heading}</p>
			</div>
			<div class="col-md-9 col-sm-8">
			<h1>This is half static half dynamic will render on front end</h1>
			</div>
		</div>
	</section>
        );
    }
}
