package com.yellowcrane;

import android.app.Activity;
import android.app.ProgressDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.text.TextUtils;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.hyphenate.EMCallBack;
import com.hyphenate.chat.EMClient;
import com.hyphenate.chatuidemo.DemoApplication;
import com.hyphenate.chatuidemo.DemoHelper;
import com.hyphenate.chatuidemo.db.DemoDBManager;
import com.hyphenate.chatuidemo.ui.*;
import com.hyphenate.easeui.utils.EaseCommonUtils;

import static com.facebook.react.bridge.UiThreadUtil.runOnUiThread;

/**
 * Created by cnbs5 on 2017/10/12.
 */

public class LoginHXModule extends ReactContextBaseJavaModule {

    private static DeviceEventManagerModule.RCTDeviceEventEmitter eventEmitter = null;

    LoginHXModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public void initialize() {
        super.initialize();
        eventEmitter = getReactApplicationContext().getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class);
    }

    @Override
    public String getName() {
        return "LoginHX";
    }

    @ReactMethod
    void Login2HX(String userName, String passWord) {
        Toast.makeText(getReactApplicationContext(), "开始登录啦", Toast.LENGTH_SHORT).show();

        // After logout，the DemoDB may still be accessed due to async callback, so the DemoDB will be re-opened again.
        // close it before login to make sure DemoDB not overlap
        DemoDBManager.getInstance().closeDB();

        // reset current user name before login
        DemoHelper.getInstance().setCurrentUserName(userName);

        final long start = System.currentTimeMillis();
        // call login method

        EMClient.getInstance().login(userName, passWord, new EMCallBack() {

            @Override
            public void onSuccess() {
                Toast.makeText(getReactApplicationContext(), "登录聊天成功", Toast.LENGTH_SHORT).show();
                // ** manually load all local groups and conversation
                EMClient.getInstance().groupManager().loadAllGroups();
                EMClient.getInstance().chatManager().loadAllConversations();

                // update current user's display name for APNs
                boolean updatenick = EMClient.getInstance().pushManager().updatePushNickname(
                        DemoApplication.currentUserNick.trim());
                if (!updatenick) {
                    Log.e("LoginActivity", "update current user nick fail");
                }
                // get user's info (this should be get from App's server or 3rd party service)
                DemoHelper.getInstance().getUserProfileManager().asyncGetCurrentUserInfo();
//                Toast.makeText()
            }

            @Override
            public void onProgress(int progress, String status) {
//                Log.d(TAG, "login: onProgress");
            }

            @Override
            public void onError(final int code, final String message) {
//                Log.d(TAG, "login: onError: " + code);
                Toast.makeText(getReactApplicationContext(), "登录聊天失败" + message, Toast.LENGTH_SHORT).show();

                runOnUiThread(new Runnable() {
                    public void run() {
//                        Toast.makeText(getApplicationContext(), getString(R.string.Login_failed) + message,
//                                Toast.LENGTH_SHORT).show();
                    }
                });
            }
        });
    }

}
