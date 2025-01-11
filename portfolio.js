import * as THREE from "three";
import { OrbitControls } from "jsm/controls/OrbitControls.js";

const w = window.innerWidth;
const h = window.innerHeight;
const w2 = 500
const h2 = 500

//First Scene
const renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: document.querySelector("#bg"),
});
renderer.setSize(w, h);
renderer.setPixelRatio(window.devicePixelRatio);

const camera = new THREE.PerspectiveCamera(85, w / h, 0.1, 1000);
camera.position.z = 100;

const loader = new THREE.TextureLoader()
const spacetexture = loader.load('./images/Sign Up 1.png', (texture) => {
    texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
    texture.encoding = THREE.sRGBEncoding; 
});

const scene = new THREE.Scene();

scene.background = spacetexture;

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.03;

const light = new THREE.HemisphereLight("#050505","#c7c7c7");
scene.add(light);


const stars = []; 

addObjects();

//Second Scene
const renderer2 = new THREE.WebGLRenderer({
    antialias: true,
    canvas: document.querySelector("#bg2")
});
renderer2.setSize(w2, h2);
renderer2.setPixelRatio(window.devicePixelRatio);

const camera2 = new THREE.PerspectiveCamera(85, w2 / h2, 0.1, 1000);
camera2.position.z = 10;


const scene2 = new THREE.Scene();

//center circle
const firstcube = new THREE.IcosahedronGeometry(1,16)
const cubeMat = new THREE.MeshStandardMaterial({
    color:"#fc4e91"
})

const cubeMesh = new THREE.Mesh(firstcube, cubeMat)
scene2.add(cubeMesh)

//firstupper cube
const firstuppercube = new THREE.BoxGeometry(3, 3, 3)
const firstuppercubeMat = new THREE.MeshStandardMaterial({
    color:"#fc4e91"
})
const firstuppercubeMesh = new THREE.Mesh(firstuppercube, firstuppercubeMat)
firstuppercubeMesh.position.set(-2,2,2)
scene2.add(firstuppercubeMesh)

//seconduppercube
const seconduppercube = new THREE.BoxGeometry(3, 3, 3)
const seconduppercubeMat = new THREE.MeshStandardMaterial({
    color:"#fc4e91"
})
const seconduppercubeMesh = new THREE.Mesh(seconduppercube, seconduppercubeMat)
seconduppercubeMesh.position.set(-2,2,-2)
scene2.add(seconduppercubeMesh)

//thirduppercube
const thirduppercube = new THREE.BoxGeometry(3, 3, 3)
const thirduppercubeMat = new THREE.MeshStandardMaterial({
    color:"#fc4e91"
})
const thirduppercubeMesh = new THREE.Mesh(thirduppercube, thirduppercubeMat)
thirduppercubeMesh.position.set(2,2,-2)
scene2.add(thirduppercubeMesh)


//forthuppercube
const forthuppercube = new THREE.BoxGeometry(3, 3, 3)
const forthuppercubeMat = new THREE.MeshStandardMaterial({
    color:"#fc4e91"
})
const forthuppercubeMesh = new THREE.Mesh(forthuppercube, forthuppercubeMat)
forthuppercubeMesh.position.set(2,2,2)
scene2.add(forthuppercubeMesh)



//firstlowercube
const firstlowercube = new THREE.BoxGeometry(3, 3, 3)
const firstlowercubeMat = new THREE.MeshStandardMaterial({
    color:"#fc4e91"
})
const firstlowercubeMesh = new THREE.Mesh(firstlowercube, firstlowercubeMat)
firstlowercubeMesh.position.set(-2,-2,2)
scene2.add(firstlowercubeMesh)


//secondlowercube
const secondlowercube = new THREE.BoxGeometry(3, 3, 3)
const secondlowercubeMat = new THREE.MeshStandardMaterial({
    color:"#fc4e91"
})
const secondlowercubeMesh = new THREE.Mesh(secondlowercube, secondlowercubeMat)
secondlowercubeMesh.position.set(-2,-2,-2)
scene2.add(secondlowercubeMesh)



//thirdlowercube
const thirdlowercube = new THREE.BoxGeometry(3, 3, 3)
const thirdlowercubeMat = new THREE.MeshStandardMaterial({
    color:"#fc4e91"
})
const thirdlowercubeMesh = new THREE.Mesh(thirdlowercube, thirdlowercubeMat)
thirdlowercubeMesh.position.set(2,-2,-2)
scene2.add(thirdlowercubeMesh)

//forthlowercube
const forthlowercube = new THREE.BoxGeometry(3, 3, 3)
const forthlowercubeMat = new THREE.MeshStandardMaterial({
    color:"#fc4e91"
})
const forthlowercubeMesh = new THREE.Mesh(forthlowercube, forthlowercubeMat)
forthlowercubeMesh.position.set(2,-2,2)
scene2.add(forthlowercubeMesh)





const spotlight2 = new THREE.DirectionalLight("#fafafa", 0.5);
spotlight2.position.set(5, 5, 5)

const spotlight2helper = new THREE.DirectionalLightHelper(spotlight2)
scene2.add(spotlight2helper)
scene2.add(spotlight2)

const controls2 = new OrbitControls(camera2, renderer2.domElement);
controls2.enableDamping = true;
controls2.dampingFactor = 0.03;


const gridHelp2 = new THREE.GridHelper(100,10)
scene2.add(gridHelp2)



function animate(t = 0) {
    requestAnimationFrame(animate);

    stars.forEach((star, index) => {
        const angle = Date.now() * 0.0001 + index * 0.1;
        const radius = Math.sqrt(star.position.x ** 2 + star.position.z ** 2);
        star.position.x = radius * Math.cos(angle);
        star.position.z = radius * Math.sin(angle);
        
        star.rotation.x += 0.005
        star.rotation.y += 0.005
        star.rotation.z += 0.005
    });

    const radius = 50;
    camera.position.y = radius * Math.cos(t * 0.00006);
    camera.position.z = radius * Math.sin(t * 0.00006);
    camera.lookAt(0, 0, 0); 


    controls.update();
    controls2.update()
    renderer.render(scene, camera);

    renderer2.render(scene2,camera2)
}
animate();



//Helper functions

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

        const stargeo = new THREE.OctahedronGeometry(2,0)
        
        const numselect =Math.floor(Math.random() * colors.length)
        const randomColor = colors[numselect];
        console.log(randomColor)

        const starmat = new THREE.MeshStandardMaterial({
            color: randomColor,
            flatShading: true
        });

        const startmesh = new THREE.Mesh(stargeo, starmat);

        startmesh.rotation.x = THREE.MathUtils.randFloatSpread(250);
        startmesh.rotation.y = THREE.MathUtils.randFloatSpread(250);
        startmesh.rotation.z = THREE.MathUtils.randFloatSpread(250);

        const wireMat = new THREE.MeshBasicMaterial({
            color:wirecolor[numselect],
            wireframe: true,
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



