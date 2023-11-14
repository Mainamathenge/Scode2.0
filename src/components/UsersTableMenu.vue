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

        <v-list-item v-if="!user.active" @click="dialogs.activate = true">
          <v-list-item-icon>
            <v-icon color="#1AE58E">mdi-checkbox-multiple-marked</v-icon>
          </v-list-item-icon>
          <v-list-item-title style="color: #1ae58e">Activate</v-list-item-title>
        </v-list-item>

        <v-list-item v-else @click="dialogs.deactivate = true">
          <v-list-item-icon>
            <v-icon color="#EC4A4A">mdi-close-box-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-title style="color: #ec4a4a"
            >Deactivate
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <!-- <DialogView
      @close="dialogs.view = false"
      v-if="dialogs.view"
      :user="user"
    /> -->
    <DialogEdit
      @close="dialogs.edit = false"
      v-if="dialogs.edit"
      :user="user"
    />
    <DialogActivate
      @close="dialogs.activate = false"
      v-if="dialogs.activate"
      :user="user"
    />
    <DialogDeactivate
      @close="dialogs.deactivate = false"
      v-if="dialogs.deactivate"
      :user="user"
    />
  </div>
</template>

<script>
import DialogEdit from "./Dialoags/User/DialogEdit.vue";
import DialogActivate from "./Dialoags/User/DialogActivate.vue";
import DialogDeactivate from "./Dialoags/User/DialogDeactivate.vue";

export default {
  props: ["user"],
  components: {
    DialogEdit,
    DialogDeactivate,
    DialogActivate,
  },
  data: () => ({
    dialogs: {
      view: false,
      edit: false,
      activate: false,
      deactivate: false,
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
      {
        title: "Edit",
        icon: "mdi-pencil",
        color: "#142D3F",
        click() {
          this.dialogs.edit = true;
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
