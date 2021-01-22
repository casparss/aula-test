import React from "react";

export const mapComponent = (Component: React.FunctionComponent<any>) => (
    data: unknown
) => <Component {...data} />;

export default mapComponent;
