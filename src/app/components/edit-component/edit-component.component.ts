import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProjectService } from "src/app/Services/project.service";

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css']
})
export class EditComponentComponent implements OnInit {

  projectId: number = 0;
  project : any
  constructor(private route: ActivatedRoute,private projectService: ProjectService,private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.projectId = +params.get("id")!;
    });
    this.project = this.projectService.projects[this.projectId];
    console.log(this.project)
    this.live_link = this.project.live_link
    this.github = this.project.github
    this.title = this.project.title
    this.description = this.project.description
  }

  live_link:string = ''
  github : string = ''
  title: string = '';
  description: string = '';

  image: any;
  // whit works on change but i need a submit button to add a new project
  OnSubmit() {
    if (this.image) {
      let File_type = this.image.target.files[0].type;
      if (File_type.match(/image\/*/)) {
        let reader = new FileReader();
        reader.readAsDataURL(this.image.target.files[0]);
        reader.onload = (event: any) => {
          this.project.url = event.target.result
          this.project.live_link = this.live_link
          this.project.github = this.github
          this.project.title = this.title
          this.project.description = this.description
          this.router.navigate(["/home"]);
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
          this.project.url = event.target.result
        }}}
  }
}








