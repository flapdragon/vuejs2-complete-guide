<template>
  <div class="container">
    <app-header></app-header>
    <hr />
    <div class="row">
      <app-servers></app-servers>
      <app-server-details></app-server-details>
    </div>
    <hr />
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Shared/Header'
import Footer from './components/Shared/Footer'
import Servers from './components/Server/Servers'
import ServerDetails from './components/Server/ServerDetails'

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-servers': Servers,
    'app-server-details': ServerDetails
  }
}
</script>

<style>

</style>
