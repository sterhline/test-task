$(function(){

            $('.roadmap__slider').slick({
            slidesToShow: 6,
            slidesToScroll: 1,            
            variableWidth: true,
            draggable: false, 
            waitForAnimate: false,
            prevArrow: '<button type="button" class="slick-arrow slick-prev" alt="1"><img src="images/roadmap-arrow-active.svg" alt=""></button>',
            nextArrow: '<button type="button" class="slick-arrow slick-next" alt="2"><img src="images/roadmap-arrow-active.svg" alt=""></button>',
            responsive: [                
             {
               breakpoint: 805,
               settings: "unslick"                    
               }
             
             
           ]
            });
            

            $('.team-slider__inner').slick({
                slidesToShow: 5,
                slidesToScroll: 1,  
                infinite: true,  
                draggable: false, 
                waitForAnimate: false,            
                prevArrow: '<button type="button" class="slick-arrow slick-prev" alt="1"><img src="images/team-slider-arrow-left.svg" alt=""></button>',
                nextArrow: '<button type="button" class="slick-arrow slick-next" alt="2"><img src="images/team-slider-arrow-left.svg" alt=""></button>',
                responsive: [                
                     {
                      breakpoint: 1070,
                      settings: {                 
                        slidesToShow: 4                        
                      }
                    },
                    {
                      breakpoint: 870,
                      settings: {                 
                        slidesToShow: 3                       
                      }
                    },
                    {
                      breakpoint: 680,
                      settings: {                 
                        slidesToShow: 2,
                         arrows: false                      
                      }
                    }
                    ,{
                      breakpoint: 435,
                      settings: {                 
                        slidesToShow: 1  ,
                        arrows: false ,
                        centerMode: true ,
                                                                
                      }
                    }
                  ]
                });

                $('.team-btn').on('click', function(){
                    $('.team-slider__inner').slick('goTo',0);
                });
              
                $('.advisors-btn').on('click', function(){
                    $('.team-slider__inner').slick('goTo',5);
                });             
                  
            new WOW().init();
            
            $('.menu-btn').on('click', function(){
              $('.container__aside').toggleClass('active');
            });

            var mixer = mixitup('.team-slider__inner');

});

