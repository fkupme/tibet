<template>
  <section class="about">
    <div class="container">
      <div class="about-wrapper">
        <div class="about-box">
          <section-title>
            <template #category>о нашем походе</template>
            <template #title
              >Исследуйте все горные массивы мира вместе с нами</template
            >
          </section-title>
          <p class="about__text main-text">
            Его корни уходят в один фрагмент классической латыни 45 года н.э.,
            то есть более двух тысячелетий назад. Ричард МакКлинток, профессор
            латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из
            самых странных слов в Lorem Ipsum, "consectetur" и занялся его
            поисками в классической латинской литературе.
          </p>
          <main-button :align="'right'">Программа тура</main-button>
        </div>
        <div class="about-video">
          <div class="about-video-wrapper">
            <iframe
              class="about-video__player"
              src="https://vkvideo.ru/video_ext.php?oid=-11525744&id=456245405&hd=2"
              frameborder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'about-section',
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/globals.scss';

.about {
  padding-block: $mobile-section-padding;

  &-box {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &-video {
    margin-top: 40px;

    &__player {
      border-radius: 32px;
      width: 100%;
      height: auto;
      aspect-ratio: 35 / 45;
      position: relative;
      z-index: 1;
    }

    &-wrapper {
      position: relative;
    }
  }

  @media (width > 640px) {
    padding-block: $tablet-section-padding;

    &-video__player {
      object-fit: cover;
      width: 70%;
      aspect-ratio: 16 / 9;
    }
  }

  @media (width > 1024px) {
    padding-block: $desktop-section-padding;

    &-wrapper {
      padding: 64px 0;
      display: flex;
      flex-direction: row-reverse;
      gap: 6.25vw;
    }

    &-box {
      width: 50%;
    }

    &-video {
      position: relative;
      margin-top: 0;
      width: calc(50% - 120px);
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;

      &__player {
        position: relative;
        aspect-ratio: 16 / 9;
        border-radius: 32px;
        width: 18.2vw;
        height: 20vw;
        margin-left: auto;
      }

      &-wrapper {
        position: relative;

        &::before {
          position: absolute;
          content: '';
          width: 18.2vw;
          height: 20vw;
          top: -15%;
          left: -33%;
          background-image: url('../assets/images/video-bg.png');
          aspect-ratio: 16 / 9;
          background-repeat: no-repeat;
          background-size: cover;
          border-radius: 32px;
        }
      }
    }
  }
}
</style>
