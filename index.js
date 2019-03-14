// 自定义json格式化
function stringify( obj , config = {} ) {
    if ( obj === null ) {
        return null
    }
    let {
            retractNum ,
            start ,
            whiteSpace ,
            commaPrevSpace ,
        } = { retractNum: 2 , start: 0 , whiteSpace: '\u0020' , commaPrevSpace: true , ...config } ,
        isArray = Array.isArray( obj ) ,
        keys = Object.keys( obj ) ,
        sizeKeys = keys.length ,
        specialCharReg = /[-_.]/g ,
        spaceNum = retractNum + start ,
        spaceKey = whiteSpace.repeat( spaceNum ) ,
        oneSpace = whiteSpace.repeat( 1 ) ,
        endBracketSpace = whiteSpace.repeat( start ) ,
        splitComma = commaPrevSpace ? oneSpace + ',' : ','
    if ( isArray ) {
        let content = obj.reduce( ( prev , next , index ) => {
            let isObj = typeof next === 'object' ,
                lastKey = index === sizeKeys - 1 ,
                comma = lastKey ? '' : splitComma
            if ( isObj ) {
                next = stringify( next , { ...config , start: spaceNum } )
            }
            return prev + spaceKey + next + comma + '\n'
        } , '' )
        return `[\n${content}${endBracketSpace}]`
    }
    let str = keys.reduce( ( prev , key , index ) => {
            let value = obj[ key ] ,
                isObj = typeof value === 'object' ,
                isSpecialKey = specialCharReg.test( key ) ,
                formatKey = isSpecialKey ? `"${key}"` : key ,
                lastKey = index === sizeKeys - 1 ,
                comma = lastKey ? '' : splitComma
            if ( isObj ) {
                value = stringify( value , { ...config , start: spaceNum } )
            }
            return prev + `${spaceKey}${formatKey}:${oneSpace}${value}${comma}\n`
        } , '\n' )
    return `{${str}${endBracketSpace}}`
}

export default stringify