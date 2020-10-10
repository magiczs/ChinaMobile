<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import { home } from './api/index'
export default {
  name: 'App',
}
</script>

<style>
</style>
