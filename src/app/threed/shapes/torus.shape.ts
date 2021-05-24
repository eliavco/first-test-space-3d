import { Mesh, MeshStandardMaterial, TorusGeometry } from 'three';
const { setInterval } = window;

export class TorusShape {
	private _torus: Mesh = new Mesh();
	get torus(): Mesh { return this._torus; }

	intervals: number[] = [];

	constructor() {
		const geometry = new TorusGeometry(10, 3, 16, 100);
		const material = new MeshStandardMaterial({ color: 0xFF3467 });
		this._torus = new Mesh(geometry, material);
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