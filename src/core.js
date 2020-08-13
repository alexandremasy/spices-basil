import debounce from './utils/debounce'
import delay from './utils/delay'
import sequence from './utils/sequence'

import isArray from './utils/isArray'
import isBoolean from './utils/isBoolean'
import isEmpty from './utils/isEmpty'
import isFunction from './utils/isFunction'
import isNumber from './utils/isNumber'
import isObject from './utils/isObject'
import isString from './utils/isString'

import random from './utils/random'

import slugify from './utils/slugify'
import uniqId from './utils/uniqId'
import uuid from './utils/uuid'

const core = {
  debounce,
  delay,
  sequence,
  
  isArray,
  isBoolean,
  isEmpty,
  isFunction,
  isNumber,
  isObject,
  isString,

  random,

  slugify,
  uniqId,
  uuid
}

export default core
