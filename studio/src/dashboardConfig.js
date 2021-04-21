export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60802fa78f8ed02ec6525a83",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-m7emj7tw",
                  apiId: "b5a78cca-c205-4f53-b93b-7fdc8d770133",
                },
                {
                  buildHookId: "60802fa7f522f02cece58160",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-14temssr",
                  apiId: "baafd5dd-f4a6-438b-82f1-f987731e035c",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/pc374153/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-14temssr.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
