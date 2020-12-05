<?php get_header();?>
<div class="background background-new">
   <div class="container">
      <h1>News<br><span>ニュース</span></h1>
   </div>
</div>
<div class="breadcrumb breadcrumb-news">
   <div class="container">
      <p><a href="/"><img src="/wp-content/themes/anosalotail/img/common/home.png" alt="home" /></a><img src="/wp-content/themes/anosalotail/img/common/chber-right.png" alt="right" />ニュース一覧</p>
   </div>
</div>
<div class="new-pages">
	<div class="container">
		<div class="content-new">
				<?php if(have_posts()): while(have_posts()): the_post();
					$category = get_the_category();
					$cat_slug = $category[0]->category_nicename;
					$cat_name = $category[0]->cat_name;?>
				<div class="news-row">
					<a href="<?php echo get_the_permalink(); ?>">
						<?php echo get_the_post_thumbnail($arr->ID, 'full', array('class' => '')); ?>
						<div class="content__box">
							<h2 class="title"><?php echo the_title();?></h2>
							<?php echo the_excerpt();?>
							<p class="date-tags"><span class="date"><?php the_time('Y.m.d'); ?></span> <span class="f-left">|</span><?php echo $cat_name; ?><span class="f-right">|</span></p>
						</div>
					</a>
				</div>
			<?php endwhile; else: endif; ?>
			<div class="next-prev sp-only pagi-news">
    	<div class="container">
			<div class="paging">
				<?php if (function_exists("pagination")) {pagination($additional_loop->max_num_pages);} ?>
			</div>
		</div>           
	</div>
		</div>
		<div class="l-side">
			<div class="sidebar">
				<div class="info-sidebar">
					<h2>Infomation</h2>		
						<div class="news-row">
							<ul>
						<?php $args = array(
						'post_type' => 'post',
						'post_status' => 'publish',
						'posts_per_page' => 3,
						'order' => 'DESC',
						'orderby' => 'date',);
					$lang_posts = new WP_Query($args);
					$argss = $lang_posts->posts;?>
					<?php if ($lang_posts ->have_posts()): while($lang_posts ->have_posts()): $lang_posts ->the_post();
						$date = get_the_date("Y.m.d");
						$cat = get_the_category();?>
							<li>
								<a href="<?php echo get_the_permalink(); ?>" class="title"><?php echo the_title();?></a>		</li>
								<?php endwhile; else: endif; ?>
							</ul>
						</div>
				</div>
				<div class="cat-sidebar">
						<h2>Category</h2>
					<?php $args = array(
						'post_type' => 'post',
						'post_status' => 'publish',
						'posts_per_page' => 1,
						'order' => 'DESC',
						'orderby' => 'date',);
					$lang_posts = new WP_Query($args);
					$argss = $lang_posts->posts;?>
					<?php if ($lang_posts ->have_posts()): while($lang_posts ->have_posts()): $lang_posts ->the_post();
						$cat = wp_list_categories('title_li=');?>
					<?php endwhile; else: endif; ?>
				</div>
				<div class="archive-sidebar">
					<h2>Archive</h2>
					<?php $args = array(
						'post_type' => 'post',
						'post_status' => 'publish',
						'posts_per_page' => 3,
						'order' => 'DESC',
						'orderby' => 'date',);
					$lang_posts = new WP_Query($args);
					$argss = $lang_posts->posts;?>
					<?php if ($lang_posts ->have_posts()): while($lang_posts ->have_posts()): $lang_posts ->the_post();?>
						<ul>
							<li>
								<a href="<?php echo get_month_link(get_post_time('Y'), get_post_time('m'), get_post_time('j')); ?>" class="entry-date"><?php the_date("Y.m")?></a>
							</li>	
						</ul>
					<?php endwhile; else: endif; ?>
				</div>
			</div>
		</div>
	</div>	
</div>
<div class="next-prev pc-only pagi-news">
    	<div class="container">
			<div class="paging">
				<?php if (function_exists("pagination")) {pagination($additional_loop->max_num_pages);} ?>
			</div>
		</div>           
	</div>
<?php get_footer(); ?>