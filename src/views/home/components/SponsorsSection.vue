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
import test2 from "@/assets/test2.webp";
import test3 from "@/assets/test3.webp";
import test4 from "@/assets/test4.webp";
import test5 from "@/assets/test5.webp";
import test6 from "@/assets/test6.webp";
const { t } = useI18n();
// 数据
const data = [
  {
    name: "Jenkin",
    desc: "專業的Java開發者",
    img: test2,
  },
  {
    name: "Anne",
    desc: "專業的Android開發者",
    img: test3,
  },
  {
    name: "Jenkin2",
    desc: "專業的Web開發者",
    img: test4,
  },
  {
    name: "Anne3",
    desc: "專業的pyhton開發者",
    img: test5,
  },
  {
    name: "Jen",
    desc: "專業的全栈開發者",
    img: test3,
  },
  {
    name: "kin",
    desc: "專業的PHP開發者",
    img: test5,
  },
  {
    name: "hike",
    desc: "專業的C#開發者",
    img: test2,
  },
  {
    name: "lin",
    desc: "專業的小程序開發者",
    img: test6,
  },
];
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
