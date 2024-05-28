import { Convert } from './types/convert';
import { defaultOptions } from './utils/defaultOptions';
import { pdf2picCore } from './pdf2picCore';

export function fromPath(filePath: string, options = defaultOptions, gmPath?: string): Convert {
  return pdf2picCore('path', filePath, options, gmPath);
}

export function fromBuffer(buffer: Buffer, options = defaultOptions, gmPath?: string): Convert {
  return pdf2picCore('buffer', buffer, options, gmPath);
}

export function fromBase64(b64string: string, options = defaultOptions, gmPath?: string): Convert {
  return pdf2picCore('base64', b64string, options, gmPath);
}
