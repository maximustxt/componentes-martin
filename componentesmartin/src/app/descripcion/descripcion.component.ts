import { Component } from '@angular/core';
import { faTelevision } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.scss'],
})
export class DescripcionComponent {
  /*---  Array de las imagenes del producto  ---*/

  imagenesProducto: string[] = [
    'https://www.venex.com.ar/products_images/1673351447_odissey-9.png',
    'https://www.venex.com.ar/products_images/1673351447_odissey-7.png',
    'https://www.venex.com.ar/products_images/1673351447_odissey-6.png',
    'https://www.venex.com.ar/products_images/1673351447_odissey-4.png',
    'https://www.venex.com.ar/products_images/1673351447_odissey-3.png',
    'https://www.venex.com.ar/products_images/1673351447_odissey-2.png',
    'https://www.venex.com.ar/products_images/1673351447_odissey-1.png',
    'https://www.venex.com.ar/products_images/1673351447_odissey-8.png',
  ];

  faTelevision = faTelevision;

  /*--- Estado Imagen ---*/

  Imagen: string = '';

  /*---  Funcion para cambiar la imagen que seria el estado  ---*/

  CambioDeImagen(img: string) {
    this.Imagen = img;
  }
}
