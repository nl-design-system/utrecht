<!-- @license CC0-1.0 -->

# Component library voor PDF-bestanden

## Installatie

Draai het volgende script in de terminal om de software te installeren die HTML naar PDF converteert, [Prince XML](http://princexml.com).

```sh
cd packages/component-library-pdf
pnpm run install-prince
```

## Testen

Draai:

```sh
pnpm run test-local
```

Het script heet "`test-local`" zodat de PDFs niet in GitHub Actions worden getest, omdat tijd te besparen.

Wanneer een nieuwe Prince XML versie uit komt, dan moet alles opnieuw getest worden. Alle bestaande tests op basis van sha256 hashes zullen falen, omdat de gebruikte software onderdeel is van de gegenereerde PDF-bestanden. Bijvoorbeeld:

```xml
<pdf:Producer>Prince 15.4 (www.princexml.com)</pdf:Producer>
```

Bekijk elke test in `*.test.tsx`. Bekijk het PDF document dat correspondeert met het `id` in de test. Bijvoorbeeld voor de `id: "pdf-paragraph"` staat het resultaat in `tmp/pdf-paragraph.pdf`. Als het resultaat goed is, kopieer dan de code uit `tmp/pdf-paragraph.pdf.sha256` naar `toBe('...')`. Als de test niet slaagt, dan mag je oude sha256 hash laten staan.

## Relevante links

- [Tagged PDF Best Practice Guide: Syntax For developers implementing ISO 14289-1 (PDF/UA) — PDF download](https://pdfa.org/wp-content/uploads/2019/06/TaggedPDFBestPracticeGuideSyntax.pdf)
- [Deterministic output: a way to specify the PDF File Identifier (/ID) property](https://www.princexml.com/forum/topic/4931/deterministic-output-a-way-to-specify-the-pdf-file?p=1#24826)
- [Convert PDF to HTML](https://pdfix.io/convert-pdf-to-html/). Gebruik de optie "Layout defined by PDF Tags" om te zien welke tags er in een PDF zitten, via de developer tools. Bijvoorbeeld: `data-pdf-se-type-original="Link"`.
