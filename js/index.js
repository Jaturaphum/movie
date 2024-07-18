document.addEventListener('DOMContentLoaded', () => {
    const movieItems = document.querySelectorAll('.movie-item');

    movieItems.forEach(item => {
        item.addEventListener('click', () => {
            const movieTitle = item.querySelector('h3').textContent;
            alert(`คุณเลือกดูหนังเรื่อง: ${movieTitle}`);
        });
    });
});
