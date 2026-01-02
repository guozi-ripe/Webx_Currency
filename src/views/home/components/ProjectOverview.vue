<template>
  <section id="overview">
    <div class="Project">
      <!-- 頂目概况 -->
      <div class="container">
        <div class="title">{{ $t('Project.title') }}</div>
        <div class="box_item1">
          <div class="left">
            <h1>{{ $t('Project.Box1.h1_1') }}</h1>
            <h3>{{ $t('Project.Box1.h3_1') }}</h3>
            <h3>{{ $t('Project.Box1.h3_2') }}</h3>
            <h3>{{ $t('Project.Box1.h3_3') }}</h3>

            <h1>{{ $t('Project.Box1.h1_2') }}</h1>
            <ul>
              <li><span>{{ $t('Project.Box1.li1') }}</span>{{ $t('Project.Box1.symbol') }}</li>
              <li><span>{{ $t('Project.Box1.li2') }}</span>{{ $t('Project.Box1.cnFull') }}</li>
              <li><span>{{ $t('Project.Box1.li3') }}</span>{{ $t('Project.Box1.enFull') }}</li>
              <li><span>{{ $t('Project.Box1.li4') }}</span>{{ $t('Project.Box1.supply') }}</li>
            </ul>
          </div>
          <div class="right">
            <img src="@/assets/new/page1@2x.png" alt="" />
          </div>
        </div>
        <div class="box_item2">
          <div class="left">
            <h1>{{ $t('Project.Box2.title_left') }}</h1>
            <div class="item">
              <div class="box1">
                <h3>{{ $t('Project.Box2.planned') }}</h3>
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
                <h3>{{ $t('Project.Box2.dex') }}</h3>
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
            <h1>{{ $t('Project.Box2.title_right') }}</h1>
            <div class="item">
              <div class="box1">
                <h3>{{ $t('Project.Box2.plannedWallet') }}</h3>
                <div class="info">
                  <div>
                    <img src="@/assets/new/OKX Wallet@2x.png" alt="" />
                    <p>OKX Wallet</p>
                  </div>
                  <div>
                    <img src="@/assets/new/Binance Web3 @2x.png" alt="" />
                    <p>Binance Web3</p>
                  </div>

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
              <div class="box2">
                <h3>{{ $t('Project.Box2.adapted') }}</h3>
                <div class="info">
                  <div>
                    <img src="../../../assets//new/imtoken logo.png" alt="" />
                    <p>imToken</p>
                  </div>
                  <div>
                    <img src="@/assets/new/MetaMask@2x.png" alt="" />
                    <p>MetaMask</p>
                  </div>
                  <div>
                    <img src="@/assets/new/Trust Wallet@2x.png" alt="" />
                    <p>Trust Wallet</p>
                  </div>

                  <div>
                    <img src="@/assets/new/TokenPocket@2x.png" alt="" />
                    <p>TokenPocket</p>
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
                <h1>{{ $t('Project.Box3.title_left') }}</h1>
                <div class="info">
                  <div class="txt">{{ $t('Project.Box3.tag1') }}</div>
                  <div class="item">{{ $t('Project.Box3.desc1') }}</div>
                </div>
                <div class="info">
                  <div class="txt">{{ $t('Project.Box3.tag2') }}</div>
                  <div class="item">{{ $t('Project.Box3.desc2') }}</div>
                </div>
                <div class="info">
                  <div class="txt">{{ $t('Project.Box3.tag2') }}</div>
                  <div class="item">{{ $t('Project.Box3.desc2') }}</div>
                </div>
              </div>
              <img src="@/assets/new/page3@2x.png" alt="" />
            </div>
          </div>
          <div class="right">
            <h1>{{ $t('Project.Box3.title_right') }}</h1>
            <div class="item">
              {{ $t('Project.Box3.coming') }}
            <div class="btn"> {{ $t('Project.Box3.btn') }}</div>
            <div class="image">
              <img src="@/assets/new/page2@2x.png" alt="" />
            </div>
          </div>
        </div>
        </div>
        <div class="box_item4">
          <div class="box">
            <h3>WebX</h3>
            <h5>{{ $t('Project.Box4.token') }}</h5>
          </div>
          <div class="box">
            <h3>1200M</h3>
            <h5>{{ $t('Project.Box4.supply') }}</h5>
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
    align-items: flex-end;
    height: auto;
    gap: 109px;
    background: #e5f6fe;
    border-radius: 20px;

    .left {
      padding: 80px 36px 36px;

      h1 {
        font-weight: bold;
        font-size: 36px;
        color: #000000;
      }

      h3 {
        font-weight: 400;
        font-size: 24px;
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
        white-space: wrap;
        max-width: 500px;
        overflow-wrap: break-word;

        span {
          font-weight: 200;
        }
      }
    }

    .right {

      padding: 34px 34px 0;
    }

    img {
      width: 730px;
      height: 528px;
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

        >div {
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
        width: 100%;
       max-width: 220px;
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
      width: 100%;
      padding: 30px;
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

  .Project .box_item1 .right {
    padding: 24px 5px 0;
  }
}

// 

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

        h3 {
          font-size: 20px;
          // 一行显示19个字符
          white-space: wrap;
          max-width: 500px;
          overflow-wrap: break-word;
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

          >div {
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

  .Project .box_item1 .left {
    padding: 50px 26px 36px;
  }
}
</style>
