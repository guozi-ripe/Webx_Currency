<template>
  <section class="edu" id="overview">
    <div class="container">
      <h2>{{ $t("overview.title") }}</h2>
      <div class="grid">
        <div class="card">
          <div class="header">
            <span class="icon-badge"><img :src="cryptoCoin" alt="" /></span>
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
          <span class="icon-badge"><img :src="save" alt="" /></span>
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
          <div class="header">
            <span class="icon-badge"><img :src="rule" alt="" /></span>
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
          <div class="header">
            <span class="icon-badge"><img :src="wallet" alt="" /></span>
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
          <div class="header">
            <span class="icon-badge"><img :src="Favorite" alt="" /></span>
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
import save from "../../../assets/save.svg";
import cryptoCoin from "../../../assets/crypto-coin.svg";
import rule from "../../../assets/rule.svg";
import wallet from "../../../assets/wallet.svg";

import Favorite from "../../../assets/Favorite_list_default.svg";
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
  position: relative;
  margin-top: 50px;
}

.header {
  margin-bottom: 12px;
  padding-top: 100px;
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
  top: -56px;
  right: 10px;
  width: 192px;
  height: 122px;
  border-radius: 18px;
  background: linear-gradient(135deg, #eaf2ff 0%, #dbeafe 100%);
  border: 1px solid #cfe2ff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 16px rgba(10, 60, 159, 0.12);
}

.icon-badge img {
  width: 56px;
  height: 56px;
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
}

@media (max-width: 960px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }
 
}
</style>
