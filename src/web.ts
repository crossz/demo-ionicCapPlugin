import { WebPlugin } from '@capacitor/core';
import { ZxCapPlugin } from './definitions';

export class ZxCapWeb extends WebPlugin implements ZxCapPlugin {
  constructor() {
    super({
      name: 'ZxCap',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const ZxCap = new ZxCapWeb();

export { ZxCap };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(ZxCap);
