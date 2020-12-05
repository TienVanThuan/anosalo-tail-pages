<?php get_header(); ?>
<div class="background background-new">
   <div class="container">
      <h1>News <br><span>ニュース</span></h1>
   </div>
</div>
<div class="breadcrumb breadcrumb-news">
   <div class="container">
	   <p><a href="/"><img src="/wp-content/themes/anosalotail/img/common/home.png" alt="home" /></a><img src="/wp-content/themes/anosalotail/img/common/chber-right.png" alt="right" /><a href="/news/">ニュース一覧</a><img src="/wp-content/themes/anosalotail/img/common/chber-right.png" alt="right" class="arrows"/>ニュース詳細</p>
   </div>
</div>
<div class="news-post">
	<div class="container">
		<div class="new-post-content">
			<?php if(have_posts()): while(have_posts()): the_post();
				$category = get_the_category();
				$cat_slug = $category[0]->category_nicename;
				$cat_name = $category[0]->cat_name;?>
			<h2><?php the_title(); ?></h2>
			<p class="date-cat"><?php the_time('Y-m-d'); ?> <span>|</span> <?php echo $cat_name;?> <span>|</span></p>
			<div class="content" id="entrybody"><?php the_content(); ?></div>
			<?php endwhile; else: endif; ?>	
			<div class="next-prev">
				<ul>
					<li class="next">&nbsp;<?php next_post_link('%link', '＜＜前のページへ'); ?></li>
					<li class="prev"><?php previous_post_link('%link', '次のページへ＞＞'); ?></li>
				</ul>	
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
									<a href="<?php echo get_the_permalink(); ?>" class="title"><?php echo the_title();?></a>								  </li>
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
<?php get_footer(); ?>