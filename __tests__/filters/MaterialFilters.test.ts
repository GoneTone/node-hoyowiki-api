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

import { MaterialFilters, setLanguage, Language } from '../../src'

describe('Material Filters', () => {
  describe('Material Filters Default Data', () => {
    test('Valid "Type" material filters data', () => {
      expect(MaterialFilters.Type).toStrictEqual({
        Material: '824',
        Consumable: '841',
        Potion: '853',
        SuperiorVoucher: '861',
        Bait: '877',
        LanternRiteMaterial: '892',
        WeaponEnhancementMaterial: '898',
        Food: '913',
        WeaponAscensionMaterial: '924',
        ForgingBlueprint: '948',
        CityStatesSigil: '957',
        CommonVoucher: '974',
        DragonspineMaterial: '980',
        LocalSpecialtyLiyue: '994',
        FishingRod: '1013',
        QuestItem: '1038',
        Gadget: '1043',
        LimitedWishingItem: '1054',
        CraftingBlueprint: '1073',
        CookingIngredient: '1085',
        RefinementMaterial: '1093',
        CharacterEXPMaterial: '1106',
        LocalSpecialtyInazuma: '1141',
        CommonCurrency: '1153',
        ArtifactEnhancementMaterial: '1174',
        FurnishingBlueprint: '1195',
        SpecialCurrency: '1203',
        ForgingOre: '1222',
        TalentLevelUpMaterial: '1223',
        CharacterLevelUpMaterial: '1246',
        LocalSpecialtyMondstadt: '1263',
        AdventureItem: '1285',
        Recipe: '1297'
      })
    })
  })

  describe('Material Filters Data, Set Language "ChineseTW"', () => {
    test('Set language "ChineseTW"', async () => {
      await setLanguage(Language.ChineseTW)
    })

    test('Valid "Type" material filters data, set language "ChineseTW"', () => {
      expect(MaterialFilters.Type).toStrictEqual({
        Material: '823',
        Consumable: '836',
        Potion: '852',
        SuperiorVoucher: '860',
        Bait: '876',
        LanternRiteMaterial: '891',
        WeaponEnhancementMaterial: '906',
        Food: '920',
        WeaponAscensionMaterial: '936',
        ForgingBlueprint: '947',
        CityStatesSigil: '956',
        CommonVoucher: '973',
        DragonspineMaterial: '979',
        LocalSpecialtyLiyue: '993',
        FishingRod: '1012',
        QuestItem: '1037',
        Gadget: '1042',
        LimitedWishingItem: '1062',
        CraftingBlueprint: '1078',
        CookingIngredient: '1084',
        RefinementMaterial: '1105',
        CharacterEXPMaterial: '1114',
        LocalSpecialtyInazuma: '1134',
        CommonCurrency: '1145',
        ArtifactEnhancementMaterial: '1173',
        FurnishingBlueprint: '1194',
        SpecialCurrency: '1202',
        ForgingOre: '1215',
        TalentLevelUpMaterial: '1229',
        CharacterLevelUpMaterial: '1245',
        LocalSpecialtyMondstadt: '1270',
        AdventureItem: '1284',
        Recipe: '1288'
      })
    })
  })
})
