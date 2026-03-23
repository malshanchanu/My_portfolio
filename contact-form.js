document.addEventListener('DOMContentLoaded', function() {
    console.log('Contact form handler loaded');

    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    
    if (!contactForm) {
        console.error('Contact form not found!');
        return;
    }

    // EmailJS configuration
    const PUBLIC_KEY = 'y7aIDeQq4NtSm8SmF';
    const SERVICE_ID = 'service_8nwiamm';
    const TEMPLATE_ID = 'template_6uqdr44';

    // Initialize EmailJS
    try {
        emailjs.init(PUBLIC_KEY);
        console.log('EmailJS initialized successfully');
    } catch (error) {
        console.error('Failed to initialize EmailJS:', error);
        showMessage('Failed to initialize email service. Please try again later.', 'error');
        return;
    }

    // Create or get form message element
    let formMessage = document.getElementById('formMessage');
    if (!formMessage) {
        formMessage = document.createElement('div');
        formMessage.id = 'formMessage';
        formMessage.style.display = 'none';
        contactForm.appendChild(formMessage);
    }

    // Handle form submission
    contactForm.addEventListener('submit', function(e) {
        // Prevent default form submission and page refresh
        e.preventDefault();
        e.stopPropagation();
        
        console.log('Form submitted');

        // Get form values
        const name = document.getElementById('name')?.value.trim() || '';
        const email = document.getElementById('email')?.value.trim() || '';
        const subject = document.getElementById('subject')?.value.trim() || '';
        const message = document.getElementById('message')?.value.trim() || '';

        // Validate form
        if (!name || !email || !subject || !message) {
            showMessage('Please fill in all fields.', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }

        // Disable button and show sending state
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="bx bx-loader-alt bx-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Show sending message
        showMessage('Sending your message...', 'info');

        // Prepare template parameters
        const templateParams = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
            to_name: 'Chanuka Malshan',
            reply_to: email
        };

        console.log('Sending email with params:', templateParams);

        // Send email via EmailJS
        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
            .then(function(response) {
                console.log('Email sent successfully!', response);
                showMessage('✓ Message sent successfully! Thank you for contacting me.', 'success');
                contactForm.reset();
                
                // Optional: Clear form message after 5 seconds
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
            })
            .catch(function(error) {
                console.error('Failed to send email:', error);
                
                // More specific error message
                let errorMsg = 'Failed to send message. ';
                if (error.text) {
                    errorMsg += error.text;
                } else {
                    errorMsg += 'Please check your internet connection and try again.';
                }
                
                showMessage(errorMsg, 'error');
            })
            .finally(function() {
                // Restore button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            });
    });

    // Function to show messages
    function showMessage(text, type) {
        const formMessage = document.getElementById('formMessage');
        if (!formMessage) return;

        // Set message text
        formMessage.innerHTML = text;
        formMessage.style.display = 'block';
        formMessage.style.padding = '12px';
        formMessage.style.margin = '15px 0';
        formMessage.style.borderRadius = '8px';
        formMessage.style.fontSize = '14px';
        formMessage.style.transition = 'all 0.3s ease';

        // Style based on message type
        switch(type) {
            case 'success':
                formMessage.style.color = '#4CAF50';
                formMessage.style.backgroundColor = 'rgba(76, 175, 80, 0.1)';
                formMessage.style.border = '1px solid #4CAF50';
                break;
            case 'error':
                formMessage.style.color = '#f44336';
                formMessage.style.backgroundColor = 'rgba(244, 67, 54, 0.1)';
                formMessage.style.border = '1px solid #f44336';
                break;
            case 'info':
                formMessage.style.color = '#2196F3';
                formMessage.style.backgroundColor = 'rgba(33, 150, 243, 0.1)';
                formMessage.style.border = '1px solid #2196F3';
                break;
            default:
                formMessage.style.color = '#4da6ff';
                formMessage.style.backgroundColor = 'rgba(77, 166, 255, 0.1)';
                formMessage.style.border = '1px solid #4da6ff';
        }
    }

    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});