import ProfileCard from "./Components/ProfileCard";

function App()
{
    return(
        <div>
            <div>Personal Digital Assitance</div>
            <ProfileCard car="Audi"/>
            <ProfileCard car= "Porsche"/>
            <ProfileCard car="Range rover"/>
        </div>
    ); 
}

export default App