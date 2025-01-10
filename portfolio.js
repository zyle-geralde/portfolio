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

const camera = new THREE.PerspectiveCamera(85, w / h, 0.1, 1000);
camera.position.z = 100;

const scene = new THREE.Scene();


const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.03;

const light = new THREE.HemisphereLight("#050505","#c7c7c7");
scene.add(light);

scene.background = new THREE.Color("#170202");

const stars = []; 

addObjects();

function animate(t = 0) {
    requestAnimationFrame(animate);

    stars.forEach((star, index) => {
        const angle = Date.now() * 0.0001 + index * 0.1;
        const radius = Math.sqrt(star.position.x ** 2 + star.position.z ** 2);
        star.position.x = radius * Math.cos(angle);
        star.position.z = radius * Math.sin(angle);
    });

    const radius = 50;
    camera.position.y = radius * Math.cos(t * 0.00006);
    camera.position.z = radius * Math.sin(t * 0.00006);
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
    const colors = ["#e83559", "#e83591", "#e835be"];
    const wirecolor = ["#c40471", "#c202b8", "#7e04bf"]

    for (let numstars = 0; numstars < 1000; numstars++) {

        const stargeo = new THREE.CylinderGeometry(2, 1, 4, 16); 
        
        const numselect =Math.floor(Math.random() * colors.length)
        const randomColor = colors[numselect];
        console.log(randomColor)

        const starmat = new THREE.MeshStandardMaterial({
            color: randomColor,
            flatShading: true
        });

        const startmesh = new THREE.Mesh(stargeo, starmat);

        const wireMat = new THREE.MeshBasicMaterial({
            color:wirecolor[numselect],
            wireframe: true,
        })
        
        const wireMesh = new THREE.Mesh(stargeo, wireMat)
        wireMesh.scale.setScalar(1.001)
        
        startmesh.add(wireMesh)

        const xran = THREE.MathUtils.randFloatSpread(250);
        const yran = THREE.MathUtils.randFloatSpread(250);
        const zran = THREE.MathUtils.randFloatSpread(250);

        startmesh.position.set(xran, yran, zran);

        stars.push(startmesh);
        scene.add(startmesh);
    }
}


