import { render } from "@testing-library/react";
import React from "react";
import albumListFixture from "../../test/albumListFixture";
import AlbumList from "./AlbumList";

test("album list displays three items.", () => {
    const { queryByText } = render(
        <AlbumList albums={albumListFixture.feed.entry} />
    );
    expect(queryByText("Dancing in the Sky")).toBeInTheDocument();
    expect(queryByText("hole in the bottle")).toBeInTheDocument();
    expect(queryByText("All of Me")).toBeInTheDocument();
});

test("album list shows 'no items' state.", () => {
    const { queryByText } = render(<AlbumList albums={[]} />);
    expect(queryByText("No albums")).toBeInTheDocument();
});

test("album list shows error state.", () => {
    const errorMessage = "I am an error.";
    const { queryByText } = render(
        <AlbumList albums={[]} errorMessage={errorMessage} />
    );
    expect(queryByText(`Fetch error: ${errorMessage}`)).toBeInTheDocument();
});

test("album list shows filtered results.", () => {
    const filterTerm = "Dancing in the Sky";
    const { queryByText } = render(
        <AlbumList
            albums={albumListFixture.feed.entry}
            filterTerm={filterTerm}
        />
    );
    expect(queryByText(filterTerm)).toBeInTheDocument();
    expect(queryByText("hole in the bottle")).not.toBeInTheDocument();
});
