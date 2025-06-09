
document.addEventListener("DOMContentLoaded",  ()=> {
    const button = document.getElementById("btn");
    const message = document.getElementById("text");
    button.addEventListener("click", ()=> {
        setTimeout(() => {
        message.textContent = "ボタンをクリックしました";
        }, 2000); // 2秒後に実行
    });
});
