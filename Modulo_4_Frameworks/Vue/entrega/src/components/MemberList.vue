<template>
    <ul v-if="members && members.length > 0">
        <li v-for="member in members" :key="member.id" class="list">
            <router-link :to="`/detail/${member.login}`">
                <p>{{member.login}}</p>
            </router-link>
        </li>
    </ul>
    <p v-else>Organización inexistente o sin miembros</p>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Member } from '../types/index'
export default defineComponent({
    name: 'MemberList',
    props: {
        members: Object as PropType<Member[]>
    },
})
</script>

<style scoped>
    .list {
        text-align: left;
    }
</style>