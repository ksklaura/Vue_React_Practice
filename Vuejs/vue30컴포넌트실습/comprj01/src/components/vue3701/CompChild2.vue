<style scoped>
/* scoped를 넣지 않은 경우 Child2.vue의 CSS가 Child1.vue의 CSS까지 잡아먹어버리는데, scoped를 넣는 순간 각각의 CSS가 각자의 영역에만 입력되고 다른 영역을 침범하지 않음. */
.main {
  border: 1px solid black;
  background-color: aqua;
}
</style>

<template>
  <div class="main">
    {{ msg }}
  </div>
</template>

<script>
// vuex 라이브러리에서 mapActions, mapMutations, mapState, mapGetters 함를 가져옵니다.
// import { mapActions, mapMutations, mapState, mapGetters } from 'vuex';

export default {
  /* pdtmc^2w */
  props: [],
  data() {
    /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
    /* data 프로퍼티 값 변경시 this.set(object, key, value) 을 사용 */
    return {
      msg: 'Child 2',
    };
  },
};
</script>
