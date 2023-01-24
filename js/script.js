$(document).ready(()=>{

    //navbar
    $('#toggle__btn').click(()=>{
        $('nav ul').toggleClass('active')
        $('#toggle__btn i').toggleClass('fa-x')
    })
    //navbar

    //carousel start
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                
            },
            600:{
                items:3,
            },
            1000:{
                items:4,

            },
            1400:{
                items:5
            }
        }
    })
    
    $('#navigate__right').click(()=>{
        $('.owl-carousel').trigger('next.owl.carousel')
    })
    $('#navigate__left').click(()=>{
        $('.owl-carousel').trigger('prev.owl.carousel')
    })
    //carousel end

    //scroll to next section
    $('.arrow-container').click(()=>{
        $('.section__2')[0].
        scrollIntoView({behavior:'smooth'});
        
    })
    //scroll to next section
})