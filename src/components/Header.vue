<template>
  <header role="banner">
    <h1 class="logo"><img src="../assets/logo-words.svg" alt="Rank My Booklist"></h1>
    <Hello message="Help me decide which book I should read next..."/>
    <Tabs active="read"/>
  </header>
</template>

<script>
import Hello from '@/components/Hello'
import Tabs from '@/components/Tabs'

export default {
  name: 'Logo',
  components: {
    Hello,
    Tabs
  }
}
</script>

<style>
header {
  /* position: sticky; */
  background: #fff;
  top: 0;
  z-index: 2;
  border-bottom: solid 1px #ddd;
}
.logo {
  text-transform: uppercase;
  background: linear-gradient(#299C8E,#274654);
  color: #fff;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5rem;
  font-weight: 900;
  letter-spacing: 2px;
  padding: 0.5rem 2.5rem;
  margin: 0;
}
.logo img {
  width: 100%;
  height: auto;
}
</style>
