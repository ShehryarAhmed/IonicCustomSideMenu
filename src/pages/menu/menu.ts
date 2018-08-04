import { Component, ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

// export interface PageInterface {
//   title: string;
//   pageName: string;
//   tabComponent?: any;
//   index?: number;
//   icon: string;
// }

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  // Basic root for our content view
  rootPage = 'HomePage';

  // Reference to the app's root nav
  @ViewChild(Nav) nav: Nav;
  // homePage: any;

  pages : any[];
  constructor(public navCtrl: NavController, public navParams: NavParams) { 
    this.pages = [{title:"HOME"},{title:"CONTACT"},{title:"HOME"},{title:"CONTACT"}];

  }

  openPage(page){
    console.log("start")

    if(page.title=="HOME"){
      console.log("Home")    
      this.navCtrl.push('HomePage');
    }

    if(page.title=="CONTACT"){
      console.log("Contact")          
      this.navCtrl.push('ContactPage');
    }
   }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
