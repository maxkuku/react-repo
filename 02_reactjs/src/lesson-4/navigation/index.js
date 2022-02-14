

// один подход

export const navigation = {
    home: '/',
    profile: '/profile',
    userFavorites: '/profile/favorites',
    userHelp: '/profile/help',
    posts: '/posts',
    post: '/posts/:postId',
    postComments: '/posts/:postId/comments',
    
}

// другой подход лучше для динамических ссылок




export * from './posts';
export * from './profile';
export * from './home';