<template>
    <div>
        <button @click="handleClick">{{ name }}</button>
    </div>
</template>
<script>
const obj = {
    name: 'test',
    data () {
        return {
            name: 'ming'
        }
    },
    methods: {
        handleClick () {
            console.log('button click')
        }
    }
}
</script>