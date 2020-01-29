<template>
  <nav>
    <ul>
      <li>
        <router-link to="/About" class="link">About</router-link>
      </li>

      <li>
        <router-link to="/Portfolio" class="link" exact>Portfolio</router-link>
      </li>
      <li>
        <router-link to="/Contact" class="link" exact>Contact</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../scss/vars";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

nav {
  position: fixed;
  width: 100vw;

  top: 0;
  left: 0;
  text-align: center;
  background-color: #eee;
  z-index: 15;
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
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.6em;
  letter-spacing: 0.1em;
}

.router-link-exact-active {
  border-bottom: 2px solid $pink;
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
</style> lang="scss">

