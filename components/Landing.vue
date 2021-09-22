<template>
  <div class="landing">
    <div class="bgAnimation" id="bgAnimation"></div>
    <Post/>
    <!-- <Footer/> -->
  </div>
</template>

<script>
import Footer from './Footer.vue'
import Post from './Post.vue'
import * as THREE from 'three'
import * as p5 from 'p5'
import TRUNK from 'vanta/dist/vanta.trunk.min'

export default {
  components: { Post, Footer },
  mounted() {
    this.vantaEffect = TRUNK({
      el: "#bgAnimation",
      mouseControls: false,
      touchControls: false,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      backgroundColor: 0x222426,
      color: 0x98465f,
      spacing: 1.00,
      chaos: 1.00,
      p5: p5,
      THREE: THREE
    })
  },
  beforeDestroy() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy()
    }
  }
}
</script>

<style>

.landing {
  overflow: hidden;
}

.bgAnimation {
  height: 1000px;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

</style>