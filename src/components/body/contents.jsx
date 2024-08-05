import React from "react";
import Card from "../card.jsx";
import TextBox from "../card.jsx";
// import TextTitleBox from '../card.jsx'

const contents = () => {
  return (
    <div className="contents">
      <AboutClimate />
      <TakeAction />
      <Resources/>
      <OurMission />
      <Team />
    </div>
  );
};

const OurMission = () => {
  return (
    <div style={{ marginTop: "15px" }}>
      <p className="section_title">Our Mission</p>
      <TextBox text="We provide resource for understanding and taking action on climate change. Our mission is to raise awareness about climate change, provide accurate information, and offer practical solutions to reduce carbon footprints." />
    </div>
  );
};

const AboutClimate = () => {
  return (
    <div>
      <h2 id="about" className="section_title">
        What is Climate Change
      </h2>
      <TextBox text="Climate change is long-term changes in temperature, precipitation, and other atmospheric conditions on Earth. These changes are largely driven by human activities, particularly the burning of fossil fuels, deforestation, and industrial processes, which increase levels of greenhouse gases in the atmosphere." />

      <p className="sub_section_title"> Causes Of Climate Change</p>

      <div className="card-container">
        <Card
          text="Life on Earth depends on energy coming from the Sun. About half the light energy reaching Earth's atmosphere passes through the air and clouds to the surface, where it is absorbed and radiated in the form of infrared heat. About 90% of this heat is then absorbed by greenhouse gases and re-radiated, slowing heat loss to space."
          imgSrc="green_house_gas.jpg"
          id="cardimg"
          alt="image of factory"
          title="Increasing Greenhouses Gases Are Warming the Planet"
        />
      </div>
      <div className="card-container">
        <Card
          text="Between 2000 and 2012, 2.3 million square kilometres (890,000 square miles) of forests around the world were cut down. Deforestation and forest degradation continue to take place at alarming rates, which contributes significantly to the ongoing loss of biodiversity."
          imgSrc="deforestation.jpg"
          id="cardimg"
          alt="image of logs"
          title="Deforestation reduces the planet’s capacity to absorb CO2"
        />
      </div>

      <p className="sub_section_title"> Impacts Of Climate Change</p>

      <div className="card-container">
        <Card
          text="The Earth's temperature is rising at an alarming rate, with severe consequences. Human activities like burning fossil fuels, deforestation, and industrial agriculture release greenhouse gases, trapping heat and causing global warming."
          imgSrc="rising_temperature.jpg"
          id="cardimg"
          alt="image of traffic"
          title="Rising Temperature: A Growing Concern"
        />
      </div>
      <div className="card-container">
        <Card
          text="Droughts in the Southwest and heat waves (periods of abnormally hot weather lasting days to weeks) are projected to become more intense, and cold waves less intense and less frequent."
          imgSrc="california-drought-dry-lakebed-2009.webp"
          id="cardimg"
          alt="image of california-drought-dry-lakebed-2009"
          title="More Droughts and Heat Waves"
        />
      </div>
      <div className="card-container">
        <Card
          text="Warming temperatures have extended and intensified wildfire season in the West, where long-term drought in the region has heightened the risk of fires. Scientists estimate that human-caused climate change has already doubled the area of forest burned in recent decades. By around 2050, the amount of land consumed by wildfires in Western states is projected to further increase by two to six times. Even in traditionally rainy regions like the Southeast, wildfires are projected to increase by about 30%."
          imgSrc="wildfire.webp"
          id="cardimg"
          alt="image of wildfire"
          title="Longer Wildfire Season"
        />
      </div>
      <div className="card-container">
        <Card
          text="Climate change is having an uneven effect on precipitation (rain and snow) in the United States, with some locations experiencing increased precipitation and flooding, while others suffer from drought. On average, more winter and spring precipitation is projected for the northern United States, and less for the Southwest, over this century."
          imgSrc="flooded-road-in-oklahoma.gif"
          id="cardimg"
          alt="image of flooded-road"
          title="Changes in Precipitation Patterns"
        />
      </div>
      <div className="card-container">
        <Card
          text="Sea ice cover in the Arctic Ocean is expected to continue decreasing, and the Arctic Ocean will very likely become essentially ice-free in late summer if current projections hold. This change is expected to occur before mid-century."
          imgSrc="1069-arctic-ice.webp"
          id="cardimg"
          alt="image of arctic-ice"
          title="Arctic Is Very Likely to Become Ice-Free"
        />
      </div>
    </div>
  );
};

const TakeAction = () => {
  return (
    <>
      <h2 id="take-action" className="section_title">
        Take Action
      </h2>

      <p className="sub_section_title">Individual Actions</p>
      <div className="card-container">
        <Card
          text="The 3Rs are a simple way to reduce waste and promote sustainability. Reduce means minimizing waste by avoiding unnecessary items and choosing products with minimal packaging. Reuse involves using items multiple times, repurposing them, and donating or sharing with others. Recycle converts waste materials into new products, such as recycling paper, plastic, glass, and metal. By adopting the 3Rs, you can significantly reduce your environmental impact, conserve natural resources, and contribute to a more sustainable future. Implementing these practices in daily life can make a significant difference in reducing waste and promoting eco-friendliness."
          imgSrc="3R.jpeg"
          id="cardimg"
          alt="image of can with plastic"
          title="3R : Reduce, Reuse, Recycle"
        />
      </div>

      <div className="card-container">
        <Card
          text="The use of solar panels involves harnessing energy from the sun to generate electricity or heat. Solar panels convert sunlight into electrical energy using photovoltaic (PV) cells. Solar panels can power homes, businesses, and industries, and can also be used for water heating, lighting, and charging electronic devices. Their use contributes significantly to reducing carbon footprint and promoting a cleaner environment."
          imgSrc="solar.avif"
          id="cardimg"
          alt="image of solar panel"
          title="Install solar Panel on your Roof"
        />
      </div>

      <div className="card-container">
        <Card
          text="Cycling can be used for commuting, recreation, or exercise, and can be adapted to various terrain and environments. It has numerous benefits in the form of zero dependence on fossil fuels, zero emissions and pollution, health benefits from increased physical activity, besides being an affordable means of mobility for low-income households."
          imgSrc="cycling.jpeg"
          id="cardimg"
          alt="image of people cycling"
          title="Shifting to cycling can result in an annual savings"
        />
      </div>

      <p className="sub_section_title">Community Actions</p>

      <div className="card-container">
        <Card
          text="Wind farms can be designed to meet specific energy demands, from small community projects to large-scale industrial applications. They can also be combined with other renewable energy sources, such as solar or hydro power, to create hybrid power plants. Overall, wind farms play a vital role in reducing our reliance on fossil fuels, mitigating climate change, and promoting energy independence."
          imgSrc="wind_energy.jpeg"
          id="cardimg"
          alt="image of wind farm"
          title="Wind Farms"
        />
      </div>
      <div className="card-container">
        <Card
          text="These gardens foster community engagement, education, and sustainability, while providing access to fresh, healthy produce. Members work together to maintain and harvest the gardens, sharing knowledge, resources, and social connections. Community gardens can take various forms, including allotment gardens, shared gardens, container gardens, and vertical gardens. They often feature shared tools and resources, workshops, and community events. By promoting collective management and decision-making, community gardens empower individuals to take ownership of their food systems and build stronger, more resilient communities."
          imgSrc="community_farm.avif"
          id="cardimg"
          alt="image of Community Farms"
          title="Community Farms / Gardens"
        />
      </div>
    </>
  );
};

const Resources = () => {
  return (
    <>
      <h2 id="tools" className="section_title">
        Resources and Tools
      </h2>

      <div className="card_square">
        ﻿
        <div>
          <h4>
            <a className="link" href="https://www.carbonfootprint.com/calculator.aspx">
              Carbon Footprint Calculator
            </a>
          </h4>
          <div>
            ﻿ ﻿{" "}
            <p>
              Calculate your personal or household carbon footprint and find
              ways to reduce it.
            </p>
            <p>
              {" "}
              This carbon calculator is provided free to use for Individuals And
              Households
            </p>
          </div>
          ﻿
        </div>
      </div>

      <div className="card_square">
        ﻿
        <div>
          <h4>
            <a className="link" href="https://www.vem-group.com/en/energiesparrechner/">
              {" "}
              Calculate Efficiency of Energy-Saving Motors
            </a>
          </h4>
          <div>
            ﻿ ﻿
            <p>
              {" "}
              Determine how much energy you can save by making small changes in
              your daily habits.
            </p>
            <p>Enter your key data and have the efficiency calculated.</p>
          </div>
          ﻿
        </div>
      </div>
    </>
  );
};

const Team = () => {
  return (
    <div id="">
      <p className="section_title">Team Members</p>
      <div className="card" id="teams">
        <ul>
          <li>
            <a href="https://github.com/andmhn/" className="link">
              Anand Mohan
            </a>
          </li>
          <li>
            <a href="https://github.com/praweensoni01/" className="link">
              Praween Soni
            </a>
          </li>
          <li>
            <a href="https://github.com/edmonsaras" className="link">
              Admon
            </a>
          </li>
          <li>
            <a href="https://github.com/Saurabh-Mahto/" className="link">
              Saurabh Mahto
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default contents;
