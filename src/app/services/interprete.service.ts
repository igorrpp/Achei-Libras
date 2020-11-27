import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, from, observable } from 'rxjs';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AngularFireStorage } from '@angular/fire/storage';
import { UtilService } from './ultil.service';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { File } from '@ionic-native/file/ngx';

@Injectable({
  providedIn: 'root',
})
export class InterpreteService {


  fotoBlob: any = null;

  collection: string = 'Cadastros_de_interpretes';
  interpretes: Observable<any[]>;

  constructor(private http: HttpClient,
    private firestore: AngularFirestore,
    private camera: Camera,
    private util: UtilService,
    private fireStorage: AngularFireStorage,
    private fileChooser: FileChooser,
    private file: File,
    private webview: WebView,
  ) { }


  listar(): Observable<any> {
    return this.firestore.collection(this.collection).snapshotChanges();
  }

  buscaPorId(id: string): Observable<any> {
    return this.firestore.collection
      (this.collection).doc(id).snapshotChanges();
  }

  
  atualizar(id: string, dados: any): Observable<any> {
    const observable =
      from(this.firestore.collection('Cadastros_de_interpretes').doc(id).set(dados));
    return observable;
  }

  excluir(id: string): Observable<any> {
    const observable =
      from(this.firestore.collection('Cadastros_de_interpretes').doc(`${id}`).delete());
    return observable;
  }


  obterFotoCamera = new Observable((observe) => {

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    }

    this.camera.getPicture(options).then(imageData => {
      this.fotoBlob = 'data:image/jpeg;base64,' + imageData;
      observe.next('data:image/jpeg;base64,' + imageData);
    }, (err) => {
      observe.error(err);
    })
  });
  obterFotoArquivo = new Observable((observe) => {
    this.fileChooser.open({ "mime": "image/jpeg" }).then(uri => {


      this.file.resolveLocalFilesystemUrl(uri).then((data: any) => {

        observe.next(this.webview.convertFileSrc(data.nativeURL));

        //ler o arquivo a partir da uri gerado pelo resolveLocalFilesystemUrl

        data.file(file => {
          var reader = new FileReader();
          reader.onloadend = (encodeFile: any) => {
            var fileFinal = encodeFile.target.result;
            this.fotoBlob = fileFinal;
            // this.fotoBlob = this.util.dataUriToBlob(fileFinal);

          }
          reader.readAsDataURL(file);
        });
        // fim ler arquivo

      }).catch(e => observe.next(e));
    })
  })

  uploadFoto(nome): Observable<any> {

    let fotoBlob = this.util.dataUriToBlob(this.fotoBlob);
    let observable = from(
      this.fireStorage.storage.ref().child(`/Cadastros_de_interpretes/${nome}.jpg`).put(fotoBlob));
    return observable;
  }


}