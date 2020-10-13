<template>
  <!-- 右边栏 -->
  <div class="rightSide">
    <section class="f">
      <img
        src="data:image/png;base64,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"
        alt
      />
      <p>欢迎访问</p>
      <p class="zg">中国移动积分商城</p>
      <button>登录</button>
    </section>
    <section class="s">
      <div class="over">
        <div class="top">
          <h4>商城广告</h4>
          <span>更多></span>
        </div>

        <div class="swiper-container" ref="a">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(rightSideTitleEvery,index) in rightSideTitle.contents"
              :key="rightSideTitleEvery.title"
            >
              <p>{{rightSideTitleEvery.title}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="t">
      <a
        v-for="(smallEvery,index) in small.contents"
        :key="smallEvery.butttonName"
        :href="smallEvery.targetUrl"
      >
        <img :src="smallEvery.imageUrl" alt />
        <p>{{smallEvery.buttonName}}</p>
      </a>
    </section>

    <div class="one">
      <div a-1-t>
        <img
          src="data:image/png;base64,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"
          alt
        />
        <h4 @mouseenter="enter(-1)" @mouseleave="leave()">话费兑换</h4>
      </div>
      <div a-2-t>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAXY0lEQVR4Xu2ceZAkZ3mnn/fLzLr6vrtnejQzQhJIQmOQkAQrMPIGGxghAzbhWMBLLMtyrAUCJDDLsawGNhzYhFkwQhwRWjtsbzgcwmuvA3DEsmEzklgdIAlkaTQwEq25uqfv6quuvL6NNzOru/qY6WkJxcwfylCpqroys/J76vf+3vc7coQXt7MSkBf5nJ3Ai4C2UciLgF4E9PxM5EUFvaigFxX0/AicbwXZhx66CZEvAffL9df//k5aE/yPL7yGkHuM8EXnA//1G9Z+Lc8pHsbya8l5hO/j5N8juz44u5Pz7mTfF8yD7IMP3ojIHcCN2QVZRN4g11//z9tdoP32wVKIcxBrb0NwBfkL94Ofe489eefXsPbWDcdPgLxXLrr1/2x33ufy+a8UkP3hD12KxbcBHwVeu+mCqosnw1/++D3e+z+3JSQFE1vnP1qxf2BhT8vxP3d/s/uTGPkHrN36mkX+FznnkzJ0y9hzAXGmY543IKsX/NBDr8TadyDyTqwdRbLTNp+zb48nfkE8cxzEPmSs+Z41MoaNfLGyxwo3WMsbgY6NFysFEzv/unMeS/82jY9A/hbH3s2uqw6J/Eb4fGGdMyB7//2XQRL7dUQ6sPZiRK5KQkhkcPVCWqFseB2NPYpdntvxNZvr2jF97ubjgkb6Ny+/+TORMtjHEI4S2zpi2iCelz0f/fROLuDcAd13n4bO358VxAbFYC0YQ1NR0dMPYWvL53B9elk22c+8pIC5rLD+mKAO9Qr4Nejoh0oZeka2P6/In8qeWz+2/Y5re5w7oHvvvRx4ajV8kiyy4XB9H4ZQXYEoBBtD//Dqt0XP/BhbW1r79mIbsns/dvIkrCzC/pch1QpWlTE/jXS7OK9u12y1tlkPuxTD1CNI0YNckeSH0O/W79QfZPjSMzAwr5eLPnzfCwJIT2rvvfcosPbtelGVZVich0IJiiXIF+HYUdh3KRx/Bjp7UjUM7SZ69jHsyvza9TkOcsWrkN5BqFVADHbqJHT1QmMFs3se6RqC3CAEOVgJYbGcAnzkj5F9+6HgQHs3tPWkcNz81iEHh+Wij7x8J3ASDezkAHvvvZ/C2i8mxzTVE0fwzFMQ+Gt/08/UF/x6+rf2Ttj/UuLxI8Tlia38AuntRwpdSH0ZOzODvO92xC2m+6oyFOzsSViaJfaryMN/iHR3Y/t2I57A3kuh1Hnm5hhultGPfH8n7d05oB/9qIMgeBaRvk1epOHUaKShMjUOuXyqqFIHDKRhFs+dJKrNwPwipryAWA1DQdwCks+B6yYqiPe/DHPT29faEvqwNA2zp6CyQDR/CvPUtxATwuB+bKlLMyMyvAv6R7YK/e/Lnltv3imcHQNKwuzQodux9stbepHfSMPL84i6e4j27sOGEVLKY/wqJvAR3yf+67/GFHKQ85J9yeWQ5NnDapi97fcw+y5J26P+EjagPAnz41BdJJx8GmfsfyISJMfaoUvAyaX75z1keDQN07SFM1h5hVx06xbS3R7ZjkIsuV4tBkUextqrUS/w69iVZeLJMlFPO7Wb30bc0blqmt7iPPnZcdzqMsQx8YMPY448mcLJ5VJAGRyFFBXacT76mbUrV0CarTQ05yegtkJw8nHc8b9DCMBzodiG7dm3XjltJWTXHkup82bZ8+F/3B7F1nvsCJC99fc6yZc+ZUvtbyfnXiaOkzQ0mqsTzddofPA/EL78FWvR16iRnz1Nbn4KoyqILdE3volxTXJcqhqF5K7Ciq95Hc6b3tJytRbq1TVA9Qr+4X/CW7kPsRkgPU9bD7ZtrRxrys/a+K+MafxnefN3Jp8LpHMGZC3CLf/uPuu5r00apZ6hz66Hf3wZ+nqoHrwDjLMaGk5lifz0KbyleSSOiB95FLnv3lXFpJCyUMt5xEt1zB//d6StawOgCnb6eBJicb1CdOSf8eoPIXETkJues30Y67Vt4iCVyinGJg/Ip39U3imkcwf073/nzdZxvrcOTi5HXIuJ5gOCt/8W/m/e1BIaMe7SAoXpk7hq3DYm+vpdmMpK0hhJ/MfN8qgFBTi0B/sHn8ZqRgwDbOhjwwa2XkGqixitoYIG9sSjePWHkdhPz6HmnktVaEu7QFxo+MjCIpQXk9cI75XP/OTPXzBA8b+96bvWy92cmKAqJ3sEMz4Wj9pX/gjb3vLLRwHewiyFmXGcWoX45Bjmrq+lKTuOIQ4TVbVu0UuvJvjUp9a3QbNj4GOqZaS2hEQBsQKqZQpSMAqp+ag7sBBCpbb+PGJvk8888tUXBJD93TdcFIcyRs5zkoyjcAyoBQSzPvaaK4je914kDNJHFCSKMGGE4zcwUYR98lHM3d886/WFlxwg/Mxn18oz1XcUgWbA2iLS0Ao9wJ54LAWkF9BUT2L2DpRDmPc3f88LCug3rrrd2vjL2mh9iKpA65rYIwzasTdei33/+zb88hYnCHA0tUcx9smfYO7+9lkB+bsvJ/7857QHloaeqicKkHoFU19Cgrp2/rGnHl8fYqsK8qAcnAdAr97/Jwgf39i6VUA3HMD+/i1raVYd3ap6wgSS1jLx0Z/ifOOuswJquLuxX/4vaRWugOIYCRpIUMVoqo9CbGUOO3+MXONhiPwWBWVGfV4A/av9d2G5ZTOgHGHQBldfDB+5DZtkMItow+IYR4tEVZ2FaPoI5qvfwFQ3eEN20jhy8AcuxnzojdB1cZYJ9TwBkkCOk0c8+wwSnsarPAFaYbf6j4bZeQH0mv1fAFT767Y4TgHZa0Zx3v0epK03UZHENmmMaJGXjloQnHgA57EHcA79fLOKtBasdGN/9wC5100SO79OHF6UHR+nnV1NdIvjsDKO138UObXUAsgDN63Jzg+gGy6+idhu6uhFYYnIFrBvvQr3hkswnddB5GT+scYhXp4gnnkA7/JF7HePwQ+nkVqawSLrEQ3vhmt34169hOmeBU1ywR7i+kXYWhuEAv4UJjeDaZ9CxIexMCQO3DUFZWXDeVGQNvk1++8EPtRsduI/dBG/ai/muhG8a/uSythWh4kr3eBHqV9U5xBO4exfRnINsH5ivCzXsYGLFS/pdEqhqqaT/Jc8VH2ZeNaeW/52dGUSxxleVwdpuJ2PLNaEYu//ko0fOYI9NUecz2H3D2KG2nD2lZCShoGm90ADCmo+1g/BCxBXwaiP6OeagrP9Yu3NZ2HYCkNDdCs4Gq5NgM+sTGKc4aRAbPWh8wro1J/ZBIA2VPtWOtzQfK/KaAJqvm4CacJZ916PbVHKKpBtlNMENLY8ieMOXxB10KqCTnzbrlPCasP9FlAtStn0uUJU1aiCMjgdr4HCKEz/APyF1NRXwywbmo62UNmzLSF2vuugVUDHv74GaFUNrY3OVHRGNTXhZQ3ufQtc/Im0gxtW4cgdMPf/WsKrRU2t4DQEj1dSD1qtpM9jHbQK6NhXUkAbw2pTKG1UlL7PQCYlgE7VjMIVd0O+ZRrMr8KP3w+NZ7cwaoUla+Z9IgN0IdRBq4Ce/VILoDN4zkZYCZimcrKwsgZGvwiD14EOdzQ37cU/+Ddw9MtwUWm9UW/MbCdbAZ3nOmgV0NgfZibdCkcb3wph4/umcrQSzvzFfTV2+D8hvcPpbEhzDEmHbJ/9GXzrnfDKbhjIbx1uCmtcPchN03zyOI910CqgZw62eNBWYZQpZZ0HpX0xHU1cBSSvx3b/DjK4J50WcnPJPsm4z4mn4FvvgL4cvLInO2ZDZtNzna5egHXQ05/dwqS3ylqZihKvyuC01jX0QvdtMHw5dPalYaYd0eUF+MUDyN98DPIGbhjYomDMYDUBXVB10NFPZh7UElKtBeCmtL5BOa21jjsML/sT6N6bTBjS0IH5Kbj/L+HBv4CcAurfnPabReRUZRL3QquDfnHb1nVQopQN0JJRw5awaoWjXmS64Jq/hGJfOii2XMZOjyN//2mYOgpFB67vB/HS7KXdE91Pj41imKmlgC6oLPbzD29O86tZSgvApnlnfaqN/alWYC/9HIy8MR1+1bn8+Uns0QeRf/xvqeXt6oWrL8tSe+aCumihOgf1MsxHGxR0IdRBRz641tXYaMSrfSzNVplPbOxfNbPY7nfCJR9K96tXsQs6azqBfP8LMPPLlIbCGelLVZiMY+tIrElfK6CJqQtQQYffe4YslinH7YP+t0L366A+Bb/8I2jMrYUaLuz9AOx9VxomjSoszmHnJuFn/xt57DspnFIefv0ANBagoROOOtSbgXKK4HXAxPhaFtMUfz7Hg1bT/JPv3sKkdVRvHwy9C/pvBMnmxfSg+QfgyU8k8+90vwpe8jEo7c1UUMEuziHlaeyzjyCHvpaOGur2a3uhU4dFLHidYArp4Ji/ArXZtKNcLW5Q0IVQBz3xjs0mTSe29wvIwF4otKVLUFq3p78Hu18Bxd2pErQY1EVUi/PYxVkYP4zceyeov+g22AaXtYPJQ2E4havDIolJZ88rk7CUeVDrvNh5Hw/6l7enHtQcz0l8aBBb+Dj070Y6e9NVHa2Q1Gc0+6gCNJVXltJ6Z7kMJx9HHrw7VYRubS5c1QP5TigMpGGVwAlT9ehDR/N1YnCmnIbYBVUHPf6WDSGm3qBeezvSsQfb2Yfochcvh9Wx6QROmMyGJgukqivY6hLoQoaf/wB5Ukdxs0FrTesKR8e1c73ZkIdOvNVheTw1ZoWsStKVHEH3BVgH/fRNdk09mlmadc7LsfFbkGIHtlhCvHyyjCXxlDBIF1I16ukqjZkx5PG/hfLJtUDs8ODyTmgfBK8rq3UUjpr4cR3RX4OzOhs7cgFmscfekHlQlnZb6hpdDUP4enDyoKs+dPJP5aXZSn/1maMw9iPk9OH1HrW7A/YWoDgEbnua+pPZVPWp4xDofJj6T/ZIZxS1ULoA66BHX2+TEcEzDZWu5OCXo9hcZ7pWUKeKawvI1JFk+njd1u7Cpf3QFkNhEByFo0y1zlmExRMQNVLlaDFZ0NDrSI1eM1mjdGEpyGo6eeS18bZF4HQDfroE9fULExI4ul6xtwjDHvTmUyCFIXDa1uDUyrB8Ml3zqKpJzHsETMu4kf5tbqEF0DnUQcjt8tkff2X9r7T9u22Xv+gC21Uj/clr4zSzZCpPxo7VhzQVt/S7QgszDVjMfErBlBzo09WouqJ1NvUVPT6vvfmuVBnajVg+lU4pq3cZD0pD62srG6XetNyS5s9lPAi5nc8+/NXmutW1Rp0d0lkBpXB0s3Dw88KbfhCdda7qTHNaTXj5wbThWvxVZiDIIKn3KCCtbxKv8cHRZcV650HLJYaa0U5mU0uZB22qg3TxQqa8dW1vAkqk3PKrP0dAm+AcPix8fDzcNLG33fzVuoGyHBRGoD4HuT6ozqZ+kygmCyl9neuCXPf6K9caaGUcVEFJ80amcN2hdXWQ6xAcfRoqAW77LkQTRnOz8nHCm77KwTuSuiJBtBoaZ4Z0RgUlnqObKkfhjPUY7nzSTwFl4bRxpqH5ft1zS0h6PalCtM5RBRX0NoJpqE6vASr0pdmsWR/pNWgNVGkuMbRQ6IFaaQrPGWqd1QiPHyeaa94LIjjFftzSQNrJjfkE//TmP+VGYu64Q2/NOicVnRugQxhmMHz7/x7DxiOb5q2avrROTVt4lZqxad46kIeVCVAg6kf1BdCOqHHX/64KTz0rdfk0m7UNweziNJ4z2BwPCqcmiaanN0lBHA+3bQTj9HyUfzjwTS4ux1x5peXgQVVAVqU+XwV9d8JhMW/4+s/eTTH6JrF1V8eXN435bDVb2jR1C7qGsDoPuope0/fSSSgOrg1l6PkS8ccpQL95b4ca/UDmS8Ds0gyeGVAFRYtlwsnTZ2ylDrfl6ruu5753P8HAoZgbb4w11LTW3y6PnZuCvjvhnJoqu6NvPjAaXvbEqDsyd23sxkPGifuRuA8n7sNY7R/0YW0PFrNphnQ1LB0oDsDisVQ96j1a8+R70jpHN61/tHuhz8mJJE31hRZfygDF1QrB6fEt25nMooXumFkYuMv7l7feQyWcZbQvSsLsVw2Ijl0Or2QX8xWhHjl+PXBzoRiiwASRLo+PhTgWxHe8/ZXuqK/a53QEvXEp7DW5MIFonbBPxO8hX+rFy/Wy9GwvpWEn6a8tHc+iyGkBkw2SdYyCp76UbZrmy/5sHDX6g8mJtPpOLTci8p4Wv/S4Wep8nJP7f2onds/S0RaFXd5scSKYfmEAqUnPXOnVrreDMhsKfsNIJK40ag6hmJzril8L9G+GOJJVWApNN826+rr5nIaQEEcmHp3tzg/neuPOSi/2VK8phr2x4/eJa3slTw9dwz0UCr0YnQrBTUJueQJb7Z33Z0+3majwFPXSE7Lc+wQTlz/JUncFEUscRdaRyLNxSLE9qnV0zBVPyPSvMMSyAkR/nc9rJsPl2oFejh0DUzJUQgdTN/hiMGIaAYYoknzoGz92tfFCGBisK1oD+3Ek0gSmSmvEKUjd/PS1p/1TfVamgV373FqRIBb2+Z1x1+led9CMEPXVzInRo2HDhMRunEIhdo0bB2FkKerSWomsNRH5gs31ds5y5PhsYtL33KP7P78sliq2WaUdFD4w4nCg0MnsnGV5yRD6DkFOanHgFMNAiDypm7opRJ4QhULkigIjxOBG4oe+SUIwdtJQjKMEnALE9/FtLKKfNRRQkIBKwGUAE2jWEYKAeM9At1Mq+YEQeiayNtR7HIzFsbHnEAfGWM+ayHeJczExnUVLpzfHxKWzXPmUPVf/yfLm2X18tatx8JDDdeMlnhi3FItCtSosWEOhITRywkrSfQezYhQcOV8IQ6nVk8SOqqwehbIGMJJEdao0N1VcPvHkSPxanMGLEkB+PXuvrxuxmP2Dfb7nrthIARlLPrY4jiU0FuNanMjmvFzcQAvQyOY7Oljp98rt/vxcS6G4bQY7J0BNfPaeexy6ugocPhzT1pZc+EwYmoGVFUmA6abQ6nkhXxcaGbi8nwIM/ORRlaopUYK6mFoYSFHVFoZSz3lSiCKpR66IhirQiMIEWkPh6fmz1/7le4aIC7M5L7lFBuu6Oj0CoWfzjmsb1LO/AY5nC4W8KfSVFrjlXQtpo7dP7812b9tZXQVkreHOOz3y+ZjTPULvpHDJJVCcEmbKQrlNKC4JyxWBASisCJWqUC0K+bxQV2h5oVGX5bwvHU1oCVhMojigVq+ZYqi3EEKtUTdFDd1cJM3behu+mMbL9g7EsZ2K7UCyot16ka0HvhS80FqvO33dFVoJXBHXEQYGxBSqy92//bbFncDZmYIU0KFDhpmZVJoDA8LRo8I1wFiP0D4pcAlMTQlt5RS8Qlt6WuAAlJYFVVt/P+QrGbx8up8qrt4Q6jn1o1R9+UDv5SR5HwRC4CVKo6vTW+gd6S47xcmcOxhOl+bNcKFoK/WatLcPI3VHqq4j7a6Ren7BmDA0pc5BU4bFl/ybVy2e3VA2f7ozBa0OEzarN+A730l+oeQfoHi0QxgbE668Eo4fl0Rdx3Q8p00oK7RdUCzLzPKyDAwAy6qyLDzzqrZMaXpPjIaqqi4xoZzQ8IW8L/XR0WLYPlxazBWm53ODsdPrSJdjpNaoGXEc6XA6pOYa02aMGKdh6kHD9BR6qOULC32X9rXccn1uqHYCSMdR06X0W/ZhHhVUTk89JVxxBTzzTGq+urmnhamcKB9mPGF+XtB738qe4C6l+yx7qcK0WK54aRJI4mxaqKchR1w09X17SqZUKM4U9kzbdmu7jEilW/+PmFrNiIhg0CexBRuHC2FYcAtB977uiiT3cO5s2wkg/acPmsN622eA06eFkZE05IaGYGZGkHmBPjALwoIR9I7xRfUtR1DVrDgpJL15ueKkkLSArtWEmiM4DWkM7e/AGNMYeemMdCIsK4wVaW9vD8fGynFbmx8ODQ0piFBEspnInUFp3XsngLQUUa/cHs6Zryf7vnmhLCmgBRGWloSuLlheFmRFkn++w6hPqeF3gFQlgUQbdHSU6O5eOF3taoyMoINDCmKL8d3nDqX1yP8Pn2bHDGLRGnIAAAAASUVORK5CYII="
          alt
        />
        <h4 @mouseenter="enter(1)" @mouseleave="leave()">话费兑换</h4>
      </div>
    </div>

    <div class="a-l">
      <div class="two" v-if="currentIndex === -1">
        <button
          v-for="(rightSidePriceEvery,index) in rightSidePrice.contents"
          :key="rightSidePrice.position"
        >{{rightSidePriceEvery.labelName}}</button>

        <input type="text" placeholder="默认显示" />
        <span>使用0积分</span>
        <button>立即兑换</button>
      </div>
    </div>
    <div class="a-2">
      <div class="two asdfg" v-if="currentIndex === 1">
        <button
          v-for="(rightSidePriceEvery,index) in rightSidePrice.contents"
          :key="rightSidePrice.position"
        >{{rightSidePriceEvery.labelName}}</button>

        <input type="text" placeholder="默认显示" />
        <span>使用0积分</span>
        <button>立即兑换</button>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  data() {
    return {
      currentIndex: -1,
    }
  },
  name: 'RightSide',
  props: ['rightSideTitle', 'rightSidePrice', 'small'],
  mounted() {
    new Swiper(this.$refs.a, {
      slidesPerView: 2, //显示几个
      slidesPerGroup: 1, //一次走几个
      // height: 100,
      direction: 'vertical',
      loop: true,
      autoplay: true,
      speed: 2000,
    })
  },
  methods: {
    enter(index) {
      this.currentIndex = index
    },
    leave(index) {
      this.currentIndex === -1
    },
  },
}
</script>

<style lang="less" scoped>
.rightSide {
  width: 200px;
  height: 556px;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
}
.rightSide .f {
  width: 200px;
  height: 106px;
  position: relative;
}
.rightSide .f img {
  width: 41px;
  height: 41px;
  float: left;
  position: absolute;
  left: 10px;
  top: 10px;
}
.rightSide .f p {
  top: 20px;
  color: #030303;
  width: 120px;
  height: 35px;
  position: absolute;
  left: 65px;
  text-indent: 28px;
}
.rightSide .f p.zg {
  top: 34px;
  text-indent: 0;
}
.rightSide .f button {
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 15px;
  width: 100px;
  height: 26px;
  background-color: #e3007c;
  border: none;
  border-radius: 4px;
  color: white;
}
.rightSide .s {
  width: 200px;
  height: 90px;
  margin-left: -15px;
  box-sizing: border-box;
  font-size: 14px;
}
.rightSide .s p {
  margin: 0 23px 0;
}
.rightSide .s .top {
  width: 190px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  width: 200px;
}

.rightSide .t {
  width: 200px;
  height: 140px;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  margin: 10px 0;
}

.rightSide .t a {
  display: block;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.rightSide .t a img {
  width: 28px;
  height: 28px;
}
.rightSide .t div:hover {
  color: #e3007c;
}
.rightSide .t p {
  color: #666;
  font-weight: 300;
  text-align: center;
  width: 66px;
  height: 17px;
}
.rightSide .one div {
  text-align: center;
  width: 100px;
  height: 56px;
}
.rightSide .one div img {
  width: 36px;
  height: 31px;
}

.rightSide .one {
  display: flex;
  width: 200px;
  height: 66px;
}

.rightSide .two {
  width: 200px;
  height: 151px;
  position: relative;
}
.rightSide .two button {
  margin: 0 5px 2px 4px;
  width: 40px;
  height: 20px;
  border: 1px solid orange;
  border-radius: 3px;
  background-color: white;
  color: orange;
}
.rightSide .two input {
  width: 92%;
  height: 25px;
  text-indent: 8px;
  outline: none;
  display: block;
  margin: 10px 6px;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
}
.rightSide .two span {
  display: block;
  margin: 10px 6px;
}
.rightSide .two button:last-of-type {
  width: 165px;
  height: 24px;
  background: linear-gradient(128deg, #ffa324 13%, #fe6f00 96%);
  color: white;
  border-radius: 35px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 2px 2px orangered;
}
.swiper-container {
  height: 80px;
  overflow: hidden;
}

.swiper-container .swiper-slide {
  height: 40px;
  line-height: 40px;
}
.swiper-container .swiper-slide p {
  width: 170px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.a-1 {
  position: absolute;
  left: 0;
}
.ts .a-1 .two {
  width: 200px;
}
.rightSide .asdfg button {
  background: linear-gradient(128deg, #bfa 13%, #fe6f00 96%);
}
.over {
  overflow: hidden;
}
</style>