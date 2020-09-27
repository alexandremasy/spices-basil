# Spices - Basil
> Javascript utility library for common tasks with a plugin system.



## Motivations

- To have a goto for simple tasks without the over-weight of a lodash like package.
- To allow a plugin system to extends that logic for extensibility but more on demand.



## How does it works?

```JS
import { basil } from '@spices/basil'

let n = basil.random(1, 8); // yield a number between 1 - 8
```



------

```JS
basil.debounce(fn:Function, [wait:Number=0], [options:Object={}]):Function`
```

Creates a debounced function that delays invoking `func` until after `wait` milliseconds have elapsed since the last time the debounced function was invoked. The debounced function comes with a `cancel` method to cancel delayed `func` invocations and a `flush` method to immediately invoke them. Provide `options` to indicate whether `func` should be invoked on the leading and/or trailing edge of the `wait` timeout. The `func` is invoked with the last arguments provided to the debounced function. Subsequent calls to the debounced function return the result of the last `func` invocation.

**Arguments**

`fn` *(Function)*: The function to debounce.
`[wait=0]` <number>: The number of milliseconds to delay.
`[options={}]` <Object>: The options object.
`[options.leading=false]` <boolean>: Specify invoking on the leading edge of the timeout.
`[options.maxWait]` <number>: The maximum time `func` is allowed to be delayed before it's invoked.
`[options.trailing=true]` <boolean>: Specify invoking on the trailing edge of the timeout.

**Returns**

<Function> Returns the new debounced function.

*from: [lodash](https://lodash.com/docs/4.17.15#debounce)*



------

```JS
basil.delay(wait:Number):Promise
```

Returns a Promise that will be resolved after `wait` milliseconds.

**Arguments**

`wait` <Number> The number of milliseconds to delay.

**Returns**

<Promise> Returns the Promise of completion.



------

```JS
basil.sequence(tasks:Array.<function>):Promise
```

Run an array of tasks in sequence, without overlap. Each task will be called with the arguments passed to when.sequence(), and each may return a promise or a value.

When all tasks have completed, the returned promise will resolve to an array containing the result of each task at the corresponding array position. The returned promise will reject when any task throws or returns a rejection.

**Arguments**

`tasks` <Array> The list of tasks to run

**Returns**

<Promise> A promise of completion or rejection.



------

```js
basil.random([min:number=0], [max:number=1], [floating:boolean = false]):number
```

Produces a random number between the inclusive `min` and `max` bounds. If `floating` is `true`, a floating-point number is returned instead of an integer.

**Arguments**





------



### Number
- 

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
- `isRegexp(value:*):boolean`
- `isString(value:*):boolean`

## Configuration

- `global:boolean = false` Declare basil globally (window.basil) or not. If set to `true` basil will be declared.  

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

- [@spices/basil-i18n)(https://github.com/alexandremasy/spices-basil-i18n)
