export const createUrl = (url: string, params: Record<string, string>): string => {
    const urlObject = new URL(url);
    Object.keys(params).forEach(key => urlObject.searchParams.append(key, params[key]))
    return urlObject.toString();
};

export default createUrl;