import * as THREE from 'three'
import Experience from '../Experience'

export default class IronManRig
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.resource = this.resources.items.ironManRig
        this.setModel()
    }

    setModel()
    {
        this.model = this.resource.scene

        this.model.scale.set(0.02, 0.02, 0.02)
        // this.model.rotation.y = 0.2 * Math.PI
        this.model.position.set(0, 0, 0)

        this.scene.add(this.model)

        this.model.traverse((child) =>
        {
            if(child instanceof THREE.Mesh)
            {
                child.castShadow = true
            }
        })
    }
}