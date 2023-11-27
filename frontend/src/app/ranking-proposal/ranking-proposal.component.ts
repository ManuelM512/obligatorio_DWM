import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SessionService } from '../session.service';
import { Session } from '../session';
import { ActivityServiceService } from '../activity-service.service';
import { Activity } from '../activity';

@Component({
  selector: 'app-ranking-proposal',
  templateUrl: './ranking-proposal.component.html',
  styleUrls: ['./ranking-proposal.component.css']
})
export class RankingProposalComponent {
  
  ranking? : any[];
  activityFirst? : Activity;
  activitySecond? : Activity;
  activityThird? : Activity;

  constructor(private route: ActivatedRoute,private activityService: ActivityServiceService, private sessionService: SessionService, private router: Router){
  }

  ngOnInit(){
    this.route.params.subscribe(
      (params: Params) => {
        const id = params['sessionId'];
        this.sessionService.getRanking(id).subscribe(
          (res) => {
            this.ranking = res;

            this.activityService.getActivity(this.ranking[0].idAct).subscribe(
              (res) => {
                this.activityFirst = res
              }
            )
            this.activityService.getActivity(this.ranking[1].idAct).subscribe(
              (res) => {
                this.activitySecond = res
              }
            )
            this.activityService.getActivity(this.ranking[2].idAct).subscribe(
              (res) => {
                this.activityThird = res
              }
            )
          }
        )
      });
  }

  exit(){
    this.router.navigate(['/select-proposal']);
  }
}
