<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<title><?php wp_title('|', true, 'right'); bloginfo('name'); ?></title>
<?php if(is_home()){ $description = get_bloginfo('name');
}else{ $description = get_bloginfo('name').' | '.trim(wp_title('',false)); } ?>
<meta name="description" content="<?php echo $description.' | '.get_bloginfo('description'); ?>" />
<meta name="keywords" content="あのサロ,テイル,ペットサロン,美容,犬,猫,ペットホテル," />
<meta name="viewport" content="width=device-width" />
<?php /*=======================================
Favicon
===============================================*/ ?>
<link rel="icon" type="image/x-icon" href="<?php bloginfo('template_directory'); ?>/favicon.ico" />
<link rel="Shortcut Icon" type="image/x-icon" href="<?php bloginfo('template_directory'); ?>/favicon.ico" />
<?php /*=======================================
CSS
===============================================*/ ?>
<?php //Use either 1 or 2 CSS loading depending on the site ?>
<!-- <?php // 1 PC Only PC ?>
<link href="<?php bloginfo('stylesheet_url'); ?>?<?php echo filemtime(TEMPLATEPATH.'/style.css'); ?>" rel="stylesheet" media="all" /> -->
<?php // 2 PC・for smartphone and pc ?>
<link rel="stylesheet" type="text/css" href="<?php bloginfo('template_directory'); ?>/style.css?<?php echo filemtime(TEMPLATEPATH.'/style.css'); ?>" media="screen and (min-width: 641px), print" />
<link rel="stylesheet" type="text/css" href="<?php bloginfo('template_directory'); ?>/style-sp.css?<?php echo filemtime(TEMPLATEPATH.'/style-sp.css'); ?>" media="only screen and (max-width: 640px), only and (max-device-width: 735px) and (orientation : landscape)" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	
<!--[if lt IE 9]>
<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>?<?php echo filemtime(TEMPLATEPATH.'/style.css'); ?>" type="text/css" media="all" />
<script type="text/javascript" src="<?php bloginfo('template_directory'); ?>/js/selectivizr-min.js"></script>
<script type="text/javascript" src="<?php bloginfo('template_directory'); ?>/js/respond.js"></script>
<![endif]-->

<link rel="stylesheet" href="https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.min.js"></script>
	
<?php /*=======================================
JavaScript
===============================================*/ ?>

<?php /* function.js */ ?>
<script src="<?php bloginfo('template_directory'); ?>/js/function.js?<?php echo filemtime(TEMPLATEPATH.'/js/function.js'); ?>"></script>
<script src="<?php bloginfo('template_directory'); ?>/js/script.js?<?php echo filemtime(TEMPLATEPATH.'/js/script.js'); ?>"></script>
<?php wp_head(); ?>
</head>
<body>
<?php /* When using Facebook */ ?>
<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.async = true;
  js.src = "//connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v2.7";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
<div id="container">
	<div class="l-header">
		<div class="header">
			<div class="header-logo">
				<h1><a href="<?php echo home_url(); ?>/"><img src="<?php bloginfo('template_directory');?>/img/common/logo.png" alt="logo-anosalo_tail"></a></h1>
			</div>
			<div class="header-menu pc-only">
				<nav>
					<ul>
						<li><a href="<?php echo home_url(); ?>/trimming/">Trimming<br><span>トリミング</span></a></li>
						<li><a href="<?php echo home_url(); ?>/hotel/">Hotel<br><span>ペットホテル</span></a></li>
						<li><a href="<?php echo home_url(); ?>/news/">News<br><span>ニュース</span></a></li>
						<li><a href="<?php echo home_url(); ?>/blog/">Blog<br><span>ブログ</span></a></li>
						<li><a href="<?php echo home_url(); ?>/faq/">FAQ<br><span>よくある質問</span></a></li>
						<li><a href="<?php echo home_url(); ?>/shop/">Shop<br><span>店舗情報</span></a></li>
					</ul>
				</nav>
			</div>
			<div class="menu-mobile sp-only">
				<div class="sp-button">
						<span></span>
						<span></span>
						<span></span>
				</div>
				<nav class="menu">
					<ul>
						<li><a href="<?php echo home_url(); ?>/trimming/">Trimming <span>トリミング</span></a></li>
						<li><a href="<?php echo home_url(); ?>/hotel/">Hotel <span>ペットホテル</span></a></li>
						<li><a href="<?php echo home_url(); ?>/news/">News <span>ニュース</span></a></li>
						<li><a href="<?php echo home_url(); ?>/blog/">Blog <span>ブログ</span></a></li>
						<li><a href="<?php echo home_url(); ?>/faq/">FAQ <span>よくある質問</span></a></li>
						<li><a href="<?php echo home_url(); ?>/shop/">Shop <span>店舗情報</span></a></li>
					</ul>
				</nav>
			</div>
		</div>
		<div class="header-contact">
			<div class="header-contact__phone">
				<a href="tel:0253783740">025-378-3740<br>
					<p>営業時間：9：00～19：00</p>
				</a>
			</div>
			<div class="header-contact__mail">
				<a href="mailto:tail@anosalo.com">
				   <img src="<?php bloginfo('template_directory');?>/img/common/mail_top.png" alt="mail_top">					   <p>Contact</p>
				</a>
			</div>
		</div>
	</div><!-- /.l-header -->
	<div class="l-contents">