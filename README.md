### getStringTag()
获取变量类型
- 语法：**getStringTag(value: any): string**
- 返回值：**string**
- 示例：
```javascript
import { getStringTag } from '@/utils'
const tag1 = getStringTag('javascript') // String
const tag2 = getStringTag(15) // Number
const tag3 = getStringTag([]) // Array
```
---
### hasKey()
判断某个对象是否具有指定的属性名称
- 语法：**hasKey(object, key)**
- 参数：
  - **object\<Object\>:** 对象
  - **key\<string\>:** 需要检测的key
- 返回值：**boolean**
- 示例：
```javascript
import { hasKey } from '@/utils'
const obj = { name: 'javascript', id: 15 }
const hasId = hasKey(obj, 'id')   // true
const hasAge = hasKey(obj, 'age') // false
```
---
### random()
生成范围内的随机整数，包括边界值
- 语法：**random(min, max)**
- 参数：
  - **min\<number\>:** 最小值
  - **max\<number\>:** 最大值
- 返回值：**number**
- 示例：
```javascript
import { random } from '@/utils'
const n = random(10, 20)  // 10 <= n <= 20
```
---
### isNumber()
判断是否为数字
- 语法：**isNumber(value)**
- 参数：**value\<any\>:** 变量名称
- 返回值：**boolean**
- 示例：
```javascript
import { isNumber } from '@/utils'
isNumber(15)    // true
isNumber('15')  // false
```
---
### isString()
判断是否为字符串
- 语法：**isString(value)**
- 参数：**value\<any\>:** 变量名称
- 返回值：**boolean**
- 示例：
```javascript
import { isString } from '@/utils'
isString(15)    // false
isString('15')  // true
```
---
### isBoolean()
判断是否为布尔值
- 语法：**isBoolean(value)**
- 参数：**value\<any\>:** 变量名称
- 返回值：**boolean**
- 示例：
```javascript
import { isBoolean } from '@/utils'
isBoolean(15)     // false
isBoolean('15')   // false
isBoolean(true)   // true
isBoolean(false)  // true
```
---
### isFunction()
判断是否为函数
- 语法：**isFunction(value)**
- 参数：**value\<any\>:** 变量名称
- 返回值：**boolean**
- 示例：
```javascript
import { isFunction } from '@/utils'
isFunction(15)             // false
isFunction('15')           // false
isFunction(() => {})       // true
isFunction(function() {})  // true
```
---
### isArray()
判断是否为数组
- 语法：**isArray(value)**
- 参数：**value\<any\>:** 变量名称
- 返回值：**boolean**
- 示例：
```javascript
import { isArray } from '@/utils'
isArray({})  // false
isArray([])  // true
```
---
### isObject()
判断是否为对象
- 语法：**isObject(value)**
- 参数：**value\<any\>:** 变量名称
- 返回值：**boolean**
- 示例：
```javascript
import { isObject } from '@/utils'
isObject({})  // true
isObject([])  // false
```
---
### isDate()
判断是否为日期对象
- 语法：**isDate(value)**
- 参数：**value\<any\>:** 变量名称
- 返回值：**boolean**
- 示例：
```javascript
import { isDate } from '@/utils'
isDate(new Date())  // true
isDate([])          // false
```
---
### isRegExp()
判断是否为正则对象
- 语法：**isRegExp(value)**
- 参数：**value\<any\>:** 变量名称
- 返回值：**boolean**
- 示例：
```javascript
import { isRegExp } from '@/utils'
isRegExp(/\.js$/)               // true
isRegExp(new RegExp('\\.js$'))  // true
isRegExp(15)                    // false
```
---
### isNaN()
判断是否为NaN
- 语法：**isNaN(value)**
- 参数：**value\<any\>:** 变量名称
- 返回值：**boolean**
- 示例：
```javascript
import { isNaN } from '@/utils'
isNaN(NaN)                    // true
isNaN(parseInt('javascript', 15))  // true
isNaN(15)                     // false
```
---
### isPrimitive()
判断是否为基本数据类型:   
**Number、String、Boolean、Null、Undefined、Symbol、BigInt**
- 语法：**isPrimitive(value)**
- 参数：**value\<any\>:** 变量名称
- 返回值：**boolean**
- 示例：
```javascript
import { isPrimitive } from '@/utils'
isPrimitive(1)              // true
isPrimitive('1')            // true
isPrimitive(false)          // true
isPrimitive(null)           // true
isPrimitive(undefined)      // true
isPrimitive(Symbol('214'))  // true
isPrimitive(214n)           // true
isPrimitive({})             // false
isPrimitive([])             // false
```
---
### isEmptyValue()
判断是否为以下空值: null, undefined, NaN 及任意长度空字符串
- 语法：**isEmptyValue(value)**
-参数：**value\<any\>:** 变量名称
- 返回值：**boolean**
- 示例：
```javascript
import { isEmptyValue } from '@/utils'
isEmptyValue(null)       // true
isEmptyValue(undefined)  // true
isEmptyValue(NaN)        // true
isEmptyValue('')         // true
isEmptyValue('   ')      // true
isEmptyValue(false)      // false
isEmptyValue(true)       // false
isEmptyValue(0)          // false
isEmptyValue({})         // false
isEmptyValue([])         // false
```
---- 
### isEmptyObject()
判断是否为空对象
- 语法：**isEmptyObject(value)**
- 参数：**value\<any\>:** 变量名称
- 返回值：**boolean**
- 示例：
```javascript
import { isEmptyObject } from '@/utils'
isEmptyObject({})           // true
isEmptyObject({ id: 214 })  // false
```
---
### isMathEqual()
判断两个数是否数学上相等
- 语法：**isMathEqual(a, b\[, e\])**
- 参数：
  - **a\<number\>:** 数字
  - **b\<number\>:** 数字
  - **e\<number\>:** 可选值，误差精度控制，默认值: Number.EPSILON
- 返回值：**boolean**
- 示例：
```javascript
import { isMathEqual } from '@/utils'
0.1 + 0.2 === 0.3            // false
isMathEqual(0.1 + 0.2, 0.3)  // true
```
---- 
### deepClone()
深拷贝，无法拷贝函数
- 定义：
```typescript
function deepClone<T>(value: T): T {}
```
- 语法：**deepClone(value)**
- 参数：**value\<any\>:** 需要拷贝的对象
- 返回值：**any**
- 示例：
```javascript
import { deepClone } from '@/utils'
const a = { id: 15 }
const b = a
const c = deepClone(a)
console.log(a === b)  // true 
console.log(a === c)  // false 
```
---
### json2qs()
将json数据转换成url查询字符串
- 语法：**json2qs(json)**
- 参数：**json\<object\>:** json对象
- 返回值：**string**
- 示例：
```javascript
import { json2qs } from '@/utils'
const json = {
  id: 15,
  name: 'javascript'
}
const qs = json2qs(json)
console.log(qs)  // id=214&name=tesla
```
---
### getUrlQuery()
获取url中的查询参数：对象
- 语法：**getUrlQuery(url)**
- 参数：**url\<string\>:** url
- 返回值：**object**
- 示例：
```javascript
import { getUrlQuery } from '@/utils'
const url = 'https://www.baidu.com/s?id=15&name=javascript'
const query = getUrlQuery(url)
console.log(query)  // { id: 15, name: javascript }
```
---
### mergeUrlParams()
拓展/合并url中的查询参数：
- 语法：**mergeUrlParams(url, query)**
- 参数：
  - **url\<string\>:** url
  - **query\<object\>:** 需要拓展的参数：
- 返回值：**string**
- 示例：
```javascript
import { mergeUrlParams } from '@/utils'
const originUrl = 'https://www.baidu.com?id=15&name=js'
const query = { name: 'ts', age: 18, index: 1 }
const newUrl = mergeUrlParams(originUrl, query)
console.log(newUrl)
// https://www.baidu.com?id=15&name=ts&age=18&index=1
```
---
### kebabCase()
> pascalCase: MyNameIsNikolaTesla  
> camelCase: myNameIsNikolaTesla  
> kebabCase: my-name-is-nikola-tesla

把 camelCase 或 pascalCase 转为 kebabCase
- 语法：**kebabCase(str\[, separator\])**
- 参数：
  - **str\<string\>:** 需要转换的字符串
  - **separator\<string\>:** 可选值，连接符，默认值: -
- 返回值：**string**
- 示例：
```javascript
import { kebabCase } from '@/utils'
kebabCase('nikolaTesla')       // nikola-tesla
kebabCase('NikolaTesla')       // nikola-tesla
kebabCase('nikolaTesla', '_')  // nikola_tesla
kebabCase('NikolaTesla', '_')  // nikola_tesla
```
---
### camelCase()
把 kebabCase 转为 camelCase
- 语法：**camelCase(str\[, separator\])**
- 参数：
  - **str\<string\>:** 需要转换的字符串
  - **separator\<string\>:** 可选值，连接符，默认值: -
- 返回值：**string**
- 示例：
```javascript
import { camelCase } from '@/utils'
camelCase('nikola-Tesla')       // nikolaTesla
camelCase('nikola_Tesla', '_')  // nikolaTesla
```
---
### pascalCase()
把 kebabCase 转为 pascalCase
- 语法：**pascalCase(str\[, separator\])**
- 参数：
  - **str\<string\>:** 需要转换的字符串
  - **separator\<string\>:** 可选值，连接符，默认值: -
- 返回值：**string**
- 示例：
```javascript
import { pascalCase } from '@/utils'
pascalCase('nikola-Tesla')       // NikolaTesla
pascalCase('nikola_Tesla', '_')  // NikolaTesla
```
---- 
### dateFormatter()
日期格式化
- 语法：**dateFormatter(\[date, format\])**
- 参数
  - **date\<number\<timestamp\>|string|Date\>:** 可选值，时间戳、格式化后的日期、日期对象，默认当前时间
  - **format\<string\>:** 可选值，格式化字符串，默认值: YYYY-MM-DD hh:mm:ss
- 返回值：**string**
#### 格式化字符串
| format | remarks |
| :---: | :--- |
| YYYY | 四位数年 |
| MM | 两位数月 |
| DD | 两位数日 |
| hh | 两位数时 |
| mm | 两位数分 |
| ss | 两位数秒 |
| ms | 三位数毫秒 |
| day | 星期几 |
| ts | 时间戳(毫秒) |
- 示例：
```javascript
import { dateFormatter } from '@/utils'
dateFormatter()                         // 2020-11-21 23:43:30
dateFormatter(1605973446801)            // 2020-11-21 23:44:06
dateFormatter('1605973446801')          // 2020-11-21 23:44:06
dateFormatter('2020-11-21 23:44:06')    // 2020-11-21 23:44:06
dateFormatter(new Date(1605973446801))  // 2020-11-21 23:44:06
dateFormatter('2020-11-21 23:44:06', 'YYYY年MM月DD日 hh时mm分ss秒 星期day')
// 2020年11月21日 23时44分06秒 星期六
```
---
### mapAdapter()
对象字段适配器
- 语法：**mapAdapter(data, table\[, filter\])**
- 参数：
  - **data\<object\>:** 需要转换字段的对象
  - **table\<object\>:** 字段映射表
  - **filter\<Array|function\>:** 可选值，字段过滤器
>过滤器函数定义: function filter(dataKey: string, dataValue: any): boolean  
>返回false表示去除该字段
- 返回值：**object**
- 示例：
```javascript
import { mapAdapter } from '@/utils'
const data = {
  goodsId: 214,
  goodsName: 'js',
  goodsPrice: 8848
}
const table = {
  goodsId: 'gid',
  goodsName: 'gname',
  goodsPrice: 'gprice',
}
mapAdapter(data, table)
// { gid: 214, gname: 'js', gprice: 8848 }
mapAdapter(data, table, ['gid'])
// { gid: 214 }
mapAdapter(data, table, (key, value) => {
  return typeof value === 'number'
})
// { gid: 214, gprice: 8848 }
```
---
### uuid()
生成一个32位唯一id字符串
- 语法：**uuid()**
- 参数：无
- 返回值：**string**
- 示例：
```javascript
import { uuid } from '@/utils'
uuid()  // Tia7M8e175ebaadf1c9622f2c5000001
uuid()  // TBfdh15175ebaadf1e3918013a000002
uuid()  // TLd6h57175ebaadf1eca1466e4000003
```
---
### bytesToSize()
把字节转为带单位的字符串
- 语法：**bytesToSize(bytes\[, base = 1024, errorValue = '--'\])**
- 参数
  - **bytes\<number\>:** 文件字节数
  - **base\<number\>:** 可选，基数 1000 或 1024, 默认值: 1024
  - **errorValue\<any\>:** 可选，转换出错时返回值, 默认值: --
- 返回值：**string**
- 示例：
```javascript
import { bytesToSize } from '@/utils'
bytesToSize(123456)     // 121KB
bytesToSize(123456789)  // 117.74MB
```
---
### sizeToBytes()
把带单位的文件大小转为字节数，和 bytesToSize 互为反向操作
- 语法：**sizeToBytes(size\[, base = 1024, errorValue = 0\])**
- 参数
  - **size\<string\>:** 文件大小
  - **base\<number\>:** 可选，基数 1000 或 1024, 默认值: 1024
  - **errorValue\<any\>:** 可选，转换出错时返回值, 默认值: 0
- 返回值：**number**
- 示例：
```javascript
import { sizeToBytes } from '@/utils'
// 单位大小写不敏感，允许数字和单位之间有空格
sizeToBytes('214.38k')    // 219526
sizeToBytes('214.38 kb')  // 219526
sizeToBytes('214.38Kb')   // 219526
sizeToBytes('214.38KB')   // 219526
sizeToBytes('128MB')      // 134217728
sizeToBytes('256   GB')   // 274877906944
```
---- 
### getMpSceneParams()
> [小程序码生成接口文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/qr-code/wxacode.getUnlimited.html)

> danger
scene参数：限制: 最大32个可见字符，只支持数字，大小写英文以及以下特殊字符:   
!#$&'()*+,/:;=?@-._~

解析小程序码场景值
#### 小程序码场景值(scene)格式定义
value1,value2,value3@utm_source,utm_medium,utm_campaign,utm_content,utm_term  

其中，使用 @ 符号分隔页面业务参数：和神策埋点首次广告系列参数：，  
左侧为页面业务参数：，多个值之间使用 , 隔开，可根据页面具体需要，自行定义自行解析，  
右侧为神策埋点首次广告系列参数：，按上述字段固定排序，不可自定义
- 语法：**getMpSceneParams(scene, keys)**
- 参数
  - **scene\<string\>:** 小程序码中的 scene 值
  - **keys\<string|Array\<string\>\>:** 小程序码场景值(scene)格式定义中 @ 符号左侧值的字段列表
- 返回值：**object**
- 示例：
```javascript
import { getMpSceneParams } from '@/utils'
// 纯页面业务参数：，不带神策埋点首次广告系列参数：
const s0 = '214,tesla'
getMpSceneParams(s0, 'id,name')
// { id: 214, name: 'tesla' }

// 纯页面业务参数：，不带神策埋点首次广告系列参数：
const s1 = '214,tesla,18'
getMpSceneParams(s1, 'id,name,age')
// { id: 214, name: 'tesla', age: 18 }

// 带页面业务参数：和神策埋点首次广告系列参数：
const s2 = '214,tesla,18@A,B,C'
getMpSceneParams(s2, 'id,name,age')
// { id: 214, name: 'tesla', age: 18, utm_source: 'A', utm_medium: 'B', utm_campaign: 'C' }

// 带页面业务参数：和神策埋点首次广告系列参数：
// 因为神策参数：排序固定，所以如果只设置后面的字段，则前面的字段需要使用 , 隔开位置
const s3 = '214,tesla,18@A,,,D,E'
getMpSceneParams(s3, 'id,name,age')
// { id: 214, name: 'tesla', age: 18, utm_source: 'A', utm_content: 'D', utm_term: 'E' }
```