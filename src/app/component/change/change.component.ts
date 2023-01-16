import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,NgForm } from '@angular/forms';
import { FirebaseService } from 'src/app/servizi/firebase.service';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css']
})
export class ChangeComponent implements OnInit {
  profiloform!: FormGroup;

  constructor(private firebase: FirebaseService) { }

  ngOnInit(): void {
  this.profiloform = new FormGroup({
  nome: new FormControl(null, Validators.required),
  cognome: new FormControl(null, Validators.required),
  avatar: new FormControl(null, Validators.required),
});


  }

  onSubmit() {
    console.log(this.profiloform);
    this.firebase.insertUtente('https://a-caso-3d8d2-default-rtdb.europe-west1.firebasedatabase.app/utente.json',
    {nome: this.profiloform.value.nome, cognome:this.profiloform.value.cognome, avatar:this.profiloform.value.avatar}
    ).subscribe((data) => {
      console.log(data);
    });
  }

}
