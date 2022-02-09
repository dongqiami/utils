/**
 * 获取数据类型标签
 * @param {*} value
 * @return {string}
 */
export const getStringTag = value => {
  if (value === null) {
    return 'Null'
  }
  if (value === undefined) {
    return 'Undefined'
  }
  return Object.prototype.toString.call(value).slice(8, -1)
}

/**
 * 判断对象是否具有某个字段
 * @param {Object} object
 * @param {string} key
 * @return {boolean}
 */
export const hasKey = (object, key) => {
  return Object.prototype.hasOwnProperty.call(object, key)
}

/**
 * 生成[min, max]范围内的随机整数
 * @param min - 最小值(包含)
 * @param max - 最大值(包含)
 * @return {number}
 */
export const random = (min, max) => {
  return Math.round(Math.random() * (max - min) + min)
}

/**
 * 判断是否为数字
 * @param {*} value
 * @return {boolean}
 */
export const isNumber = value => {
  return typeof value === 'number'
}

/**
 * 判断是否为字符串
 * @param {*} value
 * @return {boolean}
 */
export const isString = value => {
  return typeof value === 'string'
}

/**
 * 判断是否为布尔值
 * @param {*} value
 * @return {boolean}
 */
export const isBoolean = value => {
  return typeof value === 'boolean'
}

/**
 * 判断是否为函数
 * @param {*} value
 * @return {boolean}
 */
export const isFunction = value => {
  return typeof value === 'function'
}

/**
 * 判断是否为数组
 * @param {*} value
 * @return {boolean}
 */
export const isArray = value => {
  if (typeof Array.isArray === 'function') {
    return Array.isArray(value)
  }
  return getStringTag(value) === 'Array'
}

/**
 * 判断是否为对象
 * @param {*} value
 * @return {boolean}
 */
export const isObject = value => {
  return getStringTag(value) === 'Object'
}

/**
 * 判断是否为日期对象
 * @param {*} value
 * @return {boolean}
 */
export const isDate = value => {
  return getStringTag(value) === 'Date'
}

/**
 * 判断是否为正则
 * @param {*} value
 * @return {boolean}
 */
export const isRegExp = value => {
  return getStringTag(value) === 'RegExp'
}

/**
 * 判断是否为NaN
 * @param {*} value
 * @return {boolean}
 */
export const isNaN = value => {
  if (typeof Number.isNaN === 'function') {
    return Number.isNaN(value)
  }
  // eslint-disable-next-line no-self-compare
  return typeof value === 'number' && value !== value
}

/**
 * 判断是否为原始类型数据
 * @param {*} value
 * @return {boolean}
 */
export const isPrimitive = value => {
  const primitives = [
    'Number',
    'String',
    'Boolean',
    'Null',
    'Undefined',
    'Symbol',
    'BigInt'
  ]
  return primitives.indexOf(getStringTag(value)) !== -1
}

/**
 * 判断是否为以下空值: null undefined NaN 和任意长度空字符串
 * @param {*} value
 * @return {boolean}
 */
export const isEmptyValue = value => {
  if (value === null || value === undefined || isNaN(value)) {
    return true
  }
  if (typeof value === 'string') {
    return value.trim().length === 0
  }
  return false
}

/**
 * 判断是否为空对象: {}
 * @param {*} value
 * @return {boolean}
 */
export const isEmptyObject = value => {
  return isObject(value) && !Object.keys(value).length
}

/**
 * 判断两个数是否数学上相等
 * @param {number} a
 * @param {number} b
 * @param {number} [e]  - 误差控制，默认为Number.EPSILON
 * @return {boolean}
 */
export const isMathEqual = (a, b, e) => {
  const EPSILON = parseFloat(e) || Number.EPSILON || Math.pow(2, -52)
  return Math.abs(a - b) < EPSILON
}

/**
 * 数组去重
 * @param {Array} array
 * @return {Array}
 */
export const unique = array => {
  if (!Array.isArray(array)) {
    return []
  }
  const result = []
  for (let i = 0; i < array.length; i++) {
    const current = array[i]
    result.indexOf(current) === -1 && result.push(current)
  }
  return result
}

/**
 * 深拷贝
 * @param {*} value
 * @param {boolean} deep - 是否深拷贝
 * @return {String|Number|Boolean|Symbol|BigInt|Object|Array|Date|RegExp|null|undefined}
 *
 */
export const deepClone = value => {
  if (isPrimitive(value)) {
    return value
  }
  const tag = getStringTag(value)
  if (tag === 'Date') {
    return new Date(value)
  }
  if (tag === 'RegExp') {
    const flags = /\w*$/.exec(value)[0]
    const reg = new RegExp(value.source, flags)
    reg.lastIndex = value.lastIndex
    return reg
  }
  if (tag === 'Function') {
    return function () {
      return value.apply(this, arguments)
    }
  }
  if (tag === 'Object' || tag === 'Array') {
    const result = tag === 'Object' ? {} : []
    for (const key in value) {
      if (hasKey(value, key)) {
        result[key] = deepClone(value[key])
      }
    }
    return result
  }
  return null
}

/**
 * json数据转为url参数字符串格式
 * @param {Object} json
 * @return {string}
 */
export const json2qs = json => {
  if (!isObject(json)) {
    return ''
  }
  return Object.keys(json).reduce((acc, key) => {
    if (typeof key === 'string' && key.trim().length) {
      const value = isEmptyValue(json[key]) ? '' : encodeURIComponent(json[key])
      acc.push([key, value].join('='))
    }
    return acc
  }, []).join('&')
}

/**
 * 解析url参数为json对象
 * @param {Object} url
 * @return {Object}
 */
export const getUrlQuery = url => {
  if (!isString(url)) {
    return {}
  }
  const reg = /[?&]([^=&#]+)(?:=([^&#]*))?/ig
  const result = {}
  let match = reg.exec(url)
  while (match) {
    if (match[1]) {
      result[match[1]] = match[2] ? decodeURIComponent(match[2]) : ''
    }
    match = reg.exec(url)
  }
  return result
}

/**
 * 拓展/合并URL中的参数
 * @param {string} url   - url
 * @param {Object} query - 需要添加的参数
 * @return {string} - 合并后的url
 */
export const mergeUrlParams = (url, query) => {
  if (typeof url !== 'string') {
    throw Error(`arguments[0] must be a string, got ${getStringTag(url)}.`)
  }
  const isHashRouter = url.indexOf('/#/') >= 0
  const oldQuery = getUrlQuery(url)
  const newQuery = Object.assign(oldQuery, isObject(query) ? query : {})
  const qs = json2qs(newQuery)
  const qIndex = url.indexOf('?')
  const hIndex = url.indexOf('#')
  let baseUrl = qIndex < 0 ? url : url.slice(0, qIndex)
  if (isHashRouter) {
    return baseUrl ? baseUrl + (qs ? '?' + qs : '') : ''
  }
  if (qIndex < 0) {
    baseUrl = hIndex < 0 ? url : url.slice(0, hIndex)
  }
  const hash = hIndex < 0 ? '' : url.slice(hIndex)
  return baseUrl ? baseUrl + (qs ? '?' + qs : '') + hash : ''
}

/**
 * 连字符格式字符串
 * @param {string} str
 * @param {string = '-'} [separator]
 * @return {string}
 */
export const kebabCase = (str, separator = '-') => {
  return str.replace(/[A-Z]/g, (letter, offset) => {
    return (offset ? separator : '') + letter.toLowerCase()
  })
}

/**
 * 连字符转驼峰
 * @param {string} str
 * @param {string = '-'} [separator]
 * @return {string}
 */
export const camelCase = (str, separator = '-') => {
  const reg = new RegExp(`\\${separator}([a-z])`, 'ig')
  return str.replace(reg, (word, letter) => {
    return letter.toUpperCase()
  })
}

/**
 * 连字符转帕斯卡
 * @param {string} str
 * @param {string = '-'} [separator]
 * @return {string}
 */
export const pascalCase = (str, separator = '-') => {
  return camelCase(str, separator).replace(/^[a-z]/, letter => {
    return letter.toUpperCase()
  })
}

/**
 * 时间日期格式化
 * @param {Date|string} date
 * @param {string = 'YYYY-MM-DD hh:mm:ss'} [format]
 * @return {string}
 */
export const dateFormatter = (date, format = 'YYYY-MM-DD hh:mm:ss') => {
  if (typeof date === 'string') {
    date = /^\d+$/.test(date) ? Number(date) : date.replace(/-/g, '/')
  }
  const dt = new Date(date)
  if (!dt.getTime()) {
    return '--'
  }
  const fill = (str, num = 2) => str.toString().padStart(num, '0')
  const days = ['日', '一', '二', '三', '四', '五', '六']
  const map = {
    YYYY: dt.getFullYear(),
    MM: fill(dt.getMonth() + 1),
    DD: fill(dt.getDate()),
    hh: fill(dt.getHours()),
    mm: fill(dt.getMinutes()),
    ss: fill(dt.getSeconds()),
    ms: fill(dt.getMilliseconds(), 3),
    day: dt.getDay(),
    ts: dt.getTime()
  }
  return Object.keys(map).reduce((acc, key) => {
    const reg = new RegExp(key, 'g')
    return acc.replace(reg, () => {
      return key === 'day' ? days[map[key]] : map[key]
    })
  }, format)
}

/**
 * 将arrayBuffer转为base64字符串
 * @param {ArrayBuffer} buffer
 * @return {string}
 */
export function arrayBufferToBase64(buffer) {
  let binary = ''
  const bytes = new Uint8Array(buffer)
  const len = bytes.byteLength
  for (let i = 0; i < len; i += 1) {
    binary += String.fromCharCode(bytes[i])
  }
  return btoa(binary)
}

/**
 * 字段适配器
 * @param {Object} data   - 需要进行转换的数据
 * @param {Object} table  - 字段映射表
 * @param {Array} filter  - 筛选需要的字段
 * @return {Object}
 */
export const mapAdapter = (data, table, filter) => {
  let acceptKeys = isArray(filter) ? filter : null
  if (isFunction(filter)) {
    const result = filter(data, table)
    acceptKeys = isArray(result) ? result : acceptKeys
  }
  return Object.keys(data).reduce((acc, key) => {
    const targetKey = table[key] || key
    if (!isArray(acceptKeys)) {
      acc[targetKey] = data[key]
      return acc
    }
    if (acceptKeys.indexOf(targetKey) !== -1) {
      acc[targetKey] = data[key]
    }
    return acc
  }, {})
}

/**
 * 生成一个32位唯一id字符串
 * @return {string}
 */
export const uuid = (() => {
  const max = 999999
  let count = 0
  const random = (min, max) => {
    return Math.round(Math.random() * (max - min) + min)
  }
  const ls = (s, l, p = '0') => {
    const n = Math.abs(l)
    const m = s.toString()
    const e = m.length
    if (e > n) {
      return l < 0 ? m.slice(l) : m.slice(0, n)
    }
    return l < 0 ? m.padEnd(n, p) : m.padStart(n, p)
  }
  const hex = n => parseInt(n, 10).toString(16)
  const h2 = () => ls(hex(random(0, 255)), 2, '0')
  return () => {
    const t = 'T'
    const a = [h2(), h2()]
    const i = random(65, 90)
    const u = String.fromCharCode(i)
    const l = String.fromCharCode(random(97, 122))
    const q = (i % 2 === 0 ? [u, a[0], l, a[1]] : [l, a[0], u, a[1]]).join('')
    const d = ls(hex(Date.now()), -11)
    const r = ls(hex(ls(Math.random(), -4)), 4)
    const x = h2()
    const y = h2()
    const c = ls(hex(count++ > max ? 1 : count), max.toString().length)
    return [t, q, d, x, r, y, c].join('')
  }
})()

/**
 * 创建一个带计数器的uuid生成器
 * @param {number} maxCount - 计数器最大值
 * @return {function(*=): string}
 */
export const createUuidFn = (maxCount = 10000) => {
  let count = 0
  return function (prefix = '') {
    const now = Date.now()
    const random = Math.random().toString().slice(-4)
    count = ++count > maxCount ? 1 : count
    return prefix + now + random + count
  }
}

/**
 * 把字节转为带单位的字符串
 * @param bytes
 * @param [base=1024]
 * @param [errorValue=--]
 * @return {string}
 * @example bytesToSize(1024) => 1KB
 */
export const bytesToSize = (bytes, base = 1024, errorValue = '--') => {
  if (bytes < 0) {
    return errorValue
  }
  const units = [
    'B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB', 'BB', 'NB', 'DB'
  ]
  const index = Math.floor(Math.log(bytes) / Math.log(base))
  let size = bytes / Math.pow(base, index)
  if (!Number.isNaN(index)) {
    size = index < 2 ? Math.ceil(size) : size.toFixed(2)
  }
  return index < units.length ? size + units[index] : errorValue
}

/**
 * 把带单位的文件大小转为字节数
 * @param size
 * @param [base=1024]
 * @param [errorValue=0]
 * @return {string|number}
 * @example sizeToBytes('1KB') => 1024
 */
export const sizeToBytes = (size, base = 1024, errorValue = 0) => {
  const pattern = /^\s*\+?((?:\.\d+)|(?:\d+(?:\.\d+)?))\s*([a-z]*)\s*$/i
  const p = pattern.exec(size)
  if (!p) {
    return errorValue
  }
  const units = ['B', 'K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y', 'B', 'N', 'D']
  const value = parseFloat(p[1])
  const unit = p[2]
  let index = -1
  for (let i = 0; i < units.length; i++) {
    const str = '^' + units[i] + (i === 0 ? '(?:yte)' : 'b') + '?$'
    const reg = new RegExp(str, 'i')
    if (reg.test(unit)) {
      index = i
      break
    }
  }
  if (Number.isNaN(value) || value < 0 || index < 0) {
    return errorValue
  }
  if (index >= units.length) {
    return 'oversize'
  }
  return Math.ceil(value * Math.pow(base, index))
}

/**
 * 获取小程序场景值参数
 * scene字符串格式: value1,value2,value3@utm_source,utm_medium,utm_campaign,utm_content,utm_term
 * @param {string} scene                  - 页面场景值
 * @param {string|Array<string>} [fields] - value对应的key列表
 * @return {Object}
 * @example
 * options.scene = '214,Tesla,18@wechat
 * getMpSceneParams(options.scene, 'id,name,age')
 * {id: 214, name: "Tesla", age: 18, utm_source: "wechat"}
 */
export const getMpSceneParams = (scene, fields) => {
  let keyList = isArray(fields) ? fields : []
  if (typeof fields === 'string') {
    keyList = fields.split(',').filter(Boolean)
  }
  const getList = str => {
    return (str || '').split(',').map(item => item || '')
  }
  const getData = (keys, data, both) => {
    return keys.filter(Boolean).reduce((acc, key, index) => {
      if (!both) {
        acc[key] = data[index]
        return acc
      }
      if (key && data[index]) {
        acc[key] = data[index]
      }
      return acc
    }, {})
  }
  const source = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_content',
    'utm_term'
  ]
  const p = decodeURIComponent(scene).split('@')
  const p1 = getData(keyList, getList(p[0]), false)
  const p2 = getData(source, getList(p[1]), true)
  return Object.assign({}, p1, p2)
}

// 调用接口返回统一处理
export const actionResSuccess = (res) => {
  if (res.code !== 1) {
    this.$showToast(res.msgZ)
    return false
  }
  return res
}
// 调用接口返回catch里面统一处理
export const actionResFail = (e) => {
  // this.$showToast(e)
  console.log('捕获接口的报错', e)
  return false
}
/** 使用条件编译获取平台信息 */
export const ifDefPlatform = (e) => {
  let platform
  // #ifdef APP-PLUS
  platform = 'APP-PLUS'
  // #endif

  // #ifdef APP-PLUS-NVUE
  platform = 'APP-PLUS-NVUE'
  // #endif

  // #ifdef H5
  platform = 'H5'
  // #endif

  // #ifdef MP-WEIXIN
  platform = 'MP-WEIXIN'
  // #endif

  // #ifdef MP-ALIPAY
  platform = 'MP-ALIPAY'
  // #endif

  // #ifdef MP-BAIDU
  platform = 'MP-BAIDU'
  // #endif

  // #ifdef MP-TOUTIAO
  platform = 'MP-TOUTIAO'
  // #endif

  // #ifdef MP-QQ
  platform = 'MP-QQ'
  // #endif

  // #ifdef MP-360
  platform = 'MP-360'
  // #endif

  // #ifdef quickapp-webview
  platform = 'quickapp-webview'
  // #endif

  // #ifdef quickapp-webview-union
  platform = 'quickapp-webview-union'
  // #endif

  // #ifdef quickapp-webview-huawei
  platform = 'quickapp-webview-huawei'
  // #endif
  return platform
}