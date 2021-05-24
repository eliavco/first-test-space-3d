import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

// Services
import { SpaceSceneService } from './../../services/space-scene/space-scene.service';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.scss']
})
export class SpaceComponent implements OnInit, AfterViewInit {
  @ViewChild('bg')
  spaceContainer!: ElementRef;

  constructor(private spaceSceneService: SpaceSceneService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (this.spaceContainer) { this.spaceSceneService.initializeSpace(this.spaceContainer); }
  }
}
