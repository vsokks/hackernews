import React, {useState as useStateMock} from 'react';
import renderer from 'react-test-renderer';
import Stories from "../../components/Stories";

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
}));

const setState = jest.fn();
beforeEach(() => {
    useStateMock.mockImplementation(init => [init, setState]);
});

test('Test Stories', () => {
    /*Still Pending, problem in setting mock state using react-test-renderer lib*/
    const component = renderer.create(<Stories type='top' />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});