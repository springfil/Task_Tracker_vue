<template>
    <header>
        <h1> {{title}} </h1>
        <Button text = 'Add Task' color = 'green'/>
    </header>
</template>

<script>
import Button from "./Button";

export default {
    name: 'Header',
    props: {
        title: {
            type: String,
            default: 'Aboba'
        }
    },
    components:{
        Button
    },
   
}
</script>

// scoped говорит что это предназначено только для этого компонента
<style scoped>
    header{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
    }
</style>