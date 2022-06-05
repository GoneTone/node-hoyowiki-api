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

import { Weapon, WeaponFilters } from '../../src'

describe('Weapon', () => {
  describe('Weapon List', () => {
    test('Get weapon entry page data list, return type "object"', async () => {
      const weapon = new Weapon()
      const result = await weapon.getList()

      expect(typeof result).toBe('object')
    })

    test('Get weapon entry page data list, apply "CRIT Rate, 5-Star" filters, "length > 0" return "true"', async () => {
      const weapon = new Weapon()
      const result = await weapon.getList(WeaponFilters.SecondaryAttributes.CRITRate, WeaponFilters.Quality.Star5)

      expect(result.length > 0).toBe(true)
    })

    test('Get weapon entry page data list "[0].name", return ""The Catch""', async () => {
      const weapon = new Weapon()
      const result = await weapon.getList()

      expect(result[0]?.name).toBe('"The Catch"')
    })

    test('Get weapon entry page data list "[0].entry_page_id", return "1930"', async () => {
      const weapon = new Weapon()
      const result = await weapon.getList()

      expect(result[0]?.entry_page_id).toBe('1930')
    })
  })

  describe('Weapon Total', () => {
    test('Get weapon entry page data total, "result > 0" return "true"', async () => {
      const weapon = new Weapon()
      const result = await weapon.getTotal()

      expect(result > 0).toBe(true)
    })

    test('Get weapon entry page data total, apply "CRIT Rate, 5-Star" filters, "result > 0" return "true"', async () => {
      const weapon = new Weapon()
      const result = await weapon.getTotal(WeaponFilters.SecondaryAttributes.CRITRate, WeaponFilters.Quality.Star5)

      expect(result > 0).toBe(true)
    })
  })

  describe('Weapon Search', () => {
    test('Search list by weapon name "Aqua Simulacra", "length > 0" return "true"', async () => {
      const weapon = new Weapon()
      const result = await weapon.searchListByName('Aqua Simulacra')

      expect(result.length > 0).toBe(true)
    })

    test('Search list by weapon name "Aqua Simulacra", get "[0].name", return "Aqua Simulacra"', async () => {
      const weapon = new Weapon()
      const result = await weapon.searchListByName('Aqua Simulacra')

      expect(result[0]?.name).toBe('Aqua Simulacra')
    })

    test('Search list by weapon name "Aqua Simulacra", get "[0].entry_page_id", return "2254"', async () => {
      const weapon = new Weapon()
      const result = await weapon.searchListByName('Aqua Simulacra')

      expect(result[0]?.entry_page_id).toBe('2254')
    })
  })
})
