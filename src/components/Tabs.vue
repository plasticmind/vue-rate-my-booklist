<template>
  <nav role="navigation">
      <button aria-label="List only books I'm reading or want to read." @click="selectTab('read')" :disabled="( isActive === 'read' ) ? true : false" :class="['read', ( isActive === 'read' ) ? 'active' : '']">To Read</button>
      <button aria-label="List only books I've finished or given up on." @click="selectTab('finished')" :disabled="( isActive === 'finished' ) ? true : false" :class="['finished', ( isActive === 'finished' ) ? 'active' : '']">Finished</button>
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
  color: #294653;
  text-transform: uppercase;
}
nav button {
  font-family: 'Noto Sans JP', Helvetica, Arial, sans-serif;
  font-size: 0.8rem;
  border: 0;
  background: transparent;
  width: 50%;
  padding: 0.25rem;
  display: inline-block;
  text-align: center;
  cursor: pointer;
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