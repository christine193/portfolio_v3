<template>
  <div id="webDesign">
    <div class="portTitle">
      <h2>Featured Projects</h2>
    </div>

    <section id="project1" class="project">
      <div class="projectImg">
        <img src="../../public/images/odp.jpg" />
      </div>
      <div class="projectText">
        <h3>Organ Donation Project</h3>
        <p>A poster campaign created to promote organ donation awareness. Users can log-in and upload their submissions. I contributed to the design, front-end development and illustration for this project.</p>
        <a href="https://github.com/Brendan-Rogers/FinalProject2019" target="blank">
          <i class="fab fa-github socialIcons linking"></i>
        </a>
      </div>
    </section>
    <!--<section id="project2" class="project">
      <div class="projectImg"></div>
      <div class="projectText">
        <h3>Roku Flashback</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ex asperiores totam, unde, fugit rem, eos culpa labore adipisci voluptate ipsam dolores modi quis minus nam laborum sunt atque excepturi.</p>
        <i class="fab fa-github socialIcons linking"></i>
      </div>
    </section>-->
    <section id="project3" class="project">
      <div class="projectImg">
        <img src="../../public/images/chat.jpg" />
      </div>
      <div class="projectText">
        <h3>Chat App</h3>
        <p>A responsive chat application built with Socket.IO. Users are notified when a new user joins.</p>
        <div class="socialLinks">
          <a href="https://github.com/christine193/lopez_c_chatApp" target="blank">
            <i class="links fab fa-github socialIcons linking"></i>
          </a>
          <a class="links" href="http://c-chat-app.herokuapp.com/" target="blank">view live</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>


<style lang="scss">
@import "../scss/vars";
#webDesign {
  margin-top: 2em;
  // width: 100%;
  // height: 100%;
}
.socialLinks {
  display: flex;
  flex-direction: row-reverse;

  a {
    margin-right: 0.5em;
  }
}

.links {
  color: black;
}

.links:hover {
  transition: 500ms;
  color: $pink;
}

.project {
  margin-bottom: 7em;
  align-items: center;
  justify-items: center;

  h3 {
    text-align: center;
  }
}

.projectImg {
  //background-color: pink;

  width: 300px;
  margin: 0 auto;
  padding: 15px;
}

.projectText {
  margin: 1em;
  flex: 3;
}

#project3 {
  //  flex-direction: row-reverse;
}

@media only screen and (min-width: 650px) {
  .project {
    display: flex;
    width: 100%;
    h3 {
      text-align: left;
    }
  }
  .projectImg {
    flex: auto;
  }
}
</style>
