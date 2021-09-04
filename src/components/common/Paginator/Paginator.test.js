import React from "react";
import { create } from "react-test-renderer";
import Paginator from "./Paginator";

describe("Paginator", () => {
    test("Page count is 13 but should show 10 elements", () => {
        const component = create(<Paginator totalItemsCount={13} partSize={10} pageSize={1}/>);
        const root = component.root;
        const items = root.findAllByType('li');
        expect(items.length).toBe(11);
    });
    test("if pages count is more then 10 button NEXT should be present", () => {
        const component = create(<Paginator totalItemsCount={11} partSize={10} pageSize={1}/>);
        const root = component.root;
        const nextButton = root.findAllByType('li');
        const nextButtonText = nextButton[nextButton.length - 1].children[0];
        expect(nextButtonText).toBe('next');
    });
});