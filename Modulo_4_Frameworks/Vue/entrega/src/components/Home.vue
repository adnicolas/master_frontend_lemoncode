<template>
  <input v-model="input" placeholder="lemoncode"/>
  <p>Org is {{input}}</p>
  <button type="button" @click="searchOrg()">Search</button>
  <MemberList :members="members"></MemberList>
</template>

<script lang="ts">
  import MemberList from '../components/MemberList.vue'
  import { ref, defineComponent, Ref, onMounted, computed } from 'vue'
  import { membersService } from '../services/members'
  import { Member } from '../types/index'
  import { useStore } from 'vuex'
  export default defineComponent({
  name: 'Home',
  components: {
    MemberList
  },
  setup() {
    const store = useStore()
    const orgName = computed(() => store.getters.orgNameGetter)
    const input = ref(orgName.value)
    const members: Ref<Member[]> = ref([]);
    const searchOrg = async () => {
      store.dispatch('updateOrgName', input.value)
      members.value = await membersService.get(input.value);
    }
    onMounted(() => {
      searchOrg();
    }) 
    return {
      input,
      members,
      searchOrg
    }
  }
  
})
</script>

<style>
</style>
