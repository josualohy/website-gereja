// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};

// Klik di luar elemen
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');

document.addEventListener('click', function (e) {
    if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
    }

    if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    showAutoNotification();
});

function showAutoNotification() {
    var notificationContainer = document.getElementById('notification-container');
    var notification = document.getElementById('notification');

    notificationContainer.classList.remove('hidden');
    notification.classList.remove('exit');
    notification.classList.add('enter');

    setTimeout(function () {
        notification.classList.remove('enter');
        notification.classList.add('exit');
        setTimeout(function () {
            notificationContainer.classList.add('hidden');
        }, 500);
    }, 2000);
}
