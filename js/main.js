import { Router } from './router.js'

const router = new Router()
router.add('/', "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/exploration", "/pages/exploration.html")


router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route() //para disparar no html

// tentar consertar o bg com o nav absolute e z-index 2 e o bg diferente em cada arq ocupando 100%

const link1 = document.querySelector(".link-1")
const link2 = document.querySelector(".link-2")
const link3 = document.querySelector(".link-3")
const bg1 = document.querySelector("#bg-1")
const bg2 = document.querySelector("#bg-2")
const bg3 = document.querySelector("#bg-3")

link1.addEventListener("click", () => {
    hideBg()
    bg1.classList.remove('hide')
})

link2.addEventListener("click", () => {
    hideBg()
    bg2.classList.remove('hide')
})

link3.addEventListener("click", () => {
    hideBg()
    bg3.classList.remove('hide')
})

function hideBg() {
    bg1.classList.add('hide')
    bg2.classList.add('hide')
    bg3.classList.add('hide')
}