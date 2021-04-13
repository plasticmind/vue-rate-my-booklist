<template>
    <div class="hello">
      <div class="avatar"><img src="@/assets/avatar.jpg" alt="Jesse Gardner"></div>
      <h2 class="message"><span>{{ message }}</span></h2>
    </div>    
</template>

<script>
export default {
  name: 'Hello',
  props: {
    message: String
  }
}
</script>

<style>
.avatar {
  margin-right: 1rem;
  transition: transform 1s;
}
.avatar img {
  max-width: 50px;
  border-radius: 50% 50%;
  display: block;
}
.avatar:hover {
  transform: rotate(180deg);
  cursor: alias;
}
.hello {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  margin: 1rem auto;
}
.hello .message {
  font-weight: normal;
  font-size: 1rem;
  position: relative;
  padding: 0.5rem 0.75rem;
  color: #E37055;
  border: solid 1px #E37055;
}
.hello .message span {
  display: inline-block;
}
.hello .message:before {
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  border-left: 10px solid transparent;
  border-right: 10px solid #E37055;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  top: calc( 50% - 10px );
  left: -20px;
}
.hello .message:after {
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  border-left: 10px solid transparent;
  border-right: 10px solid #fff;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  top: calc( 50% - 10px );
  left: -19px;
}
</style>