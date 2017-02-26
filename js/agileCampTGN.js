jQuery(window).load(function() {
	jQuery('#content').center();
});
jQuery(window).resize(function() {
	jQuery('#content').center();
});

jQuery.fn.center = function () {
	var window_h = Math.max(0, ((jQuery(window).height() - jQuery(this).outerHeight()) / 2 ) + jQuery(window).scrollTop());
	var content_h = jQuery('.logotype').height();
  if ( window_h > content_h ) {
		this.css("position","absolute");
		this.css("top", window_h + "px");
	} else {
		this.css("position","relative");
		this.css("top","0");

	}
	return this;
}
