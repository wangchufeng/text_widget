<template>
    <!-- <v-container> -->
    <!-- <div class="wrapper">
            <form id="addTextForm" @change="setImg($event)">
                <v-file-input prepend-icon="mdi-camera" label="File input" name="image" id="1">
                </v-file-input>
            </form>
        </div> -->
    <div id="app">
        <v-row>
            <v-col cols="11" class="ma-3">
                <div id="canvas_container">
                    <div id="colorCover" style="background-color:rgba(255, 0, 0, 0.1);
                        position:absolute">
                    </div>
                    <!-- v-bind:style="{display:'none' ,left: maskLeft + 'px', top:maskTop + 'px', width:width + 'px',height:height + 'px' }" -->
                </div>
            </v-col>
            <v-col>
                <v-btn @click="submit_result" large class="success">submit</v-btn>
            </v-col>
        </v-row>

        <!-- <canvas id="mycanvas" width="1200" height="1200" style="border:1px solid #895;">您的浏览器不支持canvas</canvas> -->
    </div>
    <!-- </v-container> -->
</template>

<script>
    import axios from 'axios'
    import qs from "qs"
    // import JSON from "jquery"
    export default {
        data() {
            return {
                imgWidth: null,
                imgHeight: null,
                imgName: null,
                rect: [],
            }
        },

        methods: {

            submit_result: function () {
                console.log( this.imgHeight)
                var position = []
                let params = new URLSearchParams()
                params.append('img_name', this.imgName)
                params.append("img_width", this.imgWidth)
                params.append("img_height", this.imgHeight)
                for(let i=0;i<this.rect.length;i++){
                    position.push( qs.stringify(this.rect[i]))
                }               
                params.append("position", JSON.stringify(position))
                axios({
                    url: 'http://localhost:5000/record',
                    method: 'post',
                    headers: { //请求头设置为表单提交的请求头
                        'Content-Type': "application/x-www-form-urlencoded",
                        "Access-Control-Allow-Origin": "*",
                        "charset": "UTF-8"
                    },
                    data:params,
                })
            }
        },


        mounted() {
            // 内存中先加载，然后当内存加载完毕时，再把内存中的数据填充到我们的 dom元素中，这样能够快速的去
            // 反应，比如网易的图片
            var img = new Image();
            img.src = "/a.jpg"
            this.imgName = img.src
            this.rect = []
            var _rect = this.rect

            function saveData(positionData, rect = _rect) {
                rect.push(positionData)
            }
            var __this = this
            img.onload = function () {
                var imgW = img.width;
                var imgH = img.height;
                // var windowWidth = window.innerWidth;
                var cW = 900;
                var cH = 900/imgW*imgH;
                var canvas = document.createElement("canvas");
                canvas.setAttribute("id", "mycanvas");
                canvas.setAttribute("width", cW);
                canvas.setAttribute("height", cH);
                canvas.setAttribute("style", "border:1px solid black")
                document.getElementById("canvas_container").appendChild(canvas);

                // var cW = canvas.offsetWidth; // 获取元素宽度;
                var ctx = canvas.getContext('2d');
                ctx.drawImage(this, 0, 0, cW, imgH * cW / imgW);

                __this.imgWidth = cW;
                console.log(this.imgWidth)
                __this.imgHeight = imgH * cW / imgW;

                var img_ctx = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);

                canvas.addEventListener('mousedown', function (e) {
                    this.startX = e.offsetX;
                    this.startY = e.offsetY;
                    // console.log('offsetX:' + e.offsetX + ',offsetY:' + e.offsetY);
                })

                canvas.addEventListener('mouseup', function (e) {
                    ctx.putImageData(img_ctx, 0, 0)
                    // console.log(e.offsetX - this.startX)
                    var width = e.offsetX - this.startX
                    var height = e.offsetY - this.startY
                    ctx.fillRect(this.startX, this.startY, width, height);
                    img_ctx = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
                    saveData({
                        "start_x": this.startX,
                        "start_y": this.startY,
                        "width": width,
                        "height": height,
                    })
                })
            }
            // console.log("outside",this.imgWidth)

        }

    }
</script>