<template>
  <nav>
    <ul>
      <li>
        <router-link to="/" exact>Home</router-link>
      </li>
      <li>
        <router-link to="/About" exact>About</router-link>
      </li>
      <li>
        <router-link to="/Skills" exact>Skills</router-link>
      </li>
      <li>
        <router-link to="/Portfolio" exact>Portfolio</router-link>
      </li>
      <li>
        <router-link to="/Contact" exact>Contact</router-link>
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
  border-bottom: 2px solid $primary;
}
</style>

