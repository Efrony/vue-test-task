<template>
  <section>
    <select class="second-font">
      <option value="null" disabled selected>Выберите город</option>
      <option v-for="item in renderList" :value="item.id" :key="item.id">{{ item.title }}</option>
    </select>
    <br />
    <label class="first-font"
      ><input type="checkbox" name="online-tag" value="online" />Онлайн</label
    >
  </section>
</template>

<script>
export default {
  name: 'SelectCustom',
  props: ['list'],
  data() {
    return {
      renderList: this.list
    }
  },
};
</script>
