<script setup>
import Ref from "./components/Bai1.vue";
import Reactive from "./components/Bai2.vue";
import DataBinding from "./components/Bai3.vue";
import StyleBinding from "./components/Bai4.vue";
import { ref } from 'vue';

</script>

<template>
  <div class="container my-5">

    <div style="margin-top: 3rem;">
      <h1 style="color: green">Bài 1</h1>
      <Ref />
    </div>

    <div style="margin-top: 3rem;">
      <h1 style="color: green">Bài 2</h1>
      <Reactive />
    </div>

    <div style="margin-top: 3rem;">
      <h1 style="color: green">Bài 3</h1>
      <DataBinding />
    </div>

    <div style="margin-top: 3rem;">
      <h1 style="color: green">Bài 4</h1>
      <StyleBinding />
    </div>

  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

</style>
