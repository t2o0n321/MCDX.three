import { GLTFLoader } from "./module/module/three.js-master/examples/jsm/loaders/GLTFLoader.js"

        import * as THREE from './module/module/three.js-master/src/sikako/three.module.js';

            import { AsciiEffect } from './module/module/three.js-master/src/sikako/AsciiEffect.js';
            import { TrackballControls } from './module/module/three.js-master/src/sikako/TrackballControls.js';

            let camera, controls, scene, renderer, effect;

            let sphere, plane;

            const start = Date.now();

            init();
            animate();

            function init() {

                camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
                camera.position.y = 10;
                camera.position.z = 600;

                scene = new THREE.Scene();
                scene.background = new THREE.Color( 0, 0, 0 );

                const pointLight1 = new THREE.PointLight( 0xdddd00 );
                pointLight1.position.set( 500, 500, 500 );
                scene.add( pointLight1 );

                const pointLight2 = new THREE.PointLight( 0xffffff, 0.25 );
                pointLight2.position.set( - 500, - 500, - 500 );
                scene.add( pointLight2 );

                sphere = new THREE.Mesh( new THREE.SphereGeometry( 200, 20, 10 ), new THREE.MeshPhongMaterial( { flatShading: true } ) );
                scene.add( sphere );

                // Plane

                plane = new THREE.Mesh( new THREE.PlaneGeometry( 400, 400 ), new THREE.MeshBasicMaterial( { color: 0xe0e0e0 } ) );
                plane.position.y = - 200;
                plane.rotation.x = - Math.PI / 2;
                scene.add( plane );

                renderer = new THREE.WebGLRenderer();
                renderer.setSize( 200, 200 );

                effect = new AsciiEffect( renderer, ' .:-+*=%@#', { invert: true } );
                effect.setSize( 300,300 );
                effect.domElement.style.color = 'white';
                effect.domElement.style.backgroundColor = 'black';

                // Special case: append effect.domElement, instead of renderer.domElement.
                // AsciiEffect creates a custom domElement (a div container) where the ASCII elements are placed.

                // document.body.appendChild( effect.domElement );
                document.body.getElementsByClassName('threeCnvs')[0].appendChild( effect.domElement );

                controls = new TrackballControls( camera, effect.domElement );

                //

                window.addEventListener( 'resize', onWindowResize );

            }

            function onWindowResize() {

                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

                renderer.setSize( 200,200 );
                effect.setSize( 200,200 );

            }

            //

            function animate() {

                requestAnimationFrame( animate );

                render();

            }

            function render() {

                const timer = Date.now() - start;

                sphere.position.y = Math.abs( Math.sin( timer * 0.002 ) ) * 150;
                sphere.rotation.x = timer * 0.0003;
                sphere.rotation.z = timer * 0.0002;

                controls.update();

                effect.render( scene, camera );

            }

















// // Variables
// const fov = 75
// const aspect = window.innerWidth/innerHeight
// const near = 0.1
// const far = 100
// ////

// const scene = new THREE.Scene()
// const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
// const renderer = new THREE.WebGLRenderer()

// renderer.setSize(200, 200, false)
//             // renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.getElementsByClassName('threeCnvs')[0].appendChild(renderer.domElement)

// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// camera.position.z = 5;

//             const animate = function () {
//                 requestAnimationFrame( animate );

//                 cube.rotation.x += 0.01;
//                 cube.rotation.y += 0.01;

//                 renderer.render( scene, camera );
//             };

//             animate();

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