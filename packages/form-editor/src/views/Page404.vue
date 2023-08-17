<template>
  <section class="page-404">
    <div class="text-box" @dblclick="navBack">
      <span class="text-box-404" data-text="404">404</span>
    </div>
    <canvas ref="elCanvas" class="canvas-404"></canvas>
  </section>
</template>
<script setup lang="ts" name="Page404">
import MouseTrack from '@ctrlc/mouse-track';
import { useRouter } from 'vue-router';

const elCanvas = ref();
onMounted(() => {
  new MouseTrack(unref(elCanvas));
});
const router = useRouter();
const navBack = () => {
  router.replace({
    path: '/',
  });
};
</script>
<style lang="scss" scoped>
.page-404 {
  position: relative;
  font-size: 0;
}
.text-box {
  display: block;
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 38.2%;
  bottom: 61.8%;
  width: 220px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  user-select: none;
  -webkit-box-reflect: below 1px linear-gradient(transparent, rgba(0, 0, 0, 0.2));

  &::before {
    content: attr(data-text);
    position: absolute;
    left: -2px;
    width: 100%;
    background-color: transparent;
    text-shadow: 2px 0 rgba($color: #fff, $alpha: 0.8);
    animation: animation-before 1s infinite linear alternate-reverse;
  }
  &::after {
    content: attr(data-text);
    position: absolute;
    left: 2px;
    width: 100%;
    background-color: transparent;
    text-shadow: -2px 0 rgba($color: #fff, $alpha: 0.8);
    animation: animation-after 1s infinite linear alternate-reverse;
  }
  &-404 {
    font-size: 100px;
    font-weight: bold;
    color: rgba($color: #fff, $alpha: 0.8);
    letter-spacing: 10px;
    text-shadow:
      0 0 10px rgba(255, 0, 0, 1),
      0 0 20px rgba(255, 0, 0, 0.75),
      0 0 40px rgba(255, 0, 0, 0.5),
      0 0 80px rgba(255, 0, 0, 0.25),
      0 0 160px rgba(255, 0, 0, 0.1);
    animation: animation-lakes 5s infinite linear alternate-reverse;
  }
}

.canvas-404 {
  display: block;
  width: 100vw;
  height: 100vh;
}

@keyframes animation-lakes {
  to {
    filter: hue-rotate(360deg);
  }
}

@keyframes animation-before {
  0% {
    clip-path: inset(0 0 0 0);
  }
  100% {
    clip-path: inset(0.62em 0 0.29em 0);
  }
}

@keyframes animation-after {
  0% {
    clip-path: inset(0 0 0 0);
  }
  100% {
    clip-path: inset(0.29em 0 0.62em 0);
  }
}
</style>
