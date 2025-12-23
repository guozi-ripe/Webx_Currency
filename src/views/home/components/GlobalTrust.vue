<template>
  <div class="global">
    <div class="center">
      <div class="top">
        <div class="title">{{ $t("global.全球信赖的") }}</div>
        <div class="title2">
          {{ $t("global.了解為什麼來自 100 多個國家的數百萬投資者加入 WebX") }}
        </div>
      </div>
      <div class="item">
        <div class="box">
          <img src="@/assets/new/图层 13@2x.png" alt="" />
          <div class="txt">
            <h3>社會的</h3>
            <p>
              目前全球互聯網用戶規模 已突破50億，線上消費市場規模超過8萬億美元
            </p>
          </div>
        </div>
        <div class="box2">
          <div class="box2_1">
            <h3>可靠的</h3>
            <p>
              核心成員平均有10+年協作技術研發經，聚焦Web3、
              AI協作算法、安全架構設計等關鍵領域
            </p>
          </div>
          <div class="box2_2">
            <h3>擔保的</h3>
            <p>
              由資安專家與合規顧問組成，涵蓋資料安全、
              隱私保護與行業合規，遵循GDPR、ISO27001、SOC2等標準
            </p>
          </div>
        </div>
        <div class="box3">
          <div class="txt">
            <h3>全球的</h3>
            <p>
              在全球範圍內擁有5000+認證渠道夥伴，構建覆蓋銷售、實施、運維的全鏈路服務網絡
            </p>
          </div>
          <img class="img2" src="@/assets/new/图层 15@2x.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.global {
  background: #f6f6f6;
  .center {
    max-width: 1200px;
    padding: 50px 16px;
    margin: 57px auto 33px;
    padding: 40px 0;
    .top {
      text-align: center;
      .title {
        font-weight: bold;
        font-size: 38px;
        color: #343434;
      }
      .title2 {
        font-weight: 400;
        font-size: 26px;
        color: #343434;
        margin: 32px 0 60px;
      }
    }
    .item {
      display: flex;
      justify-content: center;
      align-items: stretch;
      gap: 16px;
      .box {
        background: #ffffff;
        border-radius: 35px;
        text-align: center;
        padding: 60px 20px;
        margin: 0;
        p {
          width: 278px;
          margin-top: 40px;
        }
      }
      .box2 {
        .box2_1,
        .box2_2 {
          background: #ffffff;
          border-radius: 35px;
          margin: 17px 0;
          text-align: center;
          padding: 58px;
          p {
            width: 334px;
            margin-top: 41px;
          }
        }
      }
      .box3 {
        background: #ffffff;
        border-radius: 35px;
        text-align: center;
        padding: 81px 20px 57px;

        p {
          width: 278px;
          text-align: center;
          margin-top: 40px;
        }
        .img2 {
          margin: 100px auto 0;
        }
      }

      h3 {
        font-weight: bold;
        font-size: 30px;
        color: #343434;
      }
      p {
        font-weight: 300;
        font-size: 20px;
        color: #343434;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .global {
    padding: 20px;
    .center {
      .top {
        text-align: center;
        .title {
          font-weight: bold;
          font-size: 30px;
          color: #343434;
        }
        .title2 {
          font-weight: 400;
          font-size: 20px;
          color: #343434;
          margin: 32px 0 60px;
        }
      }
      .item {
        flex-direction: column;
        .box,
        .box2_1,
        .box2_2,
        .box3 {
          margin: 0 auto;
          text-align: center;

          h3 {
            font-weight: bold;
            font-size: 26px;
            color: #343434;
          }
          p {
            width: 100%;
            font-weight: 300;
            font-size: 18px;
            color: #343434;
          }
        }
        .box3 {
          margin: 0;
          text-align: center;
          p {
            width: 100%;
          }
        }
      }
    }
  }
  .global .center .item .box2 .box2_1 p {
    width: 100% !important;
  }
  .global .center .item .box2 .box2_2 p {
    width: 100% !important;
  }
}
</style>
