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

export class WeaponFilters {
  public static SecondaryAttributes = {
    ATKPercentage: '136',
    PhysicalDMGBonus: '151',
    DEFPercentage: '164',
    CRITRate: '176',
    CRITDMG: '190',
    ElementalMastery: '199',
    EnergyRecharge: '211',
    HPPercentage: '228'
  }

  public static Type = {
    Sword: '398',
    Claymore: '407',
    Bow: '419',
    Catalyst: '439',
    Polearm: '443'
  }

  public static Quality = {
    Star5: '673',
    Star4: '683',
    Star3: '696',
    Star2: '712',
    Star1: '724'
  }

  public static async setFilterIds (): Promise<void> {
    const response = await axiosInstance.get('/get_menu_filters', {
      params: {
        menu_id: EntryPageMenu.Weapon
      }
    })

    const filters: MenuFiltersAPIInterface.Filter[] = response.data.data.filters

    this.SecondaryAttributes = {
      ATKPercentage: filters[0]?.values[0]?.id ?? '136',
      PhysicalDMGBonus: filters[0]?.values[1]?.id ?? '151',
      DEFPercentage: filters[0]?.values[2]?.id ?? '164',
      CRITRate: filters[0]?.values[3]?.id ?? '176',
      CRITDMG: filters[0]?.values[4]?.id ?? '190',
      ElementalMastery: filters[0]?.values[5]?.id ?? '199',
      EnergyRecharge: filters[0]?.values[6]?.id ?? '211',
      HPPercentage: filters[0]?.values[7]?.id ?? '228'
    }
    this.Type = {
      Sword: filters[1]?.values[0]?.id ?? '398',
      Claymore: filters[1]?.values[1]?.id ?? '407',
      Bow: filters[1]?.values[2]?.id ?? '419',
      Catalyst: filters[1]?.values[3]?.id ?? '439',
      Polearm: filters[1]?.values[4]?.id ?? '443'
    }
    this.Quality = {
      Star5: filters[2]?.values[0]?.id ?? '673',
      Star4: filters[2]?.values[1]?.id ?? '683',
      Star3: filters[2]?.values[2]?.id ?? '696',
      Star2: filters[2]?.values[3]?.id ?? '712',
      Star1: filters[2]?.values[4]?.id ?? '724'
    }
  }
}
