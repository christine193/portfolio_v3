<template>
  <div class="holder">
    <div class="centered">
      <div class="about">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis delectus, temporibus neque, ex non quas quam natus asperiores culpa adipisci necessitatibus. Provident eaque enim qui. Enim repellendus adipisci doloribus ipsam!</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
p {
  padding: 15px;
}

@media only screen and (min-width: 700px) {
  .about {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
</style>