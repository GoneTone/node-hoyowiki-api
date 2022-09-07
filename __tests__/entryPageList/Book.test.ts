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

import { Book } from '../../src'

describe('Book', () => {
  describe('Book List', () => {
    test('Get book entry page data list, "length > 0" return "true"', async () => {
      const book = new Book()
      const result = await book.getList()

      expect(result.length > 0).toBe(true)
    })

    test('Get book entry page data list "[0].name", return "The Five Kasen\'s Splendor: Sumizome"', async () => {
      const book = new Book()
      const result = await book.getList()

      expect(result.reverse()[0]?.name).toBe('The Five Kasen\'s Splendor: Sumizome')
    })

    test('Get book entry page data list "[0].entry_page_id", return "2287"', async () => {
      const book = new Book()
      const result = await book.getList()

      expect(result.reverse()[0]?.entry_page_id).toBe('2287')
    })
  })

  describe('Book Total', () => {
    test('Get book entry page data total, "result > 0" return "true"', async () => {
      const book = new Book()
      const result = await book.getTotal()

      expect(result > 0).toBe(true)
    })

    test('Get book entry page data total, "result > 0" return "true"', async () => {
      const book = new Book()
      const result = await book.getTotal()

      expect(result > 0).toBe(true)
    })
  })
})
