$(function(){

            $('.roadmap__slider').slick({
            slidesToShow: 6,
            slidesToScroll: 1,            
            focusOnSelect: true,            
            variableWidth: true,
            draggable: false, 
            waitForAnimate: false,
            prevArrow: '<button type="button" class="slick-arrow slick-prev" alt="1"><img src="images/roadmap-arrow-active.svg" alt=""></button>',
            nextArrow: '<button type="button" class="slick-arrow slick-next" alt="2"><img src="images/roadmap-arrow-active.svg" alt=""></button>'
            });

            // $('.slick-arrow').on('click', function () {
            //     $('.slick-current img').animate({
            //         'width': '30px',
            //         'hight': '30px'
            //     });
        
            // });
        

            $('.team-slider__inner').slick({
                slidesToShow: 5,
                slidesToScroll: 1,  
                infinite: true,  
                draggable: false, 
                waitForAnimate: false,            
                prevArrow: '<button type="button" class="slick-arrow slick-prev" alt="1"><img src="images/team-slider-arrow-left.svg" alt=""></button>',
                nextArrow: '<button type="button" class="slick-arrow slick-next" alt="2"><img src="images/team-slider-arrow-left.svg" alt=""></button>'
                });

                $('.team-btn').on('click', function(){
                    $('.team-slider__inner').slick('goTo',0);
                });
              
                $('.advisors-btn').on('click', function(){
                    $('.team-slider__inner').slick('goTo',5);
                });

                
               
            new WOW().init();
            

            var mixer = mixitup('.team-slider__inner');

});