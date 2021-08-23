import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  
  email: string;
  user: User;
  
  constructor(private authService:AuthService,
    private toastrService:ToastrService,
    private router:Router,
    private localStorage: LocalStorageService,
    private userService: UserService) { }

  ngOnInit(): void {

    this.getUserInfo();
  }

  isLogged(){
    return this.authService.isAuthenticated();
  }

  logOut(){
    this.localStorage.clean();
    this.toastrService.success("Görüşürüz bro");
  }

  getUserInfo(){

    this.email = this.localStorage.get("email")
      this.userService.getByEmail(this.email).subscribe(response=>{
        this.user = response.data;
      })

  }
}
