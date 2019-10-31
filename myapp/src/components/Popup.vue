<template>
    <div>
        <v-btn color="orange lighten-1" dark @click.stop="dialog = true">
            Add new project
        </v-btn>

        <v-dialog v-model="dialog" max-width="600px">
            <v-card>
                <v-card-title class="headline">Add new project</v-card-title>

                <v-card-text>
                    <v-form class="px-3" ref="form">
                        <v-text-field label="Title" v-model="title" prepend-icon="folder" :rules="inputRules">
                        </v-text-field>
                        <v-textarea label="information" v-model="content" prepend-icon="edit"></v-textarea>

                        <v-menu offset-y min-width="auto">
                            <template v-slot:activator="{ on }">
                                <v-text-field :value="due" v-on="on" label="Due date" prepend-icon="date_range">
                                </v-text-field>
                            </template>

                            <v-list-item>
                                <v-date-picker v-model="due"></v-date-picker>
                            </v-list-item>
                        </v-menu>

                        <div class="d-flex justify-end">
                            <v-btn text class=" right green white--text mx-0 mt-3" @click="submit">Add project</v-btn>
                        </div>

                    </v-form>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    import format from 'date-fns/format'

    export default {
        rules: {
            'no-console': 'off'
        },
        data() {
            return {
                dialog: false,
                title: '',
                content: '',
                due: null,
                inputRules: [v => v.length >= 3 || 'Mininum length is 3 characters']
            }
        },
        methods: {
            submit() {
                if (this.$refs.form.validate()) {
                    console.log(this.title, this.content)
                    this.title=""
                    this.content=""
                    this.dialog = false
                }                
            }
        },
        computed: {
            formattedDate() {
                return this.due ? format(this.due, 'Do MMM YYY') : ''
            }
        }
    }
</script>