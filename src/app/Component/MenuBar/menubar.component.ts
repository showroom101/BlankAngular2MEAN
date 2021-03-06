import { Component } from '@angular/core';
import { MenubarService } from './menubar.service';
@Component({
    selector : 'menu-bar',
    templateUrl : './menubar.component.html',
    styleUrls : ['./menubar.component.css'] ,
    providers : [MenubarService]
})

export class Menubar{
    itemData : any;
    constructor(private menubarService : MenubarService){
        this.itemData = menubarService.menuItem;
        console.log(this.itemData);
    }
}