<template>
    <div>
    <b-button v-b-toggle.sidebar-variant>
      <b-img src="https://flagcdn.com/16x12/co.png" class="me-3" alt=""></b-img>
      Opciones</b-button>
    <b-sidebar class="border-rounded" id="sidebar-variant" title="Opciones" bg-variant="dark" text-variant="light" >
      <div class="px-3 py-2">
        <div class="nav-item">
          <ul>
            <li class="nav-item" v-b-toggle.sidebar-variant>
              <router-link to="/" class="nav-link" active>Home</router-link>
            </li >
            <li class="nav-item" v-b-toggle.sidebar-variant>
              <router-link to="/add-image" class="nav-link">Image</router-link>
            </li >
            <li class="nav-item" v-b-toggle.sidebar-variant>
              <router-link to="/change-info" class="nav-link">Info</router-link>
            </li >
          </ul>
        </div>
      </div>
    </b-sidebar>
  </div>
 
</template>

<script>
export default {
  name: "MySidebar",
  props: {
    msg: String,
  },
};
</script>

<style>
.close {
  background: fixed;
}
 li {
  list-style: none;
 }
</style>