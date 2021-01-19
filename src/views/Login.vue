<template>
  <div
    class="d-flex justify-content-md-center align-items-center"
    style="width: 100%; height: 85%"
  >
    <b-row>
      <b-col>
        <b-card class="log-card">
          <b-card-title class="text-center">Авторизация</b-card-title>
          <b-form @submit.prevent="onSubmit">
            <b-form-group>
              <b-form-input
                id="apikey"
                placeholder="ApiKey"
                v-model.trim="$v.form.apikey.$model"
                :state="validateState('apikey')"
                aria-describedby="input-apikey-feedback input-apikey-help"
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
                aria-describedby="input-password-feedback input-password-help"
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
            <div class="d-flex justify-content-center mt-3">
              <b-button type="submit" variant="primary" :disabled="loading">{{
                btnSubmit
              }}</b-button>
            </div>
          </b-form>
        </b-card>
      </b-col>
      <b-col>
        <b-alert variant="success" style="max-width: 350px; height: auto" show
          >ApiKey можно получить, введя команду на сервере /api auth</b-alert
        >

        <b-alert variant="success" style="max-width: 350px; height: auto" show
          >Первый вход возможен без пароля, в дальнейшем его можно установить в
          личном кабинете</b-alert
        >
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
export default {
  mixins: [validationMixin],
  validations: {
    form: {
      apikey: { required },
      password: {}
    }
  },
  data() {
    return {
      form: {
        apikey: '',
        password: ''
      },
      btnSubmit: 'Войти',
      loading: false
    }
  },
  computed: mapGetters(['authUser']),
  watch: {
    authUser(newAuthUser) {
      this.$cookies.set('session', newAuthUser.token, '15d')
      this.$router.push('/')
    }
  },
  methods: {
    ...mapActions(['auth', 'returnToSession']),
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name]
      return $dirty ? !$error : null
    },
    async onSubmit() {
      this.$v.form.$touch()
      if (this.$v.form.$anyError) return

      this.btnSubmit = 'Загрузка..'
      this.loading = true

      await this.auth({
        apiKey: this.form.apikey,
        password: this.form.password
      })

      this.btnSubmit = 'Войти'
      this.loading = false
    }
  }
}
</script>

<style scoped>
.log-card {
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  width: 350px;
}
</style>
