//Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// To allow for the camera to move around the scene
import {
    OrbitControls
} from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import {
    MeshStandardMaterial
} from "../../node_modules/three/build/three.module.js";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg')
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

const model_one = new THREE.TextureLoader().load('eye.gif');

const Eyeboll = new THREE.Mesh(
    new THREE.SphereGeometry(10, 50, 50),
    new MeshStandardMaterial({
        map: model_one
    })
)

Eyeboll.position.z = 30;

scene.add(Eyeboll)

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);
const ambientLight = new THREE.AmbientLight(0xffffff);

scene.add(pointLight, ambientLight);

const lightHelper = new THREE.PointLightHelper(pointLight);

// scene.add(lightHelper);

const controls = new OrbitControls(camera, renderer.domElement);

function moveCamera() {
    const t = document.body.getBoundingClientRect().top;

    camera.position.z = 30 + t * -0.01;
    camera.position.x = t * -0.0002;
    camera.rotation.y = t * -0.0002;
}

document.body.onscroll = moveCamera
moveCamera();

function animate() {
    requestAnimationFrame(animate);

    if (Eyeboll) Eyeboll.rotation.x = 0;
    if (Eyeboll) Eyeboll.rotation.y -= 0.005;
    if (Eyeboll) Eyeboll.rotation.z = 0;

    Eyeboll.rotation.x += 0.005;

    // controls.update();

    renderer.render(scene, camera);
}

animate();

console.log('%c 6097f89e3092d4ccd249c9d479785c1f.html', 'font-weight:bold; background-color:black; color:white; padding:15px');