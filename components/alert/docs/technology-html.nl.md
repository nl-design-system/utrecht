<!-- @license CC0-1.0 -->

# HTML

Het belangrijkste onderdeel van de alert is het bericht, plaats die in een `<div role="alert">`.

Gebruik bij voorkeur een _paragraph component_ voor de inhoud van het bericht, voor een goede `font-size` en `line-height` en zodat de alert `margin` heeft wanneer de CSS niet geladen kan worden.

Als je wel een button gebruikt (bijvoorbeeld om de alert te verbergen), plaats die dan nooit binnen het element met `role="alert"`, maar daarbuiten.

```html
<div class="utrecht-alert">
  <div class="utrecht-alert__icon">
    <!-- optioneel: een icon -->
  </div>
  <div class="utrecht-alert__content">
    <div class="utrecht-alert__message" role="alert">
      <!-- het bericht, bijvoorbeeld: -->
      <p class="utrecht-paragraph">Let op: er is nu een storing waardoor...</p>
    </div>
    <!-- optioneel en nog niet ondersteund: een button, buiten het bericht -->
  </div>
</div>
```
