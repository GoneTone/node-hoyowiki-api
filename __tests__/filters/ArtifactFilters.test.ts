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

import { ArtifactFilters, setLanguage, Language } from '../../src'

describe('Artifact Filters', () => {
  describe('Artifact Filters Default Data', () => {
    test('Valid "Set Bonus" artifact filters data', () => {
      expect(ArtifactFilters.ReliquaryEffect).toStrictEqual({
        ATK: '240',
        DMGBonus: '254',
        HP: '265',
        ShieldStrength: '283',
        DEF: '294',
        CRITRate: '308',
        ElementalMastery: '319',
        EnergyRecharge: '333',
        CDReduction: '346',
        HealingBonus: '359',
        ElementalEffects: '373',
        ElementalRES: '384'
      })
    })
  })

  describe('Artifact Filters Data, Set Language "ChineseTW"', () => {
    test('Set language "ChineseTW"', async () => {
      await setLanguage(Language.ChineseTW)
    })

    test('Valid "Set Bonus" artifact filters data, set language "ChineseTW"', () => {
      expect(ArtifactFilters.ReliquaryEffect).toStrictEqual({
        ATK: '241',
        DMGBonus: '253',
        HP: '264',
        ShieldStrength: '282',
        DEF: '293',
        CRITRate: '307',
        ElementalMastery: '325',
        EnergyRecharge: '332',
        CDReduction: '341',
        HealingBonus: '363',
        ElementalEffects: '365',
        ElementalRES: '383'
      })
    })
  })
})
