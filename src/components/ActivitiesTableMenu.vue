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

        <v-list-item
          v-if="!activity.isPublished"
          @click="dialogs.publish = true"
        >
          <v-list-item-icon>
            <v-icon color="#1AE58E">mdi-checkbox-multiple-marked</v-icon>
          </v-list-item-icon>
          <v-list-item-title style="color: #1ae58e">Publish</v-list-item-title>
        </v-list-item>

        <v-list-item v-else @click="dialogs.unpublish = true">
          <v-list-item-icon>
            <v-icon color="#EC4A4A">mdi-close-box-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-title style="color: #ec4a4a"
            >Unpublish
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <DialogView
      @close="dialogs.view = false"
      v-if="dialogs.view"
      :activity="activity"
    />
    <DialogPublish
      @close="dialogs.publish = false"
      v-if="dialogs.publish"
      :activity="activity"
    />
    <DialogUnpublish
      @close="dialogs.unpublish = false"
      v-if="dialogs.unpublish"
      :activity="activity"
    />
  </div>
</template>

<script>
import DialogView from "./Dialoags/Activity/DialogView.vue";
import DialogPublish from "./Dialoags/Activity/DialogPublish.vue";
import DialogUnpublish from "./Dialoags/Activity/DialogUnpublish.vue";

export default {
  props: ["activity"],
  components: {
    DialogView,
    DialogPublish,
    DialogUnpublish,
  },
  data: () => ({
    dialogs: {
      view: false,
      edit: false,
      publish: false,
      unpublish: false,
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
      // {
      //   title: "Edit",
      //   icon: "mdi-pencil",
      //   color: "#142D3F",
      //   click() {
      //     this.dialogs.edit = true;
      //   },
      // },
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
