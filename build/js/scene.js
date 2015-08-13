'use strict';

var scene;
var ViewportContainer = function ViewportContainer() {

	var camera;
	var selectedMesh;
	var meshVerts = { active: false, mesh: undefined };
	var setScene = function setScene() {

		scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		camera.position.set(68, 95, 41);
		camera.lookAt(new THREE.Vector3(0, 0, 0));
		var controls = new THREE.OrbitControls(camera);
		controls.damping = 0.2;
		controls.addEventListener('change', render);
		var renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setClearColor(0x000000, 0);

		document.body.appendChild(renderer.domElement);

		var geometry = new THREE.BoxGeometry(1, 1, 1);
		var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
		var cube = new THREE.Mesh(geometry, material);
		// scene.add( cube );
		var grid = new THREE.GridHelper(100, 4);

		scene.add(grid);

		var render = function render() {
			requestAnimationFrame(render);

			cube.rotation.x += 0.01;
			cube.rotation.y += 0.01;

			renderer.render(scene, camera);
		};

		render();
	};
	setScene();

	return {

		addObject: function addObject(mesh) {
			scene.add(mesh);
			selectedMesh = mesh;
		},

		displayVerts: function displayVerts() {
			if (!(selectedMesh.geometry instanceof THREE.BufferGeometry)) {
				selectedMesh.geometry = new THREE.BufferGeometry().fromGeometry(selectedMesh.geometry);
			}
			meshVerts.mesh = new THREE.PointCloud(selectedMesh.geometry);
			meshVerts.active = true;
			scene.add(meshVerts.mesh);
		}
	};
};
//# sourceMappingURL=scene.js.map
