import { BoxGeometry, Mesh, MeshBasicMaterial, TextureLoader } from 'three';

export class BoxPictureShape {
	private _box: Mesh = new Mesh();
	get box(): Mesh { return this._box; }

	constructor(picture: string) {
		const pictureTexture = new TextureLoader().load(picture);
		const geometry = new BoxGeometry(7, 7, 7);
		const material = new MeshBasicMaterial({ map: pictureTexture });
		this._box = new Mesh(geometry, material);

		// Position and rotation
		this.rotate();
	}

	rotate() {
		addEventListener('scroll', () => {
			this._box.rotateX(.01);
			this._box.rotateY(.008);
			this._box.rotateZ(.003);
		});
	}
}