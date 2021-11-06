<template>
  <div class="loader-container">
    <div class="half">
      <div class="custom-loader top-right top-right-an"></div>
      <div class="custom-loader top-left"></div>
    </div>
    <div class="half">
      <div class="custom-loader bottom-left"></div>
      <div class="custom-loader bottom-right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loader',
};
</script>

<style scoped>
.loader-container{
  flex: 1;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  display: flex;
}

.custom-loader{
  height: 20px;
  width: 20px;
  background: #1a1a1a;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

.top-right{
  border-radius: 50px 0 0 0;
  animation-name: top-right-an;
}

.top-left{
  border-radius: 0 50px 0 0;
  animation-name: top-left-an;
}

.bottom-right{
  border-radius: 0 0 50px 0;
  animation-name: bottom-right-an;
}

.bottom-left{
  border-radius: 0 0 0 50px;
  animation-name: bottom-left-an;
}

.half{
  display: flex;
}

@keyframes top-right-an {
  0% {transform: scaleX(1); transform-origin: right;}
  12.5% {transform: scaleX(0); transform-origin: right;}
  25% {transform: scaleX(0) scaleY(0); transform-origin: right;}
  37.5% {transform: scaleX(1) scaleY(0); transform-origin: bottom;}
  50% {transform: scaleX(1) scaleY(1); transform-origin: bottom;}
}
@keyframes top-left-an {
  0% {transform: scaleY(1); transform-origin: bottom;}
  12.5% {transform: scaleY(1); transform-origin: bottom;}
  25% {transform: scaleY(0); transform-origin: bottom;}
  37.5% {transform: scaleY(0) scaleX(0); transform-origin: bottom;}
  50% {transform: scaleY(1) scaleX(0); transform-origin: left;}
  62.5% {transform: scaleX(1) scaleY(1); transform-origin: left;}
}

@keyframes bottom-right-an {
  0% {transform: scaleX(1); transform-origin: left;}
  12.5% {transform: scaleX(1); transform-origin: left;}
  25% {transform: scaleX(1); transform-origin: left;}
  37.5% {transform: scaleX(0); transform-origin: left;}
  50% {transform: scaleX(0) scaleY(0); transform-origin: top;}
  62.5% {transform: scaleX(1) scaleY(0); transform-origin: top;}
  75% {transform: scaleX(1) scaleY(1); transform-origin: top;}
}

@keyframes bottom-left-an {
  0% {transform: scaleY(1) scaleX(1); transform-origin: right;}
  12.5% {transform: scaleX(1) scaleY(1); transform-origin: right;}
  25% {transform: scaleY(1); transform-origin: top;}
  37.5% {transform: scaleY(1); transform-origin: top;}
  50% {transform: scaleY(0); transform-origin: top;}
  62.5% {transform: scaleY(0) scaleX(0); transform-origin: right;}
  75% {transform: scaleY(1) scaleX(0); transform-origin: right;}
  87.5% {transform: scaleY(1) scaleX(1); transform-origin: right;}
  100% {transform: scaleY(1) scaleX(1); transform-origin: right;}
}
</style>
