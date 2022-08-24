const updateUser = user => {
    return {
        type: 'UPDATE_USER',
        user
    }
}

const login = () => {
    return {
        type: 'LOGIN'
    }
}

const signout = () => {
    return {
        type: 'SIGNOUT'
    }
}

const postStory = (story) => {
    return {
        type: 'POST_STORY',
        story
    }
}

export {
    updateUser,
    login,
    signout,
    postStory
}