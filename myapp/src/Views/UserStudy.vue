<template>
    <v-container fluid>
        <div id="accident" class="px-10">
            <v-row>
                <v-col lg="12">
                    <v-row style="height: 800px;">
                        <v-col lg="6">
                            <div class="wrapper">
                                <form id="addTextForm" @change="setImg($event)">

                                    <v-file-input prepend-icon="mdi-camera" label="File input" name="image" id="1">
                                    </v-file-input>
                                </form>
                            </div>
                            <div id="img-wrapper" @click="consolePositon($event)"></div>
                        </v-col>

                        <v-col lg="6" class="mt-5">
                            <v-row style="height: 320px;">
                                <v-col lg="4" v-for="n in 3" :key=n>
                                    <div style=" border: 1px red; position: relative;">
                                        <VueDragResize class="DragResize" :w="200" :h="200">
                                            <v-card class="card" color="rgba(255, 0, 0, 0.05)">
                                                <v-card-text>
                                                    <p>
                                                        "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                        Praesentium
                                                        ratione
                                                        totam
                                                        suscipit
                                                        dicta sequi libero vitae nemo eos ipsum maxime. Nostrum,

                                                    </p>
                                                </v-card-text>
                                            </v-card>
                                        </VueDragResize>
                                    </div>
                                </v-col>
                            </v-row>
                            <v-row>
                                
                                <v-col lg="4" v-for="n in 3" :key=n>
                                    <div style=" border: 1px red; position: relative;">
                                        <VueDragResize class="DragResize" :w="200" :h="200">
                                            <v-card class="card" color="rgba(255, 0, 0, 0.05)">
                                                <v-card-text>
                                                    <p>
                                                        "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                        Praesentium
                                                        ratione

                                                        dicta sequi libero vitae nemo eos ipsum maxime. Nostrum,
                                                        voluptatum
                                                        veritatis quos repellat nulla. Laudantium."
                                                    </p>
                                                </v-card-text>
                                            </v-card>
                                        </VueDragResize>
                                    </div>
                                </v-col>
    
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-row justify="end" class="mr-5">
                        <v-btn color="success" @click="consolePositon()">submit</v-btn>
                    </v-row>
                </v-col>
            </v-row>


        </div>
        <div class="align-self-end">

        </div>
    </v-container>
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
                width: "200"
            }
        },
        methods: {
            setImg(e) {
                let target = e.target;
                $('#img_' + target.id).attr('src', getFileUrl(e.srcElement));
            },
            consolePositon() {
                var card = document.getElementsByClassName("card")
                for(var i=0;i<card.length;i++){
                    console.log(card[i].getBoundingClientRect())
                }
            },
        },
        mounted() {
            let my_img = $('<img src="">');
            my_img.attr('id', 'img_1');
            my_img.css({
                "max-width": "100%",
                "max-height": "1200px"
            }); //添加样式，由于vue的执行机制，页面加载的时候img标签还没有生成，直接写在style样式会不生效
            $('#img-wrapper').append(my_img);

            // var dragResize = document.getElementsByClassName("DragResize")
            // for(var i=0;i<dragResize.length;i++){
            //     dragResize[i].width = cardWidth
            // }
            
        },
    }
</script>