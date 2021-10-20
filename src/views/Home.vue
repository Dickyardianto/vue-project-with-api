<template>
  <Sidebar />
  <BlogHome />
</template>

<script>
import Sidebar from "@/components/templates/Sidebar.vue";
import BlogHome from "@/components/blog/BlogHome.vue";
export default {
  name: "Home",
  components: {
    Sidebar,
    BlogHome,
  },
};
</script>
