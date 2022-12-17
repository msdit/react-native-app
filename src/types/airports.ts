interface IDisplayName {
    language: string;
    value: string;
}

export interface IAirportInfo {
    name: string;
    displayName: IDisplayName[];
    domainCode: string;
    isPopular: boolean;
}