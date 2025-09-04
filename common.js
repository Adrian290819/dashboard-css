// common.js - Fungsi umum untuk semua halaman
const PAGE_MAPPING = {
    'Dashboard': 'index.html',
    'Pending Reports': 'pending-reports.html',
    'Solved Reports': 'solved-reports.html',
    'Pending': 'maintenance.html',
    'Completed': 'completed-report.html',
    'New Features': 'new-features.html',
    'New Games': 'new-games.html',
    'Ideas & Suggestions': 'ideas-suggestions.html',
    'Research': 'research.html',
    'Chat Response': 'chat-response.html',
    'Pending Discussions': 'pending-discussions.html',
    'Weekly Meetings': 'weekly-meetings.html',
    'Domain List': 'domain-list.html',
    'Shift Schedule': 'shift-schedule.html',
    'Phishing Alerts': 'phishing-alerts.html',
    'Logout': 'login.html'
};

// ========== NAVIGATION FUNCTIONS ==========
function navigateToPage(pageName) {
    const pageUrl = PAGE_MAPPING[pageName];
    if (pageUrl) {
        if (pageName === 'Logout') {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('sidebarState');
            localStorage.removeItem('theme');
        }
        window.location.href = pageUrl;
    } else {
        console.warn(`No page mapping found for: ${pageName}`);
        window.location.href = 'index.html';
    }
}

// ========== SIDEBAR MANAGEMENT ==========
function saveSidebarState() {
    const sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;
    
    const sidebarState = {
        isCollapsed: sidebar.classList.contains('collapsed'),
        activeSubmenus: []
    };

    document.querySelectorAll('.has-submenu.active').forEach(item => {
        const menuText = item.querySelector('.menu-text');
        if (menuText) {
            sidebarState.activeSubmenus.push(menuText.textContent.trim());
        }
    });

    localStorage.setItem('sidebarState', JSON.stringify(sidebarState));
}

function loadSidebarState() {
    const savedState = localStorage.getItem('sidebarState');
    if (!savedState) return;

    try {
        const sidebarState = JSON.parse(savedState);
        const sidebar = document.querySelector('.sidebar');
        
        if (sidebar) {
            if (sidebarState.isCollapsed) {
                sidebar.classList.add('collapsed');
            } else {
                sidebar.classList.remove('collapsed');
            }
        }

        // Reset semua submenu
        document.querySelectorAll('.has-submenu, .submenu').forEach(item => {
            item.classList.remove('active');
        });

        // Set submenu yang aktif
        if (Array.isArray(sidebarState.activeSubmenus)) {
            sidebarState.activeSubmenus.forEach(menuText => {
                const menuItems = document.querySelectorAll('.has-submenu');
                menuItems.forEach(item => {
                    const menuLabel = item.querySelector('.menu-text');
                    if (menuLabel && menuLabel.textContent.trim() === menuText) {
                        item.classList.add('active');
                        const submenu = item.nextElementSibling;
                        if (submenu && submenu.classList.contains('submenu')) {
                            submenu.classList.add('active');
                        }
                    }
                });
            });
        }
    } catch (e) {
        console.error('Error loading sidebar state:', e);
    }
}

function setupSidebarNavigation() {
    const menuItems = document.querySelectorAll('.menu-item:not(.has-submenu)');
    const submenuItems = document.querySelectorAll('.submenu .menu-item');
    const hasSubmenuItems = document.querySelectorAll('.has-submenu');
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    // Main menu items
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const pageName = this.getAttribute('data-page') || this.querySelector('.menu-text')?.textContent;
            if (pageName) navigateToPage(pageName);
        });
    });

    // Submenu items
    submenuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const pageName = this.getAttribute('data-page') || this.querySelector('.menu-text')?.textContent;
            if (pageName) navigateToPage(pageName);
        });
    });

    // Submenu toggle
    hasSubmenuItems.forEach(item => {
        const submenuToggle = item.querySelector('.submenu-toggle');
        
        if (submenuToggle) {
            submenuToggle.addEventListener('click', function(e) {
                e.stopPropagation();
                e.preventDefault();
                
                const submenu = item.nextElementSibling;
                item.classList.toggle('active');
                
                if (submenu && submenu.classList.contains('submenu')) {
                    submenu.classList.toggle('active');
                }
                
                saveSidebarState();
            });
        }
        
        // Navigasi untuk menu utama
        item.addEventListener('click', function(e) {
            if (!e.target.classList.contains('submenu-toggle')) {
                const pageName = this.querySelector('.menu-text')?.textContent;
                if (pageName) navigateToPage(pageName);
            }
        });
    });

    // Mobile menu toggle
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            sidebar.classList.toggle('active');
            saveSidebarState();
        });
    }

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 992 && sidebar && 
            !sidebar.contains(event.target) && 
            menuToggle && !menuToggle.contains(event.target) &&
            sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
            saveSidebarState();
        }
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992 && sidebar) {
            sidebar.classList.remove('active');
            saveSidebarState();
        }
    });
}

// ========== THEME MANAGEMENT ==========
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;
    
    const themeIcon = themeToggle.querySelector('i');
    if (themeIcon) {
        if (theme === 'dark') {
            themeIcon.className = 'fas fa-sun';
        } else {
            themeIcon.className = 'fas fa-moon';
        }
    }
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

// ========== NOTIFICATION SYSTEM ==========
function showNotification(message, type = 'success') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    });

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;

    // Add to body
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);

    // Remove after delay
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// ========== UTILITY FUNCTIONS ==========
function formatDate(dateString) {
    if (!dateString) return 'N/A';
    
    try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return 'N/A';
        
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    } catch (error) {
        console.error('Error formatting date:', error);
        return 'N/A';
    }
}

function formatDisplayDateTime(dateString) {
    if (!dateString) return 'N/A';
    
    try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return 'N/A';
        
        const options = { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        return date.toLocaleDateString('en-US', options);
    } catch (error) {
        console.error('Error formatting date:', error);
        return 'N/A';
    }
}

function debounce(func, wait) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

// ========== INITIALIZATION ==========
function initializeApp() {
    loadTheme();
    loadSidebarState();
    setupSidebarNavigation();
    
    // Theme toggle event
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function(e) {
            e.preventDefault();
            toggleTheme();
        });
    }
}

// Auto-initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}