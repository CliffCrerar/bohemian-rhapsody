/**
 * Sec mod
 */


function baseEncode(str: string): string {
  return Buffer.from(str, 'ascii').toString('base64');
}

function baseDecode(str: string): string {
  return Buffer.from(str, 'base64').toString('ascii');
}


export { baseEncode, baseDecode };

