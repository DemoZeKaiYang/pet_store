# kux-dayjs
`KuxDayjs` 是一个极简的 `uts` 库，API 设计完全参考 `dayjs` 的设计、所以上手该库基本零成本了，方便开发者们验证、操作和显示日期和时间。

## 目录结构
<div class="kux-ol" style="list-style-type: none;">
<ol style="list-style-type: none;">
  <li><a href="#import">导入插件</a></li>
  <li><a href="#parse">解析</a>
    <ol>
      <li><a href="#parse_shili">实例</a></li>
      <li><a href="#parse_dangqianshijian">当前时间</a></li>
	  <li><a href="#parse_clone">克隆复制</a></li>
    </ol>
  </li>
  <li><a href="#getset">取值/赋值</a>
  	<ol>
		<li><a href="#getset_millisecond">毫秒</a></li>
		<li><a href="#getset_second">秒</a></li>
		<li><a href="#getset_minute">分钟</a></li>
		<li><a href="#getset_hour">小时</a></li>
		<li><a href="#getset_date">日期</a></li>
		<li><a href="#getset_day">星期</a></li>
		<li><a href="#getset_time">时间</a></li>
		<li><a href="#getset_month">月</a></li>
		<li><a href="#getset_year">年</a></li>
	</ol>
  </li>
  <li><a href="#manipulate">操作</a>
  	<ol>
		<li><a href="#manipulate_add">增加</a></li>
		<li><a href="#manipulate_subtract">减去</a></li>
		<li><a href="#manipulate_today">今天</a></li>
		<li><a href="#manipulate_startOf">时间的开始</a></li>
		<li><a href="#manipulate_endOf">时间的结束</a></li>
	</ol>
  </li>
  <li><a href="#display">显示</a>
  	<ol>
		<li><a href="#display_format">格式化</a></li>
		<li><a href="#display_fromNow">相对当前时间（前）</a></li>
		<li><a href="#display_from">相对指定时间（前）</a></li>
		<li><a href="#display_toNow">相对当前时间（后）</a></li>
		<li><a href="#display_to">相对指定时间（后）</a></li>
		<li><a href="#display_calendar">日历时间</a></li>
		<li><a href="#display_diff">差异（Diff）</a></li>
		<li><a href="#display_valueOf">Unix时间戳（毫秒）</a></li>
		<li><a href="#display_unix">Unix时间戳</a></li>
		<li><a href="#display_daysInMonth">获取月天数</a></li>
		<li><a href="#display_toDate">转Date</a></li>
		<li><a href="#display_toArray">转数组</a></li>
		<li><a href="#display_toJSON">转JSON</a></li>
		<li><a href="#display_toObject">转对象</a></li>
		<li><a href="#display_toRFCString">转字符串</a></li>
	</ol>
  </li>
  <li><a href="#query">查询</a>
  	<ol>
		<li><a href="#display_isBefore">是否之前</a></li>
		<li><a href="#display_isSame">是否相同</a></li>
		<li><a href="#display_isAfter">是否之后</a></li>
		<li><a href="#display_isSameOrBefore">是否相同或之前</a></li>
		<li><a href="#display_isSameOrAfter">是否相同或之后</a></li>
		<li><a href="#display_isBetween">是否两者之间</a></li>
		<li><a href="#display_isDayjs">是否是KuxDayjs</a></li>
		<li><a href="#display_isLeapYear">是否闰年</a></li>
	</ol>
  </li>
  <li><a href="#customType">自定义类型</a>
  	<ol>
		<li><a href="#customType_InfoType">InfoType</a></li>
		<li><a href="#customType_LunarType">LunarType</a></li>
		<li><a href="#customType_DatetimeUnit">DatetimeUnit</a></li>
		<li><a href="#customType_DiffUnit">DiffUnit</a></li>
		<li><a href="#customType_DateFormat">DateFormat</a></li>
		<li><a href="#customType_RelativeTime">RelativeTime</a></li>
		<li><a href="#customType_FromToOptions">FromToOptions</a></li>
		<li><a href="#customType_DatetimeOptions">DatetimeOptions</a></li>
		<li><a href="#customType_IsBetweenContains">IsBetweenContains</a></li>
	</ol>
  </li>
</ol>
</div>

<a id="import"></a>
### 导入插件
```ts
import { dayjs } from '@/uni_modules/kux-dayjs';
```

<a id="parse"></a>
### 解析

<a id="parse_shili"></a>
#### 实例
代替修改本地Date.prototype，`KuxDayjs` 对 `Date` 对象进行了封装，只需要调用 `dayjs()` 即可

`KuxDayjs` 对象是不可变的，也就是说，以某种方式改变 `KuxDayjs` 对象的所有API操作都将返回它的一个新实例。

<a id="parse_dangqianshijian"></a>
#### 当前时间
直接调用 `dayjs()` 将返回一个包含当前日期和时间的 `KuxDayjs` 对象。
```ts
const now = dayjs();
```
>目前仅支持传入 `YYYY-MM-DD HH:mm:ss.S` 格式的日期时间字符串

<a id="parse_clone"></a>
#### 克隆复制
所有的 `KuxDayjs` 对象都是不可变的。 但如果有必要，使用 `dayjs().clone()` 可以复制出一个当前对象。
```ts
const a = dayjs();
const b = a.clone();
// a 和 b 是两个独立的 KuxDayjs 对象
```

<a id="getset"></a>
### 取值/赋值

<a id="getset_millisecond"></a>
#### 毫秒
获取或设置毫秒。<br/>
传入0到999的数字。 如果超出这个范围，它会进位到秒。
```ts
dayjs().millisecond()
dayjs().millisecond(1)
```

<a id="getset_second"></a>
#### 秒
获取或设置秒。<br/>
传入0到59的数字。 如果超出这个范围，它会进位到分钟。
```ts
dayjs().second()
dayjs().second(1)
```

<a id="getset_minute"></a>
#### 分钟
获取或设置分钟。<br/>
传入0到59的数字。 如果超出这个范围，它会进位到小时。
```ts
dayjs().minute()
dayjs().minute(59)
```

<a id="getset_hour"></a>
#### 小时
获取或设置小时。<br/>
传入0到23的数字。 如果超出这个范围，它会进位到天数。
```ts
dayjs().hour()
dayjs().hour(12)
```

<a id="getset_date"></a>
#### 日期
获取或设置日期。<br/>
传入1到31的数字。 如果超出这个范围，它会进位到月份。
```ts
dayjs().date()
dayjs().date(1)
```
> ****注意****<br/>`dayjs().date()` 是该月的日期。`dayjs().day()` 是星期几。

<a id="getset_day"></a>
#### 星期
获取或设置星期几。<br/>
传入 number 从0(星期天)到6(星期六)。 如果超出这个范围，它会进位到其他周。
```ts
dayjs().day()
dayjs().day(0)
```
> ****注意****<br/>`dayjs().date()` 是该月的日期。`dayjs().day()` 是星期几。

<a id="getset_time"></a>
#### 时间
获取或设置时间。<br/>
传入一个整数，表示从 1970-1-1 00:00:00 UTC 开始计时的毫秒数。 传入参数就是设置操作，否则为获取操作。
```ts
dayjs().time()
dayjs().time(1)
```

<a id="getset_month"></a>
#### 月
获取或设置月份。<br/>
传入0到11的 number。 如果超出这个范围，它会进位到年份。
```ts
dayjs().month()
dayjs().month(0)
```
> ****注意****<br/>月份是从 0 开始计算的，即 1 月是 0。

<a id="getset_year"></a>
#### 年
获取或设置年份。<br/>
```ts
dayjs().year()
dayjs().year(2000)
```

<a id="manipulate"></a>
### 操作
您可能需要一些方法来操作 `KuxDayjs` 对象。<br/>
`KuxDayjs` 支持像这样的链式调用。
```ts
dayjs('2019-01-25').add(1, 'day').subtract(1, 'year').year(2009);
```

<a id="manipulate_add"></a>
#### 增加
返回增加一定时间的复制的 `KuxDayjs` 对象。
```ts
dayjs().add(7, 'day')
```
支持配合单位操作。缩写要区分大小写。<br/>
支持的单位列表如下：<br/>
+ week 周，缩写 `w`
+ month 月份，缩写 `M`
+ year 年，缩写 `y`
+ hour 小时，缩写 `h`
+ minute 分钟，缩写 `m`
+ second 秒，缩写 `s`
+ millisecond 毫秒，缩写 `ms`

<a id="manipulate_subtract"></a>
#### 减去
返回减去一定时间的复制的 `KuxDayjs` 对象。
```ts
dayjs().subtract(7, 'day')
```
支持配合单位操作。缩写要区分大小写。<br/>
支持的单位列表如下：<br/>
+ week 周，缩写 `w`
+ month 月份，缩写 `M`
+ year 年，缩写 `y`
+ hour 小时，缩写 `h`
+ minute 分钟，缩写 `m`
+ second 秒，缩写 `s`
+ millisecond 毫秒，缩写 `ms`

<a id="manipulate_today"></a>
#### 今天
返回设置时间为今天的复制的 `KuxDayjs` 对象。
```ts
dayjs().today()
```

<a id="manipulate_startOf"></a>
#### 时间的开始
返回复制的 `KuxDayjs` 对象，并设置到一个时间的开始。
```ts
dayjs().startOf('year')
```
支持配合单位操作。缩写要区分大小写。<br/>
支持的单位列表如下：<br/>
+ week 周，缩写 `w`
+ month 月份，缩写 `M`
+ year 年，缩写 `y`
+ hour 小时，缩写 `h`
+ minute 分钟，缩写 `m`
+ second 秒，缩写 `s`
+ millisecond 毫秒，缩写 `ms`

>****注意****<br/>暂时不支持跨年操作。

<a id="manipulate_endOf"></a>
#### 时间的结束
返回复制的 `KuxDayjs` 对象，并设置到一个时间的末尾。
```ts
dayjs().endOf('month')
```
支持配合单位操作。缩写要区分大小写。<br/>
支持的单位列表如下：<br/>
+ week 周，缩写 `w`
+ month 月份，缩写 `M`
+ year 年，缩写 `y`
+ hour 小时，缩写 `h`
+ minute 分钟，缩写 `m`
+ second 秒，缩写 `s`
+ millisecond 毫秒，缩写 `ms`

>****注意****<br/>暂时不支持跨年操作。

<a id="display"></a>
### 显示
当解析和操作完成后，您需要一些方式来展示 `KuxDayjs` 对象。

<a id="display_format"></a>
#### 格式化
根据传入的占位符返回格式化后的日期。
```ts
dayjs().format('YYYY-MM-DD HH:mm:ss')
dayjs().format('YYYY-MM-DD a HH:mm:ss')
dayjs().format('YYYY-MM-DD HH:mm:ss A')
```
支持的格式占位符列表：<br/>

| 标识 | 示例 | 描述 |
| --- | --- | --- |
| YYYY | 2023 | 年份，四位数 |
| YY | 23 | 年份，两位数 |
| MM | 12 | 月份 |
| DD | 01 | 日，两位数 |
| HH | 22 | 小时，两位数 |
| mm | 59 | 分钟，两位数 |
| ss | 01 | 秒，两位数 |
| SSS | 999 | 毫秒，三位数 |
| A | AM/PM | 上/下午，大写 |
| a | am/pm | 上/下午，小写 |
| AA | 上/下午 | 上/下午 |

<a id="display_fromNow"></a>
#### 相对当前时间（前）
返回现在到当前实例的相对时间。
```ts
dayjs('2021-12-12').fromNow(); // 1年前
```
支持传入配置项自定义输出格式以及显示隐藏后缀，配置项定义如下：<br/>

| 参数名 | 默认值 | 说明 |
| --- | --- | --- |
| isSuffix | `false` | 是否自动携带后缀，为 `true` 的时候会自动添加 `'前'` 后缀，如 1年前；手动指定 `relativeTime` 时该项不生效
| relativeTime | `{s: '', m: '', mm: '', h: '', hh: '', d: '', dd: '', mon: '', mons: '', y: '', yy: ''}` | 自定义格式，变量说明见下方说明 |

#### RelativeTime 说明
| 范围 | 键值 | 使用变量 | 说明 | 示例 |
| --- | --- | --- | --- | --- |
| 0 to 44seconds | s | %s | 几秒前 | %s seconds ago |
| 45 to 89 seconds | m | %m | 1分钟前 | %m minute ago |
| 90 seconds to 44 minutes | mm | %mm | 几分钟前 | %mm minutes ago |
| 45 to 89 minutes | h | %h | 1小时前 | %h hour ago |
| 90 minutes to 21 hours | hh | %hh | 几小时前 | %hh hours ago |
| 22 to 35 hours | d | %d | 1天前 | %d day ago |
| 36 hours to 25 days | dd | %dd | 几天前 | %dd days ago |
| 26 to 45 days | mon | %mon | 1个月前 | %mon month ago |
| 46 days to 10 months | mons | %mons | 几个月前 | %mons months ago |
| 11 months to 17 months | y | %y | 1年前 | %y year ago |
| 18 months + | yy | %yy | 几年前 | %yy years ago |

<a id="display_from"></a>
#### 相对指定时间（前）
返回 X 到当前实例的相对时间。
```ts
const datetime = dayjs('2021-12-12 15:43:58');
const a = dayjs('2022-12-12');
datetime.from(a); // 1年前
```
支持传入配置项自定义输出格式以及显示隐藏后缀，配置项定义如下：<br/>

| 参数名 | 默认值 | 说明 |
| --- | --- | --- |
| isSuffix | `false` | 是否自动携带后缀，为 `true` 的时候会自动添加 `'前'` 后缀，如 1年前；手动指定 `relativeTime` 时该项不生效
| relativeTime | `{s: '', m: '', mm: '', h: '', hh: '', d: '', dd: '', mon: '', mons: '', y: '', yy: ''}` | 自定义格式，变量说明见下方说明 |

#### RelativeTime 说明
| 范围 | 键值 | 使用变量 | 说明 | 示例 |
| --- | --- | --- | --- | --- |
| 0 to 44seconds | s | %s | 几秒前 | %s seconds ago |
| 45 to 89 seconds | m | %m | 1分钟前 | %m minute ago |
| 90 seconds to 44 minutes | mm | %mm | 几分钟前 | %mm minutes ago |
| 45 to 89 minutes | h | %h | 1小时前 | %h hour ago |
| 90 minutes to 21 hours | hh | %hh | 几小时前 | %hh hours ago |
| 22 to 35 hours | d | %d | 1天前 | %d day ago |
| 36 hours to 25 days | dd | %dd | 几天前 | %dd days ago |
| 26 to 45 days | mon | %mon | 1个月前 | %mon month ago |
| 46 days to 10 months | mons | %mons | 几个月前 | %mons months ago |
| 11 months to 17 months | y | %y | 1年前 | %y year ago |
| 18 months + | yy | %yy | 几年前 | %yy years ago |

<a id="display_toNow"></a>
#### 相对当前时间（后）
返回当前实例到现在的相对时间。
```ts
dayjs('2021-12-12').toNow(); // 1年后
```
支持传入配置项自定义输出格式以及显示隐藏后缀，配置项定义如下：<br/>

| 参数名 | 默认值 | 说明 |
| --- | --- | --- |
| isSuffix | `false` | 是否自动携带后缀，为 `true` 的时候会自动添加 `'后'` 后缀，如 1年前；手动指定 `relativeTime` 时该项不生效
| relativeTime | `{s: '', m: '', mm: '', h: '', hh: '', d: '', dd: '', mon: '', mons: '', y: '', yy: ''}` | 自定义格式，变量说明见下方说明 |

#### RelativeTime 说明
| 范围 | 键值 | 使用变量 | 说明 | 示例 |
| --- | --- | --- | --- | --- |
| 0 to 44seconds | s | %s | 几秒后 | %s seconds after |
| 45 to 89 seconds | m | %m | 1分钟后 | %m minute after |
| 90 seconds to 44 minutes | mm | %mm | 几分钟后 | %mm minutes after |
| 45 to 89 minutes | h | %h | 1小时后 | %h hour after |
| 90 minutes to 21 hours | hh | %hh | 几小时后 | %hh hours after |
| 22 to 35 hours | d | %d | 1天后 | %d day after |
| 36 hours to 25 days | dd | %dd | 几天后 | %dd days after |
| 26 to 45 days | mon | %mon | 1个月后 | %mon month after |
| 46 days to 10 months | mons | %mons | 几个月后 | %mons months after |
| 11 months to 17 months | y | %y | 1年后 | %y year after |
| 18 months + | yy | %yy | 几年后 | %yy years after |

<a id="display_to"></a>
#### 相对指定时间（后）
返回当前实例到现在的相对时间。
```ts
const datetime = dayjs('2021-12-12 15:43:58');
const a = dayjs('2022-12-12');
console.log(datetime.to(a)); // 输出 1年后
```
支持传入配置项自定义输出格式以及显示隐藏后缀，配置项定义如下：<br/>

| 参数名 | 默认值 | 说明 |
| --- | --- | --- |
| isSuffix | `false` | 是否自动携带后缀，为 `true` 的时候会自动添加 `'后'` 后缀，如 1年前；手动指定 `relativeTime` 时该项不生效
| relativeTime | `{s: '', m: '', mm: '', h: '', hh: '', d: '', dd: '', mon: '', mons: '', y: '', yy: ''}` | 自定义格式，变量说明见下方说明 |

#### RelativeTime 说明
| 范围 | 键值 | 使用变量 | 说明 | 示例 |
| --- | --- | --- | --- | --- |
| 0 to 44seconds | s | %s | 几秒后 | %s seconds after |
| 45 to 89 seconds | m | %m | 1分钟后 | %m minute after |
| 90 seconds to 44 minutes | mm | %mm | 几分钟后 | %mm minutes after |
| 45 to 89 minutes | h | %h | 1小时后 | %h hour after |
| 90 minutes to 21 hours | hh | %hh | 几小时后 | %hh hours after |
| 22 to 35 hours | d | %d | 1天后 | %d day after |
| 36 hours to 25 days | dd | %dd | 几天后 | %dd days after |
| 26 to 45 days | mon | %mon | 1个月后 | %mon month after |
| 46 days to 10 months | mons | %mons | 几个月后 | %mons months after |
| 11 months to 17 months | y | %y | 1年后 | %y year after |
| 18 months + | yy | %yy | 几年后 | %yy years after |

<a id="display_calendar"></a>
#### 日历时间
传入指定年月获取指定年月的日历面板数据，指定年月省略时默认获取当年年月的数据。返回 `DateFormat[]`，`DateFormat` 见下方说明。
```ts
dayjs().calendar(); 
```

##### 传入参数
<br/>

| 参数名 | 类型 | 是否必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| year | `number` | 否 | `0` | 指定年份，默认值为 0
| month | `number` | 否 | `0` | 指定月份，默认值为 0

##### DateFormat 说明
<br/>

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| year | `number` | 年份
| month | `number` | 月份
| render | `any` | 留存字段
| lunar | `LunarType` | 农历信息，见下方说明
| fullLunar | `InfoType` | 农历完整数据信息，见下方说明
| diffDays | `number` | 距离今天的差值，正数表示多少天后，负数表示多少天前，`0` 表示今天时间
| isToday | `boolean` | 农历中是否为今天
| fullDate | `string` | 完整日期

##### LunarType 说明
<br/>


| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| month | `string` | 农历月份大写
| date | `string` | 农历日期大写

##### InfoType 说明
<br/>

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| lunarY | `number` | 农历年份数字
| lunarM | `number` | 农历月份数字
| lunarD | `number` | 农历日期数字
| isLeap | `boolean` | 是否闰月

<a id="display_diff"></a>
#### 差异（Diff）
返回指定单位下两个日期时间之间的差异。
```ts
const date1 = dayjs('2019-01-25');
const date2 = dayjs('2018-06-05');
date1.diff(date2) // 20214000000 默认单位是毫秒
```
要获取其他单位下的差异，则在第二个参数传入相应的单位。
```ts
const date1 = dayjs('2019-01-25');
date1.diff('2018-06-05', 'month') // 7;
```
默认情况下会将结果进位成整数。 如果要得到一个浮点数，将 `true` 作为第三个参数传入。
```ts
const date1 = dayjs('2019-01-25');
date1.diff('2018-06-05', 'month', true) // 7.645161290322581;
```
支持的单位列表：<br/>
+ week 周，缩写 `w`
+ day 天，缩写 `d`
+ month 月份，缩写 `M`
+ year 年，缩写 `y`
+ hour 小时，缩写 `h`
+ minute 分钟，缩写 `m`
+ second 秒，缩写 `s`
+ millisecond 毫秒，缩写 `ms`

<a id="display_valueOf"></a>
#### Unix时间戳（毫秒）
返回当前实例的 UNIX 时间戳，13位数字，毫秒
```ts
dayjs('2019-01-25').valueOf() // 1548381600000
```

<a id="display_unix"></a>
#### Unix时间戳
返回当前实例的 UNIX 时间戳，10位数字，秒
```ts
dayjs('2019-01-25').valueOf() // 1548381600
```
此值不包含毫秒信息，会进位到秒。

<a id="display_daysInMonth"></a>
#### 获取月天数
获取当前月份包含的天数。
```ts
const date = dayjs('2023-12-12'); // 31
```

<a id="display_toDate"></a>
#### 转Date
从 `KuxDayjs` 中获取原生的Date对象。
```ts
dayjs('2023-12-12').toDate();
```

<a id="display_toArray"></a>
#### 转数组
返回一个包含各个时间信息的 Array。
```ts
const datetime = dayjs('2023-12-13 10:16:18');// [2023,12,13,10,16,18,0]
```

<a id="display_toJSON"></a>
#### 转JSON
序列化为 `ISO 8601` 格式的字符串。
```ts
dayjs('2023-12-13 10:16:18').toJSON(); // 2023-12-13T10:16:18.000Z
```

<a id="display_toObject"></a>
#### 转对象
返回包含时间信息的 Object。
```ts
dayjs('2023-12-13 10:16:18').toObject(); // {"date":13,"hours":10,"milliseconds":0,"minutes":16,"months":12,"seconds":18,"years":2023}
```

<a id="display_toRFCString"></a>
#### 转字符串
返回包含时间信息的 `RFC 822` 或 `RFC 5322` 格式字符串。
```ts
dayjs('2023-12-13 10:16:18').toRFCString(); // Wed, 13 Dec 2023 10:16:18 GMT
```

<a id="query"></a>
### 查询
`KuxDayjs` 对象还有很多查询的方法。

<a id="query_isBefore"></a>
#### 是否之前
表示 `KuxDayjs` 对象是否在另一个提供的日期时间之前。
```ts
dayjs('2023-12-13 10:16:18').isBefore('2024-12-12'); // true
```
如果想使用除了毫秒以外的单位进行比较，则将单位作为第二个参数传入。
```ts
dayjs('2023-12-13 10:16:18').isBefore('2024-12-12', 'year'); // true
```
支持的单位列表如下：<br/>
+ year - 年，缩写为 `y`
+ month - 月，缩写为 `M`
+ day - 日，缩写为 `d`
+ hour - 小时，缩写为 `h`
+ minute - 分钟，缩写为 `m`
+ second - 秒，缩写为 `s`
+ millisecond - 毫秒，缩写为 `ms`

<a id="query_isSame"></a>
#### 是否相同
表示 `KuxDayjs` 对象是否和另一个提供的日期时间相同。
```ts
dayjs('2023-12-13 10:16:18').isBefore('2023-12-12'); // false
```
如果想使用除了毫秒以外的单位进行比较，则将单位作为第二个参数传入。
```ts
dayjs('2023-12-13 10:16:18').isBefore('2023-12-12', 'year'); // true
```
支持的单位列表如下：<br/>
+ year - 年，缩写为 `y`
+ month - 月，缩写为 `M`
+ day - 日，缩写为 `d`
+ hour - 小时，缩写为 `h`
+ minute - 分钟，缩写为 `m`
+ second - 秒，缩写为 `s`
+ millisecond - 毫秒，缩写为 `ms`

<a id="query_isAfter"></a>
#### 是否之后
表示 `KuxDayjs` 对象是否在另一个提供的日期时间之后。
```ts
dayjs('2023-12-13 10:16:18').isAfter('2023-12-12'); // true
```
如果想使用除了毫秒以外的单位进行比较，则将单位作为第二个参数传入。
```ts
dayjs('2023-12-13 10:16:18').isAfter('2023-12-12', 'year'); // true
```
支持的单位列表如下：<br/>
+ year - 年，缩写为 `y`
+ month - 月，缩写为 `M`
+ day - 日，缩写为 `d`
+ hour - 小时，缩写为 `h`
+ minute - 分钟，缩写为 `m`
+ second - 秒，缩写为 `s`
+ millisecond - 毫秒，缩写为 `ms`

<a id="query_isSameOrBefore"></a>
#### 是否相同或之前
表示 `KuxDayjs` 对象是和另一个提供的日期时间相同或在其之前。
```ts
dayjs('2023-12-13 10:16:18').isSameOrBefore('2023-12-12'); // false
```
如果想使用除了毫秒以外的单位进行比较，则将单位作为第二个参数传入。
```ts
dayjs('2023-12-13 10:16:18').isSameOrBefore('2023-12-12', 'year'); // true
```
支持的单位列表如下：<br/>
+ year - 年，缩写为 `y`
+ month - 月，缩写为 `M`
+ day - 日，缩写为 `d`
+ hour - 小时，缩写为 `h`
+ minute - 分钟，缩写为 `m`
+ second - 秒，缩写为 `s`
+ millisecond - 毫秒，缩写为 `ms`

<a id="query_isSameOrAfter"></a>
#### 是否相同或之后
表示 `KuxDayjs` 对象是和另一个提供的日期时间相同或在其之前。
```ts
dayjs('2023-12-13 10:16:18').isSameOrAfter('2023-12-12'); // true
```
如果想使用除了毫秒以外的单位进行比较，则将单位作为第二个参数传入。
```ts
dayjs('2023-12-13 10:16:18').isSameOrAfter('2023-12-12', 'year'); // true
```
支持的单位列表如下：<br/>
+ year - 年，缩写为 `y`
+ month - 月，缩写为 `M`
+ day - 日，缩写为 `d`
+ hour - 小时，缩写为 `h`
+ minute - 分钟，缩写为 `m`
+ second - 秒，缩写为 `s`
+ millisecond - 毫秒，缩写为 `ms`

<a id="query_isBetween"></a>
#### 是否两者之间
表示 `KuxDayjs` 对象是否在其他两个的日期时间之间。
```ts
dayjs('2023-12-13').isBetween('2023-12-13', '2023-12-14'); // 默认毫秒
```
如果想使用除了毫秒以外的单位进行比较，则将单位作为第三个参数传入。
```ts
dayjs('2023-12-13').isBetween('2023-12-13', '2023-12-14', 'year');
```
支持的单位列表如下：<br/>
+ year - 年，缩写为 `y`
+ month - 月，缩写为 `M`
+ day - 日，缩写为 `d`
+ hour - 小时，缩写为 `h`
+ minute - 分钟，缩写为 `m`
+ second - 秒，缩写为 `s`
+ millisecond - 毫秒，缩写为 `ms`

如果想自定义包含关系进行比较，则将包含关系作为第四个参数传入。
```ts
dayjs('2023-12-13').isBetween('2023-12-13', '2023-12-14', 'day', '[');
```
包含关系列表如下：<br/>
+ `[` - 向前包含，等同于 `<=`
+ `]` - 向后包含，等同于 `>=`
+ `[]` - 前后都包含

<a id="display_isDayjs"></a>
#### 是否是KuxDayjs
这表示一个变量是否为 `KuxDayjs` 对象。
```ts
dayjs().isDayjs(dayjs()); // true
dayjs().isDayjs(new Date()); // false
```

<a id="display_isLeapYear"></a>
#### 是否闰年
查询 `KuxDayjs` 对象的年份是否是闰年。
```ts
dayjs('2000-01-01').isLeapYear(); // true
```

<a id="customType"></a>
### 自定义类型
因为 `uts` 强类型，所以有些 API 参数需要指定参数类型，以上所有 API 涉及的自定义类型都在下面列出，如果有需要可以自己手动导入类型使用。

<a id="customType_InfoType"></a>
#### InfoType
```ts
export type InfoType = {
	lunarY : number;
	lunarM : number;
	lunarD : number;
	isLeap : boolean;
}
```

<a id="customType_LunarType"></a>
#### LunarType
```ts
export type LunarType = {
	month: string;
	date: string;
};
```

<a id="customType_DatetimeUnit"></a>
#### DatetimeUnit
```ts
export type DatetimeUnit = 
| 'day'
| 'd'
| 'month'
| 'M'
| 'year'
| 'y'
| 'hour'
| 'h'
| 'minute'
| 'm'
| 'second'
| 's'
| 'millisecond'
| 'ms'
```

<a id="customType_DiffUnit"></a>
#### DiffUnit
```ts
export type DiffUnit = 
| 'week'
| 'w'
| 'day'
| 'd'
| 'month'
| 'M'
| 'year'
| 'y'
| 'hour'
| 'h'
| 'minute'
| 'm'
| 'second'
| 's'
| 'millisecond'
| 'ms'
```

<a id="customType_DateFormat"></a>
#### DateFormat
```ts
export type DateFormat = {
	year: number;
	month: number;
	date: number;
	render: any;
	lunar: LunarType;
	fullLunar: InfoType;
	diffDays: number;
	isToday: boolean;
	fullDate: string;
};
```

<a id="customType_RelativeTime"></a>
#### RelativeTime
```ts
export type RelativeTime = {
	s?: string;
	m?: string;
	mm?: string;
	h?: string;
	hh?: string;
	d?: string;
	dd?: string;
	mon?: string;
	mons?: string;
	y?: string;
	yy?: string;
};
```

<a id="customType_FromToOptions"></a>
#### FromToOptions
```ts
export type FromToOptions = {
	isSuffix?: boolean;
	relativeTime?: RelativeTime;
};
```

<a id="customType_DatetimeOptions"></a>
#### DatetimeOptions
```ts
export type DatetimeOptions = {
	years: number;
	months: number;
	date: number;
	hours: number;
	minutes: number;
	seconds: number;
	milliseconds: number;
};
```

<a id="customType_IsBetweenContains"></a>
#### IsBetweenContains
```ts
export type IsBetweenContains = 
| '['
| ']'
| '[]'
| ''
```

___
### 友情推荐
+ [GVIM即时通讯模版](https://ext.dcloud.net.cn/plugin?id=16419)：GVIM即时通讯模版，基于uni-app x开发的一款即时通讯模版
+ [t-uvue-ui](https://ext.dcloud.net.cn/plugin?id=15571)：T-UVUE-UI是基于UNI-APP X开发的前端UI框架
+ [UxFrame 低代码高性能UI框架](https://ext.dcloud.net.cn/plugin?id=16148)：【F2图表、双滑块slider、炫酷效果tabbar、拖拽排序、日历拖拽选择、签名...】UniAppX 高质量UI库
+ [wx-ui 基于uni-app x开发的高性能混合UI库](https://ext.dcloud.net.cn/plugin?id=15579)：基于uni-app x开发的高性能混合UI库，集成 uts api 和 uts component，提供了一套完整、高效且易于使用的UI组件和API，让您以更少的时间成本，轻松完成高性能应用开发。
+ [firstui-uvue](https://ext.dcloud.net.cn/plugin?id=16294)：FirstUI（unix）组件库，一款适配 uni-app x 的轻量、简洁、高效、全面的移动端组件库。
+ [easyXUI 不仅仅是UI 更是为UniApp X设计的电商模板库](https://ext.dcloud.net.cn/plugin?id=15602)：easyX 不仅仅是UI库，更是一个轻量、可定制的UniAPP X电商业务模板库，可作为官方组件库的补充,始终坚持简单好用、易上手