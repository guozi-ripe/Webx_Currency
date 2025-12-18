<template>
  <section class="edu" id="overview">
    <div class="container">
      <h2 >{{ $t("overview.title") }}</h2>
      <div class="grid">
        <div class="card">
          <span class="icon-badge"><img :src="test" alt="" /></span>
          <div class="header">
            <div class="card-title">{{ $t("overview.token.title") }}</div>
          </div>
          <ul class="list">
            <li>{{ $t("overview.token.symbol") }}</li>
            <li>{{ $t("overview.token.cn") }}</li>
            <li>{{ $t("overview.token.en") }}</li>
            <li>{{ $t("overview.token.supply") }}</li>
          </ul>
        </div>
        
        <div class="card">
          <span class="icon-badge"><img style="height: 4
          00px;" :src="test2" alt="" /></span>
          <div class="header">
            <div class="card-title">{{ $t("overview.project.title") }}</div>
          </div>
          <ul class="list">
            <li>{{ $t("overview.project.compliance") }}</li>
            <li>{{ $t("overview.project.tech") }}</li>
            <li>{{ $t("overview.project.ecosystem") }}</li>
          </ul>
        </div>
        
        <div class="card">
          <span class="icon-badge"><img :src="test" alt="" /></span>
          <div class="header">
            <div class="card-title">{{ $t("overview.exchanges.title") }}</div>
          </div>
          <div class="cols">
            <div>
              <div class="sub">{{ $t("overview.exchanges.cex") }}</div>
              <ul class="list">
                <li>Binance</li>
                <li>OKX</li>
                <li>Bybit</li>
                <li>Gate.io</li>
                <li>MEXC</li>
              </ul>
            </div>
            <div>
              <div class="sub">DEX</div>
              <ul class="list">
                <li>PancakeSwap</li>
                <li>Biswap</li>
                <li>ApeSwap</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="card">
          <span class="icon-badge"><img :src="test" alt="" /></span>
          <div class="header">
            <div class="card-title">{{ $t("overview.wallets.title") }}</div>
          </div>
          <div class="cols">
            <div>
              <div class="sub">{{ $t("overview.wallets.plan") }}</div>
              <ul class="list">
                <li>MetaMask</li>
                <li>Trust Wallet</li>
                <li>OKX Wallet</li>
                <li>Binance Web3 Wallet</li>
                <li>TokenPocket</li>
              </ul>
            </div>
            <div>
              <div class="sub">{{ $t("overview.wallets.adapted") }}</div>
              <ul class="list">
                <li>SafePal</li>
                <li>BitKeep/Bitget Wallet</li>
              </ul>
            </div>
          </div>
          <div class="note">{{ $t("overview.wallets.note") }}</div>
        </div>
        
        <div class="card">
          <span class="icon-badge"><img :src="test" alt="" /></span>
          <div class="header">
            <div class="card-title">{{ $t("overview.whitepaper.title") }}</div>
          </div>
          <p class="desc">{{ $t("overview.whitepaper.desc") }}</p>
          <div class="actions">
            <button class="primary">{{ $t("overview.whitepaper.cta") }}</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import test from "../../../assets/test.svg";
import test2 from "../../../assets/11111.webp";
</script>

<style scoped lang="scss">
.edu {
  padding: 40px 24px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.grid {
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 108px;
}

.card {
  background: #fff;
  border: 1px solid rgba(10, 60, 159, 0.08);
  border-radius: 18px;
  padding: 18px 18px 16px;
  box-shadow: 0 8px 24px rgba(16, 24, 40, 0.08);
  position: relative; /* 关键：为绝对定位的子元素创建参照 */
  margin-top: 50px;
  min-height: 300px; /* 确保卡片有最小高度 */
}

.header {
  margin-bottom: 12px;
  margin-top: 120px;
  .card-title {
    font-weight: 800;
    margin-bottom: 8px;
    color: #0a3c9f;
    font-size: 20px;
    text-align: left;
  }
}


.icon-badge {
  position: absolute;
  top: -86px; 
  right: 55px; 
  border-radius: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  z-index: 2; /* 确保图标在内容上方 */
  transform: translate(20%, -20%); /* 微调位置，让图标稍微超出卡片边界 */
}

.icon-badge img {
  width: 310px;
  height: 450px;
  max-width: 100%;
  object-fit: contain; /* 确保图片比例正确 */
}

.sub {
  color: #6b7280;
  font-size: 14px;
  margin-bottom: 6px;
}

.list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.list li {
  position: relative;
  padding-left: 16px;
  margin: 10px 0;
}

.list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background: #333;
  transform: translateY(-50%);
}

.cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 10px;
}

.note {
  margin-top: 8px;
  color: #6b7280;
  font-size: 12px;
}

.desc {
  color: #374151;
  line-height: 1.5;
}

.actions {
  margin-top: 12px;
}

.primary {
  background: var(--color-primary);
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 8px 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .grid {
    gap: 60px;
  }
  
  .icon-badge img {
    width: 280px;
    height: 400px;
  }
}

@media (max-width: 960px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .card {
    margin-top: 30px;
    min-height: 280px;
  }
  
  .icon-badge img {
    width: 250px;
    height: 350px;
  }
}

@media (max-width: 768px) {
  .edu {
    padding: 20px 16px;
  }
  
  .grid {
    gap: 30px;
  }
  
  .card {
    min-height: 250px;
    padding: 16px 16px 14px;
    margin-top: 80px;
  }
  
  .icon-badge {
    transform: translate(15%, -15%); /* 移动端调整偏移量 */
  }
  
  .icon-badge img {
    width: 210px;
    height: 280px;
  }
  
  .cols {
    grid-template-columns: 1fr;
    gap: 8px;
  }
}

@media (max-width: 480px) {

  
  .icon-badge {
    transform: translate(10%, -10%); /* 小屏幕进一步调整偏移量 */
  }
  
  .card {
    min-height: 220px;
  }
  
  .header .card-title {
    font-size: 18px; /* 移动端调整标题大小 */
  }
}
</style>