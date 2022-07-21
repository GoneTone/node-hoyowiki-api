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

export * from './entryPageList/Character'
export * from './entryPageList/Weapon'
export * from './entryPageList/Artifact'
export * from './entryPageList/Enemy'
export * from './entryPageList/Material'

export * from './entryPage/Entry'

export * from './search/Search'

export * from './filters/CharacterFilters'
export * from './filters/WeaponFilters'
export * from './filters/ArtifactFilters'
export * from './filters/MaterialFilters'

export * from './utils/api'
export * from './utils/constants'

export * from './interfaces/EntryPageListDataInterface'
export * as EntryPageListDataCharacterAPIInterface from './interfaces/EntryPageListDataCharacterAPIInterface'
export * as EntryPageListDataWeaponAPIInterface from './interfaces/EntryPageListDataWeaponAPIInterface'
export * as EntryPageListDataArtifactAPIInterface from './interfaces/EntryPageListDataArtifactAPIInterface'
export * as EntryPageListDataEnemyAPIInterface from './interfaces/EntryPageListDataEnemyAPIInterface'
export * as EntryPageListDataMaterialAPIInterface from './interfaces/EntryPageListDataMaterialAPIInterface'
export * as EntryPageDataCharacterAPIInterface from './interfaces/EntryPageDataCharacterAPIInterface'
export * as EntryPageDataWeaponAPIInterface from './interfaces/EntryPageDataWeaponAPIInterface'
export * as EntryPageDataArtifactAPIInterface from './interfaces/EntryPageDataArtifactAPIInterface'
export * as EntryPageDataEnemyAPIInterface from './interfaces/EntryPageDataEnemyAPIInterface'
export * as EntryPageDataMaterialAPIInterface from './interfaces/EntryPageDataMaterialAPIInterface'
export * as MenuFiltersAPIInterface from './interfaces/MenuFiltersAPIInterface'
export * as SearchAPIInterface from './interfaces/SearchAPIInterface'

export * from './errors/HoYoWikiAPIError'
