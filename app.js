(function() {

  var Selector = '[data-toggle="map"]';

  var DataKey = {
    LAT: 'lat',
    LNG: 'lng',
    ZOOM: 'zoom'
  };

  var TMap = function(element) {
    this.markers = [];
    this.initMap(element);
    this.initMarker(element);
  };

  /** mapの初期化を行う */
  TMap.prototype.initMap = function(element) {
    var lat = $(element).data(DataKey.LAT);
    var lng = $(element).data(DataKey.LNG);
    var zoom = $(element).data(DataKey.ZOOM);

    this.map = new google.maps.Map(element, {
      center: {lat: lat, lng: lng},
      zoom: zoom
    });
  }

  TMap.prototype.initMarker = function(element) {
    var mapId = $(element).attr('id');
    var self = this;
    $('[data-target="' + mapId + '"').each(function() {
      var lat = $(this).data(DataKey.LAT);
      var lng = $(this).data(DataKey.LNG);

      self.markers.push(
        new google.maps.Marker({
          position: {lat: lat, lng: lng},
          map: self.map,
        })
      );
    });
  }

  /** JavaScriptを書かずにmapとmarkerを表示する */
  $(document).ready(function() {
    $(Selector).each(function() {
      /** それぞれのelementに対してmapの初期化を行い、オブジェクトとして持たせる */
      $(this).data('t.map', new TMap(this));
    });
  });
})();
