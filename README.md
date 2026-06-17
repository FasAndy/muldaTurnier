# FC Muldakicker — Hobbyturnier 2026 Website

Statische Landingpage für die Turnieranmeldung. Läuft komplett kostenlos auf
GitHub Pages, keine eigene Server-Infrastruktur nötig.

## Was ist enthalten

- `index.html` — die komplette Seite (Hero, Countdown, Infos, Kurzregelwerk, Anmeldeformular)
- `style.css` — Design
- `script.js` — Countdown-Logik + Formular-Versand
- `assets/logo.jpeg` — euer Vereinslogo
- `assets/reglement.pdf` — vollständiges Reglement (aktuell Version 2025, bitte bei Bedarf aktualisieren)

## Schritt 1: Web3Forms Access Key holen (5 Minuten)

Damit die Formular-Eingaben per E-Mail bei euch landen, ohne dass ihr einen
eigenen Server braucht:

1. Geh auf **https://web3forms.com**
2. Trag eure Vereins-E-Mail-Adresse ein (die, an die die Anmeldungen gehen sollen)
3. Du bekommst sofort einen **Access Key** (eine lange Zeichenfolge) angezeigt
   und per E-Mail zugeschickt — kein Account/Passwort nötig
4. Öffne `index.html`, suche die Zeile:
   ```html
   <input type="hidden" name="access_key" value="DEIN-WEB3FORMS-ACCESS-KEY">
   ```
   und ersetze `DEIN-WEB3FORMS-ACCESS-KEY` durch deinen echten Key.

Das wars — ab dann landet jede Formular-Eingabe als E-Mail in eurem Postfach.
Web3Forms ist für diese Nutzungsmenge kostenlos und es ist kein Account-Login
nötig.

## Schritt 2: Auf GitHub veröffentlichen (GitHub Pages)

1. Auf **github.com** einloggen, oben rechts auf **+** → **New repository**
2. Name z. B. `cht26-turnier`, Sichtbarkeit **Public**, dann **Create repository**
3. Auf der neuen Repo-Seite auf **uploading an existing file** klicken
4. Alle Dateien aus diesem Ordner hochladen (inkl. des `assets`-Unterordners
   mit `logo.jpeg` und `reglement.pdf`) und committen
5. Im Repo zu **Settings → Pages** gehen
6. Unter **Build and deployment** als Branch **main** und Ordner **/ (root)**
   wählen, speichern
7. Nach 1–2 Minuten ist die Seite erreichbar unter:
   `https://DEIN-GITHUB-NAME.github.io/cht26-turnier/`

Diese URL kannst du dann in einen QR-Code umwandeln (z. B. über
qr-code-generator.com) und auf Flyern/Plakaten verwenden.

## Inhalte anpassen

Alle Texte (Einleitung, Kurzregelwerk, Termine) stehen direkt in `index.html`
und können dort einfach geändert werden — kein technisches Wissen nötig,
einfach den Text zwischen den `<p>`- bzw. `<span>`-Tags ersetzen.

Falls sich Termin oder Anmeldeschluss ändern:
- Anmeldeschluss für den Countdown: in `index.html` das Attribut
  `data-deadline="2026-10-04T23:59:59"` anpassen
- Alle weiteren Datums-/Ortsangaben sind als reiner Text auf der Seite verteilt
  (Hero, Info-Karten, Countdown-Beschriftung) und müssten händisch angepasst werden

## Regelwerk aktualisieren

Sobald das endgültige Reglement 2026 steht, einfach die neue PDF-Datei unter
dem Namen `reglement.pdf` in den `assets`-Ordner hochladen (alte Datei
überschreiben) — der Link auf der Seite bleibt gleich.

## Spam-Schutz

Das Formular enthält ein verstecktes Honeypot-Feld (`botcheck`), das normale
Nutzer nicht sehen, Bots aber oft automatisch befüllen — solche Einsendungen
filtert Web3Forms automatisch aus.
