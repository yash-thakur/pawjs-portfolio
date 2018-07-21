import TheGroundUpImg from "../app/components/portfolios/images/The-GroundUp.jpg";
export default [
  {
    path: "/portfolios/thegroundup-custom-html",
    exact: true,
    component: import("../app/components/portfolios/thegroundup-custom-html"),
    seo: {
      title: "The Groundup Custom HTML | Yash Thakur",
      name: "The Groundup Custom HTML | Yash Thakur",
      description: "A custom HTML requirement to create an invoice for staff members which can be accessed by any member from anywhere to provide it to the clients.",
      type: "article",
      url: "http://yashthakur.in/portfolios/thegroundup-custom-html/",
      site_name: "Yash Thakur",
      image: TheGroundUpImg,
    }
  },
];
