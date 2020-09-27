# Spices - Basil
> A JavaScript utility library for common tasks with a plugin system.



## Motivations

- To have a go to for simple tasks without the over-weight of a lodash like package.
- To allow a plugin system to extends that logic for extensibility but more on demand.



## How does it works?

### Install by default

By default @spices is build for VueJS but it is an option for basil.  

```JS
import { basil } from '@spices/basil'

let n = basil.random(1, 8); // yield a number between 1 - 8
```



### Install for VueJS

Installing @spices/basil for VueJS will give you some more feature:

- Declare the `$basil` property to the Vue prototype that allows you to use all the utilities from the components.
- Declare some `mixins` to easily transform your data from the components.

```JS
import Vue from 'vue'
import { basil, install } from '@spices/basil`

Vue.use(install)
```



### API

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

```js
basil.get(object:Object, path:Array|String, [defaultValue]):*
```

Gets the value at `path` of `object`. If the resolved value is `undefined`, the `defaultValue` is returned in its place.

**Argument**

`object` <Object> The object to query.
`path` <Array|string> The path of the property to get.
`[defaultValue]` <any> The value returned for `undefined` resolved values.

**Returns**

<any> Returns the resolved value.

*from: [lodash](https://lodash.com/docs/4.17.15#get)*

------

```js
basil.global:Boolean = false
```

When set to `true`, declare `basil` as a property of the global namespace aka `window` in the browser context.

------

```js
basil.isArray(value:*):Boolean
```

Checks if `value` is classified as an `Array` object.

**Arguments**

`value` <any> The value to check.

**Returns**

<Boolean> Returns `true` if `value` is an array, else `false`.

*from: [lodash](https://lodash.com/docs/4.17.15#debounce)*

------

```js
basil.isBoolean(value:*):Boolean
```

Checks if `value` is classified as a `Boolean` primitive or object.

**Arguments**

`value` <any> The value to check.

**Returns**

<Boolean> Returns `true` if `value` is a boolean, else `false`.

*from: [lodash](https://lodash.com/docs/4.17.15#isBoolean)*

------

```js
basil.isEmpty(value:*):Boolean
```

Checks if `value` is an empty object, collection, map, or set.

Objects are considered empty if they have no own enumerable string keyed properties.

Array-like values such as `arguments` objects, arrays, buffers, strings, or jQuery-like collections are considered empty if they have a `length` of `0`. Similarly, maps and sets are considered empty if they have a `size` of `0`.

**Arguments**

`value` <any> The value to check.

**Returns**

<Boolean> Returns `true` if `value` is a empty, else `false`.

*from: [lodash](https://lodash.com/docs/4.17.15#isEmpty)*

------

```js
basil.isFunction(value:*):boolean
```

Checks if `value` is classified as a `Function` object.

**Arguments**

`value` <any> The value to check.

**Returns**

<Boolean> Returns `true` if `value` is a function, else `false`.

*from: [lodash](https://lodash.com/docs/4.17.15#isFunction)*

------

```js
basil.isNumber(value:*):boolean
```

Checks if `value` is classified as a `Number` primitive or object.

**Arguments**

`value` <any> The value to check.

**Returns**

<Boolean> Returns `true` if `value` is a number, else `false`.

*from: [lodash](https://lodash.com/docs/4.17.15#isNumber)*

------

```js
basil.isNil(value:*):boolean
```

Checks if `value` is `null` or `undefined`.

**Arguments**

`value` <any> The value to check.

**Returns**

<Boolean> Returns `true` if `value` is nullish, else `false`.

*from: [lodash](https://lodash.com/docs/4.17.15#isNil)*

------

```js
basil.isObject(value:*):boolean
```

Checks if `value` is the [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types) of `Object`. *(e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)*

**Arguments**

`value` <any> The value to check.

**Returns**

<Boolean> Returns `true` if `value` is an object, else `false`.

*from: [lodash](https://lodash.com/docs/4.17.15#isObject)*

------

```js
basil.isRegExp(value:*):boolean
```

Checks if `value` is classified as a `RegExp` primitive or object.

**Arguments**

`value` <any> The value to check.

**Returns**

<Boolean> Returns `true` if `value` is a regexp, else `false`.

*from: [lodash](https://lodash.com/docs/4.17.15#isRegExp)*

------

```js
basil.isString(value:*):boolean
```

Checks if `value` is classified as a `String` primitive or object.

**Arguments**

`value` <any> The value to check.

**Returns**

<Boolean> Returns `true` if `value` is a String, else `false`.

*from: [lodash](https://lodash.com/docs/4.17.15#isString)*

------

```js
basil.isSymbol(value:*):Boolean
```

Checks if `value` is classified as a `Symbol` primitive or object.

**Arguments**

`value` <any> The value to check.

**Returns**

<Boolean> Returns `true` if `value` is a symbol, else `false`.

*from: [lodash](https://lodash.com/docs/4.17.15#isSymbol)*

------

```js
basil.random([min:number=0], [max:number=1], [floating:boolean = false]):number
```

Produces a random number between the inclusive `min` and `max` bounds. If `floating` is `true`, a floating-point number is returned instead of an integer.

**Arguments**

`min` <Number> The inclusive minimum value.
`max` <Number> The inclusive maximum value.
`floating` <Boolean> Whether or not the result should be floating.

**Returns**

<Number> The random value.

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

```Js
basil.slugify(value:String):String
```

Slugifies a String.

**Arguments**

`value` <String> The value to "slugify".

**Returns**

<String> The value "Slugified".

------

```js
basil.uniqId([prefix:String = '']):String
```

Generates a unique ID. If `prefix` is given, the ID is appended to it.

**Arguments**

`[prefix='']` <String> The value to prefix the ID with.

**Returns**

<String> Returns the unique ID.

*from: [lodash](https://lodash.com/docs/4.17.15#uniqId)*

------

```js
basil.uuid():string
```

Generate a universally unique identifier (uuid)

**Returns**

<String> A uuid String



## Plugins
Basil comes at heart with a plugin system allowing to extends its abilities without flooding the codebase. 

- [@spices/basil-i18n)(https://github.com/alexandremasy/spices-basil-i18n)
