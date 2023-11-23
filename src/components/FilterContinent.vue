<template>
  <div class="position-relative">
    <b-input-group prepend="Pais" class="mt-3">
      <b-form-input
        v-model="text"
        @click="showContinents = !showContinents"
        @input="nameCountry()"
      ></b-form-input>
      <b-input-group-append>
        <b-button variant="success">Button</b-button>
        <b-button variant="warning" @click="cancelFilter()">limpiar</b-button>
      </b-input-group-append>
    </b-input-group>
    <b-card-group
      v-if="showContinents"
      style="width: 600px; z-index: 1"
      class="border bg-white border-radius rounded mt-3 position-absolute"
    >
      <b-card-title class="text center my-4 title_filter">
        Filtrar por continente</b-card-title
      >
      <b-card
        style="min-width: 150px; max-width: 150px"
        class="m-3"
        v-for="continent in continents"
        :key="continent"
        @click="selectContinent(continent)"
        img-src="https://placekitten.com/1000/300"
        img-alt="Card image"
        img-top
      >
        <b-card-text>
          {{ continent }}
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: "FilterContinent",
  data: () => ({
    continents: [
      "Asia",
      "North America",
      "Europe",
      "Africa",
      "Antarctica",
      "South America",
      "Oceania",
    ],
    showContinents: false,
    text: "",
  }),
  methods: {
    selectContinent(continentName) {
      this.$emit("continent", continentName);
      this.text = continentName;
      this.showContinents = !this.showContinents;
    },
    nameCountry() {
      this.$emit("searchCountry", this.text);
    },
    cancelFilter() {
      this.$emit("cancelFilter");
    },
  },
};
</script>

<style>
.title_filter {
  width: 100%;
  text-align: center;
  text-align-last: center;
  font-size: 25px;
}
</style>