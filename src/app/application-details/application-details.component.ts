import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicationDetailsService } from './application-details.service';

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.scss'],
})
export class ApplicationDetailsComponent implements OnInit {
  applicationDetails: any;
  constructor(
    private route: ActivatedRoute,
    private service: ApplicationDetailsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params['name']);
      this.getApplicationDetails(params['name']);
    });
  }

  getApplicationDetails(name: string) {
    this.service.getApplicationByName(name).subscribe((res) => {
      this.applicationDetails = res;
    });
  }

  getTags(tags: any) {
    return `${tags['app-name']}, ${tags['environment']}, ${tags['environment']}`;
  }
}
