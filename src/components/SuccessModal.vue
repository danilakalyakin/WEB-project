<template>
  <div class="success-modal" v-if="isVisible" @click.self="close">
    <div class="modal-content">
      <div class="check-icon">
        <svg viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
        </svg>
      </div>
      <h3>Успешно!</h3>
      <p>{{ message }}</p>
      <button class="modal-close-btn" @click="close">Закрыть</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
      default: 'Ваши данные были успешно сохранены.'
    }
  },
  methods: {
    close() {
      this.$emit('close');
    }
  },
  watch: {
    isVisible(newVal) {
      if (newVal) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  }
}
</script>

<style scoped>
.success-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.success-modal.v-if-active {
  opacity: 1;
}

.modal-content {
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  text-align: center;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transform: translateY(-20px);
  transition: transform 0.3s ease;
}

.success-modal.v-if-active .modal-content {
  transform: translateY(0);
}

.check-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 1.5rem;
  background-color: #4CAF50;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.check-icon svg {
  width: 36px;
  height: 36px;
  color: white;
}

.modal-content h3 {
  color: #4CAF50;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.modal-content p {
  color: #555;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.modal-close-btn {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.modal-close-btn:hover {
  background-color: #3e8e41;
}
</style>