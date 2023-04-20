import { Component } from '@angular/core';
import { ProjectService } from 'src/app/Services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private projectService: ProjectService) {}
  title: string = "Hello JavaTpoint";
  description: string = "mini description";
  live_link: string = "test";
  github: string = "dsadas";
  image: any;

  projects = this.projectService.projects;

  OnSubmit(projectId:any, title:any, description:any, live_link:any, github:any) {
    console.log(projectId);
    if (this.image) {
      let File_type = this.image.target.files[0].type;
      if (File_type.match(/image\/*/)) {
        let reader = new FileReader();
        reader.readAsDataURL(this.image.target.files[0]);
        reader.onload = (event: any) => {
          this.projects.forEach((project) => {
            if (project.id == projectId) {
              project.url = event.target.result;
            }
          });
        };
      } else {
        window.alert("Wrong Format");
      }
    }
    if (title) {
      this.projects.forEach((project) => {
        if (project.id == projectId) {
          project.title = this.title;
        }
      });
    }
    if (description) {
      this.projects.forEach((project) => {
        if (project.id == projectId) {
          project.description = this.description;
        }
      });
    }
    if (live_link) {
      this.projects.forEach((project) => {
        if (project.id == projectId) {
          project.live_link = this.live_link;
        }
      });
    }
    if (github) {
      this.projects.forEach((project) => {
        if (project.id == projectId) {
          project.github = this.github;
        }
      });
    }
    console.log(this.projects);
  }
  OnSelect(event:any) {
    this.image = event;
  }
  OnDelete(project_id:any) {
    this.projectService.removeProjectById(project_id);
  }
}
