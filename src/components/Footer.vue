<template>
  <footer>
    <p>A little side project by <a href="https://plasticmind.com" title="Visit my site.">Jesse Gardner</a>.</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
footer {
  font-size: 0.8rem;
  text-align: center;
  background: var(--brand);
  color: #fff;
  padding: 0.5rem;
}
footer a,
footer a:visited {
  color: #fff;
}

</style>