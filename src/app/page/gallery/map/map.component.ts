import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';

import { MapService } from './map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
// implements OnInit {
    texto : string = 'Lost & Found Pets On The Map';
    lat: number = 49.4326192;
    lng: number = 32.0799393;
    // zoom: number = 15;
    // lat: number = 49.42699391867276;
    // lng: number = 32.05640391208823
    zoom: number = 10;

  // initial center position for the map
  // lat: number = 51.673858;
  // lng: number = 7.815982;

    clickedMarker(label: string, index: number) {
      console.log(`clicked the marker: ${label || index}`)
    }

    mapClicked($event: MouseEvent) {
      this.markers.push({
        lat: $event.coords.lat,
        lng: $event.coords.lng,
        draggable: true
      });
    }

    markerDragEnd(m: marker, $event: MouseEvent) {
      console.log('dragEnd', m, $event);
    }


    markers: marker[] = [
      {
        lat: 49.42875531796478,
        lng: 32.01087486236736,
        label: 'L',
        draggable: true
      },
      {
        lat: 49.42938896845455,
        lng: 32.06854503924069,
        label: 'F',
        draggable: false
      },
      {
        lat: 49.400736197500116,
        lng: 32.068210083796885,
        label: 'F',
        draggable: true
      }
    ]
  }

  // just an interface for type safety.
  interface marker {
    lat: number;
    lng: number;
    label?: string;
    draggable: boolean;
  }

  //  findMe() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       this.showPosition(position);
  //     });
  //   } else {
  //     alert("Geolocation is not supported by this browser.");
  //   }

  //   trackMe() {
  //     if (navigator.geolocation) {
  //       this.isTracking = true;
  //       navigator.geolocation.watchPosition((position) => {
  //         this.showTrackingPosition(position);
  //       });
  //     } else {
  //       alert("Geolocation is not supported by this browser.");
  //     }
  //   }
  //   showPosition(position) {
  //     this.currentLat = position.coords.latitude;
  //     this.currentLong = position.coords.longitude;

  //     let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  //     this.map.panTo(location);

  //     if (!this.marker) {
  //       this.marker = new google.maps.Marker({
  //         position: location,
  //         map: this.map,
  //         title: 'Got you!'
  //       });
  //     }
  //     else {
  //       this.marker.setPosition(location);
  //     }
  //   }

  //   showTrackingPosition(position) {
  //     console.log(`tracking postion:  ${position.coords.latitude} - ${position.coords.longitude}`);
  //     this.currentLat = position.coords.latitude;
  //     this.currentLong = position.coords.longitude;

  //     let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  //     this.map.panTo(location);

  //     if (!this.marker) {
  //       this.marker = new google.maps.Marker({
  //         position: location,
  //         map: this.map,
  //         title: 'Got you!'
  //       });
  //     }
  //     else {
  //       this.marker.setPosition(location);
  //     }
  //   }
  // }
  // constructor() { }

  // ngOnInit() {
  // }

  // AIzaSyCu-2LOcMcWdwDtBtzbNDClATeXvAmi7O0
  // let map;

  // // Функция initMap которая отрисует карту на странице
  // function initMap() {

  //     // В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <div id="map"></div>
  //     map = new google.maps.Map(document.getElementById('map'), {
  //         // При создании объекта карты необходимо указать его свойства
  //         // center - определяем точку на которой карта будет центрироваться
  //         center: {lat: -34.397, lng: 150.644},
  //         // zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
  //         zoom: 8
  //     });
  // }
// }

