<template>
    <div class="form-container">
      <h1>Personal Information Form</h1>
  
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            v-model="formData.firstName"
            :class="{ 'error-border': showError && !formData.firstName }"
          />
          <p v-if="showError && !formData.firstName" class="error-message">
            Please enter your first name.
          </p>
        </div>
  
        <div class="form-group">
          <label for="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            v-model="formData.lastName"
            :class="{ 'error-border': showError && !formData.lastName }"
          />
          <p v-if="showError && !formData.lastName" class="error-message">
            Please enter your last name.
          </p>
        </div>
  
        <div class="form-group">
          <label for="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            v-model="formData.dateOfBirth"
            :class="{ 'error-border': showError && !formData.dateOfBirth }"
          />
          <p v-if="showError && !formData.dateOfBirth" class="error-message">
            Please enter your date of birth.
          </p>
        </div>
  
        <div class="form-group">
          <label for="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            v-model="formData.phoneNumber"
            :class="{ 'error-border': showError && !isValidPhoneNumber(formData.phoneNumber) }"
          />
          <p v-if="showError && !isValidPhoneNumber(formData.phoneNumber)" class="error-message">
            Please enter a valid phone number.
          </p>
        </div>
  
        <div class="form-group">
          <label for="gender">Gender:</label>
          <select
            id="gender"
            v-model="formData.gender"
            :class="{ 'error-border': showError && !formData.gender }"
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <p v-if="showError && !formData.gender" class="error-message">
            Please select your gender.
          </p>
        </div>
  
  
        <div class="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          firstName: '',
          lastName: '',
          dateOfBirth: '',
          phoneNumber: '',
          gender: ''

        },
        showError: false
      };
    },
    methods: {
      submitForm() {
        this.showError = true;
  

        if (this.isValidForm()) {
    
          console.log('Form submitted:', this.formData);
        }
      },
      isValidForm() {
    
        return (
          this.isValidInput(this.formData.firstName) &&
          this.isValidInput(this.formData.lastName) &&
          this.isValidInput(this.formData.dateOfBirth) &&
          this.isValidPhoneNumber(this.formData.phoneNumber) &&
          this.isValidInput(this.formData.gender)
     
        );
      },
      isValidInput(value) {
        return value.trim() !== '';
      },
      isValidPhoneNumber(phoneNumber) {
     
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phoneNumber);
      }
    }
  };
  </script>
  
  <style scoped>
  .form-container {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  
  .error-border {
    border-color: red;
  }
  
  .error-message {
    color: red;
    margin-top: 5px;
    font-size: 14px;
  }
  </style>
  