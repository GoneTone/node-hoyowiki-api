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

import { Tutorial, TutorialFilters } from '../../src'

describe('Tutorial', () => {
  describe('Tutorial List', () => {
    test('Get tutorial entry page data list, apply "ImportantMessage" filters, "length > 0" return "true"', async () => {
      const tutorial = new Tutorial()
      const result = await tutorial.getList(TutorialFilters.Type.ImportantMessage)

      expect(result.length > 0).toBe(true)
    })

    test('Get tutorial entry page data list "[0].name", apply "ImportantMessage" filters, return "World Level Adjustment"', async () => {
      const tutorial = new Tutorial()
      const result = await tutorial.getList(TutorialFilters.Type.ImportantMessage)

      expect(result.reverse()[0]?.name).toBe('World Level Adjustment')
    })

    test('Get tutorial entry page data list "[0].entry_page_id", apply "ImportantMessage" filters, return "2594"', async () => {
      const tutorial = new Tutorial()
      const result = await tutorial.getList(TutorialFilters.Type.ImportantMessage)

      expect(result.reverse()[0]?.entry_page_id).toBe('2594')
    })
  })

  describe('Tutorial Total', () => {
    test('Get tutorial entry page data total, "result > 0" return "true"', async () => {
      const tutorial = new Tutorial()
      const result = await tutorial.getTotal()

      expect(result > 0).toBe(true)
    })

    test('Get tutorial entry page data total, apply "ImportantMessage" filters, "result > 0" return "true"', async () => {
      const tutorial = new Tutorial()
      const result = await tutorial.getTotal(TutorialFilters.Type.ImportantMessage)

      expect(result > 0).toBe(true)
    })
  })
})
