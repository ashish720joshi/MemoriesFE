export interface UserState {
    users: Users[],
    loading: boolean;
    error: string;
}

interface Users {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
}

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: GeoCoordinates;
}

interface GeoCoordinates {
    lat: string;
    lng: string
}