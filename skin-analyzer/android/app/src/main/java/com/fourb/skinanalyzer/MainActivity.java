package com.fourb.skinanalyzer;
import android.app.Activity;
import android.os.Bundle;
import android.content.Intent;
import android.net.Uri;
import android.print.PrintManager;
import android.content.Context;
import android.util.Base64;
import java.io.OutputStream;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import android.webkit.WebChromeClient;
import android.webkit.WebViewClient;
import android.webkit.WebSettings;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import androidx.webkit.WebViewAssetLoader;
import androidx.webkit.WebViewClientCompat;
import android.webkit.PermissionRequest;
import android.webkit.ValueCallback;
import android.view.WindowManager;
import android.widget.Toast;

public class MainActivity extends Activity {
  private static final int PICK=4164, SAVE=4165;
  private WebView web;
  private ValueCallback<Uri[]> fileCallback;
  private byte[] pendingData;
  @Override public void onCreate(Bundle state){
    super.onCreate(state);
    getWindow().setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_ADJUST_RESIZE);
    web=new WebView(this);
    setContentView(web);
    WebSettings s=web.getSettings();
    s.setJavaScriptEnabled(true);
    s.setAllowFileAccess(false);
    s.setAllowContentAccess(true);
    s.setAllowFileAccessFromFileURLs(false);
    s.setAllowUniversalAccessFromFileURLs(false);
    s.setDomStorageEnabled(false);
    s.setBlockNetworkLoads(false);
    s.setCacheMode(WebSettings.LOAD_DEFAULT);
    s.setMixedContentMode(WebSettings.MIXED_CONTENT_NEVER_ALLOW);
    s.setDefaultTextEncodingName("UTF-8");
    final WebViewAssetLoader loader=new WebViewAssetLoader.Builder()
        .addPathHandler("/assets/",new WebViewAssetLoader.AssetsPathHandler(this)).build();
    web.setWebViewClient(new WebViewClientCompat(){
      @Override public WebResourceResponse shouldInterceptRequest(WebView v,WebResourceRequest req){
        String url=req.getUrl().toString();
        if(url.startsWith("https://appassets.androidplatform.net/assets/") && url.endsWith(".mjs")){
          try {
            return new WebResourceResponse("text/javascript","UTF-8",
                getAssets().open("mediapipe/vision_bundle.mjs"));
          }catch(java.io.IOException e){return null;}
        }
        return loader.shouldInterceptRequest(req.getUrl());
      }
      @Override public boolean shouldOverrideUrlLoading(WebView v,WebResourceRequest req){
        return !req.getUrl().toString().startsWith("https://appassets.androidplatform.net/assets/");
      }
    });
    web.setWebChromeClient(new WebChromeClient(){
      @Override public boolean onShowFileChooser(WebView v,ValueCallback<Uri[]> cb,FileChooserParams params){
        if(fileCallback!=null)fileCallback.onReceiveValue(null);
        fileCallback=cb;
        try{
          Intent in=params.createIntent();in.setType("image/*");
          startActivityForResult(in,PICK);return true;
        }catch(Exception e){fileCallback=null;return false;}
      }
      @Override public void onPermissionRequest(PermissionRequest r){r.deny();}
    });
    web.addJavascriptInterface(new Bridge(),"AndroidBridge");
    web.loadUrl("https://appassets.androidplatform.net/assets/app.html");
  }
  public class Bridge{
    @JavascriptInterface public void saveFile(String name,String mime,String encoded){
      try{
        if(encoded.length()>20000000)return;
        final byte[] data=Base64.decode(encoded,Base64.DEFAULT);
        runOnUiThread(()->{
          pendingData=data;
          Intent in=new Intent(Intent.ACTION_CREATE_DOCUMENT);
          in.addCategory(Intent.CATEGORY_OPENABLE);
          in.setType(mime);
          in.putExtra(Intent.EXTRA_TITLE,name.replaceAll("[/\\\\]","_"));
          startActivityForResult(in,SAVE);
        });
      }catch(Exception e){runOnUiThread(()->Toast.makeText(MainActivity.this,"ذخیره ناموفق",Toast.LENGTH_SHORT).show());}
    }
    @JavascriptInterface public void printReport(){
      runOnUiThread(()->{
        try{
          PrintManager pm=(PrintManager)getSystemService(Context.PRINT_SERVICE);
          pm.print("4B-Skin-Report",web.createPrintDocumentAdapter("4B-Skin-Report"),null);
        }catch(Exception e){Toast.makeText(MainActivity.this,"امکان چاپ نیست",Toast.LENGTH_SHORT).show();}
      });
    }
  }
  @Override protected void onActivityResult(int request,int result,Intent data){
    super.onActivityResult(request,result,data);
    if(request==SAVE){
      if(result==RESULT_OK && data!=null && data.getData()!=null && pendingData!=null){
        try(OutputStream out=getContentResolver().openOutputStream(data.getData())){
          if(out!=null){out.write(pendingData);out.flush();}
        }catch(Exception e){Toast.makeText(this,"خطای ذخیره",Toast.LENGTH_LONG).show();}
      }
      pendingData=null;return;
    }
    if(request==PICK&&fileCallback!=null){
      Uri[] values=result==RESULT_OK?WebChromeClient.FileChooserParams.parseResult(result,data):null;
      fileCallback.onReceiveValue(values);fileCallback=null;
    }
  }
  @Override public void onBackPressed(){if(web!=null&&web.canGoBack())web.goBack();else super.onBackPressed();}
  @Override protected void onDestroy(){
    if(fileCallback!=null){fileCallback.onReceiveValue(null);fileCallback=null;}
    if(web!=null){web.removeJavascriptInterface("AndroidBridge");web.destroy();web=null;}
    super.onDestroy();
  }
}
