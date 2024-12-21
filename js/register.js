document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const fullNameInput = document.getElementById('fullName');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const togglePassword = document.getElementById('togglePassword');
    const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
    const errorMessageDiv = document.getElementById('errorMessage');

    // Toggle password visibility
    togglePassword.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        togglePassword.classList.toggle('fa-eye');
        togglePassword.classList.toggle('fa-eye-slash');
    });

    // Toggle confirm password visibility
    toggleConfirmPassword.addEventListener('click', () => {
        const type = confirmPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        confirmPasswordInput.setAttribute('type', type);
        toggleConfirmPassword.classList.toggle('fa-eye');
        toggleConfirmPassword.classList.toggle('fa-eye-slash');
    });

    // Handle form submission
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Clear previous error messages
        errorMessageDiv.style.display = 'none';

        const fullName = fullNameInput.value.trim();
        const username = usernameInput.value.trim();
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        // Validation
        if (!fullName || !username || !password || !confirmPassword) {
            showError('Please fill in all fields.');
            return;
        }

        if (password !== confirmPassword) {
            showError('Passwords do not match.');
            return;
        }

        if (password.length < 6) {
            showError('Password must be at least 6 characters long.');
            return;
        }

        try {
            // Get existing teachers from localStorage
            const teachers = JSON.parse(localStorage.getItem('teachers')) || [];

            // Check if username already exists
            if (teachers.some(teacher => teacher.username === username)) {
                showError('Username already exists. Please choose another.');
                return;
            }

            // Create new teacher object
            const newTeacher = {
                id: Date.now().toString(),
                fullName,
                username,
                password,
                createdAt: new Date().toISOString()
            };

            // Add to teachers array
            teachers.push(newTeacher);
            localStorage.setItem('teachers', JSON.stringify(teachers));

            // Show success message and redirect
            alert('Registration successful! Please login to continue.');
            window.location.href = '../index.html';

        } catch (error) {
            showError('An error occurred during registration. Please try again.');
            console.error('Registration error:', error);
        }
    });

    function showError(message) {
        errorMessageDiv.textContent = message;
        errorMessageDiv.style.display = 'block';
    }
});