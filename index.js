import "./index.css";
import img_new from "./assets/js_img.png";

console.log('Hello World!')

const h1 = document.createElement('h1')
h1.className = 'title'
h1.textContent = 'I love JS'
document.body.append(h1)

const img = document.createElement('img')
img.src = img_new
img.className = 'image'
document.body.append(img)