(function() {
  var Selector = '[data-toggle="map"]';


  /** JavaScriptを書かずにmapとmarkerを表示する */
  $(document).ready(function() {
    $(Selector).each(function() {

      /** mapの初期化をする */
      var lat = $(this).data('lat');
      var lng = $(this).data('lng');
      var zoom = $(this).data('zoom');

      map = new google.maps.Map(this, {
        center: {lat: lat, lng: lng},
        zoom: zoom
      });

    });
  })

})();
