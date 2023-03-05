<template>
  <section class="homeSection">
    <section class="container pt-5 pb-5 homeTitle">
      <h1>Welcome, Choose your topic here</h1>
    </section>
    <section :class="$style.topicButtonsGrid" class="container">
      <a :class="$style.topicBtn">Music 🎸</a>
      <a :class="$style.topicBtn">GNU/Linux 🦬🐧</a>
      <a :class="$style.topicBtn">Web Development 🌐</a>
      <a :class="$style.topicBtn">Artificial Intelligence 🤖</a>
      <a :class="$style.topicBtn">Spotify Campaign 🧩</a>
      <a :class="$style.topicBtn">Apps 📱</a>

    </section>
  </section>
</template>

<script>
export default {
  layout: 'default'
};
</script>

<style module>

a{
  text-decoration: none;
}
.topicButtonsGrid {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.topicBtn {
  border: 1px solid white;
  color: white;
  padding: 15px;
  text-decoration: none;
  cursor: pointer;
  border-radius: 10px;
}
</style>
