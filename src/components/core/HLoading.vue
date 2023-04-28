<template>
  <div class="h-loading">
    <div class="h-loading__dots">
      <div>
        <div />
      </div>
      <div>
        <div />
      </div>
      <div>
        <div />
      </div>
      <div>
        <div />
      </div>
      <div>
        <div />
      </div>
      <div>
        <div />
      </div>
      <div>
        <div />
      </div>
      <div>
        <div />
      </div>
    </div>
  </div>
</template>

<style>
@keyframes h-loading__dots {
  0% {
    opacity: 1;
    backface-visibility: hidden;
    transform: translateZ(0) scale(0.26,0.26);
  }
  100% {
    opacity: 0;
    backface-visibility: hidden;
    transform: translateZ(0) scale(1,1);
  }
}
.h-loading__dots div > div {
  position: absolute;
  width: 12.48px;
  height: 12.48px;
  border-radius: 50%;
  background: #4e41ff;
  animation: h-loading__dots 1.6s linear infinite;
}
.h-loading__dots div:nth-child(1) > div {
  left: 59px;
  top: 46px;
  animation-delay: -1.4344262295081966s;
}
.h-loading__dots > div:nth-child(1) {
  transform: rotate(0deg);
  transform-origin: 65.24000000000001px 52.24px;
}
.h-loading__dots div:nth-child(2) > div {
  left: 55px;
  top: 55px;
  animation-delay: -1.2295081967213115s;
}
.h-loading__dots > div:nth-child(2) {
  transform: rotate(45deg);
  transform-origin: 61.24px 61.24px;
}
.h-loading__dots div:nth-child(3) > div {
  left: 46px;
  top: 59px;
  animation-delay: -1.0245901639344261s;
}
.h-loading__dots > div:nth-child(3) {
  transform: rotate(90deg);
  transform-origin: 52.24px 65.24000000000001px;
}
.h-loading__dots div:nth-child(4) > div {
  left: 36px;
  top: 55px;
  animation-delay: -0.819672131147541s;
}
.h-loading__dots > div:nth-child(4) {
  transform: rotate(135deg);
  transform-origin: 42.24px 61.24px;
}
.h-loading__dots div:nth-child(5) > div {
  left: 32px;
  top: 46px;
  animation-delay: -0.6147540983606558s;
}
.h-loading__dots > div:nth-child(5) {
  transform: rotate(180deg);
  transform-origin: 38.24px 52.24px;
}
.h-loading__dots div:nth-child(6) > div {
  left: 36px;
  top: 36px;
  animation-delay: -0.4098360655737705s;
}
.h-loading__dots > div:nth-child(6) {
  transform: rotate(225deg);
  transform-origin: 42.24px 42.24px;
}
.h-loading__dots div:nth-child(7) > div {
  left: 46px;
  top: 32px;
  animation-delay: -0.20491803278688525s;
}
.h-loading__dots > div:nth-child(7) {
  transform: rotate(270deg);
  transform-origin: 52.24px 38.24px;
}
.h-loading__dots div:nth-child(8) > div {
  left: 55px;
  top: 36px;
  animation-delay: 0s;
}
.h-loading__dots > div:nth-child(8) {
  transform: rotate(315deg);
  transform-origin: 61.24px 42.24px;
}
.spinner {
  width: 104px;
  height: 104px;
  display: inline-block;
  overflow: hidden;
  background: none;
}
.h-loading__dots {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0;
}
.h-loading__dots div { box-sizing: content-box; }
</style>
