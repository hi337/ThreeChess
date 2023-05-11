//file contains the game's animation loop
import "./main.js";

export default function animate() {
  requestAnimationFrame(animate);
  cube.translateX(0.01);
  sphere.rotation.y += 0.05;

  //maintain the aspect ratio for responsive design
  if (resizeRendererToDisplaySize(renderer)) {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  }

  renderer.render(scene, camera);
}
