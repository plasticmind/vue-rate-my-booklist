<template>
    <li v-if="book !== null" :id="'book-'+book.id" :class="{book: true, hot: isHot}">
      <div class="book-info">
        <div class="title">
          <a v-if="book.purchaseUrl !== null" :href="book.purchaseUrl" :title="'Purchase '+book.title">
            {{ book.title }}
          </a>
          <span v-else>
            {{ book.title }}
          </span>
        </div>
        <div v-if="book.author !== null" class="author">
          {{ book.author }}
        </div>
        <div v-if="book.rating !== null" class="rating">
          {{ book.rating }}
        </div>
        <div v-if="book.reviewUrl !== null" class="review">
          <a :href="book.reviewUrl" :title="'Read review of '+book.title">Review of {{ book.title }}</a>
        </div>
      </div>
      <div class="rank-info">
        <button @click="increaseRank()" class="upvote">△</button>
        <div class="rank">{{ book.rank }}</div>
      </div>
    </li>
</template>

<script>
export default {
    props: {
        book: null
    },
    methods: {
        increaseVotes: function () {
            this.book.rank++;
        }
    },
    computed: {
        isHot: function () {
            return this.book.rank >= 25;
        }
    }
}
</script>

<style scoped>


</style>
