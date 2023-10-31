<template>
  <div>
    <v-menu center left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="handleClick(index)"
        >
          <v-list-item-icon>
            <v-icon :color="item.color">{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title :style="{ color: item.color }"
            >{{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <DialogView
      @close="dialogs.view = false"
      v-if="dialogs.view"
      :community="community"
    />
  </div>
</template>

<script>
import DialogView from "./Dialoags/Community/DialogView.vue";

export default {
  props: ["community"],
  components: {
    DialogView,
  },
  data: () => ({
    dialogs: {
      view: false,
    },
    items: [
      {
        title: "View",
        icon: "mdi-eye",
        color: "#142D3F",
        click() {
          this.dialogs.view = true;
        },
      },
    ],
  }),
  methods: {
    toggleUserStatus(obj) {
      this.items.push(obj);
    },
    handleClick(index) {
      this.items[index].click.call(this);
    },
  },
};
</script>
