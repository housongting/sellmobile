<template>
  <div class="home">

  </div>
</template>

<script>
import { storeList } from "../api/api.js";
export default {
  name: "Home",
  created() {
    storeList()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  },
  components: {}
};
</script>
