document.addEventListener('visibilitychange', () => {
    const isVisible = !document.hidden;
    if (isVisible) {
        document.querySelector('[rel="icon"]').href = '../assets/pictures/favicons/favicon-black-32x32.png';
    } else {
        document.querySelector('[rel="icon"]').href = '../assets/pictures/favicons/favicon-32x32.png';
    }
});