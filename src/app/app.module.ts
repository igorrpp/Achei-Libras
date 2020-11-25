import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule} from '@angular/fire'
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { Camera} from '@ionic-native/camera/ngx';
import { UtilService } from './services/ultil.service';
import { AngularFireStorageModule} from '@angular/fire/storage';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { File } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AngularFireAuth} from '@angular/fire/auth';
import { FormBuilder, FormControl } from '@angular/forms';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    
    
    
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    UtilService,
    FileChooser,
    File,
    WebView,
    Geolocation,
    AngularFireAuth,
    

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
