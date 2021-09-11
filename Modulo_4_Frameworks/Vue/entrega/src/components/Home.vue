<template>
  <input v-model="orgName" placeholder="lemoncode"/>
  <p>Org is {{orgName}}</p>
  <button type="button" @click="searchOrg()">Search</button>
  <MemberList :members="members"></MemberList>
</template>

<script lang="ts">
  import MemberList from '../components/MemberList.vue'
  import { ref, defineComponent, Ref, onMounted } from 'vue'
  import { membersService } from '../services/members'
  import { Member } from '../types/index'
  export default defineComponent({
  name: 'Home',
  components: {
    MemberList
  },
  setup() {
    const orgName = ref('lemoncode')
    const members: Ref<Member[]> = ref([]);
    const searchOrg = async () => {
      members.value = await membersService.get(orgName.value);
    }
    onMounted(() => {
      searchOrg();
    }) 
    return {
      orgName,
      members,
      searchOrg
    }
  }
  
})
</script>

<style>
</style>
