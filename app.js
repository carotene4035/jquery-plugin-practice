(function() {

  var Selector = '[data-toggle="map"]';

  var DataKey = {
    LAT: 'lat',
    LNG: 'lng',
    ZOOM: 'zoom'
  };

  /** コンストラクタ */
  var TMap = function() {

    /** private variables */
    var TMap = function(element) {
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


    /** コンストラクタを返す */
    return TMap;
  }();


  /** JavaScriptを書かずにmapとmarkerを表示する */
  $(document).ready(function() {
    $(Selector).each(function() {
      /** それぞれのelementに対してmapの初期化を行う */
      new TMap(this);
    });
  });

})();
