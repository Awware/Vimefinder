<template>
  <div class="d-flex justify-content-center mt-5">
    <b-card class="reg-card">
      <b-card-title class="text-center">Регистрация</b-card-title>
      <b-form @submit.prevent="onSubmit">
        <b-form-group>
          <b-form-input
            id="login"
            placeholder="Логин"
            v-model.trim="$v.form.login.$model"
            :state="validateState('login')"
            aria-describedby="input-login-feedback"
          ></b-form-input>
          <b-form-invalid-feedback
            v-if="$v.form.login.$dirty && !$v.form.login.required"
            id="input-login-feedback"
            >Поле не может быть пустым
          </b-form-invalid-feedback>
          <b-form-invalid-feedback
            v-if="$v.form.login.$dirty && !$v.form.login.minLength"
            id="input-login-feedback"
            >Поле должно содержать больше 5-ти символов
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
        <b-form-group>
          <b-form-input
            id="email"
            placeholder="Email"
            v-model.trim="$v.form.email.$model"
            :state="validateState('email')"
            aria-describedby="input-email-feedback"
          ></b-form-input>
          <b-form-invalid-feedback
            v-if="$v.form.email.$dirty && !$v.form.email.required"
            id="input-email-feedback"
            >Поле не может быть пустым
          </b-form-invalid-feedback>
          <b-form-invalid-feedback
            v-if="$v.form.email.$dirty && !$v.form.email.email"
            id="input-email-feedback"
            >Неккоректный e-mail
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
import { required, minLength, email } from 'vuelidate/lib/validators'
export default {
  mixins: [validationMixin],
  validations: {
    form: {
      login: { required, minLength: minLength(5) },
      password: { required, minLength: minLength(8) },
      email: { required, email },
      agree: { checked: v => v }
    }
  },
  data() {
    return {
      form: {
        login: '',
        password: '',
        email: '',
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
