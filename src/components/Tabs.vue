<template>
  <nav role="navigation">
      <button aria-label="Filter by books I want to read." @click="selectTab('read')" :disabled="( isActive === 'read' ) ? true : false" :class="['read', ( isActive === 'read' ) ? 'active' : '']">To Read</button>
      <button aria-label="Filter by books I've finished." @click="selectTab('finished')" :disabled="( isActive === 'finished' ) ? true : false" :class="['finished', ( isActive === 'finished' ) ? 'active' : '']">Finished</button>
  </nav>
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
      EventBus.$emit('changeTab', tab);
    }
  }
}
</script>

<style>
nav {
  display: flex;
  /* display: none; */
  list-style: none;
  padding: 0;
  margin: 0 1rem 1.5rem;
  border-radius: 8px;
  overflow: hidden;
  border: solid 1px #294653;
}
nav button {
  font-family: 'Noto Sans JP', Helvetica, Arial, sans-serif;
  border: 0;
  background: transparent;
  width: 50%;
  padding: 0.25rem;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  color: #294653;
  text-transform: uppercase;
}
nav button:last-child {
  margin-left: -1px;
  width: calc(50% + 1px);
}
nav button.active {
  background: #294653;
  color: #fff;
  cursor: default;
}
</style>