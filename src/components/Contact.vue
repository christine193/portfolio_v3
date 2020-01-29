<template>
  <div class="holder">
    <div class="centered">
      <form action="https://formspree.io/mqkqkazb" method="POST">
        <h2>Message Me!</h2>
        <p>Let's work together!</p>
        <input type="text" name="_replyto" placeholder="name" />

        <input type="email" name="email" placeholder="email" />
        <textarea name="message" rows="3" placeholder="message"></textarea>

        <button
          id="subButton"
          class="subButton"
          type="submit"
          name="submit"
          value="send"
          v-on:click.prevent="handleClick"
          v-bind:style="{backgroundColor:bgColor}"
        >{{ message }}</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "subButton",
  data: function() {
    return {
      message: "submit"
    };
  },
  methods: {
    handleClick() {
      this.message = "message sent!";
      this.bgColor = "#fa2044";
    }
  }
};
</script>

<style lang="scss">
@import "../scss/vars";

form {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1em;

  text-align: center;
  -webkit-box-shadow: 0px 15px 88px -37px rgba(0, 0, 0, 0.17);
  -moz-box-shadow: 0px 15px 88px -37px rgba(0, 0, 0, 0.17);
  box-shadow: 0px 15px 88px -37px rgba(0, 0, 0, 0.17);
}

input,
textarea {
  background: transparent;
  width: 90%;
  border: 0;
  padding: 1em;
  margin-bottom: 1em;
  border-bottom: 2px solid white;
  align-self: center;
  transition: 500ms;
  &:focus {
    border-color: $primary;
  }
}

textarea,
input:focus {
  outline: none;
}

label {
  margin-bottom: 1em;
}

.subButton {
  padding: 0.5em;
  color: white;
  background: $primary;
  border: none;
  width: 150px;
  align-self: center;
  font-size: 1em;
  font-weight: bold;
}
.subButton:hover {
  transition: 500ms;
  background: $pink;
}
</style>
