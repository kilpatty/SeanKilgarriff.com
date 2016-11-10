$(function() {

	$('#hair').on('click',function(){
		$("#hair-modal-fade").addClass("active");
			ga('send', {
  				hitType: 'event',
  				eventCategory: 'Modal',
  				eventAction: 'viewed',
  				eventLabel: 'Hair'
			});
	});

	$('#glasses').on('click',function(){
		$("#glasses-modal-fade").addClass("active");
			ga('send', {
  				hitType: 'event',
  				eventCategory: 'Modal',
  				eventAction: 'viewed',
  				eventLabel: 'Glasses'
			});
	});

	$('#beard').on('click',function(){
		$("#beard-modal-fade").addClass("active");
			ga('send', {
  				hitType: 'event',
  				eventCategory: 'Modal',
  				eventAction: 'viewed',
  				eventLabel: 'Beard'
			});
	});

	// Remove the modal from any screen
	$(".modal-fade-screen, .modal-close, .modal-inner").on("click", function() {
		$(".modal-fade-screen").removeClass("active");
	});



});
