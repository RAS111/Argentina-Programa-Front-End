import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/service/about.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experiences:any;
  constructor(private experienceData:AboutService) { }

  ngOnInit(): void {
    this.experienceData.getAbout().subscribe(data => {
      this.experiences = data.experiences;
    });
  }

}
