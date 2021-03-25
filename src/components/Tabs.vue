<template>
  <ul class="tabs">
    <li @click="selectTab('read')" :class="['read', ( isActive === 'read' ) ? 'active' : '']">To Read</li>
    <li @click="selectTab('finished')" :class="['finished', ( isActive === 'finished' ) ? 'active' : '']">Finished</li>
  </ul>
</template>

<script>
import { EventBus } from '@/main'
export default {
  name: 'Tabs',
  props: {
    active: String
  },
  data: function() {
    return {
      isActive: this.active
    }
  },
  methods: {
    selectTab (tab) {
      if ( this.isActive === tab ) return false;
      this.isActive = tab;
      console.log('local component: ' + tab);
      EventBus.$emit('changeTab', tab);
    }
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
  text-transform: uppercase;
  font-size: 0.8rem;
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
  width: calc(50% + 1px);
}
.tabs li.active {
  background: #294653;
  color: #fff;
  cursor: default;
}
</style>