import { BoxGeometry, Mesh, MeshBasicMaterial, TextureLoader } from 'three';

export class BoxPictureShape {
	private _box: Mesh = new Mesh();
	get box(): Mesh { return this._box; }

	constructor(picture: string) {
		const pictureTexture = new TextureLoader().load(picture);
		const geometry = new BoxGeometry(5, 5, 5);
		const material = new MeshBasicMaterial({ map: pictureTexture });
		this._box = new Mesh(geometry, material);
	}
}