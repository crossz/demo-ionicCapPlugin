declare module "@capacitor/core" {
  interface PluginRegistry {
    ZxCapPlugin: ZxCapPluginPlugin;
  }
}

export interface ZxCapPluginPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
  jump(options: { value: string }): Promise<{value: string}>;
}
