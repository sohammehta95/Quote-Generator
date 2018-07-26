//jQuery

$(document).ready(function (){

  $type = $('select[name="type"');
  $name = $('input[name="item-name"');
  $quan = $('input[name="quan"');
  $amount = $('input[name="amount"');  
  $country = $('select[name="country"');
  $size = $('select[name="size"');
  

 
  $('#button').click(function () {

    //Type
    var type_icon; 
    if ($type.val() == 'elec') {
      type_icon = "<i class='fa fa-mobile'></i>";
    } else if ($type.val() == 'clot') {
      type_icon = "<i class='fa fa-shopping-cart'></i>";
    } else if ($type.val() == 'game') {
      type_icon = "<i class='fa fa-anchor'></i>";
    } else if ($type.val() == 'other') {
      type_icon = "<i class='fa fa-question-circle'></i>";
    }
    
    //Name
    var prodName = $name.val();

    //Quantity
    var quantity = parseInt($quan.val());
    
    //Amount
    var price = parseInt($amount.val());
    price = price * quantity;

    //Tax
    var tax = 0.0875  * price;
    tax = parseFloat(tax.toFixed(2));

    //Country
    var shipping = 0;
    var cName = "";
    switch($country.val())
    {
      case "CH":
        shipping = 50;
        cName = "China";
        break;

      case "IND":
        shipping = 75;
        cName = "India";
        break;

      case "UK":
        shipping = 30;
        cName = "United Kingdom";
        break;

      case "FR":
        shipping = 80;
        cName = "France";
        break;

    }

    //Size
    var sizeCost = 0;
    var sizeName= "";
    switch($size.val())
    {
      case "s":
        sizeCost = 10;
        sizeName = "small";
        break;

      case "m":
        sizeCost = 20;
        sizeName = "medium";
        break;

      case "l":
        sizeCost = 30;
        sizeName = "large";
        break;

    }
    var totalShip = shipping + sizeCost;

    //Service fee
    var service = 50;

    //Grand Total
    var grandTotal = price + tax + totalShip + service;
    /////////////////Adding to table starts here //////////////////////


      
      $("#q1").remove(); $("#q2").remove(); $("#q3").remove(); $("#q4").remove();
      $("#q5").remove(); $("#q6").remove(); $("#q7").remove(); $("#q8").remove();

      //grandTotal
      $("table tr:first").after('<tr id="q1" class="rightTable"><td >'+"Grand Total: "+'</td><td>$'+grandTotal+'</td></tr>');

      //Service Fee
      $("table tr:first").after('<tr id="q2" class="rightTable"><td >'+"Service Fee: "+'</td><td class="underlinecell">$'+service+'</td></tr>');

      //Shipping
      var bigstring = "Cost of shipping a " + sizeName + " package to " + cName + ": ";
      $("table tr:first").after('<tr id="q3" class="rightTable"><td >'+ bigstring +'</td><td>$'+totalShip+'</td></tr>');

      //Tax
      $("table tr:first").after('<tr id="q4" class="rightTable"><td >'+"Aprox. NY Tax (8.875%): "+'</td><td>$'+tax+'</td></tr>');

      //Original Price
      $("table tr:first").after('<tr id="q5" class="rightTable"><td >'+"Product Cost x "+quantity+' Quantity: '+'</td><td>$'+price+'</td></tr>');

      $("table tr:first").after('<tr id="q6" ><td colspan="2" class="center">'+" <u> Estimated Cost</u> "+'</td></tr>');

      $("table tr:first").after('<tr id="q7"><td colspan="2" class="center">'+"Type:   "+type_icon+'</td></tr>'); //Second
      $("table tr:first").after('<tr id="q8"><td colspan="2" class="center">'+"Product:   "+prodName+'</td></tr>'); //Product
      
      //$("table tr:first").after('<tr><td>'+type_icon+'</td><td>'+prodName+'</td><td>'+prodName+'</td><td>'+prodName+'</td><td class="green">$'+price+'</td></tr>');

      //$amount.val(null);
      //$name.val(null);

      $("#if-empty").remove();



  });
  
});