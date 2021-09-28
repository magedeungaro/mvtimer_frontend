<template lang="pug">
  img(alt="MVP Trophy", src="/mvp trophy.svg").trophy
</template>

<style lang="scss">
.trophy {
  height: $trophy-dimensions;
  width: $trophy-dimensions;
  transform: rotateY(560deg);
  animation: turn 3.5s ease-out forwards 1s;
  padding-top: $trophy-padding;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
