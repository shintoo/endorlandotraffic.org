import Expandable from '../../components/Expandable'
import CopyButton from '../../components/CopyButton'
import { useRouter } from 'next/router'
import styles from '../../styles/Action.module.css'

export default function Action(props) {
  const router = useRouter()
  const autoExpand = router.asPath.split("#")[1]
  const tweetParams = "text=Orlando traffic and transportation can be fixed. Learn about the Orange County Transportation Initiative with @OrlandoTraffic:&url=https://endorlandotraffic.org"
  const copyText = `Dear Mayor Demings and Commissioners,

The Orange County Transportation Initiative is essential for the future of our county and our city. Our population is rising fast, and traffic congestion is getting worse. Orange County is severely lacking in public transit, and this is our opportunity to change that. Infrastructure improvements for Orange County that include Lynx and Sunrail service improvements and expansion, better pedestrian and cyclist safety, and better road safety are needed now.

Orange County needs higher frequency and more direct routes for Lynx. Long wait times and numerous link transfers mean traveling by Lynx is too impractical for many. Residents that cannot afford a private car and rely on public transportation see hours of their lives lost every week to insufficient transit. Infrastructure improvements, including increased rolling stock, expanded routes, and dedicated bus lanes can change this.

With many commuters traveling into Orange County, traffic congestion is a serious issue. With improved SunRail frequency and expanded service into evenings and weekends, including an East-West corridor, connectivity without traffic can be a reality.

It is essential that the vote for the transportation sales tax referendum be included on the ballot. The Orlando area ranks as the most dangerous area for pedestrians, and one of the worst for cyclists. If these measures are not taken, things will only continue to get worse.

Can I count on you to vote to place the transportation sales tax referendum on the ballot this election year?

Thank you,
<Your Name>
<Your Address>`

  return (
    <div className={styles.action}>
      <img src="/graphics/bulb.png" className={styles.bulb}/>
      <h3 className={styles.heading}>How Do We Fix Traffic?</h3>
      <p>
        <span className={styles.subheading}>Fewer cars on the road.</span> <br />
        Traffic congestion is at its worst at peak usage. If we can halve the amount of cars on the highway during your commute, the drive just got a whole lot easier.
      </p>
      <img src="/graphics/car-red.png" className={styles.car} />
      <p>
        <span className={styles.subheading}>More ways to get around.</span> <br />
        Fewer people are forced to drive if other
        means of transportation are available. Being able to walk to the grocery store,
        ride a bike to the park, and take a bus to work means less cars on the road, and a better commute for you.
      </p>
      <img src="/graphics/bus-green.png" className={styles.bus} />
      <p>
        <span className={styles.subheading}>To do this, we need better infrastructure.</span> <br />
        Lynx buses should come once every 15 or 30 minutes, not once every one or two hours. In busy areas, buses should be separated from cars, so you don&apos;t get caught behind a bus at a stop. SunRail should serve the evenings weekends, so no one has to deal with I4 traffic. Bike lanes need to be separate from car lanes, so cyclists don&apos;t hold up traffic.
      </p>
      <img src="/graphics/bus-lane.png" className={styles.buslane}/>
      <p className={styles.caption}>
        Bus lanes are a cheap but very effective way of increasing bus efficiency
        and preventing bus stop-related traffic.
      </p>
      <h3 className={styles.heading}>How You Can Help</h3>
      <p>
        The Orange County Board of County Commissioners voted to include the
        {" "}<strong>Orange County Transportation Initiative </strong> on the November 2022 ballot for residents
        to vote on. It is up to us to ensure it passes. Here is how you can help.
      </p>
      <div className={styles.waystohelp}>
        <Expandable id="register" defaultState={autoExpand == "awareness"} title="Register to Vote">
          <p>
          To be able to vote for the transportation initiative this <strong>November 8, 2022</strong>, it is important to verify your voter registration status, and register to vote if you are not yet.
          </p>
          <div style={{textAlign: "center", margin: "2rem 0"}}>
            <a className={styles.calltoaction} href="https://registration.elections.myflorida.com/en/CheckVoterStatus" target="_blank" rel="noreferrer">Check My Voter Registration</a>
          </div>
          <p>
            It is essential that we let our family and friends know about the difference we can make with our community&apos;s
            transportation systems. Make sure they are registered to vote as well.
          </p>
        </Expandable>
        <Expandable id="awareness" defaultState={autoExpand == "awareness"} title="Inform Your Community">
          <p>
            It&apos;s essential that more Orange County residents are aware of the Orange County Transportation Initiative. It is our opportunity to transform transportation, alleviating traffic, increase public safety, and increase access to jobs.
          </p>
          <p>Here are some links that you can share with your community:</p>
          <ul className={styles.links}>
            <li>
              <a target="_blank" rel="noreferrer" href="https://www.orangecountyfl.net/TrafficTransportation/TransportationInitiative.aspx">
                OrangeCountyFL.net - Transportation Initiative
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://centralfloridiansforpublictransit.org">
                CentralFloridiansForPublicTransit.org
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://orlandobikes.org">
                OrlandoBikes.org
              </a>
            </li>
            <li>
              <a href="https://endorlandotraffic.org">
                EndOrlandoTraffic.org
              </a>
            </li>

          </ul>
          <div style={{margin: "3rem 0", textAlign: "center"}}>
            <a target="_blank" rel="noreferrer" className={styles.calltoaction} href={"https://twitter.com/intent/tweet?" + tweetParams}>Tweet about EndOrlandoTraffic.org!</a>
          </div>
        </Expandable>
        <Expandable id="contact" defaultState={autoExpand == "contact"}  title="Contact Your County Representatives">
          <p>
            Getting involved at the county level is vital. Calling or emailing can help. Below is a template you can use in your email. Copy the template, filling in your name and address at the end, and email it to Mayor Demings and all of the Commissioners listed below.
          </p>
          <div className={styles.center}>
            <p className={styles.template}>
              Dear Mayor Demings and Commissioners,<br/><br/>
              The Orange County Transportation Initiative is essential for the future of our county and our city.
              Our population is rising fast, and traffic congestion is getting worse. Orange County is severely lacking in public transit, and this is our opportunity to change that. Infrastructure improvements
              for Orange County that include Lynx and Sunrail service improvements and expansion,
              better pedestrian and cyclist safety, and better road safety are needed now.<br /> <br />
              Orange County needs higher frequency and more direct routes for Lynx. Long wait
              times and numerous link transfers mean traveling by Lynx is too impractical for many. Residents that cannot afford a private car and rely on public transportation see hours of their lives lost every week to insufficient transit. Infrastructure improvements, including  increased rolling stock, expanded routes, and dedicated bus lanes can change this.
              <br /> <br />
              With many commuters traveling into Orange County, traffic congestion
              is a serious issue. With improved SunRail frequency and expanded service into
              evenings and weekends, including new corridors, connectivity without
              traffic can be a reality.
              <br /> <br />
              It is essential that the transportation sales tax referendum passes this year
              on the ballot. The Orlando area ranks as the most dangerous area
              for pedestrians, and one of the worst for cyclists. If these measures are
              not taken, things will only continue to get worse.
              <br />
              <br />
              Can I count on you to endorse this ballot measure in your community?
              <br />
              <br />
              Thank you, <br />
              {"<Your Name>"}<br />
              {"<Your Address>"}<br />
            </p>
            <CopyButton textToCopy={copyText} text="Copy Template" />
          </div>
          <p className={styles.contactinfo}>
            <span className={styles.commissioner}>
              Orange County Mayor - Jerry L. Demings 
            </span> <br />
            <a href="mailto:mayor@ocfl.net">mayor@ocfl.net</a> <br />
            (407) 836-7370
          </p>
          <p className={styles.contactinfo}>
            <span className={styles.commissioner}>
              District 1 - Nicole H. Wilson
            </span> <br />
            <a href="mailto:district1@ocfl.net">district1@ocfl.net</a><br />
            (407) 836-7350 <br />
            Twitter: <a href="https://twitter.com/NicoleWilsonD1">@NicoleWilsonD1</a> <br />
          </p>
          <p className={styles.contactinfo}>
            <span className={styles.commissioner}>
              District 2 - Christine Moore
            </span> <br />
            <a href="mailto:district2@ocfl.net">district2@ocfl.net</a><br />
            (407) 836-7350 <br />
            Twitter: <a href="https://twitter.com/OCFLDistrict2">@OCFLDistrict2</a> <br />
          </p>
          <p className={styles.contactinfo}>
            <span className={styles.commissioner}>
              District 3 - Mayra Uribe
            </span> <br />
            <a href="mailto:district3@ocfl.net">district3@ocfl.net</a><br />
            (407) 836-5140
          </p>
          <p className={styles.contactinfo}>
            <span className={styles.commissioner}>
              District 4 - Maribel Gomez Cordero
            </span> <br />
            <a href="mailto:district4@ocfl.net">district4@ocfl.net</a><br />
            (407) 836-7350 <br />
            Twitter: <a href="https://twitter.com/OCFLDistrict4">@OCFLDistrict4</a> <br />
          </p>
          <p className={styles.contactinfo}>
            <span className={styles.commissioner}>
              District 5 - Emily Bonilla
            </span> <br />
            <a href="mailto:district5@ocfl.net">district5@ocfl.net</a><br />
            (407) 836-7350 <br />
            Twitter: <a href="https://twitter.com/Comm_Bonilla">@Comm_Bonilla</a> <br />
          </p>
          <p className={styles.contactinfo}>
            <span className={styles.commissioner}>
              District 6 - Victoria P. Siplin
            </span> <br />
            <a href="mailto:district6@ocfl.net">district6@ocfl.net</a> <br />
            (407) 836-5860
          </p>
        </Expandable>
      </div>
    </div>
  )
}
