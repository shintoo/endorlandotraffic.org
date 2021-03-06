import Link from 'next/link'
import Expandable from '../../components/Expandable'
import useWindowSize from '../../lib/window'
import styles from '../../styles/Facts.module.css'

export default function Facts(props) {
  const { width, height } = useWindowSize()

  let videoWidth = width - 50
  if (width >= 680) {
    videoWidth = 630;
  }
  let videoHeight = videoWidth / 1.78
  return (<div className={styles.facts}>
  <h3 className={styles.heading}>Facts</h3>
  <div className={styles.takeaways}>
    <span className={styles.subheading}>Key Takeaways</span>
    <ul>
      <li> Orlando is growing fast, and will reach over <strong>5 million</strong> residents by 2030. </li>
      <li> Orlando ranks as the most dangerous area for pedestrians, and one of the most dangerous for cyclists <strong>in the country</strong>. </li>
      <li> Orange County is preparing to vote for the <strong>Orange County Transportation Initiative</strong>,
           which will improve commute times and traffic congestion. </li>
      <li> The infrastructure improvements will receive a majority of funding from tourists visiting Orange County, rather than residents,
           through a penny sales tax.</li>
    </ul>
  </div>
  <div className={styles.video}>
    <iframe title="vimeo-player" src="https://player.vimeo.com/video/683983531?h=f06cad0c78" width={videoWidth} height={videoHeight} frameBorder="0" allowFullScreen></iframe>
    <a className={styles.videosource} href="https://www.orangecountyfl.net/TrafficTransportation/TransportationInitiative.aspx">Source: OrangeCountyFL.net</a>
  </div>
  <div className={styles.expandables}>
    <Expandable title="Growth and Traffic">
  	<ul>
  		<li><strong>Extraordinary population growth.</strong><br /> Central Florida has been growing by a net of nearly 1,500 new residents every week. By the year 2030, projections have the regional population at 5.2 million.<sup><a href="#footnotes1" aria-label="Footnote 1">1</a></sup> Orange County is also one of the world&apos;s leading tourism destinations. Prior to the pandemic, Orange County had 75 million visitors in 2019.</li>
  		<li><strong>Congestion continues to increase.</strong><br /> Traffic delays also cost commuters money. For the typical Orlando metro area commuter, the average cost was $1,261 in 2019.<sup><a href="#footnotes2" aria-label="Footnote 2">2</a></sup></li>
  		<li><strong>Commuting times are increasing.</strong><br /> Prior to the pandemic, Central Florida commuters spent an average of 61 hours per year in traffic congestion.<sup><a href="#footnotes2" aria-label="Footnote 2">2</a></sup> That???s roughly an hour a week added to the regular commute. As recovery and future growth continue, the daily commute is expected to get worse.</li>
  		<li><strong>Influx of workers coming into Orange County.</strong><br /> Data from the Orlando Economic Partnership shows that tens of thousands of workers in Orange County commute from the surrounding seven counties on a daily basis.</li>
  	</ul>
    </Expandable>
    <Expandable title="Pedestrian and Bicycle Safety Challenges">
  	<ul>
  		<li><strong>Pedestrian safety needs to be improved.</strong><br /> The 2021 Dangerous by Design report from Smart Growth America  ranks the Orlando-Kissimmee-Sanford area at the top of the list of the most dangerous urban areas for pedestrians.<sup><a href="#footnotes3" aria-label="Footnote 3">3</a></sup></li>
  		<li><strong>Bicycle safety needs to be improved.</strong><br /> According to the Florida Department of Highway Safety and Motor Vehicles, Orange County had 355 bicyclist crashes in 2020.</li>
  	</ul>
    </Expandable>
    <Expandable title="Environmental Challenges">
  	<ul>
  		<li><strong>Transportation impact on air quality.</strong><br /> Transportation makes up 36% of Orange County&apos;s greenhouse gas emissions. According to the American Public Transportation Association increasing public transportation improves air quality, lowers vehicle emissions, and reduces noise pollution.</li>
  	</ul>
    </Expandable>
    <Expandable title="Transportation Challenges">
  	<ul>
  		<li><strong>Current public transit is inadequate.</strong><br /> LYNX bus routes do not meet the current demand, and SunRail, the regional commuter rail system, does not run often enough. Currently, SunRail runs Monday through Friday and during special events.</li>
  		<li><strong>LYNX, the regional bus system,</strong><br /> has approximately 300 buses and services 2,500 square miles. Compare this to Pittsburgh, Pennsylvania, where Allegheny County services only 745 square miles with 700 buses.</li>
  		<li><strong>More funding for LYNX</strong><br /> could increase the number of routes and frequency; and reduce most wait times by 50%. In addition, it could also create faster and more direct routes.</li>
  	</ul>
    </Expandable>
    <Expandable title="Infrastructure Improvements">
  	<ul>
  		<li>Technology, traffic signals and street lights (timing of traffic signals and major roadway lighting).</li>
  		<li>Roads (improving lanes and resurfacing roadways).</li>
  		<li>Public transportation (LYNX and SunRail).</li>
  		<li>Intersections (improving turn lanes).</li>
  		<li>Pedestrian safety.</li>
  	</ul>
    </Expandable>
    <Expandable title="Funding">
  	<ul>
  		<li>Everyone would contribute, with tourists and visitors funding more than half (51%) of the nearly $600 million raised yearly to address transportation needs in Orange County.</li>
  		<li>No tax would be collected on groceries that are already not taxed now.</li>
  		<li>The tax would only be on purchases of retail goods and services, basically the same items that are currently subject to a sales tax now.</li>
  		<li>The tax would only apply to the first $5,000 per single purchase of retail goods and services.</li>
  		<li>Prescription drugs would be exempt.</li>
  		<li>Utilities would also be exempt.</li>
  	</ul>
    </Expandable>
  </div>
  <Link href="/action">
    <div className={styles.takeaction}>
      Take Action &rarr;
    </div>
  </Link>
	<hr />
	<p className={styles.footnotes}>
		<em>*Based on the Florida Department of Revenue projection as of September 27, 2019</em> <br/>
		<sup id="footnotes1">1</sup> According to the <a target="_blank" rel="noreferrer" aria-describedby="p-link" href="https://orlando.org/wp-content/uploads/sites/4/2020/04/Transportation2030Report.pdf">Office of Economic Development???s 2030 report</a> <br/>
		<sup id="footnotes2">2</sup> According to <a target="_blank" rel="noreferrer" aria-describedby="i-link" href="https://mobility.tamu.edu/umr/congestion-data/">Texas Transportation Institute Urban Mobility Report, 2019</a> <br/>
		<sup id="footnotes3">3</sup> According to the <a target="_blank" rel="noreferrer" aria-describedby="i-link" href="https://www.iyield4peds.org/dangerous-by-design-orlando-sanford-kissimmee-region-and-florida-top-lists-as-most-dangerous-for-pedestrians/">2021 Dangerous by Design Report from Smart Growth America</a>
		
      {/*<!--<sup id="footnotes3">3</sup> According to <a target="_blank" rel="noreferrer" aria-describedby="i-link" href="https://www.everycrsreport.com/reports/R45350.html">Funding and Financing Transportation Reports</a> <br/>-->

		
    <!--<sup id="footnotes4">4</sup> According to <a target="_blank" rel="noreferrer" aria-describedby="i-link" href="https://www.usnews.com/news/best-states/articles/these-are-the-most-dangerous-states-for-cyclists">Most Dangerous States for Bicyclists, U.S. News and World Report</a>-->*/}
	</p>
  </div>)
}
