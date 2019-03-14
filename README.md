# json-formatter
a json formatter( JSON格式化工具 )

### 使用方法

```javascript
import stringify from 'json-formatter'
let obj = { a: 'aa' , b: 'bb' , c: [ 'cc' , '11' , '22' , { d: 'dd' } , '33' ] }
    formated = stringify( obj )
console.log( formated )
```
// formated
```text
{
  a: aa ,
  b: bb ,
  c: [
    cc ,
    11 ,
    22 ,
    {
      d: dd
    } ,
    33
  ]
}
```

### 支持的参数

stringify支持第二个配置参数，config
默认值为：`{ retractNum: 2 , start: 0 , whiteSpace: '\u0020' , commaPrevSpace: true }`

- `retractNum` 缩进空格数目
- `start` 偏移量，所有缩进的起始位置
- `whiteSpace` 空格类型，可设置为tab
- `commaPrevSpace` 逗号分隔符，前面是否有空格，默认为true