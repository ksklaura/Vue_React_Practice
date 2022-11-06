<style scoped>
section {
  height: 150px;
  background-color: #95db5e;
  margin: 0 5% 20px 5%;
  margin: 40px 0px;
}

div {
  margin: 40px 20px;
}
</style>

<template>
  <div class="container">
    <header-comp></header-comp>

    <section id="page1" data-role="page">
      <div class="content" data-role="content">컨텐츠</div>
    </section>

    <footer-comp></footer-comp>
  </div>
</template>

<script>
import Header from './HeaderComp.vue'; // headerComp 파일을 헤더로 사용
import Footer from './FooterComp.vue'; // footerComp 파일을 풋터로 사용

export default {
  data() {
    return {
      msg: 'Hello VueJS',
    };
  },
  components: {
    'header-comp': Header,
    'footer-comp': Footer,
  },
};
</script>
