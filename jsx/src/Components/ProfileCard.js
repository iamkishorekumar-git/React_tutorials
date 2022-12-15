import sampleImg1 from '../images/download.jpeg'
import sampleImg2 from '../images/sample.jpg'


function ProfileCard({car})
{
    console.log(sampleImg1);
console.log(sampleImg2);
    console.log("[props]",car);
    return <div>ProfileCard - {car}</div>
}

export default ProfileCard