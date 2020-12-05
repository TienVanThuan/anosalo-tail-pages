<div class="l-side">

<div class="info-sidebar">
	<h2>Infomation</h2>
	<?php $args = array(
	'post_type' => get_post_types('', 'names'),
    'post_status' => 'publish',
    'posts_per_page' => 3,
    'order' => 'DESC',
    'orderby' => 'date',);
$lang_posts = new WP_Query($args);
$argss = $lang_posts->posts;?>
	<?php if ($lang_posts ->have_posts()) ?>
                        <?php while($lang_posts ->have_posts()): $lang_posts ->the_post();
						$date = get_the_date("Y.m.d");
						$cat = get_the_category();?>
				<div class="news-row">
					<a href="<?php echo get_the_permalink(); ?>">
						<h6 class="title"><?php echo the_title();?></h6>
					</a>
				</div>
				<?php endwhile;?>
</div>
	
<div class="cat-sidebar">
	<?php $args = array(
	'post_type' => get_post_types('', 'names'),
    'post_status' => 'publish',
    'posts_per_page' => 1,
    'order' => 'DESC',
    'orderby' => 'date',);
	$lang_posts = new WP_Query($args);
	$argss = $lang_posts->posts;?>
	<?php if ($lang_posts ->have_posts()) ?>
                        <?php while($lang_posts ->have_posts()): $lang_posts ->the_post();
						$cat = wp_list_categories('title_li=Category');?>
						<h6 class="title"><?php $cat->name;?></h6>
				<?php endwhile;?>
</div>
<div class="archive-sidebar">
	<h2>Archive</h2>
	<?php $args = array(
	'post_type' => get_post_types('', 'names'),
    'post_status' => 'publish',
    'posts_per_page' => 1,
    'order' => 'DESC',
    'orderby' => 'date',);
	$lang_posts = new WP_Query($args);
	$argss = $lang_posts->posts;?>
	<?php if ($lang_posts ->have_posts()) ?>
                        <?php while($lang_posts ->have_posts()): $lang_posts ->the_post();
						?>
	<a href="<?php echo get_month_link(get_post_time('Y'), get_post_time('m'), get_post_time('j')); ?>" class="entry-date"><h6 class="title"><?php the_date("Y.m")?></h6></a>
						
				<?php endwhile;?>
</div>

</div><!-- /.l-side -->