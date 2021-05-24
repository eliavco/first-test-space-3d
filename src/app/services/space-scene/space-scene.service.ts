import { ElementRef, Injectable } from '@angular/core';
import { Scene, PerspectiveCamera, WebGL1Renderer, Mesh, Light, PointLightHelper, TextureLoader } from 'three';

// Shapes
import { StarShape } from './../../threed/shapes/star.shape';
import { TorusShape } from './../../threed/shapes/torus.shape';
import { BoxPictureShape } from './../../threed/shapes/boxPicture.shape';
import { MoonShape } from './../../threed/shapes/moon.shape';

// Lights
import { FloodLight } from './../../threed/lights/flood.light';
import { APointLight } from './../../threed/lights/point.light';

// Animations
import { cameraMoveOnScroll } from './../../threed/animations/cameraMove.animation';

@Injectable({
  providedIn: 'root'
})
export class SpaceSceneService {
  scene!: Scene;
  camera!: PerspectiveCamera;
  renderer!: WebGL1Renderer;

  constructor() { }

  draw(): void {

    // donut
    const torus = new TorusShape();
    this.addObject(torus.torus);

	  // lights
    const bulb = new APointLight();
    this.addObject(bulb.light);

    const flood = new FloodLight();
	  this.addObject(flood.light);
	  
	  // stars
    Array(4000).fill(0).map(() => new StarShape()).forEach(star => { this.addObject(star.star); });

    // Picture Box
    const pictureBox = new BoxPictureShape('assets/profile/eliav.jpg');
    this.addObject(pictureBox.box);

    // Moon
    const moon = new MoonShape();
    this.addObject(moon.moon);

    // Background
    this.setBackground('assets/sky/space2.jpg');
  }

  setBackground(location: string): void {
    const bgTexture = new TextureLoader().load(location);
    this.scene.background = bgTexture;
  }

  addObject(object: Mesh | Light | PointLightHelper): void {
    this.scene.add(object);
    this.renderer.render(this.scene, this.camera);
  }

  initializeSpace(canvas: ElementRef): void {
    
    // Initialize Rendering
    const canvasElement: HTMLCanvasElement = canvas.nativeElement;
    this.scene = new Scene();
    this.camera = new PerspectiveCamera(75, this._windowRatio, 0.1, 1000);
    
    // Handle window resizing
    window.addEventListener('resize', () => { this._resizeScene(); }, false);

    // Rendering
    this.renderer = new WebGL1Renderer({
      canvas: canvasElement
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this._resizeScene();

    // Camera
    this.camera.position.setZ(30);

    this.renderLoop();

    // Start drawing
    this.draw();

    // Move Camera On Scroll
    addEventListener('scroll', () => {
      cameraMoveOnScroll(this.camera);
    });
  }

  private _resizeScene(): void {
    this.camera.aspect = this._windowRatio;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  private get _windowRatio(): number {
    return window.innerWidth / window.innerHeight;
  }
  
  private renderLoop(): void {
    const [renderer, scene, camera] = [this.renderer, this.scene, this.camera];
    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();
  }
}
