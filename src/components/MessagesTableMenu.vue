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

        <v-list-item @click="dialogs.delete = true">
          <v-list-item-icon>
            <v-icon color="#EC4A4A">mdi-trash-can</v-icon>
          </v-list-item-icon>
          <v-list-item-title style="color: #ec4a4a">Delete</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <DialogView
      @close="dialogs.view = false"
      v-if="dialogs.view"
      :message="message"
    />
    <DialogDelete
      @close="dialogs.delete = false"
      v-if="dialogs.delete"
      :message="message"
    />
  </div>
</template>

<script>
import DialogView from "./Dialoags/Message/DialogView.vue";
import DialogDelete from "./Dialoags/Message/DialogDelete.vue";

export default {
  props: ["message"],
  components: {
    DialogView,
    DialogDelete,
  },
  data: () => ({
    dialogs: {
      view: false,
      delete: false,
    },
    items: [
      {
        title: "Open",
        icon: "mdi-message-text",
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
