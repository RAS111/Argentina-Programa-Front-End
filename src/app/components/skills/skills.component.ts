import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/service/about.service';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills:any;
  constructor(private skillsData:AboutService) { }

  ngOnInit(): void {
    this.skillsData.getAbout().subscribe(data => {
      console.log(data.skills)
      this.skills = data.skills;
    });
  }

}
