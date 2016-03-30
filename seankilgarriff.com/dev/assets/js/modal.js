$(function() {
	$('#hair').on('click',function(){
		$("#hair-modal-fade").addClass("active");
	});
	$('#glasses').on('click',function(){
		$("#glasses-modal-fade").addClass("active");
	});
	$('#beard').on('click',function(){
		$("#beard-modal-fade").addClass("active");
	});

	// Remove the modal from any screen
	$(".modal-fade-screen, .modal-close, .modal-inner").on("click", function() {
		$(".modal-fade-screen").removeClass("active");
	});



});
