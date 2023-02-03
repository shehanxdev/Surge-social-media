const Post = require("../models/posts");
const { faker } = require("@faker-js/faker");

const generatePosts = (number) => {
  let posts = [];
  for (let i = 0; i < number; ++i) {
    const post = new Post({
      userEmail: faker.internet.email(),
      userName: faker.internet.userName(),
      description: faker.lorem.paragraph(1),
      picturepath: faker.helpers.arrayElement([
        "https://res.cloudinary.com/shehancloudinarystore/image/upload/v1674856467/Surge_internship/jayson-hinrichsen-bw27bJBoqSg-unsplash_hynm7h.jpg",
        "https://res.cloudinary.com/shehancloudinarystore/image/upload/v1674856391/Surge_internship/jasmin-chew-dJLODI--AE4-unsplash_sbbiaq.jpg",
        "https://res.cloudinary.com/shehancloudinarystore/image/upload/v1674856322/Surge_internship/lobacheva-ina-3H0t67eeP1w-unsplash_ceyikt.jpg",
        "https://res.cloudinary.com/shehancloudinarystore/image/upload/v1674855802/Surge_internship/aleksandar-andreev-YMq6j0DFG7k-unsplash-min_iiuzop.jpg",
        "https://res.cloudinary.com/shehancloudinarystore/image/upload/v1674855644/Surge_internship/feliphe-schiarolli-FiuoiImpa3s-unsplash_jxc9fk.jpg",
      ]),
      userPicturePath: faker.helpers.arrayElement([
        "https://res.cloudinary.com/shehancloudinarystore/image/upload/v1674856666/Surge_internship/charlesdeluvio-Mv9hjnEUHR4-unsplash_x7z1d2.jpg",
        "https://res.cloudinary.com/shehancloudinarystore/image/upload/v1674856661/Surge_internship/ayo-ogunseinde-sibVwORYqs0-unsplash_wonmcz.jpg",
        "https://res.cloudinary.com/shehancloudinarystore/image/upload/v1674856655/Surge_internship/charlesdeluvio-K4mSJ7kc0As-unsplash_upiqrp.jpg",
        "https://res.cloudinary.com/shehancloudinarystore/image/upload/v1674856642/Surge_internship/jurica-koletic-7YVZYZeITc8-unsplash_nkx7wh.jpg",
      ]),
      likes: faker.datatype.number(),
      comments: [],
    });

    posts.push(post);
  }
  return posts;
};
module.exports = generatePosts;
