module.exports = {
  images: {
    domains: [
      "assets.laboutiqueofficielle.com",
      "google.com",
      "i.pinimg.com",
      "cdn.cliqueinc.com",
      "i0.wp.com",
      "image.made-in-china.com",
      "res.heraldm.com",
      "st2.depositphotos.com",
      "media1.popsugar-assets.com",
      "4.bp.blogspot.com",
      "ae01.alicdn.com",
      "apetogentleman.com",
      "photoartinc.com",
      "st2.depositphotos.com",
      "www.jules.com",
      "www.assets.laboutiqueofficielle.com",
      "www.google.com",
      "www.i.pinimg.com",
      "www.cdn.cliqueinc.com",
      "www.i0.wp.com",
      "www.image.made-in-china.com",
      "www.res.heraldm.com",
      "www.st2.depositphotos.com",
      "www.media1.popsugar-assets.com",
      "www.4.bp.blogspot.com",
      "www.ae01.alicdn.com",
      "www.apetogentleman.com",
      "www.photoartinc.com",
      "www.st2.depositphotos.com",
      "www.jules.com",
    ]
  },
  env: {
    // STRAPI_GRAPHQL: 'https://strapi-jamstack-zmg6cwiuca-ew.a.run.app/graphql',
    STRAPI_GRAPHQL: 'http://localhost:1337/graphql',
    CAROUSEL_API: 'https://www.picsum.photos/v2/list?limit=5',
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty',
      };
    }

    return config;
  },
};
