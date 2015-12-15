import { bootstrap } from 'angular2/platform/browser'
import { Component } from 'angular2/core'

@Component({
  selector: '#app',
  template: `
    <ons-page>
      <ons-toolbar>
        <div class="center">Title</div>
      </ons-toolbar>
    </ons-page>
  `
})

class App {
}

bootstrap(App).catch(err => console.error(err))
