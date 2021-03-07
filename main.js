const constraints = {
   firstname: {
      presence: true,
   },
   lastname: {
      presence: true,
   },
   age: {
      presence: true,
      numericality: {
         lessThan: 150
      }
   },
   gender: {
      presence: true,
   },
   email: {
      presence: true,
      email: true
   },
   phone: {
      presence: true,
      length: {
         minimum: 10,
         message: "must be at least 10 digits"
      },
   }
}

const app = Vue.createApp({
   data() {
      return {
         firstname: null,
         lastname: null,
         age: null,
         gender: null,
         email: null,
         phone: null,
         errors: null,
      }
   },
   methods: {
      checkForm() {
         this.errors = validate({
               firstname: this.firstname,
               lastname: this.lastname,
               age: this.age,
               gender: this.gender,
               email: this.email,
               phone: this.phone,
            },
            constraints)
         if (!this.errors) {
            alert("Registered successfully.")
         }
      }
   }
})

app.mount('#app')