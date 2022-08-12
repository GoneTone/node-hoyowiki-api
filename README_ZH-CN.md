# HoYoWiki API (Node.js 套件)

[English](README.md) | [繁體中文](README_ZH-TW.md) | 简体中文

[HoYoWiki](https://wiki.hoyolab.com/) API 非官方 [Node.js](https://nodejs.org/) 套件，可以获取[原神](https://genshin.hoyoverse.com/)项目的详细信息！

## 回报问题

如果发现任何 BUG，请在此回报：<https://github.com/GoneTone/node-hoyowiki-api/issues>

## 安装

需要 Node.js 14.0.0 或更高版本。

```sh-session
npm install @gonetone/hoyowiki-api
```

## 使用范例

取得所有资料列表：

```javascript
const {
  Character, // 角色
  // Weapon, // 武器
  // Artifact, // 圣遗物
  // Enemy, // 敌人与魔物
  // Material, // 提瓦特产物
  // Npc, // NPC图鉴
  // Animal, // 野生动物
  // Book, // 书籍
  // Tutorial, // 教程
  CharacterFilters, // 角色过滤器
  // WeaponFilters, // 武器过滤器
  // ArtifactFilters, // 圣遗物过滤器
  // EnemyFilters, // 敌人与魔物过滤器
  // MaterialFilters, // 提瓦特产物过滤器
  // NpcFilters, // NPC图鉴过滤器
  // AnimalFilters, // 野生动物过滤器
  // TutorialFilters, // 教程过滤器
  setLanguage,
  Language
} = require('@gonetone/hoyowiki-api')

setLanguage(Language.ChineseCN).then(async () => {
  const character = new Character() // 角色
  // const weapon = new Weapon() // 武器
  // const artifact = new Artifact() // 圣遗物
  // const enemy = new Enemy() // 敌人与魔物
  // const material = new Material() // 提瓦特产物
  // const npc = new Npc() // NPC图鉴
  // const animal = new Animal() // 野生动物
  // const book = new Book() // 书籍
  // const tutorial = new Tutorial() // 教程

  /* 所有原神角色资料列表 */
  const result = await character.getList()
  console.log(result)

  /* 所有原神角色资料列表 (套用 "火元素、五星" 过滤) */
  const result2 = await character.getList(CharacterFilters.ElementalType.Pyro, CharacterFilters.Quality.Star5)
  console.log(result2)

  /* 资料总数 */
  const result3 = await character.getTotal()
  console.log(result3)

  /* 资料总数 (套用 "火元素、五星" 过滤) */
  const result4 = await character.getTotal(CharacterFilters.ElementalType.Pyro, CharacterFilters.Quality.Star5)
  console.log(result4)

  /* 按角色名称搜索列表 */
  const result5 = await character.searchListByName('夜兰')
  console.log(result5)
})
```

取得指定项目详细资料：

```javascript
const {
  Entry,
  setLanguage,
  Language
} = require('@gonetone/hoyowiki-api')

setLanguage(Language.ChineseCN).then(async () => {
  const entry = new Entry()

  const result = await entry.get(2252) // "2252" 是角色 "夜兰" 的 ID
  console.log(result)

  const result2 = await entry.get(2254) // "2254" 是武器 "若水" 的 ID
  console.log(result2)

  const result3 = await entry.get(1319) // "1319" 是角色培养素材 "符纹之齿" 的 ID
  console.log(result3)
})
```

关键字搜寻项目：

```javascript
const {
  Search,
  setLanguage,
  Language
} = require('@gonetone/hoyowiki-api')

setLanguage(Language.ChineseCN).then(async () => {
  const search = new Search()

  const result = await search.get('夜')
  console.log(result)
})
```

更改 API 语言：

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
