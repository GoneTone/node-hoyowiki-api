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

import { Npc, NpcFilters } from '../../src'

describe('Npc', () => {
  describe('Npc List', () => {
    test('Get npc entry page data list, apply "Fatui" filters, "length > 0" return "true"', async () => {
      const npc = new Npc()
      const result = await npc.getList(NpcFilters.Affiliation.Fatui)

      expect(result.length > 0).toBe(true)
    })

    test('Get npc entry page data list "[0].name", apply "Fatui" filters, return "Ekaterina"', async () => {
      const npc = new Npc()
      const result = await npc.getList(NpcFilters.Affiliation.Fatui)

      expect(result[0]?.name).toBe('Ekaterina')
    })

    test('Get npc entry page data list "[0].entry_page_id", apply "Fatui" filters, return "2465"', async () => {
      const npc = new Npc()
      const result = await npc.getList(NpcFilters.Affiliation.Fatui)

      expect(result[0]?.entry_page_id).toBe('2465')
    })
  })

  describe('Npc Total', () => {
    test('Get npc entry page data total, "result > 0" return "true"', async () => {
      const npc = new Npc()
      const result = await npc.getTotal()

      expect(result > 0).toBe(true)
    })

    test('Get npc entry page data total, apply "Fatui" filters, "result > 0" return "true"', async () => {
      const npc = new Npc()
      const result = await npc.getTotal(NpcFilters.Affiliation.Fatui)

      expect(result > 0).toBe(true)
    })
  })
})
