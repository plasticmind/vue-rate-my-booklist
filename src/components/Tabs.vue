<template>
  <ul class="tabs">
    <li class="read active">To Read</li>
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

<style>
.tabs {
  display: flex;
  /* display: none; */
  list-style: none;
  padding: 0;
  margin: 0 1rem 1.5rem;
  border-radius: 8px;
  overflow: hidden;
  border: solid 1px #294653;
  color: #294653;
}
.tabs li {
  width: 50%;
  padding: 0.25rem;
  display: inline-block;
  text-align: center;
  cursor: pointer;
}
.tabs li:last-child {
  margin-left: -1px;
}
.tabs li.active {
  background: #294653;
  color: #fff;
  cursor: default;
}
</style>