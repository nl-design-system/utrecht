<!-- @license CC0-1.0 -->

# PDF

Table of Contents moet opgebouwd worden met de volgende tags:

- `<TOC>` voor de lijst met Table of Contents.
- `<TOCI>` voor de items in de lijst met Table of Contents.
- `<Reference>` als wrapper om de link.
- `<Link>` voor de link.
- `<Lbl>` voor het hoofdstuknummer.
- `<Span>` voor koptekst.

Als de Table of Contents een heading of extra content heeft, dan moet die buiten de `<TOC>` tag staan. Je kunt de hele table of contents in een `<Sect>` tag plaatsen.

```text
<TOC> {
    <TOCI> {
        <Reference> {
            <Link> {
                <Lbl> {
                    "1.0.0"
                }
                <Span> {
                    "The quick brown fox jumps over the lazy dog"
                }
            }
        }
  }
}
```
