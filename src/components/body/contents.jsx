import React from 'react'
import Card from '../card.jsx'

const contents = () => {
  return (
    <div className="contents">
      <OurMission/>
      <AboutClimate/>
      <TakeAction/>
      <Resources/>
      <GetInvolved/>
      <Team/>
    </div>
  )
}

const OurMission = () => {
  return (
    <>
      <h2 class="section_title" >Our Mission</h2>
      <p> We provide resource for understanding and taking action on climate change. Our mission is to educate, inspire, and empower individuals and communities to make a positive impact on our planet. Join us in the fight against climate change and be a part of the solution.</p>
      <p>At Climate Awareness, we believe that everyone has a role to play in addressing the climate crisis. Our mission is to raise awareness about climate change, provide accurate information, and offer practical solutions to reduce carbon footprints. We are a passionate group of individuals dedicated to creating a sustainable future for all.</p>
    </>
  )
}

const AboutClimate = () => {
  return (
    <div>
      <h2 id="about"  class="section_title" >What is Climate Change</h2>
      <p>Climate change is long-term changes in temperature, precipitation, and other atmospheric conditions on Earth. These changes are largely driven by human activities, particularly the burning of fossil fuels, deforestation, and industrial processes, which increase levels of greenhouse gases in the atmosphere.</p>

      <h3> Causes Of Climate Change</h3>

      <div className="card-container">
        <Card
          text="Burning fossil fuels for energy and transportation releases carbon dioxide (CO2) and other greenhouse gases."
          imgHeight="300px"
          imgSrc="green_house_gas.jpg"
          alt="image of factory"
          title="Greenhouse Gas Emissions"
        />

        <Card
          text="Cutting down forests reduces the planet’s capacity to absorb CO2."
          imgHeight="400px"
          imgSrc="deforestation.jpg"
          alt="image of logs"
          title="Deforestation"
        />
      </div>

      <ul>
        <li>
          <b>Agricultural Practices:</b> Certain farming practices increase methane and nitrous oxide levels in the atmosphere.
        </li>
        <li>
          <b>Industrial Activities:</b> Factories and industrial processes contribute significantly to greenhouse gas emissions.
        </li>
      </ul>
 
      <h3> Impacts Of Climate Change</h3>
      <ul>
        <li>
          <b>Rising Temperatures:</b> Global temperatures are increasing, leading to more frequent and severe heatwaves.
        </li>
        <li>
          <b>Melting Ice Caps:</b> Polar ice caps and glaciers are melting, contributing to rising sea levels.
        </li>
        <li>
          <b>Extreme Weather:</b> Increased frequency of extreme weather events such as hurricanes, floods, and droughts.
        </li>
        <li>
          <b>Biodiversity Loss:</b> Many species are at risk due to changing habitats and ecosystems.
        </li>
      </ul>
   </div>
  )
}


const TakeAction = () => {
  return (
    <>
      <h2 id="take-action"  class="section_title" >Take Action</h2>

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
      <h2 class="section_title" >Resources</h2>

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


const GetInvolved = () => {
  return (
    <>
      <h2 class="section_title" >Get Involved</h2>

      <h3>Join Our Community</h3>
      <ul>
        <li>
          Newsletter: Subscribe to our newsletter for the latest updates and climate news.
        </li>
        <li>
          Events: Attend our events and workshops to learn more and connect with like-minded individuals.
        </li>
        <li>
          Social Media: Follow us on social media to stay informed and engage with our community.
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
    <div><a href="https://github.com/admon/" id='link'>Admon</a></div>
    <div><a href="https://github.com/saurabhmahto/" id='link'>Saurabh Mahto</a></div>
    </div>
    </div>
  )
}
export default contents
