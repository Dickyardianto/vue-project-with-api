<template>
  <div
    class="hero"
    :style="{
      background:
        ' linear-gradient(rgba(255, 255, 255, 0.08),rgba(255, 255, 255, 0.08),rgba(255, 255, 255, 0.08),rgba(255, 255, 255, 0.733),rgb(255, 255, 255)), url(' +
        image +
        ') ',
    }"
  ></div>
  <div class="title">
    <img src="" alt="" />
    <strong>{{ this.main.title }}</strong>
  </div>
  <div class="main">
    <div class="container-image">
      <div
        class="image-profil"
        :style="{
          backgroundImage: 'url(' + images + ')',
        }"
      ></div>
      <div class="text-profile">
        {{ authors }}
        <br />
        <div style="font-size: 12px">{{ date }}</div>
      </div>
    </div>
    <div class="main-content" v-for="texts in judul" :key="texts">
      <p>{{ texts.text }}</p>
    </div>
    <img :src="image" class="image-content" />
    <div class="link">
      <a :href="link">{{ link }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      main: "",
      parseJson: "",
      image: "",
      imageProfil: [],
      images: "",
      authors: "",
      judul: "",
      content: "",
      link: "",
      date: "",
    };
  },
  mounted() {
    axios
      .get("http://api.mapid.io/blog/get_list_docs_public/blog")
      .then((response) => {
        var i = 0;
        while (i < response.data.length) {
          if (this.$route.params.link == response.data[i].link) {
            console.log(response.data[i]);
          }
          i++;
        }

        this.main = response.data[0];
        this.parseJson = JSON.parse(response.data[0].editorState);
        this.image = this.parseJson.entityMap[0].data.src;
        this.mainContent();
      });
  },
  methods: {
    mainContent() {
      axios
        .get("http://api.mapid.io/blog/get_list_docs_public/blog")
        .then((response) => {
          var i = 0;
          while (i < response.data.length) {
            if (response.data[i]._id == "5ff91b39c79dca38520236df") {
              this.imageProfil.push(response.data[i]);
              this.images =
                this.imageProfil[0].authors[0].user.profile_picture.url;
              this.authors = this.imageProfil[0].authors[0].user.full_name;
              this.content = JSON.parse(response.data[i].editorState);
              this.judul = this.content.blocks;
              this.link = this.content.entityMap[1].data.link_text;
              this.date = this.imageProfil[0].authors[0].join_at;
            }
            i++;
          }
          const d = new Date(this.date);
          const year = d.getFullYear();
          const date = ("0" + d.getDate()).slice(-2);
          const months = {
            0: "Jan",
            1: "Feb",
            2: "Mar",
            3: "Apr",
            4: "Mei",
            5: "Jun",
            6: "Jul",
            7: "Agustus",
            8: "Sept",
            9: "Okt",
            10: "Nov",
            11: "Des",
          };
          const monthIndex = d.getMonth();
          const monthName = months[monthIndex];
          this.date = `${monthName} ${date} ${year}`;
        });
    },
  },
};
</script>

<style>
</style>