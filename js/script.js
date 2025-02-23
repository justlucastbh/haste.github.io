document.addEventListener('DOMContentLoaded', () => {
    const rows = document.querySelectorAll('.file-table tr');
    
    rows.forEach(row => {
        row.addEventListener('click', () => {
            const fileName = row.querySelector('td:first-child').textContent.trim();
            const fileType = row.querySelector('td:last-child').textContent;
            alert(`Selected: ${fileName}\nType: ${fileType}`);
        });
    });
});
