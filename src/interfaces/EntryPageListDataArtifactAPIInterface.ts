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

export interface DisplayField {
  goblet_of_eonothem_icon_url: string;
  flower_of_life_icon_url: string;
  four_set_effect: string;
  two_set_effect: string;
  single_set_effect: string;
  circlet_of_logos_icon_url: string;
  sands_of_eon_icon_url: string;
  plume_of_death_icon_url: string;
}

export interface ReliquaryEffect {
  values: string[];
}

export interface FilterValues {
  reliquary_effect: ReliquaryEffect;
}

export interface List {
  entry_page_id: string;
  name: string;
  icon_url: string;
  display_field: DisplayField;
  filter_values: FilterValues;
}

export interface Data {
  list: List[];
  total: string;
}
