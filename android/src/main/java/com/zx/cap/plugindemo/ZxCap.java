package com.zx.cap.plugindemo;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

@NativePlugin()
public class ZxCap extends Plugin {

    @PluginMethod()
    public void echo(PluginCall call) {
        String value = call.getString("value");


        System.out.println("----------------================----------------");

        
        JSObject ret = new JSObject();
        ret.put("value", value+value+value);
        call.success(ret);
    }
}
