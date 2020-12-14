<template>
    <div>
        <div class="animate">Загрузка</div>
    </div>
</template>

<style scoped>
@keyframes load {
    0% {
        opacity: 0.08;
        filter: blur(5px);
        letter-spacing: 3px;
    }
    100% {
    }
}

.animate {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: auto;
    font-family: Helvetica, sans-serif, Arial;
    animation: load 1.2s infinite 0s ease-in-out;
    animation-direction: alternate;
    text-shadow: 0 0 1px white;
    font-size: 26px;
}
body,
html {
    height: 96vh;
    background-color: #111;
    color: black;
}
</style>
