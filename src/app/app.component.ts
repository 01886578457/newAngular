import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
  <div>
    <app-words></app-words>
  </div>`,
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "my-app";
}
