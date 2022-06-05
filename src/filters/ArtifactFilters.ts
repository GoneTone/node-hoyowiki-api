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

export class ArtifactFilters {
  public static ReliquaryEffect = {
    ATK: '240',
    DMGBonus: '254',
    HP: '265',
    ShieldStrength: '283',
    DEF: '294',
    CRITRate: '308',
    ElementalMastery: '319',
    EnergyRecharge: '333',
    CDReduction: '346',
    HealingBonus: '359',
    ElementalEffects: '373',
    ElementalRES: '384'
  }

  public static async setFilterIds (): Promise<void> {
    const response = await axiosInstance.get('/get_menu_filters', {
      params: {
        menu_id: EntryPageMenu.Artifact
      }
    })

    const filters: MenuFiltersAPIInterface.Filter[] = response.data.data.filters

    this.ReliquaryEffect = {
      ATK: filters[0]?.values[0]?.id ?? '240',
      DMGBonus: filters[0]?.values[1]?.id ?? '254',
      HP: filters[0]?.values[2]?.id ?? '265',
      ShieldStrength: filters[0]?.values[3]?.id ?? '283',
      DEF: filters[0]?.values[4]?.id ?? '294',
      CRITRate: filters[0]?.values[5]?.id ?? '308',
      ElementalMastery: filters[0]?.values[6]?.id ?? '319',
      EnergyRecharge: filters[0]?.values[7]?.id ?? '333',
      CDReduction: filters[0]?.values[8]?.id ?? '346',
      HealingBonus: filters[0]?.values[9]?.id ?? '359',
      ElementalEffects: filters[0]?.values[10]?.id ?? '373',
      ElementalRES: filters[0]?.values[11]?.id ?? '384'
    }
  }
}
