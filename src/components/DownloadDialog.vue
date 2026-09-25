<template>
  <!-- 遮罩层 -->
  <div class="dialog-overlay" :class="{ show: showTwo }" @click="closeAll"></div>

  <!-- 下载地址弹窗 -->
  <div class="white_content_two" :class="{ show: showTwo }">
    <span style="margin-top: 50px; margin-left: 40%; font-size: 25px;">下载地址</span>
    <br /><br /><br />
    <span>百度网盘：</span>
    <a :href="downloadUrl" target="_blank">{{ displayName }}</a>
    <br /><br />
    <button class="btn btn-primary" style="margin-left: 45%;" @click="closeTwo">关闭</button>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  visible: { type: Boolean, default: false },
  fileName: { type: String, default: '' }
})

const emit = defineEmits(['close'])

const showTwo = ref(false)
const downloadUrl = ref('https://pan.baidu.com/s/1ac4ldaYBiMLiMs7iVqGbRA?pwd=s3wd')
const displayName = computed(() => props.fileName || '百度网盘下载')

watch(() => props.visible, (val) => {
  if (val) {
    showTwo.value = true
  } else {
    showTwo.value = false
  }
})

function closeTwo() {
  showTwo.value = false
  emit('close')
}

function closeAll() {
  showTwo.value = false
  emit('close')
}
</script>
