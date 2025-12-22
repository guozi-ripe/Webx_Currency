<template>
  <div class="News">
    <div class="title">新聞資訊</div>
    <div class="news_banner">
      <div class="info">
        <div class="left">
          <h2>通往加密貨幣的門戶</h2>
          <div>通往加密貨幣的門戶</div>
          <div>了解更多资讯</div>
        </div>
        <div class="right">11</div>
      </div>
    </div>
    <div class="news_info"></div>
  </div>
</template>
<style scoped lang="scss">
.News {
  .title {
    font-weight: bold;
    font-size: 38px;
    color: #010101;
    text-align: center;
    max-width: 1200px;
    padding: 20px 16px 30px;
    margin: 57px auto 33px;
  }
  .news_banner {
    width: 100%; // 或者一个具体的宽度值，例如 800px
    height: 300px; // 请根据您的设计需求设置一个具体高度
    background-color: #003baf;

    .info {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 200px;
      max-width: 1200px;
      padding: 20px 16px 30px;
      margin: 57px auto 33px;
    }
  }
  .news_info {
    padding: 20px 16px 30px;
    margin: 57px auto 121px;
    max-width: 1200px;
  }
}
</style>
