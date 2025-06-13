<template>
  <div id="index">
    <div>
      <header>
        <div class="wrap-logo">
          <a href="#blockOne"><img src="../assets/img/logo1.svg" alt="Логотип" id="logo-robot"></a>
          <a href="#blockOne"><img src="../assets/img/text_logotipa.svg" alt="Текст Логотипа" id="logo-text"></a>
        </div>

        <nav>
          <a class="underline-one" href="#blockOne">Домой</a>
          <a class="underline-one" href="#blockTwo">Курсы</a>
          <a class="underline-one" href="#blockThree">Команда</a>
          <a class="underline-one" href="#blockFourId">Отзывы</a>
          <a href="https://vk.com/jcwdt" target="_blank"><img src="../assets/img/vk.svg" class="underline-one" alt="Связаться" id="header-icon-vk"></a>
          <a href="tel:+79101421832" target="_blank"><img src="../assets/img/svyaz.svg" class="underline-one" alt="Связаться" id="header-icon-svyaz"></a>
          <a href="https://t.me/danilkalyakin" target="_blank"><img src="../assets/img/tg.svg" class="underline-one" alt="Телеграмм" id="header-icon-tg"></a>
        </nav>
      </header>
    </div>
  </div>

    <div class="blockOne" id = "blockOne">

      <div class="block-uch-vmeste">

        <img  src="../assets/img/uchites.png" alt="Учитесь" id = "" >
        <img  src="../assets/img/vmeste.png" alt="Вместе" id = "block-vmeste" >

        <div class ="text-online-school">

          <h1> ОНЛАЙН-ШКОЛА</h1>

        </div>

        <div class ="text-pomosch">
          
          <h1> Мы ваш надежный помощник в подготовке к ОГЭ и ЕГЭ!</h1>

        </div>

        <div class ="osn-text">

          <h1> Наши опытные преподаватели, современные методики и удобный формат занятий помогут вам освоить сложные темы, повысить успеваемость и уверенно сдать экзамены. Учитесь онлайн в комфортном темпе и добивайтесь высоких результатов!</h1>
        
        </div>

      </div>

      <div class="block-background">

        <img  src="../assets/img/background.png" alt="Фон" id = "img-background" >

      </div>

    </div>

    <!-- <div style="border: 2px dashed red; padding: 20px; margin-top: 40px;">
      <RobotViewer />
    </div> -->
    <div style="padding-left: 28rem; margin-top: 10px;">
      <h1 style = "margin-left: -7rem; font-size: 5rem">Ботум приветствует Вас!</h1>
      <video
        autoplay
        muted
        playsinline
        ref="videoPlayer"
        width="1080"
        height="700"
        controls
        @loadedmetadata="setInitialVolume"
      >
        <source :src="videoSrc" type="video/mp4">
        Ваш браузер не поддерживает видео.
      </video>
    </div>

    <div class="blockTwo" id = "blockTwo">
      <h1>Наши курсы </h1>

      <div class = "Kurs123">
        <li class ='blockKurs1'>
              <div class = "OneElementBlockKurs">
                <p>Физика </p>
                <img src ="../assets/img/kurs1.svg" alt="Курс 1">
              </div>
              <p id = "blockKurs1Text">Годовой курс по физике</p>
              <p id = "blockKurs1Text2">5000 руб./месяц</p>
              <a id="blockKurs1ButtonBuy" href="https://t.me/danilkalyakin">Купить</a>
              <a id ="blockKurs1ButtonCheck" href="https://t.me/danilkalyakin">Подробнее</a>
          </li>

        <li class ='blockKurs2'>
            <div class = "TwoElementBlockKurs">
              <p>Литература</p>
              <img src ="../assets/img/kurs2.svg" alt="Курс 2">
            </div>
            <p id = "blockKurs2Text">Годовой курс по физике</p>
            <p id = "blockKurs2Text2">5000 руб./месяц</p>
            <a id="blockKurs2ButtonBuy" href="https://t.me/danilkalyakin">Купить</a>
            <a id ="blockKurs2ButtonCheck" href="https://t.me/danilkalyakin">Подробнее</a>
        </li>

        <li class ='blockKurs3'>
            <div class = "ThreeElementBlockKurs">
              <p>Математика</p>
              <img src ="../assets/img/kurs3.svg" alt="Курс 3">
            </div>
            <p id = "blockKurs3Text">Годовой курс по физике</p>
            <p id = "blockKurs3Text2">5000 руб./месяц</p>
            <a id="blockKurs3ButtonBuy" href="https://t.me/danilkalyakin">Купить</a>
            <a id ="blockKurs3ButtonCheck" href="https://t.me/danilkalyakin">Подробнее</a>
        </li>
      </div>

      <div class = "Kurs456">
        <li class ='blockKurs4'>
              <div class = "fourElementBlockKurs">
                <p>Физика </p>
                <img src ="../assets/img/kurs4.svg" alt="Курс 1">
              </div>
              <p id = "blockKurs4Text">Годовой курс по физике</p>
              <p id = "blockKurs4Text2">5000 руб./месяц</p>
              <a id="blockKurs4ButtonBuy" href="https://t.me/danilkalyakin">Купить</a>
              <a id ="blockKurs4ButtonCheck" href="https://t.me/danilkalyakin">Подробнее</a>
          </li>

        <li class ='blockKurs5'>
            <div class = "fiveElementBlockKurs">
              <p>Литература</p>
              <img src ="../assets/img/kurs5.svg" alt="Курс 2">
            </div>
            <p id = "blockKurs5Text">Годовой курс по физике</p>
            <p id = "blockKurs5Text2">5000 руб./месяц</p>
            <a id="blockKurs5ButtonBuy" href="https://t.me/danilkalyakin">Купить</a>
            <a id ="blockKurs5ButtonCheck" href="https://t.me/danilkalyakin">Подробнее</a>
        </li>

        <li class ='blockKurs6'>
            <div class = "sixElementBlockKurs">
              <p>Математика</p>
              <img src ="../assets/img/kurs6.svg" alt="Курс 3">
            </div>
            <p id = "blockKurs6Text">Годовой курс по физике</p>
            <p id = "blockKurs6Text2">5000 руб./месяц</p>
            <a id="blockKurs6ButtonBuy" href="https://t.me/danilkalyakin">Купить</a>
            <a id ="blockKurs6ButtonCheck" href="https://t.me/danilkalyakin">Подробнее</a>
        </li>
      </div>
    </div>

    <div class="blockThree" id = "blockThree">
      <h1>Наша команда </h1>

      <div class = "blockCommand123">

        <li class ='blockCommand1'>
          <div class = "OneElementBlockCommand">
            <img src ="../assets/img/command1.png" alt="Курс 1">
          </div>
          <p id = "blockCommand1FIO">Ворончихин Саша</p>
          <p id="blockCommand1Opisanie">Гений математики</p>
          <router-link id="blockCommand2ButtonCheck" to="/mathematika">Подробнее</router-link>

        </li>

        <li class ='blockCommand2'>
          <div class = "TwoElementBlockCommand">
            <img src ="../assets/img/command2.png" alt="Курс 1">
          </div>
          <p id = "blockCommand2FIO">Алексей Соколов</p>
          <p id="blockCommand2Opisanie">Гений физики</p>
          <router-link id="blockCommand2ButtonCheck" to="/fizika">Подробнее</router-link>
        </li>

        <li class ='blockCommand3'>
          <div class = "ThreeElementBlockCommand">
            <img src ="../assets/img/command3.png" alt="Курс 1">
          </div>
          <p id = "blockCommand3FIO">Мария Власова</p>
          <p id="blockCommand3Opisanie">Лучшая в информатике</p>
          <router-link id="blockCommand2ButtonCheck" to="/informatika">Подробнее</router-link>

        </li>

      </div>
    </div>

    <div class = "blockFour">
      <h1>За последний год наша команда... </h1>

      <div class = "Case123">

          <li class = "Case1">
            <p id = "Text1Case1">ОБУЧИЛА СВЫШЕ </p>
            <p id = "Text2Case1"> 1000 </p>
            <p id = "Text3Case1"> ЧЕЛОВЕК </p>
          </li>  

          <li class = "Case2">
            <p id = "Text1Case2">ПРОВЕЛА БОЛЕЕ </p>
            <p id = "Text2Case2"> 1500 </p>
            <p id = "Text3Case2"> ВЕБИНАРОВ </p>
          </li>
        
          <li class = "Case3">
            <p id = "Text1Case3">ОХВАТИЛА </p>
            <p id = "Text2Case3"> 67 </p>
            <p id = "Text3Case3"> ОБЛАСТЕЙ НАШЕЙ СТРАНЫ </p>
          </li>
        
          <li class = "Case4">
            <p id = "Text1Case4">ПОМОГЛА </p>
            <p id = "Text2Case4"> 346 </p>
            <p id = "Text3Case4"> ЛЮДЯМ СТАТЬ ВЫСОКОБАЛЬНИКАМИ </p>
          </li>

          <li class = "Case5">
            <p id = "Text1Case5">ПРОВЕРИЛА </p>
            <p id = "Text2Case5"> 7380 </p>
            <p id = "Text3Case5"> ДОМАШНИХ ЗАДАНИЙ </p>
          </li>

          <li class = "Case6">
            <p id = "Text2Case6"> ... И ЭТО </p>
            <p id = "Text3Case6"> ТОЛЬКО НАЧАЛО! </p>
          </li>
      </div>
    </div>  

    <div class = "blockFour" id = "blockFourId">
      <h1>Отзывы о нашей работе </h1>

      <div class = "Otz12">

          <li class = "Otz1">
            <div class = "uch1Block">
              <img  src="../assets/img/uch1.jpg" alt="Ученик 1" >
            </div>

            <div class="Otz1BlockP">
              <h1> Кузнецов артем</h1>
              <p>  Уделял особое внимание подготовке только весной, когда все олимпиады закончились. Но даже за такой короткий период времени Школково может дать хорошее количество практики. Особенно хочу выделить кураторов и проверки сочинений. Проверки работ выявляют все недочеты ,а кураторы помогают направить мышление в нужном направлении(реально был момент озарения, так что никогда не стесняйтесь спрашивать про все непонятное). Практика максимально важна, чем больше сочинений написано и упражнений выполнено , тем лучше. Дедлайны на срок подачи сочинений помогают не расслабляться и держать себя в форме(это очень полезно). Спасибо команде Школково за этот курс!</p>
            </div>
          </li> 
          
          <li class = "Otz2">
            <div class = "uch2Block">
              <img  src="../assets/img/uch2.jpg" alt="Ученик 2" >
            </div>

            <div class="Otz2BlockP">
              <h1> Кузнецов артем</h1>
              <p>  Уделял особое внимание подготовке только весной, когда все олимпиады закончились. Но даже за такой короткий период времени Школково может дать хорошее количество практики. Особенно хочу выделить кураторов и проверки сочинений. Проверки работ выявляют все недочеты ,а кураторы помогают направить мышление в нужном направлении(реально был момент озарения, так что никогда не стесняйтесь спрашивать про все непонятное). Практика максимально важна, чем больше сочинений написано и упражнений выполнено , тем лучше. Дедлайны на срок подачи сочинений помогают не расслабляться и держать себя в форме(это очень полезно). Спасибо команде Школково за этот курс!</p>
            </div>
          </li>  

      </div>

      <div class = "Otz34">

        <li class = "Otz3">
          <div class = "uch3Block">
            <img  src="../assets/img/uch3.jpg" alt="Ученик 3" >
          </div>

          <div class="Otz3BlockP">
            <h1> Кузнецов артем</h1>
            <p>  Уделял особое внимание подготовке только весной, когда все олимпиады закончились. Но даже за такой короткий период времени Школково может дать хорошее количество практики. Особенно хочу выделить кураторов и проверки сочинений. Проверки работ выявляют все недочеты ,а кураторы помогают направить мышление в нужном направлении(реально был момент озарения, так что никогда не стесняйтесь спрашивать про все непонятное). Практика максимально важна, чем больше сочинений написано и упражнений выполнено , тем лучше. Дедлайны на срок подачи сочинений помогают не расслабляться и держать себя в форме(это очень полезно). Спасибо команде Школково за этот курс!</p>
          </div>
        </li> 
        
        <li class = "Otz4">
          <div class = "uch4Block">
            <img  src="../assets/img/uch4.jpg" alt="Ученик 4" >
          </div>

          <div class="Otz4BlockP">
            <h1> Кузнецов артем</h1>
            <p>  Уделял особое внимание подготовке только весной, когда все олимпиады закончились. Но даже за такой короткий период времени Школково может дать хорошее количество практики. Особенно хочу выделить кураторов и проверки сочинений. Проверки работ выявляют все недочеты ,а кураторы помогают направить мышление в нужном направлении(реально был момент озарения, так что никогда не стесняйтесь спрашивать про все непонятное). Практика максимально важна, чем больше сочинений написано и упражнений выполнено , тем лучше. Дедлайны на срок подачи сочинений помогают не расслабляться и держать себя в форме(это очень полезно). Спасибо команде Школково за этот курс!</p>
          </div>
        </li>  
    </div>

    <FormBlock />

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

import FormBlock from '@/components/FormBlock.vue';

export default {
  name: 'IndexPage',
  components: {
    FormBlock
  }
}

</script>

<script setup>
import { ref, onMounted } from 'vue';
import videoSrc from "@/assets/video/prev.mp4"; 

const videoPlayer = ref(null);

function setInitialVolume() {
  if (videoPlayer.value) {
    videoPlayer.value.volume = 0.03; 
    videoPlayer.value.muted = false; 
  }
}

onMounted(() => {
  if (videoPlayer.value) {
    videoPlayer.value.play().catch(error => {
      console.log("Автовоспроизведение заблокировано:", error);
    });
  }
});
</script>

<style scoped>
@import '@/assets/style/fonts.css';
@import '@/assets/style/styleIndex1.css';
</style>
