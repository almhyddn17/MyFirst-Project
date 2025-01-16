// Ambil elemen hamburger dan navbar responsif
const hamburger = document.getElementById('hamburger-responsive');
const navbarResponsive = document.querySelector('.navbar-responsive');

// Ketika hamburger di-click, toggle navbar responsif
hamburger.addEventListener('click', (e) => {
    // Cegah event klik pada hamburger agar tidak menyebabkan klik di luar
    e.stopPropagation();
    navbarResponsive.classList.toggle('active');
});

// Klik di luar sidebar untuk menutupnya
document.addEventListener('click', function (e) {
    // Jika klik terjadi di luar navbar responsive dan hamburger
    if (!hamburger.contains(e.target) && !navbarResponsive.contains(e.target)) {
        navbarResponsive.classList.remove('active'); // Menutup sidebar
    }
});

// Ambil semua elemen dropdown
const dropdownItems = document.querySelectorAll('.nav-item-responsive > a');

// Menangani klik pada dropdown items
dropdownItems.forEach((item) => {
    item.addEventListener('click', function (e) {
        e.preventDefault(); // Mencegah link melakukan navigasi
        const parentItem = this.parentElement; // Ambil elemen parent li dari item

        // Toggle kelas active pada parent item untuk membuka/tutup dropdown
        parentItem.classList.toggle('active');
    });
});

// Menangani klik di luar dropdown untuk menutup dropdown jika terbuka
document.addEventListener('click', function (e) {
    dropdownItems.forEach((item) => {
        const parentItem = item.parentElement;
        // Jika klik di luar item dropdown dan parent dropdown
        if (!parentItem.contains(e.target)) {
            parentItem.classList.remove('active'); // Menutup dropdown
        }
    });
});
