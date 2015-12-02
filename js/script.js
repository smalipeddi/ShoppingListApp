$(document).ready(function(){
    //if input field in clicked, means focussed
    $('#grocery').focus(function(){
      //clear its text 
       $( "#grocery" ).val('');
    });
    //set global variable for counter
    var idCounter=1;

    //if add button is clicked
    $("#add").click(function(){

        //get the html text entered in teh input field
        var val = $("#grocery").val();

        //append that text to the 
        $("ul").append ("<br/>"+ "<div>"+"<input  type='checkbox' id='chk_" + idCounter + "'value='" + val + "' />"+"<label for='chk_" + idCounter + "'>" +"<span>" + " </span>"  + val + "</label></div>");
           idCounter ++;                                                                                             



        
    });

    $("#remove").click(function(){
         //check if a checkbox is checked 
         if($('[type="checkbox"]').is(":checked")){
            //find its parent elements
            var dom_element = $('[type="checkbox"]').parent();
            console.log(dom_element);
             //traverse through each element in its parent tree 
            for (var i = 0; i < dom_element.length ; i++)
            {
              //Find which checkbox is checked
              if(dom_element[i].childNodes[0].checked == true){
                  //remove only node form tree              
                  dom_element[i].remove();
              }
            }

           }else 
           {

           }
       
           return false;
    });

    
});


