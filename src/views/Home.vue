<template>
  <div class="form">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <h1>Форма подачи заявки в отдел сервиса и качества</h1>
      <h5>Ваш филиал <span>*</span></h5>
      <select name="city">
        <option value="none" disabled selected>Выберите город</option>
        <option value="Москва">Москва</option>
        <option value="Санкт-Петербург">Санкт-Петербург</option>
        <option value="Владивосток">Владивосток</option>
        <option value="Екатеринбург">Екатеринбург</option>
      </select>
      <p><input type="checkbox" name="online-tag" value="online" />Онлайн</p>

      <h5>Тема обращения <span>*</span></h5>
      <label><input type="radio" checked name="subject" /> Не доволен качеством услуг</label><br>
      <label><input type="radio" name="subject" /> Расторжение договора</label><br>
      <label><input type="radio" name="subject" /> Не приходит письмо активации на почту</label><br>
      <label><input type="radio" name="subject" /> Не работает личный кабинет</label><br>
      <input type="text" name="5" placeholder="Другое" />

      <h5>Описание проблемы <span>*</span></h5>
      <textarea name="" id="" cols="90" rows="5" placeholder="Введите текст ..."></textarea>

      <HelloWorld msg="Welcome to Your Vue.js App" />

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
