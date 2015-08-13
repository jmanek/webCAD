'use strict';

var Menu = function Menu(Viewport) {

		var menu = $('#menu');
		menu.click(function () {
				var width = 100;
				var height = 100;
				var depth = 100;

				var widthSegments = 1;
				var heightSegments = 1;
				var depthSegments = 1;

				var geometry = new THREE.BoxGeometry(width, height, depth, widthSegments, heightSegments, depthSegments);
				var mesh = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial());
				mesh.name = 'Box ';

				Viewport.addObject(mesh);
		});
};
//# sourceMappingURL=menu.js.map
