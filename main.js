import { Sprite } from './classes/Sprite'
import { Resources } from './res/resources'
import './style.css'
import { Vector2 } from './utils/Vector2'

const canvas = document.getElementById("canvas")
const c = canvas.getContext("2d")


const res = new Resources()
const player = new Sprite({
  resource: res.images.player,
  frameSize: new Vector2(32, 32),
  hFrames: 3,
  vFrames:8,
  frame:4
})



const animate = () => {
  requestAnimationFrame(animate)
player.drawImage(c , 40 ,40)
}

animate()