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

import { Animal, AnimalFilters } from '../../src'

describe('Animal', () => {
  describe('Animal List', () => {
    test('Get animal entry page data list, apply "Fish" filters, "length > 0" return "true"', async () => {
      const animal = new Animal()
      const result = await animal.getList(AnimalFilters.Type.Fish)

      expect(result.length > 0).toBe(true)
    })

    test('Get animal entry page data list "[0].name", apply "Fish" filters, return "Formalo Ray"', async () => {
      const animal = new Animal()
      const result = await animal.getList(AnimalFilters.Type.Fish)

      expect(result[0]?.name).toBe('Formalo Ray')
    })

    test('Get animal entry page data list "[0].entry_page_id", apply "Fish" filters, return "2357"', async () => {
      const animal = new Animal()
      const result = await animal.getList(AnimalFilters.Type.Fish)

      expect(result[0]?.entry_page_id).toBe('2357')
    })
  })

  describe('Animal Total', () => {
    test('Get animal entry page data total, "result > 0" return "true"', async () => {
      const animal = new Animal()
      const result = await animal.getTotal()

      expect(result > 0).toBe(true)
    })

    test('Get animal entry page data total, apply "Fish" filters, "result > 0" return "true"', async () => {
      const animal = new Animal()
      const result = await animal.getTotal(AnimalFilters.Type.Fish)

      expect(result > 0).toBe(true)
    })
  })
})
