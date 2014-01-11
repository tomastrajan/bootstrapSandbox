$(function() {
	// Setup drop down menu
	$('.dropdown-toggle').dropdown();

	// Fix input element click problem
	$('.dropdown-form-search').not('a').click(function( e ) {
		console.log($(this));
		e.stopPropagation()
	});
	
	var searchTabs = ['origin','document','task','metadata'];
	$( '.dropdown-form-search' ).delegate( 'a', 'click', function( event ) {
		$('.dropdown-form-search a[href="' + $(this).attr('href') + '"]').tab('show');
		console.log($(this).attr('href'));
		return false;
	});
});