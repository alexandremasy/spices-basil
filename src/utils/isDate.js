import getTag from './internal/getTag'

/**
 * Check if `value` is of type `Date`
 * 
 * @param {*} value The value to check
 * @return {boolean}
 * @source lodash.com
 */
export default (value) => typeof value === 'object' && value !== null && getTag(value) == '[object Date]'
