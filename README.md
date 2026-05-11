# VISTA examenportfolio

Deze webapp toont mijn kerntaken, werkprocessen en bewijslast voor Software development.

## Online opslag instellen

De app is voorbereid op Supabase. Zonder Supabase-configuratie werkt de app in testmodus met lokale browseropslag. Voor inleveren moet Supabase worden ingesteld, zodat de bewijslast online blijft staan.

1. Maak een Supabase-project aan.
2. Open de SQL editor in Supabase.
3. Voer de inhoud van `supabase-schema.sql` uit.
4. Open `supabase-config.js`.
5. Vul de project-url en anon public key in:

```js
window.SUPABASE_CONFIG = {
  url: "https://jouw-project.supabase.co",
  anonKey: "jouw-anon-public-key",
  bucket: "bewijslast"
};
```

Daarna worden uploads opgeslagen in:

- Supabase Database: metadata van bewijsstukken.
- Supabase Storage bucket `bewijslast`: de geüploade bestanden.

## Belangrijk

Deze versie gebruikt geen login. Iedereen met toegang tot de webapp kan bewijsstukken bekijken, uploaden en verwijderen. Voor een definitieve publieke versie is login of beperkte toegang verstandig.
