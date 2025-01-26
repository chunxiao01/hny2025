<script setup>
import { ref, onMounted } from "vue"
import musicUrl from "@/assets/music/2025.mp3"

const musicstatus = ref(false)
const musicplayer = ref(null)

onMounted(() => {
  musicplayer.value.src = musicUrl
})

function playMusic() {
  if (!musicstatus.value) {
    musicplayer.value.volume = 0.7
    musicplayer.value.play()
    musicstatus.value = true
  } else {
    musicplayer.value.pause()
    musicstatus.value = false
  }
}

</script>

<template>
    <div class='main'>
      <!-- <div class="word">
        <div class="word1">
          <span>新</span>
          <span>年</span>
          <span>快</span>
          <span>乐</span>
        </div>
        <div class="word2">
          <span>巳</span>
          <span>巳</span>
          <span>如</span>
          <span>意</span>
        </div>
      </div> -->
    </div>
    <div
      class="music"
      :class="{ 'music-active': musicstatus }"
      @click="playMusic"
    >
      <audio ref="musicplayer" volume="0.3" loop></audio>
    </div>
</template>

<style scoped>
.main {
    width: 100%;
    height: 100%;
    background: url('@/assets/img/bg12.webp');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
}
.music {
  position: fixed;
  z-index: 1;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  top: 16px;
  right: 16px;
  text-align: center;
  background-image: url("data:image/svg+xml;charset=utf-8;base64,PHN2ZyBzdHlsZT0id2lkdGg6IDFlbTtoZWlnaHQ6IDFlbTt2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO2ZpbGw6IGN1cnJlbnRDb2xvcjtvdmVyZmxvdzogaGlkZGVuOyIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgPGNpcmNsZSBjeD0iNTAlIiBjeT0iNTAlIiByPSI1MCUiIGZpbGw9IiNlOWI0NzQiIC8+CiAgICA8cGF0aCBkPSJNNTU2Ljk4NzczMyA2NTcuNDA4bC03Ni40MjQ1MzMtMjg1LjIxODEzMy00OS42Mjk4NjctMTg1LjI0MTZhNDQuODE3MDY3IDQ0LjgxNzA2NyAwIDAgMSAxOC41Njg1MzQtNDguOTQ3Mkw2MzIuMTE1MiAxNy4wNjY2NjdhMjIuMzkxNDY3IDIyLjM5MTQ2NyAwIDAgMSAzNC4wMzA5MzMgMTIuODY4MjY2bDQxLjU3NDQgMTU1LjIwNDI2N2E0NC44MTcwNjcgNDQuODE3MDY3IDAgMCAxLTE4LjUzNDQgNDguOTQ3MmwtMTMwLjExNjI2NiA4Ni4xMTg0IDEyMy42OTkyIDQ2MS42NTMzMzMtMS45NDU2IDAuNTEyYzYuMjEyMjY3IDc3LjAzODkzMy01OS41Mjg1MzMgMTU1LjEzNi0xNTcuMjg2NCAxODEuMzE2MjY3LTEwNy4xNDQ1MzMgMjguNzA2MTMzLTIxMi4xNzI4LTE1LjgzNzg2Ny0yMzQuNTk4NC05OS40OTg2NjctMjIuNDI1Ni04My42MjY2NjcgNDYuMjg0OC0xNzQuNzYyNjY3IDE1My40MjkzMzMtMjAzLjQzNDY2NiAzOS45MDE4NjctMTAuNzE3ODY3IDc5LjQ5NjUzMy0xMS4yNjQgMTE0LjYxOTczMy0zLjQxMzMzNHoiIGZpbGw9IiNiMzBlMGEiPjwvcGF0aD4KPC9zdmc+Cg==");
  background-position: center;
  background-size: 100% 100%;
}

.music.music-active {
  -webkit-animation: rotataZ 1.2s linear infinite;
  animation: rotataZ 1.2s linear infinite;
}
@-webkit-keyframes rotataZ {
  0% {
    -webkit-transform: rotateZ(0deg);
  }
  100% {
    -webkit-transform: rotateZ(360deg);
  }
}
@keyframes rotataZ {
  0% {
    -webkit-transform: rotateZ(0deg);
  }
  100% {
    -webkit-transform: rotateZ(360deg);
  }
}
.word {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.word1 span {
  color: #f6f6f6;
  font-size: 50px;
}

.word1 span:nth-child(1) {
  color: #f6f6f6;
}
.word1 span:nth-child(2) {
  color: #f3e9e2;
}
.word1 span:nth-child(3) {
  color: #efddcf;
}
.word1 span:nth-child(4) {
  color: #ecd0bb;
}

.word2 span {
  color: #e9c4a7;
  font-size: 50px;
}

.word2 span:nth-child(1) {
  color: #e9c4a7;
}
.word2 span:nth-child(2) {
  color: #e6b793;
}
.word2 span:nth-child(3) {
  color: #e2ab80;
}
.word2 span:nth-child(4) {
  color: #df9e6c;
}
</style>
