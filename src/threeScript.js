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
document.body.getElementsByClassName('threeCnvs')[0].appendChild(renderer.domElement)

// GLFTloader
var loader = new GLTFLoader()

loader.load('./GLTF/wood_box/scene.gltf', (gltf)=>{
    var wood_box = gltf.scene.children[0]
    wood_box.scale.set(0.5, 0.5, 0.5)
    scene.add(gltf.scene)
    animate()
})


function animate(){
    renderer.render(scene, camera)
    requestAnimationFrame(()=>{
        animate()
    })
}