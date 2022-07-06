/*
	Escape Velocity by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			alignment: 'center',
			detach: false
		});

	// Nav.

		// Title Bar.
			// $(
			// 	'<div id="titleBar">' +
			// 		'<a href="#navPanel" class="toggle"></a>' +
			// 		'<span class="title">' + $('#logo h1').html() + '</span>' +
			// 	'</div>'
			// )
			// 	.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right',
					target: $body,
					visibleClass: 'navPanel-visible'
				});
				$('document').ready(function () {


			// RESTYLE THE DROPDOWN MENU
		$('#google_translate_wrapper').on("click", function () {
	
			// Change font family and color
			$("iframe").contents().find(".goog-te-menu2-item div, .goog-te-menu2-item:link div, .goog-te-menu2-item:visited div, .goog-te-menu2-item:active div, .goog-te-menu2 *")
				.css({
					'color': '#544F4B',
					'font-family': 'Roboto',
									'width':'100%'
				});
			// Change menu's padding
			$("iframe").contents().find('.goog-te-menu2-item-selected').css ('display', 'none');
				
					// Change menu's padding
			$("iframe").contents().find('.goog-te-menu2').css ('padding', '0px');
			
			// Change the padding of the languages
			$("iframe").contents().find('.goog-te-menu2-item div').css('padding', '20px');
			
			// Change the width of the languages
			$("iframe").contents().find('.goog-te-menu2-item').css('width', '100%');
			$("iframe").contents().find('td').css('width', '100%');
			
			// Change hover effects
			$("iframe").contents().find(".goog-te-menu2-item div").hover(function () {
				$(this).css('background-color', '#4385F5').find('span.text').css('color', 'white');
			}, function () {
				$(this).css('background-color', 'white').find('span.text').css('color', '#544F4B');
			});
	
			// Change Google's default blue border
			$("iframe").contents().find('.goog-te-menu2').css('border', 'none');
	
			// Change the iframe's box shadow
			$(".goog-te-menu-frame").css('box-shadow', '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3)');
			
			
			
			// Change the iframe's size and position?
			$(".goog-te-menu-frame").css({
				'height': '100%',
				'width': '100%',
				'top': '0px'
			});
			// Change iframes's size
			$("iframe").contents().find('.goog-te-menu2').css({
				'height': '100%',
				'width': '100%'
			});
		});
	});
			
})(jQuery);