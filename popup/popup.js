document.addEventListener('DOMContentLoaded', async function () {
    const platformInfo = await browser.runtime.getPlatformInfo();
    if (platformInfo.os === 'android') {
        // На Android открываем собственную мобильную страницу
        browser.tabs.create({ url: browser.runtime.getURL('popup/mobile.html') });
        window.close();
        return;
    }

    const searchInput = document.getElementById('searchQuery');
    const searchButton = document.getElementById('searchButton');

    searchInput.placeholder = browser.i18n.getMessage("searchPlaceholder");
    searchButton.textContent = browser.i18n.getMessage("searchButtonText");

    function performSearch() {
        const query = searchInput.value.trim();
        if (query) {
            const searchUrl = `https://ya.ru/search/?text=${encodeURIComponent(query)}`;
            browser.tabs.create({ url: searchUrl });
            // window.close(); // Раскомментируйте, если хотите, чтобы popup закрывался после поиска
        }
    }

    if (searchButton) {
        searchButton.addEventListener('click', performSearch);
    }

    if (searchInput) {
        searchInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
        searchInput.focus();
    }
});