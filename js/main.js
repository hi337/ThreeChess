import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

//Chess Peice class
class Box extends THREE.Mesh {
  constructor({
    width,
    height,
    depth,
    color = "0x00ff00",
    velocity = { x: 0, y: 0, z: 0 },
  }) {
    super(
      new THREE.BoxGeometry(width, height, depth),
      new THREE.MeshStandardMaterial({ color: color })
    );
    this.height = height;
    this.width = width;
    this.depth = depth;

    this.bottom = this.position.y - this.height / 2;
    this.top = this.position.y + this.height / 2;
    this.velocity = velocity;
  }
  update(ground) {
    this.bottom = this.position.y - this.height / 2;
    this.top = this.position.y + this.height / 2;
    this.position.y += this.velocity.y;

    if (this.bottom <= ground.top) this.velocity.y = 0;
  }
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

const cube = new Box({
  width: 1,
  height: 1,
  depth: 1,
  color: 0x00ff00,
  velocity: {
    x: 0,
    y: -0.01,
    z: 0,
  },
});
cube.translateY(2);
cube.castShadow = true;
scene.add(cube);

const plane = new Box({
  width: 10,
  height: 0.5,
  depth: 10,
  color: 0xffff00,
});
plane.position.set(0, -2, 0);
plane.receiveShadow = true;
scene.add(plane);
camera.rotation.y = 1;
camera.position.set(5, 1, 1);

//adding a light
const light_color = 0xffffff;
const light = new THREE.DirectionalLight(light_color, 1);
light.position.set(0, 3, 2);
light.castShadow = true;
scene.add(light);

function animate() {
  requestAnimationFrame(animate);
  cube.update(plane);

  //maintain the aspect ratio for responsive design
  if (resizeRendererToDisplaySize(renderer)) {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  }

  renderer.render(scene, camera);
}

//checks if webgl is enabled
if (WebGL.isWebGLAvailable()) {
  // Initiate function or other initializations here
  animate();
} else {
  const warning = WebGL.getWebGLErrorMessage();
  document.getElementById("container").appendChild(warning);
}

//checks to make sure the canvas drawingbuffer size is same as css size
function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  const width = innerWidth;
  const height = innerHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}
