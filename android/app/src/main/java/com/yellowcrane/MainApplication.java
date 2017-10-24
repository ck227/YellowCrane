package com.yellowcrane;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.imagepicker.ImagePickerPackage;
import com.psykar.cookiemanager.CookieManagerPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

import com.psykar.cookiemanager.CookieManagerPackage;
import com.brentvatne.react.ReactVideoPackage;

public class MainApplication extends Application implements ReactApplication {

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    new ActivityStarterReactPackage(),//这里加是什么干嘛的呢，RN调native界面
                    new LoginHXReactPackage(),//这里加是什么干嘛的呢，RN调native界面
                    new MainReactPackage(),
                    new ReactVideoPackage(),//视频
            new ImagePickerPackage(),//图片选择
            // OR if you want to customize dialog style  // new ImagePickerPackage(R.style.my_dialog_style)

            new CookieManagerPackage()
            );
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);
    }
}
