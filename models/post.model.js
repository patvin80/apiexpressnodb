import posts from '../data/posts.js'
const filename = '../data/posts.js'
import { mustBeInArray, getNewId, newDate, writeJSONFile } from '../helpers/helper.js'

// function getPosts() {
//     return new Promise((resolve, reject) => {
//         if (posts.length === 0) {
//             reject({
//                 message: 'no posts available',
//                 status: 202
//             })
//         }

//         resolve(posts)
//     })
// }

const getPosts = async () => {
    if (posts.length === 0) {
        reject({
            message: 'no posts available',
            status: 202
        })
    }
    return (posts)
}

const getPost = async (id) => {
    let result = await mustBeInArray(posts, id)
    return result
}

// const insertPost = (newPost) => {
//     return new Promise((resolve, reject) => {
//         const id = { id: getNewId(posts) }
//         const date = { 
//             createdAt: newDate(),
//             updatedAt: newDate()
//         } 
//         newPost = { ...id, ...date, ...newPost }
//         push(newPost)
//         writeJSONFile(filename, posts)
//         resolve(newPost)
//     })
// }

const insertPost = async (newPost) => {
    const id = { id: await getNewId(posts) }
    const date = { 
        createdAt: newDate(),
        updatedAt: newDate()
    } 
    newPost = { ...id, ...date, ...newPost }
    posts.push(newPost)
    writeJSONFile(filename, posts)
    return (newPost)
}

function updatePost(id, newPost) {
    return new Promise((resolve, reject) => {
        mustBeInArray(posts, id)
        .then(post => {
            const index = findIndex(p => p.id == post.id)
            id = { id: post.id }
            const date = {
                createdAt: post.createdAt,
                updatedAt: newDate()
            } 
            posts[index] = { ...id, ...date, ...newPost }
            writeJSONFile(filename, posts)
            resolve(posts[index])
        })
        .catch(err => reject(err))
    })
}

function deletePost(id) {
    return new Promise((resolve, reject) => {
        mustBeInArray(posts, id)
        .then(() => {
            posts = filter(p => p.id !== id)
            writeJSONFile(filename, posts)
            resolve()
        })
        .catch(err => reject(err))
    })
}

export {
    insertPost,
    getPosts,
    getPost, 
    updatePost,
    deletePost
}