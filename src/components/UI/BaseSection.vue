<template>
    <div>
        <slot></slot>
    </div>
</template>

<style scoped>
    div{
        background-color: white;
        width: 60%;
        border-radius: 2vh;
        border: .1vh solid rgba(0,0,0,0.1);
        box-shadow: 0 0 .5vw .1vh rgba(20, 20, 20, 0.123);
        padding: 2.5rem;
        margin: 5vh auto;
    }
</style>