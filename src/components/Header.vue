<template>
  <div class="header">
    <div class="logo">Plasticmind</div>
    <div class="hello">
      <div class="avatar"><img src="@/assets/avatar.jpg" alt="Jesse Gardner"></div>
      <div class="message"><span>Help me decide which book I should read next...</span></div>
    </div>    
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    message: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.logo {
  text-transform: uppercase;
  background: linear-gradient(#299C8E,#274654);
  color: #fff;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 900;
  letter-spacing: 2px;
  padding: 0.5rem;

}

.avatar {
  margin-right: 1rem;
}
.avatar img {
  max-width: 50px;
  border-radius: 50% 50%;
}
.hello {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  margin: 1.5rem auto;
}
.hello .message {
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
