document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchQuery');
    const searchButton = document.getElementById('searchButton');

    // Установка локализованных строк, если __MSG__ в HTML не сработало для каких-то атрибутов
    // title браузера уже должен быть установлен через __MSG_popupTitle__ в HTML
    // searchInput.placeholder = browser.i18n.getMessage("searchPlaceholder");
    // searchButton.textContent = browser.i18n.getMessage("searchButtonText");


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
