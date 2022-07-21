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
import type * as SearchAPIInterface from '../interfaces/SearchAPIInterface'
import { HoYoWikiAPIError } from '../errors/HoYoWikiAPIError'

export class Search {
  /**
   * Get Search Data
   *
   * @param {string} keyword Keyword
   *
   * @returns {Promise<SearchAPIInterface.List[]>}
   */
  public async get (keyword: string): Promise<SearchAPIInterface.List[]> {
    const response = await axiosInstance.get('/search', {
      params: {
        keyword
      }
    })

    if (response.data?.retcode === 0) return response.data.data.list

    throw new HoYoWikiAPIError('Unable to get search data.', response.data?.retcode)
  }
}
