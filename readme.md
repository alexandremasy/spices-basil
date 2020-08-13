# Spices - Basil
> Javascript utility library for common tasks with a plugin system.

## Utilities
```JS
import { basil } from '@spices/basil'

let n = basil.random(1, 8); // yield a number between 1 - 8
```
### Function
- `debounce(fn:function, [wait:number=0], [options:object={}]):Function`
- `delay(wait:number):Promise`
- `once(fn:function):*`
- `sequence(fns:array.<function>):Promise`

### Number
- `random([min:number=0], [max:number=1], [floating:boolean = false]):number`

### String
- `slugify(value:string):string`
- `uniqId([prefix:string = '']):string`
- `uuid():string`

### Types
- `isArray(value:*):boolean`
- `isBoolean(value:*):boolean`
- `isEmpty(value:*):boolean`
- `isFunction(value:*):boolean`
- `isNumber(value:*):boolean`
- `isNil(value:*):boolean`
- `isObject(value:*):boolean`
- `isString(value:*):boolean`

---------------------------------------------------------

## VueJS
By default @spices is build for VueJS but it is an option for basil.  

- Declare the `$basil` property that allows you to use all the utiilities from the components.
- Declare some `mixins` to easily transform your data from the components.
- Declare the plugins `components`

```JS
import Vue from 'vue'
import { basil, install } from '@spices/basil`

Vue.use(install)
```
 

---------------------------------------------------------

## Plugins
Basil comes at heart with a plugin system allowing to extends its abilities without flooding the codebase. 

```JS
import { basil } from '@spices/basil'
import { i18n } from '@spices/basil-i18n'

basil.use( i18n, {});
```

### i18n

- `set/get locale:Locale`
- `set/get locales:Array`
- `toCurrency(value:number, [signed:boolean = false]):string`
- `toRangeCurrency(min:number, max, [signed:boolean = false]):string`
- `$date(value:Date, format:'date')`

### 
