<template>
  <v-container class="my-3">
    <v-expansion-panels>
      <v-expansion-panel v-for="project in myProjects" :key="project.title">
        <v-expansion-panel-header>{{project.title}}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-card>
            <v-card-text>
              <div class="font-weight-bold">due by {{project.due}}</div>
              <div>{{project.content}}</div>
            </v-card-text>
          </v-card>

        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>


<script>
  export default {
    data() {
      return {
        projects: [{
            title: 'Design a new website',
            person: 'The Net Ninja',
            due: '1st Jan 2019',
            status: 'ongoing',
            color: 'orange',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
          },
          {
            title: 'Code up the homepage',
            person: 'Chun Li',
            due: '10th Jan 2019',
            status: 'complete',
            color: '#3CD1C2',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
          },
          {
            title: 'Read a book',
            person: 'The Net Ninja',
            due: '1st Jan 2019',
            status: 'ongoing',
            color: 'orange',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
          },
          {
            title: 'Do homework',
            person: 'The Net Ninja',
            due: '1st Jan 2019',
            status: 'ongoing',
            color: 'orange',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
          },
          {
            title: 'Design video thumbnails',
            person: 'Ryu',
            due: '20th Dec 2018',
            status: 'complete',
            color: '#3CD1C2',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
          },
          {
            title: 'Create a community forum',
            person: 'Gouken',
            due: '20th Oct 2018',
            status: 'overdue',
            color: 'red',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
          },
        ]
      }
    },
    computed:{
      myProjects(){
        return this.projects.filter(project => {
          return project.person === 'The Net Ninja'
        })
      }
    }
  }
</script>