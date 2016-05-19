var aleatorio =  Math.floor(Math.random()*40);

$("#caja").css("background-image", "url('./fotos/peru/"+peru[aleatorio].image+"')")

$( document ).ready(function() {
    $("#selector").change(function() {
      var pais =$(this).val();
      if (pais == 1) {
        aleatorio =  Math.floor(Math.random()*33);
        $("#caja").css("background-image", "url('./fotos/peru/"+peru[aleatorio].image+"')")
      } else if (pais == 3) {
        aleatorio =  Math.floor(Math.random()*33);
        $("#caja").css("background-image", "url('./fotos/mexico/"+mexico[aleatorio].image+"')")
      }
    })
});
