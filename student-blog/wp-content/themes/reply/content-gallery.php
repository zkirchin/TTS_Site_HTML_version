<?php /* Post Format: Gallery */ ?>

	<header class="entry-header" itemscope="itemscope" itemtype="http://schema.org/WPHeader">

		<div class="flexslider">
		    <ul class="slides">
		        <?php mighty_gallery( $post->ID ); ?>
		    </ul>
		</div>

		<?php if ( is_single() ) : ?>

			<?php echo get_avatar( get_the_author_meta( 'email' ), '64', get_the_author() ); ?>
			<h1 class="entry-title" itemprop="headline"><?php the_title(); ?></h1>

		<?php else : ?>

			<?php echo get_avatar( get_the_author_meta( 'email' ), '64', get_the_author() ); ?>
			<h2 class="entry-title" itemprop="headline">
				<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>" rel="bookmark"><?php the_title(); ?></a>
			</h2>

		<?php endif; ?>

		<p class="entry-meta">
			<?php _e( ' by ', 'mighty' ); ?>
			<span class="entry-author vcard" itemprop="author" itemscope="itemscope" itemtype="http://schema.org/Person"><a href="<?php echo get_author_posts_url( get_the_author_meta( 'ID' ) ); ?>" itemprop="url" rel="author"><?php echo get_the_author(); ?></a></span>
			<?php _e( ' on ', 'mighty' ); ?>
			<time class="entry-time" itemprop="datePublished" datetime="<?php echo get_the_time( 'c' ); ?>"><?php echo get_the_date(); ?></time>
			<?php _e( ' in ', 'mighty' ); ?>
			<span class="entry-categories"><?php the_category( ', ' ); ?></span>
			<?php _e( ' with ', 'mighty' ); ?>
			<span class="entry-comments-meta"><?php comments_popup_link( __( '0 Replies', 'mighty' ), __( '1 Reply', 'mighty' ), __( '% Replies', 'mighty' ) ); ?></span>
		</p>
		
	</header>

	<div class="entry-content" itemprop="text">

		<?php if ( is_single() ) : ?>
			<?php the_content(); ?>
		<?php else : ?>
			<?php the_excerpt(); ?>
			<a class="more" href="<?php the_permalink(); ?>" title="Continue reading - <?php the_title(); ?>"><?php _e( 'Continue Reading', 'mighty' ); ?></a>
		<?php endif; ?>

	</div>

	<?php if ( is_single() ) : ?>

		<?php wp_link_pages( 'before=<div class="entry-links">&after=</div>' ); ?>
	
		<?php if ( has_tag() ) : ?>
			<footer class="entry-footer">
				<p class="entry-meta">
					<span><?php _e( 'Tagged with', 'mighty' ); ?>: <?php the_tags( '', '', '' ); ?></span>
				</p>
			</footer>
		<?php endif; ?>

	<?php endif; ?>
