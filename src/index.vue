<template>
    <div>
        <button @click="handleClick">{{ name }}</button>
        <Button v-bind="{name: 'test'}" />
    </div>
</template>
<script>
import Button from './Button.vue'
const obj = {
    name: 'test',
    components: {
        Button
    },
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