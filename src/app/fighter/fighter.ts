export class Fighter {
    id: number | undefined;
    name: string | undefined;
    age: number | undefined;
    height: string | undefined;
    picture: string | undefined;
    capacity: Array<string> | undefined;
    created: Date | undefined;

    constructor(
        name: string = 'Entrer un nom...',
        age: number = 30,
        height: string = '185',
        picture: string = 'https://www.ufc.com/athletes/all?filters[0]=status:23',
        capacity: string[] = ['MMA'],
        created: Date = new Date()
    ) {
        // this.id: id;
        this.name = name;
        this.age = age;
        this.height = height;
        this.picture = picture;
        this.capacity = capacity;
        this.created = created;

    }
    
}