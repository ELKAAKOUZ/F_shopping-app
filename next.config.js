module.exports = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Permissions-Policy",
            value: "interest-cohort=()",
          },
          {
            key: "Content-Security-Policy",
            value: "interest-cohort=()",
          },
        ],
      },
    ];
  },
};
