<!-- @license CC0-1.0 -->

# Toepassing

De _data list_ component gebruik je onder andere voor:

- een overzicht van gegevens uit een formulier, in een controle-stap voor het verzenden
- een overzicht vooringevulde gegevens, aan het begin van een formulier
- een overzicht van bekende gegevens, bijvoorbeeld in een profiel-pagina

Om verschillende soorten data optimaal weer te geven, zijn er speciale componenten gemaakt:

- URL data: gebruik deze voor internetadressen en e-mailadressen
- IBAN: gebruik deze voor dit type bankrekeningnummer

Er zijn _BEM modifier class names_ beschikbaar van `utrecht-data-list__value`, voor datatypes:

- `multiline`: voor gegevens die worden aangeleverd als `string`, maar waarvan de tekst verdeeld is over meerdere tekstregels zonder HTML `<br/>` maar met een _newline character_. Bijvoorbeeld ingevoerde tekst uit een `textarea`, of een adres.
- `number`
- `telephone`
