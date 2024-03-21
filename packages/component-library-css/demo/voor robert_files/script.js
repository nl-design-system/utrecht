/**
 * WordPress localize object mapped to a constant.
 */
const _ckyStore = window._ckyConfig;
const _ckyStyle = window._ckyStyles;

_ckyStore._backupNodes = [];
_ckyStore._resetConsentID = false;
_ckyStore._bannerState = false;
_ckyStore._preferenceOriginTag = false;

window.cookieyes = window.cookieyes || {};
const ref = window.cookieyes;
ref._ckyConsentStore = new Map();

ref._ckyGetCookieMap = function () {
  const cookieMap = {};
  try {
    document.cookie.split(';').map((cookie) => {
      const [key, value] = cookie.split('=');
      if (!key) return;
      cookieMap[key.trim()] = value;
    });
  } catch (error) {}
  return cookieMap;
};

const currentCookieMap = ref._ckyGetCookieMap();
ref._ckyGetFromStore = function (key) {
  return ref._ckyConsentStore.get(key) || '';
};

ref._ckySetInStore = function (key, value) {
  ref._ckyConsentStore.set(key, value);
  let cookieStringArray = [];
  for (const [key, value] of ref._ckyConsentStore) {
    cookieStringArray.push(`${key}:${value}`);
  }
  const scriptExpiry = _ckyStore && _ckyStore._expiry ? _ckyStore._expiry : 365;
  ref._ckySetCookie('cookieyes-consent', cookieStringArray.join(','), scriptExpiry);
};

const cookieyesConsentMap = (currentCookieMap['cookieyes-consent'] || '').split(',').reduce((prev, curr) => {
  if (!curr) return prev;
  const [key, value] = curr.split(':');
  prev[key] = value;
  return prev;
}, {});
['consentid', 'consent', 'action']
  .concat(_ckyStore._categories.map(({ slug }) => slug))
  .map((item) => ref._ckyConsentStore.set(item, cookieyesConsentMap[item] || ''));

/**
 * Get the value of cookie by it's name.
 *
 * @param {string} name Name of the cookie
 * @returns {string}
 */
ref._ckyGetCookie = function (name) {
  const value = new RegExp(`${name}=([^;]+)`).exec(document.cookie);
  return value && Array.isArray(value) && value[1] ? unescape(value[1]) : null;
};

/**
 * Set a cookie on document.cookie object.
 *
 * @param {*} name Name of the cookie.
 * @param {*} value Value to be set.
 * @param {*} days Expiry in days.
 * @param {*} domain Cookie domain.
 */
ref._ckySetCookie = function (name, value, days = 0, domain = _ckyStore._rootDomain) {
  const date = new Date();
  if (!!domain) {
    domain = `domain=${domain}`;
  }
  const toSetTime = days === 0 ? 0 : date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${new Date(
    toSetTime,
  ).toUTCString()}; path=/;${domain}; SameSite=Strict;`;
};

function _ckySetConsentID() {
  const cookieyesID = ref._ckyGetFromStore('consentid');
  if (cookieyesID) return;
  const consentID = ref._ckyRandomString(32);
  ref._ckySetInStore('consentid', consentID);
  _ckyStore._resetConsentID = true;
}

_revisitCkyConsent = function () {
  const type = _ckyGetType();
  if (type === 'classic') {
    _ckyShowBanner();
  }
  _ckySetPreferenceAction();
  _ckyToggleRevisit();
};
/**
 * Search an element by it's data-cky-tag attribute
 *
 * @param {string} tag data-cky-tag of an element.
 * @returns {object}
 */
function _ckyGetElementByTag(tag) {
  const item = document.querySelector('[data-cky-tag=' + tag + ']');
  return item ? item : false;
}

function _ckyEscapeRegex(literal) {
  return literal.replace(/[.*+?^${}()[\]\\]/g, '\\$&');
}

/**
 * Bind click event to banner elements.
 *
 * @param {string} tag data-cky-tag of the element
 * @param {function} fn callback function
 */
function _ckyAttachListener(selector, fn) {
  const item = _ckyFindElement(selector);
  item && item.addEventListener('click', fn);
}

function _ckyClassAdd() {
  return _ckyClassAction('add', ...arguments);
}

function _ckyClassRemove() {
  return _ckyClassAction('remove', ...arguments);
}

function _ckyClassToggle() {
  return _ckyClassAction('toggle', ...arguments);
}

function _ckyClassAction(action, selector, className, forParent = true) {
  const item = _ckyFindElement(selector, forParent);
  return item && item.classList[action](className);
}

function _ckyFindElement(selector, forParent) {
  let createdSelector = selector;
  switch (true) {
    case selector.startsWith('='):
      createdSelector = `[data-cky-tag="${selector.substring(1)}"]`;
    default:
      break;
  }
  const element = document.querySelector(createdSelector);
  if (!element || (forParent && !element.parentElement)) return null;
  return forParent ? element.parentElement : element;
}
/**
 * Remove an element from the DOM.
 *
 * @param {string} tag data-cky-tag of the element.
 */
function _ckyRemoveElement(tag) {
  const item = _ckyGetElementByTag(tag);
  item && item.remove();
}

/**
 * Remove styles by it's id.
 */
function _ckyRemoveStyles() {
  const item = document.getElementById('cky-style-inline');
  item && item.remove();
}

/**
 * Generate a random string for logging purposes.
 *
 * @param {integer} length Length of the string to be generated.
 * @returns
 */
ref._ckyRandomString = function (length, allChars = true) {
  const chars = `${allChars ? `0123456789` : ''}ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz`;
  const response = [];
  for (let i = 0; i < length; i++) response.push(chars[Math.floor(Math.random() * chars.length)]);
  if (!allChars) return response.join('');
  return btoa(response.join('')).replace(/\=+$/, '');
};

/**
 * Remove banner if necessary.
 */
function _ckyRemoveBanner() {
  _ckyHideBanner();
  if (_ckyStore._bannerConfig.config.revisitConsent.status === true) {
    _ckyShowRevisit();
  }
}

/**
 * Initialize the plugin front-end operations.
 *
 * @returns {boolean}
 */
function _ckyInitOperations() {
  _ckyAttachNoticeStyles();
  _ckyAttachShortCodeStyles();
  _ckyRenderBanner();
  _ckySetShowMoreLess();
  if (!ref._ckyGetFromStore('action') || _ckyPreviewEnabled()) {
    _ckyShowBanner();
    _ckySetInitialState();
    _ckySetConsentID();
  } else {
    _ckyRemoveBanner();
  }
}
function _ckyPreviewEnabled() {
  let params = new URL(document.location).searchParams;
  return params.get('cky_preview') && params.get('cky_preview') === 'true';
}
function _ckyToggleAriaExpandStatus(selector, forceDefault = null) {
  const element = _ckyFindElement(selector);

  if (!element) return;
  if (forceDefault) return element.setAttribute('aria-expanded', forceDefault);
  const toggleFinalValue = element.getAttribute('aria-expanded') === 'true' ? 'false' : 'true';
  element.setAttribute('aria-expanded', toggleFinalValue);
}
/**
 * Sets the initial state of the plugin.
 */
function _ckySetInitialState() {
  const activeLaw = _ckyGetLaw();
  ref._ckySetInStore('consent', 'no');
  const ccpaCheckBoxValue = _ckyFindCheckBoxValue();
  const responseCategories = { accepted: [], rejected: [] };
  let valueToSet = 'yes';
  for (const category of _ckyStore._categories) {
    if (
      (activeLaw === 'gdpr' && !category.isNecessary && !category.defaultConsent[activeLaw]) ||
      (activeLaw === 'ccpa' && ccpaCheckBoxValue && !category.defaultConsent.ccpa)
    ) {
      valueToSet = 'no';
    }
    if (valueToSet === 'no') responseCategories.rejected.push(category.slug);
    else responseCategories.accepted.push(category.slug);
    ref._ckySetInStore(`${category.slug}`, valueToSet);
  }
  _ckyUnblock();
}

/**
 * Add a class based on the banner type and position. Eg: 'cky-banner-top'
 *
 * @returns {boolean}
 */
function _ckyAddPositionClass() {
  const notice = _ckyGetElementByTag('notice');
  if (!notice) return false;
  const container = notice.closest('.cky-consent-container');
  if (!container) return false;
  const type = _ckyStore._bannerConfig.settings.type;
  let position = _ckyStore._bannerConfig.settings.position;
  if (type === 'popup') {
    position = 'center';
  }
  const noticeClass = 'cky' + '-' + type + '-' + position;
  container.classList.add(noticeClass);
  const revisitConsent = _ckyGetElementByTag('revisit-consent');
  if (!revisitConsent) return false;
  const revisitPosition = 'cky-revisit-' + _ckyStore._bannerConfig.config.revisitConsent.position;
  revisitConsent.classList.add(revisitPosition);
}

/**
 * Initialize the plugin operations.
 */
async function _ckyInit() {
  try {
    _ckyInitOperations();
    _ckyRemoveAllDeadCookies();
    _ckyWatchBannerElement();
  } catch (err) {
    console.error(err);
  }
}

/**
 * Domready event, alternative to jQuery(document).ready() function
 *
 * @param {function} callback
 * @returns
 */
function _ckyDomReady(callback) {
  if (typeof document === 'undefined') {
    return;
  }
  if (
    document.readyState === 'complete' /** DOMContentLoaded + Images/Styles/etc loaded, so we call directly. */ ||
    document.readyState === 'interactive' /** DOMContentLoaded fires at this point, so we call directly. */
  ) {
    return void callback();
  } /** DOMContentLoaded has not fired yet, delay callback until then. */
  document.addEventListener('DOMContentLoaded', callback);
}

/**
 * Callback function to Domready event.
 */
_ckyDomReady(async function () {
  try {
    await _ckyInit();
  } catch (err) {
    console.error(err);
  }
});

/**
 * Register event handler for all the action elements.
 */
function _ckyRegisterListeners() {
  for (const { slug } of _ckyStore._categories) {
    _ckyAttachListener('detail-category-title', () =>
      document.getElementById(`ckyCategory${slug}`).classList.toggle('cky-tab-active'),
    );
  }
  _ckyAttachListener('=settings-button', () => _ckySetPreferenceAction('settings-button'));
  _ckyAttachListener('=detail-close', () => _ckyHidePreferenceCenter());
  _ckyAttachListener('=optout-cancel-button', () => _ckyHidePreferenceCenter());
  _ckyAttachListener('=close-button', () => _ckyActionClose());
  _ckyAttachListener('=donotsell-button', () => _ckySetPreferenceAction('donotsell-button'));
  _ckyAttachListener('=reject-button', _ckyAcceptReject('reject'));
  _ckyAttachListener('=accept-button', _ckyAcceptReject('all'));
  _ckyAttachListener('=detail-accept-button', _ckyAcceptReject('all'));
  _ckyAttachListener('=detail-save-button', _ckyAcceptReject());
  _ckyAttachListener('=detail-category-preview-save-button', _ckyAcceptReject());
  _ckyAttachListener('=optout-confirm-button', _ckyAcceptReject());
  _ckyAttachListener('=detail-reject-button', _ckyAcceptReject('reject'));
  _ckyAttachListener('=revisit-consent', () => _revisitCkyConsent());
  _ckyAttachListener('=optout-close', () => _ckyHidePreferenceCenter());
}

function _ckyAttachCategoryListeners() {
  if (!_ckyStore._bannerConfig.config.auditTable.status) return;
  const categoryNames = _ckyStore._categories.map(({ slug }) => slug);
  categoryNames.map((category) => {
    const selector = `#ckyDetailCategory${category}`;
    const accordionButtonSelector = `${selector}  .cky-accordion-btn`;
    _ckyToggleAriaExpandStatus(accordionButtonSelector, 'false');
    _ckyAttachListener(selector, ({ target: { id } }) => {
      if (id === `ckySwitch${category}` || !_ckyClassToggle(selector, 'cky-accordion-active', false)) {
        _ckyToggleAriaExpandStatus(accordionButtonSelector, 'false');
        return;
      }
      _ckyToggleAriaExpandStatus(accordionButtonSelector, 'true');
      categoryNames
        .filter((categoryName) => categoryName !== category)
        .map((filteredName) => {
          _ckyClassRemove(`#ckyDetailCategory${filteredName}`, 'cky-accordion-active', false);
          _ckyToggleAriaExpandStatus(`#ckyDetailCategory${filteredName} .cky-accordion-btn`, 'false');
        });
    });
  });
}
/**
 * Add support for accordion tabs on the privacy overview screen.
 */
function _ckyInitiAccordionTabs() {
  document.querySelectorAll('.cky-accordion').forEach((item) =>
    item.addEventListener('click', function (event) {
      if (event.target.type === 'checkbox') return;
      this.classList.toggle('cky-accordion-active');
    }),
  );
}

function _ckyToggleBanner(force = false) {
  const notice = _ckyGetElementByTag('notice');
  const container = (notice && notice.closest('.cky-consent-container')) || false;
  if (container) {
    force === true ? container.classList.add('cky-hide') : container.classList.toggle('cky-hide');
  }
}

function _ckyToggleRevisit(force = false) {
  const revisit = _ckyGetRevisit();
  if (revisit) {
    force === true ? _ckyRevisitHide() : revisit.classList.toggle('cky-revisit-hide');
  }
}
function _ckyGetLaw() {
  return _ckyStore._bannerConfig.settings.applicableLaw;
}
function _ckyGetType() {
  return _ckyStore._bannerConfig.settings.type;
}
function _ckyGetBanner() {
  const notice = _ckyGetElementByTag('notice');
  const container = (notice && notice.closest('.cky-consent-container')) || false;
  return (container && container) || false;
}
function _ckyHideBanner() {
  const notice = _ckyGetBanner();
  notice && notice.classList.add('cky-hide');
}
function _ckyShowBanner() {
  const notice = _ckyGetBanner();
  notice && notice.classList.remove('cky-hide');
}
function _ckyHideOverLay() {
  const overlay = document.querySelector('.cky-overlay');
  overlay && overlay.classList.add('cky-hide');
}
function _ckyShowOverLay() {
  const overlay = document.querySelector('.cky-overlay');
  overlay && overlay.classList.remove('cky-hide');
}
function _ckyToggleOverLay() {
  const overlay = document.querySelector('.cky-overlay');
  overlay && overlay.classList.toggle('cky-hide');
}
function _ckyGetPreferenceCenter() {
  if (_ckyGetType() === 'classic') {
    return _ckyGetBanner();
  }
  let element = _ckyGetLaw() === 'ccpa' ? _ckyGetElementByTag('optout-popup') : _ckyGetElementByTag('detail');
  return (element && element.closest('.cky-modal')) || false;
}
function _ckyHidePreferenceCenter() {
  const element = _ckyGetPreferenceCenter();
  element && element.classList.remove(_ckyGetPreferenceClass());
  if (_ckyGetType() !== 'classic') {
    _ckyHideOverLay();
    if (!ref._ckyGetFromStore('action')) _ckyShowBanner();
  } else {
    _ckyToggleAriaExpandStatus('=settings-button', 'false');
    _ckyClassRemove('=notice', 'cky-consent-bar-expand');
  }
  if (ref._ckyGetFromStore('action')) _ckyShowRevisit();
  const origin = _ckyStore._preferenceOriginTag;
  origin && _ckySetFocus(origin);
}
function _ckyShowPreferenceCenter() {
  const element = _ckyGetPreferenceCenter();
  element && element.classList.add(_ckyGetPreferenceClass());
  if (_ckyGetType() !== 'classic') {
    _ckyShowOverLay();
    _ckyHideBanner();
  } else {
    _ckyToggleAriaExpandStatus('=settings-button');
    _ckyClassAdd('=notice', 'cky-consent-bar-expand');
  }
}
function _ckyTogglePreferenceCenter() {
  const element = _ckyGetPreferenceCenter();
  element && element.classList.toggle(_ckyGetPreferenceClass());
  if (_ckyGetType() !== 'classic') _ckyToggleOverLay();
}
function _ckyGetPreferenceClass() {
  return _ckyGetType() === 'classic' ? 'cky-consent-bar-expand' : 'cky-modal-open';
}

function _ckyGetRevisit() {
  const revisit = _ckyGetElementByTag('revisit-consent');
  return (revisit && revisit) || false;
}
function _ckyHideRevisit() {
  const revisit = _ckyGetRevisit();
  revisit && revisit.classList.add('cky-revisit-hide');
}
function _ckyShowRevisit() {
  const revisit = _ckyGetRevisit();
  revisit && revisit.classList.remove('cky-revisit-hide');
}
function _ckySetPreferenceAction(tagName = false) {
  _ckyStore._preferenceOriginTag = tagName;
  if (_ckyGetType() === 'classic') {
    _ckyTogglePreferenceCenter();
    _ckyToggleAriaExpandStatus('=settings-button');
  } else {
    _ckyShowPreferenceCenter();
  }
}
function _ckyGetFocusableElements(element) {
  const wrapperElement = document.querySelector(`[data-cky-tag="${element}"]`);
  if (!wrapperElement) return [];
  const focussableElements = Array.from(
    wrapperElement.querySelectorAll(
      'a:not([disabled]), button:not([disabled]), [tabindex]:not([disabled]):not([tabindex="-1"])',
    ),
  ).filter((element) => element.style.display !== 'none');
  if (focussableElements.length <= 0) return [];
  return [focussableElements[0], focussableElements[focussableElements.length - 1]];
}
function _ckyLoopFocus() {
  const activeLaw = _ckyGetLaw();
  const bannerType = _ckyGetType();
  if (bannerType === 'classic') return;
  if (bannerType === 'popup') {
    const [firstElementBanner, lastElementBanner] = _ckyGetFocusableElements('notice');
    _ckyAttachFocusLoop(firstElementBanner, lastElementBanner, true);
    _ckyAttachFocusLoop(lastElementBanner, firstElementBanner);
  }
  const [firstElementPopup, lastElementPopup] = _ckyGetFocusableElements(
    activeLaw === 'ccpa' ? 'optout-popup' : 'detail',
  );
  _ckyAttachFocusLoop(firstElementPopup, lastElementPopup, true);
  _ckyAttachFocusLoop(lastElementPopup, firstElementPopup);
}
function _ckyAttachFocusLoop(element, targetElement, isReverse = false) {
  if (!element || !targetElement) return;
  element.addEventListener('keydown', (event) => {
    if (event.which !== 9 || (isReverse && !event.shiftKey) || (!isReverse && event.shiftKey)) return;
    event.preventDefault();
    targetElement.focus();
  });
}

/**
 * Replace footer shadow with current preference center background.
 *
 * @param {object} $doc Dom node.
 * @returns
 */
function _ckySetFooterShadow($doc) {
  const footer = $doc.querySelector('[data-cky-tag="detail"] .cky-footer-shadow');
  const preference = $doc.querySelector('[data-cky-tag="detail"]');
  if (!footer) return;
  const background = (preference && preference.style.backgroundColor) || '#ffffff';
  footer.style.background = `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, ${background} 100%)`;
}

/**
 * Remove all the rejected cookies.
 *
 * @param {object} cookies Cookies list.
 */
function _ckyRemoveDeadCookies({ cookies }) {
  const currentCookieMap = ref._ckyGetCookieMap();
  for (const { cookieID, domain } of cookies)
    if (currentCookieMap[cookieID])
      [domain, ''].map((cookieDomain) => ref._ckySetCookie(cookieID, '', 0, cookieDomain));
}
function _ckySetPreferenceCheckBoxStates(revisit = false) {
  for (const category of _ckyStore._categories) {
    const cookieValue = ref._ckyGetFromStore(category.slug);
    const checked =
      cookieValue === 'yes' || (!cookieValue && category.defaultConsent[_ckyGetLaw()]) || category.isNecessary;

    const disabled = category.isNecessary;
    const shortCodeData = _ckyStore._shortCodes.find((code) => code.key === 'cky_category_toggle_label');
    const toggleTextFormatted = shortCodeData.content.replace(
      `[cky_preference_{{category_slug}}_title]`,
      category.name,
    );
    _ckySetCheckboxes(category, checked, disabled, toggleTextFormatted, revisit);
    _ckySetPreferenceState(category);
  }
}

function _ckySetCheckboxes(category, checked, disabled, formattedLabel, revisit = false) {
  const toggle = _ckyStore._bannerConfig.config.preferenceCenter.toggle;
  const activeColor = toggle.states.active.styles['background-color'];
  const inactiveColor = toggle.states.inactive.styles['background-color'];

  [`ckyCategoryDirect`, `ckySwitch`].map((key) => {
    const boxElem = document.getElementById(`${key}${category.slug}`);
    if (!boxElem) return;
    _ckySetCategoryToggle(boxElem, category, revisit);
    boxElem.checked = checked;
    boxElem.disabled = disabled;
    boxElem.style.backgroundColor = checked ? activeColor : inactiveColor;
    _ckySetCheckBoxAriaLabel(boxElem, checked, formattedLabel);
    if (revisit) return;
    boxElem.addEventListener('change', ({ currentTarget: elem }) => {
      const isChecked = elem.checked;
      elem.style.backgroundColor = isChecked ? activeColor : inactiveColor;
      _ckySetCheckBoxAriaLabel(boxElem, isChecked, formattedLabel);
    });
  });
}
function _ckySetCategoryToggle(element, category = {}, revisit = false) {
  if (revisit) return;
  if (element.parentElement.getAttribute('data-cky-tag') === 'detail-category-toggle') {
    _ckySetCategoryPreferenceToggle(element, category);
  } else if (element.parentElement.getAttribute('data-cky-tag') === 'detail-category-preview-toggle') {
    _ckySetCategoryPreview(element, category);
  }
}
function _ckySetCategoryPreferenceToggle(element, category) {
  let toggleContainer = element.closest('.cky-accordion-item');
  if (!toggleContainer) return;
  const toggleSwitch = toggleContainer.querySelector('.cky-switch');
  const necessaryText = toggleContainer.querySelector('.cky-always-active');
  if (category.isNecessary) {
    toggleSwitch && toggleSwitch.remove();
  } else {
    necessaryText && necessaryText.remove();
    if (
      (_ckyGetType() === 'classic' && _ckyStore._bannerConfig.config.categoryPreview.status) ||
      (category.cookies && category.cookies.length === 0)
    ) {
      toggleSwitch && toggleSwitch.remove();
    }
  }
}
function _ckySetPreferenceState(category) {
  if (_ckyStore._bannerConfig.config.auditTable.status === false) {
    const tableElement = document.querySelector(`#ckyDetailCategory${category.slug} [data-cky-tag="audit-table"]`);
    tableElement && tableElement.remove();
    const chevronElement = document.querySelector(`#ckyDetailCategory${category.slug} .cky-accordion-chevron`);
    chevronElement && chevronElement.classList.add('cky-accordion-chevron-hide');
  }
}
function _ckySetCategoryPreview(element, category) {
  if (category.cookies && category.cookies.length === 0 && !category.isNecessary)
    element.parentElement.parentElement.remove();
}

function _ckySetCheckBoxAriaLabel(boxElem, isChecked, formattedLabel, isCCPA = false) {
  if (!boxElem) return;
  const keyName = isChecked ? 'disable' : 'enable';
  const textCode = `cky_${keyName}_${isCCPA ? 'optout' : 'category'}_label`;
  const shortCodeData = _ckyStore._shortCodes.find((code) => code.key === textCode);
  if (!shortCodeData) return;
  const labelText = formattedLabel.replace(/{{status}}/g, keyName).replace(`[${textCode}]`, shortCodeData.content);
  boxElem.setAttribute('aria-label', labelText);
}
/**
 * Render banner after processing.
 */
function _ckyRenderBanner() {
  const template = document.getElementById('ckyBannerTemplate');
  const templateHtml = template.innerHTML;
  const doc = new DOMParser().parseFromString(templateHtml, 'text/html');
  _ckySetFooterShadow(doc);
  document.body.insertAdjacentHTML('afterbegin', doc.body.innerHTML);
  if (_ckyGetType() === 'classic') _ckyToggleAriaExpandStatus('=settings-button', 'false');
  _ckySetPreferenceCheckBoxStates();
  _ckyAttachCategoryListeners();
  _ckyRegisterListeners();
  _ckySetCCPAOptions();
  _ckySetPlaceHolder();
  _ckyAttachReadMore();
  _ckyRemoveStyles();
  _ckyAddPositionClass();
  _ckyAddRtlClass();
  _ckySetPoweredBy();
  _ckyLoopFocus();
}

/**
 * Accept or reject the consent based on the option.
 *
 * @param {string} option Type of consent.
 * @returns {void}
 */
function _ckyAcceptReject(option = 'custom') {
  return () => {
    _ckyAcceptCookies(option);
    _ckyRemoveBanner();
    _ckyHidePreferenceCenter();
    _ckyAfterConsent();
  };
}

function _ckyActionClose() {
  ref._ckySetInStore('action', 'yes');
  _ckyRemoveBanner();
}
/**
 * Consent accept callback.
 *
 * @param {string} choice  Type of consent.
 */
function _ckyAcceptCookies(choice = 'all') {
  const activeLaw = _ckyGetLaw();
  const ccpaCheckBoxValue = _ckyFindCheckBoxValue();

  ref._ckySetInStore('action', 'yes');
  if (activeLaw === 'gdpr') {
    ref._ckySetInStore('consent', choice === 'reject' ? 'no' : 'yes');
  } else {
    ref._ckySetInStore('consent', ccpaCheckBoxValue ? 'yes' : 'no');
  }
  const responseCategories = { accepted: [], rejected: [] };
  for (const category of _ckyStore._categories) {
    let valueToSet = 'no';
    if (activeLaw === 'gdpr') {
      valueToSet =
        !category.isNecessary && (choice === 'reject' || (choice === 'custom' && !_ckyFindCheckBoxValue(category.slug)))
          ? 'no'
          : 'yes';
    } else {
      valueToSet = ccpaCheckBoxValue && !category.defaultConsent.ccpa ? 'no' : 'yes';
    }
    ref._ckySetInStore(`${category.slug}`, valueToSet);
    if (valueToSet === 'no') {
      responseCategories.rejected.push(category.slug);
      _ckyRemoveDeadCookies(category);
    } else responseCategories.accepted.push(category.slug);
  }
  _ckyUnblock();
}
function _ckySetShowMoreLess() {
  const activeLaw = _ckyGetLaw();
  const showCode = _ckyStore._shortCodes.find((code) => code.key === 'cky_show_desc');
  const hideCode = _ckyStore._shortCodes.find((code) => code.key === 'cky_hide_desc');

  if (!showCode || !hideCode) return;
  const hideButtonContent = hideCode.content;
  const showButtonContent = showCode.content;

  const contentLimit = window.innerWidth < 376 ? 150 : 300;
  const element = document.querySelector(`[data-cky-tag="${activeLaw === 'gdpr' ? 'detail' : 'optout'}-description"]`);
  const content = element.textContent;
  if (content.length < contentLimit) return;
  const contentHTML = element.innerHTML;
  const htmlDoc = new DOMParser().parseFromString(contentHTML, 'text/html');
  const innerElements = htmlDoc.querySelectorAll('body > p');
  if (innerElements.length <= 1) return;
  let strippedContent = ``;
  for (let index = 0; index < innerElements.length; index++) {
    if (index === innerElements.length - 1) return;
    const element = innerElements[index];
    if (`${strippedContent}${element.outerHTML}`.length > contentLimit)
      element.insertAdjacentHTML('beforeend', `...&nbsp;${showButtonContent}`);
    strippedContent = `${strippedContent}${element.outerHTML}`;
    if (strippedContent.length > contentLimit) break;
  }
  function showMoreHandler() {
    element.innerHTML = `${contentHTML}${hideButtonContent}`;
    _ckyAttachListener('=hide-desc-button', showLessHandler);
  }
  function showLessHandler() {
    element.innerHTML = strippedContent;
    _ckyAttachListener('=show-desc-button', showMoreHandler);
  }
  showLessHandler();
}
/**
 * Toggle show more or less on click event.
 *
 * @param {object} object Object containing toggle buttons and texts.
 * @param {*} element Target element.
 */
function _ckyToggleMoreLess(object, element) {
  let { currentTarget, target } = element;
  if (target && target.tagName.toUpperCase() !== 'BUTTON') return;
  const ariaExpanded = currentTarget.getAttribute('aria-expanded');
  const trimmed = ariaExpanded === 'false';
  let btn = object.btnTrim;
  let text = object.originalText;
  if (!trimmed) {
    btn = object.btnExpand;
    text = object.truncatedText;
  }
  currentTarget.innerHTML = `${text}${btn}`;
  currentTarget.ariaExpanded = trimmed;
}

/**
 * Add styles to the shortcode HTML rendered outside of the banner.
 *
 * @returns {void}
 */
function _ckyAttachShortCodeStyles() {
  const shortCodes = _ckyStore._tags;
  Array.prototype.forEach.call(shortCodes, function (shortcode) {
    document.querySelectorAll('[data-cky-tag=' + shortcode.tag + ']').forEach(function (item) {
      let styles = '';
      for (const key in shortcode.styles) {
        styles += `${key}: ${shortcode.styles[key]};`;
      }
      item.style.cssText = styles;
    });
  });
}

/** Script blocker Version 2 */

const _ckyCreateElementBackup = document.createElement;
document.createElement = (...args) => {
  const createdElement = _ckyCreateElementBackup.call(document, ...args);
  if (createdElement.nodeName.toLowerCase() !== 'script') return createdElement;
  const originalSetAttribute = createdElement.setAttribute.bind(createdElement);
  Object.defineProperties(createdElement, {
    src: {
      get: function () {
        return createdElement.getAttribute('src');
      },
      set: function (value) {
        if (_ckyShouldChangeType(createdElement, value)) originalSetAttribute('type', 'javascript/blocked');
        originalSetAttribute('src', value);
        return true;
      },
    },
    type: {
      get: function () {
        return createdElement.getAttribute('type');
      },
      set: function (value) {
        value = _ckyShouldChangeType(createdElement) ? 'javascript/blocked' : value;
        originalSetAttribute('type', value);
        return true;
      },
    },
  });
  createdElement.setAttribute = (name, value) => {
    if (name === 'type' || name === 'src') return (createdElement[name] = value);
    originalSetAttribute(name, value);
    if (name === 'data-cookieyes' && !_ckyShouldChangeType(createdElement))
      originalSetAttribute('type', 'text/javascript');
  };
  return createdElement;
};

function _ckyMutationObserver(mutations) {
  for (const { addedNodes } of mutations) {
    for (const node of addedNodes) {
      if (!node.src || !node.nodeName || !['script', 'iframe'].includes(node.nodeName.toLowerCase())) continue;
      try {
        const urlToParse = node.src.startsWith('//') ? `${window.location.protocol}${node.src}` : node.src;
        const { hostname, pathname } = new URL(urlToParse);
        const cleanedHostname = _ckyCleanHostName(`${hostname}${pathname}`);
        _ckyAddProviderToList(node, cleanedHostname);
        if (!_ckyShouldBlockProvider(cleanedHostname)) continue;
        const uniqueID = ref._ckyRandomString(8, false);
        if (node.nodeName.toLowerCase() === 'iframe') _ckyAddPlaceholder(node, uniqueID);
        else {
          node.type = 'javascript/blocked';
          const scriptEventListener = function (event) {
            event.preventDefault();
            node.removeEventListener('beforescriptexecute', scriptEventListener);
          };
          node.addEventListener('beforescriptexecute', scriptEventListener);
        }
        const position =
          document.head.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_CONTAINED_BY ? 'head' : 'body';
        node.remove();
        _ckyStore._backupNodes.push({
          position: position,
          node: node.cloneNode(),
          uniqueID,
        });
      } catch (error) {}
    }
  }
}

function _ckyUnblock() {
  if (navigator.doNotTrack === 1) return;
  const ckyconsent = ref._ckyGetFromStore('consent');
  if (_ckyGetLaw() === 'gdpr' && (!ckyconsent || ckyconsent !== 'yes')) return;
  _ckyStore._backupNodes = _ckyStore._backupNodes.filter(({ position, node, uniqueID }) => {
    try {
      if (_ckyShouldBlockProvider(node.src)) return true;
      if (node.nodeName.toLowerCase() === 'script') {
        const scriptNode = document.createElement('script');
        scriptNode.src = node.src;
        scriptNode.type = 'text/javascript';
        document[position].appendChild(scriptNode);
      } else {
        const frame = document.getElementById(uniqueID);
        if (!frame) return false;
        const iframe = document.createElement('iframe');
        iframe.src = node.src;
        iframe.width = frame.offsetWidth;
        iframe.height = frame.offsetHeight;
        frame.parentNode.insertBefore(iframe, frame);
        frame.parentNode.removeChild(frame);
      }
      return false;
    } catch (error) {
      console.error(error);
      return false;
    }
  });
}

function _ckyClearListeners() {
  _nodeListObserver.disconnect();
  document.createElement = _ckyCreateElementBackup;
}
function _ckyAddProviderToList(node, cleanedHostname) {
  const nodeCategory = node.hasAttribute('data-cookieyes') && node.getAttribute('data-cookieyes');
  if (!nodeCategory) return;
  const categoryName = nodeCategory.replace('cookieyes-', '');
  for (const category of _ckyStore._categories) if (category.isNecessary && category.slug === categoryName) return;
  const provider = _ckyStore._providersToBlock.find(({ re }) => re === cleanedHostname);
  if (!provider)
    _ckyStore._providersToBlock.push({
      re: cleanedHostname,
      categories: [categoryName],
      fullPath: false,
    });
  else if (!provider.isOverriden) {
    provider.categories = [categoryName];
    provider.isOverriden = true;
  } else if (!provider.categories.includes(categoryName)) provider.categories.push(categoryName);
}

const _nodeListObserver = new MutationObserver(_ckyMutationObserver);
_nodeListObserver.observe(document.documentElement, {
  childList: true,
  subtree: true,
});
function _ckyCleanHostName(name) {
  return name.replace(/^www./, '');
}

function _ckyIsCategoryToBeBlocked(category) {
  const cookieValue = ref._ckyGetFromStore(category);
  return (
    cookieValue === 'no' ||
    (!cookieValue && _ckyStore._categories.some((cat) => cat.slug === category && !cat.isNecessary))
  );
}

function _ckyShouldBlockProvider(formattedRE) {
  const provider = _ckyStore._providersToBlock.find(({ re }) => new RegExp(_ckyEscapeRegex(re)).test(formattedRE));
  return provider && provider.categories.some((category) => _ckyIsCategoryToBeBlocked(category));
}
function _ckyShouldChangeType(element, src) {
  return (
    (element.hasAttribute('data-cookieyes') &&
      _ckyIsCategoryToBeBlocked(element.getAttribute('data-cookieyes').replace('cookieyes-', ''))) ||
    _ckyShouldBlockProvider(src ? src : element.src)
  );
}

/**
 * Add readmore button to consent notice.
 *
 * @returns void
 */
function _ckyAttachReadMore() {
  const readMoreButton = _ckyStore._shortCodes.find((code) => code.key === 'cky_readmore');
  if (!readMoreButton.status) return;
  const content = readMoreButton.content;
  const styles = _ckyStore._bannerConfig.config.readMore.styles;
  const readMoreElement = document.querySelector('[data-cky-tag="description"]');
  if (!readMoreElement) return;
  if (readMoreElement.childNodes.length > 1) {
    const innerElement = document.querySelector('[data-cky-tag="description"] p:last-child');
    innerElement && innerElement.insertAdjacentHTML('beforeend', `&nbsp;${content}`);
  } else {
    readMoreElement.insertAdjacentHTML('beforeend', `&nbsp;${content}`);
  }
  const placeHolders = document.querySelectorAll(`[data-cky-tag="readmore-button"]`);
  if (placeHolders.length < 1) return;
  Array.from(placeHolders).forEach((placeHolder) => {
    for (const style in styles) {
      if (!styles[style]) continue;
      placeHolder.style[style] = styles[style];
    }
  });
}

function _ckyAfterConsent() {
  if (_ckyGetLaw() === 'gdpr') _ckySetPreferenceCheckBoxStates(true);

  if (_ckyStore._bannerConfig.behaviours.reloadBannerOnAccept === true) {
    window.location.reload();
  }
}

function _ckyAttachNoticeStyles() {
  if (document.getElementById('cky-style') || !_ckyStyle) return;
  document.head.insertAdjacentHTML('beforeend', ` <style id="cky-style">${_ckyStyle.css}</style>`);
}

function _ckyFindCheckBoxValue(id = '') {
  const elemetsToCheck = id ? [`ckySwitch`, `ckyCategoryDirect`] : [`ckyCCPAOptOut`];
  return elemetsToCheck.some((key) => {
    const checkBox = document.getElementById(`${key}${id}`);
    return checkBox && checkBox.checked;
  });
}

function _ckyAddPlaceholder(htmlElm, uniqueID) {
  const shortCodeData = _ckyStore._shortCodes.find((code) => code.key === 'cky_video_placeholder');
  const videoPlaceHolderDataCode = shortCodeData.content;
  const { offsetWidth, offsetHeight } = htmlElm;
  if (offsetWidth === 0 || offsetHeight === 0) return;
  htmlElm.insertAdjacentHTML('beforebegin', `${videoPlaceHolderDataCode}`.replace('[UNIQUEID]', uniqueID));
  const addedNode = document.getElementById(uniqueID);
  addedNode.style.width = `${offsetWidth}px`;
  addedNode.style.height = `${offsetHeight}px`;
  const innerTextElement = document.querySelector(`#${uniqueID} .video-placeholder-text-normal`);
  innerTextElement.style.display = 'none';
  const youtubeID = _ckyGetYoutubeID(htmlElm.src);
  if (!youtubeID) return;
  addedNode.classList.replace('video-placeholder-normal', 'video-placeholder-youtube');
  addedNode.style.backgroundImage = `linear-gradient(rgba(76,72,72,.7),rgba(76,72,72,.7)),url('https://img.youtube.com/vi/${youtubeID}/maxresdefault.jpg')`;
  innerTextElement.classList.replace('video-placeholder-text-normal', 'video-placeholder-text-youtube');
}
function _ckyGetYoutubeID(src) {
  const match = src.match(/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);
  if (match && Array.isArray(match) && match[2] && match[2].length === 11) return match[2];
  return false;
}

function _ckySetPlaceHolder() {
  const status = _ckyStore._bannerConfig.config.videoPlaceholder.status;
  const styles = _ckyStore._bannerConfig.config.videoPlaceholder.styles;
  if (!status) return;
  if (!status) return;
  const placeHolders = document.querySelectorAll(`[data-cky-tag="placeholder-title"]`);
  if (placeHolders.length < 1) return;
  Array.from(placeHolders).forEach((placeHolder) => {
    placeHolder.style.display = 'block';
    placeHolder.addEventListener('click', () => {
      if (ref._ckyGetFromStore('action')) _revisitCkyConsent();
    });
    for (const style in styles) {
      if (!styles[style]) continue;
      placeHolder.style[style] = styles[style];
    }
  });
}
function _ckyAddRtlClass() {
  if (!_ckyStore._rtl) return;
  const rtlElements = ['notice', 'detail', 'optout-popup', 'revisit-consent', 'video-placeholder'];
  rtlElements.forEach(function (item) {
    _ckyGetElementByTag(item) && _ckyGetElementByTag(item).classList.add('cky-rtl');
  });
}

function _ckySetFocus(tagName) {
  const element = _ckyGetElementByTag(tagName);
  if (!element) return;
  element.focus();
}

function _ckySetPoweredBy() {
  let position = 'flex-end';
  ['detail-powered-by', 'optout-powered-by'].map((key) => {
    const element = document.querySelector(`[data-cky-tag="${key}"]`);
    if (!element) return;
    element.style.display = 'flex';
    element.style.justifyContent = position;
    element.style.alignItems = 'center';
  });
}
function _ckyWatchBannerElement() {
  document.querySelector('body').addEventListener('click', (event) => {
    const selector = '.cky-banner-element, .cky-banner-element *';
    if (event.target.matches ? event.target.matches(selector) : event.target.msMatchesSelector(selector))
      _revisitCkyConsent();
  });
}

function _ckyRemoveAllDeadCookies() {
  for (const category of _ckyStore._categories) {
    if (ref._ckyGetFromStore(category.slug) !== 'yes') _ckyRemoveDeadCookies(category);
  }
}

function _ckySetCCPAOptions() {
  const toggle = _ckyStore._bannerConfig.config.optOption.toggle;
  const activeColor = toggle.states.active.styles['background-color'];
  const inactiveColor = toggle.states.inactive.styles['background-color'];
  _ckyClassRemove('=optout-option', 'cky-disabled', false);
  const toggleDataCode = _ckyStore._shortCodes.find((code) => code.key === 'cky_optout_toggle_label');
  const optOutTitle = _ckyStore._shortCodes.find((code) => code.key === 'cky_optout_option_title');
  const formattedLabel = toggleDataCode.content.replace(`[cky_optout_option_title]`, optOutTitle.content);
  const checked = ref._ckyGetFromStore('consent') === 'yes';
  _ckySetCheckBoxInfo(
    document.getElementById(`ckyCCPAOptOut`),
    formattedLabel,
    {
      checked,
      disabled: false,
      addListeners: true,
    },
    { activeColor, inactiveColor },
    true,
  );
}
function _ckySetCheckBoxInfo(
  boxElem,
  formattedLabel,
  { checked, disabled, addListeners },
  { activeColor, inactiveColor },
  isCCPA = false,
) {
  if (!boxElem) return;
  if (isCCPA && addListeners) _ckyAttachListener('=optout-option-title', () => boxElem.click());
  boxElem.checked = checked;
  boxElem.disabled = disabled;
  boxElem.style.backgroundColor = checked ? activeColor : inactiveColor;
  _ckySetCheckBoxAriaLabel(boxElem, checked, formattedLabel, isCCPA);
  if (!addListeners) return;
  boxElem.addEventListener('change', ({ currentTarget: elem }) => {
    const isChecked = elem.checked;
    elem.style.backgroundColor = isChecked ? activeColor : inactiveColor;
    _ckySetCheckBoxAriaLabel(boxElem, isChecked, formattedLabel, isCCPA);
  });
}

window.revisitCkyConsent = () => _revisitCkyConsent();
