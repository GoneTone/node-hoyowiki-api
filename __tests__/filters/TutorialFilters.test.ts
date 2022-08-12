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

import { TutorialFilters, setLanguage, Language } from '../../src'

describe('Tutorial Filters', () => {
  describe('Tutorial Filters Default Data', () => {
    test('Valid "Type" tutorial filters data', () => {
      expect(TutorialFilters.Type).toStrictEqual({
        ExplorationKnowledge: '1641',
        CombatKnowledge: '1660',
        ImportantMessage: '1674',
        ElementalReactions: '1688'
      })
    })
  })

  describe('Tutorial Filters Data, Set Language "ChineseTW"', () => {
    test('Set language "ChineseTW"', async () => {
      await setLanguage(Language.ChineseTW)
    })

    test('Valid "Type" tutorial filters data, set language "ChineseTW"', () => {
      expect(TutorialFilters.Type).toStrictEqual({
        ExplorationKnowledge: '1640',
        CombatKnowledge: '1655',
        ImportantMessage: '1673',
        ElementalReactions: '1687'
      })
    })
  })
})
