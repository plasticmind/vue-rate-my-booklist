<template>
  <nav role="navigation">
      <button aria-label="Filter by books I want to read." @click="selectTab('read')" :disabled="( isActive === 'read' ) ? true : false" :class="['read', ( isActive === 'read' ) ? 'active' : '']">To Read</button>
      <button aria-label="Filter by books I'm currently reading'." @click="selectTab('reading')" :disabled="( isActive === 'reading' ) ? true : false" :class="['reading', ( isActive === 'reading' ) ? 'active' : '']">Reading</button>
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
  list-style: none;
  padding: 0;
  margin: 0 1rem 1.5rem;
  overflow: hidden;
  justify-content: space-between;
}
nav button {
  font-family: var(--font-primary);
  border: 0;
  background: transparent;
  width: 30%;
  padding: 0.5rem 1rem;
  font-weight: bold;
  font-size: 1rem;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  color: var(--brand);
  text-transform: uppercase;
  border-radius: 4px;
  border: solid 1px var(--brand);
}
nav button.active {
  background: var(--brand);
  color: #fff;
  cursor: default;
}
</style>