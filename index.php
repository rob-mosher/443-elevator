<html>
<head>
<title>Elevatr</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<link href="https://fonts.googleapis.com/css?family=Oswald:700" rel="stylesheet">
<style>
* {
	margin: 0;
	padding: 0;
}
div.vignette {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
div.vignette {
	box-shadow: 0 0 200px rgba(0,0,0,0.6) inset;
	-webkit-transition: all 0.5s ease-in-out;
	-moz-transition: all 0.5s ease-in-out;
	-o-transition: all 0.5s ease-in-out;
	transition: all 0.5s ease-in-out;
}
#content {
	position: absolute;
	margin: auto;
	top: 45.5%;
	right: 0;
	bottom: 0;
	left: 0;
	line-height: 0;
	width: 100%;
/*	height: 28%;*/
}
#responsive_headline {
	display: block;
	color: white;
	text-align: center;
	margin: 0 auto;
	letter-spacing: 0.2vw;
	font-family: Oswald, sans-serif;
}
#responsive_headline {
	width: 70%;
	-webkit-transition: all 0.3s ease-in-out;
	-moz-transition: all 0.3s ease-in-out;
	-o-transition: all 0.3s ease-in-out;
	transition: all 0.3s ease-in-out;
}
@media screen and (max-width: 600px) {
	#responsive_headline {
		width: 95%;
		-webkit-transition: all 0.3s ease-in-out;
		-moz-transition: all 0.3s ease-in-out;
		-o-transition: all 0.3s ease-in-out;
		transition: all 0.3s ease-in-out;
	}
	div.vignette {
		box-shadow: 0 0 75px rgba(0,0,0,0.6) inset;
		-webkit-transition: all 0.5s ease-in-out;
		-moz-transition: all 0.5s ease-in-out;
		-o-transition: all 0.5s ease-in-out;
		transition: all 0.5s ease-in-out;
	}
}
</style>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-6391661-9"></script>
<script>
  window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-6391661-9');
</script>
</head>
<body>
<div class="vignette">
<script src="https://site-443elevatr-media.s3.amazonaws.com/jquery.backstretch.min.js"></script>
<script src="https://site-443elevatr-media.s3.amazonaws.com/jquery.fittext.js"></script>
<script>
$.backstretch("https://site-443elevatr-media.s3.amazonaws.com/elevatr-temp.jpg");
</script>
<div id="content">
<h1 id="responsive_headline">(443) ELE-VATR</h1>
</div>
<script>
jQuery("#responsive_headline").fitText();
</script>
</div><!-- end div.vignette -->
</body>
<!-- psst! hey! it's a phone number! -->
</html>
