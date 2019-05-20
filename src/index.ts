import Vue from "vue";
import HelloComponent from "./components/test";
import VueParticles from 'vue-particles';
Vue.use(VueParticles);

let v = new Vue({
    el: "#app",
    template: `
    <div style="{ 'background-image': url(./images/background.jpg) }">
        <vue-particles
            color="#dedede"
            :particleOpacity="0.7"
            :particlesNumber="80"
            shapeType="circle"
            :particleSize="4"
            linesColor="#dedede"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="150"
            :moveSpeed="3"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push"
        >
        </vue-particles>
    </div>
    `,
    data: {
        name: "World",
        image: "./images/background.jpg"
    },
    components: {
        HelloComponent
    },
});