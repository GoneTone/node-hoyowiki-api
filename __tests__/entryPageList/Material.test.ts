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

import { Material, MaterialFilters } from '../../src'

describe('Material', () => {
  describe('Material List', () => {
    test('Get material entry page data list, apply "Food, Talent Level-Up Material" filters, "length > 0" return "true"', async () => {
      const material = new Material()
      const result = await material.getList(MaterialFilters.Type.Food, MaterialFilters.Type.TalentLevelUpMaterial)

      expect(result.length > 0).toBe(true)
    })

    test('Get material entry page data list "[0].name", apply "Food, Talent Level-Up Material" filters, return "Philosophies of Diligence"', async () => {
      const material = new Material()
      const result = await material.getList(MaterialFilters.Type.Food, MaterialFilters.Type.TalentLevelUpMaterial)

      expect(result[0]?.name).toBe('Philosophies of Diligence')
    })

    test('Get material entry page data list "[0].entry_page_id", apply "Food, Talent Level-Up Material" filters, return "74"', async () => {
      const material = new Material()
      const result = await material.getList(MaterialFilters.Type.Food, MaterialFilters.Type.TalentLevelUpMaterial)

      expect(result[0]?.entry_page_id).toBe('74')
    })
  })

  describe('Material Total', () => {
    test('Get material entry page data total, "result > 0" return "true"', async () => {
      const material = new Material()
      const result = await material.getTotal()

      expect(result > 0).toBe(true)
    })

    test('Get material entry page data total, apply "Food, Talent Level-Up Material" filters, "result > 0" return "true"', async () => {
      const material = new Material()
      const result = await material.getTotal(MaterialFilters.Type.Food, MaterialFilters.Type.TalentLevelUpMaterial)

      expect(result > 0).toBe(true)
    })
  })
})
