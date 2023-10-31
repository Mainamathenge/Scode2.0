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
      :rsvp="rsvp"
    />
    <DialogActivity
      @close="dialogs.activity = false"
      v-if="dialogs.activity"
      :activity="rsvp.activity"
    />
    <DialogBusiness
      @close="dialogs.business = false"
      v-if="dialogs.business"
      :business="rsvp.activity.user"
    />
  </div>
</template>

<script>
import DialogView from "./Dialoags/Rsvp/DialogView.vue";
import DialogActivity from "./Dialoags/Rsvp/DialogActivity.vue";
import DialogBusiness from "./Dialoags/Rsvp/DialogBusiness.vue";

export default {
  props: ["rsvp"],
  components: {
    DialogView,
    DialogActivity,
    DialogBusiness,
  },
  data: () => ({
    dialogs: {
      view: false,
      activity: false,
      business: false,
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
        title: "Activity",
        icon: "mdi-laptop",
        color: "#142D3F",
        click() {
          this.dialogs.activity = true;
        },
      },
      {
        title: "Business",
        icon: "mdi-briefcase",
        color: "#142D3F",
        click() {
          this.dialogs.business = true;
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
