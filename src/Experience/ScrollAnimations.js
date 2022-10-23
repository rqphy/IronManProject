import * as THREE from 'three'
import { TWEEN } from 'three/examples/jsm/libs/tween.module.min.js'
import Experience from './Experience'

export default class ScrollAnimations
{
    constructor()
    {
        this.experience = new Experience()
        this.canvas = this.experience.canvas
        this.camera = this.experience.camera

        this.setListeners()
    }

    setListeners()
    {
        // this.btns = [...document.querySelectorAll('.views-list .view')]
        // for(const btn of this.btns)
        // {
        //     btn.addEventListener('click', () =>
        //     {
        //         this.handleViewClick(btn)
        //     })
        // }
        console.log('scroll animations')
    }

    // animateCamera(position)
    // {
    //     new TWEEN.Tween(this.camera.instance.position)
    //         .to(position, 1800)
    //         .easing(TWEEN.Easing.Quadratic.InOut)
    //         .start()
    //         .onComplete(function ()
    //         {
    //             TWEEN.remove(this)
    //         })
    // }

    update()
    {
        // TWEEN.update()
    }
}