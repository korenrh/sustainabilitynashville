import React from "react";

function About() {
  return (
    <div className="About">
      <header>
		<h1>Introduction</h1>
			<p>As Nashville continues to grow, sustainability continues to become more important. Pollution will increase, and policy makers must work now to combat this. Nashville Mayor John Cooper has already delineated some plans for sustainability efforts during his term. These plans include but are not limited to a new people-first public transportation system and joining the C40 Cities Climate Leadership Group. </p>
        <h2>Sustainability in Nashville</h2>
			<p>As Nashville continues to expand rapidly, sustainability needs and concerns are likely to grow in parallel. Because of this, different neighborhoods in Nashville will face different sustainability challenges, or be asked to take on part of the burden of managing Nashville's waste or industrial needs.</p>
			<p>Therefore, the goal of this project is to not only investigate which regions of Nashville are carrying the burden of this expansion, but also quantify this strain to better inform future decisions and sustainability projects</p>
			<p>The inspiration for this project came from a previous project that Reilly worked on for CSET 3333: Technology and the Ecology of Materials. When exploring the distribution of Nashville's landfills, creating a basic map using a Geographic Information System (GIS) proved to be useful for visualizing Nashville's distribution of waste. Below is a recreation of the map from that project, which displays the location of landfills imposed on the median household incomes of each neighborhood.</p>
		<h3>Initial Plans for Index</h3>
			<p>In our project, we are aiming to develop a sustainability index to rank different areas of Nashville to determine where our policy makers should specifically focus. Our initial index will include several factors including … proximity to landfills, clean water, recycling centers, fire stations, tornado damage, proximity to green space like a park or greenway, and availability of public transportation.</p>
      </header>
    </div>
  );
}

export default About;
