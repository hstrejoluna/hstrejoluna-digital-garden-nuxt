<template>
  <header class="homeSection">
    <section class="container pt-5 pb-5 homeTitle">
      <h1>Welcome, Choose your topic here</h1>
    </section>
    <nav :class="$style.topicButtonsGrid" class="container">
      <a v-for="topic in topics" :key="topic.route" :href="`/${topic.route}`">
        <button :class="$style.topicBtn" role="button" aria-pressed="false">
          {{ topic.label }}
        </button>
      </a>
    </nav>
  </header>
</template>

<script>
export default {
  layout: 'default',
  computed: {
    topics() {
      return [
        { label: 'Music 🎸', route: 'music' },
        { label: 'GNU/Linux 🦬🐧', route: 'linux' },
        { label: 'Web Development 🌐', route: 'webdev' },
        { label: 'Artificial Intelligence 🤖', route: 'artint' },
        { label: 'Spotify Campaign 🧩', route: 'spotify' },
        { label: 'Apps 📱', route: 'apps' },
      ];
    },
  },
};
</script>

<style module>
a {
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
  background-color: transparent;
}

.topicBtn:hover,
.topicBtn:focus {
  color: black;
  background-color: rgb(255, 255, 255);
}
</style>
