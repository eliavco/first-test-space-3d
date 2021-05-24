import { Mesh, MeshStandardMaterial, SphereGeometry } from 'three';
export class StarShape {
	private _star: Mesh = new Mesh();
	get star(): Mesh { return this._star; }

  constructor() {
    const geometry = new SphereGeometry(.8, 24, 24);
    const material = new MeshStandardMaterial({ color: 0xFFFFFF });
    this._star = new Mesh(geometry, material);

    const [maxDist, minDist] = [999, 300];
    function generateDistance(max: number, min: number = 0) {
      const dist = ((Math.random() * (max - min)) + min); if (Math.random() < 0.5) { return -dist; } return dist;
    }
    const [x, y] = Array(2).fill(0).map(() => { return generateDistance(maxDist); });
    const z = generateDistance(maxDist, minDist);
		this._star.position.set(x, y, z);
	}
}