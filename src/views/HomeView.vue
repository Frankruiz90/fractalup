<template>
  <div class="container d-flex flex-wrap">
    <div style="width: 100%">
      <FilterContinent
        @continent="filterContinent($event)"
        @searchCountry="searchCountry($event)"
        @cancelFilter="cancelarFiltro()"
      ></FilterContinent>
    </div>
    <div
      style="width: 200px"
      class="m-3"
      v-for="country in fiterCountries"
      :key="country.code"
      v-b-toggle.sidebar-right
    >
      <CardCountry
        :country="country"
        @selectCountry="dataModal($event)"
      ></CardCountry>
    </div>
    <div v-if="selectedCountry.name">
      <sidebar-left :selectedCountry="selectedCountry"></sidebar-left>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import gql from "graphql-tag";
import CardCountry from "@/components/CardCountry.vue";
import SidebarLeft from "@/components/SidebarLeft.vue";
import FilterContinent from "@/components/FilterContinent.vue";
export default {
  name: "HomeView",
  components: {
    CardCountry,
    SidebarLeft,
    FilterContinent,
  },
  apollo: {
    countries: gql`
      {
        countries {
          name
          capital
          code
          languages {
            name
            native
          }
          currencies
          currency
          states {
            name
          }
          continent {
            name
          }
        }
      }
    `,
  },
  data: () => ({
    selectedCountry: {},
    fiterCountries: [],
  }),

  mounted() {
    setTimeout(() => {
      this.fiterCountries = this.countries;
    }, "1000");
  },
  methods: {
    dataModal(e) {
      this.selectedCountry = e;
    },
    filterContinent(continent) {
      let filtro = this.countries.filter((e) => {
        return e.continent.name === continent;
      });
      this.fiterCountries = filtro;
    },
    searchCountry(country) {
      country.charAt(0).toUpperCase() + country.slice(1);
      let nameCountry = country.charAt(0).toUpperCase() + country.slice(1);
      let filtro = this.countries.filter((e) => {
        return e.name == nameCountry;
      });
      this.fiterCountries = filtro;
    },
    cancelarFiltro() {
      this.fiterCountries = this.countries;
    },
  },
};
</script>
