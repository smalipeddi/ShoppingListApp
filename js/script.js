$(document).ready(function(){
   
    $('#grocery').focus(function(){
       $( "#grocery" ).val('');
    });
    $('#grocery').keypress(
        function(){
          console.log("key presses is " + $('#grocery').val() );
    });

    $('.cart').click(
        function(){

          $("ol").append("<li>" +$( "#grocery" ).val() + "</li>");
                     
          $('.add_remove').append("<div> <i class='fa fa-trash fa-2x cart'></i> </div>");
        });
});
