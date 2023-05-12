import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import * as CANNON from "cannon";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const loader = new GLTFLoader();

let piece_model_array = {
  white_pawn: { url: "./models/pawn/scene.gltf", black: false },
  black_pawn: { url: "./models/pawn/scene.gltf", black: true },
  white_rook: { url: "./models/rook/scene.gltf", black: false },
  black_rook: { url: "./models/rook/scene.gltf", black: true },
};

let white_pawn,
  black_pawn,
  white_rook,
  black_rook,
  white_knight,
  black_knight,
  white_bishop,
  black_bishop,
  white_queen,
  black_queen,
  white_king,
  black_king;

// let pieces_map = {
//   white_pieces: {
//     pawn1: white_pawn,

//   },
//   black_pieces: {}
//     };

//loading pawn
loader.load(
  "./models/pawn/scene.gltf",
  //called when resource loaded
  (gltf) => {
    white_pawn = gltf;
    gltf.scene.position.set(5, 0, 4);
    gltf.scene.traverse((node) => {
      if (node.isMesh) {
        node.material = new THREE.MeshLambertMaterial({ color: "grey" });
      }
    });
    scene.add(gltf.scene);
  },
  // called while loading is progressing
  (xhr) => {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  },
  // called when loading has errors
  (error) => {
    console.log("An error happened: " + error);
  }
);

//Chess Peice class
class Box extends THREE.Mesh {
  constructor({
    width,
    height,
    depth,
    color = "0x00ff00",
    velocity = { x: 0, y: 0, z: 0 },
    material = new THREE.MeshStandardMaterial({ color: color }),
  }) {
    super(new THREE.BoxGeometry(width, height, depth), material);
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

    this.velocity.y += -0.005;

    if (this.bottom + this.velocity.y <= ground.top) {
      this.velocity.y = -this.velocity.y;
      this.velocity.y *= 0.8;
    } else {
      this.position.y += this.velocity.y;
    }
  }
}

class Light extends THREE.DirectionalLight {
  constructor({ color = 0xffffff, intensity = 1, castShadow = false }) {
    super(color, intensity);
    this.castShadow = castShadow;
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

// const cube = new Box({
//   width: 1,
//   height: 1,
//   depth: 1,
//   color: 0x00ff00,
//   velocity: {
//     x: 0,
//     y: -0.01,
//     z: 0,
//   },
// });
// cube.translateY(5);
// cube.castShadow = true;
// scene.add(cube);

const plane = new Box({
  width: 80,
  height: 0.1,
  depth: 80,
  color: 0xffffff,
  material: [
    new THREE.MeshLambertMaterial({ color: "lightgrey" }),
    new THREE.MeshLambertMaterial({ color: "lightgrey" }),
    new THREE.MeshStandardMaterial({
      map: new THREE.TextureLoader().load("./img/Chess_Board.png"),
    }),
    new THREE.MeshLambertMaterial({ color: "lightgrey" }),
    new THREE.MeshLambertMaterial({ color: "lightgrey" }),
    new THREE.MeshLambertMaterial({ color: "lightgrey" }),
  ],
});

//axes helper (development only)
const axes = new THREE.AxesHelper(90);
scene.add(axes);

plane.position.set(0, 0, 0);
plane.receiveShadow = true;
scene.add(plane);
camera.rotation.y = 1;
camera.position.set(5, 1, 1);

//adding lights
const light = new Light({ castShadow: true });
const second_light = new Light({ intensity: 0.5 });
const third_light = new Light({ intensity: 0.5 });
const fourth_light = new Light({ intensity: 0.5 });
light.position.set(1, 2, 0);
second_light.position.set(-3, 2, 0);
third_light.position.set(0, 2, 3);
fourth_light.position.set(0, 2, -3);
scene.add(light, second_light, third_light, fourth_light);

function animate() {
  requestAnimationFrame(animate);

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
