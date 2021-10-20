<template>
  <Sidebar />
  <IndexBlog />
</template>

<script>
import Sidebar from "@/components/templates/Sidebar.vue";
import IndexBlog from "@/components/blog/IndexBlog.vue";
export default {
  name: "Index",
  components: {
    Sidebar,
    IndexBlog,
  },
};
</script>
