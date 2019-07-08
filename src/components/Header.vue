<template>
  <nav>
    <ul>
      <li>
        <router-link to="/" exact class="link">Home</router-link>
      </li>
      <li>
        <router-link to="/About" exact class="link">About</router-link>
      </li>
      <li>
        <router-link to="/Skills" exact class="link">Skills</router-link>
      </li>
      <li>
        <router-link to="/Portfolio" exact class="link">Portfolio</router-link>
      </li>
      <li>
        <router-link to="/Contact" exact class="link">Contact</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {};
</script>

<style lang="scss">
@import "../scss/vars";

nav {
  position: absolute;
  width: 100vw;
  top: 5px;
  left: 0;
  text-align: center;
}
ul {
  list-style-type: none;
  // text-align: center;
  margin: 0;
}

li {
  display: inline-block;
  padding: 5px;
}

a {
  color: $darkGrey;
  text-decoration: none;
}

.router-link-active {
  border-bottom: 1.5px solid $primary;
  display: block;
  position: relative;

  animation: lineAnim 350ms ease-in;
}

@keyframes lineAnim {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
</style>

