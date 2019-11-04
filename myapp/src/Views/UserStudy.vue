<template>
    <div id="accident" class="px-10">

        <v-row>

            <v-col lg="5">
                <div class="wrapper">
                    <form id="addTextForm" @change="setImg($event)">

                        <v-file-input prepend-icon="mdi-camera" label="File input" name="image" id="1"></v-file-input>
                    </form>
                </div>
                <div id="img-wrapper"></div>
            </v-col>
            <v-col lg="2">

            </v-col>
            <v-col>
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
            </v-col>

        </v-row>

    </div>
</template>


<script>
    /** 
     * 从 file 域获取 本地图片 url 
     */
    function getFileUrl(obj) {
        let url;
        url = window.URL.createObjectURL(obj.files.item(0));
        return url;
    }


    import $ from "jquery"
    import VueDragResize from 'vue-drag-resize'

    export default {
        name: 'accident',
        components: {
            VueDragResize
        },
        data() {
            return {
                width: "600px"
            }
        }, //定义事件
        methods: {
            setImg(e) {
                let target = e.target;
                $('#img_' + target.id).attr('src', getFileUrl(e.srcElement));
            },
        },
        //页面加载后执行
        mounted() {

            //生成input框，默认为1
            let my_img = $('<img src="">');
            my_img.attr('id', 'img_1');
            my_img.css({
                "max-width": "100%",
                "max-height": "100%"
            }); //添加样式，由于vue的执行机制，页面加载的时候img标签还没有生成，直接写在style样式会不生效
            $('#img-wrapper').append(my_img);

        },
    }
</script>