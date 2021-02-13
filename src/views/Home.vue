<template>
  <div class="form">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <h1>Форма подачи заявки в отдел сервиса и качества</h1>
    <h5>Ваш филиал <span>*</span></h5>
    <section>
      <select class="second-font">
        <option value="null" disabled selected>Выберите город</option>
        <option v-for="city in cities" :value="city.id" :key="city.id">{{ city.title }}</option>
      </select>
      <br />
      <label class="first-font"
        ><input type="checkbox" name="online-tag" value="online" />Онлайн</label
      >
    </section>

    <section>
      <h5>Тема обращения <span>*</span></h5>
      <label class="first-font"
        ><input type="radio" checked name="subject" /> Не доволен качеством
        услуг</label
      ><br />
      <label class="first-font"
        ><input type="radio" name="subject" /> Расторжение договора</label
      ><br />
      <label class="first-font"
        ><input type="radio" name="subject" /> Не приходит письмо активации на
        почту</label
      ><br />
      <label class="first-font"
        ><input type="radio" name="subject" /> Не работает личный кабинет</label
      ><br />
      <input type="text" name="5" placeholder="Другое" class="second-font" />
    </section>

    <section>
      <h5>Описание проблемы <span>*</span></h5>
      <textarea
        name=""
        id=""
        cols="90"
        rows="5"
        placeholder="Введите текст"
        class="first-font"
      ></textarea>
    </section>

    <section>
      <h5>Загрузка документов</h5>
      <p class="second-font">
        Приложите, пожалуйста, полноэкранный скриншот.
        <br />
        Это поможет быстрее решить проблему.
      </p>
      <p>
        <input type="file" name="screenshot" class="first-font" />
      </p>
    </section>

    <section>
      <button disabled>Отправить</button>
    </section>

    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import SelectCustom from "@/components/SelectCustom.vue";

export default {
  name: "Home",
  // components: {
  //   SelectCustom,
  // },
  
  computed: {
        cities() {
          return [{"id":"1","title":"Москва"},{"id":"2","title":"Санкт-Петербург"},{"id":"3","title":"Екатеринбург"},{"id":"3","title":"Челябинск"}]
        },
    },

};
</script>
