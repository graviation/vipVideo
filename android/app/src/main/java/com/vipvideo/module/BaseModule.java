package com.vipvideo.module;

import android.content.Intent;
import android.provider.Settings;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * 一些基本操作
 */
public class BaseModule extends ReactContextBaseJavaModule {

    public BaseModule(@NonNull ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "BaseModule";
    }

    @ReactMethod
    public void openSettings() {
        getCurrentActivity().startActivity(new Intent(Settings.ACTION_SETTINGS));
    }
}
