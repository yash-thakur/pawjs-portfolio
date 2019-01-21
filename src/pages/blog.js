import _ from "lodash";
import React from "react";
import blogList from "../app/components/blogs/blog-list";
import BannerImg from "../resources/images/bg/01.jpg";
import fetch from "universal-fetch";

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
      name: "Blog | Yash Thakur",
      description: "Blog posts by Yash Thakur related to coding and other interesting things."
    }
  },
  {
    path: "/blog/categories/:category",
    component: import("../app/components/blog/index"),
    exact: true,
    seo: {
      title: "Blog | Yash Thakur",
      name: "Blog | Yash Thakur",
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
  },
  {
    path: "/blog/test-seo/",
    exact: true,
    component: () => <div>Hello</div>,
    // loadData: async ({updateSeo}) => new Promise((r) => {
    //   fetch('https://www.atyantik.com/wp-json/wp/v2/posts/?per_page=4&_fields[]=title&_fields[]=excerpt&_fields[]=jetpack_featured_media_url')
    //     .then(res => res.json())
    //     .then(res => {
    //       const item = _.first(res);
    //       updateSeo({
    //         title: item.title.rendered,
    //         image: item.jetpack_featured_media_url,
    //       });
    //       return r(res);
    //     });
    // }),
  }
];
