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

import axios from 'axios'
import { DefaultApiOptions, Language } from './constants'
import { CharacterFilters } from '../filters/CharacterFilters'
import { WeaponFilters } from '../filters/WeaponFilters'
import { ArtifactFilters } from '../filters/ArtifactFilters'
import { EnemyFilters } from '../filters/EnemyFilters'
import { MaterialFilters } from '../filters/MaterialFilters'
import { NpcFilters } from '../filters/NpcFilters'
import { AnimalFilters } from '../filters/AnimalFilters'
import { TutorialFilters } from '../filters/TutorialFilters'

export const axiosInstance = axios.create({
  baseURL: DefaultApiOptions.API,
  headers: {
    'User-Agent': DefaultApiOptions.UserAgent
  }
})
axiosInstance.defaults.headers.common['x-rpc-language'] = Language.EnglishUS

/**
 * Set Language.
 *
 * @param {Language} language Language Code
 */
export async function setLanguage (language: Language): Promise<void> {
  axiosInstance.defaults.headers.common['x-rpc-language'] = language

  await CharacterFilters.setFilterIds()
  await WeaponFilters.setFilterIds()
  await ArtifactFilters.setFilterIds()
  await EnemyFilters.setFilterIds()
  await MaterialFilters.setFilterIds()
  await NpcFilters.setFilterIds()
  await AnimalFilters.setFilterIds()
  await TutorialFilters.setFilterIds()
}

/**
 * Get Set Language.
 */
export function getSetLanguage (): string {
  return axiosInstance.defaults.headers.common['x-rpc-language'] as string
}
