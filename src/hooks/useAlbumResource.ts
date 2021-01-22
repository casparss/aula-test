import { useEffect, useState } from "react";
import { ResourceType, fetchAlbums } from "../services/albumService";

export const useAlbumResource = () => {
    const [albums, setAlbums] = useState<any[]>([]);
    const [resourceType, setResourceType] = useState<ResourceType>(
        ResourceType.ALBUMS
    );
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string | undefined>();

    const fetchAlbumData = async (): Promise<void> => {
        try {
            setIsLoading(true);
            setErrorMessage(undefined);
            setAlbums(await fetchAlbums(resourceType));
        } catch ({ message }) {
            setErrorMessage(message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchAlbumData();
    }, [resourceType]);

    return {
        albums,
        resourceType,
        setResourceType,
        isLoading,
        setIsLoading,
        errorMessage,
    };
};

export default useAlbumResource;