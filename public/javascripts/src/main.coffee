$ ->

    $('#myTab a').on 'click', (e) ->
        e.preventDefault();
        $(this).tab('show');


    $('#myTab a[href="#profile"]').tab('show'); # Select tab by name
    $('#myTab a:first').tab('show'); # Select first tab
    $('#myTab a:last').tab('show'); # Select last tab
    $('#myTab li:eq(2) a').tab('show'); # Select third tab (0-indexed)

    $tab = $('.nav-tab li')


    $contactForm = $('#contact-form')
    console.log($contactForm)

    $contactForm.on 'submit', (event) ->
        "click"
        event.preventDefault();
        info = $contactForm.serialize();

        $contactForm.each () ->
            this.reset();
            
        $.post '/sendemail', info, (err, data) ->
            if(data['success'])
                $('#success-message').removeClass('hidden');
            else if(data['failure'])
                $('#success-message').removeClass.html("Please Complete the Form")