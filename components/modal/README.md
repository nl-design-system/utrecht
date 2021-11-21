<!-- @license CC0-1.0 -->

# Modal content

- When you have a dialog component as modal content, make sure you use `aria-modal="true"`. [a11ysupport: `aria-modal`](https://a11ysupport.io/tech/aria/aria-modal_attribute)
- The elements in modal content must be focusable. For example using `tabindex="0"`. When browser focus is placed on an element outside the modal container, the focus will be returned to the last focused modal content.

## Related reading

- [Deque: How to Build WAI-ARIA Modal Alert Dialogs](https://www.deque.com/blog/aria-modal-alert-dialogs-a11y-support-series-part-2/)
