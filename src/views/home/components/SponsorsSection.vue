<template>
  <section class="sponsors" id="sponsors">
    <div class="container">
      <h3>{{ t("nav.團隊背景") }}</h3>
      <div class="carousel">
        <div class="box" v-for="item in data">
          <img :src="item.img" alt="" />
          <h4>{{ item.name }}</h4>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { useI18n } from "../../../i18n";
import David from "@/assets/new/David@2x.png";
import William from "@/assets/new/William@2x.png";
import Olivia from "@/assets/new/Olivia@2x.png";
import James from "@/assets/new/James@2x.png";
import Daniel from "@/assets/new/Daniel@2x.png";
import Mia from "@/assets/new/Mia@2x.png";
import Emma from "@/assets/new/Emma@2x.png";
import Michael from "@/assets/new/Michael@2x.png";
import { computed } from "vue";
const { t } = useI18n();
// 数据
const data = computed(() => [
  { name: 'David',  desc: t('Team.David.desc'),  img: David },
  { name: 'William',desc: t('Team.William.desc'),img: William },
  { name: 'Olivia', desc: t('Team.Olivia.desc'), img: Olivia },
  { name: 'James',  desc: t('Team.James.desc'),  img: James },
  { name: 'Daniel', desc: t('Team.Daniel.desc'), img: Daniel },
  { name: 'Mia',    desc: t('Team.Mia.desc'),    img: Mia },
  { name: 'Emma',   desc: t('Team.Emma.desc'),   img: Emma },
  { name: 'Michael',desc: t('Team.Michael.desc'),img: Michael },
])
</script>
<style scoped lang="scss">
.sponsors {
  padding: 24px 200px 180px;
  background: #fff;
  h3 {
    text-align: center;
    margin-bottom: 85px;
    font-weight: bold;
    font-size: 38px;
    color: #343434;
  }
  .carousel {
    display: grid;
    grid-template-columns: repeat(4, 1fr); // 创建4等分列
    gap: 34px; // 列间距
    row-gap: 40px; // 行间距
    justify-items: center;

    .box {
      width: 100%;
      max-width: 301px;
      text-align: left;

      h4 {
        font-weight: bold;
        font-size: 20px;
        color: #343434;
        margin: 20px 0 0;
      }

      p {
        font-weight: 400;
        font-size: 16px;
        color: #343434;
        padding-top: 17px;
        margin: 0;
      }

      img {
        width: 100%;
        height: auto;
        aspect-ratio: 1/1;
        object-fit: cover;
      }
    }
  }
}
@media (max-width: 768px) {
  .sponsors {
    padding: 24px 25px 180px;
    h3 {
      text-align: center;
      margin-bottom: 55px;
      font-weight: bold;
      font-size: 30px;
      color: #343434;
    }
    .carousel {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
