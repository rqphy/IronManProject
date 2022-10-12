import * as THREE from 'three'
import { Vector3 } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Experience from './Experience'

export default class Camera
{
    constructor()
    {
        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.canvas = this.experience.canvas
        this.debug = this.experience.debug

        if(this.debug.active)
        {
            this.debugFolder = this.debug.ui.addFolder('Camera')
        }

        this.setInstance()
        // this.setOrbitControls()
    }

    setInstance()
    {
        this.instance = new THREE.PerspectiveCamera(
            35,
            this.sizes.width / this.sizes.height,
            0.1,
            100
        )
        this.instance.position.set(5, 14, 12)
        this.scene.add(this.instance)

        if(this.debug.active)
        {
            this.debugFolder
                .add(this.instance.position, 'x')
                .min(-5)
                .max(5)
                .step(0.001)
            this.debugFolder
                .add(this.instance.position, 'y')
                .min(-20)
                .max(20)
                .step(0.001)
            this.debugFolder
                .add(this.instance.position, 'z')
                .min(-20)
                .max(20)
                .step(0.001)
        }
    }

    setOrbitControls()
    {
        this.controls = new OrbitControls(this.instance, this.canvas)
        this.controls.enableDamping = true
    }

    resize()
    {
        this.instance.aspect = this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
    }

    update()
    {
        // this.controls.update()
        // this.instance.lookAt(new THREE.Vector3(0, 10, 0))
        this.instance.lookAt(new THREE.Vector3(0, 9, 0))
    }
}