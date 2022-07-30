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

export class EnemyFilters {
  public static Type = {
    OtherHumanFactions: '1307',
    Automatons: '1326',
    Fatui: '1329',
    EnemiesOfNote: '1345',
    Hilichurls: '1359',
    ElementalLifeforms: '1368',
    TheAbyss: '1381',
    MysticalBeasts: '1402'
  }

  public static async setFilterIds (): Promise<void> {
    const response = await axiosInstance.get('/get_menu_filters', {
      params: {
        menu_id: EntryPageMenu.Enemy
      }
    })

    const filters: MenuFiltersAPIInterface.Filter[] = response.data.data.filters

    this.Type = {
      OtherHumanFactions: filters[0]?.values[0]?.id ?? '1307',
      Automatons: filters[0]?.values[1]?.id ?? '1326',
      Fatui: filters[0]?.values[2]?.id ?? '1329',
      EnemiesOfNote: filters[0]?.values[3]?.id ?? '1345',
      Hilichurls: filters[0]?.values[4]?.id ?? '1359',
      ElementalLifeforms: filters[0]?.values[5]?.id ?? '1368',
      TheAbyss: filters[0]?.values[6]?.id ?? '1381',
      MysticalBeasts: filters[0]?.values[7]?.id ?? '1402'
    }
  }
}
