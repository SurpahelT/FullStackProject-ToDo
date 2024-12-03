const person = {
  name: "Suraphel A",
  address: {
    St : "10600 Georgia Avenue", 
    city: "London",
    country: "UK"
  }, 
  profiles: ["Twitter", "Linkedin", "instagram"],
  printProfile : () => {
    person.profiles.map(
      (profile) => console.log (profile)
    )
    console.log(person.profiles[0])
  }
}
export default function FirstComponent(){
    return (
      <>
         <div className="FirstComponent"> First Component</div>
         <div>{ person.printProfile() }</div>
      </>
    );
}

