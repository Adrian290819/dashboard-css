// user-profile.js

/**
 * Default profil pengguna
 */
const DEFAULT_PROFILE = {
    name: 'Nama Masing Masing',
    role: 'Customer Service Support',
    image: 'https://iili.io/Fpiva7S.png'
};

/**
 * Mendapatkan data profil dari localStorage
 * @returns {Object} - Objek profil pengguna
 */
function getUserProfileFromStorage() {
    return {
        name: localStorage.getItem('adminName') || DEFAULT_PROFILE.name,
        role: localStorage.getItem('adminRole') || DEFAULT_PROFILE.role,
        image: localStorage.getItem('adminProfileImage') || DEFAULT_PROFILE.image
    };
}

/**
 * Memperbarui elemen profil di halaman
 * @param {Object} profile - Objek berisi nama, peran, dan URL gambar
 */
function updateProfileElements(profile) {
    const { name, role, image } = profile;

    // Update gambar profil
    document.querySelectorAll('.user-profile img, .profile-img').forEach(img => {
        img.src = image;
        img.alt = `${name} Profile`;
    });

    // Update nama pengguna
    document.querySelectorAll('.user-info h4, .profile-name').forEach(el => {
        el.textContent = name;
    });

    // Update peran pengguna
    document.querySelectorAll('.user-info p, .profile-role').forEach(el => {
        el.textContent = role;
    });
}

/**
 * Memuat dan menampilkan profil pengguna
 */
function loadUserProfile() {
    const profile = getUserProfileFromStorage();
    updateProfileElements(profile);
}

/**
 * Setup listener untuk perubahan data di localStorage
 */
function setupProfileChangeListener() {
    window.addEventListener('storage', (e) => {
        const keysToWatch = ['adminName', 'adminRole', 'adminProfileImage'];
        if (keysToWatch.includes(e.key)) {
            loadUserProfile();
        }
    });
}

// Inisialisasi saat DOM siap
document.addEventListener('DOMContentLoaded', () => {
    loadUserProfile();
    setupProfileChangeListener();
});
