// sidebar-loader.js
class SidebarLoader {
    constructor() {
        this.sidebarContainer = document.getElementById('sidebar-container');
        this.sidebarHTML = `
            <!-- Overlay untuk mobile -->
            <div class="sidebar-overlay"></div>
            
            <!-- Sidebar -->
            <div class="sidebar">
  <div class="sidebar-header">
    <div class="logo-container">
      <!-- Ganti icon dengan gambar -->
      <img src="https://iili.io/KfDh0EN.png" alt="Logo" class="logo-image" />
      <h2 class="logo-text">CSS Dashboard</h2>
    </div>
  </div>

                
                <div class="sidebar-menu">
                    <div class="menu-item" data-page="index.html">
                        <div class="menu-icon">
                            <i class="fas fa-tachometer-alt"></i>
                        </div>
                        <span class="menu-text">Dashboard</span>
                    </div>
                    
                    <div class="menu-category">Reports</div>
                    <div class="menu-item has-submenu">
                        <div class="menu-icon">
                            <i class="fas fa-chart-line"></i>
                        </div>
                        <span class="menu-text">Reports</span>
                        <div class="submenu-indicator">
                            <i class="fas fa-chevron-right"></i>
                        </div>
                    </div>
                    <div class="submenu">
                        <div class="menu-item" data-page="pending-reports.html">
                            <div class="menu-icon">
                                <i class="fas fa-file-alt"></i>
                            </div>
                            <span class="menu-text">Pending Reports</span>
                        </div>
                        <div class="menu-item" data-page="solved-report.html">
                            <div class="menu-icon">
                                <i class="fas fa-check-circle"></i>
                            </div>
                            <span class="menu-text">Solved Reports</span>
                        </div>
                    </div>
                    
                    <div class="menu-category">Management</div>
                    <div class="menu-item has-submenu">
                        <div class="menu-icon">
                            <i class="fas fa-tools"></i>
                        </div>
                        <span class="menu-text">Maintenance</span>
                        <div class="submenu-indicator">
                            <i class="fas fa-chevron-right"></i>
                        </div>
                    </div>
                    <div class="submenu">
                        <div class="menu-item" data-page="maintenance.html">
                            <div class="menu-icon">
                                <i class="fas fa-clock"></i>
                            </div>
                            <span class="menu-text">Pending</span>
                        </div>
                        <div class="menu-item" data-page="completed-report.html">
                            <div class="menu-icon">
                                <i class="fas fa-check-double"></i>
                            </div>
                            <span class="menu-text">Completed</span>
                        </div>
                    </div>

                    <div class="menu-item has-submenu">
                        <div class="menu-icon">
                            <i class="fas fa-rocket"></i>
                        </div>
                        <span class="menu-text">Releases</span>
                        <div class="submenu-indicator">
                            <i class="fas fa-chevron-right"></i>
                        </div>
                    </div>
                    <div class="submenu">
                        <div class="menu-item" data-page="releases-newfeature.html">
                            <div class="menu-icon">
                                <i class="fas fa-cog"></i>
                            </div>
                            <span class="menu-text">New Features</span>
                        </div>
                        <div class="menu-item" data-page="releases-newgame.html">
                            <div class="menu-icon">
                                <i class="fas fa-gamepad"></i>
                            </div>
                            <span class="menu-text">New Games</span>
                        </div>
                    </div>
                    
                    <div class="menu-category">Performance</div>
<div class="menu-item has-submenu">
    <div class="menu-icon">
        <i class="fas fa-trophy"></i>  <!-- Icon Trophy for Performance -->
    </div>
    <span class="menu-text">KPI Points</span>
    <div class="submenu-indicator">
        <i class="fas fa-chevron-right"></i>  <!-- Down arrow for expanding submenu -->
    </div>
</div>
<div class="submenu">
    <div class="menu-item" data-page="kpi-css.html">
        <div class="menu-icon">
            <i class="fas fa-cogs"></i>  <!-- Gear icon for KPI CSS -->
        </div>
        <span class="menu-text">KPI CSS</span>
    </div>
    <div class="menu-item" data-page="ide-saran.html">
        <div class="menu-icon">
            <i class="fas fa-lightbulb"></i>  <!-- Lightbulb icon for Ideas & Suggestions -->
        </div>
        <span class="menu-text">Ideas & Suggestions</span>
    </div>
    <div class="menu-item" data-page="research.html">
        <div class="menu-icon">
            <i class="fas fa-chart-line"></i>  <!-- Line chart icon for Research -->
        </div>
        <span class="menu-text">Research</span>
    </div>
    <div class="menu-item" data-page="chat-response.html">
        <div class="menu-icon">
            <i class="fas fa-comments"></i>  <!-- Chat bubble icon for Chat Response -->
        </div>
        <span class="menu-text">Chat Response</span>
    </div>
</div>               
<div class="menu-category">Daily</div>

<div class="menu-item has-submenu">
    <div class="menu-icon">
        <i class="fas fa-clock"></i>  <!-- Icon Clock for Daily Routine -->
    </div>
    <span class="menu-text">Daily Routine</span>
    <div class="submenu-indicator">
        <i class="fas fa-chevron-right"></i>  <!-- Down arrow for expanding submenu -->
    </div>
</div>

<div class="submenu">
    <div class="menu-item" data-page="daily-tasks.html">
        <div class="menu-icon">
            <i class="fas fa-tasks"></i>  <!-- Icon Tasks for Daily Tasks -->
        </div>
        <span class="menu-text">Daily Tasks</span>
    </div>
    <div class="menu-item" data-page="task-history.html">
        <div class="menu-icon">
            <i class="fas fa-clipboard-list"></i>  <!-- Icon Clipboard List for Task History -->
        </div>
        <span class="menu-text">Task History</span>
    </div>
</div>


                    <div class="menu-item" data-page="weekly-meeting.html">
                        <div class="menu-icon">
                            <i class="fas fa-users"></i>
                        </div>
                        <span class="menu-text">Weekly Meetings</span>
                    </div>
                    <div class="menu-item" data-page="jadwalshift.html">
                        <div class="menu-icon">
                            <i class="fas fa-calendar-alt"></i>
                        </div>
                        <span class="menu-text">Shift Schedule</span>
                    </div>
                    
                    <div class="menu-item" data-page="pengaturan.html">
                        <div class="menu-icon">
                            <i class="fas fa-cog"></i>
                        </div>
                        <span class="menu-text">Setting</span>
                    </div>
                    <div class="menu-item" data-page="phishing.html">
                        <div class="menu-icon">
                            <i class="fas fa-shield-alt"></i>
                        </div>
                        <span class="menu-text">Phishing Alerts</span>
                    </div>

                    <div class="menu-item logout-btn" data-page="login.html">
                        <div class="menu-icon">
                            <i class="fas fa-sign-out-alt"></i>
                        </div>
                        <span class="menu-text">Logout</span>
                    </div>

                </div>
            </div>
        `;
        
        // CSS untuk sidebar
        this.injectStyles();
    }

    injectStyles() {
        const style = document.createElement('style');
        style.textContent = `
            /* Variabel CSS */
            :root {
                --primary-color: #4361ee;
                --secondary-color: #3f37c9;
                --accent-color: #4895ef;
                --text-color: #333;
                --text-light: #6c757d;
                --bg-color: #f8f9fa;
                --sidebar-bg: #ffffff;
                --sidebar-width: 280px;
                --border-radius: 8px;
                --transition-speed: 0.3s;
                --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                --menu-item-height: 50px;
                --category-spacing: 20px;
            }

            [data-theme="dark"] {
                --primary-color: #4895ef;
                --secondary-color: #4361ee;
                --accent-color: #3f37c9;
                --text-color: #f8f9fa;
                --text-light: #adb5bd;
                --bg-color: #121212;
                --sidebar-bg: #1e1e1e;
                --shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
            }

            /* CSS untuk menu toggle */
            .menu-toggle {
                display: none;
                position: fixed;
                top: 15px;
                left: 15px;
                z-index: 1100;
                background: var(--primary-color);
                color: white;
                border: none;
                border-radius: var(--border-radius);
                width: 40px;
                height: 40px;
                cursor: pointer;
                align-items: center;
                justify-content: center;
            }

            /* Sidebar Styles */
            .sidebar {
                position: fixed;
                top: 0;
                left: 0;
                height: 100vh;
                width: var(--sidebar-width);
                background: var(--sidebar-bg);
                box-shadow: var(--shadow);
                z-index: 1000;
                overflow-y: auto;
                display: flex;
                flex-direction: column;
                transition: transform var(--transition-speed) ease;
            }

            .sidebar-header {
                padding: 20px;
                border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            }

            .logo-container {
                display: flex;
                align-items: center;
                gap: 12px;
            }

            .logo-icon {
                font-size: 24px;
                color: var(--primary-color);
            }
                

            .logo-text {
                font-size: 18px;
                font-weight: 700;
                color: var(--text-color);
                margin: 0;
            }

            .sidebar-menu {
                flex: 1;
                padding: 15px;
                display: flex;
                flex-direction: column;
                gap: 5px;
            }

            .menu-category {
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 1px;
                color: var(--text-light);
                margin-top: var(--category-spacing);
                margin-bottom: 8px;
                padding: 0 15px;
                font-weight: 600;
            }

            .menu-item {
                display: flex;
                align-items: center;
                height: var(--menu-item-height);
                padding: 0 15px;
                border-radius: var(--border-radius);
                color: var(--text-color);
                cursor: pointer;
                transition: background-color var(--transition-speed);
            }

            .menu-item:hover {
                background-color: rgba(0, 0, 0, 0.05);
            }

            .menu-item.active {
                background-color: var(--primary-color);
                color: white;
            }

            .menu-item.active .menu-icon {
                color: white;
            }

            .menu-icon {
                width: 20px;
                height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 15px;
                color: var(--text-light);
                transition: color var(--transition-speed);
            }

            .menu-item:hover .menu-icon {
                color: var(--primary-color);
            }

            .menu-text {
                flex: 1;
                font-size: 14px;
                font-weight: 500;
            }

            .submenu-indicator {
                transition: transform var(--transition-speed);
            }

            .has-submenu.active .submenu-indicator {
                transform: rotate(90deg);
            }

            .submenu {
                max-height: 0;
                overflow: hidden;
                transition: max-height var(--transition-speed) ease;
                padding-left: 20px;
            }

            .submenu.active {
                max-height: 500px;
            }

            .submenu .menu-item {
                height: 45px;
                padding-left: 40px;
            }

            .logout-btn {
                margin-top: 0;
                border-top: none;
                padding-top: 0;
            }

            .logout-btn .menu-icon {
                color: #e74c3c;
            }

            .logout-btn:hover {
                background-color: rgba(231, 76, 60, 0.1);
            }

            .theme-toggle-container {
                margin-top: 20px;
                padding: 15px;
                border-top: 1px solid rgba(0, 0, 0, 0.1);
            }

            .theme-toggle {
                display: flex;
                align-items: center;
                width: 100%;
                padding: 12px 15px;
                background: rgba(0, 0, 0, 0.05);
                border: none;
                border-radius: var(--border-radius);
                color: var(--text-color);
                cursor: pointer;
                transition: background-color var(--transition-speed);
            }

            .theme-toggle:hover {
                background: rgba(0, 0, 0, 0.1);
            }

            .theme-toggle i {
                margin-right: 15px;
                font-size: 16px;
            }

            .theme-text {
                font-size: 14px;
                font-weight: 500;
            }

            /* Overlay untuk menutup sidebar saat diklik di luar */
            .sidebar-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
                z-index: 999;
                display: none;
            }

            .sidebar-overlay.active {
                display: block;
            }
.logo-image {
  width: 40px;
  height: 40px;
  border-radius: 50%; /* agar berbentuk lingkaran */
  object-fit: cover;
  margin-right: 10px;
}
            /* Tampilkan menu toggle hanya di mobile */
            @media (max-width: 768px) {
                .menu-toggle {
                    display: flex;
                }
                
                .sidebar {
                    transform: translateX(-100%);
                }
                
                .sidebar.active {
                    transform: translateX(0);
                }
                
                .sidebar-overlay.active {
                    display: block;
                }
            }
        `;
        
        document.head.appendChild(style);
    }

    load() {
        if (this.sidebarContainer) {
            this.sidebarContainer.innerHTML = this.sidebarHTML;
            this.initializeSidebarFunctionality();
            this.restoreSidebarState();
            this.setActiveMenuItem();
        }
    }

    initializeSidebarFunctionality() {
        // Toggle sidebar functionality
        const menuToggle = document.querySelector('.menu-toggle');
        const sidebar = document.querySelector('.sidebar');
        const overlay = document.querySelector('.sidebar-overlay');
        
        if (menuToggle && sidebar && overlay) {
            menuToggle.addEventListener('click', () => {
                sidebar.classList.toggle('active');
                overlay.classList.toggle('active');
            });
            
            overlay.addEventListener('click', () => {
                sidebar.classList.remove('active');
                overlay.classList.remove('active');
            });
            
            // Tutup sidebar saat menu item diklik di mobile
            const menuItems = document.querySelectorAll('.menu-item[data-page]');
            menuItems.forEach(item => {
                item.addEventListener('click', () => {
                    if (window.innerWidth <= 768) {
                        sidebar.classList.remove('active');
                        overlay.classList.remove('active');
                    }
                });
            });
        }
        
        // Handle window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                const sidebar = document.querySelector('.sidebar');
                const overlay = document.querySelector('.sidebar-overlay');
                if (sidebar) sidebar.classList.remove('active');
                if (overlay) overlay.classList.remove('active');
            }
        });

        // Submenu toggle - tanpa animasi
        const hasSubmenuItems = document.querySelectorAll('.has-submenu');
        hasSubmenuItems.forEach((item, index) => {
            item.addEventListener('click', (e) => {
                if (e.target.classList.contains('submenu-toggle')) return;
                const submenu = item.nextElementSibling;
                
                // Toggle tanpa animasi
                if (submenu.classList.contains('active')) {
                    submenu.classList.remove('active');
                    submenu.style.maxHeight = '0';
                } else {
                    submenu.classList.add('active');
                    submenu.style.maxHeight = '500px';
                }
                
                item.classList.toggle('active');
                this.saveSidebarState();
            });
        });

        // Menu navigation
        const menuItems = document.querySelectorAll('.menu-item[data-page]');
        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                const pageUrl = item.getAttribute('data-page');
                if (pageUrl === 'login.html') {
                    localStorage.removeItem('isLoggedIn');
                    localStorage.removeItem('sidebarState');
                    localStorage.removeItem('theme');
                } else {
                    this.saveSidebarState();
                }
                window.location.href = pageUrl;
            });
        });

        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        this.loadTheme();
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        this.updateThemeIcon(newTheme);
    }

    updateThemeIcon(theme) {
        const themeIcon = document.getElementById('themeToggle')?.querySelector('i');
        const themeText = document.querySelector('.theme-text');
        if (themeIcon) {
            themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
        if (themeText) {
            themeText.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
        }
    }

    loadTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        this.updateThemeIcon(savedTheme);
    }

    setActiveMenuItem() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const menuItems = document.querySelectorAll('.menu-item[data-page]');
        menuItems.forEach(item => item.classList.remove('active'));
        menuItems.forEach(item => {
            const pageUrl = item.getAttribute('data-page');
            if (pageUrl === currentPage) {
                item.classList.add('active');
                const parentSubmenu = item.closest('.submenu');
                if (parentSubmenu) {
                    parentSubmenu.classList.add('active');
                    parentSubmenu.style.maxHeight = '500px';
                    const parentMenuItem = parentSubmenu.previousElementSibling;
                    if (parentMenuItem && parentMenuItem.classList.contains('has-submenu')) {
                        parentMenuItem.classList.add('active');
                    }
                }
            }
        });
    }

    saveSidebarState() {
        const sidebarState = [];
        document.querySelectorAll('.has-submenu').forEach((item, index) => {
            const submenu = item.nextElementSibling;
            if (submenu && submenu.classList.contains('active')) {
                sidebarState.push(index);
            }
        });
        localStorage.setItem('sidebarState', JSON.stringify(sidebarState));
    }

    restoreSidebarState() {
        const sidebarState = JSON.parse(localStorage.getItem('sidebarState') || '[]');
        document.querySelectorAll('.has-submenu').forEach((item, index) => {
            const submenu = item.nextElementSibling;
            if (sidebarState.includes(index)) {
                item.classList.add('active');
                if (submenu) {
                    submenu.classList.add('active');
                    submenu.style.maxHeight = '500px';
                }
            }
        });
    }
}

// Inisialisasi
document.addEventListener('DOMContentLoaded', () => {
    const sidebarLoader = new SidebarLoader();
    sidebarLoader.load();
});