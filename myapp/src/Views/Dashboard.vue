<template>
  <div class="dashboard">
    <h1 class="grey--text text--darken-1">Dashboard</h1>

    <v-container class="mb-6">
      <v-row class="mb-5">

        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small class="mr-5" color="grey lighten-2" @click="sortBy('title')" v-on="on">
              <v-icon left small>folder</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
          </template>
          <span>Sort projects by project name</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small color="grey lighten-2" @click="sortBy('person')" v-on="on">
              <v-icon left small>person</v-icon>
              <span class="caption text-lowercase">By person name</span>
            </v-btn>
          </template>
          <span>Sort projects by person name</span>
        </v-tooltip>

      </v-row>

      <v-card flat v-for="project in projects" :key="project.title" class="mx-auto">
        <v-row wrap :class="`pa-3 project ${project.status}`">
          <v-col lg="6">
            <div class="caption grey--text">Project title</div>
            <div>{{ project.title }}</div>
          </v-col>
          <v-col lg="2">
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-col>
          <v-col lg="2">
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-col>
          <v-col lg="2">
            <!-- <div class="caption grey--text">Status</div> -->
            <div class="float-right">
              <v-chip small right :class="`${project.status} white--text my-2 caption`" v-bind:color="project.color">
                {{ project.status }}</v-chip>
            </div>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
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
    methods: {
      sortBy(prop) {
        this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
      }
    }
  }
</script>

<style>
  .project.complete {
    border-left: 4px solid #3CD1C2;
  }

  .project.ongoing {
    border-left: 4px solid orange
  }

  .project.overdue {
    border-left: 4px solid tomato;
  }
</style>