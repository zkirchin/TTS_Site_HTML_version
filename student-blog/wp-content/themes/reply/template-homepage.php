<?php /* Template Name: Homepage */ ?>

<?php get_header(); ?>

<main id="content" role="main" itemprop="mainContentOfPage" itemscope="itemscope" itemtype="http://schema.org/Blog">

	<!--Blog-->
	<section id="blog" class="clearfix">
			
		<?php
			$args = array( 'post_type' => 'post', 'posts_per_page' => 1 );
			$loop = new WP_Query( $args );
		?>

		<?php while ( $loop->have_posts() ) : $loop->the_post(); ?>

			<!-- Article -->
			<article class="post" itemscope="itemscope" itemtype="http://schema.org/BlogPosting" itemprop="blogPost">

				<header class="entry-header" itemscope="itemscope" itemtype="http://schema.org/WPHeader">

					<?php if ( has_post_thumbnail() ) : ?>
						<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>" class="entry-image">
							<?php the_post_thumbnail( 'l' ); ?>
						</a>
					<?php endif; ?>

					<?php echo get_avatar( get_the_author_meta( 'email' ), '64', get_the_author() ); ?>

					<h2 class="entry-title" itemprop="headline">
						<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>" rel="bookmark"><?php the_title(); ?></a>
					</h2>

					<p class="entry-meta">
						<?php _e( ' by ', 'mighty' ); ?>
						<span class="entry-author vcard" itemprop="author" itemscope="itemscope" itemtype="http://schema.org/Person"><a href="<?php echo get_author_posts_url( get_the_author_meta( 'ID' ) ); ?>" itemprop="url" rel="author"><?php echo get_the_author(); ?></a></span>
						<?php _e( ' on ', 'mighty' ); ?>
						<time class="entry-time" itemprop="datePublished" datetime="<?php echo get_the_time( 'c' ); ?>"><?php echo get_the_date(); ?></time>
						<?php _e( ' in ', 'mighty' ); ?>
						<span class="entry-categories"><?php the_category( ', ' ); ?></span>
						<?php _e( ' with ', 'mighty' ); ?>
						<span class="entry-comments-meta"><?php comments_popup_link( __( 'No Replies', 'mighty' ), __( '1 Reply', 'mighty' ), __( '% Replies', 'mighty' ) ); ?></span>
					</p>

				</header>

				<div class="entry-content" itemprop="text">
					<?php the_excerpt(); ?>
					<a class="more" href="<?php the_permalink(); ?>" title="Continue reading - <?php the_title(); ?>"><?php _e( 'Continue Reading', 'mighty' ); ?></a>
				</div>
			
			</article>

		<?php endwhile; ?>

		<?php wp_reset_postdata(); ?>

	</section>


	<?php if ( post_type_exists( 'portfolio' ) ) : ?>

		<?php $loop = new WP_Query( array( 'post_type' => 'portfolio', 'posts_per_page' => 1 ) ); ?>

		<!--Portfolio Posts-->
		<section id="portfolio" class="clearfix">

			<?php if ( $loop->have_posts() ) : ?>

				<?php while ( $loop->have_posts() ) : $loop->the_post(); ?>

					<!-- Article -->
					<article id="post-<?php the_ID(); ?>" <?php post_class( 'post' ); ?> itemscope="itemscope" itemtype="http://schema.org/BlogPosting" itemprop="blogPost">
						<header class="entry-header" itemscope="itemscope" itemtype="http://schema.org/WPHeader">

								<?php if ( has_post_thumbnail() ) : ?>
									<a class="entry-image" href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
										<?php the_post_thumbnail( 's' ); ?>
									</a>
								<?php endif; ?>

								<h2 class="entry-title"><a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a></h2>

								<?php if ( has_excerpt() ) : ?>

									<div class="entry-excerpt" itemprop="text">
										<?php the_excerpt();; ?>
									</div>

								<?php endif; ?>

								<a class="entry-link" href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php _e( 'View project', 'mighty' ); ?></a>

						</header>
					</article>

				<?php endwhile; ?>

				<?php wp_reset_postdata(); ?>

			<?php endif; ?>

		</section>

	<?php endif; ?>

</main>

<?php get_footer(); ?>
