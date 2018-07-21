export default [
  {
    path: "/blog",
    component: import("../app/components/blog/index"),
    exact: true
  },
  {
    path: "/blog/temperature-sensor-raspberrypi/",
    exact: true,
    component: import ("../app/components/blogs/temperature-sensor-raspberrypi")
  }
];
