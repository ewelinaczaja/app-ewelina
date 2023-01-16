import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  onSubmitReg(form: NgForm){
    const email = form.value.email
    const password = form.value.password
    this.authService.signUp(email, password).subscribe(data => {console.log(data)})
    form.reset()
  }

  onSubmitSig(form: NgForm){
    const email = form.value.email
    const password = form.value.password
    this.authService.signIn(email, password).subscribe((data: any) => {
      console.log(data)

      const expirationDate = new Date(new Date().getTime()+ data.expiresIn *1000)
    this.authService.createUser(data.email, data.localId, data.idToken, data.expirationDate)
      localStorage.setItem('user',JSON.stringify(this.authService.user))
    })
    form.reset()
  }
}

