//Check off specific to-dos by clicking

$("ul").on("click", "li", function () {

    $(this).toggleClass("completed");


});

//click on x to delete To-do

$('ul').on("click", "span", function (event) {

    $(this).parent().fadeOut(500, function () {

        $(this).remove();

    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function (event){

    if(event.which === 13){
    //grabs new text from input
      var todoText = $(this).val();
      $(this).val("");
      //create new li and add to UL
      $('ul').append("<li><span><i class='fas fa-trash'></i></span>" + todoText + "</li>");
    }

});

$(".fa-plus").click(function(){

    $("input[type='text']").fadeToggle();

})