import { Mesh, MeshStandardMaterial, TorusGeometry } from 'three';
const { setInterval } = window;

export class TorusShape {
	private _torus: Mesh = new Mesh();
	get torus(): Mesh { return this._torus; }

	intervals: number[] = [];

	constructor() {
		const geometry = new TorusGeometry(10, 2, 16, 100);
		const material = new MeshStandardMaterial({ color: 0xFF3467 });
		this._torus = new Mesh(geometry, material);
		
		// Position and animate
		// this._torus.position.set(7, 0, -20);
		this.rotate();
	}

	rotate() {
		this.intervals.push(setInterval(() => {
			this._torus.rotateX(.015);
			this._torus.rotateY(.005);
			this._torus.rotateZ(.01);
		}, 30));
	}

}