<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div>
    <ul>
      <li v-for="route in router.options.routes" :key="route.name">
        <router-link :to="{ name: route.name }">
          {{ route.meta.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
ul {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: 0;
  padding: 0.5rem;
  list-style: none;
  background: lightseagreen;

  a.router-link-active {
    font-weight: bold;
  }
}
</style>
