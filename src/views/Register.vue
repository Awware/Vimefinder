<template>
  <div class="d-flex justify-content-center mt-5">
    <b-card class="reg-card">
      <b-card-title class="text-center">Регистрация</b-card-title>
      <b-form @submit.prevent="onSubmit">
        <b-form-group>
          <b-form-input
            id="apikey"
            placeholder="VimeAPI | KEY"
            v-model.trim="$v.form.apikey.$model"
            :state="validateState('apikey')"
            aria-describedby="input-apikey-feedback"
          ></b-form-input>
          <b-form-invalid-feedback
            v-if="$v.form.apikey.$dirty && !$v.form.apikey.required"
            id="input-apikey-feedback"
            >Поле не может быть пустым
          </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group>
          <b-form-input
            id="password"
            placeholder="Пароль"
            type="password"
            v-model.trim="$v.form.password.$model"
            :state="validateState('password')"
            aria-describedby="input-password-feedback"
          ></b-form-input>
          <b-form-invalid-feedback
            v-if="$v.form.password.$dirty && !$v.form.password.required"
            id="input-password-feedback"
            >Поле не может быть пустым
          </b-form-invalid-feedback>
          <b-form-invalid-feedback
            v-if="$v.form.password.$dirty && !$v.form.password.minLength"
            id="input-password-feedback"
            >Поле должно содержать больше 8-ми символов
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-checkbox v-model="form.agree"
          >Соглашение на обработку данных</b-form-checkbox
        >
        <div class="d-flex justify-content-center mt-3">
          <b-button type="submit" variant="primary">Отправить</b-button>
        </div>
        <router-link
          to="/login"
          class="text-muted d-flex justify-content-center mt-3"
          >У меня уже есть аккаунт</router-link
        >
      </b-form>
    </b-card>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength } from 'vuelidate/lib/validators'
export default {
  mixins: [validationMixin],
  validations: {
    form: {
      apikey: { required },
      password: { required, minLength: minLength(8) },
      agree: { checked: v => v }
    }
  },
  data() {
    return {
      form: {
        apikey: '',
        password: '',
        agree: false
      }
    }
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name]
      return $dirty ? !$error : null
    },
    onSubmit() {
      this.$v.form.$touch()
      if (this.$v.form.$anyError) {
        return
      }
      //todo auth store
    }
  }
}
</script>

<style scoped>
.reg-card {
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  width: 350px;
}
</style>
