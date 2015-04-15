(function($) {

  var Veggies = new spredfast.Poller();

  Veggies.poll({
    limit: 5,
    frequency: 15
  }, function(veggies){
    console.log(veggies);
  })

}(jQuery));