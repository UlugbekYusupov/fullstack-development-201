const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');

if (togglePassword && passwordInput) {
    togglePassword.addEventListener('click', function() {
        const isPassword = passwordInput.getAttribute('type') === 'password';
        passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
        togglePassword.textContent = isPassword ? 'Hide' : 'Show';
        togglePassword.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
    });
}

passwordInput.addEventListener('input', function() {
    const password = passwordInput.value;
    const strength = calculatePasswordStrength(password);
    displayPasswordStrength(strength);
});

function calculatePasswordStrength(password) {
    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[@$!%*?&]/.test(password)) strength++;

    return strength;
}

function displayPasswordStrength(strength) {
    const strengthIndicator = document.getElementById('strengthIndicator');
    const strengthText = ['Very Weak', 'Weak', 'Moderate', 'Strong', 'Very Strong'];
    const index = Math.min(strength, strengthText.length - 1);

    const strengthClasses = ['strength-very-weak', 'strength-weak', 'strength-moderate', 'strength-strong', 'strength-very-strong'];

    strengthIndicator.textContent = `Password Strength: ${strengthText[index]}`;
    strengthIndicator.classList.remove(...strengthClasses);
    strengthIndicator.classList.add(strengthClasses[index]);
}