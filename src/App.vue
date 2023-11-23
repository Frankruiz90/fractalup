<template>
  <div id="app" class="pt-4 ">
    <MySidebar class="text-start ms-4" />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>
<script>
import MySidebar from "@/components/MySidebar.vue";
export default {
  components: {
    MySidebar,
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: rgba(5, 75, 180, 0.918);
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
