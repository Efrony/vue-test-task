<template>
  <div class="form">
    <h1>Форма подачи заявки в отдел сервиса и качества</h1>
    <h5>Ваш филиал <span class="required">*</span></h5>
    <section>
      <select v-model="form.city" :disabled="form.online" class="second-font">
        <option :value="null" disabled selected>Выберите город</option>
        <option v-for="city in cities" :value="city.id" :key="city.id">
          {{ city.title }}
        </option>
      </select>
      <br />
      <label class="first-font"
        ><input
          type="checkbox"
          v-model="form.online"
          @change="form.city = null"
        />Онлайн</label
      >
    </section>

    <section>
      <h5>Тема обращения <span class="required">*</span></h5>
      <label class="first-font" v-for="title in titles" :key="title.id">
        <input
          v-model="form.title"
          :value="title.id"
          @change="form.titleOther = null"
          type="radio"
          name="title"
        />{{ title.theme }}
        <br />
      </label>
      <input
        :value="form.title ? null : form.titleOther"
        @input="
          form.title = null;
          form.titleOther = $event.target.value;
        "
        type="text"
        placeholder="Другое"
        class="second-font"
      />
    </section>

    <section>
      <h5>Описание проблемы <span class="required">*</span></h5>
      <textarea
        v-model="form.text"
        cols="90"
        rows="6"
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
      <button
        :disabled="!checkForm"
        @click="() => this.$store.dispatch('sendForm', this.form)"
      >
        Отправить
      </button>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapMutations, mapGetters } from "vuex";

export default {
  name: "Form",
  data() {
    return {};
  },

  computed: {
    ...mapGetters(["cities", "titles", "form"]),
    ...mapActions(["fetchCities", "sendForm"]),
    ...mapMutations(["updateForm"]),

    checkForm() {
      this.$store.commit("updateForm", this.form);
      if (
        (this.form.city || this.form.online) &&
        (this.form.title || this.form.titleOther) &&
        this.form.text
      ) {
        return true;
      }
    },
  },

  mounted() {
    this.fetchCities;
  },
};
</script>
