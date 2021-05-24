import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Components
import { SpaceComponent } from './components/space/space.component';
import { ContentComponent } from './components/content/content.component';

// Services
import { SpaceSceneService } from './services/space-scene/space-scene.service';

@NgModule({
  declarations: [
    AppComponent,
    SpaceComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule
  ],
	providers: [
	  SpaceSceneService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
