import { Component } from '@angular/core';
import { ProjectService } from 'src/app/Services/project.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {
  constructor(private projectService: ProjectService) {}
  live_link:string = ''
  github : string = ''
  title: string = '';
  description: string = '';

  project_semple = {
    id: 0,
    title: this.title,
    description: this.description,
    live_link: "https://www.google.ro/",
    github: "https://github.com/diuand",
    url:
      "https://freepngimg.com/download/pc/29455-9-computer-monitor-screen.png"
  }
  projects = this.projectService.projects;
  image: any;
  // whit works on change but i need a submit button to add a new project
  OnSubmit() {
    if (this.image) {
      let File_type = this.image.target.files[0].type;
      if (File_type.match(/image\/*/)) {
        let reader = new FileReader();
        reader.readAsDataURL(this.image.target.files[0]);
        reader.onload = (event: any) => {
          this.project_semple.url = event.target.result
          console.log(this.project_semple.url )
          this.projectService.addProject({
            id: this.projects.length,
            title: this.title,
            description: this.description,
            url: event.target.result
          });
        };
      } else {
        window.alert("Wrong Format");
      }
    } else {
      window.alert("insert a picture");
    }
  }

  OnSelect(event:any) {
    this.image = event;
    if (this.image) {
      let File_type = this.image.target.files[0].type;
      if (File_type.match(/image\/*/)) {
        let reader = new FileReader();
        reader.readAsDataURL(this.image.target.files[0]);
        reader.onload = (event: any) => {
          this.project_semple.url = event.target.result
        }}}
  }
}
