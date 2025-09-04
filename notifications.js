// notifications-integration.js

// Fungsi untuk menginisialisasi integrasi notifikasi dengan semua menu
function initializeNotificationIntegration() {
    console.log('Menginisialisasi integrasi notifikasi...');
    
    // 1. Integrasi dengan menu navigasi
    integrateWithNavigation();
    
    // 2. Integrasi dengan form
    integrateWithForms();
    
    // 3. Integrasi dengan tombol aksi
    integrateWithButtons();
    
    // 4. Integrasi dengan AJAX/Fetch operations
    integrateWithAjax();
    
    // 5. Membuat event global untuk notifikasi
    createGlobalNotificationEvent();
    
    // 6. Menghubungkan dengan state perubahan halaman (jika menggunakan SPA)
    integrateWithPageState();
    
    console.log('Integrasi notifikasi selesai.');
}

// 1. INTEGRASI DENGAN MENU NAVIGASI
function integrateWithNavigation() {
    // Menghubungkan notifikasi ke menu navigasi utama
    const navMenuItems = document.querySelectorAll('nav a, .menu-item, [role="menuitem"]');
    
    navMenuItems.forEach(menuItem => {
        // Menyimpan teks asli untuk notifikasi
        if (!menuItem.dataset.originalText) {
            menuItem.dataset.originalText = menuItem.textContent.trim();
        }
        
        // Menambahkan event listener untuk klik
        menuItem.addEventListener('click', function(e) {
            const menuText = this.dataset.originalText;
            const isExternal = this.hostname !== window.location.hostname;
            const isHashLink = this.getAttribute('href')?.startsWith('#');
            
            // Jangan tampilkan notifikasi untuk link external atau hash links
            if (!isExternal && !isHashLink) {
                notifyInfo(`Membuka: ${menuText}`);
            }
            
            // Untuk demo, kita preventDefault agar tidak navigasi sesungguhnya
            // Di production, hapus baris berikut
            if (!this.getAttribute('href') || this.getAttribute('href') === '#') {
                e.preventDefault();
                notifyInfo(`Menu "${menuText}" diklik`);
            }
        });
        
        // Menambahkan event listener untuk hover (opsional)
        menuItem.addEventListener('mouseenter', function() {
            // Bisa digunakan untuk preview notifikasi atau tooltip
        });
    });
    
    console.log(`Terintegrasi dengan ${navMenuItems.length} menu navigasi`);
}

// 2. INTEGRASI DENGAN FORM
function integrateWithForms() {
    const allForms = document.querySelectorAll('form');
    
    allForms.forEach(form => {
        // Menambahkan event listener untuk submit
        form.addEventListener('submit', function(e) {
            // Validasi form
            const isValid = validateForm(this);
            
            if (!isValid) {
                e.preventDefault();
                return false;
            }
            
            // Tampilkan notifikasi
            const formName = this.getAttribute('name') || this.getAttribute('id') || 'Form';
            notifyInfo(`Memproses ${formName}...`);
        });
        
        // Notifikasi untuk field changes (opsional)
        const importantFields = form.querySelectorAll('input[required], select[required], textarea[required]');
        importantFields.forEach(field => {
            field.addEventListener('blur', function() {
                if (this.value.trim() === '') {
                    notifyWarning(`Field ${this.name} harus diisi`);
                }
            });
        });
    });
    
    console.log(`Terintegrasi dengan ${allForms.length} form`);
}

// Fungsi validasi form
function validateForm(form) {
    let isValid = true;
    let firstErrorField = null;
    
    form.querySelectorAll('[required]').forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            if (!firstErrorField) {
                firstErrorField = field;
            }
            // Highlight field error
            field.style.borderColor = '#dc3545';
            
            // Tambahkan event untuk menghilangkan highlight ketika diperbaiki
            field.addEventListener('input', function() {
                if (this.value.trim()) {
                    this.style.borderColor = '';
                }
            });
        }
    });
    
    if (!isValid) {
        notifyError('Harap isi semua field yang diperlukan');
        if (firstErrorField) {
            firstErrorField.focus();
        }
    }
    
    return isValid;
}

// 3. INTEGRASI DENGAN TOMBOL AKSI
function integrateWithButtons() {
    // Tombol dengan class tertentu
    const actionButtons = document.querySelectorAll('.btn-action, [data-action]');
    
    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.dataset.action || 
                          this.textContent.trim() || 
                          this.getAttribute('aria-label') || 
                          'tindakan';
            
            notifyInfo(`Melakukan: ${action}`);
            
            // Simulasi proses async
            if (this.dataset.async === 'true') {
                simulateAsyncAction(action);
            }
        });
    });
    
    // Tombol khusus dengan tipe tertentu
    const deleteButtons = document.querySelectorAll('.btn-delete, [data-type="delete"]');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.dataset.target || 'item';
            
            // Konfirmasi sebelum menghapus
            if (confirm(`Apakah Anda yakin ingin menghapus ${target}?`)) {
                notifyWarning(`Menghapus ${target}...`);
                // Logika penghapusan di sini
            } else {
                notifyInfo('Penghapusan dibatalkan');
            }
        });
    });
    
    console.log(`Terintegrasi dengan ${actionButtons.length + deleteButtons.length} tombol aksi`);
}

// Simulasi aksi async
function simulateAsyncAction(action) {
    const duration = 1000 + Math.random() * 2000; // 1-3 detik
    
    setTimeout(() => {
        if (Math.random() > 0.2) { // 80% sukses
            notifySuccess(`${action} berhasil`);
        } else {
            notifyError(`${action} gagal`);
        }
    }, duration);
}

// 4. INTEGRASI DENGAN AJAX/FETCH
function integrateWithAjax() {
    // Override fetch global untuk otomatis menampilkan notifikasi
    const originalFetch = window.fetch;
    
    window.fetch = function(...args) {
        const url = args[0];
        const options = args[1] || {};
        const method = options.method || 'GET';
        
        // Tampilkan notifikasi untuk request yang penting
        if (method !== 'GET') {
            notifyInfo(`Memproses ${method} request...`);
        }
        
        return originalFetch.apply(this, args)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status} - ${response.statusText}`);
                }
                return response;
            })
            .then(response => {
                // Notifikasi untuk non-GET requests yang sukses
                if (method !== 'GET') {
                    notifySuccess(`${method} request berhasil`);
                }
                return response;
            })
            .catch(error => {
                notifyError(`Request gagal: ${error.message}`);
                throw error;
            });
    };
    
    console.log('Terintegrasi dengan AJAX/Fetch operations');
}

// 5. EVENT GLOBAL UNTUK NOTIFIKASI
function createGlobalNotificationEvent() {
    // Membuat custom event untuk notifikasi
    function dispatchNotificationEvent(message, type = NOTIFICATION_TYPES.INFO) {
        const event = new CustomEvent('showNotification', {
            detail: { message, type }
        });
        window.dispatchEvent(event);
    }

    // Mendengarkan event notifikasi
    window.addEventListener('showNotification', function(e) {
        showNotification(e.detail.message, e.detail.type);
    });
    
    // Ekspos fungsi global untuk memicu notifikasi dari mana saja
    window.dispatchNotification = dispatchNotificationEvent;
    
    console.log('Event global notifikasi telah dibuat');
}

// 6. INTEGRASI DENGAN STATE PERUBAHAN HALAMAN (SPA)
function integrateWithPageState() {
    // Jika menggunakan framework SPA seperti React, Vue, dll.
    // kita bisa mendeteksi perubahan rute dan menampilkan notifikasi
    
    // Simulasi untuk history API (pushState)
    const originalPushState = history.pushState;
    history.pushState = function(state, title, url) {
        notifyInfo(`Navigasi ke: ${title || url}`);
        return originalPushState.apply(history, arguments);
    };
    
    // Juga untuk replaceState
    const originalReplaceState = history.replaceState;
    history.replaceState = function(state, title, url) {
        notifyInfo(`Mengganti halaman: ${title || url}`);
        return originalReplaceState.apply(history, arguments);
    };
    
    // Event untuk tombol back/forward
    window.addEventListener('popstate', function() {
        notifyInfo('Navigasi menggunakan history');
    });
    
    console.log('Terintegrasi dengan state perubahan halaman');
}

// 7. FUNGSI UTILITY TAMBAHAN
function showNotificationForDuration(message, type, duration) {
    const notification = showNotification(message, type);
    
    // Hapus notifikasi setelah durasi tertentu
    setTimeout(() => {
        if (notification.parentNode) {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }
    }, duration);
    
    return notification;
}

// 8. FUNGSI UNTUK MENGHUBUNGKAN DENGAN ELEMENT SPESIFIK
function connectNotificationToElement(selector, eventType, message, type = NOTIFICATION_TYPES.INFO) {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach(element => {
        element.addEventListener(eventType, function() {
            showNotification(message, type);
        });
    });
    
    return elements.length;
}

// 9. INISIALISASI OTOMATIS SAAT DOKUMEN SIAP
document.addEventListener('DOMContentLoaded', function() {
    // Tunggu sebentar untuk memastikan semua element telah dimuat
    setTimeout(initializeNotificationIntegration, 100);
});

// 10. EKSPOS FUNGSI KE GLOBAL SCOPE
window.initializeNotificationIntegration = initializeNotificationIntegration;
window.connectNotificationToElement = connectNotificationToElement;
window.showNotificationForDuration = showNotificationForDuration;

console.log('Sistem integrasi notifikasi telah dimuat');