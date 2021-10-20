<template>
  <div id="sidebar-style" class="sidebar">
    <div class="top_bar">
      <span id="btn-style" class="side_bar_btn"
        ><i class="fas fa-angle-left"></i
      ></span>
    </div>
    <div class="menu">
      <ul>
        <li>
          <div class="center-blog">
            <p class="bgc-blog">BLOG</p>
          </div>
          <div class="section-p">
            <p>Seminar & Workshop</p>
          </div>
          <div
            class="section-seminar"
            v-for="sidebar in sidebarSeminar"
            :key="sidebar"
          >
            <router-link
              :to="{ name: 'Index Blog', params: { link: sidebar.link } }"
              >{{ sidebar.title }}</router-link
            >
          </div>
          <div class="section-p">
            <p>Achievement</p>
          </div>
          <div
            class="section-seminar"
            v-for="sidebarA in sidebarAchievement"
            :key="sidebarA"
          >
            <router-link :to="sidebarA.link">{{ sidebarA.title }}</router-link>
          </div>
          <div class="section-p">
            <p>News</p>
          </div>
          <div
            class="section-seminar"
            v-for="sidebarN in sidebarNews"
            :key="sidebarN"
          >
            <router-link :to="sidebarN.link">{{ sidebarN.title }}</router-link>
          </div>
          <div class="section-p">
            <p>Partnership</p>
          </div>
          <div
            class="section-seminar"
            v-for="sidebarP in sidebarPartner"
            :key="sidebarP"
          >
            <router-link :to="sidebarP.link">{{ sidebarP.title }}</router-link>
          </div>
          <div class="section-p">
            <p>Kompetisi Mapid</p>
          </div>
          <div
            class="section-seminar"
            v-for="sidebarK in sidebarKompetisi"
            :key="sidebarK"
          >
            <router-link :to="sidebarK.link">{{ sidebarK.title }}</router-link>
          </div>

          <div class="section-p">
            <p>Weekly MAPID Blog</p>
          </div>
          <div
            class="section-seminar"
            v-for="sidebarW in sidebarWeekly"
            :key="sidebarW"
          >
            <router-link :to="sidebarW.link">{{ sidebarW.title }}</router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import "../../assets/fontawesome/css/all.css";
import "../../assets/css/style.css";
import $ from "jquery";

export default {
  name: "sidebar",
  data() {
    return {
      sidebarSeminar: [],
      sidebarAchievement: [],
      sidebarNews: [],
      sidebarPartner: [],
      sidebarKompetisi: [],
      sidebarWeekly: [],
      main: "",
    };
  },
  mounted() {
    axios
      .get("http://api.mapid.io/blog/get_list_docs_public/blog")
      .then((response) => {
        // this.main = response.data[0];
        // console.log(response.data);
        // console.log(this.sidebarTitle);
        var i = 0;
        while (i < response.data.length) {
          if (response.data[i].sub_bracket == "seminar") {
            this.sidebarSeminar.push(response.data[i]);
          } else if (response.data[i].sub_bracket == "achievement") {
            this.sidebarAchievement.push(response.data[i]);
          } else if (response.data[i].sub_bracket == "news") {
            this.sidebarNews.push(response.data[i]);
          } else if (response.data[i].sub_bracket == "partnership") {
            this.sidebarPartner.push(response.data[i]);
          } else if (response.data[i].sub_bracket == "teknis_kompetisi_mapid") {
            this.sidebarKompetisi.push(response.data[i]);
          } else if (response.data[i].sub_bracket == "weekly_mapid_blog") {
            this.sidebarWeekly.push(response.data[i]);
          }
          i++;
        }
      });
  },
};

$(document).ready(function () {
  $(".side_bar_btn").click(function () {
    $(".sidebar").toggleClass("collapse");
  });
});

var sidebar = document.getElementsByClassName("sidebar");
// var collapse = document.getElementsByClassName("collapse");

window.onscroll = windowScroll;
function windowScroll(e) {
  var offset = window.pageYOffset;
  if (offset > 100) {
    $("#sidebar-style").addClass("sidebar-top");
    $("#btn-style").addClass("btn-top");
  } else if (offset < 100) {
    sidebar[0].className = "sidebar";
    $("#btn-style").removeClass("btn-top");
    $("#btn-style").addClass("side_bar_btn");
  }
}
</script>

<style>
</style>