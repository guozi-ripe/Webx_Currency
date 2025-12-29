<template>
  <div class="News">
    <div class="title">新聞資訊</div>
    <div class="news_banner">
      <div class="info">
        <div class="left">
          <h2>通往加密貨幣的門戶</h2>
          <div class="txt">通往加密貨幣的門戶</div>
          <div class="btn">了解更多资讯</div>
        </div>
        <div class="right">
          <img src="@/assets/new/page11@2x.png" alt="" />
        </div>
      </div>
    </div>
    <div class="news_info">
      <div class="item">
        <div class="item_l">
          <h3>年利率最高可達 10%</h3>
          <div class="txt">採用“等級升+鎖詹耦放”機制，所有推廣者均為節點</div>
          <div class="item_b">
            <div class="btn">加入Webx</div>
            <div class="btn2">加入Webx</div>
          </div>
        </div>
        <div class="item_r">
          <img src="@/assets/new/page6@2x.png" alt="" />
        </div>
      </div>
      <div class="item2">
        <div class="item_r">
          <img src="@/assets/new/page7@2x.png" alt="" />
        </div>
        <div class="item_l">
          <h3>加密貨幣交易的核心功能</h3>
          <div class="txt2">
            能量值具備“”與“制卡”兩大功能。功能允許用戶上傳能量值進行，直接獲取WebX代收益，實現消費價值向數字資產的轉化；制卡功能支持用戶直接將能量值製作成禮品卡，禮品卡可在生熊內流通、消費或轉贈他人，提升能量值的靈活性與實用性，豐富商生熊的支付場景；能量值不設有效期，可長期累，且隨著生熊發展，
            能量值的應用場景將持續拓展。
          </div>
          <div class="item_b">
            <div class="btn">搜寻加密貨幣</div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="item_l">
          <h3>多元化你的投資組合</h3>
          <div class="txt">
            涵益 Web3 量化、加密、股票、ETF
            等產品，優選機構對接，提供低風險高回報的理財選擇
          </div>
        </div>
        <div class="item_r">
          <img src="@/assets/new/page8@2x.png" alt="" />
        </div>
      </div>
    </div>
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
    height: auto; // 请根据您的设计需求设置一个具体高度
    background-color: #003baf;

    .info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 200px;
      max-width: 1200px;
      padding: 40px 24px;
      margin: 57px auto 33px;
      .left {
        h2 {
          font-weight: 500;
          font-size: 50px;
          color: #ffffff;
          margin-bottom: 28px;
        }
        .txt {
          font-weight: 500;
          font-size: 30px;
          color: #ffffff;
          margin-bottom: 80px;
        }
        .btn {
          width: 100%;
          max-width: 202px;
          height: auto;
          background: #ffffff;
          border-radius: 35px;
          text-align: center;
          font-weight: 500;
          font-size: 26px;
          color: #003baf;
          padding: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          animation: breath 3s ease-in-out infinite;
          &:hover {
            animation: none; // 悬停时停止呼吸，提供更直接的反馈
            transform: scale(1.1);
            background: linear-gradient(135deg, #ffffff 0%, #f0f8ff 100%);
            box-shadow: 0 5px 15px rgba(0, 59, 175, 0.3);
          }

          &:active {
            transform: scale(0.95);
            transition: transform 0.1s ease;
          }
        }
      }
      img {
        border-radius: 10px;
        transition: all 0.5s ease;
        animation: float 4s ease-in-out infinite;
        cursor: pointer;
        &:hover {
          animation: none;
          transform: scale(1.05) rotate(1deg);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        }
      }
    }
  }
  .news_info {
    max-width: 1200px;
    padding: 40px 24px;
    margin: -50px auto 0;
    .item .item_r {
      width: 641px;
      height: 501px;
      img {
        width: 100%;
        height: 100%;
        // transition: all 0.4s ease;

        border-radius: 30px;
        &:hover {
          transform: scale(1.08);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }
      }
    }
    .item2 .item_r {
      width: 500px;
      height: 480px;
      img {
        width: 100%;
        height: 100%;
        // transition: all 0.4s ease;

        border-radius: 30px;
        &:hover {
          transform: scale(1.08);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }
      }
    }

    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 320px;
      margin: 150px 0;
      .item_b {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;
        margin-top: 74px;
        .btn {
          background: #3055cf;
          border-radius: 9px;
          padding: 17px 21px;
          text-align: center;
          font-weight: 600;
          font-size: 26px;
          color: #ffffff;
          white-space: nowrap;
        }
        .btn2 {
          padding: 16px 21px;
          border-radius: 9px;
          border: 2px solid #3055cf;
          font-weight: 600;
          font-size: 26px;
          color: #3055cf;
          text-align: center;
          white-space: nowrap;
        }
      }
    }
    .item2 {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 144px;
      .item_b {
        margin-top: 38px;
        .btn {
          background: #3055cf;
          border-radius: 9px;
          padding: 16px 28px;
          font-weight: 600;
          font-size: 26px;
          color: #ffffff;
          text-align: center;
          max-width: 220px;
        }
      }
    }

    h3 {
      font-weight: bold;
      font-size: 38px;
      color: #343434;
    }
    .txt,
    .txt2 {
      font-weight: 400;

      color: #616161;
      max-width: 575px;
    }
    .txt {
      margin-top: 74px;
      font-size: 24px;
    }
    .txt2 {
      margin-top: 44px;
      font-size: 20px;
    }
    .item,
    .item2 {
      .item_b {
        .btn,
        .btn2 {
          cursor: pointer;
          transition: all 0.3s ease;
          animation: gentlePulse 2s ease-in-out infinite;

          &:hover {
            animation: hoverScale 0.3s ease forwards;
          }

          &.btn {
            &:hover {
              background: linear-gradient(135deg, #3055cf 0%, #5a72e3 100%);
              box-shadow: 0 5px 15px rgba(48, 85, 207, 0.4);
            }
          }

          &.btn2 {
            &:hover {
              background: rgba(48, 85, 207, 0.1);
              border-color: #5a72e3;
              color: #5a72e3;
            }
          }
        }
      }
    }
  }
}
// 小尺寸pc端
@media (max-width: 1440px) and (min-width: 1025px) {
  .News {
    .title {
      font-weight: bold;
      font-size: 38px;
      color: #010101;
      text-align: center;
    }
    .news_banner {
      width: 100%; // 或者一个具体的宽度值，例如 800px
      height: auto; // 请根据您的设计需求设置一个具体高度
      background-color: #003baf;

      .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 200px;
        max-width: 1200px;
        padding: 40px 34px;
        margin: 20px auto 33px;
        .left {
          h2 {
            font-weight: 500;
            font-size: 38px;
            white-space: nowrap;
            color: #ffffff;
            margin-bottom: 28px;
          }
          .txt {
            font-weight: 500;
            font-size: 28px;
            color: #ffffff;
            margin-bottom: 80px;
          }
          .btn {
            width: 100%;
            max-width: 202px;
            height: auto;
            background: #ffffff;
            border-radius: 35px;
            text-align: center;
            font-weight: 500;
            font-size: 22px;
            color: #003baf;
            padding: 10px;
            cursor: pointer;
            transition: all 0.3s ease;
            animation: breath 3s ease-in-out infinite;
            &:hover {
              animation: none; // 悬停时停止呼吸，提供更直接的反馈
              transform: scale(1.1);
              background: linear-gradient(135deg, #ffffff 0%, #f0f8ff 100%);
              box-shadow: 0 5px 15px rgba(0, 59, 175, 0.3);
            }

            &:active {
              transform: scale(0.95);
              transition: transform 0.1s ease;
            }
          }
        }
        img {
          border-radius: 10px;
          transition: all 0.5s ease;
          animation: float 4s ease-in-out infinite;
          cursor: pointer;
          &:hover {
            animation: none;
            transform: scale(1.05) rotate(1deg);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
          }
        }
      }
    }
    .news_info {
      max-width: 1200px;
      padding: 40px 34px;
      margin: -50px auto 0;
      .item .item_r {
        width: 621px;
        height: 431px;
        img {
          width: 100%;
          height: 100%;
          // transition: all 0.4s ease;

          border-radius: 30px;
          &:hover {
            transform: scale(1.08);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          }
        }
      }
      .item2 .item_r {
        width: 480px;
        height: 440px;
        img {
          width: 100%;
          height: 100%;
          // transition: all 0.4s ease;

          border-radius: 30px;
          &:hover {
            transform: scale(1.08);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          }
        }
      }

      .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 320px;
        margin: 150px 0;
        .item_b {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          gap: 10px;
          margin-top: 74px;
          .btn {
            background: #3055cf;
            border-radius: 9px;
            padding: 17px 21px;
            text-align: center;
            font-weight: 600;
            font-size: 26px;
            color: #ffffff;
          }
          .btn2 {
            padding: 16px 21px;
            border-radius: 9px;
            border: 2px solid #3055cf;
            font-weight: 600;
            font-size: 26px;
            color: #3055cf;
            text-align: center;
          }
        }
      }
      .item2 {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 144px;
        .item_b {
          margin-top: 38px;
          .btn {
            background: #3055cf;
            border-radius: 9px;
            padding: 16px 28px;
            font-weight: 600;
            font-size: 26px;
            color: #ffffff;
            text-align: center;
            max-width: 220px;
          }
        }
      }

      h3 {
        font-weight: bold;
        font-size: 38px;
        color: #343434;
      }
      .txt,
      .txt2 {
        font-weight: 400;

        color: #616161;
        max-width: 575px;
      }
      .txt {
        margin-top: 74px;
        font-size: 24px;
      }
      .txt2 {
        margin-top: 44px;
        font-size: 20px;
      }
      .item,
      .item2 {
        .item_b {
          .btn,
          .btn2 {
            cursor: pointer;
            transition: all 0.3s ease;
            animation: gentlePulse 2s ease-in-out infinite;

            &:hover {
              animation: hoverScale 0.3s ease forwards;
            }

            &.btn {
              &:hover {
                background: linear-gradient(135deg, #3055cf 0%, #5a72e3 100%);
                box-shadow: 0 5px 15px rgba(48, 85, 207, 0.4);
              }
            }

            &.btn2 {
              &:hover {
                background: rgba(48, 85, 207, 0.1);
                border-color: #5a72e3;
                color: #5a72e3;
              }
            }
          }
        }
      }
    }
  }
}

// 移动端样式
@media (max-width: 768px) {
  .News {
    .title {
      font-weight: bold;
      font-size: 30px;
      color: #010101;
      text-align: center;
      padding: 20px 16px 0px;
    }
    .news_banner {
      width: 100%;
      height: auto;
      background-color: #003baf;
      .info {
        flex-direction: column; /* 改为垂直布局 */
        gap: 30px; /* 大幅减少间距 */
        padding: 30px 16px;
        margin: 0 auto;
        .left {
          h2 {
            font-weight: 500;
            font-size: 34px;
            color: #ffffff;
            margin-bottom: 18px;
          }
          .txt {
            font-weight: 500;
            font-size: 24px;
            color: #ffffff;
            margin-bottom: 20px;
          }
          .btn {
            width: 100%;
            height: auto;
            background: #ffffff;
            border-radius: 25px;
            text-align: center;
            font-weight: 500;
            font-size: 20px;
            color: #003baf;
            padding: 10px;
            max-width: 200px;
          }
        }
      }
    }
    .news_info {
      .item {
        display: block;
        margin: 100px 0;
        .item_b {
          display: block;
          margin-top: 74px;
          .btn {
            background: #3055cf;
            border-radius: 9px;
            padding: 17px 21px;
            text-align: center;
            font-weight: 600;
            font-size: 26px;
            color: #ffffff;
            margin: 20px 0;
          }
          .btn2 {
            padding: 16px 21px;
            border-radius: 9px;
            border: 2px solid #3055cf;
            font-weight: 600;
            font-size: 26px;
            color: #3055cf;
            text-align: center;

            margin: 20px 0;
          }
        }
      }
      .item2 {
        display: block;
        margin: 100px 0;
        .item_b {
          margin-top: 38px;
          .btn {
            background: #3055cf;
            border-radius: 9px;
            padding: 16px 28px;
            font-weight: 600;
            font-size: 26px;
            color: #ffffff;
            text-align: center;
            max-width: 220px;
          }
        }
      }
      h3 {
        font-weight: bold;
        font-size: 28px;
        color: #343434;
        margin-top: 20px;
      }
      .txt,
      .txt2 {
        font-weight: 400;
        color: #616161;
        margin: 20px 0;
      }
      .txt {
        margin-top: 74px;
        font-size: 24px;
      }
      .txt2 {
        margin-top: 44px;
        font-size: 20px;
      }
    }
  }
  .News .news_info .item .item_r {
    width: 100%;
    height: auto;
  }
  .News .news_info .item2 .item_r {
    width: 100%;
    height: auto;
  }
}
// 呼吸动画关键帧
@keyframes breath {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
}

@keyframes gentlePulse {
  0%,
  100% {
    opacity: 1;
    transform: translateY(0);
  }
  50% {
    opacity: 0.9;
    transform: translateY(-2px);
  }
}

// 悬停放大效果
@keyframes hoverScale {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.05);
  }
}

// 图片浮动效果
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>
