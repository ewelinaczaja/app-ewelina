import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { FirebaseService } from 'src/app/servizi/firebase.service';
import { ChangeComponent } from '../change/change.component';
import { CaricaComponent } from '../carica/carica.component';
import { ImageService } from 'src/app/shared/image.service';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.css']
})
export class ProfiloComponent implements OnInit {
utenti: any;
imageList!: any[];
rowIndexArray!: any[];

  constructor(private dialog: MatDialog, private firebase:FirebaseService, private service:ImageService) { }

  ngOnInit(): void {
    /*this.firebase.getUtente('https://a-caso-3d8d2-default-rtdb.europe-west1.firebasedatabase.app/utente.json').subscribe((data:any) =>{ console.log(data)
      this.utenti = Object.keys(data).map((key)=>{return data[key]})
      console.log(this.utenti)
    });*/
    this.service.getImageDetailList();
    this.service.imageDetailList.snapshotChanges().subscribe(
      list => {
        this.imageList = list.map(item => { return item.payload.val(); });
        this.rowIndexArray =  Array.from(Array(Math.ceil((this.imageList.length+1) / 3)).keys());
      }
    );
  }



  open(){
    this.dialog.open(ChangeComponent)
  }

  apri(){
    this.dialog.open(CaricaComponent)
  }

}

