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

import { NpcFilters, setLanguage, Language } from '../../src'

describe('Npc Filters', () => {
  describe('Npc Filters Default Data', () => {
    test('Valid "Affiliation" npc filters data', () => {
      expect(NpcFilters.Affiliation).toStrictEqual({
        Mondstadt: '1520',
        Liyue: '1528',
        Inazuma: '1543',
        Snezhnaya: '1549',
        Sumeru: '1561',
        Fontaine: '1583',
        Natlan: '1592',
        Khaenriah: '1601',
        AdventurersGuild: '1614',
        Fatui: '1635'
      })
    })
  })

  describe('Npc Filters Data, Set Language "ChineseTW"', () => {
    test('Set language "ChineseTW"', async () => {
      await setLanguage(Language.ChineseTW)
    })

    test('Valid "Affiliation" npc filters data, set language "ChineseTW"', () => {
      expect(NpcFilters.Affiliation).toStrictEqual({
        Mondstadt: '1516',
        Liyue: '1527',
        Inazuma: '1542',
        Snezhnaya: '1555',
        Sumeru: '1567',
        Fontaine: '1582',
        Natlan: '1599',
        Khaenriah: '1600',
        AdventurersGuild: '1613',
        Fatui: '1631'
      })
    })
  })
})
