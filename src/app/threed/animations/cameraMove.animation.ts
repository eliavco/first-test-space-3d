import { PerspectiveCamera } from 'three';

export function cameraMoveOnScroll(camera: PerspectiveCamera) {
	const t = document.body.getBoundingClientRect().top;
	camera.position.set(t * 0.002, t * -0.003, 30 + t * -0.006);
}