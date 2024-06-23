import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../angular-material/material/material.module';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, MaterialModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private router: Router, 
    private route: ActivatedRoute,
    private authService: AuthService
  ){

  }

  salir(): void{
    this.authService.logout();
    this.router.navigateByUrl("/login")
  }


  irHome():void{
    this.router.navigate(["home"], {relativeTo: this.route})
  }
  irEscuela():void{
    this.router.navigate(["escuela"], {relativeTo: this.route})
  }
  irtrabajador():void{
    this.router.navigate(["trabajador"], {relativeTo: this.route})
  }
  irtrafico():void{
    this.router.navigate(["trafico"], {relativeTo: this.route})
  }
}


