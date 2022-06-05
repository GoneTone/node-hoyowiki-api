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

import { axiosInstance } from '../utils/api'
import type { Page as CharacterPage } from '../interfaces/EntryPageDataCharacterAPIInterface'
import type { Page as WeaponPage } from '../interfaces/EntryPageDataWeaponAPIInterface'
import type { Page as ArtifactPage } from '../interfaces/EntryPageDataArtifactAPIInterface'
import type { Page as EnemyPage } from '../interfaces/EntryPageDataEnemyAPIInterface'
import type { Page as MaterialPage } from '../interfaces/EntryPageDataMaterialAPIInterface'

export class Entry {
  /**
   * Get Entry Page Data
   *
   * @param {number} entryId Entry ID
   *
   * @returns {Promise<CharacterPage | WeaponPage | ArtifactPage | EnemyPage | MaterialPage>}
   */
  public async get (entryId: number): Promise<CharacterPage | WeaponPage | ArtifactPage | EnemyPage | MaterialPage> {
    const response = await axiosInstance.get('/entry_page', {
      params: {
        entry_page_id: entryId
      }
    })

    if (response.data?.retcode === 404) throw new Error('Entry ID is invalid.')
    if (response.data?.retcode === 0) return response.data.data.page

    throw new Error('Unable to get data.')
  }
}
