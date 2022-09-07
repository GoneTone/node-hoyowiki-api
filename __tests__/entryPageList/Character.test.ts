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

import { Character, CharacterFilters } from '../../src'

describe('Character', () => {
  describe('Character List', () => {
    test('Get character entry page data list, return type "object"', async () => {
      const character = new Character()
      const result = await character.getList()

      expect(typeof result).toBe('object')
    })

    test('Get character entry page data list, apply "Pyro, 5-Star" filters, "length > 0" return "true"', async () => {
      const character = new Character()
      const result = await character.getList(CharacterFilters.ElementalType.Pyro, CharacterFilters.Quality.Star5)

      expect(result.length > 0).toBe(true)
    })

    test('Get character entry page data list "[0].name", return "Qiqi"', async () => {
      const character = new Character()
      const result = await character.getList()

      expect(result.reverse()[0]?.name).toBe('Qiqi')
    })

    test('Get character entry page data list "[0].entry_page_id", return "1"', async () => {
      const character = new Character()
      const result = await character.getList()

      expect(result.reverse()[0]?.entry_page_id).toBe('1')
    })
  })

  describe('Character Total', () => {
    test('Get character entry page data total, "result > 0" return "true"', async () => {
      const character = new Character()
      const result = await character.getTotal()

      expect(result > 0).toBe(true)
    })

    test('Get character entry page data total, apply "Pyro, 5-Star" filters, "result > 0" return "true"', async () => {
      const character = new Character()
      const result = await character.getTotal(CharacterFilters.ElementalType.Pyro, CharacterFilters.Quality.Star5)

      expect(result > 0).toBe(true)
    })
  })

  describe('Character Search', () => {
    test('Search list by character name "Yelan", "length > 0" return "true"', async () => {
      const character = new Character()
      const result = await character.searchListByName('Yelan')

      expect(result.length > 0).toBe(true)
    })

    test('Search list by character name "Yelan", get "[0].name", return "Yelan"', async () => {
      const character = new Character()
      const result = await character.searchListByName('Yelan')

      expect(result[0]?.name).toBe('Yelan')
    })

    test('Search list by character name "Yelan", get "[0].entry_page_id", return "2252"', async () => {
      const character = new Character()
      const result = await character.searchListByName('Yelan')

      expect(result[0]?.entry_page_id).toBe('2252')
    })
  })
})
