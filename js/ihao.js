window.onkeydown=e=>{123===e.keyCode&&btf.snackbarShow("开发者模式已打开，请遵循GPL协议")},document.body.addEventListener("copy",(e=>{"TEXTAREA"==e.target.tagName&&""==e.target.className||btf.snackbarShow("复制成功~")})),document.body.addEventListener("paste",(e=>{btf.snackbarShow("粘贴成功~")}));