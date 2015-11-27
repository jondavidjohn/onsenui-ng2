import "reflect-metadata"
import "zone.js"
import { Component, bootstrap } from "angular2/angular2"

class App {
}

App.annotations = [
  new Component({
    selector: '#app',
    template: `
      <ons-page>
        <ons-toolbar>
          <div class="center">Title</div>
        </ons-toolbar>
      </ons-page>
    `
  })
]

bootstrap(App).catch(err => console.error(err))
