<template>
  <v-pagination
    v-model="currentPage"
    :length="lastPage"
    :total-visible="5"
    color="#1AE58E"
  ></v-pagination>
</template>

<script>
export default {
  props: ["store", "collection", "action"],
  watch: {
    // eslint-disable-next-line no-unused-vars
    currentPage(newVal, oldVal) {
      this.paginatePage(newVal);
    },
  },
  computed: {
    currentPage: {
      get() {
        return this.$store.state[this.store][this.collection].currentPage;
      },
      set(value) {
        this.$store.commit(this.store + "/SET_CURRENT_PAGE", value);
      },
    },
    lastPage: {
      get() {
        return this.$store.state[this.store][this.collection].totalPages;
      },
    },
  },
  methods: {
    paginatePage(pageNumber) {
      this.$store.dispatch(this.store + "/" + this.action, pageNumber);
    },
  },
};
</script>
