<template>
  <footer>
    <div class="footer-row">
      <div class="footer-links">
        <span>友情链接</span>
        <hr />
        <a href="http://www.sec-redclub.com/" target="_blank">红日安全团队</a>
      </div>
      <div class="footer-qr">
        <span>红日安全</span>
        <br /><br />
        <img :src="wweqImg" alt="红日安全" />
      </div>
    </div>
    <div class="footer-copyright">
      Copyright 2019 ©
      <a href="#" target="_blank">VulnStack</a> -
      <a href="#" target="_blank">HongriSec</a>
    </div>
  </footer>
</template>

<script setup>
import { WWEQ_IMG } from '../data/vulns'
const wweqImg = WWEQ_IMG
</script>
