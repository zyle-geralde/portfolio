import * as THREE from "three";
import { OrbitControls } from "jsm/controls/OrbitControls.js";

const w = window.innerWidth;
const h = window.innerHeight;

const renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: document.querySelector("#bg"),
});
renderer.setSize(w, h);
renderer.setPixelRatio(window.devicePixelRatio);

const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 200);
camera.position.z = 100;

const scene = new THREE.Scene();


const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.03;

const light = new THREE.HemisphereLight("#050505","#c7c7c7");
scene.add(light);

const stars = []; 

addObjects();

function animate(t = 0) {
    requestAnimationFrame(animate);

    stars.forEach((star, index) => {
        const angle = Date.now() * 0.0002 + index * 0.1;
        const radius = Math.sqrt(star.position.x ** 2 + star.position.z ** 2);
        star.position.x = radius * Math.cos(angle);
        star.position.z = radius * Math.sin(angle);
    });

    const radius = 50;
    camera.position.y = radius * Math.cos(t * 0.0002);
    camera.position.z = radius * Math.sin(t * 0.0002);
    camera.lookAt(0, 0, 0); 

    controls.update();
    renderer.render(scene, camera);
}
animate();

function handleWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener("resize", handleWindowResize, false);

function addObjects() {
    for (let numstars = 0; numstars < 1000; numstars++) {
        const stargeo = new THREE.OctahedronGeometry(1.5, 0);
        const starmat = new THREE.MeshStandardMaterial({
            color: "#e83559",
            flatShading:true
        });

        const startmesh = new THREE.Mesh(stargeo, starmat);

        const wireMat = new THREE.MeshBasicMaterial({
            color: "#c40471",
            wireframe:true
        })
        
        const wireMesh = new THREE.Mesh(stargeo, wireMat)
        wireMesh.scale.setScalar(1.001)
        
        startmesh.add(wireMesh)

        const xran = THREE.MathUtils.randFloatSpread(200);
        const yran = THREE.MathUtils.randFloatSpread(200);
        const zran = THREE.MathUtils.randFloatSpread(200);

        startmesh.position.set(xran, yran, zran);

        stars.push(startmesh);
        scene.add(startmesh);
    }
}


