function registerUser() {
            const userName = document.getElementById('userName').value;
            const phoneNumber = document.getElementById('phoneNumber').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (!userName || !phoneNumber || !email || !password || !confirmPassword) {
                alert('Please fill in all required fields.');
                return;
            }

            if (password !== confirmPassword) {
                alert('Passwords do not match.');
                return;
            }

            // Send registration data to server
            const registrationData = {
                userName,
                phoneNumber,
                email,
                password
            };

            // Simulate server response
            const response = {
                success: true,
                message: 'Registration successful.'
            };

            if (response.success) {
                alert(response.message);
                // Reset form
                document.getElementById('registrationForm').reset();
            } else {
                alert('Registration failed.');
            }
        }