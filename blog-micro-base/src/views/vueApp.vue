<template>
  <h1>vueApp</h1>
  <micro-app
    v-bind="vueConfig"
    :data="microAppData"
    @data-change="processChildMsg"
    :data-tap-disabled="true"
  >

  </micro-app>
</template>

<script setup lang='ts'>
import { config } from '@/appConfig';
import { defineComponent,reactive, ref } from 'vue';
// 获取子应用配置
const vueConfig = ref(config['vueApp'])
// 暂时还没使用，预留父子引用传递参数及通信
const microAppData = reactive({})
function processChildMsg(e) {
  console.log(e.detail.data);
  
}
</script>
<script lang='ts'>
export default {
  name:'vueApp',
}

</script>
<style scoped>
  
</style>