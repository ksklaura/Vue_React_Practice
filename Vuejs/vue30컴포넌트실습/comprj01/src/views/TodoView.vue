<style scoped>
body {
  text-align: center;
  background-color: #f6f6f8;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>

<template>
  <div id="app">
    <!-- TodoHeader -->
    <TodoHeader></TodoHeader>

    <!-- TodoInput -->
    <TodoInput v-on:addTodo="addTodo"></TodoInput>

    <!-- TodoList -->
    <TodoList
      v-bind:todoItems="todoItems"
      v-on:doneToggle="doneToggle"
      v-on:removeTodo="removeTodo"
    >
    </TodoList>

    <!-- TodoFooter -->
    <TodoFooter v-on:clearAll="clearAll"></TodoFooter>
  </div>
</template>

<script>
// vuex 라이브러리에서 mapActions, mapMutations, mapState, mapGetters 함를 가져옵니다.
import { mapActions, mapMutations, mapState, mapGetters } from 'vuex';
import TodoHeader from '../components/todo/TodoHeader.vue';
import TodoFooter from '../components/todo/TodoFooter.vue';
import TodoInput from '../components/todo/TodoInput.vue';
import TodoList from '../components/todo/TodoList.vue';
export default {
  /* pdtmc^2w */
  props: [],
  data() {
    /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
    /* data 프로퍼티 값 변경시 this.set(object, key, value) 을 사용 */
    return {
      // todoItems: [
      //   { id: 1, todo: '영화보기', done: false },
      //   { id: 2, todo: '주말 산책', done: true },
      //   { id: 3, todo: 'ES6 학습', done: false },
      //   { id: 4, todo: '잠실 야구장', done: false },
      // ],
    };
  },
  //template: ``,
  methods: {
    /* 이벤트 핸들러 등록 + 일반 함수 */
    clearAll(e) {
      // this.$data.todoItems = [];
      this.dispatchClearAll();
    },
    addTodo(e, newTodoItem) {
      // TodoInput.vue로부터 newTodoItem을 받기 위해 매개변수 newTodoItem 추가
      // debugger;
      // console.log(e.target);
      // console.log(newTodoItem);

      // // newTodoItem 값이 없으면 종료. 빈값 호출 방지
      // if (!newTodoItem) {
      //   return;
      // }

      // // max id 구하기 ==> map과 reduce 를 사용하여
      // // 1. id값만 있는 새로운 배열을 만든다. => map() 메서드 사용
      // // 2. map() 메서드로 만들어진 새로운 배열에서 최대값을 찾는다. => reduce() 메서드 사용
      // // 3. 추가될 새로운 id = max id + 1
      // const ids = this.$data.todoItems.map((item) => item.id);
      // console.log(ids);
      // const maxid = ids.reduce((pvalue, cvalue) => {
      //   if (pvalue > cvalue) return pvalue;
      //   // 최대값 찾기
      //   else return cvalue;
      // }, 0);
      // console.log(maxid);

      // const newid = maxid + 1;

      // // todoItems 추가할 객체 만들기
      // const newTodo = {
      //   id: newid,
      //   todo: newTodoItem,
      //   done: false,
      // };

      // // todoItems 배열에 객체 추가. 복제 후 재할당 방식 사용
      // // this.$data.todoItems.push(newTodo);
      // this.$data.todoItems = [...this.$data.todoItems, newTodo];
      this.dispatchAddTodo(newTodoItem);
    },
    doneToggle(id) {
      // 불변객체
      // ==> 복제 후 재할당 방식으로 처리
      // ==> 대표적인 방식:
      // ==> 1. map, filter, reduce
      // ==> 2. spread 연산자: ...
      // ==> 3. 라이브러리 방식 (immer 라이브러리, immutable 라이브러리)
      // const newTodos = this.$data.todoItems.map((item /*, index, array */) => {
      //   if (item.id === id) {
      //     item.done = !item.done;
      //   }
      //   return item;
      // }); // 복제
      // this.$data.todoItems = newTodos; // 재할당
      this.dispatchDoneToggle(id);
    },
    removeTodo(id) {
      // 불변객체
      // ==> 복제 후 재할당 방식으로 처리
      // ==> 대표적인 방식:
      // ==> 1. map, filter, reduce
      // ==> 2. spread 연산자: ...
      // ==> 3. 라이브러리 방식 (immer 라이브러리, immutable 라이브러리)
      // const newTodos = this.$data.todoItems.filter((item) => {
      //   if (item.id === id) {
      //     return false;
      //   }
      //   return true;
      // }); // 복제
      // this.$data.todoItems = newTodos; // 재할당
      this.dispatchRemoveTodo(id);
    },
    /* vuex 를 사용하는 경우
      mapActions 는 store의 actions 를 가져오는 헬퍼 메서드입니다.
      namespaced: true를 설정한 경우 네임스페이스를 사용하기 때문에 store의 모듈 명을 적어주어야 합니다.
      store 모듈에서 actions 를 가져오는 2가지 방식
      1) store.모듈명.actions 이름 바꾸어 사용하기(추천방식)
         ...mapActions('모듈명', { dispatch액션명1: '액션명1', dispatch액션명2: '액션명2' }),
      2) store.모듈명.actions 이름 그대로 사용하기
         ...mapActions('모듈명', ['액션명1', '액션명2']),
      */
    ...mapActions('todoStore', {
      // 여기 'todoStore'은 index.js의 모듈명과 동일해야 함.
      dispatchClearAll: 'clearAll',
      dispatchDoneToggle: 'doneToggle',
      dispatchRemoveTodo: 'removeTodo',
      dispatchAddTodo: 'addTodo',
      dispatchGetTodo: 'getTodo',
    }),
  },
  components: {
    /* 전역 컴포넌트인 경우는 등록하지 않는다. 전역 컴포넌트는 프로토타입 체인으로 찾을 수 있기 때문에 */
    /* 지역 컴포넌트나 파일 컴포넌트만 등록 한다. 예시) "태그명" : 컴포넌트명 */
    TodoHeader: TodoHeader,
    TodoFooter: TodoFooter,
    TodoInput: TodoInput,
    TodoList: TodoList,
  },
  computed: {
    /* 자동처리 + 동기식. 메서드로 작성. return 필수. data 와 공존 불가 */
    /* vuex 를 사용하는 경우
      mapGetters 는 store의 getters 를 가져옵니다.
      namespaced: true를 설정한 경우 네임스페이스를 사용하기 때문에 store의 모듈 명을 적어주어야 합니다.
      store 모듈에서 getters 를 가져오는 2가지 방식
      1) store.모듈명.getters 이름 바꾸어 사용하기
         ...mapGetters('모듈명', { get게터명1: '게터명1', get게터명2: '게터명2' }),
      2) store.모듈명.getters 이름 그대로 사용하기(추천방식)
         ...mapGetters('모듈명', ['게터명1', '게터명2']),
      */
    ...mapGetters('todoStore', ['todoItems']),
  },
  watch: {
    /* 자동처리 + 비동기식. data 에 등록된 프로퍼티(변수) 모니터링. 메서드로 작성. 매개변수 필수. 외부 api 호출을 위해서 사용 */
  },
  created() {
    console.log('created');
  },
  mounted() {
    console.log('mounted');
    /* store의 actions 호출 */
    // this.$store.dispatch('액션명', payload);
  },
  updated() {
    console.log('updated');
  },
};
</script>
