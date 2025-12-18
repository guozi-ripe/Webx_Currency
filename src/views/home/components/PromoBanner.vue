<template>
  <section class="promo">
    <div class="inner">
      <div class="track" ref="track">
        <div v-for="(s, i) in slides" :key="i" class="slide">
          <div class="card">
            <div class="art">
              <div class="bars">
                <span v-for="n in (isMobile ? 18 : 30)" :key="n"
                  :style="{ height: (8 + (n % 10) * (isMobile ? 8 : 6)) + 'px' }"></span>
              </div>
              <div class="title">LOUD INVESTING</div>
            </div>
            <div class="text">
              <h3>{{ $t('promo.title') }}</h3>
              <p>{{ $t('promo.desc') }}</p>
              <button class="ghost">{{ $t('promo.more') }}</button>
            </div>
          </div>
        </div>
      </div>
      <div class="dots">
        <div v-for="(s, i) in slides" :key="'d' + i" :class="['dot', current === i ? 'active' : '']" @click="go(i)">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
const slides = [{}, {}, {}]
const current = ref(0)
const track = ref(null)
const isMobile = ref(typeof window !== 'undefined' ? window.innerWidth <= 960 : false)
function go(i) { current.value = i; const el = track.value; if (!el) return; el.scrollTo({ left: i * el.clientWidth, behavior: 'smooth' }) }
function handleResize() { isMobile.value = window.innerWidth <= 960 }
onMounted(() => { const el = track.value; if (!el) return; setInterval(() => { current.value = (current.value + 1) % slides.length; go(current.value) }, 4000); window.addEventListener('resize', handleResize) })
onBeforeUnmount(() => { window.removeEventListener('resize', handleResize) })
</script>

<style scoped lang="scss">
.promo {
  background: #fff;
  padding: 24px;
}

.inner {
  max-width: 1200px;
  margin: 0 auto;
}

.track {
  display: flex;
  overflow: hidden;
  scroll-behavior: smooth;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
    /* IE 和 Edge */
    scrollbar-width: none;
    /* Firefox */
}
.track::-webkit-scrollbar {
  display: none;
}

.slide {
  min-width: 100%;
  flex: 0 0 100%;
  padding: 12px;
  scroll-snap-align: start;
  box-sizing: border-box;
}

.card {
  background: #0A3C9F;
  color: #e5e7eb;
  border-radius: 16px;
  padding: 50px 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 54px;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
}

.art {
  position: relative;
}

.bars {
  display: flex;
  gap: 6px;
  align-items: flex-end;
  height: 140px;
}

.bars span {
  width: 6px;
  background: linear-gradient(180deg, #60a5fa, #2563eb, #1e40af, #d4af37);
  border-radius: 3px;
}

.title {
  position: absolute;
  inset: auto 0 0 0;
  font-size: 34px;
  font-weight: 800;
  color: #fff;
  letter-spacing: 2px;
}

.text h3 {
  color: #fff;
  margin: 0 0 6px;
}

.text p {
  color: #cbd5e1;
}

.text {
  overflow-wrap: anywhere;
}

.ghost {
  margin-top: 10px;
  background: #0f1e2e;
  color: #fff;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  padding: 8px 14px;
}

.dots {
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 12px;

}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #cbd5e1;
  border: none;
  cursor: pointer;
}

.dot.active {
  background: #111827;
}

@media (max-width: 960px) {
  .slide {
    padding: 8px;
  }

  .card {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 16px;
  }

  .bars {
    height: 100px;
  }

  .title {
    font-size: 24px;
    letter-spacing: 1px;
    left: 12px;
    right: 12px;
    bottom: 12px;
    line-height: 1.1;
  }

  .text h3 {
    font-size: 20px;
    line-height: 1.2;
  }

  .text p {
    font-size: 14px;
    line-height: 1.5;
  }
}
</style>
