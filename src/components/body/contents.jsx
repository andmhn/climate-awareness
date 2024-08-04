import React from 'react'
import Card from '../card.jsx'
import TextBox from '../card.jsx'
import TextTitleBox from '../card.jsx'


const contents = () => {
  return (
    <div className="contents">
      <AboutClimate/>
      <TakeAction/>
      <Resources/>
      <OurMission/>
      <Team/>
    </div>
  )
}

const OurMission = () => {
  return (
    <div style={{ marginTop: "15px" }}>
      <TextTitleBox
        title = "Our Mission"
        text = "We provide resource for understanding and taking action on climate change. Our mission is to raise awareness about climate change, provide accurate information, and offer practical solutions to reduce carbon footprints."/>
    </div>
  )
}

const AboutClimate = () => {
  return (
    <div>
      <h2 id="about"  className="section_title" >What is Climate Change</h2>
      <TextBox text = "Climate change is long-term changes in temperature, precipitation, and other atmospheric conditions on Earth. These changes are largely driven by human activities, particularly the burning of fossil fuels, deforestation, and industrial processes, which increase levels of greenhouse gases in the atmosphere."/>

      <h3> Causes Of Climate Change</h3>

      <div className="card-container">
        <Card
          text="Life on Earth depends on energy coming from the Sun. About half the light energy reaching Earth's atmosphere passes through the air and clouds to the surface, where it is absorbed and radiated in the form of infrared heat. About 90% of this heat is then absorbed by greenhouse gases and re-radiated, slowing heat loss to space."
          imgHeight="300px"
          imgSrc="green_house_gas.jpg"
          alt="image of factory"
          title="Increasing Greenhouses Gases Are Warming the Planet"
        />
      </div>
      <div className="card-container">
        <Card
          text="Between 2000 and 2012, 2.3 million square kilometres (890,000 square miles) of forests around the world were cut down. Deforestation and forest degradation continue to take place at alarming rates, which contributes significantly to the ongoing loss of biodiversity."
          imgHeight="300px"
          imgSrc="deforestation.jpg"
          alt="image of logs"
          title="Deforestation reduces the planet’s capacity to absorb CO2"
        />
      </div>
 
      <h3> Impacts Of Climate Change</h3>

      <div className="card-container">

        <Card
          text="The Earth's temperature is rising at an alarming rate, with severe consequences. Human activities like burning fossil fuels, deforestation, and industrial agriculture release greenhouse gases, trapping heat and causing global warming."
          imgHeight="300px"
          imgSrc="rising_temperature.jpg"
          alt="image of traffic"
          title="Rising Temperature: A Growing Concern"
        />
      </div>
      <div className="card-container">
        <Card
          text="Droughts in the Southwest and heat waves (periods of abnormally hot weather lasting days to weeks) are projected to become more intense, and cold waves less intense and less frequent."
          imgHeight="300px"
          imgSrc="california-drought-dry-lakebed-2009.webp"
          alt="image of california-drought-dry-lakebed-2009"
          title="More Droughts and Heat Waves"
        />
      </div>
      <div className="card-container">
         <Card
          text="Warming temperatures have extended and intensified wildfire season in the West, where long-term drought in the region has heightened the risk of fires. Scientists estimate that human-caused climate change has already doubled the area of forest burned in recent decades. By around 2050, the amount of land consumed by wildfires in Western states is projected to further increase by two to six times. Even in traditionally rainy regions like the Southeast, wildfires are projected to increase by about 30%."
          imgHeight="300px"
          imgSrc="wildfire.webp"
          alt="image of wildfire"
          title="Longer Wildfire Season"
        />
      </div>
      <div className="card-container">
        <Card
          text="Climate change is having an uneven effect on precipitation (rain and snow) in the United States, with some locations experiencing increased precipitation and flooding, while others suffer from drought. On average, more winter and spring precipitation is projected for the northern United States, and less for the Southwest, over this century."
          imgHeight="300px"
          imgSrc="flooded-road-in-oklahoma.gif"
          alt="image of flooded-road"
          title="Changes in Precipitation Patterns"
        />
      </div>
      <div className="card-container">
        <Card
          text="Sea ice cover in the Arctic Ocean is expected to continue decreasing, and the Arctic Ocean will very likely become essentially ice-free in late summer if current projections hold. This change is expected to occur before mid-century."
          imgHeight="300px"
          imgSrc="1069-arctic-ice.webp"
          alt="image of arctic-ice"
          title="Arctic Is Very Likely to Become Ice-Free"
        />
      </div>
   </div>
  )
}


const TakeAction = () => {
  return (
    <>
      <h2 id="take-action"  className="section_title" >Take Action</h2>

      <h3>Individual Actions</h3>
      <ul>
        <li>
          <b>Reduce, Reuse, Recycle:</b> Minimize waste by practicing the three R’s.
        </li>
        <li>
          <b>Energy Efficiency:</b> Use energy-efficient appliances and light bulbs, and reduce energy consumption at home.
        </li>
        <li>
          <b>Sustainable Transportation:</b> Walk, bike, carpool, or use public transportation to reduce carbon emissions.
        </li>
        <li>
          <b>Support Renewable Energy:</b> Advocate for and invest in renewable energy sources like solar and wind.
        </li>
      </ul>

      <h3>Community Actions</h3>
      <ul>
        <li>
          <b>Articles and Reports:</b> In-depth articles and reports on various aspects of climate change.
        </li>
        <li>
          <b>Infographics:</b> Visual representations of climate data and trends.
        </li>
        <li>
          <b>Videos and Webinars:</b> Educational videos and webinars featuring climate experts.
        </li>
      </ul>

    </>
  )
}

const Resources = () => {
  return (
    <>
      <h2 id="tools" className="section_title" >Resources and Tools</h2>

      <h3>Educational Materials</h3>
      <ul>
        <li>
          <b>Articles and Reports:</b> In-depth articles and reports on various aspects of climate change.
        </li>
          <b>Infographics:</b> Visual representations of climate data and trends.
        <li>
        </li>
        <li>
          <b>Videos and Webinars:</b> Educational videos and webinars featuring climate experts.
        </li>
      </ul>
 
      <h3>Tools and Calculators</h3>
      <ul>
        <li>
          <b>Carbon Footprint Calculator:</b> Calculate your personal or household carbon footprint and find ways to reduce it.
        </li>
        <li>
          <b>Energy Savings Calculator:</b> Determine how much energy you can save by making small changes in your daily habits.
        </li>
      </ul>
  </>
  )
}

const Team = () =>{
  return(
    <div id=''>
    <p>Team Members :</p>
    <div id='teams'>
    <div><a href="https://github.com/andmhn/" id='link'>Anand Mohan</a></div>
    <div><a href="https://github.com/praweensoni01/" id='link'>Praween Soni</a></div>
    <div><a href="https://github.com/edmonsaras" id='link'>Admon</a></div>
    <div><a href="https://github.com/saurabhmahto/" id='link'>Saurabh Mahto</a></div>
    </div>
    </div>
  )
}
export default contents
