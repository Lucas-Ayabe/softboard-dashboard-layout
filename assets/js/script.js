/**
 *
 * @param {string} query
 * @returns {HTMLElement|null}
 */
const select = (query) => document.querySelector(query);

/**
 *
 * @param {string} query
 * @returns {NodeListOf<HTMLElement>}
 */
const selectAll = (query) => document.querySelectorAll(query);

/**
 *
 * @param {string} event
 * @returns {(element: HTMLElement) => (callback: (event: Event) => any) => Function}
 */
const onEvent = (event) => (element) => (callback) => {
    element.addEventListener(event, callback);
    return callback;
};

const matchMedia = (expression) => window.matchMedia(expression).matches;

const onClick = onEvent('click');
const onChange = onEvent('change');

const themeButton = select('#theme[type=checkbox]');
const hamburger = select('.hamburger[data-target]');

/**
 *
 * @param {HTMLElement} hamburger
 */
const toggleHamburger = (hamburger) => {
    const { target } = hamburger.dataset;
    const nav = select(target);
    if (nav) {
        const navState = nav.getAttribute('aria-expanded') === 'true';
        hamburger.classList.toggle('is-active');
        nav.setAttribute('aria-expanded', !navState);
    }
};

if (hamburger) {
    const onClickInHamburger = onClick(hamburger);
    onClickInHamburger(({ currentTarget }) => toggleHamburger(currentTarget));

    if (matchMedia('(min-width: 568px)')) {
        toggleHamburger(hamburger);
    }
}

if (themeButton) {
    const onChangeInTheme = onChange(themeButton);

    onChangeInTheme(() => {
        document.documentElement.classList.toggle('dark-theme');
    });
}
