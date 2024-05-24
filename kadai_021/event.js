const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
    setTimeout(() => {
    text.textContent = 'ボタンがクリックしました';
    }, 2000);
});