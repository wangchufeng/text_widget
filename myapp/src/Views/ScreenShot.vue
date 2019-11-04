<template>
    <div>

            <vueCropper
            ref="cropper"
            :img="option.img"
            :outputSize="option.size"
            :outputType="option.outputType"
          ></vueCropper>
    </div>
</template>

<script>
    import {
        VueCropper
    } from 'vue-cropper'
    export default {
        components: {
            VueCropper,
        },
        data() {
            return {

            }
        }
    }
</script>