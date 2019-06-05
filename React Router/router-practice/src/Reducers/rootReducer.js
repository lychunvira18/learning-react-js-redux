const initState = {
    posts: [
        { id: '1', title: 'Squirtle Laid an egg', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae repudiandae, dolore adipisci officiis animi suscipit, ipsa quasi mollitia perferendis temporibus voluptas a tempora cum error tenetur, libero magnam iusto quae!' },
        { id: '2', title: 'Charizard Laid an egg', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae repudiandae, dolore adipisci officiis animi suscipit, ipsa quasi mollitia perferendis temporibus voluptas a tempora cum error tenetur, libero magnam iusto quae!' },
        { id: '3', title: 'Lucario Laid an egg', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae repudiandae, dolore adipisci officiis animi suscipit, ipsa quasi mollitia perferendis temporibus voluptas a tempora cum error tenetur, libero magnam iusto quae!' }

    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === "DELETE_POST") {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        })
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer;