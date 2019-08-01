import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { GroceriesServiceService } from '../groceries-service.service';
import { InputDialogService } from '../input-dialog.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  title = "Grocery List";
  items = [];
  errorMessage: string;

  constructor(public navCtrl: NavController, public toastController: ToastController, public socialSharing: SocialSharing, public inputDialogService: InputDialogService, public dataService: GroceriesServiceService, public alertController: AlertController) {
    dataService.dataChanged$.subscribe((dataChanged: boolean) => {
      //this.loadItems();
    })
  }

  ngOnInit() {
    this.dataService.getItems().subscribe(items => {
      this.items = items;
    });
  }

  ionViewDidLoad() {
    //this.loadItems();
  }

  loadItems() {
    this.dataService.getItems();
  }

  async removeItem(item, index) {
    const toast = await this.toastController.create({
      message: 'Removing Item - ' + item.name + '....',
      duration: 3000,
      position: "bottom"
    });
    toast.present();
    this.dataService.removeItem(item._id)
  }

  async shareItem(item, index) {
    const toast = await this.toastController.create({
      message: 'Sharing item - ' + index + ' ... ',
      duration: 2000
    });
    toast.present();

    let message = "Grocery Item - Name: " + item.name + " - Quantity: " + item.quantity;
    let subject = "Shared via Groceries App";
    this.socialSharing.share(message, subject).then(() => {
      // Sharing via email is possible
      console.log("Shared Successfully!")
    }).catch((error) => {
      // Sharing via email is not possible
      console.log("Error while sharing", error);
    });
  }

  async editItem(item, index) {
    const toast = await this.toastController.create({
      message: 'Editing item - ' + index + ' ... ',
      duration: 2000
    });
    toast.present();
    this.inputDialogService.showPrompt(item, index);
  }

  addItem(item) {
    this.inputDialogService.showPrompt();
  }
  
}
