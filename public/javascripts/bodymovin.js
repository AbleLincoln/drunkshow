import bodymovin from "lottie-web";
import data from "./data";

var animation = bodymovin.loadAnimation({
  container: document.getElementById('bm'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  // path: '/dist/data.json'
  path: data
});

export default animation;