document.querySelector("#run").addEventListener("click", () => {
            class person {
                constructor(firstname, lastname) {
                    this.firstname = firstname;
                    this.lastname = lastname;
                }
                get fullName() {
                        return (this.firstname+ " "+ this.lastname);
  }
    set name(newname){
        let c= newname.split(" ");
        console.log(c[0],c[1])
    }
}
let a=new person("David","Wuilquot")
console.log(a.fullName);
a.name=("Georges Jungle")


})