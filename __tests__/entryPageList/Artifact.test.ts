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

import { Artifact, ArtifactFilters } from '../../src'

describe('Artifact', () => {
  describe('Artifact List', () => {
    test('Get artifact entry page data list, return type "object"', async () => {
      const artifact = new Artifact()
      const result = await artifact.getList()

      expect(typeof result).toBe('object')
    })

    test('Get artifact entry page data list, apply "ATK, CRIT Rate" filters, "length > 0" return "true"', async () => {
      const artifact = new Artifact()
      const result = await artifact.getList(ArtifactFilters.ReliquaryEffect.ATK, ArtifactFilters.ReliquaryEffect.CRITRate)

      expect(result.length > 0).toBe(true)
    })

    test('Get artifact entry page data list "[0].name", return "Adventurer"', async () => {
      const artifact = new Artifact()
      const result = await artifact.getList()

      expect(result[0]?.name).toBe('Adventurer')
    })

    test('Get artifact entry page data list "[0].entry_page_id", return "2061"', async () => {
      const artifact = new Artifact()
      const result = await artifact.getList()

      expect(result[0]?.entry_page_id).toBe('2061')
    })
  })

  describe('Artifact Total', () => {
    test('Get artifact entry page data total, "result > 0" return "true"', async () => {
      const artifact = new Artifact()
      const result = await artifact.getTotal()

      expect(result > 0).toBe(true)
    })

    test('Get artifact entry page data total, apply "ATK, CRIT Rate" filters, "result > 0" return "true"', async () => {
      const artifact = new Artifact()
      const result = await artifact.getTotal(ArtifactFilters.ReliquaryEffect.ATK, ArtifactFilters.ReliquaryEffect.CRITRate)

      expect(result > 0).toBe(true)
    })
  })

  describe('Artifact Search', () => {
    test('Search list by artifact name "Blizzard Strayer", "length > 0" return "true"', async () => {
      const artifact = new Artifact()
      const result = await artifact.searchListByName('Blizzard Strayer')

      expect(result.length > 0).toBe(true)
    })

    test('Search list by artifact name "Blizzard Strayer", get "[0].name", return "Blizzard Strayer"', async () => {
      const artifact = new Artifact()
      const result = await artifact.searchListByName('Blizzard Strayer')

      expect(result[0]?.name).toBe('Blizzard Strayer')
    })

    test('Search list by artifact name "Blizzard Strayer", get "[0].entry_page_id", return "2062"', async () => {
      const artifact = new Artifact()
      const result = await artifact.searchListByName('Blizzard Strayer')

      expect(result[0]?.entry_page_id).toBe('2062')
    })
  })
})
