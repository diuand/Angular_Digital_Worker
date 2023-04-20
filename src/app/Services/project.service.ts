import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ProjectService {
  projects = [
    {
      id: 0,
      title: "Angular",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
      live_link: "https://www.google.ro/",
      github: "https://github.com/diuand",
      url:
        "https://freepngimg.com/download/pc/29455-9-computer-monitor-screen.png"
    },
    {
      id: 1,
      title: "React",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown ",
      live_link: "https://www.google.ro/",
      github: "https://github.com/diuand",
      url:
        "https://freepngimg.com/download/pc/29455-9-computer-monitor-screen.png"
    },
    {
      id: 2,
      title: "Vue",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
      live_link: "https://www.google.ro/",
      github: "https://github.com/diuand",
      url:
        "https://freepngimg.com/download/pc/29455-9-computer-monitor-screen.png"
    }
  ];

  addProject(newProject:any) {
    this.projects.push(newProject);
  }
  removeProjectById(id: number) {
    const index = this.projects.findIndex((project) => project.id === id);
    if (index !== -1) {
      this.projects.splice(index, 1);
    }
  }
}
