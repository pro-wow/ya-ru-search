// /* Android */
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('searchForm');
    const input = document.getElementById('searchQuery');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const query = input.value.trim();
        if (query) {
            const url = `https://ya.ru/search/?text=${encodeURIComponent(query)}`;
            window.open(url, '_blank');
        }
    });
    input.focus();
});