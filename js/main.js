import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import * as CANNON from "cannon";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const loader = new GLTFLoader();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setClearColor(0x1d2e21, 1);
renderer.shadowMap.enabled = true;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//returns the position of the pieces adjusted for Three's Origin
function return_adjusted_position(position = { x: 0, y: 0, z: 0 }) {
  position.x += 80;
  position.z += 80;
  return position;
}

class Piece {
  constructor(
    url,
    team = "white",
    position = { x: 0, y: 0, z: 0 },
    rotation = { x: 0, y: 0, z: 0 }
  ) {
    this.position = position;
    this.team = team;
    this.rotation = rotation;
    loader.load(
      url, //called when resource loaded
      (gltf) => {
        gltf.scene.position.set(
          this.position.x,
          this.position.y,
          this.position.z
        );
        gltf.scene.rotation.x = rotation.x;
        gltf.scene.rotation.y = rotation.y;
        gltf.scene.rotation.z = rotation.z;
        gltf.scene.traverse((node) => {
          if (node.isMesh) {
            if (this.team == "white") {
              node.material = new THREE.MeshLambertMaterial({ color: team });
            } else {
              node.material = new THREE.MeshLambertMaterial({
                color: 0x1d1f1e,
              });
            }
          }
        });
        gltf.scene.scale.set(3.5, 3.5, 3.5);
        this.model = gltf;
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
  }
}

let piece_array = {
  white_pawn_1: new Piece("./models/pawn/scene.gltf", "white", {
    x: 70,
    y: 0,
    z: 50,
  }),
  white_pawn_2: new Piece("./models/pawn/scene.gltf", "white", {
    x: 50,
    y: 0,
    z: 50,
  }),
  white_pawn_3: new Piece("./models/pawn/scene.gltf", "white", {
    x: 30,
    y: 0,
    z: 50,
  }),
  white_pawn_4: new Piece("./models/pawn/scene.gltf", "white", {
    x: 10,
    y: 0,
    z: 50,
  }),
  white_pawn_5: new Piece("./models/pawn/scene.gltf", "white", {
    x: -10,
    y: 0,
    z: 50,
  }),
  white_pawn_6: new Piece("./models/pawn/scene.gltf", "white", {
    x: -30,
    y: 0,
    z: 50,
  }),
  white_pawn_7: new Piece("./models/pawn/scene.gltf", "white", {
    x: -50,
    y: 0,
    z: 50,
  }),
  white_pawn_8: new Piece("./models/pawn/scene.gltf", "white", {
    x: -70,
    y: 0,
    z: 50,
  }),
  black_pawn_1: new Piece("./models/pawn/scene.gltf", "black", {
    x: 70,
    y: 0,
    z: -50,
  }),
  black_pawn_2: new Piece("./models/pawn/scene.gltf", "black", {
    x: 50,
    y: 0,
    z: -50,
  }),
  black_pawn_3: new Piece("./models/pawn/scene.gltf", "black", {
    x: 30,
    y: 0,
    z: -50,
  }),
  black_pawn_4: new Piece("./models/pawn/scene.gltf", "black", {
    x: 10,
    y: 0,
    z: -50,
  }),
  black_pawn_5: new Piece("./models/pawn/scene.gltf", "black", {
    x: -10,
    y: 0,
    z: -50,
  }),
  black_pawn_6: new Piece("./models/pawn/scene.gltf", "black", {
    x: -30,
    y: 0,
    z: -50,
  }),
  black_pawn_7: new Piece("./models/pawn/scene.gltf", "black", {
    x: -50,
    y: 0,
    z: -50,
  }),
  black_pawn_8: new Piece("./models/pawn/scene.gltf", "black", {
    x: -70,
    y: 0,
    z: -50,
  }),
  white_rook_1: new Piece("./models/rook/scene.gltf", "white", {
    x: 70,
    y: 0,
    z: 70,
  }),
  white_rook_2: new Piece("./models/rook/scene.gltf", "white", {
    x: -70,
    y: 0,
    z: 70,
  }),
  black_rook_1: new Piece("./models/rook/scene.gltf", "black", {
    x: 70,
    y: 0,
    z: -70,
  }),
  black_rook_2: new Piece("./models/rook/scene.gltf", "black", {
    x: -70,
    y: 0,
    z: -70,
  }),
  white_knight_1: new Piece(
    "./models/knight/scene.gltf",
    "white",
    {
      x: 50,
      y: 0,
      z: 70,
    },
    { x: 0, y: -Math.PI / 2, z: 0 }
  ),
  white_knight_2: new Piece(
    "./models/knight/scene.gltf",
    "white",
    {
      x: -50,
      y: 0,
      z: 70,
    },
    { x: 0, y: -Math.PI / 2, z: 0 }
  ),
  black_knight_1: new Piece(
    "./models/knight/scene.gltf",
    "black",
    {
      x: 50,
      y: 0,
      z: -70,
    },
    { x: 0, y: Math.PI / 2, z: 0 }
  ),
  black_knight_2: new Piece(
    "./models/knight/scene.gltf",
    "black",
    {
      x: -50,
      y: 0,
      z: -70,
    },
    { x: 0, y: Math.PI / 2, z: 0 }
  ),
  white_bishop_1: new Piece("./models/bishop/scene.gltf", "white", {
    x: 30,
    y: 0,
    z: 70,
  }),
  white_bishop_2: new Piece("./models/bishop/scene.gltf", "white", {
    x: -30,
    y: 0,
    z: 70,
  }),
  black_bishop_1: new Piece("./models/bishop/scene.gltf", "black", {
    x: 30,
    y: 0,
    z: -70,
  }),
  black_bishop_2: new Piece("./models/bishop/scene.gltf", "black", {
    x: -30,
    y: 0,
    z: -70,
  }),
  white_king: new Piece("./models/king/scene.gltf", "white", {
    x: 10,
    y: 0,
    z: 70,
  }),
  white_queen: new Piece("./models/queen/scene.gltf", "white", {
    x: -10,
    y: 0,
    z: 70,
  }),
  black_king: new Piece("./models/king/scene.gltf", "black", {
    x: 10,
    y: 0,
    z: -70,
  }),
  black_queen: new Piece("./models/queen/scene.gltf", "black", {
    x: -10,
    y: 0,
    z: -70,
  }),
};

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

const controls = new OrbitControls(camera, renderer.domElement);

const plane = new Box({
  width: 160,
  height: 0.1,
  depth: 160,
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
camera.position.set(100, 1, 100);

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
