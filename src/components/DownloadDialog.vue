<template>
  <!-- 遮罩层 -->
  <div class="dialog-overlay" :class="{ show: showOne || showTwo }" @click="closeAll"></div>

  <!-- 第一个弹窗：安全验证 -->
  <div class="white_content_one" :class="{ show: showOne }">
    <span style="margin-top: 40px; margin-left: 40%; font-size: 25px;">安全验证</span>
    <br /><br /><br />
    <img
      :src="captchaUrl"
      alt="图片加载不出来"
      style="margin-left: 30%; cursor: pointer;"
      @click="refreshCaptcha"
    />
    <br /><br /><br />
    <input
      type="text"
      class="form-control"
      v-model="code"
      placeholder="请输入验证码"
      style="width: 200px; margin-left: 25%;"
    />
    <br />
    <span class="code-error" style="margin-left: 40%;">{{ errorMsg }}</span>
    <br /><br />
    <button class="btn btn-primary" style="margin-left: 35%;" @click="closeOne">关闭</button>
    &nbsp;&nbsp;&nbsp;
    <button class="btn btn-primary" @click="handleDownload">下载</button>
  </div>

  <!-- 第二个弹窗：下载地址 -->
  <div class="white_content_two" :class="{ show: showTwo }">
    <span style="margin-top: 50px; margin-left: 40%; font-size: 25px;">下载地址</span>
    <br /><br /><br />
    <span>百度网盘：</span>
    <a :href="downloadUrl" target="_blank">{{ displayName }}</a>
    <br /><br />
    <span>密码:</span>
    <b>{{ downloadPass }}</b>
    <br /><br />
    <button class="btn btn-primary" style="margin-left: 45%;" @click="closeTwo">关闭</button>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { CAPTCHA_IMG } from '../data/vulns'

const props = defineProps({
  visible: { type: Boolean, default: false },
  fileName: { type: String, default: '' }
})

const emit = defineEmits(['close'])

const showOne = ref(false)
const showTwo = ref(false)
const code = ref('')
const errorMsg = ref('')
const captchaUrl = ref(CAPTCHA_IMG)
const downloadUrl = ref('https://pan.baidu.com/s/1ac4ldaYBiMLiMs7iVqGbRA?pwd=s3wd')
const downloadPass = ref('s3wd')
const displayName = computed(() => props.fileName || '百度网盘下载')

watch(() => props.visible, (val) => {
  if (val) {
    showOne.value = true
    showTwo.value = false
    code.value = ''
    errorMsg.value = ''
  } else {
    showOne.value = false
    showTwo.value = false
  }
})

function refreshCaptcha() {
  captchaUrl.value = `${CAPTCHA_IMG}?t=${Date.now()}`
}

function closeOne() {
  showOne.value = false
  emit('close')
}

function closeTwo() {
  showTwo.value = false
  emit('close')
}

function closeAll() {
  showOne.value = false
  showTwo.value = false
  emit('close')
}

function handleDownload() {
  if (!code.value.trim()) {
    errorMsg.value = '请输入验证码'
    return
  }
  // 模拟验证码验证 - 任何输入都视为成功（演示模式）
  // 原站逻辑：验证成功(status=false)后显示下载地址
  errorMsg.value = ''
  showOne.value = false
  downloadUrl.value = 'https://pan.baidu.com/s/1ac4ldaYBiMLiMs7iVqGbRA?pwd=s3wd'
  downloadPass.value = 's3wd'
  showTwo.value = true
}
</script>
