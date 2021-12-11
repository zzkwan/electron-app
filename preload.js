/*
 * @Author: 卓智锴
 * @Date: 2021-12-11 17:58:55
 * @LastEditTime: 2021-12-11 17:58:55
 * @LastEditors: Do not edit
 * @FilePath: \my-electron-app\preload.js
 * 衣带渐宽终不悔，bug寻得人憔悴
 */
// 所有Node.js API都可以在预加载过程中使用。
// 它拥有与Chrome扩展一样的沙盒。

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency])
  }
})