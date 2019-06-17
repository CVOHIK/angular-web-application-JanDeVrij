export interface Geometry {
        type: string;
        coordinates: number[];
    }

    export interface Properties {
        Sport: string;
        Status: string;
        Naam: string;
        SportID: string;
        NUMMER?: number;
        Wijk: string;
        GENTID: number;
    }

    export interface Feature {
        type: string;
        id: string;
        geometry: Geometry;
        geometry_name: string;
        properties: Properties;
    }

    export interface Properties2 {
        name: string;
    }

    export interface Crs {
        type: string;
        properties: Properties2;
    }

    export interface LocatieObject {
        type: string;
        totalFeatures: number;
        features: Feature[];
        crs: Crs;
    }
    