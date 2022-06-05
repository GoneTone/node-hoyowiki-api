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

import { Enemy } from '../../src'

describe('Enemy', () => {
  describe('Enemy List', () => {
    test('Get enemy entry page data list, return type "object"', async () => {
      const enemy = new Enemy()
      const result = await enemy.getList()

      expect(typeof result).toBe('object')
    })

    test('Get enemy entry page data list "[0].name", return "Childe"', async () => {
      const enemy = new Enemy()
      const result = await enemy.getList()

      expect(result[0]?.name).toBe('Childe')
    })

    test('Get enemy entry page data list "[0].entry_page_id", return "2100"', async () => {
      const enemy = new Enemy()
      const result = await enemy.getList()

      expect(result[0]?.entry_page_id).toBe('2100')
    })
  })

  describe('Enemy Total', () => {
    test('Get enemy entry page data total, "result > 0" return "true"', async () => {
      const enemy = new Enemy()
      const result = await enemy.getTotal()

      expect(result > 0).toBe(true)
    })
  })

  describe('Enemy Search', () => {
    test('Search list by enemy name "Childe", "length > 0" return "true"', async () => {
      const enemy = new Enemy()
      const result = await enemy.searchListByName('Childe')

      expect(result.length > 0).toBe(true)
    })

    test('Search list by enemy name "Childe", get "[0].name", return "Childe"', async () => {
      const enemy = new Enemy()
      const result = await enemy.searchListByName('Childe')

      expect(result[0]?.name).toBe('Childe')
    })

    test('Search list by enemy name "Childe", get "[0].entry_page_id", return "2100"', async () => {
      const enemy = new Enemy()
      const result = await enemy.searchListByName('Childe')

      expect(result[0]?.entry_page_id).toBe('2100')
    })
  })
})
