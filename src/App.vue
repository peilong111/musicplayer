<template>
  <div id="app">
    <div class="headerNav">
      <headNav></headNav>
    </div>
    <div class="centerContain">
      <find></find>
    </div>
    <div class="foot"></div>
  </div>
</template>

<script>
import headNav from "./components/headNav";
import find from "./common/find";
import centerNav from "./components/centerNav";

export default {
  name: "App",
  components: {
    headNav: headNav,
    find,
    centerNav
  }
};
</script>

<style>
@import "./assets/css/normalize.css";
#app {
  width: 100%;
}
.headerNav{
  width: 100%;
}
.centerContain{
  width: 80%;
  margin: auto;
}
.foot{
  width: 100%;
}
</style>
