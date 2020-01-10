declare module "@capacitor/core" {
  interface PluginRegistry {
    ZxCap: ZxCapPlugin;
  }
}

export interface ZxCapPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
