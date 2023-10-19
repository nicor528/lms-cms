module.exports = ({ env }) => ({
  settings: {
    cors: {
      enabled: true,
      origin: [env('ALLOWED_ORIGIN', '*')],
    },
  },
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['4023da9d37973c30ea6c9ed531e59c9602151ec0607166da2181396b15b8035babd779d30960abe83631f5b3084023aea860c1ab40696dc575ae6555ecddf96ab21200822d472da696ab6d7373c59cea123249fdaccf44f3c28dce94442f0cbb422537a7a228262df10a7cf3b703b9220ba4c7477017f5772247bf70cb0a3f63']),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});