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

// $.post("/data", data, function(received){

// })

