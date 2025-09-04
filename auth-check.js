// auth-check.js
function checkAuthStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const currentPage = window.location.pathname.split('/').pop();
    
    // Jika belum login dan mencoba mengakses halaman selain login
    if (isLoggedIn !== 'true' && currentPage !== 'login.html') {
        window.location.href = 'login.html';
        return false;
    }
    
    // Jika sudah login dan mencoba mengakses halaman login
    if (isLoggedIn === 'true' && currentPage === 'login.html') {
        window.location.href = 'index.html';
        return false;
    }
    
    return true;
}

// Panggil fungsi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    checkAuthStatus();
});