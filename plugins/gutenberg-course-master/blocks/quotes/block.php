<?php

namespace Gutenberg_Courses\Example_Block\Blocks\quotes;


add_action( 'plugins_loaded', __NAMESPACE__ . '\register_quotes_block' );
/**
 * Register the dynamic block.
 *
 * @since 2.1.0
 *
 * @return void
 */
function register_quotes_block() {
	// Only load if Gutenberg is available.
	if ( ! function_exists( 'register_block_type' ) ) {
		echo "dont' exist"; exit;
		return;
	}

	// Hook server side rendering into render callback
	register_block_type( 'jsforwpblocks/quotes', [
		'render_callback' => __NAMESPACE__ . '\render_quotes_block',
	] );

}

/**
 * Server rendering for /blocks/examples/12-dynamic
 */
function render_quotes_block($attributes) {
	$cat_id = 2;
	if(isset($attributes["selectControl"])) {
		$cat_id = $attributes["selectControl"];
	}
	$category = get_term( $cat_id, 'category' );
	$recent_posts = wp_get_recent_posts( array(
        'numberposts' => -1,
        'post_status' => 'publish',
        'cat' => $cat_id,
    ));

    if ( count( $recent_posts ) === 0 ) {
        return 'No posts';
    }
    $cnt = 0;
    $active = 'active';

    $output = '<div id="testimonial-section" class="testimonial-section ow-section">
		<!-- container -->
		<div class="container">
			<div id="testimonial-carousel" class="carousel slide" data-ride="carousel">
				<div class="carousel-inner" role="listbox">';
			foreach($recent_posts as $recent):
				$image = wp_get_attachment_image_src( get_post_thumbnail_id( $recent["ID"] ), 'single-post-thumbnail' );
				if($cnt>0){ $active =''; }
			$output .='<div class="item '.$active.'">
						<div class="testimonial-box">
							<img src="'.site_url().'/wp-content/themes/wpbeirutgutenberg/images/icon/comment.png" alt="comment" />
							<h3>'.strip_tags($recent["post_title"]).'</h3>
							<hr>
							<p>'.strip_tags($recent["post_content"]).'</p>
							<img src="'.$image[0].'"  width="75" height="75" alt="testi" class="author-testi" />
							<h4>&nbsp;</h4>
						</div>
					</div>';
					$cnt++;
			endforeach;		
					

			$output.='<!-- Controls -->
				<a class="left carousel-control" href="#testimonial-carousel" role="button" data-slide="prev">
					<span class="fa fa-long-arrow-left" aria-hidden="true"></span>
					<span class="sr-only">Previous</span>
				</a>
				<a class="right carousel-control" href="#testimonial-carousel" role="button" data-slide="next">
					<span class="fa fa-long-arrow-right" aria-hidden="true"></span>
					<span class="sr-only">Next</span>
				</a>
			</div>
		</div><!-- container /- -->
	</div><!-- Testimonial -->';


	wp_reset_query();
    return $output;
}
