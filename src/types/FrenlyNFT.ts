export interface FrenlyNFT {
    name: string;
    description: string;
    image: string;
    dna: string;
    edition: number;
    date: number;
    attributes?: AttributesEntity[] | null;
    compiler: string;
}
export interface AttributesEntity {
    trait_type: string;
    value: string;
}
