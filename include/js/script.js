---
---

document.addEventListener("DOMContentLoaded", event => {
    // notifications area
    var timeoutHandle = setTimeout;

    // permalink copy
    const content = document.getElementById('content');
    const title = content.getElementsByTagName('h1')[0];
    const link = title.getElementsByTagName('a')[0];

    link.addEventListener('click', event => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'instant' });

        window.clearTimeout(timeoutHandle);
        timeoutHandle = notificationHandler('Copied to clipboard');

        return navigator.clipboard.writeText(window.location.href);
    });

    // easter egg
    const perception = document.getElementById('perception');

    perception.addEventListener('click', event => {
        event.preventDefault();

        window.clearTimeout(timeoutHandle);
        timeoutHandle = notificationHandler('Warp drive active');

        return 0;
    });
});

// handle popups
const notificationHandler = (text => {
    const notifications = document.getElementById('notifications');
    notifications.innerText = text;
    notifications.style.display = 'block';
    notifications.focus();

    return setTimeout(() => {
        notifications.innerText = '';
        notifications.style.display = 'none';
    }, 5000);
});
