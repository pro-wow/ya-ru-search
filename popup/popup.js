// /* Android */
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchQuery');
    const searchButton = document.getElementById('searchButton');
          searchInput.placeholder = browser.i18n.getMessage("searchPlaceholder");
          searchButton.textContent = browser.i18n.getMessage("searchButtonText");
    function performSearch() {
        const query = searchInput.value.trim();
        if (query) {
            const searchUrl = `https://ya.ru/search/?text=${encodeURIComponent(query)}`;
            browser.tabs.create({ url: searchUrl });

             window.close(); 
        }
    }

    if (searchButton) { // Добавлена проверка на случай ошибки загрузки HTML
        searchButton.addEventListener('click', performSearch);
    }

    if (searchInput) { // Добавлена проверка
        searchInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
        // Автофокус на поле ввода
        searchInput.focus();
    }
});
