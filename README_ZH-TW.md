# HoYoWiki API (Node.js 套件)

[English](README.md) | 繁體中文 | [简体中文](README_ZH-CN.md)

[HoYoWiki](https://wiki.hoyolab.com/) API 非官方 [Node.js](https://nodejs.org/) 套件，可以取得[原神](https://genshin.hoyoverse.com/)項目的詳細資料！

## 回報問題

如果發現任何 BUG，請在此回報：<https://github.com/GoneTone/node-hoyowiki-api/issues>

## 安裝

需要 Node.js 14.0.0 或更高版本。

```sh-session
npm install @gonetone/hoyowiki-api
```

## 使用範例

取得所有資料列表：

```javascript
const {
  Character, // 角色
  // Weapon, // 武器
  // Artifact, // 聖遺物
  // Enemy, // 敵人與魔物
  // Material, // 提瓦特產物
  // Npc, // NPC圖鑑
  // Animal, // 野生動物
  // Book, // 書籍
  // Tutorial, // 教學
  CharacterFilters, // 角色過濾器
  // WeaponFilters, // 武器過濾器
  // ArtifactFilters, // 聖遺物過濾器
  // EnemyFilters, // 敵人與魔物過濾器
  // MaterialFilters, // 提瓦特產物過濾器
  // NpcFilters, // NPC圖鑑過濾器
  // AnimalFilters, // 野生動物過濾器
  // TutorialFilters, // 教學過濾器
  setLanguage,
  Language
} = require('@gonetone/hoyowiki-api')

setLanguage(Language.ChineseTW).then(async () => {
  const character = new Character() // 角色
  // const weapon = new Weapon() // 武器
  // const artifact = new Artifact() // 聖遺物
  // const enemy = new Enemy() // 敵人與魔物
  // const material = new Material() // 提瓦特產物
  // const npc = new Npc() // NPC圖鑑
  // const animal = new Animal() // 野生動物
  // const book = new Book() // 書籍
  // const tutorial = new Tutorial() // 教學

  /* 所有原神角色資料列表 */
  const result = await character.getList()
  console.log(result)

  /* 所有原神角色資料列表 (套用 "火元素、五星" 過濾) */
  const result2 = await character.getList(CharacterFilters.ElementalType.Pyro, CharacterFilters.Quality.Star5)
  console.log(result2)

  /* 資料總數 */
  const result3 = await character.getTotal()
  console.log(result3)

  /* 資料總數 (套用 "火元素、五星" 過濾) */
  const result4 = await character.getTotal(CharacterFilters.ElementalType.Pyro, CharacterFilters.Quality.Star5)
  console.log(result4)

  /* 按角色名稱搜尋列表 */
  const result5 = await character.searchListByName('夜蘭')
  console.log(result5)
})
```

取得指定項目詳細資料：

```javascript
const {
  Entry,
  setLanguage,
  Language
} = require('@gonetone/hoyowiki-api')

setLanguage(Language.ChineseTW).then(async () => {
  const entry = new Entry()

  const result = await entry.get(2252) // "2252" 是角色 "夜蘭" 的 ID
  console.log(result)

  const result2 = await entry.get(2254) // "2254" 是武器 "若水" 的 ID
  console.log(result2)

  const result3 = await entry.get(1319) // "1319" 是角色培養素材 "符紋之齒" 的 ID
  console.log(result3)
})
```

關鍵字搜尋項目：

```javascript
const {
  Search,
  setLanguage,
  Language
} = require('@gonetone/hoyowiki-api')

setLanguage(Language.ChineseTW).then(async () => {
  const search = new Search()

  const result = await search.get('夜')
  console.log(result)
})
```

更改 API 語言：

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
