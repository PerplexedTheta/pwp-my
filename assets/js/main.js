document.addEventListener("DOMContentLoaded", event => {
    // notifications area
    const notifications = document.getElementById('notifications');

    // permalink copy
    const content = document.getElementById('content');
    const title = content.getElementsByTagName('h1')[0];
    const link = title.getElementsByTagName('a')[0];

    link.addEventListener('click', event => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'instant' });

        notifications.innerText = 'Copied to clipboard';
        notifications.style.display = 'block';
        notifications.focus();

        setTimeout(() => {
            notifications.innerText = '';
            notifications.style.display = 'none';
        }, 5000);

        return navigator.clipboard.writeText(window.location.href);
    });
});