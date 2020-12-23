import { Component, OnInit } from '@angular/core';

declare var module: {
  id: string;
}
@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{
   title:String;
   type:String;
   data:any;
   options:any;
   height:any;
   width:any;


    ngOnInit(){
    this.title = 'Intensity vs Wavelength';
    this.type = 'LineChart';
    this.data = [
      ["100",  .100, .102],
      ["200",  .189, .170],
      ["300",  .109,  .105],
      ["400",  .107, .104],
      ["500",  .108, .105],
      ["600",  .109, .107],
      ["700",  .110, .108],
      ["800",  .300, .196],
      ["900",  .111, .109],
      ["1000", .112, .108],
      ["1100",  .113,  .106],
      ["1200",  .111,  .105]
   ];
     this.options = {   
      hAxis: {
         title: 'Wavelength (cm-1)'
      },
      vAxis:{
         title: 'Intensity (a_u)'
      },
   };
   this.width = 750;
   this.height =800;
    
}
}

