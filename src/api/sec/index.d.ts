/**
 * Sec module
 */

declare module 'sec'{
  function baseEncode(str:string):string;
  function baseDecode(str:string):string;
  export {baseEncode,baseDecode}
}
