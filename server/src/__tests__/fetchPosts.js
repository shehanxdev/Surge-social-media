const request = require("supertest");
//*Only uncomment below import for local testing. GitHub will build and run application during CI automatically.
const app = require("../index");
let server;
//Custom sort testing function which tests the order of received posts

describe("GET /posts", () => {
  it("should fetch all posts and sort them according to timestamp and likes", async () => {
    const res = await request(app).get("/posts").expect(200);
    const isSorted = (arr) => {
      for (let i = 0; i < arr.length - 1; i++) {
        const current = arr[i];
        const next = arr[i + 1];
        console.log("hello");
        if (current.createdAt < next.createdAt) {
          return false;
        }
        if (
          current.createdAt === next.createdAt &&
          current.likes < next.likes
        ) {
          return false;
        }
      }
      return true;
    };
    expect(isSorted(res.body.slice(0, 10))).toStrictEqual(true);
  });
});
