 // import { Component, OnInit } from '@angular/core';
// import {
//   FormBuilder,
//   FormGroup,
//   Validators,
//   FormControl,
// } from '@angular/forms';
// import { Router } from '@angular/router';
// import { AuthService } from '../auth.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css'],
// })
// export class LoginComponent implements OnInit {
//   isSubmitted: boolean = false;
//   isValidUser: boolean = false;
//   form: FormGroup = new FormGroup({});

//   constructor(
//     private fb: FormBuilder,
//     private router: Router,
//     private authService: AuthService
//   ) {}

//   ngOnInit() {
//     this.form = this.fb.group({
//       email: new FormControl('', [Validators.required, Validators.email]),
//       password: new FormControl('', [Validators.required]),
//     });
//   }

//   onSubmit() {
//     this.authService
//       .login(this.form.value.email, this.form.value.password)
//       .subscribe((data) => {
//         if (data) {
//           this.router.navigate(['/deals']);  // If valid and route to card
//         }
//         this.isSubmitted = true;
//         this.isValidUser = data; // false show error message
//       });
//   }
// }
import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserService } from '../user.service';




//npm install sweetalert2
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public loginForm!:FormGroup
//Authenticate user details from userapi
userapi=environment.userapi;

submitted = false;
get f() { return this.loginForm.controls; }
//constructor injection
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router,
    private userService: UserService) { }

  ngOnInit(): void {
    this.userService.validateAuth(false); //data parameter in your userservice
    this.loginForm = this.formBuilder.group({
      useremail: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
        });
  }
  login(){
    this.submitted = true;
    if (this.loginForm.invalid) {
      return ;
    }
    this.http.get<any>(this.userapi)
    .subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.useremail === this.loginForm.value.useremail && a.password=== this.loginForm.value.password
      });
      if(user){
        const Toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        })
    
        Toast.fire({
          icon: 'success',
          title: 'Login Successful'
        })
        this.loginForm.reset();
        this.router.navigate([''])
        this.userService.validateAuth(true);
      }else{
        alert("user not found !!");       
        this.userService.validateAuth(false);
      }
    })
  }
}