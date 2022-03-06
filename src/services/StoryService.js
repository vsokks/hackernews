import {BASE_API_URL, MAX_STORIES_COUNT, STORIES_PER_REQUEST} from '../constants';
import httpClient from "../utils/ApiClient";

const getItem = async (id) => {
    try {
        return await httpClient().get(`${BASE_API_URL}/item/${id}.json`);
    } catch (error) {
        console.log('Error while getting item detail: ' + id);
    }
};

const getStories = async (type) => {
    try {
        return await httpClient().get(`${BASE_API_URL}/${type}stories.json`);
    } catch (error) {
        console.log(`Error while getting list of ${type} stories.`);
    }
};

export const getStoriesWithDetail = async (type, pageNo) => {
    let startRecordRowNo = (pageNo * STORIES_PER_REQUEST) - STORIES_PER_REQUEST;
    let endRecordRowNo =  pageNo * STORIES_PER_REQUEST;
    if(startRecordRowNo >= MAX_STORIES_COUNT) {
        return [];
    }
    if(endRecordRowNo > MAX_STORIES_COUNT) {
        endRecordRowNo = MAX_STORIES_COUNT;
    }
    const { data: storyIds } = await getStories(type);
    return await Promise.all(storyIds.slice(startRecordRowNo, endRecordRowNo).map(async id => {
        let itemResponse = await getItem(id);
        return itemResponse.data;
    }));
};