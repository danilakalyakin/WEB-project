<template>
  <div id="mathematika">
    <header>

        <div class="wrap-logo">
          <a href = "index.html"><img  src="../assets/img/logo1.svg" alt="Логотип" id = "logo-robot" href="#logo"></a>
          <a href = "index.html"><img  src="../assets/img/text_logotipa.svg" alt="Текст Логотипа" id = "logo-text" href="#logo"></a>
        </div>

        <nav>
          <router-link class="underline-one" to="/">Домой</router-link>
          <a href="https://vk.com/jcwdt"  target="_blank"> <img  src="../assets/img/vk.svg" class="underline-one" alt="Связаться" id = "header-icon-vk" ></a>
          <a  href="tel:+79101421832"  target="_blank"> <img  src="../assets/img/svyaz.svg" class="underline-one" alt="Связаться" id = "header-icon-svyaz"></a>
          <a href="https://t.me/danilkalyakin"  target="_blank"> <img  src="../assets/img/tg.svg" class="underline-one" alt="Телеграмм" id = "header-icon-tg" ></a>
        </nav>

      </header>

    <div class="blockOneIndex2" id = "">

        <div class="img1Index2">
          <img  src="../assets/img/command1.png" width="700rem" alt="ФИО" id = "" >
          <h1>Ворончихин Саша </h1>
          <div class="card">
            <h1>🧠 Репетитор по математике — Ворочихин Саша</h1>
        
            <p><span class="highlight">📚 Опыт:</span> более 5 лет успешной подготовки учеников</p>
        
            <h2>🎯 Специализация:</h2>
            <span class="badge">Подготовка к ОГЭ</span>
            <span class="badge">Подготовка к ЕГЭ</span>
            <span class="badge">Повышение успеваемости</span>
            <span class="badge">Высшая математика</span>
            <span class="badge">Линейная алгебра</span>
        
            <h2>💡 Обо мне:</h2>
            <p>Помогаю понять математику с нуля и полюбить её! Объясняю сложное простым языком, без зубрежки и стресса. Каждый ученик — это индивидуальный подход, своя стратегия обучения и поддержка на каждом этапе.</p>
        
            <h2>📈 Результаты:</h2>
            <p>✔ Ученики стабильно улучшают оценки и сдают экзамены на <strong>80+ баллов</strong></p>
            <p>✔ Множество положительных отзывов от родителей и школьников</p>
            <p>✔ Выпускники поступают в топовые ВУЗы</p>
        
            <h2>📍 Формат занятий:</h2>
            <p>🖥 Онлайн (Zoom, Discord, Skype)<br>
            👨‍🏫 Индивидуальные и групповые занятия<br>
            🕒 Удобное расписание</p>
        
            <p class="highlight">💬 Пробный урок — бесплатно!</p>
            <a class="btn" href="https://t.me/danilkalyakin">Записаться на пробное занятие</a>
          </div>
        </div>

    </div>
    <footer class="site-footer">
    <div class="footer-container">
      <div class="footer-column about-column">
        <a href="#blockOne" class="footer-logo">
          <img src="../assets/img/text_logotipa.svg" alt="Текст Логотипа Ботуме">
        </a>
        <h3 class="footer-title">О Ботуме</h3>
        <ul class="footer-links">
          <li><a href="#">О нас</a></li>
          <li><a href="#">Контакты</a></li>
          <li><a href="#">Наши преподаватели</a></li>
          <li><a href="#">Отзывы</a></li>
          <li><a href="#">Правовая информация</a></li>
          <li><a href="#">Сведения об образовательной организации</a></li>
        </ul>
      </div>
      
      <div class="footer-column study-column">
        <h3 class="footer-title">Учеба в Ботуме</h3>
        <ul class="footer-links">
          <li><a href="#">ОГЭ</a></li>
          <li><a href="#">ЕГЭ</a></li>
          <li><a href="#">Занятия с преподавателем</a></li>
          <li><a href="#">Занятия в группах</a></li>
        </ul>
      </div>
      
      <div class="footer-column resources-column">
        <h3 class="footer-title">Бесплатно</h3>
        <ul class="footer-links">
          <li><a href="#">Учебники</a></li>
          <li><a href="#">Шпаргалки</a></li>
          <li><a href="#">Видео-уроки</a></li>
        </ul>
        
        <h3 class="footer-title contacts-title">Контакты</h3>
        <ul class="footer-contacts">
          <li><a href="mailto:botum@yandex.ru">botum@yandex.ru</a></li>
          <li><a href="tel:+70000000000">+7 (000) 000-00-00</a></li>
        </ul>
      </div>
    </div>
  </footer>
  </div>
</template>

<script>
export default { name: 'MathematikaPage' }
</script>

<style scoped>
@import '@/assets/style/stylemathematika.css';
@import '@/assets/style/fonts.css';
</style>
