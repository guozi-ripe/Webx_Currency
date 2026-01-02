<template>
  <section class="docs" id="docs">
    <div class="container">
      <h2 class="title">{{ $t('docs.title') }}</h2>
      <div :class="['panel', open === i ? 'open' : '']" v-for="(s, i) in sections" :key="i">
        <div v-if="anchorId(i)" :id="anchorId(i)"></div>
        <button class="row" @click="toggle(i)">
          <div class="left">
            <div class="index"
              :style="{ color: open === i ? '#0A3C9F' : '#333', fontSize: open === i ? '24px' : '18px' }">{{ pad(i + 1)
              }}. {{ $t('docs.items.' + s) }}</div>
          </div>
          <div class="toggle">{{ open === i ? '－' : '＋' }}</div>
        </button>
        <div v-if="open === i" class="content">
          <template v-if="i === 0">
            <p class="desc">{{ $t('docs.intro') }}</p>
          </template>
          <template v-else-if="i === 1">
            <h3 class="acc-sub">{{ $t('docs.content.background.p1.title') }}</h3>
            <p class="desc">{{ $t('docs.content.background.p1.body') }}</p>
            <h3 class="acc-sub">{{ $t('docs.content.background.p2.title') }}</h3>
            <p class="desc">{{ $t('docs.content.background.p2.body') }}</p>
          </template>
          <template v-else-if="i === 2">
            <h3 class="acc-sub">{{ $t('docs.content.mission.v.title') }}</h3>
            <p class="desc">{{ $t('docs.content.mission.v.body') }}</p>
            <h3 class="acc-sub">{{ $t('docs.content.mission.m.title') }}</h3>
            <p class="desc">{{ $t('docs.content.mission.m.body') }}</p>
            <h3 class="acc-sub">{{ $t('docs.content.mission.core.title') }}</h3>
            <ul class="list bullets">
              <li>{{ $t('docs.content.mission.core.industry') }}</li>
              <li>{{ $t('docs.content.mission.core.global') }}</li>
              <li>{{ $t('docs.content.mission.core.equity') }}</li>
              <li>{{ $t('docs.content.mission.core.lowbarrier') }}</li>
            </ul>
          </template>
          <template v-else-if="i === 3">
            <h3 class="acc-sub">{{ $t('docs.content.model.m.title') }}</h3>
            <p class="desc">{{ $t('docs.content.model.m.body') }}</p>
            <h3 class="acc-sub">{{ $t('docs.content.model.loop.title') }}</h3>
            <ul class="list bullets">
              <li>{{ $t('docs.content.model.loop.eco') }}</li>
              <li>{{ $t('docs.content.model.loop.system') }}</li>
              <li>{{ $t('docs.content.model.loop.capital') }}</li>
            </ul>
          </template>
          <template v-else-if="i === 4">
            <h3 class="acc-sub">{{ $t('docs.content.modules.s.title') }}</h3>
            <ul class="list bullets">
              <li>{{ $t('docs.content.modules.s.core') }}</li>
              <li>{{ $t('docs.content.modules.s.incubation') }}</li>
              <li>{{ $t('docs.content.modules.s.ops') }}</li>
            </ul>
            <h3 class="acc-sub">{{ $t('docs.content.energy.title') }}</h3>
            <p class="desc">{{ $t('docs.content.energy.intro') }}</p>
            <h4 class="acc-sub">{{ $t('docs.content.energy.acquire.title') }}</h4>
            <ul class="list bullets">
              <li>{{ $t('docs.content.energy.acquire.buy') }}</li>
              <li>{{ $t('docs.content.energy.acquire.ref') }}</li>
              <li>{{ $t('docs.content.energy.acquire.task') }}</li>
            </ul>
            <h4 class="acc-sub">{{ $t('docs.content.energy.core.title') }}</h4>
            <ul class="list bullets">
              <li>{{ $t('docs.content.energy.core.wallet') }}</li>
              <li>{{ $t('docs.content.energy.core.redeem') }}</li>
              <li>{{ $t('docs.content.energy.core.fair') }}</li>
            </ul>
            <h3 class="acc-sub">{{ $t('docs.content.dapp.title') }}</h3>
            <h4 class="acc-sub">{{ $t('docs.content.dapp.base.title') }}</h4>
            <ul class="list bullets">
              <li>{{ $t('docs.content.dapp.base.ticker') }}</li>
              <li>{{ $t('docs.content.dapp.base.supply') }}</li>
              <li>{{ $t('docs.content.dapp.base.issue') }}</li>
              <li>{{ $t('docs.content.dapp.base.flow') }}</li>
            </ul>
          </template>
          <template v-else-if="i === 5">
            <ul class="list bullets">
              <li>{{ $t('docs.content.commonStock.core') }}</li>
              <li>{{ $t('docs.content.commonStock.layout') }}</li>
              <li>{{ $t('docs.content.commonStock.advantages1') }}</li>
              <li>{{ $t('docs.content.commonStock.advantages2') }}</li>
              <li>{{ $t('docs.content.commonStock.advantages3') }}</li>
              <li>{{ $t('docs.content.commonStock.compliance') }}</li>
              <li>{{ $t('docs.content.commonStock.stages') }}</li>
            </ul>
          </template>
          <template v-else-if="i === 6">
            <ul class="list bullets">
              <li>{{ $t('docs.content.tech.infra') }}</li>
              <li>{{ $t('docs.content.tech.contracts') }}</li>
              <li>{{ $t('docs.content.tech.compat') }}</li>
            </ul>
          </template>
          <template v-else-if="i === 7">
            <h3 class="acc-sub">{{ $t('docs.content.strategy.core') }}</h3>
            <p class="desc">{{ $t('docs.content.strategy.coreBody') }}</p>
            <h3 class="acc-sub">{{ $t('docs.content.strategy.path.title') }}</h3>
            <ul class="list bullets">
              <li>{{ $t('docs.content.strategy.path.p1') }}</li>
              <li>{{ $t('docs.content.strategy.path.p2') }}</li>
              <li>{{ $t('docs.content.strategy.path.p3') }}</li>
            </ul>
          </template>
          <template v-else-if="i === 8">
            <h3 class="acc-sub">{{ $t('docs.content.team.title') }}</h3>
            <ul class="list bullets">
              <li>{{ $t('docs.content.team.rnd') }}</li>
              <li>{{ $t('docs.content.team.ops') }}</li>
              <li>{{ $t('docs.content.team.sec') }}</li>
            </ul>
            <h3 class="acc-sub">{{ $t('docs.content.partners.title') }}</h3>
            <ul class="list bullets">
              <li>{{ $t('docs.content.partners.tech') }}</li>
              <li>{{ $t('docs.content.partners.industry') }}</li>
              <li>{{ $t('docs.content.partners.channel') }}</li>
            </ul>
          </template>
          <template v-else-if="i === 9">
            <h3 class="acc-sub">{{ $t('docs.content.risks.title') }}</h3>
            <ul class="list bullets">
              <li>{{ $t('docs.content.risks.tech') }}</li>
              <li>{{ $t('docs.content.risks.compliance') }}</li>
              <li>{{ $t('docs.content.risks.market') }}</li>
              <li>{{ $t('docs.content.risks.ops') }}</li>
            </ul>
            <h3 class="acc-sub">{{ $t('docs.content.disclaimer.title') }}</h3>
            <ul class="list bullets">
              <li>{{ $t('docs.content.disclaimer.d1') }}</li>
              <li>{{ $t('docs.content.disclaimer.d2') }}</li>
              <li>{{ $t('docs.content.disclaimer.d3') }}</li>
              <li>{{ $t('docs.content.disclaimer.d4') }}</li>
            </ul>
          </template>
          <template v-else-if="i === 10">
            <ul class="list bullets">
              <li>{{ $t('docs.content.contact.site') }}<a class="link" href="https://WebX.co" target="_blank"
                  rel="noopener">WebX.com</a></li>
              <!-- <li>{{ $t('docs.content.contact.phone') }}</li>
              <li>{{ $t('docs.content.contact.telegram') }}</li>
              <li>{{ $t('docs.content.contact.email') }}</li> -->
            </ul>
            <div class="qr-grid">
              <div class="qr-card">
                <div class="qr-title">Twitter</div>
                <div class="qr-box">
                  <img src="../../../assets/twitter.png" alt="">
                </div>
              </div>
              <div class="qr-card">
                <div class="qr-title">Telegram</div>
                <div class="qr-box">
                  <img src="../../../assets/telegram.png" alt=""></img>
                </div>
              </div>
              <div class="qr-card">
                <div class="qr-title">WeChat 官方賬號</div>
                <div class="qr-box">
                  <img src="../../../assets/wechat.png" alt=""></img>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
const sections = ['n1', 'n2', 'n3', 'n4', 'n5', 'n6', 'n7', 'n8', 'n9', 'n10', 'n11']
const open = ref(0)
function toggle(i) { open.value = open.value === i ? -1 : i }
function pad(n) { return String(n).padStart(2, '0') }
function anchorId(i) { return i === 8 ? 'team' : (i === 10 ? 'contact' : null) }
function syncFromHash() {
  const h = typeof window !== 'undefined' ? window.location.hash : ''
  if (h === '#team') open.value = 8
  if (h === '#contact') open.value = 10
}
onMounted(() => {
  syncFromHash()
  window.addEventListener('hashchange', syncFromHash)
})
onBeforeUnmount(() => {
  window.removeEventListener('hashchange', syncFromHash)
})
</script>

<style scoped lang="scss">
.docs {
  padding: 40px 24px;
  background: #fff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.title {
  margin: 0 0 12px;
  text-align: center;
  font-weight: bold;
  font-size: 38px;
  color: #343434;
  padding-bottom: 74px;
}

.panel {
  margin-bottom: 10px;
}

.row {
  width: 100%;
  background: #fff;
  // border: 1px solid #e5eaf2;
  border-radius: 16px;
  padding: 20px 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 8px 14px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: transform 180ms ease, box-shadow 180ms ease;
}

.row:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.08);
}

.left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.index {
  font-weight: 500;
  color: #333;
  transition: color 0.3s ease;

  // &:active {
  //   font-weight: 600;
  //   color: #0A3C9F; /* 点击瞬间反馈 */
  // }

  &.active-index {
    font-weight: 500;
    color: #0A3C9F;
    /* 展开状态保持 */
  }
}

.text {
  font-weight: 600;
}

.toggle {
  font-size: 18px;
  color: #111;
  border: none
}

.content {
  background: #fff;
  // border: 1px solid #e5eaf2;
  border-top: none;
  border-radius: 0 0 16px 16px;
  padding: 18px 22px 22px;
  min-height: 80px;
  box-shadow: 0 10px 18px rgba(0, 0, 0, 0.04);
  transition: transform 180ms ease, box-shadow 180ms ease;
}

.panel.open .content:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 22px rgba(0, 0, 0, 0.06);
}

.desc {
  color: #374151;
}

.panel.open .row {
  border: none;
  border-radius: 16px 16px 0 0;

}

.panel.open .content {
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.05);
}

.acc-sub {
  font-weight: 500;
  margin: 10px 0 6px;
  color: #0A3C9F;
}

.list {
  margin: 0;
  padding-left: 18px;
}

.bullets {
  list-style: none;
  padding-left: 0;
}

.bullets li {
  position: relative;
  padding-left: 16px;
  margin: 6px 0;
}

.bullets li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  width: 8px;
  height: 8px;
  border-radius: 3px;
  background: linear-gradient(180deg, #9ec3ff, #4f86ff);
  box-shadow: 0 1px 3px rgba(14, 58, 150, 0.18);
  transform: translateY(-50%);
}

.qr-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-top: 12px;
}

.qr-card {
  background: #fff;
  // border: 1px solid #e5eaf2;
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.04);
  text-align: center;
  transition: transform 180ms ease, box-shadow 180ms ease;
}

.qr-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 18px rgba(0, 0, 0, 0.08);
}

.qr-title {
  font-weight: 600;
  margin-bottom: 8px;
}

.qr-box {
  height: 120px;
  border-radius: 8px;
  background: repeating-linear-gradient(45deg, #eaf2ff 0, #eaf2ff 8px, #cfe2ff 8px, #cfe2ff 16px);

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}



.link {
  color: #111;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}

@media (max-width: 960px) {
.title {
  margin: 0 0 12px;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  color: #343434;
  padding-bottom: 34px;
}
  .qr-grid {
    grid-template-columns: 1fr;
  }

  .docs {
    padding: 32px 16px;
  }

  .index {
    font-weight: 500;
    color: #333;
    transition: color 0.3s ease;
    text-align: left;
    text-indent: -2em;
    /* 首行悬挂缩进2字符 */
    padding-left: 2em;
    /* 为悬挂缩进留出空间 */
    box-sizing: border-box;

    &.active-index {
      font-weight: 500;
      color: #0A3C9F;
      font-size: 10px;
    }
  }
}
</style>
