import { 
    createImageUrlBuilder,
    createCurrentUserHook,
    createClient
} from 'next-sanity'

export const config = {
        projectId: 'p5l17tlk',
        dataset: 'production',
        apiVersion: '2021-03-25'
        // useCdn: false // `false` if you want to ensure fresh data
    
}

export const sanityClient = createClient(config)

export const urlFor = (source) => createImageUrlBuilder(config).image(source)

export const useCurrentUser = createCurrentUserHook(config)