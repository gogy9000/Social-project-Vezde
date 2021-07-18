import profileReducer, { AddPost, deletePost } from "./profile-reducer";
import ReactDOM from "react-dom";
import App from "../App";
import React from "react";

let state = {
    Post_item_data: [
        { id: 1, Post_item: 'Hello Motherfucker!', Like: 121, photos: null, },
        { id: 2, Post_item: 'Hello motherfucker!', Like: 123, photos: null, },
        { id: 3, Post_item: 'Hello motherfucker!', Like: 123, photos: null, },
        { id: 4, Post_item: 'Hello motherfucker!', Like: 123, photos: null, },

    ],
};

it('length of posts should be incremented', () => {
    // 1. test data
    let action = AddPost("it-kamasutra.com");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.postItemData.length).toBe(5);

});

it('message of new post should be correct', () => {
    // 1. test data
    let action = AddPost("it-kamasutra.com");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.postItemData[4].Post_item).toBe("it-kamasutra.com");
});

it('after deleting length of messages should be decrement', () => {
    // 1. test data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.postItemData.length).toBe(3);
});

it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    // 1. test data
    let action = deletePost(1000);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.postItemData.length).toBe(4);
});


