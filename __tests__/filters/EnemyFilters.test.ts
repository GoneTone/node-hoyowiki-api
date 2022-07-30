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

import { EnemyFilters, setLanguage, Language } from '../../src'

describe('Material Filters', () => {
  describe('Material Filters Default Data', () => {
    test('Valid "Type" material filters data', () => {
      expect(EnemyFilters.Type).toStrictEqual({
        OtherHumanFactions: '1307',
        Automatons: '1326',
        Fatui: '1329',
        EnemiesOfNote: '1345',
        Hilichurls: '1359',
        ElementalLifeforms: '1368',
        TheAbyss: '1381',
        MysticalBeasts: '1402'
      })
    })
  })

  describe('Material Filters Data, Set Language "ChineseTW"', () => {
    test('Set language "ChineseTW"', async () => {
      await setLanguage(Language.ChineseTW)
    })

    test('Valid "Type" material filters data, set language "ChineseTW"', () => {
      expect(EnemyFilters.Type).toStrictEqual({
        OtherHumanFactions: '1313',
        Automatons: '1314',
        Fatui: '1328',
        EnemiesOfNote: '1344',
        Hilichurls: '1354',
        ElementalLifeforms: '1367',
        TheAbyss: '1388',
        MysticalBeasts: '1401'
      })
    })
  })
})
