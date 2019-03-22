class User {
    constructor(gender, name, email, picture, dob) {
        this.gender = gender
        this.name = name
        this.email = email
        this.dob = dob
        this.picture = picture
    }
    getInfo() {
        return `GENDER: ${this.gender}, NAME: ${this.name}, EMAIL: ${this.email}, PICTURE: ${this.picture}, DOB: ${this.dob}`
    }
}

export { User }
