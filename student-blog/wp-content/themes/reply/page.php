<?php get_header(); ?>

	<main class="clearfix" id="content" role="main" itemprop="mainContentOfPage">

		<?php while ( have_posts() ) : the_post(); ?>

			<!-- Article -->
			<article id="post-<?php the_ID(); ?>" <?php post_class( 'clearfix' ); ?> itemscope="itemscope" itemtype="http://schema.org/CreativeWork">

				<header class="entry-header" itemscope="itemscope" itemtype="http://schema.org/WPHeader">

					<?php if ( has_post_thumbnail() ) : ?>
						<div class="entry-image">
							<?php the_post_thumbnail( 'l' ); ?>
						</div>
					<?php endif; ?>

					<h1 class="entry-title" itemprop="headline"><?php the_title(); ?></h1>
					
				</header>

				<?php if ( has_excerpt() ) : ?>

					<div class="entry-excerpt" itemprop="text">
						<?php the_excerpt(); ?>
					</div>

				<?php endif; ?>

				<div class="entry-content" itemprop="text">
					<?php the_content(); ?>
				</div>

			</article>

		<?php endwhile; ?>
	
	</main>
			
<?php get_footer(); ?>
