<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div>
     
        <ul class="nav-routes">
                    <RouterLink to="/">Home </RouterLink>
                    <!-- <RouterLink to="/about"> About </RouterLink> -->

        </ul>
    </div>
</template>




<style lang="scss" scoped>
header {
  background-color: #f1f1f1;
}

nav {
  display: flex;
  align-items: center;
  padding: 10px 16px;
}

.branding {
  display: flex;
  align-items: center;
  gap: 8px;
}

.branding img {
  max-width: 50px;
}

.branding h1 {
  font-size: 20px;
}

.nav-routes {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  list-style: none;
}

.nav-routes a {
  text-decoration: none;
  color: black;
}


</style>
