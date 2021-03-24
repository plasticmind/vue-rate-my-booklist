<template>
  <ul class="book-list">
    <li class="book">
      <div class="book-info">
        <div class="title">
          <a href="https://www.amazon.com/How-Not-Be-Wrong-Mathematical/dp/0143127535" title="">
            How Not To Be Wrong: The Power of Mathematical Thinking
          </a>
        </div>
        <div class="author">
          Jordan Ellenberg
        </div>
        <div class="rating">
          ★★★★★
        </div>
        <div class="review"></div>
      </div>
      <div class="rank-info">
        <button class="upvote">△</button>
        <div class="rank">137</div>
      </div>
    </li>
    <li class="book">
      <div class="book-info">
        <div class="title">
          <a href="https://www.amazon.com/Burnout-Secret-Unlocking-Stress-Cycle/dp/1984818325/" title="">
            Burnout: The Secret to Unlocking the Stress Cycle
          </a>
        </div>
        <div class="author">
          Emily Nagoski and Amelia Nagoski
        </div>
        <div class="rating">
          ★★★★☆
        </div>
        <div class="review"></div>
      </div>
      <div class="rank-info">
        <button class="upvote">△</button>
        <div class="rank">56</div>
      </div>
    </li>
    <li class="book">
      <div class="book-info">
        <div class="title">
          <a href="https://www.amazon.com/dp/B0042JSQLU/" title="">
            Art & Fear: Observations on the Perils and Rewards of Artmaking
          </a>
        </div>
        <div class="author">
          David Bayles and Ted Orland
        </div>
        <div class="rating">
          ★★☆☆☆
        </div>
        <div class="review"></div>
      </div>
      <div class="rank-info">
        <button class="upvote">△</button>
        <div class="rank">11</div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'BookList',
  props: {
    id: Number,
    title: String,
    author: String,
    rank: Number,
    purchaseUrl: String,
    reviewUrl: String,
    rating: Number    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul, li {
  list-style: none;
  margin: 0;
  padding: 0;
}
a {
 color: #274553;
}
a:hover {
  color: #289D8F;
}
a:visited {
  color: #E76F50;
}
.book {
  display: flex;
  flex-direction: row-reverse;
  padding: 1rem;
  border-bottom: solid 1px #ddd;
}
.book:first-of-type {
  border-top: solid 1px #ddd;
}
.title {
  font-weight: 900;
  padding-bottom: 0.25rem;
}
.author {
  font-size: 0.8rem;
  padding-bottom: 0.25rem;
}
.rating {
  color: #E8C270;
  font-size: 0.8rem;
}
.rank-info {
  text-align: center;
  margin-right: 1rem;
  font-size: 0.8rem;
  font-weight: bold;
}
</style>
