  $(document).ready(function(){
 
    $('#demo-carousel-auto').carousel();
 
  setInterval(function() {
 
    $('#demo-carousel-auto').carousel('next');
 
  }, 2000);   
 
   


  });