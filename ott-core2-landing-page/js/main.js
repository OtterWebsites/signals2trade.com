// --- Consolidated JavaScript ---
document.addEventListener('DOMContentLoaded', (event) => {
    const ctaButton = document.getElementById('joinGroupButton');

    ctaButton.addEventListener('click', () => {
        console.log('CTA Button clicked! User is being redirected.');
        
        // IMPORTANT: Replace the placeholder below with your actual group invite link
        // For now, we're redirecting to the main page as an example
        window.location.href = '/';
    });
});
