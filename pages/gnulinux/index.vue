<script>
export default {
  async asyncData({ $content }) {
    const notes = await $content("notes")
      .where({ category: { $eq: 'gnulinux' } })
      .fetch();

    return {
      notes
    }
  },
  data: () => ({
    selectedTag: ""
  }),
  computed: {
    displayedNotes() {
      if (this.selectedTag) {
        return this.notes.filter(note => note.tags.includes(this.selectedTag))
      } else {
        return this.notes
      }
    }
  }
}
</script>
<template>
  <section class="container pt-5">
    <h1>My Notes about GNU/Linux things</h1>
    <p v-show="selectedTag">Filtered by: {{ selectedTag }}
      <button @click="selectedTag = ''">Clear</button>
    </p>
    <ul>
      <li v-for="note in displayedNotes" :key="note.slug + note.createdAt">
        <h2>
          <nuxt-link :to="`/notes/${note.slug}`">
            {{ note.title }}

          </nuxt-link>
        </h2>
        <ul>
          <li v-for="tag in note.tags" :key="note.slug + tag" @click="selectedTag = tag">
            {{ tag }}</li>
        </ul>
      </li>
    </ul>
  </section>
</template>
