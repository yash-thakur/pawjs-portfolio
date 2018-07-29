import _ from "lodash";
import blogList from "../app/components/blogs/blog-list";
import BannerImg from "../resources/images/bg/01.jpg";

const getSeo = (url) => {
  let blogData = _.find(blogList, blog => blog.url === url);
  return {
    title: blogData.title,
    name: `${blogData.title} | Yash Thakur`,
    description: blogData.shortDesc,
    type: "article",
    url: `https://yashthakur.in${url}`,
    site_name: "Yash Thakur",
    image: blogData.bannerImg || BannerImg,
  };
};

export default [
  {
    path: "/blog",
    component: import("../app/components/blog/index"),
    exact: true,
    seo: {
      title: "Blog | Yash Thakur",
      description: "Blog posts by Yash Thakur related to coding and other interesting things."
    }
  },
  {
    path: "/blog/temperature-sensor-raspberrypi/",
    exact: true,
    component: import ("../app/components/blogs/temperature-sensor-raspberrypi"),
    seo: getSeo("/blog/temperature-sensor-raspberrypi/")
  },
  {
    path: "/blog/arduino-working-accelerometer-led-lights/",
    exact: true,
    component: import ("../app/components/blogs/arduino-working-accelerometer-led-lights"),
    seo: getSeo("/blog/arduino-working-accelerometer-led-lights/")
  }
];
