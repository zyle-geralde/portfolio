import * as THREE from "three";
import { OrbitControls } from "jsm/controls/OrbitControls.js";

const w = window.innerWidth;
const h = window.innerHeight;
const w2 = 300
const h2 = 300

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

const light = new THREE.HemisphereLight("#050505", "#c7c7c7");
scene.add(light);


const stars = [];

addObjects();

//Second Scene
var renderer2 = new THREE.WebGLRenderer({
    antialias: true,
    canvas: document.querySelector("#bg2"),
    alpha: true
});
renderer2.setSize(w2, h2);
renderer2.setPixelRatio(window.devicePixelRatio);

var camera2 = new THREE.PerspectiveCamera(85, w2 / h2, 0.1, 1000);
camera2.position.z = 8;
camera2.position.y = 5


var scene2 = new THREE.Scene();

//center circle
const firstcube = new THREE.IcosahedronGeometry(1, 16)
const cubeMat = new THREE.MeshStandardMaterial({
    color: "#fda60F",
    emissive: "#fda60F"
})

const cubeMesh = new THREE.Mesh(firstcube, cubeMat)
scene2.add(cubeMesh)

//firstupper cube
const firstuppercube = new THREE.BoxGeometry(3, 3, 3)

const firstuppercubeMat = [
    new THREE.MeshStandardMaterial({ color: "#D06E00", emissive: "#D06E00" }),
    new THREE.MeshStandardMaterial({ color: "#969491", emissive: "#969491" }),
    new THREE.MeshStandardMaterial({ color: "#969491", emissive: "#969491" }),
    new THREE.MeshStandardMaterial({ color: "#D06E00", emissive: "#D06E00" }),
    new THREE.MeshStandardMaterial({ color: "#969491", emissive: "#969491" }),
    new THREE.MeshStandardMaterial({ color: "#D06E00", emissive: "#D06E00" }),
];

const firstuppercubeMesh = new THREE.Mesh(firstuppercube, firstuppercubeMat)
firstuppercubeMesh.position.set(-2, 2, 2)
scene2.add(firstuppercubeMesh)

//seconduppercube
const seconduppercube = new THREE.BoxGeometry(3, 3, 3)

const seconduppercubeMat = [
    new THREE.MeshStandardMaterial({ color: "#D06E00", emissive: "#D06E00" }),
    new THREE.MeshStandardMaterial({ color: "#969491", emissive: "#969491" }),
    new THREE.MeshStandardMaterial({ color: "#969491", emissive: "#969491" }),
    new THREE.MeshStandardMaterial({ color: "#D06E00", emissive: "#D06E00" }),
    new THREE.MeshStandardMaterial({ color: "#D06E00", emissive: "#D06E00" }),
    new THREE.MeshStandardMaterial({ color: "#969491", emissive: "#969491" }),
];
const seconduppercubeMesh = new THREE.Mesh(seconduppercube, seconduppercubeMat)
seconduppercubeMesh.position.set(-2, 2, -2)
scene2.add(seconduppercubeMesh)

//thirduppercube
const thirduppercube = new THREE.BoxGeometry(3, 3, 3)
const thirduppercubeMat = [
    new THREE.MeshStandardMaterial({ color: "#969491", emissive: "#969491" }),
    new THREE.MeshStandardMaterial({ color: "#D06E00", emissive: "#D06E00" }),
    new THREE.MeshStandardMaterial({ color: "#969491", emissive: "#969491" }),
    new THREE.MeshStandardMaterial({ color: "#D06E00", emissive: "#D06E00" }),
    new THREE.MeshStandardMaterial({ color: "#D06E00", emissive: "#D06E00" }),
    new THREE.MeshStandardMaterial({ color: "#969491", emissive: "#969491" }),
];
const thirduppercubeMesh = new THREE.Mesh(thirduppercube, thirduppercubeMat)
thirduppercubeMesh.position.set(2, 2, -2)
scene2.add(thirduppercubeMesh)


//forthuppercube
const forthuppercube = new THREE.BoxGeometry(3, 3, 3)
const forthuppercubeMat = [
    new THREE.MeshStandardMaterial({ color: "#969491", emissive: "#969491" }),
    new THREE.MeshStandardMaterial({ color: "#D06E00", emissive: "#D06E00" }),
    new THREE.MeshStandardMaterial({ color: "#969491", emissive: "#969491" }),
    new THREE.MeshStandardMaterial({ color: "#D06E00", emissive: "#D06E00" }),
    new THREE.MeshStandardMaterial({ color: "#969491", emissive: "#969491" }),
    new THREE.MeshStandardMaterial({ color: "#D06E00", emissive: "#D06E00" }),
];

const forthuppercubeMesh = new THREE.Mesh(forthuppercube, forthuppercubeMat)
forthuppercubeMesh.position.set(2, 2, 2)
scene2.add(forthuppercubeMesh)



//firstlowercube
const firstlowercube = new THREE.BoxGeometry(3, 3, 3)
const firstlowercubeMat = [
    new THREE.MeshStandardMaterial({ color: "#D06E00", emissive: "#D06E00" }),
    new THREE.MeshStandardMaterial({ color: "#969491", emissive: "#969491" }),
    new THREE.MeshStandardMaterial({ color: "#D06E00", emissive: "#D06E00" }),
    new THREE.MeshStandardMaterial({ color: "#969491", emissive: "#969491" }),
    new THREE.MeshStandardMaterial({ color: "#969491", emissive: "#969491" }),
    new THREE.MeshStandardMaterial({ color: "#D06E00", emissive: "#D06E00" }),
];
const firstlowercubeMesh = new THREE.Mesh(firstlowercube, firstlowercubeMat)
firstlowercubeMesh.position.set(-2, -2, 2)
scene2.add(firstlowercubeMesh)


//secondlowercube
const secondlowercube = new THREE.BoxGeometry(3, 3, 3)
const secondlowercubeMat = [
    new THREE.MeshStandardMaterial({ color: "#D06E00", emissive: "#D06E00" }),
    new THREE.MeshStandardMaterial({ color: "#969491", emissive: "#969491" }),
    new THREE.MeshStandardMaterial({ color: "#D06E00", emissive: "#D06E00" }),
    new THREE.MeshStandardMaterial({ color: "#969491", emissive: "#969491" }),
    new THREE.MeshStandardMaterial({ color: "#D06E00", emissive: "#D06E00" }),
    new THREE.MeshStandardMaterial({ color: "#969491", emissive: "#969491" }),
];

const secondlowercubeMesh = new THREE.Mesh(secondlowercube, secondlowercubeMat)
secondlowercubeMesh.position.set(-2, -2, -2)
scene2.add(secondlowercubeMesh)



//thirdlowercube
const thirdlowercube = new THREE.BoxGeometry(3, 3, 3)
const thirdlowercubeMat = [
    new THREE.MeshStandardMaterial({ color: "#969491", emissive: "#969491" }),
    new THREE.MeshStandardMaterial({ color: "#D06E00", emissive: "#D06E00" }),
    new THREE.MeshStandardMaterial({ color: "#D06E00", emissive: "#D06E00" }),
    new THREE.MeshStandardMaterial({ color: "#969491", emissive: "#969491" }),
    new THREE.MeshStandardMaterial({ color: "#D06E00", emissive: "#D06E00" }),
    new THREE.MeshStandardMaterial({ color: "#969491", emissive: "#969491" }),
];

const thirdlowercubeMesh = new THREE.Mesh(thirdlowercube, thirdlowercubeMat)
thirdlowercubeMesh.position.set(2, -2, -2)
scene2.add(thirdlowercubeMesh)

//forthlowercube
const forthlowercube = new THREE.BoxGeometry(3, 3, 3)
const forthlowercubeMat = [
    new THREE.MeshStandardMaterial({ color: "#969491", emissive: "#969491" }),
    new THREE.MeshStandardMaterial({ color: "#D06E00", emissive: "#D06E00" }),
    new THREE.MeshStandardMaterial({ color: "#D06E00", emissive: "#D06E00" }),
    new THREE.MeshStandardMaterial({ color: "#969491", emissive: "#969491" }),
    new THREE.MeshStandardMaterial({ color: "#969491", emissive: "#969491" }),
    new THREE.MeshStandardMaterial({ color: "#D06E00", emissive: "#D06E00" }),
];
const forthlowercubeMesh = new THREE.Mesh(forthlowercube, forthlowercubeMat)
forthlowercubeMesh.position.set(2, -2, 2)
scene2.add(forthlowercubeMesh)





const spotlight2 = new THREE.DirectionalLight("#fafafa", 0.5);
spotlight2.position.set(5, 5, 5)
scene2.add(spotlight2)

/*const spotlight2helper = new THREE.DirectionalLightHelper(spotlight2)
scene2.add(spotlight2helper)*/


var controls2 = new OrbitControls(camera2, renderer2.domElement);
controls2.enableDamping = true;
controls2.dampingFactor = 0.03;
controls2.enableZoom = false;


/*const gridHelp2 = new THREE.GridHelper(100,10)
scene2.add(gridHelp2)*/

//Profile Image Cube
var renderer3 = new THREE.WebGLRenderer({
    antialias: true,
    canvas: document.querySelector("#bg3"),
    alpha: true
});
renderer3.setSize(w2, h2);
renderer3.setPixelRatio(window.devicePixelRatio);

var camera3 = new THREE.PerspectiveCamera(85, w2 / h2, 0.1, 1000);
camera3.position.z = 5;

var controls3 = new OrbitControls(camera3, renderer3.domElement);
controls3.enableDamping = true;
controls3.dampingFactor = 0.03;
controls3.enableZoom = false;


var scene3 = new THREE.Scene();

const profile_Cub = new THREE.BoxGeometry(4, 4, 4)
const profile_CubMat = [
    new THREE.MeshStandardMaterial({
        map: loader.load("./images/profileImage.jpg", (texture) => {
            texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
            texture.encoding = THREE.sRGBEncoding;
        }),
    }),
    new THREE.MeshStandardMaterial({
        map: loader.load("./images/profileImage.jpg", (texture) => {
            texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
            texture.encoding = THREE.sRGBEncoding;
        })
    }),
    new THREE.MeshStandardMaterial({
        map: loader.load("./images/profileImage.jpg", (texture) => {
            texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
            texture.encoding = THREE.sRGBEncoding;
        })
    }),
    new THREE.MeshStandardMaterial({
        map: loader.load("./images/profileImage.jpg", (texture) => {
            texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
            texture.encoding = THREE.sRGBEncoding;
        })
    }),
    new THREE.MeshStandardMaterial({
        map: loader.load("./images/profileImage.jpg", (texture) => {
            texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
            texture.encoding = THREE.sRGBEncoding;
        })
    }),
    new THREE.MeshStandardMaterial({
        map: loader.load("./images/profileImage.jpg", (texture) => {
            texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
            texture.encoding = THREE.sRGBEncoding;
        })
    }),
];

const profile_CubMesh = new THREE.Mesh(profile_Cub, profile_CubMat)
scene3.add(profile_CubMesh)

const spotlight3 = new THREE.AmbientLight("#fafafa", 2);
scene3.add(spotlight3)



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

    profile_CubMesh.rotation.x += 0.0018
    profile_CubMesh.rotation.y += 0.0018
    profile_CubMesh.rotation.z += 0.0018


    controls.update();
    controls2.update()
    controls3.update()

    renderer.render(scene, camera);
    renderer2.render(scene2, camera2)
    renderer3.render(scene3, camera3)
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

        const stargeo = new THREE.OctahedronGeometry(2, 0)

        const numselect = Math.floor(Math.random() * colors.length)
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
            color: wirecolor[numselect],
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


$(document).ready(function (e) {
    var navHome = document.querySelector(".home")
    var navaboutme = document.querySelector(".aboutme")
    var navservices = document.querySelector(".services")
    var navwork = document.querySelector(".work")
    var navContacts = document.querySelector(".Contacts")
    navHome.style.color = "#fbda77"
    navHome.style.transform = "scale(1.2)"

    $(".home").click(function (e) {
        this.style.color = "#fbda77"
        this.style.transform = "scale(1.2)"

        navaboutme.style = ""
        navservices.style = ""
        navwork.style = ""
        navContacts.style = ""

        var homeCont = document.querySelector(".homeCont")
        homeCont.style = ""
        var aboutmeSection = document.querySelector(".aboutmeSection")
        aboutmeSection.style.display = "none"
        var servicesSection = document.querySelector(".servicesSection")
        servicesSection.style.display = "none"
        var workSection = document.querySelector(".workSection")
        workSection.style.display = "none"
        var contactsSection = document.querySelector(".contactsSection")
        contactsSection.style.display = "none"

        var changeClass = document.querySelector("body")
        changeClass.firstElementChild.nextElementSibling.setAttribute("class", "main")



    })

    $(".aboutme").click(function (e) {
        this.style.color = "#fbda77"
        this.style.transform = "scale(1.2)"


        navHome.style = ""
        navservices.style = ""
        navwork.style = ""
        navContacts.style = ""

        var homeCont = document.querySelector(".homeCont")
        homeCont.style.display = "none"
        var servicesSection = document.querySelector(".servicesSection")
        servicesSection.style.display = "none"
        var aboutmeSection = document.querySelector(".aboutmeSection")
        aboutmeSection.style = ""
        var workSection = document.querySelector(".workSection")
        workSection.style.display = "none"
        var contactsSection = document.querySelector(".contactsSection")
        contactsSection.style.display = "none"

        var changeClass = document.querySelector("body")
        changeClass.firstElementChild.nextElementSibling.setAttribute("class", "mainAbout")
    })

    $(".services").click(function (e) {
        this.style.color = "#fbda77"
        this.style.transform = "scale(1.2)"

        navHome.style = ""
        navaboutme.style = ""
        navwork.style = ""
        navContacts.style = ""

        var homeCont = document.querySelector(".homeCont")
        homeCont.style.display = "none"
        var servicesSection = document.querySelector(".servicesSection")
        servicesSection.style = ""
        var aboutmeSection = document.querySelector(".aboutmeSection")
        aboutmeSection.style.display = "none"
        var workSection = document.querySelector(".workSection")
        workSection.style.display = "none"
        var contactsSection = document.querySelector(".contactsSection")
        contactsSection.style.display = "none"

        var changeClass = document.querySelector("body")
        changeClass.firstElementChild.nextElementSibling.setAttribute("class", "mainSection")
    })

    $(".work").click(function (e) {
        this.style.color = "#fbda77"
        this.style.transform = "scale(1.2)"

        navHome.style = ""
        navaboutme.style = ""
        navservices.style = ""
        navContacts.style = ""

        var homeCont = document.querySelector(".homeCont")
        homeCont.style.display = "none"
        var servicesSection = document.querySelector(".servicesSection")
        servicesSection.style.display = "none"
        var aboutmeSection = document.querySelector(".aboutmeSection")
        aboutmeSection.style.display = "none"
        var workSection = document.querySelector(".workSection")
        workSection.style = ""
        var contactsSection = document.querySelector(".contactsSection")
        contactsSection.style.display = "none"

        var changeClass = document.querySelector("body")
        changeClass.firstElementChild.nextElementSibling.setAttribute("class", "mainWork")
    })

    $(".Contacts").click(function (e) {
        this.style.color = "#fbda77"
        this.style.transform = "scale(1.2)"

        navHome.style = ""
        navaboutme.style = ""
        navservices.style = ""
        navwork.style = ""

        var homeCont = document.querySelector(".homeCont")
        homeCont.style.display = "none"
        var servicesSection = document.querySelector(".servicesSection")
        servicesSection.style.display = "none"
        var aboutmeSection = document.querySelector(".aboutmeSection")
        aboutmeSection.style.display = "none"
        var workSection = document.querySelector(".workSection")
        workSection.style.display = "none"
        var contactsSection = document.querySelector(".contactsSection")
        contactsSection.style = ""

        var changeClass = document.querySelector("body")
        changeClass.firstElementChild.nextElementSibling.setAttribute("class", "mainContacts")
    })


    $(".ProbBomberClick").click(function (e) {
        var pulsenetimg = ['./images/ProbabilityBomberSC.png', './images/ProbabilityBomberSC1.png', './images/ProbabilityBomberSC2.png', './images/ProbabilityBomberSC3.png', './images/ProbabilityBomberSC4.png']
        
        $(".holdCarousel").text("")
        pulsenetimg.forEach((pn, index) => {
            $(".holdCarousel").append(`
                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                    <img src="${pn}" class="d-block" style="object-fit:contain; object-position: center; width:100%;" alt="...">
                </div>
            `);
        });

        $("#exampleModalLabel").text("ProbabilityBomber")
        $(".descPoint").text("A gamified learning platform inspired by the classic Bomberman game, designed to transform the way students learn probability by combining interactive gameplay with educational content. The platform engages students through level-based challenges, strategic decision-making, and real-time feedback, allowing them to apply probability concepts in a fun and immersive environment. By integrating game mechanics such as point scoring, power-ups, and progressively difficult levels, the platform encourages active learning, reinforces conceptual understanding, and motivates students to explore probability through hands-on experience.")
        $(".techPoint").text("React Js, PhaserJS, Firbase Authentication and Database, HTML, CSS, Bootstrap.")
        $(".challPoint").text("Responsive UI, Student Dashboard, Achievement System, Real-time Game Mechanics, Probability-based Challenges, Level Progression with Adaptive Difficulty, Firebase Authentication")
        var gitPoint = document.querySelector(".gitPoint")
        gitPoint.href= "https://github.com/zyle-geralde/ProbabilityBomberFrontEnd.git"
    })
    $(".BasaBuzzClick").click(function (e) {
        var pulsenetimg = ['./images/Basa1.png', './images/Basa2.png','./images/Basa3.png','./images/Basa4.png','./images/Basa5.png','./images/Basa6.png','./images/Basa7.png','./images/Basa8.png','./images/Basa9.png','./images/Basa10.png','./images/Basa11.png','./images/Basa12.png','./images/Basa13.png']
        
        $(".holdCarousel").text("")
        pulsenetimg.forEach((pn, index) => {
            $(".holdCarousel").append(`
                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                    <img src="${pn}" class="d-block" style="object-fit:contain; object-position: center; width:100%;" alt="...">
                </div>
            `);
        });

        $("#exampleModalLabel").text("BasaBuzz")
        $(".descPoint").text("BasaBuzz: BasaBuzz is an interactive book rating website developed as part of an internship project, aimed at creating a user-friendly platform for readers and administrators to engage with books efficiently. The system was built using ASP.NET for backend development, Razor Pages for frontend implementation, and MySQL for database management, following the MVC architecture to ensure clean separation of concerns and maintainability. Users can register, log in, verify their email, and reset passwords, providing a secure and personalized experience. The platform features dashboards for both admins and users, showcasing new arrivals, top-rated books, and book listings. Administrators can manage users and book genres effectively, including adding, editing, deleting, and searching entries. The responsive and organized UI, designed with Razor Pages and CSS, ensures accessibility across devices. BasaBuzz emphasizes secure data handling, structured CRUD operations, and scalability, making it a robust solution for book enthusiasts, enhancing engagement, and streamlining book management workflows.")
        $(".techPoint").text("Razor, HTML, CSS, Javascript, FireBase, ASP.NET, MySQL")
        $(".challPoint").text("Responsive UI, User Authentication, Admin & User Dashboards, Book Management, Email Verification, Password Reset, Secure CRUD Operations")
        var gitPoint = document.querySelector(".gitPoint")
        gitPoint.href= "https://github.com/zyle-geralde/ASIBasecodeCsharp.git"
    })
    $(".PulseNetClick").click(function (e) {
        var pulsenetimg = ['./images/PulseNet1.png', './images/PulseNet2.png', './images/PulseNet3.png', './images/PulseNet4.png', './images/PulseNet5.png', './images/PulseNet6.png']
        
        $(".holdCarousel").text("")
        pulsenetimg.forEach((pn, index) => {
            $(".holdCarousel").append(`
                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                    <img src="${pn}" class="d-block" style="object-fit:contain; object-position: center; width:100%;" alt="...">
                </div>
            `);
        });

        $("#exampleModalLabel").text("PulseNet")
        $(".descPoint").text("A dynamic and interactive social media platform designed to connect people, build communities, and enable seamless content sharing. It features a user-friendly, fully responsive interface that ensures smooth navigation across devices. The platform supports core social features such as creating posts, liking and commenting, interacting with other users, and managing personal profiles. With its clean design and intuitive layout, it provides an engaging online environment where users can communicate, express themselves, and stay connected with others.")
        $(".techPoint").text("React Js, Django, Sqlite, HTML, CSS, Bootstrap.")
        $(".challPoint").text("Responsive User Interface, JSON Web Token Implementation for Authorization, Password Hashing for security enhancement")
        var gitPoint = document.querySelector(".gitPoint")
        gitPoint.href= "https://github.com/zyle-geralde/PulseNet.git"
    })

    $(".YapperMailClick").click(function (e) {
        var pulsenetimg = ['./images/YapperMail.png','./images/YapperMail1.png', './images/YapperMail2.png', './images/YapperMail3.png', './images/YapperMail4.png', './images/YapperMail5.png', './images/YapperMail6.png','./images/YapperMail7.png','./images/YapperMail8.png']
        
        $(".holdCarousel").text("")
        pulsenetimg.forEach((pn, index) => {
            $(".holdCarousel").append(`
                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                    <img src="${pn}" class="d-block" style="object-fit:contain; object-position: center; width:100%;" alt="...">
                </div>
            `);
        });

        $("#exampleModalLabel").text("YapperMail")
        $(".descPoint").text("A dynamic and feature-rich email management system designed to streamline how users organize, categorize, and interact with their emails. The platform integrates an intelligent AI chatbot that functions as a smart assistant, helping users navigate their inbox, generate responses, and manage tasks more efficiently. It also supports collaborative email functionalities, allowing multiple users to communicate, coordinate, and work together within shared email threads in real time. With its responsive interface, secure authentication, and smooth user experience, the system enhances productivity and provides a modern, intuitive approach to email handling.")
        $(".techPoint").text("Django, Websockets, Sqlite, HTML, CSS, Bootstrap, Tailwind, Firebase, Jquery.")
        $(".challPoint").text("Responsive User Interface, One-time-Password(OTP) integration, Integrated a real-time notification system, Integrated chatbot intended for user assistance, User Collaboration.")
        var gitPoint = document.querySelector(".gitPoint")
        gitPoint.href = "https://github.com/hulyarein/Yapper-Mail-.git"
    })

    $(".TechnoSpaceClick").click(function (e) {
        var pulsenetimg = ['./images/technoSpace.png', './images/technoSpace1.png', './images/technoSpace2.png', './images/technoSpace3.png', './images/technoSpace4.png', './images/technoSpace5.png', './images/technoSpace6.png']
        
        $(".holdCarousel").text("")
        pulsenetimg.forEach((pn, index) => {
            $(".holdCarousel").append(`
                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                    <img src="${pn}" class="d-block" style="object-fit:contain; object-position: center; width:100%;" alt="...">
                </div>
            `);
        });

        $("#exampleModalLabel").text("TechnoSpace")
        $(".descPoint").text("A dedicated online marketplace designed exclusively for students and faculty of Cebu Institute of Technology–University, providing a secure and convenient platform for buying and selling second-hand products. The system enables users to post items, browse listings, negotiate prices, and manage transactions within a trusted academic community. With features such as product categorization, user authentication, and responsive interface design, the platform ensures a smooth and reliable experience for campus users. It promotes sustainability by encouraging the reuse of items while fostering a practical and student-friendly trading environment.")
        $(".techPoint").text("ASP.NET, ReactJS, Azure, Mysql, HTML, CSS, Tailwind, Bootstrap")
        $(".challPoint").text("Listing Categorization, Transaction Transparency, Filtering System, On App messaging, Ratings and Reviews.")
        var gitPoint = document.querySelector(".gitPoint")
        gitPoint.href = "https://github.com/zyle-geralde/TechnoSpaceFrontEnd.git"
    })

    $(".ChatBoxClick").click(function (e) {
        var pulsenetimg = ['./images/ChatBox.png', './images/ChatBox1.png']
        
        $(".holdCarousel").text("")
        pulsenetimg.forEach((pn, index) => {
            $(".holdCarousel").append(`
                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                    <img src="${pn}" class="d-block" style="object-fit:contain; object-position: center; width:100%;" alt="...">
                </div>
            `);
        });

        $("#exampleModalLabel").text("ChatBox")
        $(".descPoint").text("ChatBox is a real-time chat application that enables open and instant communication between users in a fast, seamless, and interactive environment. Built with real-time messaging capabilities, the platform supports direct user-to-user conversations, allowing individuals to exchange messages instantly through a responsive and intuitive interface. It features reliable backend infrastructure, efficient data handling, and a user-friendly layout to ensure smooth message delivery and consistent connection. Designed for easy communication, ChatBox fosters social interaction, collaboration, and community engagement through its accessible real-time chat features.")
        $(".techPoint").text("Express/NodeJs, Websockets, HTML, CSS, JQuery, Bootstrap, MongoDB, FireBase")
        $(".challPoint").text("Responsive User Interface, RealTime Chat System")
        var gitPoint = document.querySelector(".gitPoint")
        gitPoint.href = "https://github.com/zyle-geralde/ChatBox.git"
    })

    $(".ForumWebsiteClick").click(function (e) {
        var pulsenetimg = ['./images/ForumApp.png', './images/ForumApp1.png', './images/ForumApp2.png', './images/ForumApp3.png']
        
        $(".holdCarousel").text("")
        pulsenetimg.forEach((pn, index) => {
            $(".holdCarousel").append(`
                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                    <img src="${pn}" class="d-block" style="object-fit:contain; object-position: center; width:100%;" alt="...">
                </div>
            `);
        });

        $("#exampleModalLabel").text("Forum App")
        $(".descPoint").text("A Forum Application where users can create and manage their posts, engage in discussions, and interact with the community through meaningful conversations. The platform allows users to publish new topics, edit or delete their own posts, and reply to others, fostering collaborative knowledge sharing. With its user-friendly and responsive interface, the forum ensures smooth navigation and organized content presentation, making it easier for users to participate, exchange insights, and stay connected with ongoing discussions.")
        $(".techPoint").text("Express/NodeJs, HTML, CSS, JQuery, MongoDB")
        $(".challPoint").text("Json webtoken implementation, Posts are divided into pages.")
        var gitPoint = document.querySelector(".gitPoint")
        gitPoint.href = "https://github.com/zyle-geralde/NodeForumApp.git"
    })

    
    $(".ObjectDetectorClick").click(function (e) {
        var pulsenetimg = ['./images/Signlang.png', './images/Signlang1.png']
        
        $(".holdCarousel").text("")
        pulsenetimg.forEach((pn, index) => {
            $(".holdCarousel").append(`
                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                    <img src="${pn}" class="d-block" style="object-fit:contain; object-position: center; width:100%;" alt="...">
                </div>
            `);
        });

        $("#exampleModalLabel").text("Sign Language Recognition")
        $(".descPoint").text("This project builds a complete pipeline for American Sign Language (ASL) recognition using computer vision and classical machine learning. It first converts raw hand images into structured MediaPipe hand-landmark coordinates, storing them as a dataset for training. A Random Forest classifier is trained on these 63-point landmarks, with label encoding for 26 alphabet classes. Finally, a real-time webcam-based detection system is implemented, drawing hand landmarks live and predicting the corresponding ASL letter with smoothing using prediction history.")
        $(".techPoint").text("Python, OpenCV, MediaPipe, NumPy, Pandas, Scikit-learn, RandomForestClassifier, Joblib, TQDM")
        $(".challPoint").text("End-to-end ASL pipeline, MediaPipe landmark extraction, Classical ML classifier (Random Forest), Label encoding, Real-time webcam detection, Prediction smoothing with history, Hand landmark visualization, Model persistence with Joblib")
        var gitPoint = document.querySelector(".gitPoint")
        gitPoint.href = "https://github.com/zyle-geralde/SignLanguage.git"
    })

    
    $(".RACClick").click(function (e) {
        var pulsenetimg = ['./images/RAC.png', './images/RAC1.png', './images/RAC2.png', './images/RAC3.png']
        
        $(".holdCarousel").text("")
        pulsenetimg.forEach((pn, index) => {
            $(".holdCarousel").append(`
                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                    <img src="${pn}" class="d-block" style="object-fit:contain; object-position: center; width:100%;" alt="...">
                </div>
            `);
        });

        $("#exampleModalLabel").text("RAC Waste Segragation")
        $(".descPoint").text("RAC Waste Segregation is an AI-powered image classification system designed to automatically identify and categorize recyclable waste materials. Using a deep-learning pipeline built on MobileNetV2 for feature extraction and FAISS for fast similarity search, the system classifies waste into categories such as plastic, metal, paper, cardboard, glass, and biodegradable. The project utilizes the Recycling App dataset from HuggingFace and implements a full machine learning workflow—from data loading and preprocessing to embedding generation, indexing, and evaluation. The model supports real-time prediction from image input and includes performance metrics such as accuracy, classification reports, and confusion matrices for validation.")
        $(".techPoint").text("Python, TensorFlow/Keras (MobileNetV2), FAISS, Scikit-learn, NumPy, Pandas, Matplotlib, Seaborn, HuggingFace Datasets, PIL, Pickle")
        $(".challPoint").text("Waste classification with MobileNetV2, FAISS nearest-neighbor search, HuggingFace Recycling App dataset, Real-time image prediction, Accuracy and confusion metrics, Embedding preprocessing, Modular design for prediction and evaluation")
        var gitPoint = document.querySelector(".gitPoint")
        gitPoint.href = "https://github.com/zyle-geralde/RAC_WasteSegragation.git"
    })

    
    $(".ClassiClick").click(function (e) {
        var pulsenetimg = ['./images/ballClass.png', './images/ballClass (2).png']
        
        $(".holdCarousel").text("")
        pulsenetimg.forEach((pn, index) => {
            $(".holdCarousel").append(`
                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                    <img src="${pn}" class="d-block" style="object-fit:contain; object-position: center; width:100%;" alt="...">
                </div>
            `);
        });

        $("#exampleModalLabel").text("Ball Classification")
        $(".descPoint").text("This system builds a ball image classification model by fine-tuning a pre-trained ResNet50V2 network. It includes dataset loading from Kaggle, image preprocessing, data augmentation, model construction with custom classification layers, training with early stopping, and visualization of training performance. The project demonstrates a full deep learning workflow from data preparation to inference.")
        $(".techPoint").text("TensorFlow, Keras, ResNet50V2, ImageDataGenerator, KaggleHub, NumPy, Matplotlib, Python")
        $(".challPoint").text("Transfer learning with ResNet50V2, Custom classification head, Data augmentation pipeline, Early stopping callback, Training visualization with accuracy/loss plots, Inference on new images, Automatic preprocessing pipeline")
        var gitPoint = document.querySelector(".gitPoint")
        gitPoint.href = "https://github.com/zyle-geralde"
    })

    $(".ImageCompressorClick").click(function (e) {
        var pulsenetimg = ['./images/Compressor.png', './images/Compressor1.png']
        
        $(".holdCarousel").text("")
        pulsenetimg.forEach((pn, index) => {
            $(".holdCarousel").append(`
                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                    <img src="${pn}" class="d-block" style="object-fit:contain; object-position: center; width:100%;" alt="...">
                </div>
            `);
        });

        $("#exampleModalLabel").text("Image Compressor")
        $(".descPoint").text("A machine learning model that leverages K-Means Clustering for efficient image compression. By reducing the number of unique colors in an image, the model achieves significant size reduction while maintaining visual quality.")
        $(".techPoint").text("Python, Numpy, Pandas, Matplotlib, Pillow, Scikit learn")
        $(".challPoint").text("Image Compression, adjustable Compression size")
        var gitPoint = document.querySelector(".gitPoint")
        gitPoint.href = "https://github.com/zyle-geralde/ImageCompressor.git"
    })


    $(".DigitClassifierClick").click(function (e) {
        var pulsenetimg = ['./images/Classifier.png', './images/Classifier1.png']
        
        $(".holdCarousel").text("")
        pulsenetimg.forEach((pn, index) => {
            $(".holdCarousel").append(`
                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                    <img src="${pn}" class="d-block" style="object-fit:contain; object-position: center; width:100%;" alt="...">
                </div>
            `);
        });

        $("#exampleModalLabel").text("Digital Classifier")
        $(".descPoint").text("A machine learning model that accurately recognizes digits (0-9) from images, such as handwritten or printed numbers. The model processes image data, extracts relevant features, and predicts the corresponding digit with high precision.")
        $(".techPoint").text("Python, Numpy, Pandas, Matplotlib, Pillow, Scikit learn, Tensorflow, Keras, Flask")
        $(".challPoint").text("Has a User Interface using Flask, Image recognition")
        var gitPoint = document.querySelector(".gitPoint")
        gitPoint.href = "https://github.com/zyle-geralde/DigitClassifierModel.git"
    })


    emailjs.init('0Irig6RWuoCC36Xj3');


    // document.querySelector('.contactformSend').addEventListener('submit', function (event) {
    //     event.preventDefault()

    //     if ($(".nameContact").val().trim() == "" || $(".emailContact").val().trim() == "" || $(".messageContact").val().trim() == "") {
    //         alert("Invalid Credentials")
    //         return
    //     }

    //     emailjs.send('service_joqu03p', 'template_obj31je', {
    //         from_name: $(".nameContact").val(),
    //         to_name: 'Zyle Geralde',
    //         from_email: $(".emailContact").val(),
    //         message: $(".messageContact").val()
    //         },'0Irig6RWuoCC36Xj3',
    //     ).then(() => {
    //         alert("Email Sent Successfully")
    //         $(".nameContact").val("")
    //         $(".emailContact").val("")
    //         $(".messageContact").val("")
    //     },(error) => {
    //         alert("An error occured")
    //     })

    // })

    $(".linkIconClick").click(function (e) {
        window.open("https://www.linkedin.com/in/zyle-geralde-de-la-peña-37b2a926b")
    })
    $(".githubClick").click(function (e) {
        window.open("https://github.com/zyle-geralde")
    })

    $(".resumeClick").click(function (e) {
        window.open("https://drive.google.com/file/d/1fkPKCnu5rrH4shvndWO5lRlYSk2N4TTY/view?usp=sharing")
    })

})


