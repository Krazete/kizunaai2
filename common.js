/*
	Common Script
	2019/05/22
	9bf1f2042690e0164766cb315ec757fd
*/
$
(
	function()
	{
		var $window = $(window);
		var $myc = $('#myc');
		var $htmlBody = $('html,body');
		
		
		/*
			Anchor Scroll
		*/
		$myc.find('a').each
		(
			function(index, element)
			{
				var strHref = $(element).attr('href');
				
				if (!$(this).hasClass('top-anchor'))
				{
					if (strHref.substr(0, 1) != '#')
					{
						return;
					}
					
					if (strHref.length == 1)
					{
						return;
					}	
				}
				
				$(this).bind
				(
					'click',
					function(e)
					{
						var offsetTop = 0;
						
						if (strHref == '#')
						{
							if (!$(this).hasClass('top-anchor'))
							{
								return;
							}
						}
						else
						{
							/*
								Modal Check
							*/
							var $modal = $myc.find('.modal[data-remodal-id=' + strHref.substr(1) + ']');
							
							if ($modal.length > 0)
							{
								return;
							}
							
							/*
								Set Offset
							*/
							offsetTop = $(strHref).offset().top;
						}
						
						$htmlBody.animate
						(
							{
								scrollTop: offsetTop
							},
							'slow'
						);
						
						e.preventDefault();
						return false;
					}
				);
			}
		);
		
		
		
		/*
			ScrollMagic
		*/
		var controllerSmagic = new ScrollMagic.Controller();
		
		
		var setScrollMagic = function()
		{
			$myc.find('.scrollmagic').each
			(
				function(index, element)
				{
					var scene = new ScrollMagic.Scene
					(
						{
							triggerElement: element,
							triggerHook: 0.85
						}
					)
					.on
					(
						'enter',
						function()
						{
							$(element).addClass('show');
						}
					)
					.on
					(
						'leave',
						function()
						{
							$(element).removeClass('show');
						}
					)
					.addTo(controllerSmagic);
				}
			);
			
			
			/*
				Page Top
			*/
			new ScrollMagic.Scene
			(
				{
					triggerElement: '#myc-pagetop',
					triggerHook: 1
				}
			)
			.on
			(
				'enter',
				function()
				{
					$myc.find('#myc-pagetop').addClass('no-fix');
				}
			)
			.on
			(
				'leave',
				function()
				{
					$myc.find('#myc-pagetop').removeClass('no-fix');
				}
			)
			.addTo(controllerSmagic);
			
			
			
			new ScrollMagic.Scene
			(
				{
					triggerElement: '#myc-pagetop-position',
					triggerHook: 0
				}
			)
			.on
			(
				'enter',
				function()
				{
					$myc.find('#myc-pagetop .pagetop').addClass('show');
				}
			)
			.on
			(
				'leave',
				function()
				{
					$myc.find('#myc-pagetop .pagetop').removeClass('show');
				}
			)
			.addTo(controllerSmagic);
		};
		
		
		
		/*
			Preload
		*/
		var preloadImages =
		[
			// Set Image Path
		];
		
		var preloadCompleteCount = 0;
		var $indicator = $myc.find('#myc-loading .indicator');
		
		for (var index = 0; index < preloadImages.length; index++)
		{
			var img = $('<img>');
			
			img.load
			(
				function()
				{
					/*
						Complete
					*/
					preloadCompleteCount++;
					
					$indicator.text
					(
						Math.round(preloadCompleteCount / preloadImages.length * 100) + '%'
					);
					
					if (preloadCompleteCount == preloadImages.length)
					{
						$indicator.text('100%');
						
						opening();
					}
				}
			);
			
			img.attr
			(
				'src',
				preloadImages[index]
			);
		}
		
		
		
		/*
			Opening
		*/
		var opening = function()
		{
			$myc.addClass('loaded');
			
			setScrollMagic();
			
			setTimeout
			(
				function()
				{
					$myc.removeClass('reset');
					$myc.addClass('opening');
				},
				200
			);
		};
		
		
		if (preloadImages.length == 0)
		{
			opening();
		}
		
		
		$myc.addClass('reset');
		$myc.removeClass('opening');
		
		
		
		/*
			ytmovie
		*/
		/*
		var ytmovie = new ytmovieClass();
		
		ytmovie.onApiReady = function()
		{
			ytmovie.setMovie
			(
				'youtube-player',
				'jNQXAC9IVRw',
				640,
				360
			);
		};
		
		$('#myc #stop-youtube').bind
		(
			'click',
			function()
			{
				ytmovie.stopMovie();
			}
		);
		*/
		
		
		
		/*
			spmenu
		*/
		$myc.find('#myc-spmenu .close-button a').bind
		(
			'click',
			function(e)
			{
				$('body').removeClass('spmenu-show');
				
				e.preventDefault();
				return false;
			}
		);
		
		$myc.find('#myc-menuopen a').bind
		(
			'click',
			function(e)
			{
				$myc.find('#myc-spmenu').scrollTop(0);
				$('body').addClass('spmenu-show');
				
				e.preventDefault();
				return false;
			}
		);
		
		
		
		/*
			news-search
		*/
		$myc.find('#myc-news-search .close-button a, #myc-news-search .bg').bind
		(
			'click',
			function(e)
			{
				$myc.find('#myc-news-search').removeClass('show');
				
				e.preventDefault();
				return false;
			}
		);
		
		$myc.find('#myc-news-search-button a').bind
		(
			'click',
			function(e)
			{
				$myc.find('#myc-news-search').addClass('show');
				
				e.preventDefault();
				return false;
			}
		);
		
		
		
		/*
			モーダルプレーヤ
		*/
		var ytmovieModal = new ytmovieClass();
		
		ytmovieModal.onApiReady = function()
		{
			var remodal = $myc.find('#myc-modal-video').remodal();
			var videoId = '';

			$myc.find('a.youtube-link').bind
			(
				'click',
				function(e)
				{
					/*
						クリックされた動画IDを保持
					*/
					videoId = $(this).attr('data-id');

					/*
						モーダルを開く
					*/
					remodal.open();

					e.preventDefault();
					return false;
				}
			);


			/*
				モーダルを開きかけたとき
			*/
			$(document).on
			(
				'opening',
				'#myc-modal-video',
				function()
				{
					
				}
			);


			/*
				モーダルを開いたとき
			*/
			$(document).on
			(
				'opened',
				'#myc-modal-video',
				function()
				{
					/*
						モーダル再生準備完了時
					*/
					ytmovieModal.onPlayerReady = function()
					{
						/*
							自動再生
						*/
						ytmovieModal.playMovie();
						
					};

					/*
						モーダル動画再生
					*/
					ytmovieModal.setMovie
					(
						'youtube-modal-player',
						videoId,
						640,
						360
					);
				}
			);


			/*
				モーダルを閉じかけたとき
			*/
			$(document).on
			(
				'closing',
				'#myc-modal-video',
				function()
				{
					/*
						モーダル動画停止
					*/
					ytmovieModal.stopMovie();
				}
			);


			/*
				モーダルを閉じたとき
			*/
			$(document).on
			(
				'closing',
				'#myc-modal-video',
				function()
				{
					/*
						モーダル動画削除
					*/
					ytmovieModal.closeMovie();
				}
			);
			
		};
		
		
		
		/*
			トップトピックス
		*/
		$myc.find('#myc-top-topics .open-button a, #myc-top-topics .close-button a').bind
		(
			'click',
			function(e)
			{
				if ($myc.hasClass('top-topics-hide'))
				{
					$myc.removeClass('top-topics-hide');
				}
				else
				{
					$myc.addClass('top-topics-hide');
				}
				
				e.preventDefault();
				return false;
			}
		);
		
		
		
		/*
			biography背景
		*/
		if ($('#myc.type-biography .section.history .trigger').length > 0)
		{
			new ScrollMagic.Scene
			(
				{
					triggerElement: $('#myc.type-biography .section.history .trigger')[0],
					triggerHook: 0
				}
			)
			.on
			(
				'enter',
				function()
				{
					$myc.addClass('history-bg-fix');
				}
			)
			.on
			(
				'leave',
				function()
				{
					$myc.removeClass('history-bg-fix');
				}
			)
			.addTo(controllerSmagic);
		};
		
		
		
		/*
			記事ジャケ写高さ調節
		*/
		$myc.find('#myc-contents .news-list.detail .list .item').each
		(
			function(index, element)
			{
				var $imageImg = $(element).find('.image img');
				var $data = $(element).find('.data');
				
				$data.css
				(
					'min-height',
					$imageImg.height()
				);
			}
		);
		
		
		
		/*
			donwnloadページ同意判定
		*/
		$('#myc.type-download .download-content .agree-area .agree').bind
		(
			'change',
			function(e)
			{
				if ($(this).prop('checked'))
				{
					$('#myc.type-download .download-content .common-button').removeClass('disabled');
				}
				else
				{
					$('#myc.type-download .download-content .common-button').addClass('disabled');
				}
			}
		);
		
		
	}
);