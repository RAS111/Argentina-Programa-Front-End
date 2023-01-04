import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/service/about.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educations: any;
  constructor(private educationData:AboutService) { }

  ngOnInit(): void {
    this.educationData.getAbout().subscribe(data => {
      this.educations = data.educations;
    });
  }

}
