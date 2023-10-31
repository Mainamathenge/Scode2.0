<template>
  <v-text-field
    v-model="searchQuery"
    type="text"
    placeholder="Search"
    outlined
    dense
    class="mt-7"
    color="#C3D7FF"
    prepend-inner-icon="mdi-magnify"
    style="border-radius: 10px"
  ></v-text-field>
</template>

<script>
export default {
  props: ["store", "action"],
  data() {
    return {
      searchQuery: "",
      timer: null,
    };
  },
  watch: {
    searchQuery: function (newQuery) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.fetchResults(newQuery);
      }, 1000);
    },
  },
  methods: {
    fetchResults(query) {
      const payload = { query, pageNumber: 1 };
      this.$store.dispatch(this.store + "/" + this.action, payload);
    },
  },
};
</script>
