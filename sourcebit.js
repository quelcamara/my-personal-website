const matchesProperty = require('lodash/matchesProperty');

const isDev = process.env.NODE_ENV === 'development';


module.exports = {
    plugins: [
        {
            module: require('sourcebit-source-filesystem'),
            options: {
                watch: isDev
            }
        },
        {
            module: require('sourcebit-target-next'),
            options: {
                liveUpdate: isDev,
                flattenAssetUrls: true,
                pages: [
                    { path: '/{__metadata.urlPath}', predicate: matchesProperty('__metadata.modelName', 'home') },
                    { path: '/{__metadata.urlPath}', predicate: matchesProperty('__metadata.modelName', 'contact') },
                    { path: '/{__metadata.urlPath}', predicate: matchesProperty('__metadata.modelName', 'page') },
                    { path: '/{__metadata.urlPath}', predicate: matchesProperty('__metadata.modelName', 'post') },
                    { path: '/{__metadata.urlPath}', predicate: matchesProperty('__metadata.modelName', 'notebooks') },
                    { path: '/{__metadata.urlPath}', predicate: matchesProperty('__metadata.modelName', 'portfolio') }
                ],
                commonProps: {
                    pages: { predicate: matchesProperty('__metadata.modelType', 'page') },
                    data: { single: true, predicate: matchesProperty('__metadata.id', 'sourcebit-source-filesystem:data') }
                }
            }
        }
    ]
};
