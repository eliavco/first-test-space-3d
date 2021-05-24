import { ElementRef, Injectable } from '@angular/core';
import * as THREE from 'three';

@Injectable({
  providedIn: 'root'
})
export class SpaceSceneService {
  scene!: THREE.Scene;
  camera!: THREE.PerspectiveCamera;
  renderer!: THREE.WebGL1Renderer;

  constructor() { }

  initializeSpace(canvas: ElementRef) {
    
    // Initialize Rendering
    const canvasElement: HTMLCanvasElement = canvas.nativeElement;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, this._windowRatio, 0.1, 1000);
    
    // Handle window resizing
    window.addEventListener('resize', this._resizeScene, false);

    // Rendering
    this.renderer = new THREE.WebGL1Renderer({
      canvas: canvasElement
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this._resizeScene();
    this.renderer.render(this.scene, this.camera);
  }

  private _resizeScene(): void {
    this.camera.aspect = this._windowRatio;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  private get _windowRatio(): number {
    return window.innerWidth / window.innerHeight;
  }
}
