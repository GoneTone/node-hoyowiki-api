# HoYoWiki API (Node.js Library)

English | [繁體中文](README_ZH-TW.md) | [简体中文](README_ZH-CN.md)

A unofficial [Node.js](https://nodejs.org/) library for [HoYoWiki](https://wiki.hoyolab.com/) API, can get the details of [Genshin Impact](https://genshin.hoyoverse.com/) items!

## Report Issues

Please report any bugs you discover at <https://github.com/GoneTone/node-hoyowiki-api/issues>.

## Installation

Node.js 14.0.0 or newer is required.

```sh-session
npm install @gonetone/hoyowiki-api
```

## Example usage

Get a list of all data:

```javascript
const {
  Character, // Character
  // Weapon, // Weapons
  // Artifact, // Artifacts
  // Enemy, // Enemies and Monsters
  // Material, // Teyvat's Resources
  // Npc, // NPC Archive
  // Animal, // Wildlife
  // Book, // Books
  // Tutorial, // Tutorial
  CharacterFilters, // Character Filters
  // WeaponFilters, // Weapons Filters
  // ArtifactFilters, // Artifacts Filters
  // EnemyFilters, // Enemies and Monsters Filters
  // MaterialFilters, // Teyvat's Resources Filters
  // NpcFilters, // NPC Archive Filters
  // AnimalFilters, // Wildlife Filters
  // TutorialFilters, // Tutorial Filters
  setLanguage,
  Language
} = require('@gonetone/hoyowiki-api')

setLanguage(Language.EnglishUS).then(async () => {
  const character = new Character() // Character
  // const weapon = new Weapon() // Weapons
  // const artifact = new Artifact() // Artifacts
  // const enemy = new Enemy() // Enemies and Monsters
  // const material = new Material() // Teyvat's Resources
  // const npc = new Npc() // NPC Archive
  // const animal = new Animal() // Wildlife
  // const book = new Book() // Books
  // const tutorial = new Tutorial() // Tutorial

  /* All Genshin Impact character data list */
  const result = await character.getList()
  console.log(result)

  /* All Genshin Impact character data list (Apply "Pyro, 5-Star" filters) */
  const result2 = await character.getList(CharacterFilters.ElementalType.Pyro, CharacterFilters.Quality.Star5)
  console.log(result2)

  /* Total number of data */
  const result3 = await character.getTotal()
  console.log(result3)

  /* Total number of data (Apply "Pyro, 5-Star" filters) */
  const result4 = await character.getTotal(CharacterFilters.ElementalType.Pyro, CharacterFilters.Quality.Star5)
  console.log(result4)

  /* Search list by character name */
  const result5 = await character.searchListByName('Yelan')
  console.log(result5)
})
```

Get specific item details:

```javascript
const {
  Entry,
  setLanguage,
  Language
} = require('@gonetone/hoyowiki-api')

setLanguage(Language.EnglishUS).then(async () => {
  const entry = new Entry()

  const result = await entry.get(2252) // "2252" is the ID of the character "Yelan"
  console.log(result)

  const result2 = await entry.get(2254) // "2254" is the ID of the weapon "Aqua Simulacra"
  console.log(result2)

  const result3 = await entry.get(1319) // "1319" is the ID of the character level-up material "Runic Fang"
  console.log(result3)
})
```

Keyword search items:

```javascript
const {
  Search,
  setLanguage,
  Language
} = require('@gonetone/hoyowiki-api')

setLanguage(Language.EnglishUS).then(async () => {
  const search = new Search()

  const result = await search.get('yel')
  console.log(result)
})
```

Change API language:

- `Language.EnglishUS` - English
- `Language.ChineseTW` - 繁體中文
- `Language.ChineseCN` - 简体中文
- `Language.German` - Deutsch
- `Language.SpanishES` - Español
- `Language.French` - Français
- `Language.Indonesia` - Indonesia
- `Language.Japanese` - 日本語
- `Language.Korean` - 한국어
- `Language.Portuguese` - Português
- `Language.Russian` - Pусский
- `Language.Thai` - ภาษาไทย
- `Language.Vietnamese` - Tiếng Việt

```javascript
const {
  Entry,
  setLanguage,
  Language
} = require('@gonetone/hoyowiki-api')

setLanguage(Language.Japanese).then(async () => {
  const entry = new Entry()

  const result = await entry.get(2252)
  console.log(result)
})
```

## License

[MIT](LICENSE)
