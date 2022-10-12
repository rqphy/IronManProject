import Experience from '../Experience'
import Environment from './Environment'
import IronManRig from './IronManRig'

export default class World
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        // Wait for resources
        this.resources.on('ready', () =>
        {
            // Setup if source
            this.ironManRig = new IronManRig()
        })
        
        // Setup if no source
        this.environment = new Environment()
    }
    
    update()
    {
        // Here the update functions
    }
}