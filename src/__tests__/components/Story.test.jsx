import React from 'react';
import renderer from 'react-test-renderer';
import Story from "../../components/Story";

test('Test Story Component with hyper link URL', () => {
    let story = {
        title : 'This is sample title',
        by: 'test-user',
        time: 1207886576
    } ;
    const component = renderer.create(<Story story={story} />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});

test('Test Story Component without hyper link URL', () => {
    let story = {
        url : 'www.test.com',
        title : 'This is sample title',
        by: 'test-user'
    } ;
    const component = renderer.create(<Story story={story} />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});