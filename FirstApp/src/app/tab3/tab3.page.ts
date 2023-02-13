import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['diseño.css']
})
export class Tab3Page {

  constructor( private alertController: AlertController) {}
  

  async presentAlert() {
    const alert = await this.alertController.create({
      
      header: 'Rellene la informacion',
      buttons: ['OK'],
      inputs: [
        {
          placeholder: 'Nombre',
        },
        {
          placeholder: 'Apellido (max 8 caracteres)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          type: 'number',
          placeholder: 'año',
          min: 1,
          max: 100,
        },
        {
          type: 'textarea',
          placeholder: 'Su vida <3',
        },
      ],
    });

    await alert.present();
  }

}
