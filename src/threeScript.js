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

    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.y = 10;
    camera.position.z = 600;

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0, 0, 0);

    const pointLight1 = new THREE.PointLight(0xdddd00);
    pointLight1.position.set(500, 500, 500);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffffff, 0.25);
    pointLight2.position.set(-500, -500, -500);
    scene.add(pointLight2);

    sphere = new THREE.Mesh(new THREE.SphereGeometry(200, 20, 10), new THREE.MeshPhongMaterial({ flatShading: true }));
    scene.add(sphere);

    // Plane

    plane = new THREE.Mesh(new THREE.PlaneGeometry(400, 400), new THREE.MeshBasicMaterial({ color: 0xe0e0e0 }));
    plane.position.y = -200;
    plane.rotation.x = -Math.PI / 2;
    scene.add(plane);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(200, 200);

    effect = new AsciiEffect(renderer, ' .:-+*=%@#', { invert: true });
    effect.setSize(300, 300);
    effect.domElement.style.color = 'white';
    effect.domElement.style.backgroundColor = 'black';

    // Special case: append effect.domElement, instead of renderer.domElement.
    // AsciiEffect creates a custom domElement (a div container) where the ASCII elements are placed.

    // document.body.appendChild( effect.domElement );
    document.body.getElementsByClassName('threeCnvs')[0].appendChild(effect.domElement);

    controls = new TrackballControls(camera, effect.domElement);

    //

    window.addEventListener('resize', onWindowResize);

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(200, 200);
    effect.setSize(200, 200);

}

//

function animate() {

    requestAnimationFrame(animate);

    render();

}

function render() {

    const timer = Date.now() - start;

    sphere.position.y = Math.abs(Math.sin(timer * 0.002)) * 150;
    sphere.rotation.x = timer * 0.0003;
    sphere.rotation.z = timer * 0.0002;

    controls.update();

    effect.render(scene, camera);

}