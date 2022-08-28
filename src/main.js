import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faGithub);
library.add(faTelegram);


import '../src/assets/styles/styles.scss'
const app = createApp(App);
app.config.devtools = true;
app.component("font-awesome-icon", FontAwesomeIcon).mount("#app");

