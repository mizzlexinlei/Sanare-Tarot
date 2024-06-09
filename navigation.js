document.querySelectorAll('.scrollButton').forEach(button => {
    button.addEventListener('click', function() {
        const targetId = this.getAttribute('target');
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});