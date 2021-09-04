import profileReducer, {addPost, deletePost} from "./profile-reducer";
import {render, screen} from "@testing-library/react";

let state = {
    posts: [
        { id: 1, likesCount: 32, text: "Hi, it's my first post!" },
        { id: 2, likesCount: 4, text: "Welcome again!" },
        { id: 3, likesCount: 15, text: "What's up?" },
        { id: 4, likesCount: 0,text: "Lorem ipsum dolor sit amet consectetur adipi"},
    ],
};

test('length of posts should be incremented', () => {
    let action = addPost('Hello World');
    const newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(5);
});

test('message of new post should be correct', () => {
    let action = addPost('Hello World');
    const newState = profileReducer(state, action);

    expect(newState.posts[4].text).toBe('Hello World');
});

test('after deleting length of posts should be decrement', () => {
    let action = deletePost(1);
    const newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
});

test('after deleting length of posts shouldn`t be decrement if id is incorrect', () => {
    let action = deletePost(100);
    const newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4);
});