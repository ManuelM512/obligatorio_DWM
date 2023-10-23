import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SelectProposalComponent } from './select-proposal/select-proposal.component';
import { CreateProposalComponent } from './create-proposal/create-proposal.component';
import { ProposalLobbyComponent } from './proposal-lobby/proposal-lobby.component';
import { ShowProposalComponent } from './show-proposal/show-proposal.component';
import { RankingProposalComponent } from './ranking-proposal/ranking-proposal.component';
import { SelectGuestNicknameComponent } from './select-guest-nickname/select-guest-nickname.component';
import { GuestWaitComponent } from './guest-wait/guest-wait.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SelectProposalComponent,
    CreateProposalComponent,
    ProposalLobbyComponent,
    ShowProposalComponent,
    RankingProposalComponent,
    SelectGuestNicknameComponent,
    GuestWaitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
