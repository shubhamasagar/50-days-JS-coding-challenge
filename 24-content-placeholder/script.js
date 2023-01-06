const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML =
    '<img src="https://r4.wallpaperflare.com/wallpaper/66/41/250/cyberpunk-futuristic-computer-interfaces-wallpaper-b910f80db1daed1bf6b7e81f9081764d.jpg" alt="" />'
  title.innerHTML = 'how i imagine i look while i code'
  excerpt.innerHTML =
    'a small blog of my coding life'
  profile_img.innerHTML =
    '<img src="https://c0.wallpaperflare.com/path/902/322/498/profile-smile-portrait-dog-361f69171663740e7f400e6d48a786b2.jpg" alt="" />'
  name.innerHTML = 'John Doe'
  date.innerHTML = '06 Jan 2023'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}
