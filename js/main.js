import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { InteractionManager } from "three.interactive";

const loader = new GLTFLoader();
const raycaster = new THREE.Raycaster();

let mousedown = false;
let selected = "";
let turn = "white";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(110, 100, 110);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setClearColor(0x007a3d, 1);
renderer.shadowMap.enabled = true;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const interactionManager = new InteractionManager(
  renderer,
  camera,
  renderer.domElement
);

class Piece {
  constructor({
    url = "",
    team = "white",
    position = { x: 0, y: 0, z: 0 },
    rotation = { x: 0, y: 0, z: 0 },
    piece_name = "",
  }) {
    this.piece_name = piece_name;
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
        interactionManager.add(gltf.scene);
        gltf.scene.addEventListener("mouseover", (e) => {
          document.body.style.cursor = "pointer";
        });
        gltf.scene.addEventListener("mouseout", (e) => {
          document.body.style.cursor = "default";
        });
        gltf.scene.addEventListener("mousedown", (e) => {
          if (this.team == turn) {
            selected = this.piece_name;
          }
          mousedown = true;
          setTimeout(function () {
            if (mousedown) {
              // mouse was held down for > 1 seconds
              mousedown = false;
              selected = "";
            }
          }, 1000);
        });
        gltf.scene.addEventListener("mouseup", (e) => {
          mousedown = false;
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
  update() {
    this.model.scene.position.x = this.position.x;
    this.model.scene.position.y = this.position.y;
    this.model.scene.position.z = this.position.z;
  }
}

let piece_array = {
  white_pawn_1: new Piece({
    url: "./models/pawn/scene.gltf",
    team: "white",
    position: {
      x: 70,
      y: 0,
      z: 50,
    },
    piece_name: "white_pawn_1",
  }),
  white_pawn_2: new Piece({
    url: "./models/pawn/scene.gltf",
    team: "white",
    position: {
      x: 50,
      y: 0,
      z: 50,
    },
    piece_name: "white_pawn_2",
  }),
  white_pawn_3: new Piece({
    url: "./models/pawn/scene.gltf",
    team: "white",
    position: {
      x: 30,
      y: 0,
      z: 50,
    },
    piece_name: "white_pawn_3",
  }),
  white_pawn_4: new Piece({
    url: "./models/pawn/scene.gltf",
    team: "white",
    position: {
      x: 10,
      y: 0,
      z: 50,
    },
    piece_name: "white_pawn_4",
  }),
  white_pawn_5: new Piece({
    url: "./models/pawn/scene.gltf",
    team: "white",
    position: {
      x: -10,
      y: 0,
      z: 50,
    },
    piece_name: "white_pawn_5",
  }),
  white_pawn_6: new Piece({
    url: "./models/pawn/scene.gltf",
    team: "white",
    position: {
      x: -30,
      y: 0,
      z: 50,
    },
    piece_name: "white_pawn_6",
  }),
  white_pawn_7: new Piece({
    url: "./models/pawn/scene.gltf",
    team: "white",
    position: {
      x: -50,
      y: 0,
      z: 50,
    },
    piece_name: "white_pawn_7",
  }),
  white_pawn_8: new Piece({
    url: "./models/pawn/scene.gltf",
    team: "white",
    position: {
      x: -70,
      y: 0,
      z: 50,
    },
    piece_name: "white_pawn_8",
  }),
  black_pawn_1: new Piece({
    url: "./models/pawn/scene.gltf",
    team: "black",
    position: {
      x: 70,
      y: 0,
      z: -50,
    },
    piece_name: "black_pawn_1",
  }),
  black_pawn_2: new Piece({
    url: "./models/pawn/scene.gltf",
    team: "black",
    position: {
      x: 50,
      y: 0,
      z: -50,
    },
    piece_name: "black_pawn_2",
  }),
  black_pawn_3: new Piece({
    url: "./models/pawn/scene.gltf",
    team: "black",
    position: {
      x: 30,
      y: 0,
      z: -50,
    },
    piece_name: "black_pawn_3",
  }),
  black_pawn_4: new Piece({
    url: "./models/pawn/scene.gltf",
    team: "black",
    position: {
      x: 10,
      y: 0,
      z: -50,
    },
    piece_name: "black_pawn_4",
  }),
  black_pawn_5: new Piece({
    url: "./models/pawn/scene.gltf",
    team: "black",
    position: {
      x: -10,
      y: 0,
      z: -50,
    },
    piece_name: "black_pawn_5",
  }),
  black_pawn_6: new Piece({
    url: "./models/pawn/scene.gltf",
    team: "black",
    position: {
      x: -30,
      y: 0,
      z: -50,
    },
    piece_name: "black_pawn_6",
  }),
  black_pawn_7: new Piece({
    url: "./models/pawn/scene.gltf",
    team: "black",
    position: {
      x: -50,
      y: 0,
      z: -50,
    },
    piece_name: "black_pawn_7",
  }),
  black_pawn_8: new Piece({
    url: "./models/pawn/scene.gltf",
    team: "black",
    position: {
      x: -70,
      y: 0,
      z: -50,
    },
    piece_name: "black_pawn_8",
  }),
  white_rook_1: new Piece({
    url: "./models/rook/scene.gltf",
    team: "white",
    position: {
      x: 70,
      y: 0,
      z: 70,
    },
    piece_name: "white_rook_1",
  }),
  white_rook_2: new Piece({
    url: "./models/rook/scene.gltf",
    team: "white",
    position: {
      x: -70,
      y: 0,
      z: 70,
    },
    piece_name: "white_rook_2",
  }),
  black_rook_1: new Piece({
    url: "./models/rook/scene.gltf",
    team: "black",
    position: {
      x: 70,
      y: 0,
      z: -70,
    },
    piece_name: "black_rook_1",
  }),
  black_rook_2: new Piece({
    url: "./models/rook/scene.gltf",
    team: "black",
    position: {
      x: -70,
      y: 0,
      z: -70,
    },
    piece_name: "black_rook_2",
  }),
  white_knight_1: new Piece({
    url: "./models/knight/scene.gltf",
    team: "white",
    position: {
      x: 50,
      y: 0,
      z: 70,
    },
    rotation: { x: 0, y: -Math.PI / 2, z: 0 },
    piece_name: "white_knight_1",
  }),
  white_knight_2: new Piece({
    url: "./models/knight/scene.gltf",
    team: "white",
    position: {
      x: -50,
      y: 0,
      z: 70,
    },
    rotation: { x: 0, y: -Math.PI / 2, z: 0 },
    piece_name: "white_knight_2",
  }),
  black_knight_1: new Piece({
    url: "./models/knight/scene.gltf",
    team: "black",
    position: {
      x: 50,
      y: 0,
      z: -70,
    },
    rotation: { x: 0, y: Math.PI / 2, z: 0 },
    piece_name: "black_knight_1",
  }),
  black_knight_2: new Piece({
    url: "./models/knight/scene.gltf",
    team: "black",
    position: {
      x: -50,
      y: 0,
      z: -70,
    },
    rotation: { x: 0, y: Math.PI / 2, z: 0 },
    piece_name: "black_knight_2",
  }),
  white_bishop_1: new Piece({
    url: "./models/bishop/scene.gltf",
    team: "white",
    position: {
      x: 30,
      y: 0,
      z: 70,
    },
    piece_name: "white_bishop_1",
  }),
  white_bishop_2: new Piece({
    url: "./models/bishop/scene.gltf",
    team: "white",
    position: {
      x: -30,
      y: 0,
      z: 70,
    },
    piece_name: "white_bishop_2",
  }),
  black_bishop_1: new Piece({
    url: "./models/bishop/scene.gltf",
    team: "black",
    position: {
      x: 30,
      y: 0,
      z: -70,
    },
    piece_name: "black_bishop_1",
  }),
  black_bishop_2: new Piece({
    url: "./models/bishop/scene.gltf",
    team: "black",
    position: {
      x: -30,
      y: 0,
      z: -70,
    },
    piece_name: "black_bishop_2",
  }),
  white_king: new Piece({
    url: "./models/king/scene.gltf",
    team: "white",
    position: {
      x: 10,
      y: 0,
      z: 70,
    },
    piece_name: "white_king",
  }),
  white_queen: new Piece({
    url: "./models/queen/scene.gltf",
    team: "white",
    position: {
      x: -10,
      y: 0,
      z: 70,
    },
    piece_name: "white_queen",
  }),
  black_king: new Piece({
    url: "./models/king/scene.gltf",
    team: "black",
    position: {
      x: 10,
      y: 0,
      z: -70,
    },
    piece_name: "black_king",
  }),
  black_queen: new Piece({
    url: "./models/queen/scene.gltf",
    team: "black",
    position: {
      x: -10,
      y: 0,
      z: -70,
    },
    piece_name: "black_queen",
  }),
};

//Chess Peice class
class Box extends THREE.Mesh {
  constructor({
    width,
    height,
    depth,
    color = 0x00ff00,
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

const test_box = new Box({
  width: 10,
  height: 10,
  depth: 10,
});

interactionManager.add(plane);
plane.addEventListener("click", (e) => {
  // update the picking ray with the camera and pointer position
  raycaster.setFromCamera(e.coords, camera);

  // calculate objects intersecting the picking ray
  const intersects = raycaster.intersectObjects(scene.children);
  for (let piece in piece_array) {
    if (piece_array[piece].piece_name == selected) {
      if (
        Math.abs(piece_array[piece].position.x - intersects[0].point.x) > 10 ||
        Math.abs(piece_array[piece].position.z - intersects[0].point.z) > 10
      ) {
        piece_array[piece].position.x = intersects[0].point.x;
        piece_array[piece].position.z = intersects[0].point.z;
        selected = "";
        turn == "white" ? (turn = "black") : (turn = "white");
      }

      piece_array[piece].update();
      let firstBB = new THREE.Box3().setFromObject(
        piece_array[piece].model.scene
      );
      for (let piece_index in piece_array) {
        if (piece_array[piece_index].team != piece_array[piece].team) {
          let secondBB = new THREE.Box3().setFromObject(
            piece_array[piece_index].model.scene
          );
          if (firstBB.intersectsBox(secondBB)) {
            scene.remove(piece_array[piece_index].model.scene);
            interactionManager.remove(piece_array[piece_index].model.scene);
            delete piece_array[piece_index];
          }
        }
      }
    }
  }
});
scene.add(plane);

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

  interactionManager.update();

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
