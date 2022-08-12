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

/* eslint-disable no-unused-vars */

export const enum DefaultApiOptions {
  API = 'https://sg-wiki-api.hoyolab.com/hoyowiki/wapi',
  UserAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.63 Safari/537.36'
}

export const enum EntryPageMenu {
  Character = '2',
  Weapon = '4',
  Artifact = '5',
  Enemy = '7',
  Material = '9',
  Npc = '10',
  Book = '12',
  Tutorial = '14',
  Animal = '15'
}

export const enum Language {
  ChineseCN = 'zh-cn',
  ChineseTW = 'zh-tw',
  German = 'de-de',
  EnglishUS = 'en-us',
  SpanishES = 'es-es',
  French = 'fr-fr',
  Indonesia = 'id-id',
  Japanese = 'ja-jp',
  Korean = 'ko-kr',
  Portuguese = 'pt-pt',
  Russian = 'ru-ru',
  Thai = 'th-th',
  Vietnamese = 'vi-vn'
}
