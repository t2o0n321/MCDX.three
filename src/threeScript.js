import { GLTFLoader } from "./module/module/three.js-master/examples/jsm/loaders/GLTFLoader.js"

// Variables
const fov = 75
const aspect = window.innerWidth/innerHeight
const near = 0.1
const far = 100
////

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
const renderer = new THREE.WebGLRenderer()

renderer.setSize(200, 200, false)
            // renderer.setSize( window.innerWidth, window.innerHeight );
document.body.getElementsByClassName('threeCnvs')[0].appendChild(renderer.domElement)

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

            const animate = function () {
                requestAnimationFrame( animate );

                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;

                renderer.render( scene, camera );
            };

            animate();

// renderer.render( scene, camera );

// // GLFTloader
// var loader = new GLTFLoader()

// loader.load('./GLTF/wood_box/scene.gltf', (gltf)=>{
//     var wood_box = gltf.scene.children[0]
//     wood_box.scale.set(0.5, 0.5, 0.5)
//     scene.add(gltf.scene)
//     animate()
// })


// function animate(){
//     renderer.render(scene, camera)
//     requestAnimationFrame(()=>{
//         animate()
//     })
// }