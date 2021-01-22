import { renderHook } from "@testing-library/react-hooks";
import useAlbumResource from "./useAlbumResource";

jest.mock('../services/albumService');

describe('useAlbumResource tests', () => {
    test("useAlbumResource fetches three album items.", async () => {
        const { result, waitForNextUpdate } = renderHook(() => useAlbumResource());
        expect(result.current.isLoading).toBe(true);
        await waitForNextUpdate();
        expect(result.current.albums.length).toBe(3);
        expect(result.current.isLoading).toBe(false);
    });
});