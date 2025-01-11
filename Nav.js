(function () {
    // Карта кнопок с действиями
    const keyActions = {
        '1': () => navigateTo('history'),  // История
        '2': () => navigateTo('main'),    // Главная
        '3': () => navigateTo('movies'),  // Фильмы
        '4': () => navigateTo('tv'),      // Сериалы
        '5': () => navigateTo('anime'),   // Аниме
        '6': () => navigateTo('favorites'), // Избранное
        '7': () => navigateTo('bookmarks'), // Закладки
        '8': () => navigateTo('settings'),  // Настройки
        '9': () => navigateTo('search'),    // Раздел "Поиск"
        '0': () => openSearchInput()        // Фокус на строку поиска
    };

    // Функция для перехода в разделы
    function navigateTo(section) {
        const link = document.querySelector(`[data-action="${section}"]`);
        if (link) {
            link.click();
        } else {
            console.warn(`Раздел "${section}" не найден. Проверьте наличие атрибута data-action="${section}".`);
        }
    }

    // Функция для открытия строки поиска
    function openSearchInput() {
        const searchInput = document.querySelector('.search__input');
        if (searchInput) {
            searchInput.focus();
        } else {
            console.warn('Строка поиска не найдена. Проверьте наличие класса ".search__input".');
        }
    }

    // Инициализация плагина
    function initPlugin() {
        document.addEventListener('keydown', (event) => {
            const action = keyActions[event.key];
            if (action) {
                action();
                event.preventDefault(); // Останавливаем стандартное поведение
            }
        });
        console.log('Плагин с навигацией по клавишам успешно активирован!');
    }

    // Запуск плагина после загрузки приложения
    if (document.readyState === 'complete') {
        initPlugin();
    } else {
        window.addEventListener('load', initPlugin);
    }
})();
