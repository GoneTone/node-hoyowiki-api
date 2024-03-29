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

export interface Component {
  component_id: string;
  layout: string;
  data: string;
  style: string;
}

export interface Module {
  name: string;
  is_poped: boolean;
  components: Component[];
  id: string;
}

export interface WeaponType {
  values: string[];
}

export interface WeaponRarity {
  values: string[];
}

export interface WeaponProperty {
  values: string[];
}

export interface FilterValues {
  weapon_type: WeaponType;
  weapon_rarity: WeaponRarity;
  weapon_property: WeaponProperty;
}

export interface Page {
  id: string;
  name: string;
  desc: string;
  icon_url: string;
  header_img_url: string;
  modules: Module[];
  filter_values: FilterValues;
  menu_id: string;
  menu_name: string;
  version: string;
  langs: string[];
}

export interface Data {
  page: Page;
}
