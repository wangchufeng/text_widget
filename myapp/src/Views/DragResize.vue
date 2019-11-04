<template>
        <div style="height: 500px; width: 500px; border: 1px solid red; position: relative;">
                <VueDragResize :w="200" :h="200" v-on:resizing="resize" v-on:dragging="resize">
                    <v-card color="rgba(255, 0, 0, 0.05)" :width="width">
                        <v-card-text>
                            <p>
                                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ratione totam
                                suscipit
                                dicta sequi libero vitae nemo eos ipsum maxime. Nostrum, voluptatum perferendis nisi
                                iste
                                veritatis quos repellat nulla. Laudantium."
                            </p>
                        </v-card-text>
                    </v-card>
                </VueDragResize>
            </div>
</template>

<script>
    import VueDragResize from 'vue-drag-resize'
    export default {
        components: {
            VueDragResize
        },
        data() {
            return {
                vw: 0,
                vh: 0,
                top: 0,
                left: 0
            };
        },
        methods: {
            created() {
                this.vw = 200 + "px";
                this.vh = 200 + "px";
            },

            //缩小
            resize(newRect) {
                this.vw = newRect.width;
                this.vh = newRect.height;
                this.top = newRect.top;
                this.left = newRect.left;
            },
        }

    }
</script>