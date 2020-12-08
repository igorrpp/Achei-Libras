import { Component, OnInit } from '@angular/core';
import{
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  BaseArrayClass, ILatLng
} from '@ionic-native/google-maps';
import { Platform } from '@ionic/angular';
import {Geolocation} from '@ionic-native/geolocation/ngx';



@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  map : GoogleMap;

  constructor(private paltform: Platform) { }

  async ngOnInit() {
    await this.paltform.ready();
    await this.loadMap();
  }

  loadMap(){
    let POINTS : BaseArrayClass<any> = new BaseArrayClass<any>([
      {
        position: {lat:-22.862787, lng:-43.783526},
        title: "Trabalho do Igor",
        icondata: "blue"
      },
      {
        position: {lat:-22.899937, lng:-43.558070},
        title: "Senac, Campo Grande",
        
      }

    ])

    let bounds: ILatLng[] = POINTS.map((data: any, idx: number)=>{
      return data.position;

    });

    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: bounds
    }
  });

  POINTS.forEach((data: any) =>{
    let marker: Marker = this.map.addMarkerSync(data);
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(this.onMarkerCLick);

    });

  }

  onMarkerCLick(params: any){
    let marker: Marker = <Marker>params[1];
    let iconData: any = marker.get('iconData');
    marker.setIcon(iconData);
  }
}
