$(function(){

$('#myTab a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
})

$('#myTab a[href="#profile"]').tab('show'); // Select tab by name
$('#myTab a:first').tab('show'); // Select first tab
$('#myTab a:last').tab('show'); // Select last tab
$('#myTab li:eq(2) a').tab('show'); // Select third tab (0-indexed)

var $tab = $('.nav-tab li')

var data = {
		first: "A",
		second: "H"
}

$contactForm = $('#contact-form')
console.log($contactForm)

$contactForm.on('click', '.submit-btn', function(event){
	"click"
    event.preventDefault();
 	var info = $contactForm.serialize();
	$contactForm.each(function(){
        this.reset();
    });
    $.post('/sendemail', info, function(data){
        if(data['success']){
                $('#success-message').removeClass('hidden');
        }
    });
});


});
