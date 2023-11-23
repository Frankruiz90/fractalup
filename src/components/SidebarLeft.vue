<template>
  <div>
    <div>
      <!-- <b-button >Toggle Sidebar</b-button> -->
      <b-sidebar
        width="300px"
        no-close-on-backdrop
        id="sidebar-right"
        aria-modal="true"
        aria-label="sidebar-right"
        right
        shadow
      >
        <b-img
          class="my-3"
          v-bind:srcset="`https://flagcdn.com/224x168/${selectedCountry.code.toLowerCase()}.png`"
          fluid
          thumbnail
        ></b-img>
        <div class="px-3 py-2">
          <div class="d-flex justify-center mb-2">
            <div>
              <img
                class="align-self-baseline me-2"
                v-bind:srcset="`https://flagcdn.com/56x42/${selectedCountry.code.toLowerCase()}.png`"
                alt=""
              />
            </div>
            <div>
              <b-card-title class="mb-0">
                {{ selectedCountry.name }}
              </b-card-title>
              <b-card-text>
                {{ selectedCountry.continent.name }}
              </b-card-text>
            </div>
          </div>
          <div class="d-flex mb-3 align-items-center">
            <b-card-title class="mb-0 me-3"> Capital: </b-card-title>
            <b-card-text>
              {{ selectedCountry.capital }}
            </b-card-text>
          </div>
          <div class="d-flex mb-3 mb-3 align-items-center">
            <b-card-title class="mb-0 me-3"> Language: </b-card-title>
            <b-card-text
              class="mb-0"
              v-for="language in selectedCountry.languages"
              :key="language.name"
            >
              {{ language.name }},
            </b-card-text>
          </div>
          <div class="d-flex mb-3 mb-3 align-items-center">
            <b-card-title class="mb-0 me-3"> Currency: </b-card-title>
            <b-card-text
              v-for="currency in selectedCountry.currencies"
              :key="currency"
            >
              {{ currency }},
            </b-card-text>
          </div>
          <div class="d-flex mb-3 mb-3">
            <b-card-title class="mb-0 me-3"> States: </b-card-title>
            <div>
              <b-card-text
                style="width: 100%"
                v-for="state in selectedCountry.states"
                :key="state"
              >
                {{ state.name }},
              </b-card-text>
            </div>
          </div>
        </div>
      </b-sidebar>
    </div>
  </div>
</template>

<script>
// import gql from "graphql-tag";
export default {
  name: "SydebarLeft",
  props: {
    selectedCountry: Object,
  },
  beforeMount() {},
};
</script>

<style scoped>
.card-title,
.card-text {
  font-size: 1.25rem;
}
</style>
