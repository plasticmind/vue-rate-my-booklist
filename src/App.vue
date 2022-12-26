<template>
  <div id="app">
    <Header/>
    <BookList/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import BookList from './components/BookList'
import Footer from './components/Footer'

export default {
  name: 'RankMyBooklist',
  components: {
    Header,
    BookList,
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Anek+Latin:wght@300;600&display=swap');
:root {
  /* Colors */
  --accent-light: #1A98E9;
  --accent-dark: #1A98E9;
  --brand: #3F4A78;
  --brand-dark: #17234D;
  --neutral-0: #141313;
  --neutral-10: #343333;
  --neutral-50: #949393;
  --neutral-99: #F4F3F3;
  --neutral-100: #fff;
  /* Fonts */
  --font-primary: 'Anek Latin', sans-serif;
  --font-secondary: 'Inter', sans-serif;
  /* Sizing */
  --app-max-width: 520px;
}
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  background-color: #222;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%230ff' fill-opacity='0.05' /%3E%3C/svg%3E");
  background-attachment: fixed;
}
#app {
  background: #fff;
  font-family: var(--font-primary);
  max-width: var(--app-max-width);
  min-height: 100vh;
  margin: 0 auto;
  color: #2c3e50;
  box-shadow: 0 32px 64px rgba(0,0,0,1);
}
ol, ul, li {
  list-style: none;
  margin: 0;
  padding: 0;
}
a {
  transition: all 0.5s;
  color: var(--neutral-10);
}
a:visited {
  color: var(--brand);
}
a:hover {
  transition: all 0.2s;
  color: var(--accent-dark);
}
</style>