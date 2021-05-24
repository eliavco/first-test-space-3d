import { SphereGeometry, Mesh, MeshStandardMaterial, TextureLoader } from 'three';

export class MoonShape {
	private _moon: Mesh = new Mesh();
	get moon(): Mesh { return this._moon; }

	constructor() {
		const pictureTexture = new TextureLoader().load('assets/sky/moon.jpg');
		const normalTexture = new TextureLoader().load('assets/sky/moon-normal.jpg');
		const geometry = new SphereGeometry(3, 32, 32);
		const material = new MeshStandardMaterial({ map: pictureTexture, normalMap: normalTexture });
		this._moon = new Mesh(geometry, material);

		// Position and rotation
		this._moon.position.set(-10, 3, 30);
		this.rotate();
	}

	rotate() {
		addEventListener('scroll', () => {
			this._moon.rotateY(.01);
		});
	}
}