export class Place {
    public name: string;
    public lat: number;
    public long: number;

    setName(name: string){
        this.name = name;
    }

    setLat(lat: number){
        this.lat = lat;
    }

    setLong(long: number){
        this.long = long;
    }
}