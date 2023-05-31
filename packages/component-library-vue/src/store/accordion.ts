import {defineStore} from "pinia";
import {firstItem, lastItem, nextItem, previousItem} from "@/helpers/arrayHelpers";
import type {Section, StoreState} from "@/Accordion/AccordionProvider.vue";

export const useAccordionStore = defineStore('accordion', {
  state: (): StoreState => ({
    sections: [] as Section[],
    buttons: [] as HTMLButtonElement[],
    activeSection: null as Section | null
  }),
  actions: {
    focusNextSection(): void {
      if (!this.activeSection) {
        return;
      }
      const index = this.sections.indexOf(this.activeSection);
      const button = index >= 0 ? this.buttons[index] : undefined;
      const nextSection = button ? nextItem(this.buttons, button) : undefined;
      nextSection?.focus();
    },
    focusFirstSection(): void {
      const firstSection = firstItem(this.sections);
      firstSection?.focus();
    },
    focusPreviousSection(): void {
      if (!this.activeSection) {
        return;
      }
      const index = this.sections.indexOf(this.activeSection);
      const currentSection = index >= 0 ? this.buttons[index] : undefined;
      const previousSection = currentSection ? previousItem(this.buttons, currentSection) : undefined;
      previousSection?.focus();
    },

    focusLastSection(): void {
      const firstSection = lastItem(this.buttons);
      firstSection?.focus();
    },

    handleButtonFocus(button: HTMLButtonElement): void {
      const activatedIndex = this.buttons.indexOf(button);
      this.buttons[activatedIndex].focus();
    },

    handleButtonBlur(): void {
      this.activeSection = null;
    },

    handleKeyDown(evt: KeyboardEvent): void {
      if (evt.code === "End") {
        this.focusLastSection();
      } else if (evt.code === "Home") {
        this.focusFirstSection();
      } else if (evt.code === "ArrowDown") {
        if (this.activeSection) {
          this.focusNextSection();
        }
      } else if (evt.code === "ArrowUp") {
        if (this.activeSection) {
          this.focusPreviousSection();
        }
      } else {
        // Do not `preventDefault()`
        return;
      }

      // Prevent scrolling the page
      evt.preventDefault();
    },

    handleActivate(button: HTMLButtonElement): void {
      const activatedIndex = this.buttons.indexOf(button);
      if (activatedIndex >= 0) {
        this.sections[activatedIndex].expanded = !this.sections[activatedIndex].expanded;
      }
    }
  }
})
