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

const onClick = onEvent('click');

const hamburger = select('.hamburger[data-target]');

/**
 *
 * @param {HTMLElement} hamburger
 */
const toggleHamburger = (hamburger) => {
    const { target } = hamburger.dataset;
    const nav = select(target);
    console.log(hamburger);
    if (nav) {
        const navState = nav.getAttribute('aria-expanded') === 'true';
        hamburger.classList.toggle('is-active');
        nav.setAttribute('aria-expanded', !navState);
    }
};

if (hamburger) {
    const onClickInHamburger = onClick(hamburger);
    onClickInHamburger(({ currentTarget }) => toggleHamburger(currentTarget));
}
