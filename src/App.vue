<template>
  <div class="home"><RouterView/></div>
  <NavigationBar></NavigationBar>
</template>
<script>
import NavigationBar from './components/NavigationBar.vue';
</script>
<style>
.home{
  margin-left: 20px;
  margin-right: 20px;
}
</style>