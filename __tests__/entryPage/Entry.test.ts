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

import { Entry } from '../../src'

describe('Entry', () => {
  test('Get entry page data, entry id "2252", return type "object"', async () => {
    const entry = new Entry()
    const result = await entry.get(2252)

    expect(typeof result).toBe('object')
  })

  test('Get entry page data "id", entry id "2252", return "2252"', async () => {
    const entry = new Entry()
    const result = await entry.get(2252)

    expect(result.id).toBe('2252')
  })

  test('Get entry page data "name", entry id "2252", return "Yelan"', async () => {
    const entry = new Entry()
    const result = await entry.get(2252)

    expect(result.name).toBe('Yelan')
  })

  test('Get entry page data "menu_id", entry id "2252", return "2"', async () => {
    const entry = new Entry()
    const result = await entry.get(2252)

    expect(result.menu_id).toBe('2')
  })

  test('Get entry page data "filter_values.character_vision.values[0]", entry id "2252", return "Hydro"', async () => {
    const entry = new Entry()
    const result = await entry.get(2252)

    // @ts-ignore
    expect(result.filter_values.character_vision.values[0]).toBe('Hydro')
  })
})
