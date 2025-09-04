// darkmode-transparent.js
class TransparentDarkMode {
    constructor() {
        this.themeToggle = document.getElementById('themeToggle');
        this.init();
    }

    init() {
        if (this.themeToggle) {
            this.applyTransparentStyle();
            this.addHoverEffects();
        }
    }

    applyTransparentStyle() {
        // Terapkan style transparan pada tombol Dark Mode
        this.themeToggle.style.backgroundColor = 'transparent';
        this.themeToggle.style.border = '1px solid rgba(0, 0, 0, 0.1)';
        this.themeToggle.style.opacity = '0.7';
        this.themeToggle.style.transition = 'opacity 0.3s ease, background-color 0.3s ease';
        
        // Sesuaikan teks agar sesuai dengan background transparan
        this.themeToggle.querySelector('.theme-text').style.color = 'var(--text-color)';
        
        // Untuk tema gelap, sesuaikan border
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            this.themeToggle.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        }
    }

    addHoverEffects() {
        // Efek saat hover
        this.themeToggle.addEventListener('mouseenter', () => {
            this.themeToggle.style.opacity = '1';
            this.themeToggle.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
        });

        this.themeToggle.addEventListener('mouseleave', () => {
            this.themeToggle.style.opacity = '0.7';
            this.themeToggle.style.backgroundColor = 'transparent';
        });
    }
}

// Inisialisasi setelah DOM siap
document.addEventListener('DOMContentLoaded', () => {
    // Tunggu sidebar loader selesai
    setTimeout(() => {
        new TransparentDarkMode();
    }, 100);
});

// Juga inisialisasi saat tema berubah
document.addEventListener('themeChanged', () => {
    setTimeout(() => {
        new TransparentDarkMode();
    }, 50);
});