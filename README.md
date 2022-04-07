# Browser Technologies @cmda-minor-web 20-21: Je eigen nerdy t-shirt!

Welkom bij het project van het vak Browser Technologies. Bij dit project van de Minor 'Webdesign and development' is het doel van deze opdracht is te leren hoe je een online interactieve toepassing kan maken met behulp van Progressive Enhancement en Feature Detection zodat de applicatie het altijd doet.

- Opdracht 1: https://sophievanderburg.github.io/opdracht1-BT/
- Opdracht 2: https://maggness.github.io/BT-Tim/opdracht2-BT-main/

![Screenshot](static/images/screenshot.png)

## Inhoudsopgave

- [Progressive enhancement](#progressive-enhancement)
- [Feature Detection](#feature-detection)
- [User Story](#user-story)
- [Wireflow](#wireflow)
- [Hoe te gebruiken?](#hoe-te-gebruiken)
- [Browser testing](#browser-testing)
- [Test verslag](#test-verslag)
- [Licence](#licence)
- [Credits](#credits)

## Progressive enhancement

Progressive enhancement zorgt ervoor dat gebruikers de best mogelijke website ervaring krijgen.
Het principe is dat een website begint met een sterke basis, waarna de website in een aantal stappen
uitgebreid wordt om de website nog beter te maken. Het idee is dus dat een website simpel begint,
maar steeds verder wordt uitgebreid naar een steeds complexere website. Het komt er dus op neer dat
er eerst gefocust wordt op de content van een website.

Als progressive enhancement wordt toegepast zorgt het ervoor dat de website voor elke browser en voor
elke browser werkend is en stabiel is. Zo kunnen gebruikers met een verouderde browser nog steeds de website
bezoeken met de basiswebsite, terwijl bezoekers met een moderne browser de extra features van de website kunnen zien.

#### Toepassing van progressive enhancement

Bij het bouwen van een website met progressive enhancement wordt er als eerst gefocust op de HTML met daarbij
de content van de pagina. Dit is de eerste laag van de website en deze is dus ook het belangrijkst. Als deze laag werkt
kan elke bezoeker, ongeachte de browser, de website bezoeken waar het voor bedoelt is.

De tweede laag is de CSS. Hiermee kan de website gestijld worden en dit zorgt ervoor dat alles op de website op de goede plek staat.
Als er nog hele oude browsers zijn die geen CSS ondersteunen, kan de bezoeker evengoed de content zien van de website.

De laatste laag is JavaScript. Hiermee kunnen animaties en interactieve elementen toegevoegd worden aan een website.
Dit is het minst belangrijk aan een website, waardoor het ook niet nodig is om een website te bekijken of gebruiken.
De website kan dus ook gebruikt worden zonder deze laag.

#### Eigen toepassing van progressive enhancement

Ik heb dit aan mijn app door middel omdat de CSS niet nodig is. Als de CSS wegvalt ziet de website er minder
netjes uit, maar de content van de website is nog steeds leesbaar. Dit is bijvoorbeeld mogelijk door het downloaden van
de fonts, in plaats van door de fonts te linken.

Voor JavaScript geldt hetzelfde. De ervaring van de website is minder leuk, maar de content is nog steeds te zien.

## Feature Detection

Met feature detection kan de website detecteren of de browser bepaalde elementen ondersteund.

Ik maak hier geen gebruik van in mijn applicatie, omdat Internet Explorer 11 geen `@supports` in CSS ondersteund. Hiermee kan namelijk bekeken worden of een CSS functie wordt ondersteund door de browser.

In JavaScript kan dit met een if statement waarbij gecontroleerd wordt of de feature bekend is in de browser, bijvoorbeeld:

```javascript
if (typeof Storage !== void 0) {
  var orderButton = document.querySelector("#order")

  orderButton.addEventListener("click", function () {
    localStorage.clear()
  })
} else {
  console.log("No localStorage supported")
}
```

Dit gebruik ik om te checken of `localStorage` wordt gebruikt in de bworser. Hierdoor weet ik zeker dat de website niet crasht als het niet wordt ondersteund.

## User story

> Ik wil mijn eigen t-shirt-met-nerdy-tekst kunnen ontwerpen, opslaan, bestellen, en een volgende keer dat ik de site bezoek kunnen gebruiken.

## Wireflow

![Wireflow](static/images/wireflow.jpg)

De core functionaliteit van de website is dat de gebruiker een shirt kan bestellen en aanpassen naar zijn/haar wensen. De usable laag is dat de UI van de website aangenaam is waardoor de gebruiker goed door de website heen kan. De pleasurable laag is dat de gebruiker de slideshow op de homepage ziet en dat de shirts worden aangepast naar de keuzes van de gebruiker.

## Features

**Gegevens maker (naam, telefoon of email)**<br>
Deze feature behoort tot de core functionaliteit. Ik heb deze feature toegevoegd door middel van forms. De ingevulde gegevens komen terug op de bevestigingspagina.<br><br>

**Kleur t-shirt**<br>
Deze feature behoort ook tot de core functionaliteit van de website. Dit is toegevoegd door middel van een drop-down met alle kleuren. Dit wordt gebruikt om de kleur van het shirt te bepalen. Dit komt ook terug in de SVG zelf.<br><br>

**Tekst t-shirt**<br>
Deze feature behoort tot de core functionaliteit. De gebruiker heeft de mogelijkheid om een tekst voor op het shirt toe te voegen, maar dit is niet vereist. De ingevoerde tekst is onder andere op de bevestigingspagina terug te zien op het shirt.<br><br>

**Maat t-shirt**<br>
De maat van het shirt behoort ook tot de core-functionaliteit. Deze wordt toegevoegd door middel van een drop-down met de beschikbare maten.<br><br>

**Geslacht**<br>
Deze functie heb ik niet toegevoegd, omdat deze t-shirts unisex zijn.<br><br>

**Verder gaan waar je gebleven bent/ontwerp herzien**<br>
Deze functionaliteit heb ik deels gerealiseerd. Dit is een usable functionaliteit, omdat de website goed te gebruiken is als JavaScript is uitgeschakeld. De gebruiker kan teruggaan naar de eerste stap met de ingevoerde velden, maar als het shirt is besteld, wordt de localStorage verwijderd. Dit omdat de gebruiker dan een nieuw shirt kan bestellen zonder dat de velden al van te voren zijn ingevuld.<br><br>

**Validatie: alles moet zijn ingevuld. Geef duidelijke foutmeldingen**<br>
Deze functionaliteit heb ik gerealiseerd door middel van de input attributes in HTML. Ik heb hiervoor gekozen omdat de validatie dan altijd werkt.<br><br>

**Gebruiker moet meerdere t-shirts kunnen maken en herzien, en moet dus een overzichtspagina hebben**<br>
Deze functionaliteit heb ik deels gerealiseerd. Ik vind dat de gebruiker moet kunnen zien welke shirts hij/zij besteld heeft, dus heb ik een pagina gemaakt voor met alle bestellingen.

**Bestel pagina om een ontwerp kopen en laten maken**<br>
Deze functionaliteit is gerealiseerd in de app. De gebruiker komt na de bestelling bij een pagina met een samenvatting van het bestelde shirt en de gegevens. Dit hoort bij de core functionaliteit omdat het belangrijk is dat de gebruiker dit te zien krijgt.

### Problemen

In plaats van verschillende PNG's voor de verschillende kleuren shirts, heb ik gekozen om een SVG te gebruiken waarbij het `path` makkelijk aangepast kan worden in de kleur die de gebruiker wilt. Dit scheelt het laden van de afbeeldingen. SVG wordt op vrijwel alle gebruikte browsers ondersteund.
![SVG](static/images/useSVG.png)

Op verschillende browsers wordt de carousel op de homepage niet ondersteund. Dit heb ik opgelost door de parent van de carousel op `display: none;` te zetten en deze met JavaScript op `visible` te zetten. Hierdoor is de carousel niet te zien als JavaScript uitstaat of niet ondersteund is.

## Geteste browsers

**Desktop**

- Firefox 99.0
- Safari 15.1
- Google Chrome 100.0

**Mobile**

- iOS 15
- Internet Explorer 11
- Chrome for Android 91
- Playstation Browser

## Breek het web

#### Afbeeldingen

Er wordt gebruik gemaakt van SVG's in de applicatie in plaats van afbeeldingen, dus het uitzetten van afbeeldingen heeft geen effect op de website.

#### Custom fonts

Er worden custom fonts ingeladen via Google Fonts, maar als deze niet geladen worden is er in de CSS een fall-back font ingesteld.

#### Kleur

Ik heb de website kleuren gegeven die veel tegenstellingen hebben, dus het contrast op de website is goed te zien. Ook is het design simpel gehouden om het contrast te benadrukken.

#### Muis/Trackpad

Als de muis/trackpad het niet doet kan de gebruiker volledig door de website, en dus een shirt kopen, via het toetsenbord.

#### Breedband internet

Op een langzame 3G verbinding laadt de website nog steeds vrij snel. Er zijn geen verspringingen in de pagina.

#### Javascript

Als JavaScript niet wordt ondersteund is de carousel op de homepage niet te zien. Voor de gebruiker heeft dit geen effect op de werking van de website. Dit heb ik opgelost door de parent van de carousel op `display: none;` te zetten en deze met JavaScript op `visible` te zetten. Hierdoor is de carousel niet te zien als JavaScript uitstaat of niet ondersteund is.

#### Cookies

De applicatie maakt geen gebruik van cookies.

#### LocalStorage

Er wordt localStorage gebruikt om de keuzes van de eerste stap op te slaan. Als dit uitstaat wordt deze keuze niet meer opgeslagen. Voor de gebruiker heeft dit geen effect op het eindresultaat.

## Test verslag

De CSS functie `@supports` wordt niet ondersteund op IE11. Daarom heb ik dit niet gebruikt.

Ik heb expres `var` in plaats van `const` en `let` gebruikt in JavaScript, omdat `var` bij meerdere oudere browsers ondersteund wordt.
