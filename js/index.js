/// <reference types="../@types/jquery"/>



$('#message').on('input',function(){
        var remaining = 100 - $(this).val().length;
        $('#count').text(remaining);
    
})

$('.item').on('click',function () {


        $('.item-details').slideUp();
        if (!$(this).next('.item-details').is(':visible')) {
        $(this).next().slideDown()
        }
})


$('.open').on('click',function(){
        $('.side-bar').animate({width : 'toggle',padding:'toggle'},1200)
})



$('.fa-close').on('click',function(){
        $('.side-bar').animate({width : 'toggle',padding:'toggle'},1200)
})



window.onload = function() {
   
        countDownToTime("9 feb 2025 12:00:00");
      }
    
      function countDownToTime(count) {
      
            let birthDay = new Date(count);
        birthDay = (birthDay.getTime()/1000);
    
        let now = new Date();
        now = (now.getTime()/1000);
    
        timeDifference = (birthDay- now);
            
       let days = Math.floor( timeDifference / (24*60*60));
       let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
       let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
       let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))
    
    
        $(".days").html(`${days} D`);
        $(".hours").html(`${hours} h`);
        $(".minutes").html(`${ mins } m`);
        $('.seconds').html(`${ secs} s`)
    
      
        setInterval(function() {  countDownToTime(count); }, 1000);
      }