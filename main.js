$('#sumbit').click(function() {
    $.ajax({
       method: 'POST',
       url: 'https://formsubmit.co/ajax/9andyN@gmail.com',
       dataType: 'json',
       accepts: 'application/json',
       data: {
           name: ".message_form",
           message: "hello"
       },
       success: (data) => console.log(data),
       error: (err) => console.log(err)
    });
   });