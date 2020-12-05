<?php

/*===================================
WP更新通知を消す
===================================*/
add_filter('pre_site_transient_update_core', create_function('$a', "return null;"));

// プラグイン更新通知非表示
remove_action('load-update-core.php', 'wp_update_plugins');
add_filter('pre_site_transient_update_plugins', create_function('$a', "return null;"));

// テーマ更新通知非表示
remove_action('load-update-core.php', 'wp_update_themes');
add_filter('pre_site_transient_update_themes', create_function('$a', "return null;"));

// generatorを非表示にする
remove_action('wp_head', 'wp_generator');



/*===================================
アイキャッチ画像
===================================*/
add_theme_support( 'post-thumbnails' );
set_post_thumbnail_size(220, 165, true );
//add_image_size( '75-50', 75, 50, true ); // ニュース サムネイル

function wpdocs_setup_theme() {
    add_theme_support( 'post-thumbnails' );
    set_post_thumbnail_size( 150, 150 );
}
add_action( 'after_setup_theme', 'wpdocs_setup_theme' );

/*===================================
ページネーション
===================================*/
function pagination($pages = '', $range = 2) {
	$showitems = ($range * 2)+1;


	global $paged;
	if(empty($paged)) $paged = 1;

	if($pages == '')
	{
		global $wp_query;
		$pages = $wp_query->max_num_pages;
		if(!$pages) {
			$pages = 1;
		}

	}

	if(1 != $pages) {
		echo "<div class='pagination'>";
		// echo "<div class='pagination'><span>Page ".$paged." of ".$pages."</span>";
		// if($paged > 2 && $paged > $range+1 && $showitems < $pages) echo "<a href='".get_pagenum_link(1)."'>&laquo; First</a>";
		// if($paged > 1) echo "<a class='prev' href='".get_pagenum_link($paged - 1)."'>＜＜前のページへ</a>";
		if($paged > 1) echo "<a class='prev' href='".get_pagenum_link(1)."'>＜＜前のページへ</a>";

		for ($i=1; $i <= $pages; $i++) {
			if (1 != $pages &&( !($i >= $paged+$range+1 || $i <= $paged-$range-1) || $pages <= $showitems )) {
				echo ($paged == $i)? "<span class='current'>".$i."</span>":"<a href='".get_pagenum_link($i)."' class='inactive'>".$i."</a>";
			}
		}
		if ($paged < $pages) echo "<a class='next' href='".get_pagenum_link($paged + 1)."'>次のページへ＞＞</a>";
		// if ($paged < $pages-1 &&  $paged+$range-1 < $pages && $showitems < $pages) echo "<a href='".get_pagenum_link($pages)."'>Last &raquo;</a>";
		echo "</div>";
	}
}



/*===================================
Get slug of parent page
===================================*/
function is_parent_slug() {
	global $post;
	if ($post->post_parent) {
		$post_data = get_post($post->post_parent);
		return $post_data->post_name;
	}
}



/*===================================
Custom post
===================================*/
add_action( 'init', 'create_post_type' );
function create_post_type() {

	// blog
	register_post_type( 'blog',
		array(
			'labels' => array(
				'name' => __( 'Blog' ),
				'singular_name' => __( 'blog')
			),
			'public' => true,
			'supports' => array( 'title', 'editor', 'thumbnail' ),
			'menu_position' =>5,
			'has_archive' => true,
			// 'taxonomies'  => array( 'category' ),
			'menu_icon' => 'dashicons-welcome-write-blog',
		)
	);

	//news
	// register_post_type( 'news',
	// 	array(
	// 		'labels' => array(
	// 			'name' => __( 'News' ),
	// 			'singular_name' => __( 'news')
	// 		),
	// 		'public' => true,
	// 		'supports' => array( 'title', 'editor', 'thumbnail' ),
	// 		'menu_position' =>4,
	// 		'has_archive' => true,
	// 		'menu_icon' => 'dashicons-media-text',
	// 	)
	// );

	register_post_type( 'top-slider',
		array(
			'labels' => array(
				'name' => __( 'TOP Slider' , 'thumbnail'),
				'singular_name' => __( 'top-slider')
			),
			'public' => false,
			'supports' => array( 'title'),
			'menu_position' =>5,
			'has_archive' => false,
			'show_ui' => true,
			'rewrite' => true,
      		'show_in_rest'=>true,
			'menu_icon' => 'dashicons-images-alt',
		)
	);

	// Blog category
	register_taxonomy(
		'blog-category',
		'blog',
		array(
			'hierarchical' => true,
			'update_count_callback' => '_update_post_term_count',
			'label' => 'Categories',
			'singular_label' => 'categories',
			'public' => true,
			'show_ui' => true,
		)
	);

	// News category
	// register_taxonomy(
	// 	'news-category',
	// 	'news',
	// 	array(
	// 		'hierarchical' => true,
	// 		'update_count_callback' => '_update_post_term_count',
	// 		'label' => 'Categories',
	// 		'singular_label' => 'categories',
	// 		'public' => true,
	// 		'show_ui' => true,
	// 	)
	// );


}



/*============================================
Absolute path to relative path
============================================== */
class relative_URI {
	function relative_URI() {
		add_action('get_header', array(&$this, 'get_header'), 1);
		add_action('wp_footer', array(&$this, 'wp_footer'), 99999);
	}
	function replace_relative_URI($content) {
		$home_url = trailingslashit(get_home_url('/'));
		
		$host = $_SERVER["HTTP_HOST"];
		if($host=="dns1.prontonet.ne.jp") {// dns1 in the case of
			return str_replace($home_url, '/hp/shimakura/xxx/', $content);

		} else {// For other environments (production or backup server)
			return str_replace($home_url, '/', $content);
			// If you installed WP other than the domain root, do the following
			// return str_replace($home_url, '/blog/', $content); ←Folder name「blog」in the case of
		}
	}
	function get_header(){
		ob_start(array(&$this, 'replace_relative_URI'));
	}
	function wp_footer(){
		ob_end_flush();
	}
}
new relative_URI();





/*===================================
Hide management bar items
===================================*/

//Everyone
//function remove_bar_menus( $wp_admin_bar ) {
	//$wp_admin_bar->remove_menu( 'wp-logo' );      // Logo
	//$wp_admin_bar->remove_menu( 'site-name' );    // Site name
	//$wp_admin_bar->remove_menu( 'view-site' );    // Site name -> View site
	//$wp_admin_bar->remove_menu( 'dashboard' );    // Site name -> Dashboard (public side)
	//$wp_admin_bar->remove_menu( 'themes' );       // Site name -> Theme (public side)
	//$wp_admin_bar->remove_menu( 'customize' );    // Site name -> Customization (public side)
	//$wp_admin_bar->remove_menu( 'comments' );     // comment
	//$wp_admin_bar->remove_menu( 'updates' );      // update
	//$wp_admin_bar->remove_menu( 'view' );         // Show Posts
	//$wp_admin_bar->remove_menu( 'new-content' );  // New
	//$wp_admin_bar->remove_menu( 'new-post' );     // New -> Post
	//$wp_admin_bar->remove_menu( 'new-media' );    // New -> media
	//$wp_admin_bar->remove_menu( 'new-link' );     // New -> Link
	//$wp_admin_bar->remove_menu( 'new-page' );     // New -> fixed page
	//$wp_admin_bar->remove_menu( 'new-user' );     // New -> user
	//$wp_admin_bar->remove_menu( 'my-account' );   // my account
	//$wp_admin_bar->remove_menu( 'user-info' );    // my account -> profile
	//$wp_admin_bar->remove_menu( 'edit-profile' ); // my account -> Edit profile
	//$wp_admin_bar->remove_menu( 'logout' );       // my account -> Log out
	//$wp_admin_bar->remove_menu( 'search' );       // Search (public side)
//}
//add_action('admin_bar_menu', 'remove_bar_menus', 201);

function remove_bar_menus_user( $wp_admin_bar ) {
	$wp_admin_bar->remove_menu( 'comments' );     // comment
	$wp_admin_bar->remove_menu( 'search' );       // Search (public side)
}


//Non-administrator
if(!current_user_can('administrator')){
	add_action('admin_bar_menu', 'remove_bar_menus_user', 201);
}

// remove_filter('the_content', 'wpautop');
// add_filter('the_content', 'shortcode_unautop', 100);

add_filter('the_content', 'wpautop_filter', 9);
function wpautop_filter($content) {
  global $post;
  $remove_filter = false;
  $arr_types = array('page'); //自動整形を無効にする投稿タイプを記述 ＝固定ページ
  $post_type = get_post_type( $post->ID );
  if (in_array($post_type, $arr_types)){
                $remove_filter = true;
        }
  if ( $remove_filter ) {
    remove_filter('the_content', 'wpautop');
    remove_filter('the_excerpt', 'wpautop');
  }
  return $content;
}

/* make information list (お知らせ一覧ページを作成)*/
function post_has_archive( $args, $post_type ) {
if ( 'post' == $post_type ) {
$args['rewrite'] = true;
$args['has_archive'] = 'news'; //任意のスラッグ名
}
return $args;

}
add_filter( 'register_post_type_args', 'post_has_archive', 10, 2 );

?>



