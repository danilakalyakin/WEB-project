
<template>

    <div>  
        <h1 id = 'blockSevenText'>Чтобы оставить заявку заполните форму: </h1>
        <div class = "blockSeven" id = "blockSevenId">
            
            <form @submit.prevent="handleSubmit" action="#" method="post" target="_blank" class = 'formSeven'>
            <div>
                <li >
                <input v-model="formData.name" class = 'inputSeven' type="text" name="name" placeholder="ИМЯ" id="name" required>
                </li>
            </div>
            <div>
                <li>
                <input v-model="formData.age" class = 'inputSeven' type="text" name="age" placeholder="КЛАСС" id="age" min="1" max="11">
                </li>
            </div>

            <div>
                <li>
                <input v-model="formData.phone" class = 'inputSeven' type="tel" name="phone" placeholder="НОМЕР ТЕЛЕФОНА" id="number" maxlength="21" required>
                </li>
            </div>
            <div>
                <li>
                <input v-model="formData.mail" class = 'inputSeven' type="email" name="mail" placeholder="ЭЛЕКТРОННЫЙ АДРЕС" id="email" required>
                </li>
            </div>

            <div>
                <textarea v-model="formData.comment" class = 'inputSeven textareaBlock' name="comment" placeholder="Напишите о ваших пожеланиях" id="message"></textarea>
            </div>

            <div>
                <input v-model="formData.subscribe" class = 'check' type="checkbox" id="subscribeCheckbox" name="subscribe">
            <label class = 'checkText' for="subscribeCheckbox">Принимаю условия соглашения и даю согласие на обработку персональных данных </label>
            </div>

            <button class = 'btn-new' type="submit">Отправить</button>

            </form>
            
            <div class = 'backgroundSeven'>
            <img  src="../assets/img/backgroundFour.svg" alt="Ученик 1" >
            </div> 
        </div>
    </div> 


</template>

<script>
import { saveToJson } from '@/utils/formHandler';

export default {
  data() {
    return {
      formData: {
        name: '',
        age: '',
        phone: '',
        mail: '',
        comment: '',
        subscribe: false
      },
      showModal: false,
      modalMessage: ''
    };
  },
  methods: {
    async handleSubmit() {
    try {
      console.log('Отправляемые данные:', JSON.stringify(this.formData, null, 2));
      
      const response = await saveToJson(this.formData);
      console.log('Ответ сервера:', response);
      
      this.showSuccess(`Данные сохранены (всего: ${response.totalEntries})`);
      this.resetForm();
    } catch (error) {
      console.error('Ошибка сохранения:', error);
      this.showError(error.message);
    }
  },
    validateForm() {
      if (!this.formData.name || !this.formData.phone) {
        this.showError('Пожалуйста, заполните обязательные поля');
        return false;
      }
      return true;
    },
    resetForm() {
      this.formData = {
        name: '',
        age: '',
        phone: '',
        mail: '',
        comment: '',
        subscribe: false
      };
    },
    showSuccess(message) {
      this.modalMessage = message;
      this.showModal = true;
      setTimeout(() => this.showModal = false, 3000);
    },
    showError(message) {
      this.modalMessage = message;
      this.showModal = true;
    }
  }
};
</script>

<style scoped>
@import '@/assets/style/fonts.css';
@import '@/assets/style/styleIndex1.css';
</style>