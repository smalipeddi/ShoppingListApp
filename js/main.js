$(document).ready(
  function(){
      $('.grocery').on('input', function(e) {
      e.preventDefault;
      var input=$(this);
      var is_name=input.val();
      var value = $(this).val();
    if ( value.length > 0 && value != "Default text" ) {
      input.removeClass("invalid").addClass("valid");
      //$('.error').hide();
      $('.text-warning').hide();
      $('.add_item').show();
    }
    else
    {
        input.removeClass("valid").addClass("invalid");
        $('.error').show();
        $('.text-warning').show();
        $('.add_item').hide();
        
      }
    })
    $('.add_item').click(function(e){
    var value = $('.grocery').val();
    var count = 1;
    //$('.final-list').append('<button class="mybutton" id = "no:'+count+'"> '+ value + '</button> <img  class="reject" id = "no:'+count+'"   src="images/cart_remove.png">');
    //count = count+1
   // $("#no:'+count+'").click(function(){
   // $('.mybutton').hide(8000);
   // $(this).hide();
   //});

   $('ol').append('<li>'+ value +' <img class="reject"  src="images/cart_remove.png"></li>');
     $('.final-list').on("click",".reject",function(){
       $(this).parent('li').remove();
    });
    e.preventDefault();
  })
  });

