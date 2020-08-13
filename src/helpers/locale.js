
/**
 * ISO639 is about the languages codes.
 * Expressed usually in two or three characters.
 * @see https://www.loc.gov/standards/iso639-2/php/English_list.php
 */
const ISO639_2 = 'ISO639-2'; // en
const ISO639_3 = 'ISO639-3'; // eng

/**
 * ISO3166 is about the country codes.
 * Expressed usually in two or three characters.
 * @see https://www.iso.org/obp/ui#iso:pub:PUB500001:en
 */
const ISO3166_2 = 'ISO3166-2'; // us
const ISO3166_3 = 'ISO3166-3'; // usa

/**
 * The combinations of the two sets is described in 
 * the RFC 5646 from the IETF
 * @see https://tools.ietf.org/html/rfc5646
 */

/**
 * Locale
 * 
 * @class
 */
export default class Locale {

  /**
   * @constructor
   * @param {String} value 
   */
  constructor( value ) {
    this.value = value;

    let parts = this.value.split(/[-_]/);
    this._lang = new Lang(parts[0]);
    this._country = new Country(parts[1]);
  }

  /**
   * The country associated with the current locale
   * 
   * @readonly
   * @property {String}
   */
  get country(){
    return this._country.alpha2;
  }
  
  /**
   * The lang associated with the current locale
   * 
   * @readonly
   * @property {String}
   */
  get lang(){
    return this._lang.alpha2;
  }

  /**
   * The iso version of the locale
   * 
   * @readonly
   * @property {String}
   */
  get langtag(){
    return [this.lang, this.country].filter(l => l !== null ).join('-');
  }

  get iso() {
    return [this.lang, this.country.toUpperCase()].filter(l => l !== null ).join('_');
  }
}

class Lang{
  /**
   * @constructor
   * @param {String} value The language code
   */
  constructor(value){
    this._value = value;
  }

  /**
   * Return the alpha 2 version
   * 
   * @property {String}
   * @readonly
   */
  get alpha2(){
    return this._value || null;
  }

  /**
   * The String representation
   * 
   * @property {String}
   * @readonly
   */
  toString(){
    return this.alpha2;
  }
}

class Country{

  /**
   * @constructor 
   * @param {String} value 
   */
  constructor(value){
    this._value = value;
  }

  /**
   * Return the alpha 2 version
   * 
   * @property {String}
   * @readonly
   */
  get alpha2() {
    return this._value || null;
  }

  /**
   * The String representation
   * 
   * @property {String}
   * @readonly
   */
  toString() {
    return this.alpha2;
  }
}
