<template>
  <div>
    <div class="md-modal modal-msg md-modal-transition" v-bind:class="{'md-show':mdShow}">
      <div class="md-modal-inner">
        <div class="md-top">
          <button class="md-close" @click="closeModel">关闭</button>
        </div>
        <div class="md-content">
          <div class="confirm-tips">
            <!-- 定义插槽，不起名字默认只有一个 -->
            <slot name="message"></slot>
          </div>
          <div class="btn-wrap">
            <!-- 确认、取消插槽 -->
            <slot name="btnGroup"></slot>
          </div>
        </div>
      </div>
    </div>
    <div class="md-overlay"></div>
  </div>
</template>

<script>
export default {
  name: 'model',
  props: ['mdShow'],
  methods:{
    //自组件触发父组件事件
    closeModel() {
      this.$emit('close');
    }
  }
}
</script>

