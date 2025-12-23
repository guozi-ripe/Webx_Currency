<template>
  <section class="legal dark" id="fooe">
    <div class="container">
      <div class="top">
        <div class="brand">
          <!-- <div class="logo">WebX</div> -->
          <img class="logo" src="../../../assets/Webx-白色版本.png" alt="" />
          <div class="tag">{{ $t("footer.tag") }}</div>
          <div class="social">
            <a class="s" href="https://facebook.com" target="_blank">
              <img src="../../../assets/F.svg" alt="Facebook" />
            </a>

            <a class="s" href="https://www.webull.com" target="_blank">
              <img src="../../../assets/webullglobal.svg" alt="Webull" />
            </a>

            <a class="s" href="https://twitter.com" target="_blank">
              <img src="../../../assets/X.svg" alt="X/Twitter" />
            </a>

            <a class="s" href="https://youtube.com" target="_blank">
              <img src="../../../assets/youtube.svg" alt="YouTube" />
            </a>

            <a class="s" href="https://instagram.com" target="_blank">
              <img src="../../../assets/ins.svg" alt="Instagram" />
            </a>
          </div>
        </div>
        <div class="cols">
          <div class="col">
            <div class="title">{{ $t("footer.columns.about") }}</div>
            <a href="###">{{ $t("footer.about.about_us") }}</a>
            <a href="###">{{ $t("footer.about.careers") }}</a>
            <a href="###">{{ $t("footer.about.press") }}</a>
          </div>
          <div class="col">
            <div class="title">{{ $t("footer.columns.contact") }}</div>
            <a href="###">{{ $t("footer.contact.facebook") }}</a>
            <a href="###">{{ $t("footer.contact.twitter") }}</a>
            <a href="###">{{ $t("footer.contact.instagram") }}</a>
            <a href="###">{{ $t("footer.contact.email") }}</a>
          </div>
          <div class="col">
            <div class="title">{{ $t("footer.columns.money") }}</div>
            <a href="###">{{ $t("footer.money.affiliates") }}</a>
            <a href="###">{{ $t("footer.money.vendors") }}</a>
            <a href="###">{{ $t("footer.money.protect_brand") }}</a>
          </div>
          <div class="col">
            <div class="title">{{ $t("footer.columns.legal") }}</div>
            <a href="###">{{ $t("footer.legal.privacy") }}</a>
            <a href="###">{{ $t("footer.legal.terms") }}</a>
          </div>
        </div>
      </div>
      <div class="copyright">
        © BingoX Investments Limited. All rights reserved.
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.legal {
  background: #000000;
}

.dark {
  color: #d1d5db;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 24px;
}

.top {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 24px;
  align-items: start;
}

.brand .logo {
  font-size: 24px;
  font-weight: 800;
  color: #f8fafc;
}

.brand .tag {
  margin-top: 8px;
  font-weight: 300;
  font-size: 14px;
  color: #969da2;
}

.social {
  margin-top: 16px;
  display: flex;
  gap: 8px;
}

.s {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  filter: brightness(0) saturate(100%) invert(100%) opacity(0.7);
  text-decoration: none;
  font-size: 12px;
}

.cols {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

.col .title {
  font-weight: 400;
  font-size: 22px;
  color: #eaeaea;
  margin-bottom: 8px;
}

.col a {
  display: block;
  font-weight: 400;
  font-size: 20px;
  color: #969da2;
  text-decoration: none;
  margin: 6px 0;
}

.col a:hover {
  color: var(--color-primary);
}

.copyright {
  margin-top: 24px;
  font-weight: 400;
  font-size: 20px;
  color: #eaeaea;
  padding-top: 87px;
  text-align: center;
}

@media (max-width: 960px) {
  .top {
    grid-template-columns: 1fr;
  }

  .cols {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
