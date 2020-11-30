import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from "@angular/material/icon";

const googleLogoURL = 
"https://raw.githubusercontent.com/fireflysemantics/logo/master/Google.svg";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  constructor(
    public auth:AuthService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    ) { 
      this.matIconRegistry.addSvgIcon(
        "logo",
        this.domSanitizer.bypassSecurityTrustResourceUrl(googleLogoURL));
    }

  ngOnInit(): void {
  }

}
