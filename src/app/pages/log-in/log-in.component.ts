import { Component } from '@angular/core';
import { enumType } from 'src/app/shared/components/oauth-button/oauth-button.component';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {

  public onSelectAuth(type : enumType) {

    if (type === 'google') {

    }

    if (type === 'microsoft') {

    }

    if (type === 'apple') {

    }
      
  }

}
