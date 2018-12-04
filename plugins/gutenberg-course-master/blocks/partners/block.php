<?php

namespace Gutenberg_Courses\Example_Block\Blocks\partners;


add_action( 'plugins_loaded', __NAMESPACE__ . '\register_partners_block' );
/**
 * Register the dynamic block.
 *
 * @since 2.1.0
 *
 * @return void
 */
function register_partners_block() {
	// Only load if Gutenberg is available.
	if ( ! function_exists( 'register_block_type' ) ) {
		echo "dont' exist"; exit;
		return;
	}

	// Hook server side rendering into render callback
	register_block_type( 'jsforwpblocks/partners', [
		'render_callback' => __NAMESPACE__ . '\render_partners_block',
	] );

}

/**
 * Server rendering for /blocks/examples/12-dynamic
 */
function render_partners_block($attributes) {
	$cat_id = 5;
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
    
    $output = '<!-- Team Section -->
	<section id="team-section" class="team-section ow-section">
		<!-- container -->
		<div class="container">
			<!-- col-md-3 -->
			<div class="col-md-3 col-sm-4">
				<!-- Section Header -->
				<div class="section-header">
					<h3><img src="'.site_url().'/wp-content/themes/wpbeirutgutenberg/images/icon/sep-icon.png" alt="sep-icon" />'.$attributes["title"].'</h3>
				</div><!-- Section Header /- -->
				<p>'.$attributes["heading"].'</p>
			</div><!-- col-md-3 /- -->
			
			<!-- col-md-9 -->
			<div class="col-md-9 col-sm-8">
				<div id="make-clean-team" class="myteam owl-carousel owl-theme team-style1">';
				foreach($recent_posts as $recent):
				$image = wp_get_attachment_image_src( get_post_thumbnail_id( $recent["ID"] ), 'single-post-thumbnail' );
				$output .= '<div class="item">
						<div class="team-box">
							<img src="'.$image[0].'" alt="team" />
							<div class="team-box-inner">
								<img src="'.site_url().'/wp-content/themes/wpbeirutgutenberg/images/team/team-icon.png" alt="team icon" />
								<h4>'.strip_tags($recent["post_title"]).'/h4>
								<hr>
								<p>'.strip_tags($recent["post_content"]).'r</p>
							</div>
						</div>
					</div>';
				endforeach;
				
					
					
				
				
					
					
					
					
$output .= '</div>
			</div><!-- col-md-9 /- -->
		</div><!-- container /- -->
	</section><!-- Team Section /- -->';
	wp_reset_query();
  return $output;
}
