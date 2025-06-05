# Yandex Search for Firefox

[![Firefox Add-on](https://img.shields.io/badge/Firefox_Add--on-Get_it_on_AMO-orange?style=for-the-badge&logo=firefox-browser)](https://addons.mozilla.org/addon/YandexSearchEngineExtension-strogino) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT) 
This Firefox browser extension seamlessly integrates Yandex Search into your Browse experience. It allows you to set Yandex as your default search engine, use a convenient keyword for quick searches, and access Yandex search directly from a toolbar popup.

This extension is designed for both Desktop and Android versions of Firefox, offering a tailored experience:
* **On Desktop:** Full integration with Firefox's search system (default engine, keyword search) AND a toolbar popup for quick searches.
* **On Android:** A toolbar popup for quick Yandex searches (note: Android does not support programmatic addition of search engines to the system list via extensions).

## Features

* **Adds Yandex Search (Desktop):** Easily add Yandex as a search engine option in Firefox.
* **Sets as Default (Desktop):** Sets Yandex as your default search engine upon installation.
* **Keyword Search (Desktop):** Use the `@ya` keyword in the address bar for quick Yandex searches (e.g., `@ya what is the weather like?`).
* **Toolbar Popup Search (Desktop & Android):** Click the extension's icon in the toolbar to open a popup window for instant Yandex searches.
* **Search Suggestions:** Provides search suggestions from Yandex as you type (in the address bar on Desktop).
* **Localized:** Available in English and Russian (defaults to Russian).

## Installation

### Recommended: From Firefox Add-ons (AMO)

The easiest way to install is from the official Mozilla Add-ons website:

1.  Go to [Yandex Search on AMO](https://addons.mozilla.org/addon/YandexSearchEngineExtension-strogino) 2.  Click "Add to Firefox".
3.  Follow the on-screen prompts.

### Manually (for development or testing)

1.  **Download**:
    * Clone this repository: `git clone https://github.com/pro-wow/ya-ru-search.git`
    * OR [Download the latest release `.xpi` file](https://github.com/pro-wow/ya-ru-search/releases)
2.  **Install**:
    * **Temporary Installation (for testing from local files):**
        1.  Open Firefox.
        2.  Navigate to `about:debugging#/runtime/this-firefox`.
        3.  Click "Load Temporary Add-on...".
        4.  Browse to the cloned repository directory and select the `manifest.json` file.
    * **From `.xpi` file:**
        1.  Open Firefox.
        2.  Navigate to `about:addons`.
        3.  Click the gear icon (Tools for all add-ons) and select "Install Add-on From File...".
        4.  Select the downloaded `.xpi` file.
        *(Note: For regular Firefox versions, installing unverified `.xpi` files might be restricted due to signing requirements. The temporary add-on method is best for local development.)*

## How to Use

* **Desktop:**
    * **Default Search:** If Yandex was set as your default, simply type your queries into the Firefox address bar.
    * **Keyword Search:** Type `@ya` followed by a space and your search query into the address bar (e.g., `@ya latest news`).
    * **Toolbar Popup:** Click the Yandex icon in the toolbar, type your query in the popup, and press Enter or click "Search".
* **Android:**
    * **Toolbar Popup:** Tap the Yandex icon (usually accessible via the browser's menu > Add-ons or on the toolbar if configured), type your query in the popup, and tap "Search".

## Localization

This extension supports the following languages:

* English (en)
* Russian (ru) - Default

The extension will automatically use the language that matches your browser's UI language.

## Building from Source (for developers)

1.  Clone the repository:
    ```bash
    git clone [https://github.com/pro-wow/ya-ru-search.git](https://github.com/pro-wow/ya-ru-search.git)
    cd ya-ru-search
    ```
2.  To package the extension into an `.xpi` file:
    * Navigate to the root directory of the cloned repository.
    * Select all files and folders *inside* the root (i.e., `manifest.json`, `icons/`, `popup/`, `_locales/`).
    * Create a ZIP archive from these selected items.
    * Rename the resulting `.zip` file to `.xpi` (e.g., `yandex_search_ext.xpi`).

## Author

**Strogino**
* Homepage: [https://github.com/pro-wow/ya-ru-search](https://github.com/pro-wow/ya-ru-search)
* GitHub Repository: [https://github.com/pro-wow/ya-ru-search](https://github.com/pro-wow/ya-ru-search)

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the [GitHub repository](https://github.com/pro-wow/ya-ru-search).

## License

This project is licensed under the [MIT License](LICENSE.md). ```
