$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();

    var item1 = $("input#item1").val();
    var item2 = $("input#item2").val();
    var item3 = $("input#item3").val();
    var item4 = $("input#item4").val();

    $(".item1").text(item1);
    $(".item2").text(item2);
    $(".item3").text(item3);
    $(".item4").text(item4);

    $(".output").show();
  })
})
