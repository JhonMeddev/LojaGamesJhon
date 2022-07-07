export class System{
    public name: string
    public version: string
    public status: boolean
    public date: string
    public duration: number
    public integrations: {
        database:{
            name: string
            id: string
            status: string
            response_time: string
        }
    }
}