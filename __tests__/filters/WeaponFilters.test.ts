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

import { WeaponFilters, setLanguage, Language } from '../../src'

describe('Weapon Filters', () => {
  describe('Weapon Filters Default Data', () => {
    test('Valid "Secondary Attributes" weapon filters data', () => {
      expect(WeaponFilters.SecondaryAttributes).toStrictEqual({
        ATKPercentage: '136',
        PhysicalDMGBonus: '151',
        DEFPercentage: '164',
        CRITRate: '176',
        CRITDMG: '190',
        ElementalMastery: '199',
        EnergyRecharge: '211',
        HPPercentage: '228'
      })
    })

    test('Valid "Weapons" weapon filters data', () => {
      expect(WeaponFilters.Type).toStrictEqual({
        Sword: '398',
        Claymore: '407',
        Bow: '419',
        Catalyst: '439',
        Polearm: '443'
      })
    })

    test('Valid "Quality" weapon filters data', () => {
      expect(WeaponFilters.Quality).toStrictEqual({
        Star5: '673',
        Star4: '683',
        Star3: '696',
        Star2: '712',
        Star1: '724'
      })
    })
  })

  describe('Weapon Filters Data, Set Language "ChineseTW"', () => {
    test('Set language "ChineseTW"', async () => {
      await setLanguage(Language.ChineseTW)
    })

    test('Valid "Secondary Attributes" weapon filters data, set language "ChineseTW"', () => {
      expect(WeaponFilters.SecondaryAttributes).toStrictEqual({
        ATKPercentage: '135',
        PhysicalDMGBonus: '150',
        DEFPercentage: '163',
        CRITRate: '171',
        CRITDMG: '189',
        ElementalMastery: '200',
        EnergyRecharge: '218',
        HPPercentage: '227'
      })
    })

    test('Valid "Weapons" weapon filters data, set language "ChineseTW"', () => {
      expect(WeaponFilters.Type).toStrictEqual({
        Sword: '397',
        Claymore: '406',
        Bow: '418',
        Catalyst: '438',
        Polearm: '455'
      })
    })

    test('Valid "Quality" weapon filters data, set language "ChineseTW"', () => {
      expect(WeaponFilters.Quality).toStrictEqual({
        Star5: '672',
        Star4: '682',
        Star3: '701',
        Star2: '704',
        Star1: '716'
      })
    })
  })
})
