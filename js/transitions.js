// Create js/transitions.js
document.addEventListener('DOMContentLoaded', () => {
    // Add transition class to body
    document.body.classList.add('page-transition');
    
    // Handle all internal links
    document.querySelectorAll('a').forEach(link => {
        if(link.href.includes(window.location.hostname)) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                document.body.classList.add('exit-transition');
                
                setTimeout(() => {
                    window.location.href = link.href;
                }, 500); // Match animation duration
            });
        }
    });
});

// Handle browser back/forward
window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        document.body.classList.remove('exit-transition');
        document.body.classList.add('page-transition');
    }
});
