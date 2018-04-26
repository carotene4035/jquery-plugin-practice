(function($) {
  /** jquery objectにtestというmethodが追加される */
  $.fn.test = function(option) {
    /** thisはjquery object */
    return this.each(function() {
    });
    var func = function(){};
  }
})(jQuery);


(function( $ ){

  /** methods自体はpluginの外部に持っている */
  var methods = {
    init : function( options ) {
      console.log('aaaaa');
      return this;
    },
    show : function( ) {
      // IS
    },
    hide : function( ) {
      // GOOD
    },
    update : function( content ) {
      // !!!
    }
  };

  $.fn.tooltip = function( method ) {
    // Method calling logic
    if ( methods[method] ) {
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
    }
  };

})( jQuery );

// calls the init method
$('div').tooltip();

// calls the init method
$('div').tooltip({
  foo : 'bar'
});
