<template>
  <div>
    <b-card
      :img-src="`https://flagcdn.com/224x168/${country.code.toLowerCase()}.png`"
      img-alt="Card image"
      img-top
      class="radius-5"
      @click="countrySelected(country)"
    >
      <div class="d-flex">
        <div>
          <img
            class="align-self-baseline me-2"
            v-bind:srcset="`https://flagcdn.com/28x21/${country.code.toLowerCase()}.png`"
            alt=""
          />
        </div>
        <div>
          <b-card-title class="mb-0">
            {{ country.name }}
          </b-card-title>
          <b-card-text>
            {{ country.continent.name }}
          </b-card-text>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "CardCountry",
  components: {
  },
  data: () => ({
    codeSelected: "",
    selectedCountry: {},
  }),
  props: {
    country: Object,
  },
  emits: 'selectContry',
  beforeMount() {
  },
  methods: {
    countrySelected(codeSelected) {
      this.codeSelected = codeSelected;
      this.selectedCountry = this.country;
      this.$emit('selectCountry',codeSelected);
    },
  },
};
</script>

<style>
.card {
  border-radius: 20px !important;
}
.card-title {
  color: rgb(67, 67, 248) !important;
  font-size: 0.75rem;
  font-weight: bold;
  text-align-last: left;
}
.card-text {
  font-size: 0.75rem;
  color: rgb(156, 155, 155);
  text-align-last: left;
}
.card-img,
.card-img-top {
  border-top-left-radius: 20px !important;
  border-top-right-radius: 20px !important;
}
</style>