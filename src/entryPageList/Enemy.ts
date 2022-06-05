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
import { EntryPageMenu } from '../utils/constants'
import type { EntryPageListData, EntryPageDataOptions } from '../interfaces/EntryPageListDataInterface'
import type * as EntryPageListDataEnemyAPIInterface from '../interfaces/EntryPageListDataEnemyAPIInterface'

export class Enemy implements EntryPageListData {
  /**
   * @param {EntryPageDataOptions | undefined} options
   *
   * @returns {Promise<EntryPageListDataEnemyAPIInterface.Data>}
   */
  public async get (options?: EntryPageDataOptions): Promise<EntryPageListDataEnemyAPIInterface.Data> {
    const response = await axiosInstance.post('/get_entry_page_list', {
      filters: [],
      menu_id: EntryPageMenu.Enemy,
      page_num: options?.pageNum ?? 1,
      page_size: options?.pageSize ?? 30,
      use_es: true
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (response.data?.retcode === 0) return response.data.data

    throw new Error('Unable to get data.')
  }

  /**
   * @param {EntryPageDataOptions | undefined} options
   *
   * @returns {Promise<EntryPageListDataEnemyAPIInterface.List[]>}
   *
   * @private
   */
  private async getListConcat (options?: EntryPageDataOptions): Promise<EntryPageListDataEnemyAPIInterface.List[]> {
    const data = await this.get(options)

    if (data.list.length === 0) return []

    const dataNext = await this.getListConcat({
      pageNum: options?.pageNum ? options.pageNum + 1 : 2,
      pageSize: options?.pageSize ?? 30
    })

    return [...data.list, ...dataNext]
  }

  /**
   * Get Enemy Entry Page Data List.
   *
   * @returns {Promise<EntryPageListDataEnemyAPIInterface.List[]>}
   */
  public async getList (): Promise<EntryPageListDataEnemyAPIInterface.List[]> {
    return await this.getListConcat()
  }

  /**
   * Get Enemy Entry Page Data Total.
   *
   * @returns {Promise<number>}
   */
  public async getTotal (): Promise<number> {
    const data = await this.get({
      pageNum: 1,
      pageSize: 0
    })

    return Number(data.total)
  }

  /**
   * Search List By Enemy Name.
   *
   * @param {string} name Enemy Name
   *
   * @returns {Promise<EntryPageListDataEnemyAPIInterface.List[]>}
   */
  public async searchListByName (name: string): Promise<EntryPageListDataEnemyAPIInterface.List[]> {
    const data = await this.getList()
    return data.filter(item => item.name === name)
  }
}
