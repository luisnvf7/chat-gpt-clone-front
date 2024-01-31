import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialButtonComponent } from './components/initial-button/initial-button.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { OauthButtonComponent } from './components/oauth-button/oauth-button.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MessagesContainerComponent } from './components/messages-container/messages-container.component';
import {MatIconModule} from '@angular/material/icon';
import { MessagesHistoryComponent } from './components/messages-history/messages-history.component';
import { ChatInputComponent } from './components/chat-input/chat-input.component';


@NgModule({
  declarations: [InitialButtonComponent, OauthButtonComponent, SideMenuComponent, MessagesContainerComponent, MessagesHistoryComponent, ChatInputComponent, ],
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatIconModule],
  exports: [
    InitialButtonComponent,
    OauthButtonComponent,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    SideMenuComponent,
    MessagesContainerComponent,
    MatIconModule,
    MessagesHistoryComponent,
    ChatInputComponent
  ],
})
export class SharedModule {}
