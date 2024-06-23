/******/ (function () {
  // webpackBootstrap
  /******/ 'use strict';
  /******/ var __webpack_modules__ = {
    /***/ './htdocs/wp-content/themes/theme-fusion/assets/js/src/frontend/app.js':
      /*!*****************************************************************************!*\
  !*** ./htdocs/wp-content/themes/theme-fusion/assets/js/src/frontend/app.js ***!
  \*****************************************************************************/
      /***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _yardinternet_a11y_cookie_yes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @yardinternet/a11y-cookie-yes */ './node_modules/@yardinternet/a11y-cookie-yes/dist/a11y-cookie-yes.esm.js',
        );
        /* harmony import */ var bootstrap_js_dist_collapse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! bootstrap/js/dist/collapse */ './node_modules/bootstrap/js/dist/collapse.js',
        );
        /* harmony import */ var bootstrap_js_dist_collapse__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(bootstrap_js_dist_collapse__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */ var bootstrap_js_dist_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! bootstrap/js/dist/dropdown */ './node_modules/bootstrap/js/dist/dropdown.js',
        );
        /* harmony import */ var bootstrap_js_dist_dropdown__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(bootstrap_js_dist_dropdown__WEBPACK_IMPORTED_MODULE_2__);
        /* harmony import */ var bootstrap_js_dist_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! bootstrap/js/dist/tooltip */ './node_modules/bootstrap/js/dist/tooltip.js',
        );
        /* harmony import */ var bootstrap_js_dist_tooltip__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(bootstrap_js_dist_tooltip__WEBPACK_IMPORTED_MODULE_3__);
        /* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ 'jquery');
        /* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          jquery__WEBPACK_IMPORTED_MODULE_4__,
        );
        /* harmony import */ var _components_Cards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./components/Cards */ './htdocs/wp-content/themes/theme-fusion/assets/js/src/frontend/components/Cards.js',
        );
        /* harmony import */ var _components_FacetWP__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./components/FacetWP */ './htdocs/wp-content/themes/theme-fusion/assets/js/src/frontend/components/FacetWP.js',
        );
        /* harmony import */ var _components_FocusStyle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./components/FocusStyle */ './htdocs/wp-content/themes/theme-fusion/assets/js/src/frontend/components/FocusStyle.js',
        );
        /* harmony import */ var _components_MobileMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./components/MobileMenu */ './htdocs/wp-content/themes/theme-fusion/assets/js/src/frontend/components/MobileMenu.js',
        );
        /* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./components/Navbar */ './htdocs/wp-content/themes/theme-fusion/assets/js/src/frontend/components/Navbar.js',
        );
        /* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./components/SearchBar */ './htdocs/wp-content/themes/theme-fusion/assets/js/src/frontend/components/SearchBar.js',
        );
        // External

        // Internal

        const app = () => {
          _yardinternet_a11y_cookie_yes__WEBPACK_IMPORTED_MODULE_0__['default'].getInstance();
          (0, _components_Cards__WEBPACK_IMPORTED_MODULE_5__['default'])();
          (0, _components_FacetWP__WEBPACK_IMPORTED_MODULE_6__['default'])();
          (0, _components_FocusStyle__WEBPACK_IMPORTED_MODULE_7__['default'])();
          (0, _components_MobileMenu__WEBPACK_IMPORTED_MODULE_8__['default'])();
          (0, _components_SearchBar__WEBPACK_IMPORTED_MODULE_10__['default'])();
          new _components_Navbar__WEBPACK_IMPORTED_MODULE_9__['default'](document.querySelector('#js-nav'));

          // Enable :active CSS styles on iOS
          document.addEventListener('touchstart', function () {}, false);

          // Enable Bootstrap tooltips
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('body').tooltip({
            selector: '[data-toggle=tooltip]',
          });

          // Init service worker
          if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js', {
              scope: '/',
            });
          }
        };
        document.addEventListener('DOMContentLoaded', app);

        /***/
      },

    /***/ './htdocs/wp-content/themes/theme-fusion/assets/js/src/frontend/components/Cards.js':
      /*!******************************************************************************************!*\
  !*** ./htdocs/wp-content/themes/theme-fusion/assets/js/src/frontend/components/Cards.js ***!
  \******************************************************************************************/
      /***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__['default'] = () => {
          const cards = document.querySelectorAll('.wp-block-column.has-background');
          const events = () => {
            addLinkToCards();
          };
          const addLinkToCards = () => {
            if (!cards) return;
            cards.forEach((card) => {
              addLinkClass(card);
            });
          };

          /**
           * CSS is unaware if a card has a link in it or not, making it impossible to add a hover state.
           * This checks if there is an <a> element in the card and adds an extra class.
           *
           * @param {HTMLElement} card
           */
          const addLinkClass = (card) => {
            const links = card.querySelectorAll('h2 a, h3 a, .wp-block-button__link');
            if (!links) return;
            links.forEach((link) => {
              if (link.getAttribute('href')) {
                card.classList.add('js-card-has-link');
                if (link.classList.contains('wp-block-button__link')) moveLinkToHeading(link, card);
              }
            });
          };

          /**
           * If the card has a link in a button, we need to move it to the heading
           * to make the card fully clickable.
           *
           * @param {HTMLLinkElement} link
           * @param {HTMLElement}     card
           */
          const moveLinkToHeading = (link, card) => {
            const heading = card.querySelector('h2, h3');
            if (!heading) return;
            if (heading.querySelector('a')) return;
            const newLink = document.createElement('a');
            newLink.href = link.href;
            if (link.target) newLink.target = link.target;
            if (link.rel) newLink.rel = link.rel;
            newLink.innerHTML = heading.innerHTML;
            heading.innerHTML = '';
            heading.appendChild(newLink);
            a11yHideButton(link);
          };

          /**
           * A11y: Hide button for screenreaders and tab focus because the heading
           * already has the same link.
           *
           * @param {HTMLLinkElement} button
           */
          const a11yHideButton = (button) => {
            button.setAttribute('aria-hidden', 'true');
            button.setAttribute('tabindex', '-1');
          };
          events();
        };

        /***/
      },

    /***/ './htdocs/wp-content/themes/theme-fusion/assets/js/src/frontend/components/FacetWP.js':
      /*!********************************************************************************************!*\
  !*** ./htdocs/wp-content/themes/theme-fusion/assets/js/src/frontend/components/FacetWP.js ***!
  \********************************************************************************************/
      /***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _utils_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../utils/a11y */ './htdocs/wp-content/themes/theme-fusion/assets/js/src/frontend/utils/a11y.js',
        );

        /* harmony default export */ __webpack_exports__['default'] = () => {
          const events = () => {
            document.addEventListener('facetwp-refresh', () => onFacetRefresh());
            document.addEventListener('facetwp-loaded', (e) => onFacetLoad(e));
          };
          const onFacetRefresh = () => {
            const view = document.getElementById('js-facetwp-template-view');
            if (!view) return;
            view.classList.add('loading');
          };
          const onFacetLoad = (e) => {
            const view = document.getElementById('js-facetwp-template-view');
            if (!view) return;
            view.classList.remove('loading');
            scrollToTop(e, view);
            addAriaLabelToSearch();
            addAriaCurrentToPager();
            changeTabFocusPager();
            toggleFilterLabelAndButton();
            toggleNoResultsMessage();

            /**
             * This timeout is necessary because otherwise it will be called too early
             */
            setTimeout(() => {
              changeAriaLabelSelections();
            }, 1);
          };
          const scrollToTop = (e, view) => {
            e.preventDefault();
            const offset = 150; // Adjust this number to alter final scroll position
            const scrollPosition = view.getBoundingClientRect().top + window.scrollY - offset;
            if (FWP.loaded) {
              // Only scrollToTop if the user has scrolled down a bit
              if (window.scrollY < scrollPosition + 300) return;
              window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth',
              });
            }
          };

          /**
           * A11y: Add aria-label to search input
           */
          const addAriaLabelToSearch = () => {
            const searchInput = document.querySelector('.facetwp-search');
            if (!searchInput) return;
            const placeholder = searchInput.getAttribute('placeholder');
            if (!placeholder) return;
            if (placeholder || placeholder !== '') {
              searchInput.setAttribute('aria-label', placeholder);
            } else {
              searchInput.setAttribute('aria-label', 'Zoek op trefwoord');
            }
          };

          /**
           * A11y: add 'aria-current' attribute to FacetWP pager.
           */
          const addAriaCurrentToPager = () => {
            const activePage = document.querySelector('.facetwp-page.active');
            if (!activePage) return;
            activePage.setAttribute('aria-current', 'page');
          };

          /**
           * A11y: change aria-label of selections button.
           */
          const changeAriaLabelSelections = () => {
            const selections = document.querySelectorAll('.facetwp-selection-value');
            if (!selections) return;
            selections.forEach((selection) => {
              const label = selection.getAttribute('aria-label');
              selection.setAttribute('aria-label', label + ', verwijder deze selectie');
            });
          };

          /**
           * A11y: change tab focus when using pager
           */
          const changeTabFocusPager = () => {
            const pagerButtons = document.querySelectorAll('.facetwp-page');
            if (!pagerButtons.length) return;
            pagerButtons.forEach((pager) => {
              pager.addEventListener('keyup', (e) => {
                if (e.key === 'Enter') {
                  changeTabFocusToTemplate();
                }
              });
            });
          };
          const changeTabFocusToTemplate = () => {
            setTimeout(() => {
              const template = document.getElementById('js-facetwp-template-view');
              const firstTabbable = (0, _utils_a11y__WEBPACK_IMPORTED_MODULE_0__.findFirstTabbable)(template);
              firstTabbable?.focus();
            }, 500);
          };

          /**
           * Hide label filter and button reset filters if no filters selected
           */
          const toggleFilterLabelAndButton = () => {
            const filterElements = document.querySelectorAll('.js-facetwp-filter-label, .js-facetwp-btn-reset');
            if (!filterElements) return;
            filterElements.forEach((filterElement) => {
              if (FWP.buildQueryString()) {
                filterElement.classList.remove('d-none');
              } else {
                filterElement.classList.add('d-none');
              }
            });
          };
          const toggleNoResultsMessage = () => {
            const noResults = document.querySelectorAll('.facetwp-no-results');
            if (!noResults) return;
            noResults.forEach((noResult) => {
              noResult.classList.toggle('d-none', window.FWP.settings.pager.total_rows !== 0);
            });
          };
          events();
        };

        /***/
      },

    /***/ './htdocs/wp-content/themes/theme-fusion/assets/js/src/frontend/components/FocusStyle.js':
      /*!***********************************************************************************************!*\
  !*** ./htdocs/wp-content/themes/theme-fusion/assets/js/src/frontend/components/FocusStyle.js ***!
  \***********************************************************************************************/
      /***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__['default'] = () => {
          const bodyClassTabbing = 'js-user-is-tabbing';
          const events = () => {
            window.addEventListener('keydown', (e) => handleTab(e));
            window.addEventListener('mousedown', () => handleMouseDown());
          };
          const handleTab = (e) => {
            if (e.key === 'Tab') {
              document.body.classList.add(bodyClassTabbing);
              window.removeEventListener('keydown', handleTab);
            }
          };
          const handleMouseDown = () => {
            document.body.classList.remove(bodyClassTabbing);
            window.removeEventListener('mousedown', handleMouseDown);
          };
          events();
        };

        /***/
      },

    /***/ './htdocs/wp-content/themes/theme-fusion/assets/js/src/frontend/components/MobileMenu.js':
      /*!***********************************************************************************************!*\
  !*** ./htdocs/wp-content/themes/theme-fusion/assets/js/src/frontend/components/MobileMenu.js ***!
  \***********************************************************************************************/
      /***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ 'jquery');
        /* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          jquery__WEBPACK_IMPORTED_MODULE_0__,
        );
        /* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! body-scroll-lock */ './node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js',
        );

        /* harmony default export */ __webpack_exports__['default'] = () => {
          const mobileScreenWidth = window.matchMedia('(max-width: 1350px)');
          const mainContent = document.querySelector('.main-content');
          const navbar = document.querySelector('#js-nav');
          const navbarLinks = document.querySelectorAll('.nav-link');
          const dropdownItems = document.querySelectorAll('.dropdown-item');
          const events = () => {
            onBodyTap();
            handleScrollLock();
            handleFocusOut();
            preventSubmenuClosing();
          };
          const closeMobileMenu = () => {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.navbar-collapse').collapse('hide');
          };

          /**
           * Close hamburger menu when tapping the page content.
           */
          const onBodyTap = () => {
            if (mainContent && mobileScreenWidth.matches) {
              mainContent.addEventListener('touchend', () => closeMobileMenu());
            }
          };

          /**
           * Prevents body scroll and enables menu scroll when mobile menu is opened.
           */
          const handleScrollLock = () => {
            const $navbarContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#navbarContent');
            $navbarContent.on('show.bs.collapse', () => {
              document.body.classList.toggle('js-mobile-menu-is-open');
              (0, body_scroll_lock__WEBPACK_IMPORTED_MODULE_1__.disableBodyScroll)(navbar);
            });
            $navbarContent.on('hide.bs.collapse', () => {
              document.body.classList.toggle('js-mobile-menu-is-open');
              (0, body_scroll_lock__WEBPACK_IMPORTED_MODULE_1__.enableBodyScroll)(navbar);
            });
          };

          /**
           * A11y: close hamburger menu & dropdowns when focus leaves.
           */
          const handleFocusOut = () => {
            if (!navbarLinks) return;
            navbarLinks.forEach((element) => {
              element.addEventListener('focusout', (e) => {
                const target = e.relatedTarget;
                if (!target) return;
                const parent = target.closest('.navbar-collapse');
                if (!parent) closeMobileMenu();
              });
            });
          };

          /**
           * Prevent closing of submenu when clicking on a link
           */
          const preventSubmenuClosing = () => {
            dropdownItems?.forEach((element) => {
              element.addEventListener('click', (e) => e.stopPropagation());
            });
          };
          events();
        };

        /***/
      },

    /***/ './htdocs/wp-content/themes/theme-fusion/assets/js/src/frontend/components/Navbar.js':
      /*!*******************************************************************************************!*\
  !*** ./htdocs/wp-content/themes/theme-fusion/assets/js/src/frontend/components/Navbar.js ***!
  \*******************************************************************************************/
      /***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var headroom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! headroom.js */ './node_modules/headroom.js/dist/headroom.js',
        );
        /* harmony import */ var headroom_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          headroom_js__WEBPACK_IMPORTED_MODULE_0__,
        );

        class Navbar extends headroom_js__WEBPACK_IMPORTED_MODULE_0___default() {
          constructor(elem) {
            super(elem);
            this.options = {
              tolerance: {
                up: 10,
                down: 30,
              },
            };
            this.dropdownMenus = document.querySelectorAll('.dropdown-menu');
            this.dropdownMenuLinks = document.querySelectorAll('.menu-item-has-children');
            new (headroom_js__WEBPACK_IMPORTED_MODULE_0___default())(elem, this.options).init();
            this.init();
          }

          /**
           *  Remove dropdown with escape key if mouse is over a dropdown. Apparently needed for accessibility.
           *  1. Listens to mousemovement if it enters or leaves a dropdown menu.
           */
          handleMouse() {
            if (this.dropdownMenus) {
              this.dropdownMenus.forEach((element) => {
                element.addEventListener('mouseenter', () => this.onMouseEnter());
                element.addEventListener('mouseout', () => this.onMouseLeave());
              });
            }
            if (this.dropdownMenuLinks) {
              this.dropdownMenuLinks.forEach((element) => {
                element.addEventListener('mouseenter', () => this.onMouseEnter());
                element.addEventListener('mouseout', () => this.onMouseLeave(), true);
              });
            }
          }

          /**
           * 2. If the mouse entered the dropdown, listen if the ESC key is pressed.
           * 3. Add an hover-blocking class to hide the dropdown menu.
           */
          onMouseEnter() {
            document.addEventListener('keyup', (e) => this.onKeyUp(e));
          }
          onKeyUp(e) {
            if (this.dropdownMenuLinks && e.keyCode === 27) {
              this.dropdownMenuLinks.forEach((element) => {
                element.classList.add('js-remove-hover');
              });
            }
          }

          /**
           *  4. If the mouse leaves the dropdown area, remove the hover-blocking class to re-enable the hover
           */
          onMouseLeave() {
            if (this.dropdownMenuLinks) {
              this.dropdownMenuLinks.forEach((element) => {
                element.classList.remove('js-remove-hover');
              });
            }
          }
          init() {
            this.handleMouse();
          }
        }
        /* harmony default export */ __webpack_exports__['default'] = Navbar;

        /***/
      },

    /***/ './htdocs/wp-content/themes/theme-fusion/assets/js/src/frontend/components/SearchBar.js':
      /*!**********************************************************************************************!*\
  !*** ./htdocs/wp-content/themes/theme-fusion/assets/js/src/frontend/components/SearchBar.js ***!
  \**********************************************************************************************/
      /***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! focus-trap */ './node_modules/focus-trap/dist/focus-trap.esm.js',
        );
        /* harmony import */ var _utils_focus_trap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../utils/focus-trap.js */ './htdocs/wp-content/themes/theme-fusion/assets/js/src/frontend/utils/focus-trap.js',
        );
        /**
         * External dependencies
         */

        /**
         * Internal dependencies
         */

        /* harmony default export */ __webpack_exports__['default'] = () => {
          let focusTrapSearchbar;
          const searchbarIsOpen = 'js-searchbar-is-open';
          const closeBtn = document.querySelector('#js-searchbar-close-btn');
          const input = document.querySelector('#js-searchbar-input');
          const openBtn = document.querySelector('#js-searchbar-open-btn');
          const searchbar = document.querySelector('#js-searchbar');
          const focusTrapOptions = {
            allowOutsideClick: true,
            checkCanFocusTrap: _utils_focus_trap_js__WEBPACK_IMPORTED_MODULE_0__.checkCanFocusTrap,
            clickOutsideDeactivates: true,
            onActivate: () => {
              document.body.classList.add(searchbarIsOpen);
            },
            onDeactivate: () => {
              document.body.classList.remove(searchbarIsOpen);
              input.value = '';
            },
          };
          const events = () => {
            if (!closeBtn || !openBtn || !searchbar) return;
            focusTrapSearchbar = focus_trap__WEBPACK_IMPORTED_MODULE_1__.createFocusTrap(searchbar, focusTrapOptions);
            openBtn.addEventListener('click', focusTrapSearchbar?.activate);
            closeBtn.addEventListener('click', focusTrapSearchbar?.deactivate);
          };
          events();
        };

        /***/
      },

    /***/ './htdocs/wp-content/themes/theme-fusion/assets/js/src/frontend/utils/a11y.js':
      /*!************************************************************************************!*\
  !*** ./htdocs/wp-content/themes/theme-fusion/assets/js/src/frontend/utils/a11y.js ***!
  \************************************************************************************/
      /***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ findFirstTabbable: function () {
            return /* binding */ findFirstTabbable;
          },
          /* harmony export */ findTabbable: function () {
            return /* binding */ findTabbable;
          },
          /* harmony export */ transformTag: function () {
            return /* binding */ transformTag;
          },
          /* harmony export */
        });
        /**
         * Gets keyboard-focusable elements within a specified element.
         *
         * @param {HTMLElement} element The element to search within
         * @return {HTMLElement[]} Array of focusable elements
         */
        const findTabbable = (element) => {
          const tabbableElements = element.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
          );
          const array = Array.from(tabbableElements);
          return array.filter(
            (el) => !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden') && el.style.display !== 'none',
          );
        };

        /**
         * Gets the first keyboard-focusable element within a specified element.
         *
         * @param {Element} element The element to search within
         * @return {Element|null} The first focusable element
         */
        const findFirstTabbable = (element) => {
          const tabbableElements = findTabbable(element);
          return tabbableElements.length ? tabbableElements[0] : null;
        };

        /**
         * Transform the tag of an element to another tag, e.g. <p> to <h2>.
         *
         * @param {Element} element     The element to transform
         * @param {string}  transformTo Tag to transform to (e.g. 'h2')
         * @return {HTMLElement|null} Transformed element
         */
        const transformTag = (element, transformTo) => {
          if (!element) return null;
          const transformedElement = document.createElement(transformTo);
          transformedElement.innerHTML = element.innerHTML;
          for (let i = 0; i < element.attributes.length; i++) {
            transformedElement.setAttribute(element.attributes[i].name, element.attributes[i].value);
          }
          if (!element.parentNode) return transformedElement;
          element.parentNode.replaceChild(transformedElement, element);
          return transformedElement;
        };

        /***/
      },

    /***/ './htdocs/wp-content/themes/theme-fusion/assets/js/src/frontend/utils/focus-trap.js':
      /*!******************************************************************************************!*\
  !*** ./htdocs/wp-content/themes/theme-fusion/assets/js/src/frontend/utils/focus-trap.js ***!
  \******************************************************************************************/
      /***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ checkCanFocusTrap: function () {
            return /* binding */ checkCanFocusTrap;
          },
          /* harmony export */
        });
        /**
         * The element has visibility: hidden, which makes it initially un-focusable, creating an error.
         * This ensures an wait until it can activate the trap.
         *
         * @param {Array} elements
         */
        const checkCanFocusTrap = (elements) => {
          const results = elements.map((element) => {
            return new Promise((resolve) => {
              const interval = setInterval(() => {
                if (getComputedStyle(element).visibility !== 'hidden') {
                  resolve();
                  clearInterval(interval);
                }
              }, 50);
            });
          });
          return Promise.all(results);
        };

        /***/
      },

    /***/ './htdocs/wp-content/themes/theme-fusion/assets/scss/style.scss':
      /*!**********************************************************************!*\
  !*** ./htdocs/wp-content/themes/theme-fusion/assets/scss/style.scss ***!
  \**********************************************************************/
      /***/ function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        // extracted by mini-css-extract-plugin

        /***/
      },

    /***/ jquery:
      /*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
      /***/ function (module) {
        module.exports = window['jQuery'];

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/ __webpack_require__.m = __webpack_modules__;
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/chunk loaded */
  /******/ !(function () {
    /******/ var deferred = [];
    /******/ __webpack_require__.O = function (result, chunkIds, fn, priority) {
      /******/ if (chunkIds) {
        /******/ priority = priority || 0;
        /******/ for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--)
          deferred[i] = deferred[i - 1];
        /******/ deferred[i] = [chunkIds, fn, priority];
        /******/ return;
        /******/
      }
      /******/ var notFulfilled = Infinity;
      /******/ for (var i = 0; i < deferred.length; i++) {
        /******/ var chunkIds = deferred[i][0];
        /******/ var fn = deferred[i][1];
        /******/ var priority = deferred[i][2];
        /******/ var fulfilled = true;
        /******/ for (var j = 0; j < chunkIds.length; j++) {
          /******/ if (
            (priority & (1 === 0) || notFulfilled >= priority) &&
            Object.keys(__webpack_require__.O).every(function (key) {
              return __webpack_require__.O[key](chunkIds[j]);
            })
          ) {
            /******/ chunkIds.splice(j--, 1);
            /******/
          } else {
            /******/ fulfilled = false;
            /******/ if (priority < notFulfilled) notFulfilled = priority;
            /******/
          }
          /******/
        }
        /******/ if (fulfilled) {
          /******/ deferred.splice(i--, 1);
          /******/ var r = fn();
          /******/ if (r !== undefined) result = r;
          /******/
        }
        /******/
      }
      /******/ return result;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/compat get default export */
  /******/ !(function () {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = function (module) {
      /******/ var getter =
        module && module.__esModule
          ? /******/ function () {
              return module['default'];
            }
          : /******/ function () {
              return module;
            };
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ !(function () {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = function (exports, definition) {
      /******/ for (var key in definition) {
        /******/ if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          /******/ Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/global */
  /******/ !(function () {
    /******/ __webpack_require__.g = (function () {
      /******/ if (typeof globalThis === 'object') return globalThis;
      /******/ try {
        /******/ return this || new Function('return this')();
        /******/
      } catch (e) {
        /******/ if (typeof window === 'object') return window;
        /******/
      }
      /******/
    })();
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ !(function () {
    /******/ __webpack_require__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ !(function () {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = function (exports) {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/jsonp chunk loading */
  /******/ !(function () {
    /******/ // no baseURI
    /******/
    /******/ // object to store loaded and loading chunks
    /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
    /******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
    /******/ var installedChunks = {
      /******/ frontend: 0,
      /******/
    };
    /******/
    /******/ // no chunk on demand loading
    /******/
    /******/ // no prefetching
    /******/
    /******/ // no preloaded
    /******/
    /******/ // no HMR
    /******/
    /******/ // no HMR manifest
    /******/
    /******/ __webpack_require__.O.j = function (chunkId) {
      return installedChunks[chunkId] === 0;
    };
    /******/
    /******/ // install a JSONP callback for chunk loading
    /******/ var webpackJsonpCallback = function (parentChunkLoadingFunction, data) {
      /******/ var chunkIds = data[0];
      /******/ var moreModules = data[1];
      /******/ var runtime = data[2];
      /******/ // add "moreModules" to the modules object,
      /******/ // then flag all "chunkIds" as loaded and fire callback
      /******/ var moduleId,
        chunkId,
        i = 0;
      /******/ if (
        chunkIds.some(function (id) {
          return installedChunks[id] !== 0;
        })
      ) {
        /******/ for (moduleId in moreModules) {
          /******/ if (__webpack_require__.o(moreModules, moduleId)) {
            /******/ __webpack_require__.m[moduleId] = moreModules[moduleId];
            /******/
          }
          /******/
        }
        /******/ if (runtime) var result = runtime(__webpack_require__);
        /******/
      }
      /******/ if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
      /******/ for (; i < chunkIds.length; i++) {
        /******/ chunkId = chunkIds[i];
        /******/ if (__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
          /******/ installedChunks[chunkId][0]();
          /******/
        }
        /******/ installedChunks[chunkId] = 0;
        /******/
      }
      /******/ return __webpack_require__.O(result);
      /******/
    };
    /******/
    /******/ var chunkLoadingGlobal = (self['webpackChunktheme_fusion'] = self['webpackChunktheme_fusion'] || []);
    /******/ chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
    /******/ chunkLoadingGlobal.push = webpackJsonpCallback.bind(
      null,
      chunkLoadingGlobal.push.bind(chunkLoadingGlobal),
    );
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module depends on other loaded chunks and execution need to be delayed
  /******/ __webpack_require__.O(undefined, ['vendor'], function () {
    return __webpack_require__('./htdocs/wp-content/themes/theme-fusion/assets/js/src/frontend/app.js');
  });
  /******/ var __webpack_exports__ = __webpack_require__.O(undefined, ['vendor'], function () {
    return __webpack_require__('./htdocs/wp-content/themes/theme-fusion/assets/scss/style.scss');
  });
  /******/ __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
  /******/
  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d2VicGFjazovL3RoZW1lLWZ1c2lvbi8uL2h0ZG9jcy93cC1jb250ZW50L3RoZW1lcy90aGVtZS1mdXNpb24vYXNzZXRzL2pzL3NyYy9mcm9udGVuZC9hcHAuanMiLCJ3ZWJwYWNrOi8vdGhlbWUtZnVzaW9uLy4vaHRkb2NzL3dwLWNvbnRlbnQvdGhlbWVzL3RoZW1lLWZ1c2lvbi9hc3NldHMvanMvc3JjL2Zyb250ZW5kL2NvbXBvbmVudHMvQ2FyZHMuanMiLCJ3ZWJwYWNrOi8vdGhlbWUtZnVzaW9uLy4vaHRkb2NzL3dwLWNvbnRlbnQvdGhlbWVzL3RoZW1lLWZ1c2lvbi9hc3NldHMvanMvc3JjL2Zyb250ZW5kL2NvbXBvbmVudHMvRmFjZXRXUC5qcyIsIndlYnBhY2s6Ly90aGVtZS1mdXNpb24vLi9odGRvY3Mvd3AtY29udGVudC90aGVtZXMvdGhlbWUtZnVzaW9uL2Fzc2V0cy9qcy9zcmMvZnJvbnRlbmQvY29tcG9uZW50cy9Gb2N1c1N0eWxlLmpzIiwid2VicGFjazovL3RoZW1lLWZ1c2lvbi8uL2h0ZG9jcy93cC1jb250ZW50L3RoZW1lcy90aGVtZS1mdXNpb24vYXNzZXRzL2pzL3NyYy9mcm9udGVuZC9jb21wb25lbnRzL01vYmlsZU1lbnUuanMiLCJ3ZWJwYWNrOi8vdGhlbWUtZnVzaW9uLy4vaHRkb2NzL3dwLWNvbnRlbnQvdGhlbWVzL3RoZW1lLWZ1c2lvbi9hc3NldHMvanMvc3JjL2Zyb250ZW5kL2NvbXBvbmVudHMvTmF2YmFyLmpzIiwid2VicGFjazovL3RoZW1lLWZ1c2lvbi8uL2h0ZG9jcy93cC1jb250ZW50L3RoZW1lcy90aGVtZS1mdXNpb24vYXNzZXRzL2pzL3NyYy9mcm9udGVuZC9jb21wb25lbnRzL1NlYXJjaEJhci5qcyIsIndlYnBhY2s6Ly90aGVtZS1mdXNpb24vLi9odGRvY3Mvd3AtY29udGVudC90aGVtZXMvdGhlbWUtZnVzaW9uL2Fzc2V0cy9qcy9zcmMvZnJvbnRlbmQvdXRpbHMvYTExeS5qcyIsIndlYnBhY2s6Ly90aGVtZS1mdXNpb24vLi9odGRvY3Mvd3AtY29udGVudC90aGVtZXMvdGhlbWUtZnVzaW9uL2Fzc2V0cy9qcy9zcmMvZnJvbnRlbmQvdXRpbHMvZm9jdXMtdHJhcC5qcyIsIndlYnBhY2s6Ly90aGVtZS1mdXNpb24vLi9odGRvY3Mvd3AtY29udGVudC90aGVtZXMvdGhlbWUtZnVzaW9uL2Fzc2V0cy9zY3NzL3N0eWxlLnNjc3M/ZmNiMyIsIndlYnBhY2s6Ly90aGVtZS1mdXNpb24vZXh0ZXJuYWwgd2luZG93IFwialF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vdGhlbWUtZnVzaW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RoZW1lLWZ1c2lvbi93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3RoZW1lLWZ1c2lvbi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90aGVtZS1mdXNpb24vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RoZW1lLWZ1c2lvbi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RoZW1lLWZ1c2lvbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RoZW1lLWZ1c2lvbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RoZW1lLWZ1c2lvbi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90aGVtZS1mdXNpb24vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90aGVtZS1mdXNpb24vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RoZW1lLWZ1c2lvbi93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXh0ZXJuYWxcbmltcG9ydCBBMTF5Q29va2llWWVzIGZyb20gJ0B5YXJkaW50ZXJuZXQvYTExeS1jb29raWUteWVzJztcbmltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvY29sbGFwc2UnO1xuaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC9kcm9wZG93bic7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9kaXN0L3Rvb2x0aXAnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuLy8gSW50ZXJuYWxcbmltcG9ydCBDYXJkcyBmcm9tICcuL2NvbXBvbmVudHMvQ2FyZHMnO1xuaW1wb3J0IEZhY2V0V1AgZnJvbSAnLi9jb21wb25lbnRzL0ZhY2V0V1AnO1xuaW1wb3J0IEZvY3VzU3R5bGUgZnJvbSAnLi9jb21wb25lbnRzL0ZvY3VzU3R5bGUnO1xuaW1wb3J0IE1vYmlsZU1lbnUgZnJvbSAnLi9jb21wb25lbnRzL01vYmlsZU1lbnUnO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuL2NvbXBvbmVudHMvTmF2YmFyJztcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi9jb21wb25lbnRzL1NlYXJjaEJhcic7XG5cbmNvbnN0IGFwcCA9ICgpID0+IHtcblx0QTExeUNvb2tpZVllcy5nZXRJbnN0YW5jZSgpO1xuXHRDYXJkcygpO1xuXHRGYWNldFdQKCk7XG5cdEZvY3VzU3R5bGUoKTtcblx0TW9iaWxlTWVudSgpO1xuXHRTZWFyY2hCYXIoKTtcblx0bmV3IE5hdmJhciggZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJyNqcy1uYXYnICkgKTtcblxuXHQvLyBFbmFibGUgOmFjdGl2ZSBDU1Mgc3R5bGVzIG9uIGlPU1xuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hzdGFydCcsIGZ1bmN0aW9uICgpIHt9LCBmYWxzZSApO1xuXG5cdC8vIEVuYWJsZSBCb290c3RyYXAgdG9vbHRpcHNcblx0JCggJ2JvZHknICkudG9vbHRpcCggeyBzZWxlY3RvcjogJ1tkYXRhLXRvZ2dsZT10b29sdGlwXScgfSApO1xuXG5cdC8vIEluaXQgc2VydmljZSB3b3JrZXJcblx0aWYgKCAnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yICkge1xuXHRcdG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCAnL3N3LmpzJywge1xuXHRcdFx0c2NvcGU6ICcvJyxcblx0XHR9ICk7XG5cdH1cbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdET01Db250ZW50TG9hZGVkJywgYXBwICk7XG4iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cdGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcblx0XHQnLndwLWJsb2NrLWNvbHVtbi5oYXMtYmFja2dyb3VuZCdcblx0KTtcblxuXHRjb25zdCBldmVudHMgPSAoKSA9PiB7XG5cdFx0YWRkTGlua1RvQ2FyZHMoKTtcblx0fTtcblxuXHRjb25zdCBhZGRMaW5rVG9DYXJkcyA9ICgpID0+IHtcblx0XHRpZiAoICEgY2FyZHMgKSByZXR1cm47XG5cblx0XHRjYXJkcy5mb3JFYWNoKCAoIGNhcmQgKSA9PiB7XG5cdFx0XHRhZGRMaW5rQ2xhc3MoIGNhcmQgKTtcblx0XHR9ICk7XG5cdH07XG5cblx0LyoqXG5cdCAqIENTUyBpcyB1bmF3YXJlIGlmIGEgY2FyZCBoYXMgYSBsaW5rIGluIGl0IG9yIG5vdCwgbWFraW5nIGl0IGltcG9zc2libGUgdG8gYWRkIGEgaG92ZXIgc3RhdGUuXG5cdCAqIFRoaXMgY2hlY2tzIGlmIHRoZXJlIGlzIGFuIDxhPiBlbGVtZW50IGluIHRoZSBjYXJkIGFuZCBhZGRzIGFuIGV4dHJhIGNsYXNzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjYXJkXG5cdCAqL1xuXHRjb25zdCBhZGRMaW5rQ2xhc3MgPSAoIGNhcmQgKSA9PiB7XG5cdFx0Y29uc3QgbGlua3MgPSBjYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdFx0XHQnaDIgYSwgaDMgYSwgLndwLWJsb2NrLWJ1dHRvbl9fbGluaydcblx0XHQpO1xuXG5cdFx0aWYgKCAhIGxpbmtzICkgcmV0dXJuO1xuXG5cdFx0bGlua3MuZm9yRWFjaCggKCBsaW5rICkgPT4ge1xuXHRcdFx0aWYgKCBsaW5rLmdldEF0dHJpYnV0ZSggJ2hyZWYnICkgKSB7XG5cdFx0XHRcdGNhcmQuY2xhc3NMaXN0LmFkZCggJ2pzLWNhcmQtaGFzLWxpbmsnICk7XG5cblx0XHRcdFx0aWYgKCBsaW5rLmNsYXNzTGlzdC5jb250YWlucyggJ3dwLWJsb2NrLWJ1dHRvbl9fbGluaycgKSApXG5cdFx0XHRcdFx0bW92ZUxpbmtUb0hlYWRpbmcoIGxpbmssIGNhcmQgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH07XG5cblx0LyoqXG5cdCAqIElmIHRoZSBjYXJkIGhhcyBhIGxpbmsgaW4gYSBidXR0b24sIHdlIG5lZWQgdG8gbW92ZSBpdCB0byB0aGUgaGVhZGluZ1xuXHQgKiB0byBtYWtlIHRoZSBjYXJkIGZ1bGx5IGNsaWNrYWJsZS5cblx0ICpcblx0ICogQHBhcmFtIHtIVE1MTGlua0VsZW1lbnR9IGxpbmtcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gICAgIGNhcmRcblx0ICovXG5cdGNvbnN0IG1vdmVMaW5rVG9IZWFkaW5nID0gKCBsaW5rLCBjYXJkICkgPT4ge1xuXHRcdGNvbnN0IGhlYWRpbmcgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoICdoMiwgaDMnICk7XG5cblx0XHRpZiAoICEgaGVhZGluZyApIHJldHVybjtcblx0XHRpZiAoIGhlYWRpbmcucXVlcnlTZWxlY3RvciggJ2EnICkgKSByZXR1cm47XG5cblx0XHRjb25zdCBuZXdMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2EnICk7XG5cdFx0bmV3TGluay5ocmVmID0gbGluay5ocmVmO1xuXHRcdGlmICggbGluay50YXJnZXQgKSBuZXdMaW5rLnRhcmdldCA9IGxpbmsudGFyZ2V0O1xuXHRcdGlmICggbGluay5yZWwgKSBuZXdMaW5rLnJlbCA9IGxpbmsucmVsO1xuXHRcdG5ld0xpbmsuaW5uZXJIVE1MID0gaGVhZGluZy5pbm5lckhUTUw7XG5cdFx0aGVhZGluZy5pbm5lckhUTUwgPSAnJztcblx0XHRoZWFkaW5nLmFwcGVuZENoaWxkKCBuZXdMaW5rICk7XG5cblx0XHRhMTF5SGlkZUJ1dHRvbiggbGluayApO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBBMTF5OiBIaWRlIGJ1dHRvbiBmb3Igc2NyZWVucmVhZGVycyBhbmQgdGFiIGZvY3VzIGJlY2F1c2UgdGhlIGhlYWRpbmdcblx0ICogYWxyZWFkeSBoYXMgdGhlIHNhbWUgbGluay5cblx0ICpcblx0ICogQHBhcmFtIHtIVE1MTGlua0VsZW1lbnR9IGJ1dHRvblxuXHQgKi9cblx0Y29uc3QgYTExeUhpZGVCdXR0b24gPSAoIGJ1dHRvbiApID0+IHtcblx0XHRidXR0b24uc2V0QXR0cmlidXRlKCAnYXJpYS1oaWRkZW4nLCAndHJ1ZScgKTtcblx0XHRidXR0b24uc2V0QXR0cmlidXRlKCAndGFiaW5kZXgnLCAnLTEnICk7XG5cdH07XG5cblx0ZXZlbnRzKCk7XG59O1xuIiwiaW1wb3J0IHsgZmluZEZpcnN0VGFiYmFibGUgfSBmcm9tICcuLi91dGlscy9hMTF5JztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRjb25zdCBldmVudHMgPSAoKSA9PiB7XG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2ZhY2V0d3AtcmVmcmVzaCcsICgpID0+IG9uRmFjZXRSZWZyZXNoKCkgKTtcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnZmFjZXR3cC1sb2FkZWQnLCAoIGUgKSA9PlxuXHRcdFx0b25GYWNldExvYWQoIGUgKVxuXHRcdCk7XG5cdH07XG5cblx0Y29uc3Qgb25GYWNldFJlZnJlc2ggPSAoKSA9PiB7XG5cdFx0Y29uc3QgdmlldyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnanMtZmFjZXR3cC10ZW1wbGF0ZS12aWV3JyApO1xuXG5cdFx0aWYgKCAhIHZpZXcgKSByZXR1cm47XG5cblx0XHR2aWV3LmNsYXNzTGlzdC5hZGQoICdsb2FkaW5nJyApO1xuXHR9O1xuXG5cdGNvbnN0IG9uRmFjZXRMb2FkID0gKCBlICkgPT4ge1xuXHRcdGNvbnN0IHZpZXcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2pzLWZhY2V0d3AtdGVtcGxhdGUtdmlldycgKTtcblxuXHRcdGlmICggISB2aWV3ICkgcmV0dXJuO1xuXG5cdFx0dmlldy5jbGFzc0xpc3QucmVtb3ZlKCAnbG9hZGluZycgKTtcblxuXHRcdHNjcm9sbFRvVG9wKCBlLCB2aWV3ICk7XG5cdFx0YWRkQXJpYUxhYmVsVG9TZWFyY2goKTtcblx0XHRhZGRBcmlhQ3VycmVudFRvUGFnZXIoKTtcblx0XHRjaGFuZ2VUYWJGb2N1c1BhZ2VyKCk7XG5cdFx0dG9nZ2xlRmlsdGVyTGFiZWxBbmRCdXR0b24oKTtcblx0XHR0b2dnbGVOb1Jlc3VsdHNNZXNzYWdlKCk7XG5cblx0XHQvKipcblx0XHQgKiBUaGlzIHRpbWVvdXQgaXMgbmVjZXNzYXJ5IGJlY2F1c2Ugb3RoZXJ3aXNlIGl0IHdpbGwgYmUgY2FsbGVkIHRvbyBlYXJseVxuXHRcdCAqL1xuXHRcdHNldFRpbWVvdXQoICgpID0+IHtcblx0XHRcdGNoYW5nZUFyaWFMYWJlbFNlbGVjdGlvbnMoKTtcblx0XHR9LCAxICk7XG5cdH07XG5cblx0Y29uc3Qgc2Nyb2xsVG9Ub3AgPSAoIGUsIHZpZXcgKSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0Y29uc3Qgb2Zmc2V0ID0gMTUwOyAvLyBBZGp1c3QgdGhpcyBudW1iZXIgdG8gYWx0ZXIgZmluYWwgc2Nyb2xsIHBvc2l0aW9uXG5cdFx0Y29uc3Qgc2Nyb2xsUG9zaXRpb24gPVxuXHRcdFx0dmlldy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB3aW5kb3cuc2Nyb2xsWSAtIG9mZnNldDtcblxuXHRcdGlmICggRldQLmxvYWRlZCApIHtcblx0XHRcdC8vIE9ubHkgc2Nyb2xsVG9Ub3AgaWYgdGhlIHVzZXIgaGFzIHNjcm9sbGVkIGRvd24gYSBiaXRcblx0XHRcdGlmICggd2luZG93LnNjcm9sbFkgPCBzY3JvbGxQb3NpdGlvbiArIDMwMCApIHJldHVybjtcblxuXHRcdFx0d2luZG93LnNjcm9sbFRvKCB7XG5cdFx0XHRcdHRvcDogc2Nyb2xsUG9zaXRpb24sXG5cdFx0XHRcdGJlaGF2aW9yOiAnc21vb3RoJyxcblx0XHRcdH0gKTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIEExMXk6IEFkZCBhcmlhLWxhYmVsIHRvIHNlYXJjaCBpbnB1dFxuXHQgKi9cblx0Y29uc3QgYWRkQXJpYUxhYmVsVG9TZWFyY2ggPSAoKSA9PiB7XG5cdFx0Y29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLmZhY2V0d3Atc2VhcmNoJyApO1xuXHRcdGlmICggISBzZWFyY2hJbnB1dCApIHJldHVybjtcblxuXHRcdGNvbnN0IHBsYWNlaG9sZGVyID0gc2VhcmNoSW5wdXQuZ2V0QXR0cmlidXRlKCAncGxhY2Vob2xkZXInICk7XG5cdFx0aWYgKCAhIHBsYWNlaG9sZGVyICkgcmV0dXJuO1xuXG5cdFx0aWYgKCBwbGFjZWhvbGRlciB8fCBwbGFjZWhvbGRlciAhPT0gJycgKSB7XG5cdFx0XHRzZWFyY2hJbnB1dC5zZXRBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJywgcGxhY2Vob2xkZXIgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2VhcmNoSW5wdXQuc2V0QXR0cmlidXRlKCAnYXJpYS1sYWJlbCcsICdab2VrIG9wIHRyZWZ3b29yZCcgKTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIEExMXk6IGFkZCAnYXJpYS1jdXJyZW50JyBhdHRyaWJ1dGUgdG8gRmFjZXRXUCBwYWdlci5cblx0ICovXG5cdGNvbnN0IGFkZEFyaWFDdXJyZW50VG9QYWdlciA9ICgpID0+IHtcblx0XHRjb25zdCBhY3RpdmVQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5mYWNldHdwLXBhZ2UuYWN0aXZlJyApO1xuXG5cdFx0aWYgKCAhIGFjdGl2ZVBhZ2UgKSByZXR1cm47XG5cblx0XHRhY3RpdmVQYWdlLnNldEF0dHJpYnV0ZSggJ2FyaWEtY3VycmVudCcsICdwYWdlJyApO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBBMTF5OiBjaGFuZ2UgYXJpYS1sYWJlbCBvZiBzZWxlY3Rpb25zIGJ1dHRvbi5cblx0ICovXG5cdGNvbnN0IGNoYW5nZUFyaWFMYWJlbFNlbGVjdGlvbnMgPSAoKSA9PiB7XG5cdFx0Y29uc3Qgc2VsZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdFx0XHQnLmZhY2V0d3Atc2VsZWN0aW9uLXZhbHVlJ1xuXHRcdCk7XG5cblx0XHRpZiAoICEgc2VsZWN0aW9ucyApIHJldHVybjtcblxuXHRcdHNlbGVjdGlvbnMuZm9yRWFjaCggKCBzZWxlY3Rpb24gKSA9PiB7XG5cdFx0XHRjb25zdCBsYWJlbCA9IHNlbGVjdGlvbi5nZXRBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJyApO1xuXHRcdFx0c2VsZWN0aW9uLnNldEF0dHJpYnV0ZShcblx0XHRcdFx0J2FyaWEtbGFiZWwnLFxuXHRcdFx0XHRsYWJlbCArICcsIHZlcndpamRlciBkZXplIHNlbGVjdGllJ1xuXHRcdFx0KTtcblx0XHR9ICk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEExMXk6IGNoYW5nZSB0YWIgZm9jdXMgd2hlbiB1c2luZyBwYWdlclxuXHQgKi9cblx0Y29uc3QgY2hhbmdlVGFiRm9jdXNQYWdlciA9ICgpID0+IHtcblx0XHRjb25zdCBwYWdlckJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCAnLmZhY2V0d3AtcGFnZScgKTtcblxuXHRcdGlmICggISBwYWdlckJ1dHRvbnMubGVuZ3RoICkgcmV0dXJuO1xuXG5cdFx0cGFnZXJCdXR0b25zLmZvckVhY2goICggcGFnZXIgKSA9PiB7XG5cdFx0XHRwYWdlci5hZGRFdmVudExpc3RlbmVyKCAna2V5dXAnLCAoIGUgKSA9PiB7XG5cdFx0XHRcdGlmICggZS5rZXkgPT09ICdFbnRlcicgKSB7XG5cdFx0XHRcdFx0Y2hhbmdlVGFiRm9jdXNUb1RlbXBsYXRlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9ICk7XG5cdH07XG5cblx0Y29uc3QgY2hhbmdlVGFiRm9jdXNUb1RlbXBsYXRlID0gKCkgPT4ge1xuXHRcdHNldFRpbWVvdXQoICgpID0+IHtcblx0XHRcdGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG5cdFx0XHRcdCdqcy1mYWNldHdwLXRlbXBsYXRlLXZpZXcnXG5cdFx0XHQpO1xuXHRcdFx0Y29uc3QgZmlyc3RUYWJiYWJsZSA9IGZpbmRGaXJzdFRhYmJhYmxlKCB0ZW1wbGF0ZSApO1xuXHRcdFx0Zmlyc3RUYWJiYWJsZT8uZm9jdXMoKTtcblx0XHR9LCA1MDAgKTtcblx0fTtcblxuXHQvKipcblx0ICogSGlkZSBsYWJlbCBmaWx0ZXIgYW5kIGJ1dHRvbiByZXNldCBmaWx0ZXJzIGlmIG5vIGZpbHRlcnMgc2VsZWN0ZWRcblx0ICovXG5cdGNvbnN0IHRvZ2dsZUZpbHRlckxhYmVsQW5kQnV0dG9uID0gKCkgPT4ge1xuXHRcdGNvbnN0IGZpbHRlckVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcblx0XHRcdCcuanMtZmFjZXR3cC1maWx0ZXItbGFiZWwsIC5qcy1mYWNldHdwLWJ0bi1yZXNldCdcblx0XHQpO1xuXG5cdFx0aWYgKCAhIGZpbHRlckVsZW1lbnRzICkgcmV0dXJuO1xuXG5cdFx0ZmlsdGVyRWxlbWVudHMuZm9yRWFjaCggKCBmaWx0ZXJFbGVtZW50ICkgPT4ge1xuXHRcdFx0aWYgKCBGV1AuYnVpbGRRdWVyeVN0cmluZygpICkge1xuXHRcdFx0XHRmaWx0ZXJFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoICdkLW5vbmUnICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmaWx0ZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoICdkLW5vbmUnICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9O1xuXG5cdGNvbnN0IHRvZ2dsZU5vUmVzdWx0c01lc3NhZ2UgPSAoKSA9PiB7XG5cdFx0Y29uc3Qgbm9SZXN1bHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy5mYWNldHdwLW5vLXJlc3VsdHMnICk7XG5cblx0XHRpZiAoICEgbm9SZXN1bHRzICkgcmV0dXJuO1xuXG5cdFx0bm9SZXN1bHRzLmZvckVhY2goICggbm9SZXN1bHQgKSA9PiB7XG5cdFx0XHRub1Jlc3VsdC5jbGFzc0xpc3QudG9nZ2xlKFxuXHRcdFx0XHQnZC1ub25lJyxcblx0XHRcdFx0d2luZG93LkZXUC5zZXR0aW5ncy5wYWdlci50b3RhbF9yb3dzICE9PSAwXG5cdFx0XHQpO1xuXHRcdH0gKTtcblx0fTtcblx0ZXZlbnRzKCk7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRjb25zdCBib2R5Q2xhc3NUYWJiaW5nID0gJ2pzLXVzZXItaXMtdGFiYmluZyc7XG5cblx0Y29uc3QgZXZlbnRzID0gKCkgPT4ge1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAna2V5ZG93bicsICggZSApID0+IGhhbmRsZVRhYiggZSApICk7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCAoKSA9PiBoYW5kbGVNb3VzZURvd24oKSApO1xuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZVRhYiA9ICggZSApID0+IHtcblx0XHRpZiAoIGUua2V5ID09PSAnVGFiJyApIHtcblx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCggYm9keUNsYXNzVGFiYmluZyApO1xuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgaGFuZGxlVGFiICk7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZU1vdXNlRG93biA9ICgpID0+IHtcblx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoIGJvZHlDbGFzc1RhYmJpbmcgKTtcblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIGhhbmRsZU1vdXNlRG93biApO1xuXHR9O1xuXG5cdGV2ZW50cygpO1xufTtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBkaXNhYmxlQm9keVNjcm9sbCwgZW5hYmxlQm9keVNjcm9sbCB9IGZyb20gJ2JvZHktc2Nyb2xsLWxvY2snO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cdGNvbnN0IG1vYmlsZVNjcmVlbldpZHRoID0gd2luZG93Lm1hdGNoTWVkaWEoICcobWF4LXdpZHRoOiAxMzUwcHgpJyApO1xuXHRjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcubWFpbi1jb250ZW50JyApO1xuXHRjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnI2pzLW5hdicgKTtcblx0Y29uc3QgbmF2YmFyTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCAnLm5hdi1saW5rJyApO1xuXHRjb25zdCBkcm9wZG93bkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy5kcm9wZG93bi1pdGVtJyApO1xuXG5cdGNvbnN0IGV2ZW50cyA9ICgpID0+IHtcblx0XHRvbkJvZHlUYXAoKTtcblx0XHRoYW5kbGVTY3JvbGxMb2NrKCk7XG5cdFx0aGFuZGxlRm9jdXNPdXQoKTtcblx0XHRwcmV2ZW50U3VibWVudUNsb3NpbmcoKTtcblx0fTtcblxuXHRjb25zdCBjbG9zZU1vYmlsZU1lbnUgPSAoKSA9PiB7XG5cdFx0JCggJy5uYXZiYXItY29sbGFwc2UnICkuY29sbGFwc2UoICdoaWRlJyApO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBDbG9zZSBoYW1idXJnZXIgbWVudSB3aGVuIHRhcHBpbmcgdGhlIHBhZ2UgY29udGVudC5cblx0ICovXG5cdGNvbnN0IG9uQm9keVRhcCA9ICgpID0+IHtcblx0XHRpZiAoIG1haW5Db250ZW50ICYmIG1vYmlsZVNjcmVlbldpZHRoLm1hdGNoZXMgKSB7XG5cdFx0XHRtYWluQ29udGVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnLCAoKSA9PiBjbG9zZU1vYmlsZU1lbnUoKSApO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogUHJldmVudHMgYm9keSBzY3JvbGwgYW5kIGVuYWJsZXMgbWVudSBzY3JvbGwgd2hlbiBtb2JpbGUgbWVudSBpcyBvcGVuZWQuXG5cdCAqL1xuXHRjb25zdCBoYW5kbGVTY3JvbGxMb2NrID0gKCkgPT4ge1xuXHRcdGNvbnN0ICRuYXZiYXJDb250ZW50ID0gJCggJyNuYXZiYXJDb250ZW50JyApO1xuXG5cdFx0JG5hdmJhckNvbnRlbnQub24oICdzaG93LmJzLmNvbGxhcHNlJywgKCkgPT4ge1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCAnanMtbW9iaWxlLW1lbnUtaXMtb3BlbicgKTtcblx0XHRcdGRpc2FibGVCb2R5U2Nyb2xsKCBuYXZiYXIgKTtcblx0XHR9ICk7XG5cblx0XHQkbmF2YmFyQ29udGVudC5vbiggJ2hpZGUuYnMuY29sbGFwc2UnLCAoKSA9PiB7XG5cdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoICdqcy1tb2JpbGUtbWVudS1pcy1vcGVuJyApO1xuXHRcdFx0ZW5hYmxlQm9keVNjcm9sbCggbmF2YmFyICk7XG5cdFx0fSApO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBBMTF5OiBjbG9zZSBoYW1idXJnZXIgbWVudSAmIGRyb3Bkb3ducyB3aGVuIGZvY3VzIGxlYXZlcy5cblx0ICovXG5cdGNvbnN0IGhhbmRsZUZvY3VzT3V0ID0gKCkgPT4ge1xuXHRcdGlmICggISBuYXZiYXJMaW5rcyApIHJldHVybjtcblxuXHRcdG5hdmJhckxpbmtzLmZvckVhY2goICggZWxlbWVudCApID0+IHtcblx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2ZvY3Vzb3V0JywgKCBlICkgPT4ge1xuXHRcdFx0XHRjb25zdCB0YXJnZXQgPSBlLnJlbGF0ZWRUYXJnZXQ7XG5cblx0XHRcdFx0aWYgKCAhIHRhcmdldCApIHJldHVybjtcblxuXHRcdFx0XHRjb25zdCBwYXJlbnQgPSB0YXJnZXQuY2xvc2VzdCggJy5uYXZiYXItY29sbGFwc2UnICk7XG5cblx0XHRcdFx0aWYgKCAhIHBhcmVudCApIGNsb3NlTW9iaWxlTWVudSgpO1xuXHRcdFx0fSApO1xuXHRcdH0gKTtcblx0fTtcblxuXHQvKipcblx0ICogUHJldmVudCBjbG9zaW5nIG9mIHN1Ym1lbnUgd2hlbiBjbGlja2luZyBvbiBhIGxpbmtcblx0ICovXG5cdGNvbnN0IHByZXZlbnRTdWJtZW51Q2xvc2luZyA9ICgpID0+IHtcblx0XHRkcm9wZG93bkl0ZW1zPy5mb3JFYWNoKCAoIGVsZW1lbnQgKSA9PiB7XG5cdFx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICggZSApID0+IGUuc3RvcFByb3BhZ2F0aW9uKCkgKTtcblx0XHR9ICk7XG5cdH07XG5cblx0ZXZlbnRzKCk7XG59O1xuIiwiaW1wb3J0IEhlYWRyb29tIGZyb20gJ2hlYWRyb29tLmpzJztcbmNsYXNzIE5hdmJhciBleHRlbmRzIEhlYWRyb29tIHtcblx0Y29uc3RydWN0b3IoIGVsZW0gKSB7XG5cdFx0c3VwZXIoIGVsZW0gKTtcblxuXHRcdHRoaXMub3B0aW9ucyA9IHtcblx0XHRcdHRvbGVyYW5jZToge1xuXHRcdFx0XHR1cDogMTAsXG5cdFx0XHRcdGRvd246IDMwLFxuXHRcdFx0fSxcblx0XHR9O1xuXG5cdFx0dGhpcy5kcm9wZG93bk1lbnVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy5kcm9wZG93bi1tZW51JyApO1xuXHRcdHRoaXMuZHJvcGRvd25NZW51TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdFx0Jy5tZW51LWl0ZW0taGFzLWNoaWxkcmVuJ1xuXHRcdCk7XG5cblx0XHRuZXcgSGVhZHJvb20oIGVsZW0sIHRoaXMub3B0aW9ucyApLmluaXQoKTtcblxuXHRcdHRoaXMuaW5pdCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqICBSZW1vdmUgZHJvcGRvd24gd2l0aCBlc2NhcGUga2V5IGlmIG1vdXNlIGlzIG92ZXIgYSBkcm9wZG93bi4gQXBwYXJlbnRseSBuZWVkZWQgZm9yIGFjY2Vzc2liaWxpdHkuXG5cdCAqICAxLiBMaXN0ZW5zIHRvIG1vdXNlbW92ZW1lbnQgaWYgaXQgZW50ZXJzIG9yIGxlYXZlcyBhIGRyb3Bkb3duIG1lbnUuXG5cdCAqL1xuXHRoYW5kbGVNb3VzZSgpIHtcblx0XHRpZiAoIHRoaXMuZHJvcGRvd25NZW51cyApIHtcblx0XHRcdHRoaXMuZHJvcGRvd25NZW51cy5mb3JFYWNoKCAoIGVsZW1lbnQgKSA9PiB7XG5cdFx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlZW50ZXInLCAoKSA9PlxuXHRcdFx0XHRcdHRoaXMub25Nb3VzZUVudGVyKClcblx0XHRcdFx0KTtcblx0XHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2VvdXQnLCAoKSA9PlxuXHRcdFx0XHRcdHRoaXMub25Nb3VzZUxlYXZlKClcblx0XHRcdFx0KTtcblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRpZiAoIHRoaXMuZHJvcGRvd25NZW51TGlua3MgKSB7XG5cdFx0XHR0aGlzLmRyb3Bkb3duTWVudUxpbmtzLmZvckVhY2goICggZWxlbWVudCApID0+IHtcblx0XHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2VlbnRlcicsICgpID0+XG5cdFx0XHRcdFx0dGhpcy5vbk1vdXNlRW50ZXIoKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcdFx0J21vdXNlb3V0Jyxcblx0XHRcdFx0XHQoKSA9PiB0aGlzLm9uTW91c2VMZWF2ZSgpLFxuXHRcdFx0XHRcdHRydWVcblx0XHRcdFx0KTtcblx0XHRcdH0gKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogMi4gSWYgdGhlIG1vdXNlIGVudGVyZWQgdGhlIGRyb3Bkb3duLCBsaXN0ZW4gaWYgdGhlIEVTQyBrZXkgaXMgcHJlc3NlZC5cblx0ICogMy4gQWRkIGFuIGhvdmVyLWJsb2NraW5nIGNsYXNzIHRvIGhpZGUgdGhlIGRyb3Bkb3duIG1lbnUuXG5cdCAqL1xuXHRvbk1vdXNlRW50ZXIoKSB7XG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2tleXVwJywgKCBlICkgPT4gdGhpcy5vbktleVVwKCBlICkgKTtcblx0fVxuXG5cdG9uS2V5VXAoIGUgKSB7XG5cdFx0aWYgKCB0aGlzLmRyb3Bkb3duTWVudUxpbmtzICYmIGUua2V5Q29kZSA9PT0gMjcgKSB7XG5cdFx0XHR0aGlzLmRyb3Bkb3duTWVudUxpbmtzLmZvckVhY2goICggZWxlbWVudCApID0+IHtcblx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKCAnanMtcmVtb3ZlLWhvdmVyJyApO1xuXHRcdFx0fSApO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiAgNC4gSWYgdGhlIG1vdXNlIGxlYXZlcyB0aGUgZHJvcGRvd24gYXJlYSwgcmVtb3ZlIHRoZSBob3Zlci1ibG9ja2luZyBjbGFzcyB0byByZS1lbmFibGUgdGhlIGhvdmVyXG5cdCAqL1xuXHRvbk1vdXNlTGVhdmUoKSB7XG5cdFx0aWYgKCB0aGlzLmRyb3Bkb3duTWVudUxpbmtzICkge1xuXHRcdFx0dGhpcy5kcm9wZG93bk1lbnVMaW5rcy5mb3JFYWNoKCAoIGVsZW1lbnQgKSA9PiB7XG5cdFx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSggJ2pzLXJlbW92ZS1ob3ZlcicgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cdH1cblxuXHRpbml0KCkge1xuXHRcdHRoaXMuaGFuZGxlTW91c2UoKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iLCIvKipcbiAqIEV4dGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgKiBhcyBmb2N1c1RyYXAgZnJvbSAnZm9jdXMtdHJhcCc7XG5cbi8qKlxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCB7IGNoZWNrQ2FuRm9jdXNUcmFwIH0gZnJvbSAnLi4vdXRpbHMvZm9jdXMtdHJhcC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0bGV0IGZvY3VzVHJhcFNlYXJjaGJhcjtcblx0Y29uc3Qgc2VhcmNoYmFySXNPcGVuID0gJ2pzLXNlYXJjaGJhci1pcy1vcGVuJztcblxuXHRjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcjanMtc2VhcmNoYmFyLWNsb3NlLWJ0bicgKTtcblx0Y29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnI2pzLXNlYXJjaGJhci1pbnB1dCcgKTtcblx0Y29uc3Qgb3BlbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcjanMtc2VhcmNoYmFyLW9wZW4tYnRuJyApO1xuXHRjb25zdCBzZWFyY2hiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnI2pzLXNlYXJjaGJhcicgKTtcblxuXHRjb25zdCBmb2N1c1RyYXBPcHRpb25zID0ge1xuXHRcdGFsbG93T3V0c2lkZUNsaWNrOiB0cnVlLFxuXHRcdGNoZWNrQ2FuRm9jdXNUcmFwLFxuXHRcdGNsaWNrT3V0c2lkZURlYWN0aXZhdGVzOiB0cnVlLFxuXHRcdG9uQWN0aXZhdGU6ICgpID0+IHtcblx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCggc2VhcmNoYmFySXNPcGVuICk7XG5cdFx0fSxcblx0XHRvbkRlYWN0aXZhdGU6ICgpID0+IHtcblx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSggc2VhcmNoYmFySXNPcGVuICk7XG5cdFx0XHRpbnB1dC52YWx1ZSA9ICcnO1xuXHRcdH0sXG5cdH07XG5cblx0Y29uc3QgZXZlbnRzID0gKCkgPT4ge1xuXHRcdGlmICggISBjbG9zZUJ0biB8fCAhIG9wZW5CdG4gfHwgISBzZWFyY2hiYXIgKSByZXR1cm47XG5cblx0XHRmb2N1c1RyYXBTZWFyY2hiYXIgPSBmb2N1c1RyYXAuY3JlYXRlRm9jdXNUcmFwKFxuXHRcdFx0c2VhcmNoYmFyLFxuXHRcdFx0Zm9jdXNUcmFwT3B0aW9uc1xuXHRcdCk7XG5cblx0XHRvcGVuQnRuLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGZvY3VzVHJhcFNlYXJjaGJhcj8uYWN0aXZhdGUgKTtcblx0XHRjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBmb2N1c1RyYXBTZWFyY2hiYXI/LmRlYWN0aXZhdGUgKTtcblx0fTtcblxuXHRldmVudHMoKTtcbn07XG4iLCIvKipcbiAqIEdldHMga2V5Ym9hcmQtZm9jdXNhYmxlIGVsZW1lbnRzIHdpdGhpbiBhIHNwZWNpZmllZCBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdG8gc2VhcmNoIHdpdGhpblxuICogQHJldHVybiB7SFRNTEVsZW1lbnRbXX0gQXJyYXkgb2YgZm9jdXNhYmxlIGVsZW1lbnRzXG4gKi9cbmV4cG9ydCBjb25zdCBmaW5kVGFiYmFibGUgPSAoIGVsZW1lbnQgKSA9PiB7XG5cdGNvbnN0IHRhYmJhYmxlRWxlbWVudHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdFx0J2J1dHRvbiwgW2hyZWZdLCBpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSwgW3RhYmluZGV4XTpub3QoW3RhYmluZGV4PVwiLTFcIl0pJ1xuXHQpO1xuXG5cdGNvbnN0IGFycmF5ID0gQXJyYXkuZnJvbSggdGFiYmFibGVFbGVtZW50cyApO1xuXG5cdHJldHVybiBhcnJheS5maWx0ZXIoXG5cdFx0KCBlbCApID0+XG5cdFx0XHQhIGVsLmhhc0F0dHJpYnV0ZSggJ2Rpc2FibGVkJyApICYmXG5cdFx0XHQhIGVsLmdldEF0dHJpYnV0ZSggJ2FyaWEtaGlkZGVuJyApICYmXG5cdFx0XHRlbC5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZSdcblx0KTtcbn07XG5cbi8qKlxuICogR2V0cyB0aGUgZmlyc3Qga2V5Ym9hcmQtZm9jdXNhYmxlIGVsZW1lbnQgd2l0aGluIGEgc3BlY2lmaWVkIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHRvIHNlYXJjaCB3aXRoaW5cbiAqIEByZXR1cm4ge0VsZW1lbnR8bnVsbH0gVGhlIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50XG4gKi9cbmV4cG9ydCBjb25zdCBmaW5kRmlyc3RUYWJiYWJsZSA9ICggZWxlbWVudCApID0+IHtcblx0Y29uc3QgdGFiYmFibGVFbGVtZW50cyA9IGZpbmRUYWJiYWJsZSggZWxlbWVudCApO1xuXG5cdHJldHVybiB0YWJiYWJsZUVsZW1lbnRzLmxlbmd0aCA/IHRhYmJhYmxlRWxlbWVudHNbIDAgXSA6IG51bGw7XG59O1xuXG4vKipcbiAqIFRyYW5zZm9ybSB0aGUgdGFnIG9mIGFuIGVsZW1lbnQgdG8gYW5vdGhlciB0YWcsIGUuZy4gPHA+IHRvIDxoMj4uXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50ICAgICBUaGUgZWxlbWVudCB0byB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7c3RyaW5nfSAgdHJhbnNmb3JtVG8gVGFnIHRvIHRyYW5zZm9ybSB0byAoZS5nLiAnaDInKVxuICogQHJldHVybiB7SFRNTEVsZW1lbnR8bnVsbH0gVHJhbnNmb3JtZWQgZWxlbWVudFxuICovXG5leHBvcnQgY29uc3QgdHJhbnNmb3JtVGFnID0gKCBlbGVtZW50LCB0cmFuc2Zvcm1UbyApID0+IHtcblx0aWYgKCAhIGVsZW1lbnQgKSByZXR1cm4gbnVsbDtcblxuXHRjb25zdCB0cmFuc2Zvcm1lZEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCB0cmFuc2Zvcm1UbyApO1xuXG5cdHRyYW5zZm9ybWVkRWxlbWVudC5pbm5lckhUTUwgPSBlbGVtZW50LmlubmVySFRNTDtcblxuXHRmb3IgKCBsZXQgaSA9IDA7IGkgPCBlbGVtZW50LmF0dHJpYnV0ZXMubGVuZ3RoOyBpKysgKSB7XG5cdFx0dHJhbnNmb3JtZWRFbGVtZW50LnNldEF0dHJpYnV0ZShcblx0XHRcdGVsZW1lbnQuYXR0cmlidXRlc1sgaSBdLm5hbWUsXG5cdFx0XHRlbGVtZW50LmF0dHJpYnV0ZXNbIGkgXS52YWx1ZVxuXHRcdCk7XG5cdH1cblxuXHRpZiAoICEgZWxlbWVudC5wYXJlbnROb2RlICkgcmV0dXJuIHRyYW5zZm9ybWVkRWxlbWVudDtcblxuXHRlbGVtZW50LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKCB0cmFuc2Zvcm1lZEVsZW1lbnQsIGVsZW1lbnQgKTtcblxuXHRyZXR1cm4gdHJhbnNmb3JtZWRFbGVtZW50O1xufTtcbiIsIi8qKlxuICogVGhlIGVsZW1lbnQgaGFzIHZpc2liaWxpdHk6IGhpZGRlbiwgd2hpY2ggbWFrZXMgaXQgaW5pdGlhbGx5IHVuLWZvY3VzYWJsZSwgY3JlYXRpbmcgYW4gZXJyb3IuXG4gKiBUaGlzIGVuc3VyZXMgYW4gd2FpdCB1bnRpbCBpdCBjYW4gYWN0aXZhdGUgdGhlIHRyYXAuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gZWxlbWVudHNcbiAqL1xuZXhwb3J0IGNvbnN0IGNoZWNrQ2FuRm9jdXNUcmFwID0gKCBlbGVtZW50cyApID0+IHtcblx0Y29uc3QgcmVzdWx0cyA9IGVsZW1lbnRzLm1hcCggKCBlbGVtZW50ICkgPT4ge1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZSggKCByZXNvbHZlICkgPT4ge1xuXHRcdFx0Y29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCggKCkgPT4ge1xuXHRcdFx0XHRpZiAoIGdldENvbXB1dGVkU3R5bGUoIGVsZW1lbnQgKS52aXNpYmlsaXR5ICE9PSAnaGlkZGVuJyApIHtcblx0XHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbCggaW50ZXJ2YWwgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgNTAgKTtcblx0XHR9ICk7XG5cdH0gKTtcblx0cmV0dXJuIFByb21pc2UuYWxsKCByZXN1bHRzICk7XG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJqUXVlcnlcIl07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IGZ1bmN0aW9uKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgY2h1bmtJZHMgPSBkZWZlcnJlZFtpXVswXTtcblx0XHR2YXIgZm4gPSBkZWZlcnJlZFtpXVsxXTtcblx0XHR2YXIgcHJpb3JpdHkgPSBkZWZlcnJlZFtpXVsyXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoZnVuY3Rpb24oa2V5KSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSk7IH0pKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJmcm9udGVuZFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IGZ1bmN0aW9uKGNodW5rSWQpIHsgcmV0dXJuIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMDsgfTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSBmdW5jdGlvbihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkge1xuXHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuXHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXHR2YXIgcnVudGltZSA9IGRhdGFbMl07XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZShmdW5jdGlvbihpZCkgeyByZXR1cm4gaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMDsgfSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rdGhlbWVfZnVzaW9uXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3RoZW1lX2Z1c2lvblwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvclwiXSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9odGRvY3Mvd3AtY29udGVudC90aGVtZXMvdGhlbWUtZnVzaW9uL2Fzc2V0cy9qcy9zcmMvZnJvbnRlbmQvYXBwLmpzXCIpOyB9KVxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JcIl0sIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vaHRkb2NzL3dwLWNvbnRlbnQvdGhlbWVzL3RoZW1lLWZ1c2lvbi9hc3NldHMvc2Nzcy9zdHlsZS5zY3NzXCIpOyB9KVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJBMTF5Q29va2llWWVzIiwiJCIsIkNhcmRzIiwiRmFjZXRXUCIsIkZvY3VzU3R5bGUiLCJNb2JpbGVNZW51IiwiTmF2YmFyIiwiU2VhcmNoQmFyIiwiYXBwIiwiZ2V0SW5zdGFuY2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwidG9vbHRpcCIsInNlbGVjdG9yIiwibmF2aWdhdG9yIiwic2VydmljZVdvcmtlciIsInJlZ2lzdGVyIiwic2NvcGUiLCJjYXJkcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJldmVudHMiLCJhZGRMaW5rVG9DYXJkcyIsImZvckVhY2giLCJjYXJkIiwiYWRkTGlua0NsYXNzIiwibGlua3MiLCJsaW5rIiwiZ2V0QXR0cmlidXRlIiwiY2xhc3NMaXN0IiwiYWRkIiwiY29udGFpbnMiLCJtb3ZlTGlua1RvSGVhZGluZyIsImhlYWRpbmciLCJuZXdMaW5rIiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsImExMXlIaWRlQnV0dG9uIiwiYnV0dG9uIiwic2V0QXR0cmlidXRlIiwiZmluZEZpcnN0VGFiYmFibGUiLCJvbkZhY2V0UmVmcmVzaCIsImUiLCJvbkZhY2V0TG9hZCIsInZpZXciLCJnZXRFbGVtZW50QnlJZCIsInJlbW92ZSIsInNjcm9sbFRvVG9wIiwiYWRkQXJpYUxhYmVsVG9TZWFyY2giLCJhZGRBcmlhQ3VycmVudFRvUGFnZXIiLCJjaGFuZ2VUYWJGb2N1c1BhZ2VyIiwidG9nZ2xlRmlsdGVyTGFiZWxBbmRCdXR0b24iLCJ0b2dnbGVOb1Jlc3VsdHNNZXNzYWdlIiwic2V0VGltZW91dCIsImNoYW5nZUFyaWFMYWJlbFNlbGVjdGlvbnMiLCJwcmV2ZW50RGVmYXVsdCIsIm9mZnNldCIsInNjcm9sbFBvc2l0aW9uIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwid2luZG93Iiwic2Nyb2xsWSIsIkZXUCIsImxvYWRlZCIsInNjcm9sbFRvIiwiYmVoYXZpb3IiLCJzZWFyY2hJbnB1dCIsInBsYWNlaG9sZGVyIiwiYWN0aXZlUGFnZSIsInNlbGVjdGlvbnMiLCJzZWxlY3Rpb24iLCJsYWJlbCIsInBhZ2VyQnV0dG9ucyIsImxlbmd0aCIsInBhZ2VyIiwia2V5IiwiY2hhbmdlVGFiRm9jdXNUb1RlbXBsYXRlIiwidGVtcGxhdGUiLCJmaXJzdFRhYmJhYmxlIiwiZm9jdXMiLCJmaWx0ZXJFbGVtZW50cyIsImZpbHRlckVsZW1lbnQiLCJidWlsZFF1ZXJ5U3RyaW5nIiwibm9SZXN1bHRzIiwibm9SZXN1bHQiLCJ0b2dnbGUiLCJzZXR0aW5ncyIsInRvdGFsX3Jvd3MiLCJib2R5Q2xhc3NUYWJiaW5nIiwiaGFuZGxlVGFiIiwiaGFuZGxlTW91c2VEb3duIiwiYm9keSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXNhYmxlQm9keVNjcm9sbCIsImVuYWJsZUJvZHlTY3JvbGwiLCJtb2JpbGVTY3JlZW5XaWR0aCIsIm1hdGNoTWVkaWEiLCJtYWluQ29udGVudCIsIm5hdmJhciIsIm5hdmJhckxpbmtzIiwiZHJvcGRvd25JdGVtcyIsIm9uQm9keVRhcCIsImhhbmRsZVNjcm9sbExvY2siLCJoYW5kbGVGb2N1c091dCIsInByZXZlbnRTdWJtZW51Q2xvc2luZyIsImNsb3NlTW9iaWxlTWVudSIsImNvbGxhcHNlIiwibWF0Y2hlcyIsIiRuYXZiYXJDb250ZW50Iiwib24iLCJlbGVtZW50IiwicmVsYXRlZFRhcmdldCIsInBhcmVudCIsImNsb3Nlc3QiLCJzdG9wUHJvcGFnYXRpb24iLCJIZWFkcm9vbSIsImNvbnN0cnVjdG9yIiwiZWxlbSIsIm9wdGlvbnMiLCJ0b2xlcmFuY2UiLCJ1cCIsImRvd24iLCJkcm9wZG93bk1lbnVzIiwiZHJvcGRvd25NZW51TGlua3MiLCJpbml0IiwiaGFuZGxlTW91c2UiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJvbktleVVwIiwia2V5Q29kZSIsImZvY3VzVHJhcCIsImNoZWNrQ2FuRm9jdXNUcmFwIiwiZm9jdXNUcmFwU2VhcmNoYmFyIiwic2VhcmNoYmFySXNPcGVuIiwiY2xvc2VCdG4iLCJpbnB1dCIsIm9wZW5CdG4iLCJzZWFyY2hiYXIiLCJmb2N1c1RyYXBPcHRpb25zIiwiYWxsb3dPdXRzaWRlQ2xpY2siLCJjbGlja091dHNpZGVEZWFjdGl2YXRlcyIsIm9uQWN0aXZhdGUiLCJvbkRlYWN0aXZhdGUiLCJ2YWx1ZSIsImNyZWF0ZUZvY3VzVHJhcCIsImFjdGl2YXRlIiwiZGVhY3RpdmF0ZSIsImZpbmRUYWJiYWJsZSIsInRhYmJhYmxlRWxlbWVudHMiLCJhcnJheSIsIkFycmF5IiwiZnJvbSIsImZpbHRlciIsImVsIiwiaGFzQXR0cmlidXRlIiwic3R5bGUiLCJkaXNwbGF5IiwidHJhbnNmb3JtVGFnIiwidHJhbnNmb3JtVG8iLCJ0cmFuc2Zvcm1lZEVsZW1lbnQiLCJpIiwiYXR0cmlidXRlcyIsIm5hbWUiLCJwYXJlbnROb2RlIiwicmVwbGFjZUNoaWxkIiwiZWxlbWVudHMiLCJyZXN1bHRzIiwibWFwIiwiUHJvbWlzZSIsInJlc29sdmUiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInZpc2liaWxpdHkiLCJjbGVhckludGVydmFsIiwiYWxsIl0sInNvdXJjZVJvb3QiOiIifQ==
