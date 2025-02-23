// Sample data for different sections
const contentData = {
    home: [],
    executors: [
        { name: 'Dynamic', icon: 'box', link: 'dynamic/' },
        { name: 'Velocity', icon: 'bolt', link: 'velocity/' },
        { name: 'Luna [unverified]', icon: 'moon', link: 'luna/' }
    ],
    externals: [
        { name: 'Horizon', icon: 'satellite', link: 'horizon/' },
        { name: "Thunder's External", icon: 'cloud', link: 'thunder/' }
    ],
    mobile: [
        { name: 'Nebula', icon: 'mobile', link: 'nebula/' }
    ],
    security: [],
    downloads: []
};

// Initialize the explorer
document.addEventListener('DOMContentLoaded', () => {
    loadSection('executors');
    setupNavigation();
});

function loadSection(section) {
    const grid = document.getElementById('contentGrid');
    grid.innerHTML = '';
    
    contentData[section].forEach(item => {
        const element = document.createElement('div');
        element.className = 'explorer-item';
        element.innerHTML = `
            <div class="item-icon"><i class="fas fa-${item.icon}"></i></div>
            <div class="item-name">${item.name}</div>
        `;
        element.addEventListener('click', () => handleItemClick(item));
        grid.appendChild(element);
    });

    document.getElementById('itemCount').textContent = contentData[section].length;
}

function setupNavigation() {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            const section = item.dataset.section;
            loadSection(section);
            updateBreadcrumbs(section);
        });
    });
}

function updateBreadcrumbs(section) {
    const breadcrumbs = document.getElementById('breadcrumbs');
    breadcrumbs.innerHTML = `
        <span class="breadcrumb-item">Haste</span>
        <span class="breadcrumb-item">${section.charAt(0).toUpperCase() + section.slice(1)}</span>
    `;
}

function handleItemClick(item) {
    // Add your navigation logic here
    console.log('Navigating to:', item.link);
    // window.location.href = item.link;
}
