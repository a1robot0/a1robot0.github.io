function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = Math.random() * window.innerHeight + 'px';
    star.style.left = Math.random() * window.innerWidth + 'px';
    star.style.width = Math.random() * 4 + 'px';
    star.style.height = star.style.width;
    document.body.appendChild(star);
    setTimeout(() => {
        star.remove();
    }, 5000);
}
setInterval(createStar, 100);
