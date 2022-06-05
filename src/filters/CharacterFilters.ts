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

export class CharacterFilters {
  public static ElementalType = {
    Pyro: '737',
    Hydro: '745',
    Dendro: '763',
    Electro: '780',
    Anemo: '789',
    Cryo: '803',
    Geo: '814'
  }

  public static Region = {
    Mondstadt: '27',
    LiyueHarbor: '43',
    InazumaCity: '60'
  }

  public static Quality = {
    Star5: '3',
    Star4: '16'
  }

  public static BonusAttributesFromAscension = {
    CRITDMG: '456',
    ElementalMastery: '481',
    EnergyRecharge: '488',
    CRITRate: '501',
    HP: '515',
    HealingBonus: '529',
    PhysicalDMGBonus: '541',
    ATK: '558',
    DEF: '560',
    PyroDMGBonus: '584',
    HydroDMGBonus: '594',
    DendroDMGBonus: '609',
    ElectroDMGBonus: '615',
    CryoDMGBonus: '628',
    AnemoDMGBonus: '649',
    GeoDMGBonus: '661'
  }

  public static WeaponType = {
    Sword: '72',
    Claymore: '81',
    Bow: '96',
    Catalyst: '117',
    Polearm: '126'
  }

  public static async setFilterIds (): Promise<void> {
    const response = await axiosInstance.get('/get_menu_filters', {
      params: {
        menu_id: EntryPageMenu.Character
      }
    })

    const filters: MenuFiltersAPIInterface.Filter[] = response.data.data.filters

    this.ElementalType = {
      Pyro: filters[0]?.values[0]?.id ?? '737',
      Hydro: filters[0]?.values[1]?.id ?? '745',
      Dendro: filters[0]?.values[2]?.id ?? '763',
      Electro: filters[0]?.values[3]?.id ?? '780',
      Anemo: filters[0]?.values[4]?.id ?? '789',
      Cryo: filters[0]?.values[5]?.id ?? '803',
      Geo: filters[0]?.values[6]?.id ?? '814'
    }
    this.Region = {
      Mondstadt: filters[1]?.values[0]?.id ?? '27',
      LiyueHarbor: filters[1]?.values[1]?.id ?? '43',
      InazumaCity: filters[1]?.values[2]?.id ?? '60'
    }
    this.Quality = {
      Star5: filters[2]?.values[0]?.id ?? '3',
      Star4: filters[2]?.values[1]?.id ?? '16'
    }
    this.BonusAttributesFromAscension = {
      CRITDMG: filters[3]?.values[0]?.id ?? '456',
      ElementalMastery: filters[3]?.values[1]?.id ?? '481',
      EnergyRecharge: filters[3]?.values[2]?.id ?? '488',
      CRITRate: filters[3]?.values[3]?.id ?? '501',
      HP: filters[3]?.values[4]?.id ?? '515',
      HealingBonus: filters[3]?.values[5]?.id ?? '529',
      PhysicalDMGBonus: filters[3]?.values[6]?.id ?? '541',
      ATK: filters[3]?.values[7]?.id ?? '558',
      DEF: filters[3]?.values[8]?.id ?? '560',
      PyroDMGBonus: filters[3]?.values[9]?.id ?? '584',
      HydroDMGBonus: filters[3]?.values[10]?.id ?? '594',
      DendroDMGBonus: filters[3]?.values[11]?.id ?? '609',
      ElectroDMGBonus: filters[3]?.values[12]?.id ?? '615',
      CryoDMGBonus: filters[3]?.values[13]?.id ?? '628',
      AnemoDMGBonus: filters[3]?.values[14]?.id ?? '649',
      GeoDMGBonus: filters[3]?.values[15]?.id ?? '661'
    }
    this.WeaponType = {
      Sword: filters[4]?.values[0]?.id ?? '72',
      Claymore: filters[4]?.values[1]?.id ?? '81',
      Bow: filters[4]?.values[2]?.id ?? '96',
      Catalyst: filters[4]?.values[3]?.id ?? '117',
      Polearm: filters[4]?.values[4]?.id ?? '126'
    }
  }
}
