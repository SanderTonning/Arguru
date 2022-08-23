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
                    "6305390638b736085391b53d",
                  title: "Sanity Studio",
                  name: "arguru-studio",
                  apiId: "9a7aef66-ce72-4e96-922c-ec4fa0b737c9",
                },
                {
                  buildHookId: "630539062fe37300c4f13cd6",
                  title: "Blog Website",
                  name: "arguru",
                  apiId: "e4a987aa-9afc-4481-9725-1d33498c864f",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/SanderTonning/Arguru",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://arguru.netlify.app",
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
