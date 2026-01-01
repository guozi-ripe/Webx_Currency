<template>
  <section id="overview">
    <div class="Project">
      <!-- 頂目概况 -->
      <div class="container">
        <div class="title">頂目概况</div>
        <div class="box_item1">
          <div class="left">
            <h1>代幣資訊</h1>
            <ul>
              <li><span>幣符：</span>WebX</li>
              <li><span>中文全稱：</span> ：全球鏈商</li>
              <li><span> 英文全稱：</span>WebX Global Chain Commerce</li>
              <li><span>代幣發行量：</span> 12億 (1,200,000,000)</li>
            </ul>
          </div>
          <div class="right">
            <img src="@/assets/new/page1@2x.png" alt="" />
          </div>
        </div>
        <div class="box_item2">
          <div class="left">
            <h1>交易所收錄</h1>
            <div class="item">
              <div class="box1">
                <h3>計劃對接</h3>
                <div class="info">
                  <div>
                    <img src="@/assets/new/Binance@2x.png" alt="" />
                    <p>Binance</p>
                  </div>
                  <div>
                    <img src="@/assets/new/OKX@2x.png" alt="" />
                    <p>OKX</p>
                  </div>
                  <div>
                    <img src="@/assets/new/Bybit@2x.png" alt="" />
                    <p>Bybit</p>
                  </div>
                  <div>
                    <img src="@/assets/new/Gate.io@2x.png" alt="" />
                    <p>Gate.io</p>
                  </div>
                  <div>
                    <img src="@/assets/new/MEXC@2x.png" alt="" />
                    <p>MEXC</p>
                  </div>
                </div>
              </div>
              <div class="box2">
                <h3>DEX</h3>
                <div class="info">
                  <div>
                    <img src="@/assets/new/PancakeSwap@2x.png" alt="" />
                    <p>PancakeSwap</p>
                  </div>
                  <div>
                    <img src="@/assets/new/Biswap@2x.png" alt="" />
                    <p>Biswap</p>
                  </div>
                  <div>
                    <img src="@/assets/new/ApeSwap@2x.png" alt="" />
                    <p>ApeSwap</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="right">
            <h1>錢包收錄</h1>
            <div class="item">
              <div class="box1">
                <h3>計劃支持</h3>
                <div class="info">
                  <div>
                    <img src="@/assets/new/MetaMask@2x.png" alt="" />
                    <p>MetaMask</p>
                  </div>
                  <div>
                    <img src="@/assets/new/Trust Wallet@2x.png" alt="" />
                    <p>Trust Wallet</p>
                  </div>
                  <div>
                    <img src="@/assets/new/OKX Wallet@2x.png" alt="" />
                    <p>OKX Wallet</p>
                  </div>
                  <div>
                    <img src="@/assets/new/Binance Web3 @2x.png" alt="" />
                    <p>Binance Web3</p>
                  </div>
                  <div>
                    <img src="@/assets/new/TokenPocket@2x.png" alt="" />
                    <p>TokenPocket</p>
                  </div>
                </div>
              </div>
              <div class="box2">
                <h3>已適配(測試)</h3>
                <div class="info">
                  <div>
                    <img src="@/assets/new/SafePal@2x.png" alt="" />
                    <p>SafePal</p>
                  </div>
                  <div>
                    <img src="@/assets/new/BitKeep@2x.png" alt="" />
                    <p>BitKeep</p>
                  </div>
                  <div>
                    <img src="@/assets/new/Bitget@2x.png" alt="" />
                    <p>Bitget</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="box_item3">
          <div class="left">
            <div class="box">
              <div>
                <h1>項目基本情況</h1>
                <div class="info">
                  <div class="txt">合規與透明</div>
                  <div class="item">嚴格遵循所在法域的合規要求</div>
                </div>
                <div class="info">
                  <div class="txt">技術基礎</div>
                  <div class="item">以安全、可擴展的鏈上架構為核心</div>
                </div>
                <div class="info">
                  <div class="txt">生態走向</div>
                  <div class="item">圍繞鏈商應用場景，逐步拓展合作</div>
                </div>
              </div>
              <img src="@/assets/new/page3@2x.png" alt="" />
            </div>
          </div>
          <div class="right">
            <h1>白皮書下載</h1>
            <div class="item">
              白皮書正在整理與審閱，暫提供白皮書連結， 正式版本發布後可直接下載
            </div>
            <div class="btn">即将推出</div>
            <div class="image">
              <img src="@/assets/new/page2@2x.png" alt="" />
            </div>
          </div>
        </div>
        <div class="box_item4">
          <div class="box">
            <h3>WebX</h3>
            <h5>代币</h5>
          </div>
          <div class="box">
            <h3>1200M</h3>
            <h5>發行量</h5>
          </div>
          <div class="box">
            <h3>100+</h3>
            <h5>國際獎項</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.Project {
  margin: 57px auto 121px;
  max-width: 1200px;

  .title {
    font-weight: bold;
    font-size: 38px;
    color: #010101;
    text-align: center;
    margin-bottom: 46px;
  }
  .box_item1 {
    display: flex;
    justify-content: space-between;

    height: auto;
    gap: 109px;
    background: #e5f6fe;
    border-radius: 20px;

    .left {
      padding: 116px 36px 36px;
      h1 {
        font-weight: bold;
        font-size: 36px;
        color: #000000;
      }
      ul {
        padding-inline-start: 0;
      }
      ul li {
        list-style: none;
        text-align: left;
        font-weight: 600;
        font-size: 26px;
        color: #000000;
        white-space: nowrap;
        span {
          font-weight: 200;
        }
      }
    }
    .right {
      padding: 34px 34px 0;
    }
    img {
      width: 581px;
      height: 428px;
    }
  }
  .box_item2 {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    margin: 19px 0;
    gap: 22px;
    h1 {
      font-weight: bold;
      font-size: 36px;
      color: #000000;
    }
    .left,
    .right {
      width: 640px;
      height: auto;
      background: #e5f6fe;
      border-radius: 20px;
      padding: 34px;
    }
    .item {
      display: flex;
      gap: 197px;
      align-items: flex-start;
      h3 {
        font-weight: bold;
        font-size: 23px;
        color: #000000;
        margin-bottom: 39px;
      }
      .info {
        img {
          width: 33px;
          height: 33px;
        }
        > div {
          display: flex;
          gap: 6px;
          align-items: center;
        }
      }
    }
  }
  .box_item3 {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    gap: 21px;
    h1 {
      font-weight: bold;
      font-size: 36px;
      color: #000000;
    }
    .left {
      width: 800px;
      height: auto;
      background: #e5f6fe;
      border-radius: 20px;
      padding: 34px;
      h1 {
        font-weight: bold;
        font-size: 36px;
        color: #000000;
        margin-top: 80px;
        margin-bottom: 52px;
      }
      .box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        img {
          width: 332px;
        }
      }
      .info {
        text-align: left;
        padding-bottom: 32px;
        .txt {
          font-weight: bold;
          font-size: 22px;
          color: #363636;
          line-height: 36px;
        }
        .item {
          font-weight: 200;
          font-size: 18px;
          color: #000000;
          line-height: 36px;
        }
      }
    }
    .right {
      position: relative;
      width: 480px;
      height: auto;
      background: #e5f6fe;
      border-radius: 20px;
      padding: 34px 34px 64px;
      h1 {
        font-weight: bold;
        font-size: 36px;
        color: #000000;
        margin-bottom: 49px;
        margin-top: 80px;
      }
      .item {
        font-weight: 200;
        font-size: 18px;
        color: #000000;
        line-height: 36px;
        margin-bottom: 36px;
      }
      .btn {
        width: 160px;
        height: 51px;
        background: #003baf;
        border-radius: 14px;
        font-weight: 300;
        font-size: 26px;
        line-height: 50px;
        color: #ffffff;
        text-align: center;
      }
      .image {
        position: absolute;
        top: 20px;
        right: 10px;
        img {
          width: 230px;
          height: 201px;
          opacity: 0.4;
        }
      }
    }
  }
  .box_item4 {
    display: flex;
    justify-content: space-between;
    align-items: stretch;

    gap: 22px;
    margin-top: 19px;
    .box {
      width: 420px;
      height: 244px;
      background: #e5f6fe;
      border-radius: 20px;
      text-align: center;
      margin: auto 0;
      h3 {
        font-weight: bold;
        font-size: 72px;
        color: #003baf;
        line-height: 30px;
        padding-top: 68px;
      }
      h5 {
        font-weight: 500;
        font-size: 36px;
        color: #000000;
      }
    }
  }
}
// 小尺寸pc端
@media (max-width: 1440px) and (min-width: 1025px) {
  .container {
    padding: 40px 54px;
  }
  .Project .box_item1 .right{
    padding:24px 5px 0;
  }
}
// 移动端样式
@media screen and (max-width: 768px) {
  // 添加盒模型统一设置
  .Project {
    box-sizing: border-box;
    * {
      box-sizing: border-box;
    }

    padding: 15px 10px;
    margin: 30px auto;
    width: 100%;
    max-width: 100%;
    overflow-x: hidden; // 防止水平滚动

    .title {
      font-size: 24px;
      margin-bottom: 30px;
      padding: 0 10px;
    }

    .box_item1,
    .box_item2,
    .box_item3,
    .box_item4 {
      width: 100% !important;
      max-width: 100%;
      margin-left: 0;
      margin-right: 0;
      h1 {
        font-size: 24px;
      }
    }

    .box_item1 {
      display: block;
      .left {
        width: 100%;
        h1 {
          font-size: 24px;
        }
        ul li {
          font-size: 16px;
          word-wrap: break-word;
        }
      }
      .right {
        img {
          height: 300px;
        }
      }
    }

    .box_item2 {
      display: flex;
      flex-direction: column;
      gap: 15px;
      .left,
      .right {
        width: 100% !important;
        max-width: 100%;
        padding: 20px;
        margin: 10px 0;
      }
      .item {
        display: flex;
        gap: 20px;
        width: 100%;
        h3 {
          font-size: 20px;
          margin-bottom: 20px;
        }
        .info {
          width: 100%;
          > div {
            flex-wrap: wrap;
          }
        }
      }
    }

    .box_item3 {
      display: flex;
      flex-direction: column;
      gap: 15px;
      .left,
      .right {
        width: 100% !important;
        max-width: 100%;
        padding: 20px;
      }
      .left {
        h1 {
          font-size: 24px;
          margin-top: 20px;
          margin-bottom: 30px;
        }
        .box {
          flex-direction: column;
          gap: 20px;
          img {
            width: 100%;
            max-width: 300px;
            height: auto;
          }
        }
      }
      .right {
        position: relative;
        padding: 20px;
        h1 {
          font-size: 24px;
          margin-top: 20px;
          margin-bottom: 30px;
        }
        .image {
          position: absolute;
          top: 0px;
          right: 0;
          text-align: center;
          margin: 20px 0;
          img {
            right: 0;
            width: 100%;
            max-width: 200px;
            height: auto;
            opacity: 0.5;
          }
        }
      }
    }

    .box_item4 {
      display: flex;
      flex-direction: column;
      gap: 15px;
      .box {
        width: 100% !important;
        max-width: 100%;
        height: auto;
        padding: 30px 20px;
        margin: 10px 0;
        h3 {
          font-size: 36px;
          padding-top: 30px;
        }
        h5 {
          font-size: 20px;
        }
      }
    }
  }
}
</style>
