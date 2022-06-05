/*
 * Copyright (c) 2020-2022 原神資訊站 Genshin Impact Info
 * https://genshininfo.reh.tw/
 *
 * Developed by 旋風之音 GoneTone
 * https://github.com/GoneTone
 *
 *                               _oo0oo_
 *                              o8888888o
 *                              88" . "88
 *                              (| -_- |)
 *                              0\  =  /0
 *                            ___/`---'\___
 *                          .' \\|     |# '.
 *                         / \\|||  :  |||# \
 *                        / _||||| -:- |||||- \
 *                       |   | \\\  -  #/ |   |
 *                       | \_|  ''\---/''  |_/ |
 *                       \  .-\__  '-'  ___/-. /
 *                     ___'. .'  /--.--\  `. .'___
 *                  ."" '<  `.___\_<|>_/___.' >' "".
 *                 | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *                 \  \ `_.   \_ __\ /__ _/   .-` /  /
 *             =====`-.____`.___ \_____/___.-`___.-'=====
 *                               `=---='
 *           ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *               佛祖保佑                       永無 BUG
 *
 * GitHub: https://github.com/GoneTone/node-hoyowiki-api
 */

/* eslint-disable no-unused-vars */

export const enum DefaultApiOptions {
  API = 'https://sg-wiki-api.hoyolab.com/hoyowiki/wapi',
  UserAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.63 Safari/537.36'
}

export const enum EntryPageMenu {
  Character = '2',
  Weapon = '4',
  Artifact = '5',
  Enemy = '7',
  Material = '9'
}

/*
export const enum CharacterElementalType {
  Pyro = '737',
  Hydro = '745',
  Dendro = '763',
  Electro = '780',
  Anemo = '789',
  Cryo = '803',
  Geo = '814'
}

export const enum CharacterRegion {
  Mondstadt = '27',
  LiyueHarbor = '43',
  InazumaCity = '60'
}

export const enum CharacterQuality {
  Star5 = '3',
  Star4 = '16'
}

export const enum CharacterBonusAttributesFromAscension {
  CRITDMG = '456',
  ElementalMastery = '481',
  EnergyRecharge = '488',
  CRITRate = '501',
  HP = '515',
  HealingBonus = '529',
  PhysicalDMGBonus = '541',
  ATK = '558',
  DEF = '560',
  PyroDMGBonus = '584',
  HydroDMGBonus = '594',
  DendroDMGBonus = '609',
  ElectroDMGBonus = '615',
  CryoDMGBonus = '628',
  AnemoDMGBonus = '649',
  GeoDMGBonus = '661'
}

export const enum CharacterWeaponType {
  Sword = '72',
  Claymore = '81',
  Bow = '96',
  Catalyst = '117',
  Polearm = '126'
}

export const enum WeaponSecondaryAttributes {
  ATKPercentage = '136',
  PhysicalDMGBonus = '151',
  DEFPercentage = '164',
  CRITRate = '176',
  CRITDMG = '190',
  ElementalMastery = '199',
  EnergyRecharge = '211',
  HPPercentage = '228'
}

export const enum WeaponType {
  Sword = '398',
  Claymore = '407',
  Bow = '419',
  Catalyst = '439',
  Polearm = '443'
}

export const enum WeaponQuality {
  Star5 = '673',
  Star4 = '683',
  Star3 = '696',
  Star2 = '712',
  Star1 = '724'
}

export const enum ArtifactReliquaryEffect {
  ATK = '240',
  DMGBonus = '254',
  HP = '265',
  ShieldStrength = '283',
  DEF = '294',
  CRITRate = '308',
  ElementalMastery = '319',
  EnergyRecharge = '333',
  CDReduction = '346',
  HealingBonus = '359',
  ElementalEffects = '373',
  ElementalRES = '384'
}

export const enum MaterialType {
  Material = '824',
  Consumable = '841',
  Potion = '853',
  SuperiorVoucher = '861',
  Bait = '877',
  LanternRiteMaterial = '892',
  WeaponEnhancementMaterial = '898',
  Food = '913',
  WeaponAscensionMaterial = '924',
  ForgingBlueprint = '948',
  CityStatesSigil = '957',
  CommonVoucher = '974',
  DragonspineMaterial = '980',
  LocalSpecialtyLiyue = '994',
  FishingRod = '1013',
  QuestItem = '1038',
  Gadget = '1043',
  LimitedWishingItem = '1054',
  CraftingBlueprint = '1073',
  CookingIngredient = '1085',
  RefinementMaterial = '1093',
  CharacterEXPMaterial = '1106',
  LocalSpecialtyInazuma = '1141',
  CommonCurrency = '1153',
  ArtifactEnhancementMaterial = '1174',
  FurnishingBlueprint = '1195',
  SpecialCurrency = '1203',
  ForgingOre = '1222',
  TalentLevelUpMaterial = '1223',
  CharacterLevelUpMaterial = '1246',
  LocalSpecialtyMondstadt = '1263',
  AdventureItem = '1285',
  Recipe = '1297'
}
*/

export const enum Language {
  ChineseCN = 'zh-cn',
  ChineseTW = 'zh-tw',
  German = 'de-de',
  EnglishUS = 'en-us',
  SpanishES = 'es-es',
  French = 'fr-fr',
  Indonesia = 'id-id',
  Japanese = 'ja-jp',
  Korean = 'ko-kr',
  Portuguese = 'pt-pt',
  Russian = 'ru-ru',
  Thai = 'th-th',
  Vietnamese = 'vi-vn'
}
