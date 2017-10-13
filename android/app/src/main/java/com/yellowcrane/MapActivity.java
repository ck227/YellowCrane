package com.yellowcrane;

import android.Manifest;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.os.Environment;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.widget.ImageView;
import android.widget.Toast;

import com.esri.arcgisruntime.loadable.LoadStatus;
import com.esri.arcgisruntime.mapping.MobileMapPackage;
import com.esri.arcgisruntime.mapping.view.MapView;
import com.facebook.react.ReactActivity;

import java.io.File;

/**
 * Created by cnbs5 on 2017/10/12.
 */

public class MapActivity extends ReactActivity {

    private static final String TAG = "MMPK";
    private static final String FILE_EXTENSION = ".mmpk";
    private static File extStorDir;
    private static String extSDCardDirName;
    private static String filename;
    private static String mmpkFilePath;
    private MapView mMapView;
    private MobileMapPackage mapPackage;

    private ImageView left;

    String[] reqPermission = new String[]{Manifest.permission.WRITE_EXTERNAL_STORAGE};
    private int requestCode = 2;

    private static String createMobileMapPackageFilePath() {
        return extStorDir.getAbsolutePath() + File.separator + extSDCardDirName + File.separator + filename + FILE_EXTENSION;
    }

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_map);

        // get sdcard resource name
        extStorDir = Environment.getExternalStorageDirectory();
        // get the directory
        extSDCardDirName = this.getResources().getString(R.string.config_data_sdcard_offline_dir);
        // get mobile map package filename
        filename = this.getResources().getString(R.string.config_mmpk_name);
        // create the full path to the mobile map package file
        mmpkFilePath = createMobileMapPackageFilePath();

        // retrieve the MapView from layout
        mMapView = (MapView) findViewById(R.id.mapView);
        left = (ImageView) findViewById(R.id.left);
        left.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                finish();
            }
        });

        // For API level 23+ request permission at runtime
        if (ContextCompat.checkSelfPermission(MapActivity.this, reqPermission[0]) == PackageManager.PERMISSION_GRANTED) {
            loadMobileMapPackage(mmpkFilePath);
        } else {
            // request permission
            ActivityCompat.requestPermissions(MapActivity.this, reqPermission, requestCode);
        }
    }

    /**
     * Handle the permissions request response
     */
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
            loadMobileMapPackage(mmpkFilePath);
        } else {
            // report to user that permission was denied
            Toast.makeText(MapActivity.this, getResources().getString(R.string.location_permission_denied),
                    Toast.LENGTH_SHORT).show();
        }
    }

    /**
     * Load a mobile map package into a MapView
     *
     * @param mmpkFile Full path to mmpk file
     */
    private void loadMobileMapPackage(String mmpkFile) {
        //[DocRef: Name=Open Mobile Map Package-android, Category=Work with maps, Topic=Create an offline map]
        // create the mobile map package
        mapPackage = new MobileMapPackage(mmpkFile);
        // load the mobile map package asynchronously
        mapPackage.loadAsync();

        // add done listener which will invoke when mobile map package has loaded
        mapPackage.addDoneLoadingListener(new Runnable() {
            @Override
            public void run() {
                // check load status and that the mobile map package has maps
                if (mapPackage.getLoadStatus() == LoadStatus.LOADED && mapPackage.getMaps().size() > 0) {
                    // add the map from the mobile map package to the MapView
                    mMapView.setMap(mapPackage.getMaps().get(0));
                } else {
                    // Log an issue if the mobile map package fails to load
                    Log.e(TAG, mapPackage.getLoadError().getMessage());
                }
            }
        });
        //[DocRef: END]
    }

    @Override
    protected void onPause() {
        super.onPause();
        mMapView.pause();
    }

    @Override
    protected void onResume() {
        super.onResume();
        mMapView.resume();
    }
}
