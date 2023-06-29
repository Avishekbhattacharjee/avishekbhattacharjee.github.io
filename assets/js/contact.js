$(document).ready(function() {
    // Contact Form Submission
    $('#contact-form').submit(function(e) {
      e.preventDefault();
  
      // Get form values
      var name = $('#cname').val();
      var email = $('#cemail').val();
      var services = $('#services').val();
      var message = $('#cmessage').val();
  
      // Replace with your EmailJS User ID
      var userId = 'CVZoudmVi-WlMdbC2';
      // Replace with your EmailJS email template ID
      var templateId = 'template_5syk0nu';
  
      // Send email using EmailJS
      emailjs.send('service_gwblkjr', templateId, {
        name: name,
        email: email,
        services: services,
        message: message
      }, userId)
      .then(function(response) {
        // Email sent successfully
        $('#success-message').removeClass('d-none');
        $('#contact-form')[0].reset();
      }, function(error) {
        // Error sending email
        $('#error-message').removeClass('d-none');
        console.error('Error sending email:', error);
      });
    });
  });
  