<template>
  <v-timeline dense class="ml-n11">
    <v-timeline-item right small class="mt-n8" v-for="item in items">
      <p class="ml-n5 text-caption mt-5">{{ item.from }} - {{ item.to }}</p>
      <p class="ml-n5 text-body-2 mt-n4" style="font-weight: 700">
        {{ item.degree }} {{ item.position }}
      </p>
      <p class="ml-n5 text-body-2 mt-n4">
        {{ item.institution }} {{ item.company }}
      </p>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  name: "TimelineComponent",
  props: ["items"],
};
</script>
