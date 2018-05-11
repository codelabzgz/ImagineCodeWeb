$(".regular").slick({
	dots: true,
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	//lazyLoad: 'ondemand',

	centerMode: true,
  centerPadding: '0px',
  responsive: [
    {
      breakpoint: 850,
      settings: {
				autoplay: true,
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
				autoplay: true,
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1
      }
    }
  ]
});

$(".challenges").slick({
	dots: true,
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	//lazyLoad: 'ondemand',

	centerMode: true,
  centerPadding: '0px',
  responsive: [
    {
      breakpoint: 850,
      settings: {
				autoplay: true,
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
				autoplay: true,
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1
      }
    }
  ]
});

/*$('.carousel-multi').slick({
	centerMode: true,
	centerPadding: '60px',
	slidesToShow: 3,
	responsive: [
	  {
		breakpoint: 768,
		settings: {
		  arrows: false,
		  centerMode: true,
		  centerPadding: '40px',
		  slidesToShow: 3
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  arrows: false,
		  centerMode: true,
		  centerPadding: '40px',
		  slidesToShow: 1
		}
	  }
	]
  });

/*$('.carousel[data-type="multi"] .item').each(function() {
	var next = $(this).next();
	if (!next.length) {
		next = $(this).siblings(':first');
	}
	next.children(':first-child').clone().appendTo($(this));

	for (var i = 0; i < 2; i++) {
		next = next.next();
		if (!next.length) {
			next = $(this).siblings(':first');
		}

		next.children(':first-child').clone().appendTo($(this));
	}
});

setTimeout(function onTimeout(){
	function getSponsorImg(base){
		return "/assets/images/sponsors/" + base + ".png";
	}
	function assignSponsors(sponsors, divs, i){
		var len = divs.length;
		var spLen = sponsors.length;
		var current = i;
		for(var j = 0; j < len; j++){
			divs[j].attr("src", sponsors[current]);
			divs[j].animate({
				opacity: 0.25,
				left: 500,
				//height: "toggle"
			  }, 5000, function() {
				// Animation complete.
			  });
			current = (current + 1) % spLen;
		}
	}

	var sponsors = [
		getSponsorImg("trinit"),
		getSponsorImg("keensoft"),
		getSponsorImg("kepar")
	];

	var divs = [];
	var div_num = 4;
	var i = 0;
	
	for(var j = 0; j < div_num; j++){
		divs[j] = $('#carousel-img-' + j);
		divs[j].css("width", "100%");
	}
	assignSponsors(sponsors, divs, i);
	var x = setInterval(function() {
		i = (i + 1) % sponsors.length;
		assignSponsors(sponsors, divs, i);
	}, 10000);
  }, 250);*/