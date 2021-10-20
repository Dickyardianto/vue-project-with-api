<template>
  <div id="app">
    <router-view name="header" />
    <div class="wrapper">
      <router-view />
    </div>
    <router-view name="footer" />
  </div>
</template>
<script>
// import Home from "./views/Home.vue";

export default {
  // components: {
  //   Home,
  // },
};
</script>

