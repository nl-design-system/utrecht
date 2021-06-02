# Onderzoek online meldingen

__tl;dr: Online meldingen doen met Signalen werkt goed voor iedereen behalve blinden en slechtzienden.__

## Doel van het onderzoek

Onderzoeken of de potentiele nieuwe versie voor het doen van een online melding bij de gemeente Utrecht gebruikersvriendelijk en toegankelijk is.

## Opzet

We hebben digitaal gebruikersonderzoek gedaan met twaalf respondenten. Deze respondenten kregen een case voorgelezen waarna ze in de test-omgeving moesten proberen hun melding te doen.
Van de respondenten waren er drie blind of slechtziend en drie ex-laaggeletterd.

## Belangrijkste inzichten

De belangrijkste inzichten zijn:

### Blinden en slechtzienden lopen vast in het proces

Het is voor de blinden niet duidelijk dat er een verplicht invulveld zit in de kaart om het adres in te vullen. Ze vullen het niet in en gaan door in het formulier. Dit, gecombineerd met een onduidelijke foutmelding zorgt er voor dat ze vast komen te zitten en uit het proces vallen.

Bij de overige respondenten is er geen verwarring in het doorlopen van de testomgeving. De volgorde van stappen worden begrepen en zonder moeite doorlopen.

### Notificaties geven vertrouwen

De notificatie e-mails worden als fijn ervaren. Het is belangrijk om de bevestiging te krijgen dat jouw melding serieus genomen wordt en opgepakt wordt. Ook is het belangrijk dat ze te weten krijgen wanneer het opgelost is. Daarnaast worden de smileys in de 3e mail aangeklikt. De e-mails worden wel als veel ervaren (3 is misschien 1 te veel), maar dit kan ook komen omdat er nu geen tijd tussen zit.

### Toegankelijkheidsfouten zorgen voor ruis

* Het zoomen in de kaart op de mobiel ging niet soepel op mobiel, dit kan ook komen doordat Teams tegelijkertijd werd gebruikt.
* Wanneer je geen adres aanklikt wordt is er voor het systeem geen adres ingevuld.
* Als iets niet correct is ingevuld op de eerste pagina is dit niet zichtbaar wanneer je aan de onderkant van de pagina zit. Dit zorgt voor verwarring > waarom kan ik niet op volgende klikken

## Wie hebben het onderzocht

* [René Olling, UX Designer](mailto:r.olling@utrecht.nl)
* [Jeroen du Chatinier, UX Designer](mailto:j.du.chatinier@utrecht.nl)
* [Rosaly Buitendijk, UX Designer](mailto:rosaly.buitendijk@utrecht.nl)

## Inzichten

### 001 - Blinden en slechtzienden lopen vast in het proces

Het is voor de blinden niet duidelijk dat er een verplicht invulveld zit in de kaart om het adres in te vullen. Ze vullen het niet in en gaan door in het formulier. Dit, gecombineerd met een onduidelijke foutmelding zorgt er voor dat ze vast komen te zitten en uit het proces vallen.

Bij de overige respondenten is er geen verwarring in het doorlopen van de testomgeving. De volgorde van stappen worden begrepen en zonder moeite doorlopen.

Dit inzicht heeft geleid tot specifieke inzichten in het Button component. Deze zijn daar te vinden onder het Documentatie > Onderzoek.

### 002 - Notificaties geven vertrouwen

De notificatie e-mails worden als fijn ervaren. Het is belangrijk om de bevestiging te krijgen dat jouw melding serieus genomen wordt en opgepakt wordt. Ook is het belangrijk dat ze te weten krijgen wanneer het opgelost is. Daarnaast worden de smileys in de 3e mail aangeklikt. De e-mails worden wel als veel ervaren (3 is misschien 1 te veel), maar dit kan ook komen omdat er nu geen tijd tussen zit.

### 003 - Toegankelijkheidsfouten zorgen voor ruis

* Het zoomen in de kaart op de mobiel ging niet soepel op mobiel, dit kan ook komen doordat Teams tegelijkertijd werd gebruikt.
* Wanneer je geen adres aanklikt wordt is er voor het systeem geen adres ingevuld.
* Als iets niet correct is ingevuld op de eerste pagina is dit niet zichtbaar wanneer je aan de onderkant van de pagina zit. Dit zorgt voor verwarring > waarom kan ik niet op volgende klikken

### 004 - Interessant voor verder onderzoek

Er waren een aantal geïnterviewden die aangaven dat ze op de kaart al gemelde meldingen willen zien. Dit hebben we niet kunnen testen want die functionaliteit is er nog niet. Het roept ook veel vragen op. Het zou tof zijn om dit verder te kunnen onderzoeken. Niemand begint hiermee, dit komt pas boven aan het einde van het onderzoek.

### 005 - Adres invullen voor blinden en slechtzienden gaat niet goed

* Blinden zien niet dat er een kaart is en krijgen geen audio-prompt dat er een kaart is. Als je dan niet precies weet waar je je melding wil doen, zit je vast.
* De label die wordt voorgelezen bij het adresveld geeft geen duidelijke beschrijving van de actie die de melder moet doen, namelijk het invullen van het adres van de melding.
* Het adresveld genereert een lege keuzelijst, deze lege lijst werkt verwarrend voor iemand die voorlees software gebruikt, deze leest "deze lijst is leeg".

### 006 - Foutmelding als de kaart niet goed is ingevuld werkt niet goed

* Doordat blinden en slechtziende niet goed met de kaart en het adres invoer veld overweg kunnen komt er een error. Er gebeurt niets als er een error is, de error wordt niet kenbaar gemaakt, een blinde is dan de weg kwijt en stopt met een melding doen.
* De error is alleen visueel. De tekst van de error maakt ook niet duidelijk dat het een error is. Voor blinden/slechtzienden is dit gewoon een stukje tekst die vraagt een adres in te vullen, maar dat was nou juist het probleem.
* Blinden en slecht zienden moeten kunnen horen wat ze moeten doen of wat er verkeerd gaat

### 007 - Bevestiging na keuze

* Punten op de kaart worden voorgelezen als nummer (lon/lat), dit voegt niets toe voor iemand die blind is.
* Na het kiezen van een adres is het niet duidelijk dat dit adres gekozen is.

## Resultaat

Het formulier waarin de melder het adres moet invullen wordt aangepast door de makers zodat ook blinden en slechtzienden een melding kunnen doen.

## Wat ook opmerkelijk was

We kregen van de blinden en slechtzienden de volgende tips waarin ziende mensen zich goed kunnen inleven in de wereld van blinden en slechtzienden:

* Doe een melding zonder je muis te gebruiken
* Gebruik voorleessoftware (Supernova, Jaws NVDA) en doe een melding met je ogen dicht
* Gebruik de apple toegankelijkheids stand (Toegankelijkheid>voice over) en probeer met je ogen dicht een melding te doen.
