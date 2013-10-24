// Generated by CoffeeScript 1.6.3
(function() {
  var $contactForm, $tab, data;

  $(function() {});

  $('#myTab a').on('click', function(e) {
    e.preventDefault();
    return $(this).tab('show');
  });

  $('#myTab a[href="#profile"]').tab('show');

  $('#myTab a:first').tab('show');

  $('#myTab a:last').tab('show');

  $('#myTab li:eq(2) a').tab('show');

  $tab = $('.nav-tab li');

  data = {
    first: "A",
    second: "H"
  };

  $contactForm = $('#contact-form');

  console.log($contactForm);

  $contactForm.on('click', '.submit-btn', function(event) {
    "click";
    var info;
    event.preventDefault();
    return info = $contactForm.serialize();
  });

  $contactForm.each(function() {
    return this.reset();
  });

  $.post('/sendemail', info, function(data) {
    if (data['success']) {
      return $('#success-message').removeClass('hidden');
    }
  });

}).call(this);
