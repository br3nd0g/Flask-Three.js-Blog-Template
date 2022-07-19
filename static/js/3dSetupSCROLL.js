const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#bg') });
document.body.appendChild(renderer.domElement);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);

// shapes


const geometry = new THREE.IcosahedronGeometry(13, 0);
const material = new THREE.MeshStandardMaterial({ color: 0x4f4e34 });
const dodecahedron = new THREE.Mesh(geometry, material);
dodecahedron.position.x = 14;
dodecahedron.position.z = -10;
dodecahedron.position.y = 5;

scene.add(dodecahedron);


const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// bg

const background = new THREE.TextureLoader().load("../static/images/3bg.jpg");
scene.background = background;


function animateOnScroll() {

  var scrolldistance = document.body.getBoundingClientRect().top;

  //dodecahedron.rotation.x = 0.005 * scrolldistance;
  //dodecahedron.rotation.y = 0.005 * scrolldistance;
  dodecahedron.rotation.z = 0.005 * scrolldistance;
  
}

function resizeRender() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

	renderer.render(scene, camera);

}

var animate = function() {
  requestAnimationFrame(animate);

  dodecahedron.rotation.x += 0.01;
  //dodecahedron.rotation.y += 0.005;
  //dodecahedron.rotation.z += 0.01;


  renderer.render(scene, camera);
};

animate();
document.body.onscroll = animateOnScroll;
window.onresize = resizeRender;