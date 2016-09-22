/*-----------------------------------------------------------------------------

	-	Revolution Slider 4.1 Captions -

		Screen Stylesheet

version:   	1.4.5
date:      	27/11/13
author:		themepunch
email:     	info@themepunch.com
website:   	http://www.themepunch.com
-----------------------------------------------------------------------------*/


@font-face {
  font-family: 'revicons';
  src: url('../font/revicons.eot?5510888');
  src: url('../font/revicons.eot?5510888#iefix') format('embedded-opentype'),
       url('../font/revicons.woff?5510888') format('woff'),
       url('../font/revicons.ttf?5510888') format('truetype'),
       url('../font/revicons.svg?5510888#revicons') format('svg');
  font-weight: normal;
  font-style: normal;
}
/* Chrome hack: SVG is rendered more smooth in Windozze. 100% magic, uncomment if you need it. */
/* Note, that will break hinting! In other OS-es font will be not as sharp as it could be */
/*
@media screen and (-webkit-min-device-pixel-ratio:0) {
  @font-face {
    font-family: 'revicons';
    src: url('../font/revicons.svg?5510888#revicons') format('svg');
  }
}
*/
 
 [class^="revicon-"]:before, [class*=" revicon-"]:before {
  font-family: "revicons";
  font-style: normal;
  font-weight: normal;
  speak: none;
 
  display: inline-block;
  text-decoration: inherit;
  width: 1em;
  margin-right: .2em;
  text-align: center;
  /* opacity: .8; */
 
  /* For safety - reset parent styles, that can break glyph codes*/
  font-variant: normal;
  text-transform: none;
     
  /* fix buttons height, for twitter bootstrap */
  line-height: 1em;
 
  /* Animation center compensation - margins should be symmetric */
  /* remove if not needed */
  margin-left: .2em;
 
  /* you can be more comfortable with increased icons size */
  /* font-size: 120%; */
 
  /* Uncomment for 3D effect */
  /* text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3); */
}
 
.revicon-search-1:before { content: '\e802'; } /* 'î ‚' */
.revicon-pencil-1:before { content: '\e831'; } /* 'î ±' */
.revicon-picture-1:before { content: '\e803'; } /* 'î ƒ' */
.revicon-cancel:before { content: '\e80a'; } /* 'î Š' */
.revicon-info-circled:before { content: '\e80f'; } /* 'î ' */
.revicon-trash:before { content: '\e801'; } /* 'î ' */
.revicon-left-dir:before { content: '\e817'; } /* 'î —' */
.revicon-right-dir:before { content: '\e818'; } /* 'î ˜' */
.revicon-down-open:before { content: '\e83b'; } /* 'î »' */
.revicon-left-open:before { content: '\e819'; } /* 'î ™' */
.revicon-right-open:before { content: '\e81a'; } /* 'î š' */
.revicon-angle-left:before { content: '\e820'; } /* 'î  ' */
.revicon-angle-right:before { content: '\e81d'; } /* 'î ' */
.revicon-left-big:before { content: '\e81f'; } /* 'î Ÿ' */
.revicon-right-big:before { content: '\e81e'; } /* 'î ž' */
.revicon-magic:before { content: '\e807'; } /* 'î ‡' */
.revicon-picture:before { content: '\e800'; } /* 'î €' */
.revicon-export:before { content: '\e80b'; } /* 'î ‹' */
.revicon-cog:before { content: '\e832'; } /* 'î ²' */
.revicon-login:before { content: '\e833'; } /* 'î ³' */
.revicon-logout:before { content: '\e834'; } /* 'î ´' */
.revicon-video:before { content: '\e805'; } /* 'î …' */
.revicon-arrow-combo:before { content: '\e827'; } /* 'î §' */
.revicon-left-open-1:before { content: '\e82a'; } /* 'î ª' */
.revicon-right-open-1:before { content: '\e82b'; } /* 'î «' */
.revicon-left-open-mini:before { content: '\e822'; } /* 'î ¢' */
.revicon-right-open-mini:before { content: '\e823'; } /* 'î £' */
.revicon-left-open-big:before { content: '\e824'; } /* 'î ¤' */
.revicon-right-open-big:before { content: '\e825'; } /* 'î ¥' */
.revicon-left:before { content: '\e836'; } /* 'î ¶' */
.revicon-right:before { content: '\e826'; } /* 'î ¦' */
.revicon-ccw:before { content: '\e808'; } /* 'î ˆ' */
.revicon-arrows-ccw:before { content: '\e806'; } /* 'î †' */
.revicon-palette:before { content: '\e829'; } /* 'î ©' */
.revicon-list-add:before { content: '\e80c'; } /* 'î Œ' */
.revicon-doc:before { content: '\e809'; } /* 'î ‰' */
.revicon-left-open-outline:before { content: '\e82e'; } /* 'î ®' */
.revicon-left-open-2:before { content: '\e82c'; } /* 'î ¬' */
.revicon-right-open-outline:before { content: '\e82f'; } /* 'î ¯' */
.revicon-right-open-2:before { content: '\e82d'; } /* 'î ­' */
.revicon-equalizer:before { content: '\e83a'; } /* 'î º' */
.revicon-layers-alt:before { content: '\e804'; } /* 'î „' */
.revicon-popup:before { content: '\e828'; } /* 'î ¨' */


/*********************************
	-	SPECIAL TP CAPTIONS -
**********************************/
.tp-caption .frontcorner		{
										width: 0;
										height: 0;
										border-left: 40px solid transparent;
										border-right: 0px solid transparent;
										border-top: 40px solid #00A8FF;
										position: absolute;left:-40px;top:0px;
									}

.tp-caption .backcorner		{
										width: 0;
										height: 0;
										border-left: 0px solid transparent;
										border-right: 40px solid transparent;
										border-bottom: 40px solid #00A8FF;
										position: absolute;right:0px;top:0px;
									}

.tp-caption .frontcornertop		{
										width: 0;
										height: 0;
										border-left: 40px solid transparent;
										border-right: 0px solid transparent;
										border-bottom: 40px solid #00A8FF;
										position: absolute;left:-40px;top:0px;
									}

.tp-caption .backcornertop		{
										width: 0;
										height: 0;
										border-left: 0px solid transparent;
										border-right: 40px solid transparent;
										border-top: 40px solid #00A8FF;
										position: absolute;right:0px;top:0px;
									}

/******************************
	-	WRAPPER STYLES		-
******************************/



.rev_slider_wrapper{
	position:relative;
}

.rev_slider_wrapper >ul	{
	visibility:hidden;
}

.rev_slider{
	position:relative;
	overflow:visible;
}


.rev_slider img{
	max-width:none !important;
	-moz-transition: none 0;
	-webkit-transition: none 0;
	-o-transition: none 0;
	transition: none 0;
	margin:0px;
	padding:0px;
	border-width:0px;
	border:none;
	visibility:visible !important;
}

.rev_slider .no-slides-text{
	font-weight:bold;
	text-align:center;
	padding-top:80px;
}

.rev_slider ul{
	margin:0px;
	padding:0px;
	list-style: none !important;
	list-style-type: none;
	background-position:0px 0px;
}

.rev_slider ul li,
.rev_slider >ul >li,
.rev_slider >ul >li:before{

	list-style:none !important;
	position:absolute;
	visibility:hidden;
	margin:0px !important;
	padding:0px !important;
	overflow-x: visible;
	overflow-y: visible;
	list-style-type: none !important;
	background-image:none;
	background-position:0px 0px;
	text-indent: 0em;
}

.rev_slider .tp-caption,
.rev_slider .caption { position:absolute; visibility: hidden; white-space: nowrap;}

.tp-simpleresponsive img	{	max-width:none;}

/* ADDED FOR SLIDELINK MANAGEMENT */
.tp-caption { z-index:1;}



.tp_inner_padding	{	box-sizing:border-box;
						-webkit-box-sizing:border-box;
						-moz-box-sizing:border-box;
						max-height:none !important;	}


.tp-hide-revslider,.tp-caption.tp-hidden-caption	{	visibility:hidden !important; display:none !important;}

.rev_slider embed,
.rev_slider iframe,
.rev_slider object,
.rev_slider video {max-width: none !important;}

/******************************
	-	WRAPPER STYLES END	-
******************************/

/******************************
	-	IE8 HACKS	-
*******************************/
.noFilterClass {
	filter:none !important;
}
/******************************
	-	IE8 HACKS ENDS	-
*******************************/

/********************************
	-	FULLSCREEN VIDEO	-
*********************************/
.caption.fullscreenvideo {	left:0px; top:0px; position:absolute;width:100%;height:100%;}
.caption.fullscreenvideo iframe,
.caption.fullscreenvideo video	{ width:100% !important; height:100% !important; display: none}

.tp-caption.fullscreenvideo {	left:0px; top:0px; position:absolute;width:100%;height:100%;}
.tp-caption.fullscreenvideo iframe,
.tp-caption.fullscreenvideo iframe video	{ width:100% !important; height:100% !important; display: none;}


.fullscreenvideo .vjs-loading-spinner { visibility:none;display:none !important; width:0px;height:0px;}
.fullscreenvideo .vjs-control-bar.vjs-fade-out,
.fullscreenvideo .vjs-control-bar.vjs-fade-in,
.fullscreenvideo .vjs-control-bar.vjs-fade-out.vjs-lock-showing,
.fullscreenvideo .vjs-control-bar.vjs-fade-in.vjs-lock-showing		{	visibility: hidden !important; opacity: 0 !important;display:none !important;width:0px;height:0px;overflow: hidden;}

.fullcoveredvideo.video-js,
.fullcoveredvideo video				{	background: transparent !important;}

.fullcoveredvideo .vjs-poster		{	background-position: center center;background-size: cover;width:100%;height:100%;top:0px;left:0px;}


/********************************
	-	FULLSCREEN VIDEO ENDS	-
*********************************/



/********************************
	-	DOTTED OVERLAYS	-
*********************************/
.tp-dottedoverlay						{	background-repeat:repeat;width:100%;height:100%;position:absolute;top:0px;left:0px;z-index:1;}
.tp-dottedoverlay.twoxtwo				{	background:url(../assets/gridtile.png)}
.tp-dottedoverlay.twoxtwowhite			{	background:url(../assets/gridtile_white.png)}
.tp-dottedoverlay.threexthree			{	background:url(../assets/gridtile_3x3.png)}
.tp-dottedoverlay.threexthreewhite		{	background:url(../assets/gridtile_3x3_white.png)}
/********************************
	-	DOTTED OVERLAYS ENDS	-
*********************************/



/**********************************************
	-	FULLSCREEN AND FULLWIDHT CONTAINERS	-
**********************************************/

.fullscreen-container {
		width:100%;
		position:relative;
		padding:0;
}



.fullwidthbanner-container{
	width:100%;
	position:relative;
	padding:0;
	overflow:hidden;
}

.fullwidthbanner-container .fullwidthabanner{
	width:100%;
	position:relative;
}


/****************************************************************

	-	SET THE ANIMATION EVEN MORE SMOOTHER ON ANDROID   -

******************************************************************/

.tp-simpleresponsive .slotholder *,
.tp-simpleresponsive img			{ 	/*-webkit-transform: translateZ(0);
										  -webkit-backface-visibility: hidden;
										  -webkit-perspective: 1000;*/
									}


/************************************************
	  - SOME CAPTION MODIFICATION AT START  -
*************************************************/
.tp-simpleresponsive .caption,
.tp-simpleresponsive .tp-caption {
	/*-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";		-moz-opacity: 0;	-khtml-opacity: 0;	opacity: 0; */
	position:absolute;
	-webkit-font-smoothing: antialiased !important;
}


/******************************
	-	SHADOWS		-
******************************/
.tp-bannershadow  {
		position:absolute;

		margin-left:auto;
		margin-right:auto;
		-moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -o-user-select: none;
	}

.tp-bannershadow.tp-shadow1 {	background:url(../assets/shadow1.png) no-repeat; background-size:100% 100%; width:590px; height:30px; bottom:-30px;}
.tp-bannershadow.tp-shadow2 {	background:url(../assets/shadow2.png) no-repeat; background-size:100% 100%; width:590px; height:60px;bottom:-60px;}
.tp-bannershadow.tp-shadow3 {	background:url(../assets/shadow3.png) no-repeat; background-size:100% 100%; width:590px; height:60px;bottom:-60px;}


/******************************
	-	BUTTONS	-
*******************************/

.tp-button{
			padding:6px 13px 5px;
			border-radius: 3px;
			-moz-border-radius: 3px;
			-webkit-border-radius: 3px;
			height:30px;
			cursor:pointer;
			color:#fff !important; text-shadow:0px 1px 1px rgba(0, 0, 0, 0.6) !important; font-size:15px; line-height:45px !important;
			background:url(../images/gradient/g30.png) repeat-x top; font-family: arial, sans-serif; font-weight: bold; letter-spacing: -1px;
			text-decoration:none;
		}

.tp-button.big			{	color:#fff; text-shadow:0px 1px 1px rgba(0, 0, 0, 0.6); font-weight:bold; padding:9px 20px; font-size:19px;  line-height:57px !important; background:url(../images/gradient/g40.png) repeat-x top;}


.purchase:hover,
.tp-button:hover,
.tp-button.big:hover		{	background-position:bottom, 15px 11px;}


	@media only screen and (min-width: 480px) and (max-width: 767px) {
		.tp-button	{	padding:4px 8px 3px; line-height:25px !important; font-size:11px !important;font-weight:normal;	}
		a.tp-button { -webkit-transition: none; -moz-transition: none; -o-transition: none; -ms-transition: none;	 }
	}

    @media only screen and (min-width: 0px) and (max-width: 479px) {
		.tp-button	{	padding:2px 5px 2px; line-height:20px !important; font-size:10px !important;}
		a.tp-button { -webkit-transition: none; -moz-transition: none; -o-transition: none; -ms-transition: none;	 }
	}


/*	BUTTON COLORS	*/

.tp-button.green, .tp-button:hover.green,
.purchase.green, .purchase:hover.green			{ background-color:#21a117; -webkit-box-shadow:  0px 3px 0px 0px #104d0b;        -moz-box-shadow:   0px 3px 0px 0px #104d0b;        box-shadow:   0px 3px 0px 0px #104d0b;  }


.tp-button.blue, .tp-button:hover.blue,
.purchase.blue, .purchase:hover.blue			{ background-color:#1d78cb; -webkit-box-shadow:  0px 3px 0px 0px #0f3e68;        -moz-box-shadow:   0px 3px 0px 0px #0f3e68;        box-shadow:   0px 3px 0px 0px #0f3e68;}


.tp-button.red, .tp-button:hover.red,
.purchase.red, .purchase:hover.red				{ background-color:#cb1d1d; -webkit-box-shadow:  0px 3px 0px 0px #7c1212;        -moz-box-shadow:   0px 3px 0px 0px #7c1212;        box-shadow:   0px 3px 0px 0px #7c1212;}

.tp-button.orange, .tp-button:hover.orange,
.purchase.orange, .purchase:hover.orange		{ background-color:#ff7700; -webkit-box-shadow:  0px 3px 0px 0px #a34c00;        -moz-box-shadow:   0px 3px 0px 0px #a34c00;        box-shadow:   0px 3px 0px 0px #a34c00;}

.tp-button.darkgrey,.tp-button.grey,
.tp-button:hover.darkgrey,.tp-button:hover.grey,
.purchase.darkgrey, .purchase:hover.darkgrey	{ background-color:#555; -webkit-box-shadow:  0px 3px 0px 0px #222;        -moz-box-shadow:   0px 3px 0px 0px #222;        box-shadow:   0px 3px 0px 0px #222;}

.tp-button.lightgrey, .tp-button:hover.lightgrey,
.purchase.lightgrey, .purchase:hover.lightgrey	{ background-color:#888; -webkit-box-shadow:  0px 3px 0px 0px #555;        -moz-box-shadow:   0px 3px 0px 0px #555;        box-shadow:   0px 3px 0px 0px #555;}



/************************
	-	NAVIGATION	-
*************************/

/** BULLETS **/

.tpclear		{	clear:both;}


.tp-bullets								{	z-index:1000; position:absolute;
												-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
												-moz-opacity: 1;
												-khtml-opacity: 1;
												opacity: 1;
												-webkit-transition: opacity 0.2s ease-out; -moz-transition: opacity 0.2s ease-out; -o-transition: opacity 0.2s ease-out; -ms-transition: opacity 0.2s ease-out;
												-webkit-transform: translateZ(5px);
											}
.tp-bullets.hidebullets					{
												-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
												-moz-opacity: 0;
												-khtml-opacity: 0;
												opacity: 0;
											}


.tp-bullets.simplebullets.navbar						{ 	border:1px solid #666; border-bottom:1px solid #444; background:url(../assets/boxed_bgtile.png); height:40px; padding:0px 10px; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px ;}

.tp-bullets.simplebullets.navbar-old					{ 	 background:url(../assets/navigdots_bgtile.png); height:35px; padding:0px 10px; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px ;}


.tp-bullets.simplebullets.round .bullet					{	cursor:pointer; position:relative;	background:url(../assets/bullet.png) no-repeat top left;	width:20px;	height:20px;  margin-right:0px; float:left; margin-top:0px; margin-left:3px;}
.tp-bullets.simplebullets.round .bullet.last			{	margin-right:3px;}

.tp-bullets.simplebullets.round-old .bullet				{	cursor:pointer; position:relative;	background:url(../assets/bullets.png) no-repeat bottom left;	width:23px;	height:23px;  margin-right:0px; float:left; margin-top:0px;}
.tp-bullets.simplebullets.round-old .bullet.last		{	margin-right:0px;}


/**	SQUARE BULLETS **/
.tp-bullets.simplebullets.square .bullet				{	cursor:pointer; position:relative;	background:url(../assets/bullets2.png) no-repeat bottom left;	width:19px;	height:19px;  margin-right:0px; float:left; margin-top:0px;}
.tp-bullets.simplebullets.square .bullet.last			{	margin-right:0px;}


/**	SQUARE BULLETS **/
.tp-bullets.simplebullets.square-old .bullet			{	cursor:pointer; position:relative;	background:url(../assets/bullets2.png) no-repeat bottom left;	width:19px;	height:19px;  margin-right:0px; float:left; margin-top:0px;}
.tp-bullets.simplebullets.square-old .bullet.last		{	margin-right:0px;}


/** navbar NAVIGATION VERSION **/
.tp-bullets.simplebullets.navbar .bullet			{	cursor:pointer; position:relative;	background:url(../assets/bullet_boxed.png) no-repeat top left;	width:18px;	height:19px;   margin-right:5px; float:left; margin-top:10px;}

.tp-bullets.simplebullets.navbar .bullet.first		{	margin-left:0px !important;}
.tp-bullets.simplebullets.navbar .bullet.last		{	margin-right:0px !important;}



/** navbar NAVIGATION VERSION **/
.tp-bullets.simplebullets.navbar-old .bullet			{	cursor:pointer; position:relative;	background:url(../assets/navigdots.png) no-repeat bottom left;	width:15px;	height:15px;  margin-left:5px !important; margin-right:5px !important;float:left; margin-top:10px;}
.tp-bullets.simplebullets.navbar-old .bullet.first		{	margin-left:0px !important;}
.tp-bullets.simplebullets.navbar-old .bullet.last		{	margin-right:0px !important;}


.tp-bullets.simplebullets .bullet:hover,
.tp-bullets.simplebullets .bullet.selected				{	background-position:top left; }

.tp-bullets.simplebullets.round .bullet:hover,
.tp-bullets.simplebullets.round .bullet.selected,
.tp-bullets.simplebullets.navbar .bullet:hover,
.tp-bullets.simplebullets.navbar .bullet.selected		{	background-position:bottom left; }



/*************************************
	-	TP ARROWS 	-
**************************************/
.tparrows												{	-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
															-moz-opacity: 1;
															-khtml-opacity: 1;
															opacity: 1;
															-webkit-transition: opacity 0.2s ease-out; -moz-transition: opacity 0.2s ease-out; -o-transition: opacity 0.2s ease-out; -ms-transition: opacity 0.2s ease-out;
															-webkit-transform: translateZ(5px);

														}
.tparrows.hidearrows									{
															-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
															-moz-opacity: 0;
															-khtml-opacity: 0;
															opacity: 0;
														}
.tp-leftarrow											{	z-index:100;cursor:pointer; position:relative;	background:url(../assets/large_left.png) no-repeat top left;	width:40px;	height:40px;   }
.tp-rightarrow											{	z-index:100;cursor:pointer; position:relative;	background:url(../assets/large_right.png) no-repeat top left;	width:40px;	height:40px;   }


.tp-leftarrow.round										{	z-index:100;cursor:pointer; position:relative;	background:url(../assets/small_left.png) no-repeat top left;	width:19px;	height:14px;  margin-right:0px; float:left; margin-top:0px;	}
.tp-rightarrow.round									{	z-index:100;cursor:pointer; position:relative;	background:url(../assets/small_right.png) no-repeat top left;	width:19px;	height:14px;  margin-right:0px; float:left;	margin-top:0px;}


.tp-leftarrow.round-old									{	z-index:100;cursor:pointer; position:relative;	background:url(../assets/arrow_left.png) no-repeat top left;	width:26px;	height:26px;  margin-right:0px; float:left; margin-top:0px;	}
.tp-rightarrow.round-old								{	z-index:100;cursor:pointer; position:relative;	background:url(../assets/arrow_right.png) no-repeat top left;	width:26px;	height:26px;  margin-right:0px; float:left;	margin-top:0px;}


.tp-leftarrow.navbar									{	z-index:100;cursor:pointer; position:relative;	background:url(../assets/small_left_boxed.png) no-repeat top left;	width:20px;	height:15px;   float:left;	margin-right:6px; margin-top:12px;}
.tp-rightarrow.navbar									{	z-index:100;cursor:pointer; position:relative;	background:url(../assets/small_right_boxed.png) no-repeat top left;	width:20px;	height:15px;   float:left;	margin-left:6px; margin-top:12px;}


.tp-leftarrow.navbar-old								{	z-index:100;cursor:pointer; position:relative;	background:url(../assets/arrowleft.png) no-repeat top left;		width:9px;	height:16px;   float:left;	margin-right:6px; margin-top:10px;}
.tp-rightarrow.navbar-old								{	z-index:100;cursor:pointer; position:relative;	background:url(../assets/arrowright.png) no-repeat top left;	width:9px;	height:16px;   float:left;	margin-left:6px; margin-top:10px;}

.tp-leftarrow.navbar-old.thumbswitharrow				{	margin-right:10px; }
.tp-rightarrow.navbar-old.thumbswitharrow				{	margin-left:0px; }

.tp-leftarrow.square									{	z-index:100;cursor:pointer; position:relative;	background:url(../assets/arrow_left2.png) no-repeat top left;	width:12px;	height:17px;   float:left;	margin-right:0px; margin-top:0px;}
.tp-rightarrow.square									{	z-index:100;cursor:pointer; position:relative;	background:url(../assets/arrow_right2.png) no-repeat top left;	width:12px;	height:17px;   float:left;	margin-left:0px; margin-top:0px;}


.tp-leftarrow.square-old								{	z-index:100;cursor:pointer; position:relative;	background:url(../assets/arrow_left2.png) no-repeat top left;	width:12px;	height:17px;   float:left;	margin-right:0px; margin-top:0px;}
.tp-rightarrow.square-old								{	z-index:100;cursor:pointer; position:relative;	background:url(../assets/arrow_right2.png) no-repeat top left;	width:12px;	height:17px;   float:left;	margin-left:0px; margin-top:0px;}


.tp-leftarrow.default									{	z-index:100;cursor:pointer; position:relative;	background:url(../assets/large_left.png) no-repeat 0 0;	width:40px;	height:40px;

														}
.tp-rightarrow.default									{	z-index:100;cursor:pointer; position:relative;	background:url(../assets/large_right.png) no-repeat 0 0;	width:40px;	height:40px;

														}




.tp-leftarrow:hover,
.tp-rightarrow:hover 									{	background-position:bottom left; }






/****************************************************************************************************
	-	TP THUMBS 	-
*****************************************************************************************************

 - tp-thumbs & tp-mask Width is the width of the basic Thumb Container (500px basic settings)

 - .bullet width & height is the dimension of a simple Thumbnail (basic 100px x 50px)

 *****************************************************************************************************/


.tp-bullets.tp-thumbs						{	z-index:1000; position:absolute; padding:3px;background-color:#fff;
												width:500px;height:50px; 			/* THE DIMENSIONS OF THE THUMB CONTAINER */
												margin-top:-50px;
												vertical-align: top;												
											}
.tp-bullets.tp-thumbs img					{	vertical-align: top;}										


.fullwidthbanner-container .tp-thumbs		{  padding:3px;}

.tp-bullets.tp-thumbs .tp-mask				{	width:500px; height:50px;  			/* THE DIMENSIONS OF THE THUMB CONTAINER */
												overflow:hidden; position:relative;}


.tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer	{	width:5000px; position:absolute;}

.tp-bullets.tp-thumbs .bullet				{   width:100px; height:50px; 			/* THE DIMENSION OF A SINGLE THUMB */
												cursor:pointer; overflow:hidden;background:none;margin:0;float:left;
												-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
												/*filter: alpha(opacity=50);	*/
												-moz-opacity: 0.5;
												-khtml-opacity: 0.5;
												opacity: 0.5;

												-webkit-transition: all 0.2s ease-out; -moz-transition: all 0.2s ease-out; -o-transition: all 0.2s ease-out; -ms-transition: all 0.2s ease-out;
											}


.tp-bullets.tp-thumbs .bullet:hover,
.tp-bullets.tp-thumbs .bullet.selected		{ 	-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";

												-moz-opacity: 1;
												-khtml-opacity: 1;
												opacity: 1;
											}
.tp-thumbs img								{	width:100%; }




/************************************
		-	TP BANNER TIMER		-
*************************************/
.tp-bannertimer								{	width:100%; height:10px; background:url(../assets/timer.png);position:absolute; z-index:200; top:0px;}
.tp-bannertimer.tp-bottom					{	top:auto; bottom:0px !important;height:5px;}



/******************************
	-	HTML5 VIDEO SETTINGS	-
********************************/

.vjs-tech { margin-top:1px}

.tp-caption .vjs-default-skin .vjs-big-play-button	{	left: 50%;
top: 50%;
margin-left: -20px;
margin-top: -20px;
width: 40px;
height: 40px;
border-radius: 5px;
-moz-border-radius: 5px;
-webkit-border-radius: 5px;
border: none;
box-shadow: none;
text-shadow: none;
line-height: 30px;
vertical-align: top;
padding: 0px;
}

.tp-caption .vjs-default-skin .vjs-big-play-button:before {
 position:absolute;
 top:0px; left:0px;	
 line-height:40px;
 text-shadow: none !important;
 color:#fff;
 font-size:18px;
 
}

.tp-caption  .vjs-default-skin:hover .vjs-big-play-button, .vjs-default-skin .vjs-big-play-button:focus {

	box-shadow:none;
	-webkit-box-shadow:none;
	
}


/***************************************
	-	RESPONSIVE SETTINGS 	-
****************************************/




/*********************************************

	-	BASIC SETTINGS FOR THE BANNER	-

***********************************************/

 .tp-simpleresponsive img {
		-moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -o-user-select: none;
}

.tp-caption img {
background: transparent;
-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#00FFFFFF,endColorstr=#00FFFFFF)";
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#00FFFFFF,endColorstr=#00FFFFFF);
zoom: 1;
}


.tp-simpleresponsive ul {
	list-style:none;
	padding:0;
	margin:0;
}

.tp-simpleresponsive >ul li{
	list-style:none;
	position:absolute;
	visibility:hidden;
}

/*  CAPTION SLIDELINK   **/
.caption.slidelink a div,
.tp-caption.slidelink a div {	width:3000px; height:1500px;  background:url(../assets/coloredbg.png) repeat;}



/******************************
	-	LOADER FORMS	-
********************************/

.tp-loader 	{	  
				top:50%; left:50%; 
				z-index:10000; 
				position:absolute;
				

			}
			
.tp-loader.spinner0 {
  width: 40px;
  height: 40px;
  background:url(../assets/loader.gif) no-repeat center center;
  background-color: #fff;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.15);
  -webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.15);  
  margin-top:-20px;
  margin-left:-20px;
  -webkit-animation: tp-rotateplane 1.2s infinite ease-in-out;
  animation: tp-rotateplane 1.2s infinite ease-in-out;
  border-radius: 3px;
	-moz-border-radius: 3px;
	-webkit-border-radius: 3px;
}


.tp-loader.spinner1 {
  width: 40px;
  height: 40px;
  background-color: #fff;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.15);
  -webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.15);  
  margin-top:-20px;
  margin-left:-20px;
  -webkit-animation: tp-rotateplane 1.2s infinite ease-in-out;
  animation: tp-rotateplane 1.2s infinite ease-in-out;
  border-radius: 3px;
	-moz-border-radius: 3px;
	-webkit-border-radius: 3px;
}



.tp-loader.spinner5 	{	background:url(../assets/loader.gif) no-repeat 10px 10px; 
							background-color:#fff;  
							margin:-22px -22px; 							
							width:44px;height:44px;
							border-radius: 3px;
							-moz-border-radius: 3px;
							-webkit-border-radius: 3px;
						}


@-webkit-keyframes tp-rotateplane {
  0% { -webkit-transform: perspective(120px) }
  50% { -webkit-transform: perspective(120px) rotateY(180deg) }
  100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }
}

@keyframes tp-rotateplane {
  0% { 
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg) 
  } 50% { 
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg) 
  } 100% { 
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
}


.tp-loader.spinner2 {
  width: 40px;
  height: 40px;
  margin-top:-20px;margin-left:-20px;
  background-color: #ff0000;
   box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.15);
  -webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.15);  
  border-radius: 100%;  
  -webkit-animation: tp-scaleout 1.0s infinite ease-in-out;
  animation: tp-scaleout 1.0s infinite ease-in-out;
}

@-webkit-keyframes tp-scaleout {
  0% { -webkit-transform: scale(0.0) }
  100% {
    -webkit-transform: scale(1.0);
    opacity: 0;
  }
}

@keyframes tp-scaleout {
  0% { 
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 100% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
    opacity: 0;
  }
}




.tp-loader.spinner3 {
  margin: -9px 0px 0px -35px;
  width: 70px;
  text-align: center;

}

.tp-loader.spinner3 .bounce1,
.tp-loader.spinner3 .bounce2,
.tp-loader.spinner3 .bounce3 {
  width: 18px;
  height: 18px;
  background-color: #fff;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.15);
  -webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.15);  
  border-radius: 100%;
  display: inline-block;
  -webkit-animation: tp-bouncedelay 1.4s infinite ease-in-out;
  animation: tp-bouncedelay 1.4s infinite ease-in-out;
  /* Prevent first frame from flickering when animation starts */
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.tp-loader.spinner3 .bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.tp-loader.spinner3 .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes tp-bouncedelay {
  0%, 80%, 100% { -webkit-transform: scale(0.0) }
  40% { -webkit-transform: scale(1.0) }
}

@keyframes tp-bouncedelay {
  0%, 80%, 100% { 
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 40% { 
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}




.tp-loader.spinner4 {
  margin: -20px 0px 0px -20px;
  width: 40px;
  height: 40px;
  text-align: center; 
  -webkit-animation: tp-rotate 2.0s infinite linear;
  animation: tp-rotate 2.0s infinite linear;
}

.tp-loader.spinner4 .dot1, 
.tp-loader.spinner4 .dot2 {
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: #fff;
  border-radius: 100%;  
  -webkit-animation: tp-bounce 2.0s infinite ease-in-out;
  animation: tp-bounce 2.0s infinite ease-in-out;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.15);
  -webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.15);  
}

.tp-loader.spinner4 .dot2 {
  top: auto;
  bottom: 0px;
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}

@-webkit-keyframes tp-rotate { 100% { -webkit-transform: rotate(360deg) }}
@keyframes tp-rotate { 100% { transform: rotate(360deg); -webkit-transform: rotate(360deg) }}

@-webkit-keyframes tp-bounce {
  0%, 100% { -webkit-transform: scale(0.0) }
  50% { -webkit-transform: scale(1.0) }
}

@keyframes tp-bounce {
  0%, 100% { 
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 50% { 
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}
