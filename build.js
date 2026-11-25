// Joins every post in content/posts/ into one posts.json that the home page reads.
// Netlify runs this automatically each time you publish from the /admin panel.
const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "content", "posts");
const posts = fs.readdirSync(dir)
  .filter(f => f.endsWith(".json"))
  .map(f => {
    try {
      const data = JSON.parse(fs.readFileSync(path.join(dir, f), "utf8"));
      return { id: f.replace(/\.json$/, ""), ...data };
    } catch (e) {
      console.warn("Skipping " + f + ": " + e.message);
      return null;
    }
  })
  .filter(Boolean);

fs.writeFileSync(path.join(__dirname, "posts.json"), JSON.stringify(posts));
console.log("posts.json written with " + posts.length + " posts");
