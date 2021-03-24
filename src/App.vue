<template>
  <div id="app">
    <Header/>
    <Tabs/>
    <BookList/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Tabs from './components/Tabs.vue'
import BookList from './components/BookList.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'Rate My Booklist',
  components: {
    Header,
    Tabs,
    BookList,
    Footer
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  background: #eee;
  margin: 0;
  padding: 0;
}
#app {
  background: #fff;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 400px;
  min-height: 100vh;
  margin: 0 auto;
  color: #2c3e50;
}

</style>