import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="Hello, test status" />);
        const root = component.root;
        expect(root.props.status).toBe('Hello, test status');
    });
    test("after creation status content should be displayed", () => {
        const component = create(<ProfileStatus status="Hello, test status" />);
        const root = component.root;
        const span = root.findByType('span');
        expect(span.children.length).toBe(1);
    });
    test("after creation status content should contains correct status", () => {
        const component = create(<ProfileStatus status="Hello, test status" />);
        const root = component.root;
        const span = root.findByType('span');
        expect(span.children[0]).toBe('Hello, test status');
    });
    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status="Hello, test status" />);
        const root = component.root;
        const span = root.findByType('span');
        span.props.onDoubleClick();
        const input = root.findByType('input');
        expect(input.props.value).toBe('Hello, test status');
    });
});