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

import { CharacterFilters, setLanguage, Language } from '../../src'

describe('Character Filters', () => {
  describe('Character Filters Default Data', () => {
    test('Valid "Elemental Type" character filters data', () => {
      expect(CharacterFilters.ElementalType).toStrictEqual({
        Pyro: '737',
        Hydro: '745',
        Dendro: '763',
        Electro: '780',
        Anemo: '789',
        Cryo: '803',
        Geo: '814'
      })
    })

    test('Valid "Region" character filters data', () => {
      expect(CharacterFilters.Region).toStrictEqual({
        Mondstadt: '27',
        LiyueHarbor: '43',
        InazumaCity: '60'
      })
    })

    test('Valid "Quality" character filters data', () => {
      expect(CharacterFilters.Quality).toStrictEqual({
        Star5: '3',
        Star4: '16'
      })
    })

    test('Valid "Bonus Attributes From Ascension" character filters data', () => {
      expect(CharacterFilters.BonusAttributesFromAscension).toStrictEqual({
        CRITDMG: '456',
        ElementalMastery: '481',
        EnergyRecharge: '488',
        CRITRate: '501',
        HP: '515',
        HealingBonus: '529',
        PhysicalDMGBonus: '541',
        ATK: '558',
        DEF: '560',
        PyroDMGBonus: '584',
        HydroDMGBonus: '594',
        DendroDMGBonus: '609',
        ElectroDMGBonus: '615',
        CryoDMGBonus: '628',
        AnemoDMGBonus: '649',
        GeoDMGBonus: '661'
      })
    })

    test('Valid "Weapons" character filters data', () => {
      expect(CharacterFilters.WeaponType).toStrictEqual({
        Sword: '72',
        Claymore: '81',
        Bow: '96',
        Catalyst: '117',
        Polearm: '126'
      })
    })
  })

  describe('Character Filters Data, Set Language "ChineseTW"', () => {
    test('Set language "ChineseTW"', async () => {
      await setLanguage(Language.ChineseTW)
    })

    test('Valid "Elemental Type" character filters data, set language "ChineseTW"', () => {
      expect(CharacterFilters.ElementalType).toStrictEqual({
        Pyro: '736',
        Hydro: '752',
        Dendro: '762',
        Electro: '779',
        Anemo: '783',
        Cryo: '797',
        Geo: '819'
      })
    })

    test('Valid "Region" character filters data, set language "ChineseTW"', () => {
      expect(CharacterFilters.Region).toStrictEqual({
        Mondstadt: '39',
        LiyueHarbor: '49',
        InazumaCity: '59'
      })
    })

    test('Valid "Quality" character filters data, set language "ChineseTW"', () => {
      expect(CharacterFilters.Quality).toStrictEqual({
        Star5: '9',
        Star4: '15'
      })
    })

    test('Valid "Bonus Attributes From Ascension" character filters data, set language "ChineseTW"', () => {
      expect(CharacterFilters.BonusAttributesFromAscension).toStrictEqual({
        CRITDMG: '464',
        ElementalMastery: '480',
        EnergyRecharge: '487',
        CRITRate: '502',
        HP: '508',
        HealingBonus: '521',
        PhysicalDMGBonus: '540',
        ATK: '557',
        DEF: '572',
        PyroDMGBonus: '578',
        HydroDMGBonus: '593',
        DendroDMGBonus: '608',
        ElectroDMGBonus: '620',
        CryoDMGBonus: '634',
        AnemoDMGBonus: '648',
        GeoDMGBonus: '660'
      })
    })

    test('Valid "Weapons" character filters data, set language "ChineseTW"', () => {
      expect(CharacterFilters.WeaponType).toStrictEqual({
        Sword: '76',
        Claymore: '80',
        Bow: '101',
        Catalyst: '105',
        Polearm: '125'
      })
    })
  })
})
