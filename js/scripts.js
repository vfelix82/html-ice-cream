
$(document).ready(function() {
  var flavorArray = [];
  $("form#flavor-form").submit(function(event) {
    var newFlavor = $("#input-flavor").val()
    flavorArray.push(newFlavor);
    console.log(flavorArray);
    $("li#flavorCity").text(flavorArray);
    event.preventDefault();
  });
});
