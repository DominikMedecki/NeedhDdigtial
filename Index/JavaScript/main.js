// FILTERING
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        // Update active button
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Show/hide based on category AND visibility
        document.querySelectorAll('.project-card').forEach(card => {
            const category = card.getAttribute('data-category');
            const isHidden = card.classList.contains('hidden');

            if ((filter === 'all' || category === filter) && !isHidden) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Toggles nav visibility
document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");

    navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});