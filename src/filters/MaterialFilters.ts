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

export class MaterialFilters {
  public static Type = {
    Material: '824',
    Consumable: '841',
    Potion: '853',
    SuperiorVoucher: '861',
    Bait: '877',
    LanternRiteMaterial: '892',
    WeaponEnhancementMaterial: '898',
    Food: '913',
    WeaponAscensionMaterial: '924',
    ForgingBlueprint: '948',
    CityStatesSigil: '957',
    CommonVoucher: '974',
    DragonspineMaterial: '980',
    LocalSpecialtyLiyue: '994',
    FishingRod: '1013',
    QuestItem: '1038',
    Gadget: '1043',
    LimitedWishingItem: '1054',
    CraftingBlueprint: '1073',
    CookingIngredient: '1085',
    RefinementMaterial: '1093',
    CharacterEXPMaterial: '1106',
    LocalSpecialtyInazuma: '1141',
    CommonCurrency: '1153',
    ArtifactEnhancementMaterial: '1174',
    FurnishingBlueprint: '1195',
    SpecialCurrency: '1203',
    ForgingOre: '1222',
    TalentLevelUpMaterial: '1223',
    CharacterLevelUpMaterial: '1246',
    LocalSpecialtyMondstadt: '1263',
    AdventureItem: '1285',
    Recipe: '1297'
  }

  public static async setFilterIds (): Promise<void> {
    const response = await axiosInstance.get('/get_menu_filters', {
      params: {
        menu_id: EntryPageMenu.Material
      }
    })

    const filters: MenuFiltersAPIInterface.Filter[] = response.data.data.filters

    this.Type = {
      Material: filters[0]?.values[0]?.id ?? '824',
      Consumable: filters[0]?.values[1]?.id ?? '841',
      Potion: filters[0]?.values[2]?.id ?? '853',
      SuperiorVoucher: filters[0]?.values[3]?.id ?? '861',
      Bait: filters[0]?.values[4]?.id ?? '877',
      LanternRiteMaterial: filters[0]?.values[5]?.id ?? '892',
      WeaponEnhancementMaterial: filters[0]?.values[6]?.id ?? '898',
      Food: filters[0]?.values[7]?.id ?? '913',
      WeaponAscensionMaterial: filters[0]?.values[8]?.id ?? '924',
      ForgingBlueprint: filters[0]?.values[9]?.id ?? '948',
      CityStatesSigil: filters[0]?.values[10]?.id ?? '957',
      CommonVoucher: filters[0]?.values[11]?.id ?? '974',
      DragonspineMaterial: filters[0]?.values[12]?.id ?? '980',
      LocalSpecialtyLiyue: filters[0]?.values[13]?.id ?? '994',
      FishingRod: filters[0]?.values[14]?.id ?? '1013',
      QuestItem: filters[0]?.values[15]?.id ?? '1038',
      Gadget: filters[0]?.values[16]?.id ?? '1043',
      LimitedWishingItem: filters[0]?.values[17]?.id ?? '1054',
      CraftingBlueprint: filters[0]?.values[18]?.id ?? '1073',
      CookingIngredient: filters[0]?.values[19]?.id ?? '1085',
      RefinementMaterial: filters[0]?.values[20]?.id ?? '1093',
      CharacterEXPMaterial: filters[0]?.values[21]?.id ?? '1106',
      LocalSpecialtyInazuma: filters[0]?.values[22]?.id ?? '1141',
      CommonCurrency: filters[0]?.values[23]?.id ?? '1153',
      ArtifactEnhancementMaterial: filters[0]?.values[24]?.id ?? '1174',
      FurnishingBlueprint: filters[0]?.values[25]?.id ?? '1195',
      SpecialCurrency: filters[0]?.values[26]?.id ?? '1203',
      ForgingOre: filters[0]?.values[27]?.id ?? '1222',
      TalentLevelUpMaterial: filters[0]?.values[28]?.id ?? '1223',
      CharacterLevelUpMaterial: filters[0]?.values[29]?.id ?? '1246',
      LocalSpecialtyMondstadt: filters[0]?.values[30]?.id ?? '1263',
      AdventureItem: filters[0]?.values[31]?.id ?? '1285',
      Recipe: filters[0]?.values[32]?.id ?? '1297'
    }
  }
}
