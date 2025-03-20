import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { user } from '../../models/user';
import { APIRESPONSE, MasterService } from '../../service/master.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: user = new user();
  masterService = inject(MasterService);
  router = inject(Router);

  onLogin(){
    this.masterService.login(this.loginObj).subscribe((res: APIRESPONSE) => {
      if(res.result){
        localStorage.setItem("incidentUser", JSON.stringify(res.data));
        this.router.navigateByUrl('/dashboard');
      }else{
        alert(res.message);
      }
    });
  }
}
