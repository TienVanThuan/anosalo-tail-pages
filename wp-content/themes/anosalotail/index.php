<?php get_header(); 
?>
<div class="p-top">
<div class="slider-top pc-only">
	<div class="slider-top-img">
		<img src="<?php bloginfo('template_directory'); ?>/img/top/logo-backgound-top-page.png" title="Image Logo" alt="img-logo">
	</div>
	<?php
		$args = array(
			'post_type' => 'top-slider',
			'post_status' => 'publish',
			'order' => 'DESC',
			'orderby' => 'date',
			'posts_per_page' => 3,
		);
		$lang_posts = new WP_Query($args);?>
	<?php global $wp_query; $wp_query->in_the_loop = true; ?>
	<ul class="bxslider">
		<?php if ($lang_posts ->have_posts()) ?>
                        <?php while($lang_posts ->have_posts()): $lang_posts ->the_post();?>
		<li class="li01">
			<a href="<?php the_field('link_img-TOP'); ?>">
				<img src="<?php the_field('img-TOP');?>" alt="<?php the_field('alt_img-TOP');?>">
			</a></li>
		<?php endwhile;?>
	</ul>
</div>

<div class="slider-top sp-only">
	<div class="slider-top-img">
		<img src="<?php bloginfo('template_directory'); ?>/img/top/logo-backgound-top-page.png" title="Image Logo" alt="img-logo">
	</div>
	<?php
		$args = array(
			'post_type' => 'top-slider',
			'post_status' => 'publish',
			'order' => 'DESC',
			'orderby' => 'date',
			'posts_per_page' => 3,
		);
		$lang_posts = new WP_Query($args);?>
	<?php global $wp_query; $wp_query->in_the_loop = true; ?>
	<ul class="bxslider">
		<?php if ($lang_posts ->have_posts()) ?>
                        <?php while($lang_posts ->have_posts()): $lang_posts ->the_post();?>
		<li class="li01">
			<a href="<?php the_field('link_img-top-sp'); ?>">
				<img src="<?php the_field('img-top-sp');?>" alt="<?php the_field('alt_img-top-sp');?>">
			</a></li>
		<?php endwhile;?>
	</ul>
</div>
	
<section class="training-top">
	<div class="container">
		<img src="<?php bloginfo('template_directory'); ?>/img/top/training-title.png" alt="training title" class="pc-only">
		<h2 class="sp-only">HUSBANDRY TRAINING PET SALON ANOSALO TAIL</h2>
		<p>私たちは普通の“トリマー”ではありません。<br class="pc-only">ペットと“友達”でいられるように、<br class="pc-only">サロンの環境作りやトリミングスタイルにこだわっています。<br class="pc-only">ペットに“苦手”を克服するお勉強をしてもらいながら、<br class="pc-only">ペットと人が笑顔で生活できるよう、<br class="pc-only">美容・トレーニングを通してお手伝いさせていただきます。<br class="pc-only">ペットにも最高のサービスを...
		</p>
	</div>
</section>
<section class="trimming-top">
	<div class="container">
		<div class="trimming-top__box">
			<h2>Trimming <br> <span>トリミング</span></h2>
			<p class="sub_content">シャンプーの仕方やお預かりの方法まで、ペットの苦手・負担を<br class="pc-only">減らせるよう、こだわったトリミングを行っています。</p>
			<p class="more"><a href="<?php echo home_url(); ?>/trimming/" class="btn-more">More <img src="<?php bloginfo('template_directory');?>/img/top/arrow-right-more.png" alt="button-more"></a></p>
			<img class="img-left" src="<?php bloginfo('template_directory');?>/img/top/img-trimming-left.jpg" alt="img-trimming-left">
			<img class="img-right" src="<?php bloginfo('template_directory');?>/img/top/img_trimming_right.jpg" alt="img-trimming-right">
		</div>
	</div>	
</section>
	
<section class="hotel-top">
	<div class="container">
		<div class="hotel-top__box">
			<h2>Hotel<br> <span>ペットホテル</span></h2>
			<p class="sub_content">さみしい思いをさせないよう、<br class="pc-only">少しでも楽しんでもらえるように工夫しながらお預かりします。</p>
			<p class="more"><a href="<?php echo home_url(); ?>/hotel/" class="btn-more">More <img src="<?php bloginfo('template_directory');?>/img/top/arrow-right-more.png" alt="button-more"></a></p>
			<img class="img-left" src="<?php bloginfo('template_directory');?>/img/top/img-hotel-left.jpg" alt="img-trimming-left">
			<img class="img-right" src="<?php bloginfo('template_directory');?>/img/top/img-hotel-right.jpg" alt="img-trimming-right">
		</div>
	</div>	
</section>
<section class="news-top">
	<div class="container">
		<h2>News <br> <span>ニュース</span></h2>
		<div class="news-top-row">
			<?php
				$args = array(
					'post_type' => 'post',
					'post_status' => 'publish',
					'order' => 'DESC',
					'orderby' => 'date',
					'posts_per_page' => 4,
				);
				$lang_posts = new WP_Query($args);
				?>
				<?php global $wp_query; $wp_query->in_the_loop = true; ?>
			<ul>
				<?php if ($lang_posts ->have_posts()) ?>
                        <?php while($lang_posts ->have_posts()): $lang_posts ->the_post();
						$date = get_the_date("Y.m.d");
						$cat = get_the_category();?>
				<li>
					<a href="<?php echo get_the_permalink(); ?>">
						<?php echo get_the_post_thumbnail($arr->ID, 'full', array('class' => '')); ?>
						<div class="content__box">
							<p class="date-tags"><span class="date"><?php echo $date;?></span> | <span class="tags"><?php echo $cat[0]->name ;?></span>|</p>
							<h3 class="title"><?php echo the_title();?></h3>
								<?php echo the_excerpt();?>
						</div>
					</a>
				</li>
				<?php endwhile;?>
			</ul>
		</div>
		<p class="more"><a href="<?php echo home_url(); ?>/news/" class="btn-more">More <img src="<?php bloginfo('template_directory');?>/img/top/arrow-right-more.png" alt="button-more"></a></p>
	</div>
</section>
	
<section class="blog-top">
	<div class="container">
		<h2>Blog <br> <span>ブログ</span></h2>
		<div class="blog-top-row">
			<?php
				$args = array(
					'post_type' => 'blog',
					'post_status' => 'publish',
					'order' => 'DESC',
					'orderby' => 'date',
					'posts_per_page' => 4,
				);
				$lang_posts = new WP_Query($args);
				?>
				<?php global $wp_query; $wp_query->in_the_loop = true; ?>
			<ul>
				<?php if ($lang_posts ->have_posts()) ?>
                        <?php while($lang_posts ->have_posts()): $lang_posts ->the_post();
						$date = get_the_date("Y.m.d");
						$cat = get_the_category();?>
				<li>
					<a href="<?php echo get_the_permalink(); ?>">
						<?php echo get_the_post_thumbnail($arr->ID, 'full', array('class' => '')); ?>
						<div class="content__box">
							<p class="date-tags"><span class="date"><?php echo $date;?></span> | <span class="tags"><?php echo $cat[0]->name ;?></span>|</p>
							<h3 class="title"><?php echo the_title();?></h3>
							<?php echo the_excerpt();?>
						</div>
					</a>
				</li>
				<?php endwhile;?>
			</ul>
		</div>
		<p class="more"><a href="<?php echo home_url(); ?>/blog/" class="btn-more">More <img src="<?php bloginfo('template_directory');?>/img/top/arrow-right-more.png" alt="button-more"></a></p>
	</div>
</section>
<section class="instagram-top">
	<div class="container">
		<h2>Instagram<br>
			<span>インスタグラム</span>
		</h2>
		<!-- SnapWidget --><iframe src="https://snapwidget.com/embed/881261" class="snapwidget-widget" allowtransparency="true" frameborder="0" scrolling="no" style="border:none; overflow:hidden;  width:1100px; height:825px"></iframe>	
	</div>
</section>
	
</div><!-- /.p-top -->
<?php get_footer(); ?>