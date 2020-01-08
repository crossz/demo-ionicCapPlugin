import { WebPlugin } from '@capacitor/core';
import { ZxCapPluginPlugin } from './definitions';

export class ZxCapPluginWeb extends WebPlugin implements ZxCapPluginPlugin {
  constructor() {
    super({
      name: 'ZxCapPlugin',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const ZxCapPlugin = new ZxCapPluginWeb();

export { ZxCapPlugin };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(ZxCapPlugin);
