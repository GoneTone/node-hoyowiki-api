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
import type * as MenuFiltersAPIInterface from '../interfaces/MenuFiltersAPIInterface'

export class NpcFilters {
  public static Affiliation = {
    Mondstadt: '1520',
    Liyue: '1528',
    Inazuma: '1543',
    Snezhnaya: '1549',
    Sumeru: '1561',
    Fontaine: '1583',
    Natlan: '1592',
    Khaenriah: '1601',
    AdventurersGuild: '1614',
    Fatui: '1635'
  }

  public static async setFilterIds (): Promise<void> {
    const response = await axiosInstance.get('/get_menu_filters', {
      params: {
        menu_id: EntryPageMenu.Npc
      }
    })

    const filters: MenuFiltersAPIInterface.Filter[] = response.data.data.filters

    this.Affiliation = {
      Mondstadt: filters[0]?.values[0]?.id ?? '1520',
      Liyue: filters[0]?.values[1]?.id ?? '1528',
      Inazuma: filters[0]?.values[2]?.id ?? '1543',
      Snezhnaya: filters[0]?.values[3]?.id ?? '1549',
      Sumeru: filters[0]?.values[4]?.id ?? '1561',
      Fontaine: filters[0]?.values[5]?.id ?? '1583',
      Natlan: filters[0]?.values[6]?.id ?? '1592',
      Khaenriah: filters[0]?.values[7]?.id ?? '1601',
      AdventurersGuild: filters[0]?.values[8]?.id ?? '1614',
      Fatui: filters[0]?.values[9]?.id ?? '1635'
    }
  }
}
