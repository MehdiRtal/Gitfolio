<template>
  <v-row>
    <v-col cols="12" lg="4">
      <v-card class="rounded-xl mb-6 pl-3 pr-3 cards elevation-3">
        <v-container>
          <v-row class="ma-n5 align-center">
            <v-col cols="6">
              <v-card-title class="primary--text">Theme</v-card-title>
              <v-card-subtitle class="secondary--text">Dark</v-card-subtitle>
            </v-col>
            <v-col>
              <v-menu offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn
                    elevation="0"
                    class="rounded-lg primary--text cards pa-5"
                    v-on="on"
                  >
                    <v-icon left>mdi-tune-vertical-variant</v-icon>Change
                    Theme<v-icon right>mdi-chevron-down</v-icon>
                  </v-btn>
                </template>
                <v-list rounded>
                  <v-list-item ripple v-for="theme in themes">
                    <v-list-item-title>{{ theme }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
      <v-card class="rounded-xl mb-6 pl-3 pr-3 pt-5 cards elevation-3">
        <v-card-text>
          <v-avatar
            style="display: block; margin-left: auto; margin-right: auto"
            size="120"
            ><img :src="avatar" />
          </v-avatar>
          <h2 class="mt-7 primary--text text-center">
            {{ name }}
          </h2>
          <p class="mt-3 primary--text text-center text-body-1">
            {{ jobTitle }}
          </p>
        </v-card-text>
      </v-card>
      <v-card class="rounded-xl mb-6 pl-3 pr-3 pt-4 pb-4 cards elevation-3">
        <v-card-text class="primary--text">
          <v-row v-for="info in infos" class="mb-n6">
            <v-col cols="6">
              <p>
                <v-icon left small class="primary--text">{{ info.icon }}</v-icon
                >{{ info.name }}
              </p>
            </v-col>
            <v-col>
              <p style="text-align: end">
                {{ info.value }}
              </p>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
      <v-card
        class="rounded-xl mb-6 pl-3 pr-3 pb-4 cards elevation-3"
        v-if="skills.length != 0"
      >
        <v-card-title class="primary--text">Tech Stack</v-card-title>
        <v-card-text>
          <v-chip v-for="skill in skills" class="accent ma-1">
            {{ skill }}</v-chip
          >
        </v-card-text>
      </v-card>
      <v-card
        class="rounded-xl mb-6 pl-3 pr-3 cards elevation-3"
        v-if="experiences.length != 0"
      >
        <v-card-title class="primary--text">Experience</v-card-title>
        <v-card-text class="secondary--text">
          <Timeline :items="experiences" />
        </v-card-text>
      </v-card>
      <v-card
        class="rounded-xl mb-6 pl-3 pr-3 cards elevation-3"
        v-if="educations.length != 0"
      >
        <v-card-title class="primary--text">Education</v-card-title>
        <v-card-text class="secondary--text">
          <Timeline :items="educations" />
        </v-card-text>
      </v-card>
    </v-col>
    <v-col>
      <v-card
        class="rounded-xl mb-6 pl-3 pr-3 pb-4 cards elevation-3"
        v-if="projects.length != 0"
      >
        <v-card-title class="primary--text">Projects</v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="6" v-for="project in projects.slice(0, limit)">
              <v-card
                class="rounded-xl pl-3 pr-3 mb-1 cards elevation-5"
                hover
                :href="project.url"
              >
                <v-card-title class="primary--text">
                  <v-icon left class="primary--text">mdi-folder-outline</v-icon
                  >{{ project.name }}
                </v-card-title>
                <v-card-text class="primary--text">
                  <p>{{ project.description }}</p>
                  <v-row class="mt-0">
                    <v-col>
                      <span class="mr-3">
                        <v-icon left small class="primary--text"
                          >mdi-star-outline</v-icon
                        >{{ project.starts }}
                      </span>
                      <span>
                        <v-icon left small class="primary--text"
                          >mdi-directions-fork</v-icon
                        >{{ project.forks }}
                      </span>
                    </v-col>
                    <v-col>
                      <p style="text-align: end">
                        <v-icon left small class="primary--text"
                          >mdi-dots-circle</v-icon
                        >{{ project.language }}
                      </p>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
      <v-card class="rounded-xl mb-6 pl-3 pr-3 cards elevation-3" hover>
        <v-card-title class="primary--text">Blog</v-card-title>
        <v-card-text class="secondary--text">
          <v-row v-for="post in posts" class="mb-n7">
            <v-col>
              <v-card
                class="rounded-xl pl-3 pr-3 mb-5 cards elevation-5 pb-2"
                :href="post.url"
              >
                <v-card-title class="primary--text">{{
                  post.title
                }}</v-card-title>

                <v-card-text class="secondary--text mt-n4 mb-n8">
                  <p>{{ post.date }} days ago</p></v-card-text
                >
                <v-card-text class="secondary--text mt-n5"
                  ><p>{{ post.description }}</p>
                  <v-chip v-for="tag in post.tags" class="mt-1 accent mr-1">{{
                    tag
                  }}</v-chip></v-card-text
                >
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";
import gitprofile from "~/gitprofile.config.json";
import Timeline from "../components/timeline.vue";

export default {
  name: "IndexPage",
  data() {
    return {
      name: "",
      jobTitle: "",
      avatar: "",
      limit: gitprofile.github.limit,
      forks: gitprofile.github.exclude.forks,
      infos: {
        based: {
          name: "Based in:",
          value: "",
          icon: "mdi-map-marker",
        },
        github: {
          name: "GitHub:",
          value: gitprofile.github.username,
          icon: "mdi-github",
        },
        twitter: {
          name: "Twitter:",
          value: gitprofile.social.twitter,
          icon: "mdi-twitter",
        },
        linkedin: {
          name: "LinkedIn:",
          value: gitprofile.social.linkedin,
          icon: "mdi-linkedin",
        },
        dev: {
          name: "Dev:",
          value: gitprofile.social.dev,
          icon: "mdi-code-braces",
        },
        phone: {
          name: "Phone:",
          value: gitprofile.social.phone,
          icon: "mdi-phone",
        },
        email: {
          name: "Email:",
          value: gitprofile.social.email,
          icon: "mdi-email",
        },
      },
      posts: [
        {
          title: "Lorem Ipsum is simply dummy text of the printing and type",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          url: "https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png",
          date: "18",
          image:
            "https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png",
          tags: ["Test 1", "Test 2"],
        },
        {
          title: "Lorem Ipsum is simply dummy text of the printing and type",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          url: "https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png",
          date: "19",
          image:
            "https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png",
          tags: ["Test 1"],
        },
        {
          title: "Lorem Ipsum is simply dummy text of the printing and type",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          url: "https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png",
          date: "18",
          image:
            "https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png",
          tags: ["Test 1", "Test 2", "Test 3"],
        },
      ],
      experiences: gitprofile.experiences,
      educations: gitprofile.education,
      skills: gitprofile.skills,
      themes: ["Dark", "Light"],
      projects: [],
    };
  },
  created() {
    axios
      .get("https://api.github.com/users/" + gitprofile.github.username)
      .then((response) => {
        this.avatar = response.data.avatar_url;
        this.name = response.data.name;
        this.jobTitle = response.data.bio;
        this.infos.based.value = response.data.location;
      });
    axios
      .get(
        "https://api.github.com/users/" + gitprofile.github.username + "/repos"
      )
      .then((response) => {
        for (let project of response.data) {
          if (!this.forks) {
            if (project.fork) {
              continue;
            }
          }
          if (gitprofile.github.exclude.projects.includes(project.name)) {
            continue;
          }
          this.projects.push({
            name: project.name,
            description: project.description,
            url: project.html_url,
            stars: project.stargazers_count,
            forks: project.forks_count,
            language: project.language,
          });
        }
      });
  },
  components: { Timeline },
};
</script>
