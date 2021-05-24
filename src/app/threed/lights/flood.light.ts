import { AmbientLight } from 'three';

export class FloodLight {
	private _light: AmbientLight = new AmbientLight();
	get light(): AmbientLight { return this._light; }

	constructor() {
		const flood = new AmbientLight(0xffffff);
		this._light = flood;
	}
}