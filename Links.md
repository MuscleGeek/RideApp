Bootstrap CDN
https://www.bootstrapcdn.com/

CSS Beautiful Box Shadows
https://getcssscan.com/css-box-shadow-examples

Google Fonts
https://fonts.google.com/

Database MongoDB Atlas (CaaS-DaaS)
htttps://mongodb.com

https://www.npmjs.com/package/redux-devtools-extension
    -> or if needed to apply extension’s options:
        -> ************************************************************************
            import { createStore, applyMiddleware } from 'redux';
            import { composeWithDevTools } from 'redux-devtools-extension';

            const composeEnhancers = composeWithDevTools({
            // Specify here name, actionsBlacklist, actionsCreators and other options
            });
            const store = createStore(
            reducer,
            composeEnhancers(
                applyMiddleware(...middleware)
                // other store enhancers if any
            )
            );
        -> ************************************************************************
    --PASTE IN ../redux/store.js