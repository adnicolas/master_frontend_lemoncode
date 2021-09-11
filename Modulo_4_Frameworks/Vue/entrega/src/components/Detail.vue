<template>
  <div v-if="user" class="grid">
      <h2>{{ user.name }}</h2>
      <h2>{{ user.company }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouteLocation } from 'vue-router'
import { User } from '../types/index'
import { membersService } from '../services/members'
export default defineComponent({
  data: () => ({
    user: {} as User,
  }),
  computed: {
    id(): string {
      return String((this.$route as RouteLocation).params.id)
    },
  },
  created() {
    membersService.getUser(this.id).then((user: User) => {
        this.user = user
    })
  },
})
</script>

<style lang="scss" scoped>
  .grid {
    display:flex;
  }
</style>