<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>wow.js — Reveal Animations When Scrolling</title>
    <meta name="description" content="description"/>
    <meta name="author" content="author" />
    <meta name="keywords" content="keywords" />
    <link rel="stylesheet" href="https://wowjs.uk/css/libs/animate.css">
	<style>
		.cmnbox{padding:50px 30px;display:inline-block;width:50%;max-width:800px;margin-bottom:150px;background:#f2f2f2;min-height:200px;}
		.text-wrap{max-width:500px;margin:20px auto;text-align:center;}
		.box-wrap{display:flex;gap:20px;}
	</style>
	
  </head>
  <body>
	
		<div class="wow cmnbox">
			<p>normal wow class</p>
		</div>
		<br/>
		<br/>
		<div class="wow bounceInUp cmnbox">
			BouneInUp
		</div>
		<br/>
		<br/>
		<section class="wow fadeInLeft cmnbox" data-wow-duration="1s" data-wow-delay=".3s">
			fadeInLeft
		</section>
		<br/>
		<br/>
		<section class="wow fadeInRight cmnbox" data-wow-duration="1s" data-wow-delay=".9s">
			fadeInRight
		</section>
		
		<section class="text-wrap">
			<h3 class="main-heading wow fadeInUp" >What is Lorem Ipsum?</h3>
			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not </p>
		</section>
		<br/>
		<br/>
		<div class="box-wrap"	>
			<div class="cmnbox wow fadeInUp" data-wow-delay=".2s">Box 1</div>
			<div class="cmnbox wow fadeInUp" data-wow-delay=".4s">Box 22</div>
			<div class="cmnbox wow fadeInUp" data-wow-delay=".6s">Box 333</div>
			<div class="cmnbox wow fadeInUp" data-wow-delay=".8s">Box 4444</div>
		</div>
		<br/>
		<br/>
	 <script src="https://wowjs.uk/dist/wow.min.js"></script>
	  <script>
		/* wow = new WOW(
		  {
			  boxClass:     'wow',      
			  animateClass: 'animated', 
			  offset:       1,          
			  mobile:       true,       
			  live:         true        
			}
		)
		wow.init();*/
					
		new WOW().init();
	  </script>
			  
  </body>
</html>
