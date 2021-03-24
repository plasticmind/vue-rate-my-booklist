<template>
  <ul class="tabs">
    <li class="read">To Read</li>
    <li class="finished">Finished</li>
  </ul>
</template>

<script>
export default {
  name: 'Tabs',
  props: {
    active: Boolean
  }
}
</script>