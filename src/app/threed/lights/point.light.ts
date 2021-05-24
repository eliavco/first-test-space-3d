import { PointLight, PointLightHelper } from 'three';

export class APointLight {
	private _light: PointLight = new PointLight();
	get light(): PointLight { return this._light; }

	helper: PointLightHelper = new PointLightHelper(this.light);

	constructor() {
		const pointLight = new PointLight(0xffffff);
		pointLight.position.set(5, 5, 5);
		const helper = new PointLightHelper(pointLight);
		this._light = pointLight;
	}
}