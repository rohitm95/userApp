export class User{
    
    userId: number
    userName: string
    userEmail: string
    userPhoto: string

    constructor(id: number, name: string, email: string, photo: string){
        this.userId = id
        this.userName = name
        this.userEmail = email
        this.userPhoto = photo
    }
}